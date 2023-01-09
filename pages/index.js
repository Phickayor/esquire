import Head from 'next/head'
import Home from '../components/Home'
import Welcome from '../components/Welcome'

export default function LandingPage() {
  return (
    <div className=''>
      <Home />
      <Welcome />
    </div>
  )
}
