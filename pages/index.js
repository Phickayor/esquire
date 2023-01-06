import Head from 'next/head'
import { Inter } from '@next/font/google'
import Home from '../components/Home'
import Welcome from '../components/Welcome'
import Address from '../components/Address'
import Rooms from '../components/Rooms'

const inter = Inter({ subsets: ['latin'] })

export default function LandingPage() {
  return (
    <>
      <Home />
      <Welcome />
      <Rooms />
      <Address />
    </>
  )
}
