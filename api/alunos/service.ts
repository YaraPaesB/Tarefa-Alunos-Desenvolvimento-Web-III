import { Curso } from "./enum/curso";
import { alunoSchema, cursoSchema } from "./schemas/alunoSchema";
import { Aluno } from "./types/model";

export class AlunoService {
    
    public async add(aluno: Aluno):Promise<Aluno> {
        try {
            await alunoSchema.validate(aluno, {abortEarly: false})
            return aluno;
        } catch (error) {
            throw error;
        }
    }

    public async addCurso(curso:Curso, alunoRA:String):Promise<Aluno> {
        try {
            await cursoSchema.validate({curso}, {abortEarly: false});
            return {cursos:[curso], RA:alunoRA} as Aluno;
        } catch (error) {
            throw error;
        }
    }
    
    public get(alunoRA: String):Aluno {
        return {RA:alunoRA} as Aluno;
    }
    
    public getAll():Aluno[] {
        return [{} as Aluno];
    }
    
    public async edit(aluno: Aluno, alunoRA: String):Promise<Aluno> {
        try {
            await alunoSchema.validate(aluno, {abortEarly: false})
            return aluno;
        } catch (error) {
            throw error;
        }
    }

    public async editCurso(curso:Curso, alunoRA:String):Promise<Aluno> {
        try {
            await cursoSchema.validate({curso}, {abortEarly: false});
            return {cursos:[curso], RA:alunoRA} as Aluno;
        } catch (error) {
            throw error;
            
        }
    }

    public deleteCurso(alunoRA: String, curso:Curso) {
        return {RA:alunoRA, cursos:[] as Curso[]} as Aluno;
    }
    
    public delete(alunoRA: String) {
        return;
    }
}