export function MissingParamErr(param:string){
    return `The param "${param}" is required`
}

export function ShouldIncludeParamErr(entity:string,requiredParams:string[]){
  return `One of the following params [${requiredParams.join(', ')}] is required to update an entity of type ${entity}`
}

export default {
  MissingParamErr,
  ShouldIncludeParamErr
}