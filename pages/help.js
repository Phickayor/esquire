import Head from '../components/Head'
import React, { useState } from 'react'
import Footer from '../components/Footer'
import HelpSearch from '../components/HelpSearch'
import NavBar from '../components/NavBar'
import Faqs from '../components/Faqs'

function Help({ answers, sideWidth, pageTitle, imageLink }) {
    const [answersValue, setAnswersValue] = useState("")
    const [marginValue, setMarginValue] = useState("0px")
    const [blurValue, setBlurValue] = useState("")
    pageTitle = "Help"
    imageLink = "https://images.pexels.com/photos/45842/clasped-hands-comfort-hands-people-45842.jpeg?auto=compress&cs=tinysrgb&w=2000"
    sideWidth = marginValue
    answers = answersValue

    function marginParent(margin, blur) {
        setMarginValue(margin)
        setBlurValue(blur)
    }
    function faqsContent(answers) {
        setAnswersValue(answers)
    }
    return (
        <div className='flex flex-col min-h-screen'>
            <div>
                <NavBar
                    sideWidth={sideWidth}
                    shadowColor={"slate-700"}
                    textColor={"slate-700"}
                />
            </div>
            <Head
                pageTitle={pageTitle}
                imageLink={imageLink}
                marginHandler={marginParent}
            />
            <div className={`flex-1 ml-[${marginValue}] duration-300 ${blurValue}`} style={{ marginLeft: marginValue }}>
                <div className=' w-10/12 mx-auto flex flex-col justify-center'>
                    <HelpSearch
                        answers={answers} />
                    <Faqs searchHandler={faqsContent} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Help