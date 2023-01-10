import React from 'react'
import './style.css'

export const Card = () => {
  return (
    <div className='card'>
        <div className='titulo-infos-pessoais'>
            <h1>Informações Pessoais</h1>
        </div>
        <div className='infos-pessoais'>
            <span>Nome:<input type="text" name="nome" placeholder='Nome:'/></span>
            <span>E-mail:<input type="email" name="email" placeholder='E-mail:' /></span>
        </div>
        <div className='titulo-nivel-exp'>
            <h1>Nível de Experiência</h1>
        </div>
        <div className='nivel-exp'>
            <select name="exp" id="">
                <option selected value={''}>Nível de Experiência</option>
                <option>Junior</option>
                <option>Pleno</option>
                <option>Sênior</option>
            </select>
        </div>
        <div className='titulo-especializacao'>
            <h1>Qual sua especialização como desenvolvedor?</h1>
        </div>
        <div className='especializacao'>
            <label><input type="radio" name='dev' value={'front'}/>Front-End</label>
            <label><input type="radio" name='dev' value={'back'}/>Back-End</label>
            <label><input type="radio" name='dev' value={'full'}/>Full-Stack</label>
        </div>
        <div className='tecnologias-favorirtas'>
            <h1>Suas tecnologias favoritas</h1>
        </div>
        <div className='tecnologias'>
            <label><input type="checkbox"/>JavaScript</label>
            <label><input type="checkbox"/>C</label>
            <label><input type="checkbox"/>C++</label>
            <label><input type="checkbox"/>C#</label>
            <label><input type="checkbox"/>.NET</label>
            <label><input type="checkbox"/>Java</label>
            <label><input type="checkbox"/>Python</label>
        </div>
        <div className='descricao-exp'>
            <h1>Descreva suas experiências como desenvolvedor</h1>
        </div>
        <div className='desc-exp'>
            <textarea></textarea>
        </div>
    </div>
  )
}
