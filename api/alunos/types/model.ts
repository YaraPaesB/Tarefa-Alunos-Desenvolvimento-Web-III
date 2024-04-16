import { Curso } from "../enum/curso";

export type Aluno = {
    RA: String,
    nome: String,
    cursos: Curso[],
    turma: string;
}