import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './compoment/Header/Header'
import Footer from './compoment/Footer/Footer'
import Note from './compoment/Note/Note'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Header/>
    <Note/>
    <Footer/>
    </div>
  )
}

export default App