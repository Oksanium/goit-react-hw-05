import s from "./Reviews.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../../../moviesAPI";

export default function Reviews() {
  const { movieId } = useParams();
  const [revs, setRevs] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { results },
        } = await getReviews(movieId);
        setRevs(results);
      } catch {}
    })();
  }, [movieId]);

  if (!revs.length) return <p>No reviews yet.</p>;
  return (
    <div className={s.reviews}>
      <ul>
        {revs.map((elem) => {
          return (
            <li key={elem.id} className={s.card}>
              <h4 className={s.author}>{elem.author}</h4>
              <p>{elem.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
