import { useState } from 'react'
import './App.css'
import Myform from './components/MyForm'

function App() {


  return (

    <div className='App'>

      <h2>Forms</h2>

      <Myform user={{name:"Joao",email: "joao@gmail.com", bio: "Doido", role:"admin"}} />

    </div>
    
  )
}

export default App
