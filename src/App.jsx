
import { useState } from 'react'
import './App.css'

function App() {
  const [Cadastro, SetCadastro] = useState({
    id: 0,
    nome:'',
    email:''
  })

  const [showElement, setShowElement] = useState(false)
  function showOrHide(e) {
    setShowElement(true)
    e.preventDefault()
  }

  function ChangeName(e){
    SetCadastro({
    ...Cadastro,
    nome: e.target.value
    });
  } 

  function ChangeEmail(e){
    SetCadastro({
    ...Cadastro,
    email: e.target.value
    });
  }


  return (
    <>
      <div>
        <form>

          <label>Nome:</label>
            <input 
              placeholder='Digite o nome' 
              value={Cadastro.nome} 
              onChange={ChangeName}>
            </input>

          <label>Email:</label>
            <input
              placeholder='Digite o email' 
              type='email'    
              value={Cadastro.email} 
              onChange={ChangeEmail}>
            </input>


          <button onClick={showOrHide}>Atualizar Cadastro</button>
          
          {showElement ? <h3>ID: {Cadastro.id+1} Nome: {Cadastro.nome} Email: {Cadastro.email}</h3> : null}
          </form>
       </div> 
    </>
  )
}

export default App
