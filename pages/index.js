// import Head from 'next/head'
import Home from '../components/Home'
import Welcome from '../components/Welcome'

export default function LandingPage() {
  return (
    <div className='bg-[#121212] '>
      {/* <Head>
        <title>Esquire Resorts | Landing Page</title>
        <meta name="description" content="Esquire hotel a place for leisure" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <Home />
      <Welcome />
    </div>
  )
}
