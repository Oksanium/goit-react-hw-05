import s from "./Cast.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PersonCard from "../PersonCard/PersonCard";
import { getCast } from "../../../moviesAPI";

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { cast },
        } = await getCast(movieId);
        setCast(cast);
      } catch {}
    })();
  }, [movieId]);

  if (!cast) return <p>Loading...</p>;
  return (
    <div>
      <ul className={s.list}>
        {cast.map((elem) => {
          return (
            <li key={elem.id}>
              <PersonCard info={elem} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
