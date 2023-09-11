import { useState } from 'react'
import './App.css'
import Navber from './components/Navber'
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {
  const [ishover,setIshover] = useState(false)
  return (
<div>
<Navber ishover={ishover} setIshover={setIshover}/>
<Home setIshover={setIshover}/>
<Footer/>
</div>
  )
}

export default App
