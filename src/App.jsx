import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Cadastro, SetCadastro] = useState({nome:'',email:''})
  const [showElement, setShowElement] = useState(false)
  const showOrHide = () => setShowElement(true)

  function setNome(novoNome){
    SetCadastro(...Cadastro, nome= novoNome)
  }
  function setEmail(novoEmail){
    SetCadastro(...Cadastro, email= novoEmail)
  }


  return (
    <>
      <div>
        <form>
          <label>Nome:</label>
            <input 
              placeholder='Digite o nome' 
              value={Cadastro.nome} 
              onChange={(e) => setNome(e.target.value)}>
            </input>
          
          <label>Email:</label>
            <input
              placeholder='Digite o email' 
              type='email'    
              value={Cadastro.email} 
              onChange={(e) => setEmail(e.target.value)}>
            </input>


          <button onClick={showOrHide}>Atualizar Cadastro</button>
          </form>
          {showElement ? <h3>Nome: {Cadastro.nome} Email: {Cadastro.email}</h3> : null}
        
       </div> 
    </>
  )
}

export default App
