import "./Cabecalho.css";
import {BsFileEarmarkCodeFill, BsGithub} from 'react-icons/bs';
import logo from "../../imagens/logorickmorty.png"

export default function Cabecalho () {
   return(
      <header className="cabecalho">
         <img className="logo" src={logo} alt="Logo rick and morty" />
         <h1 className="titulo">Rick and Morty Library</h1>
         <ul className="lista">
            <li className="itens"><a href="https://github.com/bruno-gonzalez/rickmorty-consumo-api"> View in github <BsGithub size={30} /></a></li>
            <li className="itens"><a href="https://rickandmortyapi.com/"> Visit API <BsFileEarmarkCodeFill size={30} /> </a></li>
         </ul>
      </header>
   )
}