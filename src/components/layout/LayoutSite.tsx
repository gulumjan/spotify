import React, { FC, ReactNode } from "react";
import scss from "./Layout.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Media from "./sidebar/Media";
interface LayoutSiteProps {
  children: ReactNode;
}

const LayoutSite: FC<LayoutSiteProps> = ({ children }) => {
  return (
    <div className={scss.LayoutSite}>
      <Header />
      <div className={scss.content}>
        <div className={scss.Media}>
          <Media />
        </div>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutSite;
