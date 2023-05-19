import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
const ProductDetail = () => {
  let{id}=useParams();
  const[product, setProduct]=useState(null)
  const getProductDetail=async()=>{
let url=`http://localhost:5000/products/${id}`
let response=await fetch(url)
let data=await response.json();
setProduct(data);

  }
  useEffect(()=>{
    getProductDetail()
  
  },[])
  return (
    <div>
      상품 상세 페이지
    </div>
  )
}

export default ProductDetail
