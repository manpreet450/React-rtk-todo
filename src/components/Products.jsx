import { useDispatch } from "react-redux"
import { addCartItem } from "../store/slices/cartSlice"

export default function Products({ productId,id, title, rating, price, imageUrl }) {
  const dispatch=useDispatch()
  return (
    <div className="product">
      <div className="product-image">
        <img src={imageUrl} alt={title} referrerPolicy="no-referrer"  crossOrigin="anonymous"/>
      </div>
      <div className="title-container">
        <h3>
          <a href="#">{title}</a>
        </h3>
      </div>
      <div className="price-rating-container">
       {rating?.rate} ⭐ ({rating?.count})
        <p className="price">${price}</p>
      </div>
      <div className="cta-container">
        <button onClick={()=>{dispatch(addCartItem({ productId:productId??id,  }))}}>Add to Cart</button>
        <button>Add to wishlist</button>
      </div>
    </div>
  )
}