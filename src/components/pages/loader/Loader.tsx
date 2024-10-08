import React, { FC } from "react";
import scss from "./Loader.module.scss";

interface LoaderType {
  className?: any;
}

const Loader: FC<LoaderType> = ({ className }) => {
  return (
    <div className={scss.loader}>
      <div className={scss.infinityChrome}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
