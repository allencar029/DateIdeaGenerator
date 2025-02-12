import axios from 'axios'

const QUESTION_INSTANCE = axios.create({
    baseURL: 'http://localhost:8005/api'
})

export const askQuestion = async question => {
    try{
        const res = await QUESTION_INSTANCE.post('/ask', { question })
        const response = res.data.message
        return response
    }
    catch(error){
        throw error
    }
}