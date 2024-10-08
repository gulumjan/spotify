"use client";
import { useGetCategoriesQuery } from "@/redux/api/categories";
import scss from "./CategoriesPage.module.scss";
const CategoriesPage = () => {
  const { data } = useGetCategoriesQuery();
  return (
    <>
      <div className={scss.CategoriesPage}>
        <div className="container">
          <div className={scss.content}>
            {data?.categories.items.map((el, index) => (
              <div key={index} className={scss.categories}>
                <img src={el.icons[0].url || "/default-image.png"} alt="" />
                <h1>{el.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesPage;
