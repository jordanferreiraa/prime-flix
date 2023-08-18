import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./style.css"
import api from "../../services/api";

function Filmes() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState({});

  useEffect(() => {
    async function loadFilme() {
      await api.get(`/movie/${id}`, {
        params: {
          api_key: "097d3a03886efefeb5fba5ae3fa0e616",
          language: "pt-BR", 
        }
      })
      .then((response) => {
        setFilme(response.data);
        setLoading(false);
      })
      .catch(() => {
        console.log("FILME NÃO ENCONTRADO");
        navigate("/", { replace: true });
      })
    }

    loadFilme();


    return () => {
      console.log("COMPONENTE FOI DESMONTADO")
    }
  }, [navigate, id])

  if(loading){
    return(
      <div className="filme-info">
        <h1>Carregando detalhes...</h1>
      </div>
    )
  }

  return( 
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

      <h3>Sinoptse</h3>
      <span>{filme.overview}</span>
      <strong>Avaliação: {filme.vote_average.toFixed(1)} / 10</strong>

      <div className="area-buttons">
        <button>Salvar</button>
        <button>
          <a href={`https://youtube.com/results?search_query=${filme.title} trailer`} target="_blank" rel="noreferrer">
            Trailer
          </a>
        </button>
      </div>

    </div>
  );
}

export default Filmes;