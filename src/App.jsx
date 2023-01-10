import './App.css'
import { Card } from './components/card'
import NavBar from './components/navbar'

function App() {
  return (
    <div className="App">
       <NavBar/>
       <h1 className='titulo-principal'>Formulário de Desenvolvedor</h1>
       <Card/>
    </div>
  )
}

export default App