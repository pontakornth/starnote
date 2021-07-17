import React from 'react'
import useNotes from '../stores/note'
import styles from './TheEditor.module.css'

const TheEditor = () => {
	const noteState = useNotes();
	function handleChangeTitle(e: React.ChangeEvent<HTMLHeadingElement>) {
		const currentNote = noteState.notes[noteState.currentNoteIndex]
		console.log("edi")
		noteState.editNote({...currentNote, title: e.target.innerHTML})
	}

	function handleChangeContent(e: React.ChangeEvent<HTMLDivElement>){
		const currentNote = noteState.notes[noteState.currentNoteIndex]
		noteState.editNote({...currentNote, content: e.target.innerHTML})
	}
	return (
	<div className={styles.theEditor}>
		<div className="tabs">
			<div className="tab">Edit</div>
			<div className="tab">Preview</div>
		</div>
		<div className={styles.editorContent}>
			<h2 
				dangerouslySetInnerHTML={{__html: noteState.notes[noteState.currentNoteIndex].title}}
				onBlur={handleChangeTitle}
				contentEditable={true}
			>
			</h2>
			<div className="content"
			    dangerouslySetInnerHTML={{__html: noteState.notes[noteState.currentNoteIndex].content}}
				onBlur={handleChangeContent}
				contentEditable={true}
			>
			</div>
		</div>
	</div>
)}

export default TheEditor