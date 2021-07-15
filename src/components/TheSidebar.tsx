import React from 'react'
import styles from './TheSidebar.module.css'

const TheSidebar = () => (
	<div className={styles.theSidebar}>
		<h1>Starnote</h1>
		<ul className={styles.noteList}>
			<li>
				<a href="#">Javascript is the best</a>
			</li>
			<li>
				<a href="#">TypeScript is better</a>
			</li>
			<li><a href="#">Python is beast</a></li>
			<li><a href="#">Ruby is butter</a></li>
			<li><a href="#">Tools</a></li>
		</ul>
	</div>
)

export default TheSidebar