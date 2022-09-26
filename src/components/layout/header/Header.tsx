import React, { FC, useState } from 'react'
import { Search } from '@mui/icons-material'
import styles from './Header.module.css'

const Header: FC = () => {
	const [isSearchActive, setIsSetActive] = useState(false)

	return (
		<header className={styles.header}>
			<div className={styles['image-wrapper']}>
				<img
					src='https://th.bing.com/th/id/OIF.wo30GM2X3OZSdQ0vcH2qTg?w=178&h=180&c=7&r=0&o=5&pid=1.7'
					alt=''
					placeholder='search'
				/>
			</div>
			<div className={styles.wrapper}>
				{!isSearchActive && <Search />}

				<input
					type='text'
					placeholder='Search'
					onClick={() => setIsSetActive(true)}
				/>
			</div>
		</header>
	)
}

export default Header
