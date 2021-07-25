import create from 'zustand'
import Note from '../types/Note'
import { nanoid } from 'nanoid'

type NoteState = {
	currentNoteIndex: number,
	notes: Note[],
	isEditing: boolean,
	addNote: (title: string) => void,
	deleteNote: (id: string) => void,
	editNote: (note: Note) => void,
	setNoteIndex: (index: number) => void,
	toggleMode: () => void,
	saveToLocalStorage: () => void,
	loadFromLocalStorage: () => void,
}

const useNotes = create<NoteState>((set, get) => ({
	currentNoteIndex: 0,
	notes: [{
		title: "Hello, Note",
		content: "You can basically enter anything here.",
		id: nanoid(),
	}] as Note[],
	isEditing: true,
	addNote: (title: string) => set(state => ({notes: [...state.notes, {id: nanoid(), title, content: ""}]})),
	deleteNote: (id: string) => set(state => ({notes: state.notes.filter(x => x.id !== id)})),
	editNote: (note: Note) => set(state => ({notes: state.notes.map(x => x.id === note.id ? note : x)})),
	setNoteIndex: (index: number) => set(state => ({currentNoteIndex: index})),
	toggleMode: () => set(state => ({isEditing: !(state.isEditing)})),
	saveToLocalStorage: () => {
		const state = get()
		const savedState = {currentNoteIndex: state.currentNoteIndex, notes: state.notes}
		const localStorge = window.localStorage
		localStorge.setItem('state', JSON.stringify(savedState))
		console.log(localStorge.getItem('state'))
	},
	loadFromLocalStorage: () => set(_state => {
		const loadedState: NoteState = JSON.parse(localStorage.getItem('state') || '')
		return loadedState
	}),

}))

export default useNotes