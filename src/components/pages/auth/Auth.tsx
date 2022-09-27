import { Alert, Button, ButtonGroup, Grid, TextField } from '@mui/material'
import React, { FC, SyntheticEvent, useState } from 'react'
import { IUserData } from './types'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const Auth: FC = () => {
	const [error, setError] = useState('')
	const [isRegForm, setIsRegForm] = useState(false)
	const [userData, setUserData] = useState<IUserData>({
		email: '',
		password: '',
	} as IUserData)

	const handleLogin = async (e: SyntheticEvent<HTMLFormElement>) => {
		e.preventDefault()

		const auth = getAuth()

		if (isRegForm) {
			try {
				const user = await createUserWithEmailAndPassword(
					auth,
					userData.email,
					userData.password
				)
				console.log(user)
			} catch (error: any) {
				error.message && setError(error.message)
			}
		} else {
			console.log('auth')
		}

		setUserData({
			email: '',
			password: '',
		})
		console.log(userData.email, userData.password)
	}

	return (
		<>
			{error && (
				<Alert severity='error' style={{ marginBottom: 20 }}>
					{error}
				</Alert>
			)}
			<Grid display='flex' justifyContent='center' alignItems='center'>
				<form onSubmit={handleLogin}>
					<TextField
						type='email'
						label='Email'
						variant='outlined'
						value={userData.email}
						onChange={(e) =>
							setUserData({ ...userData, email: e.target.value })
						}
						sx={{ display: 'block', marginBottom: 3 }}
						required
					/>
					<TextField
						type='password'
						label='Password'
						variant='outlined'
						value={userData.password}
						onChange={(e) =>
							setUserData({ ...userData, password: e.target.value })
						}
						sx={{ display: 'block', marginBottom: 3 }}
						required
					/>

					<ButtonGroup variant='outlined'>
						<Button type='submit' onClick={() => setIsRegForm(false)}>
							Auth
						</Button>
						<Button type='submit' onClick={() => setIsRegForm(true)}>
							Register
						</Button>
					</ButtonGroup>
				</form>
			</Grid>
		</>
	)
}

export default Auth
