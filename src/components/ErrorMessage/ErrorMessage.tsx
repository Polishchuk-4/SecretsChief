import style from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <div className={style.text}>
      Sorry, an error occurred with this request. Please Try another value
    </div>
  );
}
