
import './App.css'
// import Products from './components/dynamic-route/Products';
// import Productshow from './components/dynamic-route/Productshow';
import Products from './components/Products';
import Reducer from './components/pages/Reducer';
import Aboutpage from './components/react-route/Aboutpage';
import Contactpage from './components/react-route/Contactpage';
import Homepage from './components/react-route/Homepage';
import Nav from './components/Nav'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';




function App() {


  return (
    <>
      <div className='header'>
        <header> Flipkart</header>
  
   
        {/* <Products /> */}
        <Router>

          <Nav />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/about' element={<Aboutpage />} />
            <Route path='/product' element={ <Products /> } />
            <Route path='/reducer' element={<Reducer />} />
          </Routes>
        </Router>

        {/* <Router>
          <Routes>
            <Route path='/' element= {<Products/>}/>
            <Route path="/product/:id" element={<Productshow/>}/>
          </Routes>

         </Router> */}

      </div>
    </>
  )
}

export default App
