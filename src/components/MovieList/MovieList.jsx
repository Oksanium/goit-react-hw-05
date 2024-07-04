import s from "./MovieList.module.css";
import MovieListItem from "../MovieListItem/MovieListItem";

export default function MovieList({ results }) {
  return (
    <ul className={s.list}>
      {results.map((movie) => {
        return (
          <li key={movie.id}>
            <MovieListItem title={movie.title} movieId={movie.id} />
          </li>
        );
      })}
    </ul>
  );
}
