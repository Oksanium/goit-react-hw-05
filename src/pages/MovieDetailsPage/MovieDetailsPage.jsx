import s from "./MovieDetailsPage.module.css";
import { useEffect, useState, useRef } from "react";
import { getSingleMovie } from "../../../moviesAPI";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

export default function MovieDetailsPage() {
  const location = useLocation();
  const { movieId } = useParams();

  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await getSingleMovie(movieId);
        setData(data);
      } catch {}
    })();
  }, [movieId]);

  const goBackRef = useRef(location.state || "/");

  if (!data) return <p>Loading...</p>;
  const genres = data.genres;
  const imgUrl = "https://image.tmdb.org/t/p/w500/" + data.backdrop_path;

  return (
    <div>
      <div className={s.container}>
        <Link to={goBackRef.current} className={s.goback}>
          Go back
        </Link>
        <img src={imgUrl} alt="movie poster" className={s.img} />
        <div className={s.descr}>
          <h1 className={s.movieTitle}>{data.title}</h1>
          <h4 className={s.label}>genres: </h4>
          <p>
            {!genres.length
              ? "no data"
              : genres
                  .map((genre) => {
                    return genre.name;
                  })
                  .join(", ")}
          </p>
          <h4 className={s.label}>overview: </h4>
          <p>{data.overview}</p>
          <h4 className={s.label}>user score: </h4>
          <p>{data.vote_average}</p>
        </div>
      </div>
      <nav className={s.nav}>
        <NavLink to="cast" state={location.state} className={buildLinkClass}>
          Cast
        </NavLink>
        <NavLink to="reviews" state={location.state} className={buildLinkClass}>
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
