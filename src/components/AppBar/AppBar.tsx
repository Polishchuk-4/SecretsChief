import Logo from "../Logo/Logo";
import style from "./AppBar.module.css";
import cn from "classnames";

const cnHeader = cn(style.header, "container");

export default function AppBar() {
  return (
    <header className={cnHeader}>
      <Logo />
    </header>
  );
}
