import { products } from './../interface/interface';
import axios from "axios";
// import { products } from "../interface/interface";
// https://jsonplaceholder.typicode.com

 const api = axios.create({
    baseURL:"https://dummyjson.com"
})



export const getAllCategories = async()=>{
    const result = await api.get('/products/categories');
    return result?.data
}

export const getProductsByCategory = async(path:string)=>{
    const result = await api.get(`/products/category/${path}`);
    return result?.data
}

export const getProductByBrand = async(path:string)=>{
    const result = await api.get(`/products/search?q=${path}`);
    return result?.data
}