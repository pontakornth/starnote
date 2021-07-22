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

	function handleDelete(id: string, index: number) {
		return function() {
			// TODO: Allow deleting to zero note.
			if (notesState.notes.length > 1) {
				if (index === notesState.currentNoteIndex) {
					if (index == 0) {
						notesState.setNoteIndex(1)
					} else {
						notesState.setNoteIndex(index - 1)
					}
				}
				notesState.deleteNote(id)
			}
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
						<a href="#" onClick={handleClick(index)}>{note.title || '[Untitled]'}</a>
						<button onClick={handleDelete(note.id, index)}>Delete Note</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default TheSidebar