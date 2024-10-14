
import homer from './assets/imagens/homer.gif'
import gifs from './assets/imagens/gifs_sao_legais.gif'
import viola from './assets/imagens/guitarrinha.jpg'
import './App.css'
function App() {
  let nome = "Paulo"
  let idade = "22"

  return (
    <>
      <h1>Olá mundo!</h1>
      <img src={guitarra} alt="guitarra" />
      {nome} = {typeof(nome)}
      <br />
      {idade} = {typeof(idade)}
    </>
  )
}

export default App