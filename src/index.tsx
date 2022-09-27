import React, { createContext } from 'react'
import ReactDom from 'react-dom'
import Layout from './components/layout/Layout'
import Routes from './components/routes/Routes'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import * as firebase from 'firebase/app'

firebase.initializeApp({
	apiKey: 'AIzaSyDeZnrBAiqacGB7zx-NHVfT6sImmkbsE4g',
	authDomain: 'contact-app-1fc86.firebaseapp.com',
	projectId: 'contact-app-1fc86',
	storageBucket: 'contact-app-1fc86.appspot.com',
	messagingSenderId: '1071347376540',
	appId: '1:1071347376540:web:73d9c4077445e12eae2859',
})

ReactDom.render(
	<React.StrictMode>
		<BrowserRouter>
			<Layout>
				<Routes />
			</Layout>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)
