import React from 'react'
import { useSelector } from 'react-redux'
import Products from '../components/Products'
import { getAllProducts,getProductLoadingState ,getProductError} from '../store/slices/productsSlice'


export default function Home() {
  const productsList = useSelector(getAllProducts)
  const isLoading= useSelector( getProductLoadingState)
  const error=useSelector(getProductError)
  return isLoading?(
    <h1 style={{textAlign:'center'}}>Loading....</h1>):(
      error||
    (<div className="products-container">
      {productsList.map(({ id, title, rating, price, image }) => (
        <Products
          key={id}
          productId={id}
          title={title}
          rating={rating.rate}
          price={price}
          imageUrl={image}
        />
      ))}
    </div>)
  )
}