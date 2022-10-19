import './styles.css';

import Card from '../../Componentes/Card';

function Home() {
  return (
    <div className='container'>
    <h1>Lista de Presença</h1>
    <input type="text" placeholder="Digite o nome..." />
    <button type="button">Adicionar</button>
    
    <Card name="Rodrigo" time="10:55:25"/>
    <Card name="Joao" time="12:05:22"/>
    <Card />
    </div>
  )
}

export default Home
