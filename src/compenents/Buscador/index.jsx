import {FaSearch} from "react-icons/fa"
import "./Buscador.css"
const Buscador = ({busca, setBusca, buscador}) => {

   return(
      <form className='form' onSubmit={buscador}>
            <input 
               type='text' 
               className="input" 
               placeholder="Digite o nome do personagem" 
               value={busca} 
               onChange={(evento) => setBusca(evento.target.value)}
            />
            <button className="btnSearch" type="submit">
               <FaSearch size={30}/>
            </button>
        </form>
   )
}

export default Buscador;