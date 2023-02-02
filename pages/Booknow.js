// import Link from 'next/link'
// import { useRouter } from 'next/router'
// import React, { useState } from 'react'
// import BookRoom from '../components/BookRoom'
// // import Head from 'next/head'
// import Footer from '../components/Footer'
// import Head from '../components/Head'
// import NavBar from '../components/NavBar'
// import OurRooms from '../components/OurRooms'
// function Booknow({ selectedIndex, pageTitle, imageLink, sideWidth }) {
//     const router = useRouter()
//     const { query: { event } } = router
//     const props = { event }
//     selectedIndex = props.event
//     pageTitle = "Book Room"
//     imageLink = "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=2000"
//     const [blurValue, setBlurValue] = useState("")
//     const [marginValue, setMarginValue] = useState("0px")
//     sideWidth = marginValue
//     function marginParent(margin, blur) {
//         setMarginValue(margin)
//         setBlurValue(blur)
//     }
//     return (
//         <div>
//             <NavBar
//                 sideWidth={sideWidth}
//                 shadowColor={"slate-700"}
//                 textColor={"slate-700"}
//             />
//             <Head
//                 pageTitle={pageTitle}
//                 imageLink={imageLink}
//                 marginHandler={marginParent}
//             />
//             <div className={`ml-[${marginValue}]  ${blurValue} h-full`} style={{ marginLeft: marginValue }}>
//                 <BookRoom selectedIndex={selectedIndex} />
//                 <Footer />
//             </div>

//         </div>
//     )
// }

// export default Booknow