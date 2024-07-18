import handlePromise from "../utils/promise"
import Document from "../types/document"
import ApiResponse from "../types/api-response"
import DocumentSchema from "../db/schemas/document.schema"

type DocumentArrayResponse = ApiResponse<Document[]>
type DocumentResponse = ApiResponse<Document>

export default class DocumentController{
    static async getAll():Promise<DocumentArrayResponse>{
        const [documents,err] = await handlePromise(DocumentSchema.find({}))
        
        if(err) return Promise.reject({status:500, error:err})

        return {status:200, body: documents}
    }

    static async getById(id:string):Promise<DocumentResponse>{
        const [document,err] = await handlePromise(DocumentSchema.findById(id))

        if(err) return Promise.reject({status:500, error:err})

        if(!document) return Promise.reject({status:404, error:`Cannot find document with id: ${id}`})

        return {status:200, body: document}
    } 

    static async putSingle(document:Document):Promise<DocumentResponse>{
        document.isDeleted = false
        
        const _document = new DocumentSchema(document)

        const [result,err] = await handlePromise(_document.save())

        if(err) return Promise.reject({status:500, error:err})

        return {status:201, body: result}
    }

    static async updateById(id:string,curso:Document):Promise<DocumentResponse>{
        const [_curso,err] = await handlePromise(
          DocumentSchema.findOneAndUpdate({_id:id},curso)
        )
  
        if(err) return Promise.reject({status:500, error:err})
  
        return {status:200}
    }

    static async deleteById(id:string):Promise<DocumentResponse>{
        const [deletion,err] = await handlePromise(
            DocumentSchema.findByIdAndDelete({_id:id})
        )
  
        if(err) return Promise.reject({status:500, error:err})
  
        if(!deletion) return Promise.reject({status:404, error:`Cannot find document with id ${id}`})
  
        return {status:200}
      }
}