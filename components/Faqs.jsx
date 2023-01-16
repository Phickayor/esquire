import React, { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
function Faqs(props) {
    const firstAnswer = useRef(null)
    const firstQuestion = useRef(null)
    const secondAnswer = useRef(null)
    const secondQuestion = useRef(null)
    const thirdAnswer = useRef(null)
    const thirdQuestion = useRef(null)
    const fourthAnswer = useRef(null)
    const fourthQuestion = useRef(null)
    const fifthAnswer = useRef(null)
    const fifthQuestion = useRef(null)

    const MoreOrLess = <FontAwesomeIcon icon={faAngleDown} />
    function showorHide(e) {
        var par = e.target.nextElementSibling
        if (par === null) {
            e.preventDefault()
        }
        else {
            par.classList.toggle('h-0')
        }
    }
    useEffect(() => {
        const faqResults = [{
            question: firstQuestion.current.innerHTML,
            answer: firstAnswer.current.innerHTML
        }, {
            question: secondQuestion.current.innerHTML,
            answer: secondAnswer.current.innerHTML
        }, {
            question: thirdQuestion.current.innerHTML,
            answer: thirdAnswer.current.innerHTML
        }, {
            question: fourthQuestion.current.innerHTML,
            answer: fourthAnswer.current.innerHTML
        }, {
            question: fifthQuestion.current.innerHTML,
            answer: fifthAnswer.current.innerHTML
        }
        ]
        props.searchHandler(faqResults)
    }, [])
    return (
        <div className='my-10 text-slate-700'>
            <div>
                <h1 className='text-2xl font-mono font-semibold my-2'>FAQ</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique totam illum enim.
                </p>
                <ul className='my-10'>
                    <li className='border-b-2 p-4'>
                        <div onClick={showorHide} className='flex justify-between text-black'>
                            <h1 className=" font-bold text-[18px]" ref={firstQuestion}>Lorem ipsum dolor sit amet</h1>
                            <h1 className='cursor-pointer'>{MoreOrLess}</h1>
                        </div>
                        <p className='my-2 overflow-y-auto h-0 ' ref={firstAnswer}>
                            Lorem ipsum wa dolor sit amet consectetur adipisicing elit.
                            Similique totam illum enim.
                        </p>
                    </li>
                    <li className='border-b-2 p-4'>
                        <div onClick={showorHide} className='flex justify-between text-black'>
                            <h1 ref={secondQuestion} className=" font-bold text-[18px]">Lorem ipsum dolor sit amet</h1>
                            <h1 className='cursor-pointer' disabled>{MoreOrLess}</h1>
                        </div>
                        <p className='my-2 overflow-y-auto h-0' ref={secondAnswer}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Similique totam illum enim.
                        </p>
                    </li>
                    <li className='border-b-2 p-4'>
                        <div onClick={showorHide} className='flex justify-between text-black'>
                            <h1 ref={thirdQuestion} className=" font-bold text-[18px]">Lorem ipsum dolor sit amet</h1>
                            <h1 className='cursor-pointer' disabled>{MoreOrLess}</h1>
                        </div>
                        <p className='my-2 overflow-y-auto h-0' ref={thirdAnswer}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Similique totam illum enim.
                        </p>
                    </li>
                    <li className='border-b-2 p-4'>
                        <div onClick={showorHide} className='flex justify-between text-black'>
                            <h1 ref={fourthQuestion} className=" font-bold text-[18px]">Lorem ipsum dolor sit amet room</h1>
                            <h1 className='cursor-pointer' disabled>{MoreOrLess}</h1>
                        </div>
                        <p className='my-2 overflow-y-auto h-0' ref={fourthAnswer}>
                            Lorem ipsum dolor wa sit amet consectetur adipisicing elit.
                            Similique totam illum enim.
                        </p>
                    </li>
                    <li className='border-b-2 p-4'>
                        <div onClick={showorHide} className='flex justify-between text-black'>
                            <h1 ref={fifthQuestion} className=" font-bold text-[18px]">Lorem ipsum dolor sit amet</h1>
                            <h1 className='cursor-pointer' disabled>{MoreOrLess}</h1>
                        </div>
                        <p className='my-2 overflow-y-auto h-0' ref={fifthAnswer}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Similique totam illum enim. room
                        </p>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Faqs