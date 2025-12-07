// app/_utils/ProductApis.js
import axiosClient from './axiosClient';

const getLatestProducts = () => 
  axiosClient.get('/products?populate=*'); 

const getProductById = (documentId) => 
  axiosClient.get(`/products/${documentId}?populate=*`);  

const getProductsByCategory = (category) => 
  axiosClient.get(`/products?filters[category][$eq]=${encodeURIComponent(category)}&populate=*`);

export default {
  getLatestProducts,
  getProductById,
  getProductsByCategory
};