import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ResponseAI } from '../views/ResponseAI'
import { askQuestion } from '../services/dateIdeas.services.js';

export const AskAI = () => {
    const [divs, setDivs] = useState([])

    const addDiv = (text) => {
        setDivs((prevDivs) => [
            ...prevDivs,
            <div key={prevDivs.length}>{text}</div>
        ])
    }

    useEffect(() => {
        const questionAsk = document.getElementById("question")
        
        const adjustHeight = () => {
            questionAsk.style.height = "auto"
            questionAsk.style.height = questionAsk.scrollHeight + "px"
        }

        questionAsk.addEventListener("input", adjustHeight)

        const handleKeyPress = (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                handleSubmit(e)
            }
        }
    
        if (questionAsk) {
            questionAsk.addEventListener("keydown", handleKeyPress)
        }
    
        return () => {
            questionAsk.removeEventListener("input", adjustHeight)
            if (questionAsk) {
                questionAsk.removeEventListener("keydown", handleKeyPress)
            }
        }
    }, [])
    
    const handleSubmit = (e) => {
        e.preventDefault()

        const questionBox = document.getElementById('question')
        const question = questionBox.value
        console.log(`You asked this  : ${question}`)
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
                <div className="form_group" id="askAIButtonText">
                    <textarea className="ask_ai" type="text" id="question" name="question" placeholder="Ask a question...."></textarea>
                    <button id="submit-button"></button>
                </div>
            </form>
        </div>
    )
}
