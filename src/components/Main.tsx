import React, { useState, useEffect } from "react";

import { products } from "../../interface/interface";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import styles from "../styles/product.module.css";
import Card from "./Card";
import { useGetAllProductsQuery } from "../../redux/Services/ProductApi";
import { ClipLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../../redux/features/productSlice";
import { AiOutlineTable, AiOutlineMenu } from "react-icons/ai";
const Main = () => {

  const dispatch = useDispatch();
  const productDATA = useSelector((state: any) => state.product.data);

// gettting all the products by redux 
  const { data, error, isLoading } = useGetAllProductsQuery("");


  // setting the data to the redux reducer to access this data in all components
  useEffect(() => {
    dispatch(addProducts(data?.products));
  }, [data]);

  return (
    <>
      {isLoading ? (
        <div className={styles.loading}>
          <ClipLoader
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className={styles.productsWrapper}>
          {productDATA?.map((item: any, index: any) => {
            return <Card item={item} key={index} />;
          })}
        </div>
      )}
    </>
  );
};

export default Main;
