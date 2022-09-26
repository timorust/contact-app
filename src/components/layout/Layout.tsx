import React, { FC } from 'react'
import { Grid } from '@mui/material'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'
import Home from '../../components/pages/home/Home'

type Props = {
	children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Header />
			<Grid container spacing={2} paddingX={5} marginTop={2}>
				<Grid item md={3}>
					<Sidebar />
				</Grid>
				<Grid item md={9}>
					{children}
				</Grid>
			</Grid>
		</>
	)
}

export default Layout
