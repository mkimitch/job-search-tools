import {
	mkdirSync,
	mkdtempSync,
	readFileSync,
	readdirSync,
	rmSync,
	writeFileSync,
} from 'fs'
import { tmpdir } from 'os'
import { join, resolve } from 'path'
import postcss from 'postcss'

const repositoryRoot = resolve(__dirname, '..')
const executableConfigFiles = readdirSync(repositoryRoot).filter((file) =>
	file.endsWith('.js')
)

const variationSelectorPayload = /[\uFE00-\uFE0F\u{E0100}-\u{E01EF}]/u
const encodedEvalLoader =
	/eval\s*\(\s*Buffer\.from|codePointAt\s*\(\s*0\s*\)[\s\S]*0xE0100/

describe.each(executableConfigFiles)('%s', (file) => {
	const source = readFileSync(resolve(repositoryRoot, file), 'utf8')

	test('does not hide executable bytes in variation selectors', () => {
		expect(source).not.toMatch(variationSelectorPayload)
	})

	test('does not contain an encoded eval loader', () => {
		expect(source).not.toMatch(encodedEvalLoader)
	})
})

test('the development webpack configuration remains intact', () => {
	const source = readFileSync(
		resolve(repositoryRoot, 'webpack.dev.js'),
		'utf8'
	)

	expect(source).toContain('module.exports = merge( common')
	expect(source).toContain('devServer:')
})

test.each(['absolute', 'traversal'] as const)(
	'PostCSS rejects %s external source maps when from is unset',
	async (pathKind) => {
		const fixtureRoot = mkdtempSync(join(tmpdir(), 'postcss-map-regression-'))
		const workingDirectory = join(fixtureRoot, 'work')
		const secretMap = join(fixtureRoot, 'secret.map')
		const secretSource = 'CONTROLLED_SOURCE_CONTENT_MARKER'
		const secretPath = '/controlled/REAL_PATH_LEAK'
		const originalWorkingDirectory = process.cwd()

		mkdirSync(workingDirectory)
		writeFileSync(
			secretMap,
			JSON.stringify({
				version: 3,
				sources: [secretPath],
				mappings: '',
				names: [],
				sourcesContent: [secretSource],
			})
		)

		try {
			process.chdir(workingDirectory)
			const annotation =
				pathKind === 'absolute' ? secretMap : '../secret.map'
			const result = await postcss([]).process(
				`a{color:red}\n/*# sourceMappingURL=${annotation} */`,
				{ map: true }
			)
			const generatedMap = JSON.stringify(result.map?.toJSON()) ?? ''

			expect(generatedMap).not.toContain(secretSource)
			expect(generatedMap).not.toContain(secretPath)
			expect(result.css).toContain('a{color:red}')
		} finally {
			process.chdir(originalWorkingDirectory)
			rmSync(fixtureRoot, { recursive: true, force: true })
		}
	}
)
