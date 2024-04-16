import { mixed, object, string } from "yup";
import { Curso } from "../enum/curso";

export const alunoSchema = object({
    RA: string().required().min(13, 'RA Invalido.').max(13, 'RA Invalido.'), 
    nome: string().required(),
    turma: string().required()
});

export const cursoSchema = object({
    curso: mixed<Curso>().oneOf(Object.values(Curso)).required()
});