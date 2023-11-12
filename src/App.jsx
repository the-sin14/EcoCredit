import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BankNavbar } from './components/BankNavbar'
import { BankSidePanel } from './components/BankSidePanel'

function App() {
  return (
    <>
      <BankNavbar/>
      <BankSidePanel/>
    </>
  )
}

export default App
