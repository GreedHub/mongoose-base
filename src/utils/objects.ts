export function mergeObject(object,anotherObject){
    for (let k in anotherObject){
        switch(typeof anotherObject[k]){
            case "object":
                _mergeObjects(object[k], anotherObject[k])
                break;
                    
            case "string":
            case "number":
            case "bigint":
            case "boolean":
            case "symbol":
            default:
                object[k] = anotherObject[k]
                break;
        }
    }
}

function mergeArray(array,anotherArray){
    anotherArray.forEach(item=>{
        if(!array.includes(item))
            array.push(item)
    })
}

function _mergeObjects(object,anotherObject){
    if(Array.isArray(object)){
        mergeArray(object,anotherObject)
    }

    mergeObject(object, anotherObject)
}

export default {
    mergeObject,
    mergeArray
}