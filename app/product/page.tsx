'use client'
import useCart from "../(store)/store"

export default function ProductPage(props: any) {
  const { searchParams} = props
  const { price_id } = searchParams
  const product = useCart((state : any) => state.product)
  const addItemToCart = useCart((state: any) => state.addItemToCart)
  const { name, description, cost, productInfo } = product

  if (!product?.name) {
    window.location.href = '/'
  }

  const handleAddToCart = () => { 
    const newItem = {
      quantity: 1,
      price_id,
      name,
      cost
    }
    addItemToCart({newItem})
  }

  
  return ( 
    <section>
      <h1>{name}</h1> 
      <p>{description} </p>
      <p>{cost/100},00 kr.</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </section>
  )
}