type Document = {
    name:string
    isDeleted?:boolean
    field1:string
    field2: number
    internalObject: DocumentInternalObject,
}

export type DocumentInternalObject = {
    internalField1: string,
    internalField2: number
}

export default Document