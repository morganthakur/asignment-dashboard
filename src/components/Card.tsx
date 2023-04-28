import React from 'react'
import styles from '../styles/product.module.css'
import { products } from '../../interface/interface'
const Card = (props:any) => {
const{item} = props;


  return (
    <div className={styles.cardWrapper}>
      <img src={item.thumbnail} alt="" />
      <h4>  {item.title} </h4>
      <p> {item.description.slice(0,20)}.... </p>
      <h5> Rs. {item.price} </h5>
    </div>
  )
}

export default Card