import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './assets/components/Header'
import Footer from './assets/components/Footer'
import Bloco1 from './assets/components/Bloco1'
import Bloco2 from './assets/components/Bloco2'
import Bloco3 from './assets/components/Bloco3'
import Bloco4 from './assets/components/Bloco4'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Bloco1 />} />
          <Route path='Bloco1' element={<Bloco1 />} />
          <Route path='Bloco2' element={<Bloco2 />} />
          <Route path='Bloco3' element={<Bloco3 />} />
          <Route path='Bloco4' element={<Bloco4 />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
