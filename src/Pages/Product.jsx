import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrums/Breadcrum'
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'

export const Product = () => {
  const {data}= useContext(ShopContext);
  const {productId} = useParams();
  console.log("id",productId);
  const product = data.find((e) => e.id === Number(productId));
console.log("prd",product);
  return (
    <div className='bread'>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <RelatedProducts />
    </div>
  )
}

export default Product
