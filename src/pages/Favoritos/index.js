import { useEffect, useState } from "react";
import "./style.css"
import { Link } from "react-router-dom";

function Favoritos() {

  const [filmes, setFilmes] = useState([])

  useEffect(() => {

    const minhalista = localStorage.getItem("@primeflix")
    //convertendo para um array
    setFilmes(JSON.parse(minhalista) || [])

  }, [])

  return( 
    <div className="meus-filmes">
      <h1>Meus filmes</h1>

      <ul>
        {
          filmes.map((item) => {
            return(
              <li key={item.id}>
                <span>{item.title}</span>

                <div>
                  <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                  <button>Excluir</button>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default Favoritos;