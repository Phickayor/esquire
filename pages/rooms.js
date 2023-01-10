import React from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
import PageHead from '../components/Head'
import Rooms from '../components/Rooms'
function rooms({ pageTitle, imageLink }) {
    pageTitle = "Our Rooms"
    imageLink = "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=2000"

    return (
        <div className='bg-slate-700 text-white'>

            <Head>
                <title>Esquire Resorts | Rooms</title>
                <meta name="description" content="Esquire hotel rooms " />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PageHead
                pageTitle={pageTitle}
                imageLink={imageLink}
            />
            <Rooms />
            <Footer />
        </div>
    )
}

export default rooms