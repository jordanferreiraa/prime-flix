import { useEffect, useState } from "react";
import api from '../../services/api';

function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {

    async function loadFilmes() {
      const response = await api.get("/movie/now_playing", {
        params: {
          api_key: "097d3a03886efefeb5fba5ae3fa0e616",
          language: "pt-BR",
          page: 1,
        }
      })

      console.log(response.data.results);

    }

    loadFilmes();

  }, [])

  return ( 
    <h1>Home</h1>
   );
}

export default Home;