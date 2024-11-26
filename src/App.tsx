import './styles/global.scss'

import { FC, Suspense, lazy } from 'react'
import {
	BrowserRouter,
	Route,
	BrowserRouter as Router,
	Routes,
} from 'react-router-dom'

const HomePage = lazy(() => import('./pages/Home/Home'))
const basename = '/job-search-tools'

const App: FC = () => {
	return (
		<div className='job-search-tools'>
			<a
				className='sr-only'
				href='#main-content'
			>
				Skip to main content
			</a>
			<BrowserRouter basename={basename}>
				<main
					className='main'
					id='main-content'
					role='main'
				>
					<Suspense fallback={<div className='ellipses'>Loading</div>}>
						<Routes>
							<Route
								element={<HomePage />}
								path='/'
							/>
						</Routes>
					</Suspense>
				</main>
			</BrowserRouter>
		</div>
	)
}

export default App
