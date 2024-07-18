import { NextFunction, Request, Response } from "express";
import { MissingParamErr } from "../errors/param.error";

export function validateDocumentSchema(req:Request, res:Response, next:NextFunction){
    const {name,field1,field2,internalObject} = req.body
  
    if(!name)
      return res.status(400).send(MissingParamErr('name'))
  
    if(!field1)
      return res.status(400).send(MissingParamErr('field1'))
  
    if(!field2)
      return res.status(400).send(MissingParamErr('field2'))

    if(!internalObject)
        return res.status(400).send(MissingParamErr('internalObject'))

    if(!internalObject.internalField1)
        return res.status(400).send(MissingParamErr('internalObject.internalField1'))

    if(!internalObject.internalField2)
        return res.status(400).send(MissingParamErr('internalObject.internalField2'))
  
    next()
  }
