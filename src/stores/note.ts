import create from 'zustand'
import Note from '../types/Note'
import { nanoid } from 'nanoid'

type NoteState = {
	currentNoteIndex: 0,
	notes: Note[],
	addNote: (title: string) => void,
	deleteNote: (id: string) => void,
	editNote: (note: Note) => void,
}

const useNotes = create<NoteState>((set) => ({
	currentNoteIndex: 0,
	notes: [{
		title: "Hello, Note",
		content: "You can basically enter anything here.",
		id: nanoid(),
	}] as Note[],
	addNote: (title: string) => set(state => ({notes: [...state.notes, {id: nanoid(), title, content: ""}]})),
	deleteNote: (id: string) => set(state => ({notes: state.notes.filter(x => x.id !== id)})),
	editNote: (note: Note) => set(state => ({notes: state.notes.map(x => x.id === note.id ? note : x)}))
}))

export default useNotes