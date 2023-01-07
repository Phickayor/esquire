import Head from 'next/head'
import { Inter } from '@next/font/google'
import Home from '../components/Home'
import Welcome from '../components/Welcome'
import Address from '../components/Address'
import Rooms from '../components/Rooms'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function LandingPage() {
  return (
    <div>
      <Home />
      <Welcome />
      {/* <Rooms /> */}
      {/* <Address /> */}
    </div>
  )
}
