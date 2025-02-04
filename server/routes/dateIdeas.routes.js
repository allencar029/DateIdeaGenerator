import { Router } from 'express'
import { askQuestion } from '../controllers/dateIdeas.controller.js'

const askQuestionRouter = Router()

askQuestionRouter.route('/ask')
    .post( askQuestion )
export default askQuestionRouter