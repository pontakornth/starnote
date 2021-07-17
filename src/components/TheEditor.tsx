import React from 'react'
import useNotes from '../stores/note'
import styles from './TheEditor.module.css'

const TheEditor = () => {
	const noteState = useNotes();
	return (
	<div className={styles.theEditor}>
		<div className="tabs">
			<div className="tab">Edit</div>
			<div className="tab">Preview</div>
		</div>
		<div className={styles.editorContent}>
			<h2>{noteState.notes[noteState.currentNoteIndex].title}</h2>
			{noteState.notes[noteState.currentNoteIndex].content}
		</div>
	</div>
)}

export default TheEditor