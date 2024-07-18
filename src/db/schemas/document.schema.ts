import { Schema, model } from "mongoose";

const DocumentSchema = new Schema({
  name: {type: String, required:true},
  isDeleted:  {type: Boolean, required:true},
  field1: {type: String, required:true},
  field2: {type: Number, required:true},
  internalObject: {
    internalField1: String,
    internalField2: Number
  },
  relatedDocuments: [{ type: Schema.Types.ObjectId, ref: 'Document' }]
});

const Document = model('Document', DocumentSchema);

export default Document