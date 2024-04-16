import 'dotenv/config'
import express from 'express';

//Import das rotas da aplicação
import alunoRoutes from './alunos/routes';

const app = express()

const {PORT} = process.env

//Habilita o PARSE do JSON (conversão do arquivo)
app.use(express.json())

//Rota de conteúdo público
app.use('/', express.static('public'))


//Rota default
app.get('/api', (req, res)=> {
    res.status(200).json({
        message: 'API 100% funcional🚀',
        version: '1.0.0'
    })
})

//Rotas da API
app.use('/api/alunos', alunoRoutes)

//Listen
app.listen(PORT, function(){
    console.log(`💻Servidor rodando na porta ${PORT}`)
})
