import mongoose from "mongoose";

const alunoSchema = new mongoose.Schema({
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

export default mongoose.model("Aluno", alunoSchema);