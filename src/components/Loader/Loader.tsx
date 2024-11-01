import { Circles } from "react-loader-spinner";

import style from "./Loader.module.css";

import React from "react";

export default function Loader(): React.ReactElement {
  return (
    <div className={style.loader}>
      <Circles
        height="130px"
        width="130px"
        color="#d57d1f"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
