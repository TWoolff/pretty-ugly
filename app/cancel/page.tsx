import Link from 'next/link'

export default function CancelPage() {
  return ( 
    <section>
      <h1>Canceled</h1>
      <Link href={'/'}>Back home</Link>
    </section>
  )
}