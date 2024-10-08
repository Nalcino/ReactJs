import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './assets/components/header'
import Home from './assets/components/Home'
import Rodape from './assets/components/rodape'
import Escocia from './assets/components/Escocia'
import Grand from './assets/components/grand'
import Muralha from './assets/components/Muralha'
import Aruba from './assets/components/Aruba'
import './App.css'

function App() {


  return (
    <>
      <Router>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='Escocia' element={<Escocia />} />
            <Route path='Grand' element={<Grand />} />
            <Route path='Muralha' element={<Muralha />} />
            <Route path='Aruba' element={<Aruba />} />
        </Routes>
        <Rodape />
      </Router>
    </>
  )
}

export default App
