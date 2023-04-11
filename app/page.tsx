import Stripe from 'stripe'
import ProductCard from './components/ProductCard'

async function getStripeProducts() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
    apiVersion: '2022-11-15',
  })
  const res = await stripe.prices.list({
    expand: ['data.product']
  })
  const prices = res.data
  return prices
}

export default async function Home() {
  const products = await getStripeProducts()

  return (
    <main>
      <h1>Products</h1>
      <section className="products">
        {products.map((product: any, productIndex: any) => {
          return (
            <ProductCard key={productIndex} product={product} />
          )
        })
        }
      </section>
    </main>
  )
}
