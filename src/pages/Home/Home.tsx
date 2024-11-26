import './Home.scss'

import { ChangeEvent, FC, useEffect, useState } from 'react'

type InputFields = {
	companyName: string
	hiringManagerName: string
	jobTitle: string
	yourExperience: string
	yourField: string
	yourName: string
}

const placeholderData = {
	hiringManagerNames: [
		'Emilio',
		'Emily',
		'Gandalf the Grey',
		'George',
		'Harry',
		'Henrietta',
		'Jane Doe',
		'John',
		'Katniss Everdeen',
		'Luke Skywalker',
		'Mark',
		'Michael Johnson',
		'Mickey Mouse',
		'Optimus Prime',
		'Pablo',
		'Paul',
		'Ringo',
		'Tom',
	],
	companyNames: [
		'Acme Corp',
		'Aperture Science',
		'Bluth Company',
		'Cyberdyne Systems',
		'Dunder Mifflin',
		'Global Solutions',
		'Google',
		'Initech',
		'Monsters, Inc.',
		'Netflix',
		'NextGen Industries',
		'Planet Express',
		'Prestige Worldwide',
		'Rivian',
		'Stark Industries',
		'Tech Innovators',
		'The Krusty Krab',
		'Umbrella Corporation',
		'Wayne Enterprises',
		'Weyland-Yutani',
	],
	jobTitles: [
		'Chief Galactic Overlord',
		'Chief Meme Officer',
		'Delivery Person',
		'Dragon Trainer',
		'Front-end Developer',
		'Frontend Wizard',
		'Galactic Empire Developer',
		'Head of Shenanigans',
		'Lead Dinosaur Wrangler',
		'Lord of the Algorithms',
		'Master of Coin',
		'Pixel Pusher',
		'Potion Master',
		'Product Manager',
		'Senior Front-end Engineer',
		'Software Engineer',
		'UX Designer',
	],
	yourNames: [
		'Alice Brown',
		'Bruce Wayne',
		'Clark Kent',
		'Frodo Baggins',
		'Harry Potter',
		'Hermione Granger',
		'Jane Smith',
		'Leia Organa',
		'Mark Johnson',
		'Samwise Gamgee',
		'The Doctor',
		'Tom Clark',
		'Tony Stark',
		'Waldo (good luck finding me)',
	],
	yourFields: [
		'Data Analysis',
		'Dragon Lore Analysis',
		'Espionage and Secret Keeping',
		'Hobbitry and Computation',
		'Intergalactic Relations',
		'Lightsaber Engineering',
		'Magical Research & Development',
		'Potion Brewing & Spellcasting',
		'Product Management',
		'Software Development',
		'Spaceship Engineering',
		'Time Travel Theory',
		'UX Design',
		'Web3 Magic',
	],
	yourExperiences: [
		'∞',
		'1 (but it was intense)',
		'10',
		'13 (but with a TARDIS)',
		'3 (dog)',
		'3',
		'42',
		'5',
		'7',
		'9000',
		'too many',
	],
}

const getRandomPlaceholder = (array: string[]) => {
	return array[Math.floor(Math.random() * array.length)]
}

const Home: FC = () => {
	const [inputs, setInputs] = useState<InputFields>({
		companyName: '',
		hiringManagerName: '',
		jobTitle: '',
		yourExperience: localStorage.getItem('yourExperience') || '',
		yourField: localStorage.getItem('yourField') || '',
		yourName: localStorage.getItem('yourName') || '',
	})

	const [placeholders, setPlaceholders] = useState({
		hiringManagerName: '',
		companyName: '',
		jobTitle: '',
		yourName: '',
		yourExperience: '',
		yourField: '',
	})

	useEffect(() => {
		setPlaceholders({
			hiringManagerName: getRandomPlaceholder(
				placeholderData.hiringManagerNames
			),
			companyName: getRandomPlaceholder(placeholderData.companyNames),
			jobTitle: getRandomPlaceholder(placeholderData.jobTitles),
			yourName: getRandomPlaceholder(placeholderData.yourNames),
			yourExperience: getRandomPlaceholder(placeholderData.yourExperiences),
			yourField: getRandomPlaceholder(placeholderData.yourFields),
		})
	}, [])

	useEffect(() => {
		localStorage.setItem('yourExperience', inputs.yourExperience)
		localStorage.setItem('yourField', inputs.yourField)
		localStorage.setItem('yourName', inputs.yourName)
	}, [inputs.yourExperience, inputs.yourField, inputs.yourName])

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setInputs({ ...inputs, [name]: value })
	}

	const generateMessage = () => {
		const getValueOrPlaceholder = (
			field: keyof InputFields,
			placeholder: string
		) =>
			inputs[field]
				? `<span class="value">${inputs[field]}</span>`
				: `<span class="placeholder">${placeholder}</span>`

		return (
			`Dear ${getValueOrPlaceholder(
				'hiringManagerName',
				placeholders.hiringManagerName
			)},\n\n` +
			`I hope this message finds you well. My name is ${getValueOrPlaceholder(
				'yourName',
				placeholders.yourName
			)}, and I recently applied for the ` +
			`${getValueOrPlaceholder(
				'jobTitle',
				placeholders.jobTitle
			)} position at ${getValueOrPlaceholder(
				'companyName',
				placeholders.companyName
			)}. ` +
			`I'm reaching out to express my enthusiasm for the role and to introduce myself briefly.\n\n` +
			`With over ${getValueOrPlaceholder(
				'yourExperience',
				placeholders.yourExperience
			)} years of experience in ` +
			`${getValueOrPlaceholder(
				'yourField',
				placeholders.yourField
			)}, I believe I would be a strong contributor to your team. ` +
			`I'm particularly excited about the opportunity to work at ${getValueOrPlaceholder(
				'companyName',
				placeholders.companyName
			)} ` +
			`and contribute to your ongoing success.\n\n` +
			`I would greatly appreciate any updates you may have on my application, or if there are any additional details you'd need from me. ` +
			`I look forward to the opportunity to contribute to ${getValueOrPlaceholder(
				'companyName',
				placeholders.companyName
			)} ` +
			`and would be happy to discuss my application further at your convenience.\n\n` +
			`Thank you for your time and consideration.\n\n` +
			`Best regards,\n${getValueOrPlaceholder(
				'yourName',
				placeholders.yourName
			)}`
		)
	}

	const generatePlainTextMessage = () => {
		const plainText = generateMessage()
		return plainText.replace(/<[^>]*>/g, '')
	}

	return (
		<div className='App'>
			<h2>Generate Job Application Follow-Up</h2>
			<div className='form-group'>
				<label>Hiring Manager Name:</label>
				<input
					name='hiringManagerName'
					onChange={handleInputChange}
					placeholder={`e.g., ${placeholders.hiringManagerName}`}
					type='text'
					value={inputs.hiringManagerName}
				/>
			</div>
			<div className='form-group'>
				<label>Company Name:</label>
				<input
					name='companyName'
					onChange={handleInputChange}
					placeholder={`e.g., ${placeholders.companyName}`}
					type='text'
					value={inputs.companyName}
				/>
			</div>
			<div className='form-group'>
				<label>Job Title:</label>
				<input
					name='jobTitle'
					onChange={handleInputChange}
					placeholder={`e.g., ${placeholders.jobTitle}`}
					type='text'
					value={inputs.jobTitle}
				/>
			</div>
			<div className='form-group'>
				<label>Your Name:</label>
				<input
					name='yourName'
					onChange={handleInputChange}
					placeholder={`e.g., ${placeholders.yourName}`}
					type='text'
					value={inputs.yourName}
				/>
			</div>
			<div className='form-group'>
				<label>Your Experience (in years):</label>
				<input
					name='yourExperience'
					onChange={handleInputChange}
					placeholder={`e.g., ${placeholders.yourExperience}`}
					type='text'
					value={inputs.yourExperience}
				/>
			</div>
			<div className='form-group'>
				<label>Your Field:</label>
				<input
					name='yourField'
					onChange={handleInputChange}
					placeholder={`e.g., ${placeholders.yourField}`}
					type='text'
					value={inputs.yourField}
				/>
			</div>
			<button
				onClick={() =>
					navigator.clipboard.writeText(generatePlainTextMessage())
				}
			>
				Generate & Copy Message
			</button>
			<div className='output'>
				<h3>Generated Message:</h3>
				<pre dangerouslySetInnerHTML={{ __html: generateMessage() }}></pre>
			</div>
		</div>
	)
}

export default Home
