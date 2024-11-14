import { FormEvent } from "react";

import { useNavigate, useSearchParams } from "react-router-dom";

import Icon from "../Icon/Icon";
import style from "./SearchBar.module.css";

import toast, { Toaster } from "react-hot-toast";

export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const topic = (form.elements.namedItem("topic") as HTMLInputElement).value;

    if (topic.trim() === "") {
      toast("Please, input value.", {
        icon: "ℹ️",
      });
      return;
    }

    setSearchParams({ query: topic });

    navigate(`/recipes/searchByName?query=${topic}`, { replace: true });

    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={style.form}>
        <button type="submit" className={style.btn}>
          <Icon icon="search" size="20px" color="#2d2013" />
        </button>
        <input
          className={style.input}
          type="text"
          name="topic"
          autoComplete="off"
          autoFocus
          placeholder="Find dish"
        />
      </form>
      <Toaster />
    </>
  );
}
