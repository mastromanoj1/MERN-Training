
import './App.css'
import Products from './components/dynamic-route/Products';
// import Products from './components/Products';
import Aboutpage from './components/react-route/Aboutpage';
import Contactpage from './components/react-route/Contactpage';
import Homepage from './components/react-route/Homepage';
import Nav from './components/react-route/Nav'
import {BrowserRouter as Router ,Routes, Route } from 'react-router-dom';




function App() {


  return (
    <>
      <div className='header'>
         <header> Flipkart</header>
         {/* <Products/> */}
         {/* <Router>
         <Nav/>
         <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/about' element={<Aboutpage/>} />
            <Route path='/contact' element={<Contactpage/>} />
         </Routes>        
         </Router> */}
         
         <Router>
          <Routes>
            <Route path='/' element= {<Products/>}/>
            <Route path="/product/:id" element={"Hi"}/>
          </Routes>

         </Router>

      </div>
    </>
  )
}

export default App
