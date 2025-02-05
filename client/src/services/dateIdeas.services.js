import axios from 'axios'

const QUESTION_INSTANCE = axios.create({
    baseURL: 'http://localhost:8005/api'
})

export const askQuestion = async question => {
    try{
        const res = await QUESTION_INSTANCE.post('/ask', { question })
        // console.log(`Here is the question from the services file ${question}`)
        const response = res.data.message
        // console.log(`Here is the response from the backend on the services file ${response}`)
        return response
    }
    catch(error){
        throw error
    }
}