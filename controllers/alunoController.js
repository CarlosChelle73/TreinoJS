import Aluno from "../models/alunoModel.js"

export async function criarAluno(req, res){
    const aluno = await Aluno.create(req.body);
    res.status(201).json(aluno);
}

export async function ListarALuno(req, res){
    const alunos = await Aluno.find();
    res.json(alunos);
}

export async function buscarAluno(req, res){
    const aluno = await Aluno.findById(req.params.id);
    res.json(aluno);
}


export async function atualizarAluno(req, res){
    const aluno = await Aluno.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }    
    );
    res.json(aluno)

} 
export async function deletarAluno(req, res){
    try {
        const aluno = await Aluno.findByIdAndDelete(req.params.id);

        if (!aluno) {
            return res.status(404).json({ mensagem: "Aluno não encontrado" });
        }

        res.json({ mensagem: "Aluno deletado" });

    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
}




