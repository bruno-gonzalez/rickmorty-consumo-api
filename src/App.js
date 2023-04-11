import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './compenents/Card';
import Cabecalho from './compenents/Cabecalho';
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from 'react-icons/bs'
import Buscador from './compenents/Buscador';

function App() {

const [personagens, setPersonagens] = useState([]);
const [proximaPag, setProximaPag] = useState('');
const [anteriorPag, setAnteriorPag] = useState('');
const [busca, setBusca] = useState('');

useEffect(() => {
   axios.get(`https://rickandmortyapi.com/api/character/`)
   .then(resposta => {
      console.log(resposta)
      setPersonagens(resposta.data.results)
      setProximaPag(resposta.data.info.next)
      setAnteriorPag(resposta.data.info.prev)
      }
   )
   .catch(erro => console.log(erro))
}, []);

const nextUrl = () => {
   axios.get(proximaPag)
   .then(resposta => {
      setPersonagens(resposta.data.results)
      setProximaPag(resposta.data.info.next)
      setAnteriorPag(resposta.data.info.prev)
      }
   )
   .catch(erro => console.log(erro))
   window.scrollTo(0,0);
}

const prevUrl = () => {
   axios.get(anteriorPag)
   .then(resposta => {
      setPersonagens(resposta.data.results)
      setProximaPag(resposta.data.info.next)
      setAnteriorPag(resposta.data.info.prev)
      }
   )
   .catch(erro => console.log(erro))
   window.scrollTo(0,0);
}

const buscador = (name, evento) => {
   evento.preventDefault()
   axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`)
   .then(resposta => setPersonagens(resposta.data.results))
   .catch(erro => console.log(erro))
   setBusca("")
}

  return (
    <div className="App">
      <Cabecalho />
      <div className='container__input'>
            <Buscador busca={busca} setBusca={setBusca} buscador={(evento) => buscador(busca, evento)}/>
      </div>
      
      <main className='personagens__container'>
      {personagens.map(personagem => (
         <Card
            img={personagem.image}
            nome={personagem.name}
            specie={personagem.species}
            status={personagem.status}
            key={personagem.id}
            loc={personagem.location.name}
         />
      )
      )}
      </main>
      <div>
      {anteriorPag && 
         <button onClick={prevUrl} className='botaoPages'>
            <BsArrowLeftSquareFill size={30}/> 
         </button>
      }
      {proximaPag && 
         <button onClick={nextUrl} className='botaoPages'>
            <BsArrowRightSquareFill size={30} />
         </button>
      }
      </div>
    </div>
  );
}

export default App;
