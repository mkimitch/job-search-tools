import './Home.scss'

import { FC, useEffect, useState } from 'react'

const Home: FC = () => {
	const [inputs, setInputs] = useState({
		companyName: '',
		hiringManagerName: '',
		jobTitle: '',
		yourExperience: localStorage.getItem('yourExperience') || '',
		yourField: localStorage.getItem('yourField') || '',
		yourName: localStorage.getItem('yourName') || '',
	})

	useEffect(() => {
		localStorage.setItem('yourExperience', inputs.yourExperience)
		localStorage.setItem('yourField', inputs.yourField)
		localStorage.setItem('yourName', inputs.yourName)
	}, [inputs.yourExperience, inputs.yourField, inputs.yourName])

	const handleInputChange = (e: { target: { name: any; value: any } }) => {
		const { name, value } = e.target
		setInputs({ ...inputs, [name]: value })
	}

	const generateMessage = () => {
		return `Dear ${inputs.hiringManagerName},

I hope this message finds you well. My name is ${inputs.yourName}, and I recently applied for the ${inputs.jobTitle} position at ${inputs.companyName}. I'm reaching out to express my enthusiasm for the role and to introduce myself briefly.

With over ${inputs.yourExperience} years of experience in ${inputs.yourField}, I believe I would be a strong contributor to your team. I'm particularly excited about the opportunity to work at ${inputs.companyName} and contribute to your ongoing success.

I would greatly appreciate any updates you may have on my application, or if there are any additional details you'd need from me. I look forward to the opportunity to contribute to ${inputs.companyName} and would be happy to discuss my application further at your convenience.

Thank you for your time and consideration.

Best regards,
${inputs.yourName}`
	}

	return (
		<div className='App'>
			<h2>Generate Job Application Follow-Up</h2>
			<div className='form-group'>
				<label>Hiring Manager Name:</label>
				<input
					type='text'
					name='hiringManagerName'
					value={inputs.hiringManagerName}
					onChange={handleInputChange}
				/>
			</div>
			<div className='form-group'>
				<label>Company Name:</label>
				<input
					type='text'
					name='companyName'
					value={inputs.companyName}
					onChange={handleInputChange}
				/>
			</div>
			<div className='form-group'>
				<label>Job Title:</label>
				<input
					type='text'
					name='jobTitle'
					value={inputs.jobTitle}
					onChange={handleInputChange}
				/>
			</div>
			<div className='form-group'>
				<label>Your Name:</label>
				<input
					type='text'
					name='yourName'
					value={inputs.yourName}
					onChange={handleInputChange}
				/>
			</div>
			<div className='form-group'>
				<label>Your Experience (in years):</label>
				<input
					type='number'
					name='yourExperience'
					value={inputs.yourExperience}
					onChange={handleInputChange}
				/>
			</div>
			<div className='form-group'>
				<label>Your Field:</label>
				<input
					type='text'
					name='yourField'
					value={inputs.yourField}
					onChange={handleInputChange}
				/>
			</div>
			<button onClick={() => navigator.clipboard.writeText(generateMessage())}>
				Generate & Copy Message
			</button>
			<div className='output'>
				<h3>Generated Message:</h3>
				<pre>{generateMessage()}</pre>
			</div>
		</div>
	)
}

export default Home
