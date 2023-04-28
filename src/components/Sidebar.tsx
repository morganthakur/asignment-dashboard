import React, { useState, useEffect } from "react";
import styles from "../styles/Sidebar.module.css";
import { products } from "../../interface/interface";

import {
  getAllCategories,
  getProductByBrand,
  getProductsByCategory,
} from "../../api/axios";
import { addProducts } from "../../redux/features/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllProductsQuery } from "../../redux/Services/ProductApi";

const Sidebar = () => {
  const dispatch = useDispatch();

  // -----------------------------getting the all the products array from redux-------------------------
  const products = useSelector((state: any) => state.product.data);

  const [maxPrice, setmaxPrice] = useState("");
  const [category, setCategory] = useState([]);

  // -------------------------------fetching the products by categoires------------------------------

  const handleCategory = (e: any) => {
    if (e.target.value) {
      getProductsByCategory(e.target.value).then((res) => {
        dispatch(addProducts(res?.products));
      });
    } else {
      dispatch(addProducts(products));
    }
  };

  //---------------------------- fetching the products by brand name------------------------------

  const handleBrand = (e: any) => {
    if (e.target.value) {
      getProductByBrand(e.target.value).then((res) => {
        dispatch(addProducts(res?.products));
      });
    }
  };

  //------------------------- getting the brands here---------------------------

  const { data, error, isLoading } = useGetAllProductsQuery("");

  //----------------------- getting all the categories here-----------------------

  useEffect(() => {
    getAllCategories()
      .then((res) => {
        setCategory(res);
      })
      .catch((error) => {
        error;
      });
  }, []);

  //--------------------------- handling the price here-------------------------------------
  const handlePrice = (e: any) => {
    setmaxPrice(e.target.value);
    const result = data?.products?.filter((item: products) => {
      return item.price <= e.target.value;
    });
    dispatch(addProducts(result));
  };

  // ----------------------handling sorting here--------------------- --

  const handleSort = (e: any) => {
    if (e.target.value) {
   if(e.target.value==='asc'){
        const myArray = [...data?.products];
        const result = myArray.sort((a, b) => {
          return a.id - b.id;
        });
         dispatch(addProducts(result));
   }

    if (e.target.value === "dsc") {
         const myArray = [...data?.products];
         const result = myArray.sort((a, b) => {
           return b.id - a.id;
         });

         dispatch(addProducts(result))
    }
      
    
    }
  };

  



  return (
    <>
      <div className={styles.sideWrapper}>
        <h5>Sort by</h5>
        <select name="" id="" onChange={handleSort}>
          <option value="">Sort</option>
          <option value="dsc">Dscending</option>
          <option value="asc">Ascending</option>
        </select>
        <div>
          <h5>Price</h5>
          <input
            type="range"
            name=""
            id=""
            min={12}
            max={1749}
            onChange={handlePrice}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>12</span>
            <span> {maxPrice ? maxPrice : "0"} </span>
            <span>1749</span>
          </div>
        </div>
        <div>
          <h5>Category</h5>
          <select name="" id="" onChange={handleCategory}>
            <option value="">All</option>
            {category.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <h5>Brand</h5>
          <select name="" id="" onChange={handleBrand}>
            <option value="">Brand</option>

            {data?.products?.map((item: any, index: any) => {
              return (
                <option key={index} value={item?.brand}>
                  {item?.brand}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
