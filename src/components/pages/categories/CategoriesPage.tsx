"use client";
import { useGetCategoriesQuery } from "@/redux/api/categories";
import scss from "./CategoriesPage.module.scss";
import LookForTracks from "@/components/shared/LookForTracks";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
const CategoriesPage = () => {
  const { data } = useGetCategoriesQuery();
  return (
    <>
      <div className={scss.CategoriesPage}>
        <div className={scss.search}>
          <div className={scss.searchInput}>
            <form className={scss.search1}>
              <Link href={""}>
                <IoSearchOutline />
              </Link>
              <LookForTracks />
            </form>
          </div>
        </div>
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
