import { useEffect, useState } from "react";
import MovieListItem from "../../components/MovieListItem/MovieListItem";
import { getTrendingMovies } from "../../../moviesAPI";
import s from "./Home.module.css";
import MovieList from "../../components/MovieList/MovieList";

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { results },
        } = await getTrendingMovies();
        setTrendingMovies(results);
      } catch {}
    })();
  }, []);

  return (
    <div>
      <h2>Trending Movies</h2>
      <MovieList results={trendingMovies} />
    </div>
  );
}
