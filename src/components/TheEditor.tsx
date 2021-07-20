import React from 'react'
import useNotes from '../stores/note'
import styles from './TheEditor.module.css'
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {vscDarkPlus as dark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import { NormalComponents, SpecialComponents } from 'react-markdown/src/ast-to-react'

const components: Partial<NormalComponents & SpecialComponents> = {
	code({node, inline, className, children, ...props}) {
	const match = /language-(\w+)/.exec(className || '')
		return !inline && match ? (
		<SyntaxHighlighter style={dark} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
		) : (
		<code className={className} {...props}>
			{children}
		</code>
		)
	}
}

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
				placeholder="Title here."
			>
			</input>
			<textarea
			    value={noteState.notes[noteState.currentNoteIndex].content}
				onChange={handleChangeContent}
				className={styles.contentInput}
				placeholder="Content here"
			>
			</textarea>
			</>
			) : (
				<>
				<h1>{noteState.notes[noteState.currentNoteIndex].title}</h1>
				<ReactMarkdown components={components}>
					{noteState.notes[noteState.currentNoteIndex].content}
				</ReactMarkdown>
				</>
			)}
		</div>
	</div>
)}

export default TheEditor