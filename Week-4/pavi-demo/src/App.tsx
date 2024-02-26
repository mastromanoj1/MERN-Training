import { useState } from 'react'
import {Aboutpage,Lastpage} from './components/Pages/Aboutpage'
import Homepage from './components/Pages/Homepage'
import {BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom'


function Contactpage() {
  return(
    <h1> Contact Page</h1>
  )
}

function App() {
  const [count, setCount] = useState(0)

  
  return (
    <>
  
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/about' element={<Aboutpage/>}/>
          <Route path='/contact' element={<Contactpage/>}/>
          <Route path='/last' element={<Lastpage/>}/>
        </Routes>
      </Router>
    
  
    </>
    
  )
}

export default App
