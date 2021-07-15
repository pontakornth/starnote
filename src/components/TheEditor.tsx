import React from 'react'
import styles from './TheEditor.module.css'

const TheEditor = () => (
	<div className={styles.theEditor}>
		<div className="tabs">
			<div className="tab">Edit</div>
			<div className="tab">Preview</div>
		</div>
		<div className={styles.editorContent}>
			rrr
		</div>
	</div>
)

export default TheEditor