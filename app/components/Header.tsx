'use client'
import Link from 'next/link'
import useCart from '../(store)/store'
import Modal from './Modal'

export default function Header(props: any) {
  const cartItems = useCart((state: any) => state.cart)
  const openModal = useCart((state: any) => state.openModal)
  const setOpenModal = useCart((state: any) => state.setOpenModal)
  

  return ( 
    <header>
      <Link href='/'>PrettyUgly</Link>
      <div className='cart-header' onClick={setOpenModal}>
        Cart ({cartItems.length})
      </div>
      {openModal && <Modal />}
    </header>
  )
}