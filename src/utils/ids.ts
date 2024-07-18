import mongoose from "mongoose";

export function uniqueIds(...ids:Array<mongoose.Types.ObjectId|string>){
    const uids = [...new Set<string>(ids.map(id=> typeof id === 'string' ? id: id.toString()))]    
    return uids.map(id=>new mongoose.Types.ObjectId(id))
}