import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";
import Sidebar from "@/components/Sidebar";
import Main from "@/components/Main";
import Header from "@/components/Header";
import { useGetAllProductsQuery } from "../../redux/Services/ProductApi";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../../redux/features/productSlice";

const index = () => {
  return (
    <>
      <div className={styles.mainWrapper}>
        <div className={styles.headerWrapper}>
          <Header />
        </div>
        <div className={styles.homeWrapper}>
          <div className={styles.left}>
            <Sidebar />
          </div>
          <div className={styles.right}>
            <Main />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
