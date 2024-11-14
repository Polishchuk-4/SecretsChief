import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import style from "./AppBar.module.css";
import cn from "classnames";

const cnHeader = cn(style.header, "container");

const cnLink = ({ isActive }: { isActive: boolean }) =>
  cn(style.link, { [style.active]: isActive });

export default function AppBar() {
  return (
    <header className={cnHeader}>
      <Logo />
      <div className={style.row}>
        <NavLink to={"/recipes"} className={cnLink}>
          Recipes
        </NavLink>
        <SearchBar />
      </div>
    </header>
  );
}
