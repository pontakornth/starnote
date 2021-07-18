import React, { useState, ChangeEvent } from 'react'
import styles from './TheSidebar.module.css'
import useNotes from '../stores/note'

const TheSidebar = () => {
	const notesState = useNotes()
	const [title, setTitle] = useState("")
	function handleChangeTitle(e: ChangeEvent<HTMLInputElement>) {
		setTitle(e.target.value)
	}
	function addNote() {
		if (title.length > 0) {
			notesState.addNote(title)
		}
	}

	function handleClick(index: number) {
		return function() {
			notesState.setNoteIndex(index)
		}
	}
	return (
		<div className={styles.theSidebar}>
			<h1 className={styles.title}>Starnote</h1>
			<input className={styles.titleInput} type="next" name="note-title" value={title} onChange={handleChangeTitle} />
			<button className={styles.addButton} onClick={addNote}>Add</button>
			<ul className={styles.noteList}>
				{notesState.notes.map((note, index) => (
					<li key={note.id}>
						<a href="#" onClick={handleClick(index)}>{note.title}</a>
					</li>
				))}
			</ul>
		</div>
	)
}

export default TheSidebar