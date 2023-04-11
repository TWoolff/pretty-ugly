'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import useCart from '../(store)/store'

export default function ProductCard(props: any) {
  const router = useRouter()
  const { product } = props
  const { id: price_id, unit_amount: cost, product: productInfo } = product
  const { name, description, unit_label, metadata } = productInfo
  const setProduct = useCart((state: any) => state.setProduct)

  console.log(product, metadata.list)

  const handleClick = () => { 
    const newProduct = {
      name,
      description,
      price_id,
      cost,
      productInfo
    }
    setProduct({newProduct})
    router.push(`/product?price_id=${price_id}`)
  }

  return ( 
    <div className='product-card' onClick={handleClick}>
      <h2>{name}</h2>
      <p>{cost/100},00 kr.</p>
      <p>{description}</p>
      {unit_label && <p>Label: {unit_label}</p>}
      {metadata && <p>{metadata.list}</p>}  
    </div>
  )
}