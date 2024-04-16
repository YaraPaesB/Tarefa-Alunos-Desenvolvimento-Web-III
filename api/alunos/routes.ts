
import express from 'express'
import { AlunoService } from './service';

const router = express.Router();

//Post - adiciona aluno a lista
router.post('/', async (req, res) => {
    try {
        const alunoService = new AlunoService();
        const aluno = await alunoService.add(req.body);
        res.status(200).json(aluno);
    } catch (error:any) {
        res.status(400).json({
            message: 'Erro ao inserir o aluno',
            error
        });
    }
});

//Post - adiciona curso ao aluno
router.post('/cursos/:RA', async (req, res) => {
    try {
        const alunoService = new AlunoService();
        const aluno = await alunoService.addCurso(req.body.curso, req.params.RA);
        res.status(200).json(aluno)
    } catch (error) {
        res.status(400).json({
            message: 'Erro ao adicionar o curso',
            error
        });
    }
})

//Put - Alterar dados atraves do RA
router.put('/:RA', async (req, res) => {
    try {
        const alunoService = new AlunoService();
        const aluno = await alunoService.edit(req.body, req.params.RA);
        res.status(200).json(aluno);
    } catch (error:any) {
        res.status(400).json({
            message: 'Erro ao editar o aluno',
            error
        });
    }
});


//Put - altera o curso do aluno
router.put('/cursos/:RA', async (req, res) => {
    try {
        const alunoService = new AlunoService()
        const aluno = await alunoService.editCurso(req.body, req.params.RA)
        res.status(200).json(aluno)
    } catch (error) {
        res.status(400).json({
            message: 'Erro ao editar o curso',
            error
        });
    }
})


//Delete - remove aluno
router.delete('/:RA', async (req, res) => {
    try {
        const alunoService = new AlunoService();
        const aluno = alunoService.delete(req.params.RA);
        res.status(200).json();
    } catch (error:any) {
        res.status(400).json({
            message: 'Erro ao deletar o aluno',
            error
        });
    }
});


//Delete- remove curso do aluno
router.delete('/cursos/:RA', async (req, res) => {
    try {
        const alunoService = new AlunoService()
        const aluno = alunoService.deleteCurso(req.params.RA, req.body)
        res.status(200).json(aluno)
    } catch (error) {
        res.status(400).json({
            message: 'Erro ao deletar curso',
            error
        });
    }
})


//Get - busca por todos os alunos da lista 
router.get('/', async (req, res) => {
    try {
        const alunoService = new AlunoService();
        const alunos = alunoService.getAll();
        res.status(200).json(alunos);
    } catch (error:any) {
        res.status(400).json({
            message: 'Erro ao buscar os alunos',
            error
        });
    }
});


//Get - busca aluno filtrando pelo RA
router.get('/:RA', async (req, res) => {
    try {
        const alunoService = new AlunoService();
        const aluno = alunoService.get(req.params.RA)
        res.status(200).json(aluno)
    } catch (error) {
        res.status(400).json({
            message: 'Erro ao buscar o aluno',
            error
        });
    }
})

export default router
