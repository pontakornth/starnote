import React, { useEffect } from 'react'
import TheEditor from './components/TheEditor'
import TheSidebar from './components/TheSidebar'
import styles from './App.module.css'
import useNotes from './stores/note'

function App() {
  const loadFromLocalStorage = useNotes(state => state.loadFromLocalStorage)
  useEffect(() => {
    loadFromLocalStorage()
  }, [])

  return (
    <div className={styles.App}>
      <TheSidebar />
      <TheEditor />
    </div>
  )
}

export default App
