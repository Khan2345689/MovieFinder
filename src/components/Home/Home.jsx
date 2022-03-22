import axios from "axios";
import { useState } from "react";
import Search from "../Search/Search";
import Title from "../Title/Title";
import MovieList from "./MovieList/MovieList";

const Home = () => {
  const [Moviedata, setMoviedata] = useState([]);

  const handlesearch = async (mName) => {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=29ed3676&s=${mName}`
    );
    console.log(data);
    setMoviedata(data.Search);
  };

  return (
    <>
      <Title />
      <Search handlesearch={handlesearch} />
      <MovieList Moviedata={Moviedata} />
    </>
  );
};

export default Home;
