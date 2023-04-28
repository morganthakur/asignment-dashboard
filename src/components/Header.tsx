import React, { useState } from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link";
import { addProducts } from "../../redux/features/productSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const productDATA = useSelector((state:any) => state.product.data);
  const dispatch = useDispatch();
  const [value, setvalue] = useState("");
  const [flag, setFlag] = useState(false);

//--------- handling the search here --------------------
  const handleChange = (e: any) => {
   if(e.target.value){
     setvalue(e.target.value);

     const result = productDATA?.filter((item: any) => {
       return item.title.toLowerCase().includes(value.toLowerCase());
     });

     dispatch(addProducts(result));
   }
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Dashboard</Link>
      </div>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search here"
          onChange={handleChange}
       
        />
      </div>

      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/carosul">Carosul</Link>
      </div>
    </div>
  );
};

export default Header;
