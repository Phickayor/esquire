import React, { useRef, useState } from 'react'

function HelpSearch(props) {
    // const keywords = ["room", "ipsum", "hotel", "book", "address", "food", "reservation", "bar"]
    const questionAndAnswers = props.answers
    const searchTerm = useRef(null)
    const finalDiv = useRef(null)

    const [searchNum, setSearchNum] = useState(null)
    const [finalResult, setFinalResult] = useState(null)

    var resultsArray = []
    function FindSearch(event) {
        setSearchNum("(0)")
        var searchedItem = searchTerm.current.value
        //Splitting the searched item into an array
        var searchArray = searchedItem.split(" ")
        searchArray.map((eachWord) => {
            for (var i = 0; i < questionAndAnswers.length; i++) {
                // splitting all questions & answers to array
                var questionsToArray = questionAndAnswers[i].question.split(" ")
                var answersToArray = questionAndAnswers[i].answer.split(" ")
                questionsToArray
                if ((questionsToArray.indexOf(eachWord)) != -1 || (answersToArray.indexOf(eachWord)) != -1) {
                    var resultDetails = { searchQuestion: questionAndAnswers[i].question, searchAnswer: questionAndAnswers[i].answer }
                    if (resultsArray.indexOf(resultDetails) === -1) {
                        resultsArray.push(resultDetails)
                    }

                    var resultDisplay = resultsArray.map((result, index) => (
                        <div key={index} className=" bg-slate-700  rounded-2xl p-5 space-y-2 shadow-2xl">
                            <h1 className='text-white font-bold text-2xl'>{result.searchQuestion}</h1>
                            <p className='text-white text-md lg:text-lg'>{result.searchAnswer}</p>
                        </div>
                    ))
                    setFinalResult(resultDisplay)
                    setSearchNum("(" + resultsArray.length + ")")
                }
                else if (searchNum === "(0)") {
                    setFinalResult("No Results Found")

                }
            }
        })

        // //creating array for present keywords
        // var presentKeywords = []
        // //creating array for search results
        // var resultsArray = []
        // // console.log(questionAndAnswers)
        // searchArray.map((eachWord) => {
        //     //checking for sentence with no keyword present
        //     if (keywords.indexOf(eachWord) === -1) {
        //     }
        //     else {
        //         //Adding present keywords to presentKeywords array if  not there already 
        //         if (presentKeywords.indexOf(eachWord) === -1) {
        //             presentKeywords.push(eachWord)
        //             for (var i = 0; i < questionAndAnswers.length; i++) {
        //                 // splitting all questions to array
        //                 var questionsToArray = questionAndAnswers[i].question.split(" ")
        //                 // console.log(questionsToArray)
        //                 var answersToArray = questionAndAnswers[i].answer.split(" ")
        //                 // console.log(answersToArray)
        //                 //checking for questions or answer with input keyword
        //                 if (
        //                     (questionsToArray.indexOf(presentKeywords[i]))
        //                     || (answersToArray.indexOf(presentKeywords[i])) != -1
        //                 ) {
        //                     var resultDetails = { searchQuestion: questionAndAnswers[i].question, searchAnswer: questionAndAnswers[i].answer }
        //                     if (resultsArray.indexOf() === -1) {
        //                         resultsArray.push(resultDetails)
        //                         console.log(resultsArray)
        //                     }
        //                 }
        //             }

        //         }
        //     }
        //     event.preventDefault()
        // })

        // for (var i = 0; i < answers.length; i++) {
        //     if (questionAndAnswers[i].question && questionAndAnswers[i].answers) { }
        //     console.log(questionAndAnswers)
        // }
        // for (var i = 0; i < answers.length; i++) {
        //     if (answers[i].indexOf(searchedItem) != -1) {
        //         console.log("yesBoss")
        //     }
    }



    return (
        <div className="text-slate-700 mt-10">
            <h1 className='text-3xl font-mono font-semibold text-center'>Esquire Resorts</h1>
            <input type="search" placeholder="What can we help you with..." ref={searchTerm} onChange={FindSearch} className="text-lg border-purple-500 border-2 md:text-center my-5 focus:outline-none rounded-2xl p-6 w-full" />
            <div className='my-10'>
                <h1 className='text-2xl font-semibold my-5' >Search Result {searchNum}</h1>
                <div className='space-y-10' ref={finalDiv}>{finalResult}</div>
            </div>
        </div>
    )
}

export default HelpSearch