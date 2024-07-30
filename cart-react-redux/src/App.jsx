
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
import Hero from './components/Hero';
import Specials from './components/Specials';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom"
import { Style } from '@mui/icons-material';


function App() {
  return (

    <>

      <NavBar />
      <Routes>
        <Route path='/' element={<>  <Hero /> <Cards /> <Specials /> <Footer /> </>} />
        <Route path='/cart/:id' element={< CardsDetails />} />
      </Routes>

    </>

  )
}

export default App
