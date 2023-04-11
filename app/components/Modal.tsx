'use client'
import React from 'react'
import ReactDom from 'react-dom'
import { useRouter } from 'next/navigation'
import useCart from '../(store)/store'

export default function Modal() {
  const closeModal = useCart((state: any) => state.setOpenModal)
  const cartItems = useCart((state: any) => state.cart)
  const router = useRouter()

  console.log(cartItems)

  async function handleCheckout() {
    const lineItems = cartItems.map((e: any) => {
      return {
        price: e.price_id,
        quantity: 1
      }
    })
    const res = await fetch('../api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ lineItems })
    })
    const data = await res.json()
    router.push(data.session.url)
  }

  return ReactDom.createPortal( 
    <div className="modal">
      <div onClick={closeModal}>x</div>
      <h1>Cart</h1>
      <div className="cart-items">
        {cartItems.length === 0 && <p>Cart is empty</p>}
        {cartItems.map((e: any, i: number) => {
          return (
            <div className="cart-item" key={i}>
              <p>{e.name}</p>
              <p>{e.cost / 100},00 kr.</p>
              <p>Quantity: {}</p>
            </div>
          )
        })}
      </div>
      <button onClick={handleCheckout}>Checkout</button>
    </div>, document.getElementById('portal') as Element
  )
}