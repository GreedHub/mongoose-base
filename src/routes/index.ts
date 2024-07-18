import { Router } from 'express'
import DocumentRouter from './document.router'

const router = Router()

router.use(DocumentRouter)

export default router