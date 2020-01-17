import React, { useState, useEffect } from 'react';
import api from './service/api'

import './global.css'
import './App.css'
import './sidebar.css'
import './main.css'
import DevItem from './service/components/DevItens/index'
import DevForm from './service/components/DevForm'
 
 

//componente: bloco isolado de html, css, e js o qual nao ineterfere na aplicacao
//estado: 
//propriedade: informacoes que um componente pai passa para o componente filho

function App() {
  const [devs, setDevs] = useState([])


  useEffect(() => {
    async function loadDevs(){
      const response = await api.get('/devs')
      
      setDevs(response.data)
    }
    loadDevs()

  }, []);
   

  async function handleAddDev(data) {
    
    const response = await api.post('/devs', data)
    
    setDevs([...devs, response.data])
  }



  return(
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
        
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev}/>
            
          ))} 
        </ul>

      </main>
    </div>
  );
    
}

export default App;
