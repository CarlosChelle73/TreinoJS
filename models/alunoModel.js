import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    idade:{
        type: Number,
        required: true
    },
    Classe:{
        type: String,
        required: true
    }
},
    {
        versionKey: false
    }

)

export default mongoose.model("Produto", produtoSchema);