export function InvalidIdErr(id:string){
    return `Format of id "${id}" is invalid`
}

export function IdNotNullErr(){
    return `The id cannot be null`
}

export default {
    InvalidIdErr,
    IdNotNullErr,
}