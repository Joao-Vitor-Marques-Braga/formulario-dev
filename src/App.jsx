import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar'

function App() {
  return (
    <div className="App">
       <NavBar/>
       <div className='titulo'>
        <h1>Formulário de Desenvolvedor</h1>
       </div>
       <div className='card'>
        <div className='infos'>
          <h1>Informações Pessoais</h1>
          <span>Nome:</span>
          <input type="text" name="nome" placeholder='Digite seu Nome:' />
          <span>E-mail:</span>
          <input type="email" name="email" placeholder='Digite seu E-mail:' />
        </div>

        <div className='nivel'>
          <h1>Nível de experiência</h1>
          <div>
            <select id="nivel">
              <option selected disabled value={''}>Nível de experiência</option>
              <option>Junior</option>
              <option>Pleno</option>
              <option>Senior</option>
            </select>
          </div>
        </div>

        <div className='especialização'>
          <h2>Qual sua especialização como desenvolvedor?</h2>
          <label>
          <input type="radio" name="Dev" value={"frontend"}/>Front-End
          </label>
          <label>
            <input type="radio" name="Dev" value={"backend"}/>Back-End
          </label>
          <label>
            <input type="radio" name="Dev" value={"fullstack"}/>Full Stack
          </label>

          <div className='tecnologias'>
            <h1>Suas tecnologias favoritas</h1>
            <label>
              <input type="checkbox" name="tecnologias"/>Java
            </label>
            <label>
              <input type="checkbox" name="tecnologias"/>Java Script
            </label>
            <label>
              <input type="checkbox" name="tecnologias"/>Python
            </label>
            <label>
              <input type="checkbox" name="tecnologias"/>C#
            </label>
            <label>
              <input type="checkbox" name="tecnologias"/>C
            </label>
            <label>
              <input type="checkbox" name="tecnologias"/>C++
            </label>
            <label>
              <input type="checkbox" name="tecnologias"/>HTML
            </label>
            <label>
              <input type="checkbox" name="tecnologias"/>CSS
            </label>

            <div className='experiencias'>
              <h1>Descreva suas experiências como desenvolvedor</h1>
              <div>
                <textarea name="descrição" id="desc" cols="90" rows="15"></textarea>
              </div>

              <div className='enviar'>
                <button type="submit">Enviar Formulário</button>
              </div>
            </div>
          </div>  
        </div> 
       </div>
    </div>
  )
}

export default App