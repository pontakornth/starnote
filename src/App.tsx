import React from 'react'
import TheEditor from './components/TheEditor'
import TheSidebar from './components/TheSidebar'
import styles from './App.module.css'

function App() {

  return (
    <div className={styles.App}>
      <TheSidebar />
      <TheEditor />
    </div>
  )
}

export default App
