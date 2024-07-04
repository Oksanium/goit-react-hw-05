import { Link, useLocation } from "react-router-dom";
import s from "./MovieListItem.module.css";

export default function MovieListItem({ title, movieId }) {
  const location = useLocation();
  return (
    <div>
      <Link to={`/movies/${movieId}`} state={location}>
        {title}
      </Link>
    </div>
  );
}
