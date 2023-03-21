import "./Card.css";

export default function Card({nome, status, specie, img, loc}) {
   return(
      <div className="card">
         <img src={img} alt={nome}/>
         <h2 className="nome">{nome}</h2>
         <p className="texto__secundario">Espécie: {specie}</p>
         <p className="texto__secundario">Status: {status}</p>
         <p className="texto__secundario">Localização: {loc}</p>
      </div>
   )
}