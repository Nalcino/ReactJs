
import homer from './assets/imagens/homer.gif'
import gifs from './assets/imagens/gifs_sao_legais.gif'
import './App.css'


function App() {

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={homer} className='homer' alt="React logo" />
        </a>
      </div>
      <h1>Testando o meu primeiro app em REACT_JS</h1>
      <img src={gifs} className='gifs' alt="" />
      
    </>
  )
}

export default App
