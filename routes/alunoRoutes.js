import { Router } from "express";
import{criarAluno,
       ListarAlunos,
       buscarAluno,
       atualizarAluno,
       deletarAluno
      
       

} from "../controllers/produto.controller.js";

const router = Router();

router.post("/", criarAluno);
router.get("/", ListarAlunos);
router.get("/:id", buscarAluno);
router.put("/:id", atualizarAluno);
router.put("/:id", deletarAluno)



export default router;
