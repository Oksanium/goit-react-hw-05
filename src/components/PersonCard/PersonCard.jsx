import s from "./PersonCard.module.css";

export default function PersonCard({ info }) {
  const imgUrl = "https://image.tmdb.org/t/p/w500/" + info.profile_path;
  return (
    <div className={s.card}>
      <img src={imgUrl} alt="portrait" className={s.img} />
      <p className={s.name}>{info.name}</p>
      <p className={s.label}>character: </p>
      <p className={s.character}>{info.character}</p>
    </div>
  );
}
