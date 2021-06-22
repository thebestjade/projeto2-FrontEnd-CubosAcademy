import { useState, useEffect } from "react";
import Header from "./components/header";
import logo from "./assets/images/logo.svg";
import avatar from "./assets/images/avatar.jpg";
import CardsContainer from "./components/card-container";
import Carrinho from "./components/carrinho";

import "./App.css";

function App() {
  const [topFilmes, setTopFilmes] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filmesFiltrados, setfilmesFiltrados] = useState(null);
  const [filmes, setFilmes] = useState([]);
  const [filmesNoCarrinho, setFilmesNoCarrinho] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setCarregando(true);

    const filtrados = filmes.filter((filme) =>
      filme.title.includes(searchValue)
    );

    setfilmesFiltrados(filtrados);
  }

  useEffect(() => {
    filmesFiltrados?.length >= 0 && setCarregando(false);
  }, [filmesFiltrados]);

  useEffect(() => {
    if (filmes.length > 0) {
      const [filme1, filme2, filme3, filme4, filme5] = filmes;
      setTopFilmes([filme1, filme2, filme3, filme4, filme5]);
    }
  }, [filmes]);

  useEffect(() => {
    async function handleFetch() {
      try {
        const response = await fetch(
          "https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR"
        );
        const { results } = await response.json();
        const data = results.map(
          ({ id, title, poster_path, vote_average, price }) => ({
            id,
            title,
            poster_path,
            vote_average,
            price,
          })
        );
        setFilmes(data);
        console.log(data)
        setErro("");
      } catch (e) {
        setErro(e.message);
      }
    }

    handleFetch();
  }, []);

  const handleAddMovie = (filme) => {

    const filmeEncontrado = filmesNoCarrinho.find((f) => f.id === filme.id);
    if (filmeEncontrado) {
      filmeEncontrado.quantidade++;
      setFilmesNoCarrinho([...filmesNoCarrinho])
    } else {
      const novoFilme = { ...filme };
      novoFilme.quantidade = 1;
      setFilmesNoCarrinho([...filmesNoCarrinho, novoFilme]);
    }
  };

  const handleRemoveMovie = (filme) => {
    const filmeEncontrado = filmesNoCarrinho.find((f) => f.id === filme.id);
    const demaisFilmes = filmesNoCarrinho.filter((f) => f.id !== filme.id);

    if (filmeEncontrado) {
      if(filmeEncontrado.quantidade > 1){
        filmeEncontrado.quantidade--;
        setFilmesNoCarrinho([...filmesNoCarrinho])
      }else{
        setFilmesNoCarrinho([...demaisFilmes])
      }
    }
  };


  return (
    <div className="app">
      <Header
        logo={logo}
        altLogo="Cubos Flix"
        cumprimento="Bem vinda, Jade"
        avatar={avatar}
        altAvatar="Jade"
        inputValue={searchValue}
        setInputValue={setSearchValue}
        submit={handleSubmit}
      />
      <div className="body">
        {carregando && <span>Carregando...</span>}
        {erro && <span style={{ color: "red" }}>Error: {erro}</span>}
        {topFilmes.length > 0 && (
          <CardsContainer
            mainTitulo="Top Filmes"
            listaDeFilmes={topFilmes}
            handleAddMovie={handleAddMovie}
          />
        )}
        {filmes.length > 0 && (
          <CardsContainer
            mainTitulo="Filmes"
            listaDeFilmes={filmesFiltrados || filmes}
            handleAddMovie={handleAddMovie}
          />
        )}
        {filmesFiltrados?.length === 0 && <span>Nada encontrado</span>}
        <Carrinho filmesNoCarrinho={filmesNoCarrinho} handleAddMovie={handleAddMovie} handleRemoveMovie={handleRemoveMovie}/>
      </div>
    </div>
  );
}

export default App;
