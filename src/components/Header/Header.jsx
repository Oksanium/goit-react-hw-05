import { Link } from "react-router-dom";
import s from "./Header.module.css";

export default function Header() {
  return (
    <header className={s.header}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
    </header>
  );
}
