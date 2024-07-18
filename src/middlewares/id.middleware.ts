import { NextFunction, Request, Response } from "express";
import { isValidObjectId } from "mongoose";
import { IdNotNullErr, InvalidIdErr } from "../errors/id.error";

export default function idMiddleware(req:Request, res:Response, next:NextFunction){
  const { id } = req.params

  if(!id)
    return res.status(400).send(IdNotNullErr())

  if(!isValidObjectId(id))
      return res.status(400).send(InvalidIdErr(id))

  next()
}