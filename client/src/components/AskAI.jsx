import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ResponseAI } from '../views/ResponseAI'
import { askQuestion } from '../services/dateIdeas.services.js';

export const AskAI = () => {
    const navigate = useNavigate()
    const [divs, setDivs] = useState([])

    const addDiv = (text) => {
        setDivs((prevDivs) => [
            ...prevDivs,
            <div key={prevDivs.length}>{text}</div>
        ])
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        const questionBox = document.getElementById('question')
        const question = e.target.question.value
        // console.log(`You asked this  : ${question}`)
        questionBox.value = ''
        addDiv(`${question}`)

        askQuestion(question)
        .then((res) => {
            console.log("Here is the response", res)
            addDiv(res)    
        }) 
        .catch ((err) => {
            console.log(err);
        })


    }
    

    return (
        <div>
            <ResponseAI divs={divs} />
            <form onSubmit = { handleSubmit }>
                <div className="form_group">
                    <textarea className="ask_ai" type="text" id="question" name="question" placeholder="Ask a question...."></textarea>
                    <button id="submit-button"></button>
                </div>
            </form>
        </div>
    )
}
