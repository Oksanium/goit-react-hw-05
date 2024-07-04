import s from "./Movies.module.css";
import { useEffect, useState } from "react";
import { searchMovies } from "../../../moviesAPI";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

export default function Movies() {
  const [results, setResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get("query");
    if (query === null) return;
    (async () => {
      try {
        const {
          data: { results },
        } = await searchMovies(query);
        setResults(results);
      } catch {}
    })();
  }, [searchParams]);

  async function handleSubmit(evt) {
    evt.preventDefault();
    const query = evt.target.elements.input.value;
    setSearchParams(query ? { query } : {});
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit} className={s.form}>
        <input
          type="text"
          name="input"
          id=""
          placeholder="find movie..."
          className={s.input}
        />
        <button type="submit" className={s.btn}>
          Search
        </button>
      </form>
      <MovieList results={results} />
    </div>
  );
}
