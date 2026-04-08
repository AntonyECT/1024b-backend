import mysql from 'mysql2/promise';
import express from 'express'
import MysqlErrorHandle from './mysql_error_handle.js';

import connection from './mysql_connection_handle.js'

const app = express()
app.use(express.json())

app.get("/pessoas", async (req, res) => {
    try {
        const [resultado, campos] =
            await connection.execute(`SELECT * FROM pessoa`)
        console.log(resultado)
        res.status(200).json(resultado)
    } catch (err) {
        const mysqlErrorHandle = new MysqlErrorHandle(err, res)
        mysqlErrorHandle.validar()
    }
})//listar
app.post("/pessoas", async (req, res) => {
    try {
        const { id, nome } = req.body
        if (!id || !nome)
            return res.status(500).json({ mensagem: "Erro: Os dados de id ou nome estão incorretos!" })

        const [resultado, campos] =
            await connection.execute(`insert into pessoa values (?,?)`, [id, nome])
        console.log(resultado)
        res.status(201).json({ mensagem: "Sucesso" })
    } catch (err) {
        const mysqlErrorHandle = new MysqlErrorHandle(err, res)
        mysqlErrorHandle.validar()
    }
})//Inserir
app.post("/cadastro_produto", async (req, res) => {
    try {
        //const preparacao = await connection.prepare("select * from pessoa");
        const { id, nome, categoria, preco, data_criacao, data_modificacao } = req.body

        //Valide se o id e o nome foram passados corretamente. (Algum valor)
        //Se não foram, retorne o código 400 com a mensagem "id ou nome inválidos"
        //Não deixe o código executar a parte de baixo quando for inválido.
        if (!id || !nome || !categoria || !preco || !data_criacao || !data_modificacao)
            return res.status(500).json({ mensagem: "Erro: Os dados de id,nome,categoria,preco,data_criacao,data_modificacao estão incorretos!" })

        const [resultado, campos] =
            await connection.execute(`insert into produto values (?,?,?,?,?,?)`, [id, nome, categoria, preco, data_criacao, data_modificacao])
        console.log(resultado)
        res.status(201).json({ mensagem: "Sucesso" })
    } catch (err) {
        const mysqlErrorHandle = new MysqlErrorHandle(err, res)
        mysqlErrorHandle.validar()
    }
})//Inserir
app.get("/listar_produtos", async (req, res) => {
    try {
        const [resultado, campos] =
            await connection.execute(`SELECT * FROM produto`)
        console.log(resultado)
        res.status(200).json(resultado)
    } catch (err) {
        const mysqlErrorHandle = new MysqlErrorHandle(err, res)
        mysqlErrorHandle.validar()
    }
})//listar
app.get("/listar_produtos_informatica", async (req, res) => {
    try {
        const [resultado, campos] =
            await connection.execute(`SELECT * FROM produto WHERE categoria='informática'`)
        console.log(resultado)
        res.status(200).json(resultado)
    } catch (err) {
        const mysqlErrorHandle = new MysqlErrorHandle(err, res)
        mysqlErrorHandle.validar()
    }
})//listar
app.get("/listar_produtos_caros", async (req, res) => {
    try {
        const [resultado, campos] =
            await connection.execute(`SELECT * FROM produto WHERE preco>100`)
        console.log(resultado)
        res.status(200).json(resultado)
    } catch (err) {
        const mysqlErrorHandle = new MysqlErrorHandle(err, res)
        mysqlErrorHandle.validar()
    }
})//listar
//Criar o servidor
app.listen(8000, () => {
    console.log("Servidor iniciado na porta 8000")
})