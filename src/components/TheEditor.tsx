import React from 'react'
import useNotes from '../stores/note'
import styles from './TheEditor.module.css'
import ReactMarkdown from 'react-markdown'
import { note } from 'vfile-message'

const TheEditor = () => {
	const noteState = useNotes();
	const isEditing = useNotes(state => state.isEditing);
	function handleChangeTitle(e: React.ChangeEvent<HTMLInputElement>) {
		const currentNote = noteState.notes[noteState.currentNoteIndex]
		noteState.editNote({...currentNote, title: e.target.value})
	}

	function handleChangeContent(e: React.ChangeEvent<HTMLTextAreaElement>){
		const currentNote = noteState.notes[noteState.currentNoteIndex]
		noteState.editNote({...currentNote, content: e.target.value})
	}

	return (
	<div className={styles.theEditor}>
		<div className={styles.tabs}>
			<div onClick={noteState.toggleMode} className={styles.tab}>{isEditing ? 'Edit' : 'Preview'}</div>
		</div>
		<div className={`${styles.editorContent} ${isEditing ? styles.isEditing : ''}`}>
			{isEditing ? (
				<>
			<input 
				type="text"
				onChange={handleChangeTitle}
				value={noteState.notes[noteState.currentNoteIndex].title}
				className={styles.titleInput}
			>
			</input>
			<textarea
			    value={noteState.notes[noteState.currentNoteIndex].content}
				onChange={handleChangeContent}
				className={styles.contentInput}
			>
			</textarea>
			</>
			) : (
				<>
				<h1>{noteState.notes[noteState.currentNoteIndex].title}</h1>
				<ReactMarkdown>
					{noteState.notes[noteState.currentNoteIndex].content}
				</ReactMarkdown>
				</>
			)}
		</div>
	</div>
)}

export default TheEditor