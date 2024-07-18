import { Router, Request, Response } from 'express'
import DocumentController from '../controllers/document.controller'
import handlePromise from '../utils/promise'
import idMiddleware from '../middlewares/id.middleware'
import { validateDocumentSchema } from '../middlewares/schema.middleware'

const router = Router()

router.route("/document")
    .get(async (req:Request,res:Response)=>{
        const [response, err] = await handlePromise(
                DocumentController.getAll()
        )  

        if(err) {
                console.error(err)
                return res.status(err.status).send(err.error)
        }

        res.status(response.status).send(response.body)
    })
    .post(validateDocumentSchema, async (req:Request,res:Response)=>{
        const {name,field1,field2,internalObject,relatedDocuments} = req.body

        const [response, err] = await handlePromise(
            DocumentController.putSingle({
                name,
                field1,
                field2,
                internalObject,
            })
        )  

        if(err) {
                console.error(err)
                return res.status(err.status).send(err.error)
        }

        res.status(response.status).send(response.body)
})

router.route("/document/:id")
    .get(idMiddleware, async (req:Request,res:Response)=>{
        const { id } = req.params

        const [response, err] = await handlePromise(
                DocumentController.getById(id)
        )  

        if(err) {
                console.error(err)
                return res.status(err.status).send(err.error)
        }

        res.status(response.status).send(response.body)
    })
    .put(idMiddleware, async (req:Request,res:Response)=>{
        const { id } = req.params

        const {name,field1,field2,internalObject} = req.body

        const [response, err] = await handlePromise(
                DocumentController.updateById(id, {
                    name,
                    field1,
                    field2,
                    internalObject,
                })
        )  

        if(err) {
                console.error(err)
                return res.status(err.status).send(err.error)
        }

        res.status(response.status).send(response.body)
    })
    .delete(idMiddleware, async(req:Request,res:Response)=>{
        const { id } = req.params

        const [response, err] = await handlePromise(DocumentController.deleteById(id))  

        if(err) {
                console.error(err)
                return res.status(err.status).send(err.error)
        }

        res.sendStatus(response.status)
    })

export default router