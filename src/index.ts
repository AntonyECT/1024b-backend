import mysql from 'mysql2/promise';
import express from 'express'
import MysqlErrorHandle from './mysql_error_handle.js';

import connection from './mysql_connection_handle.js'

const app = express()
app.use(express.json())


/*
Crie uma rota '/cliente_data_pedido' que retorne os clientes e a data que os mesmos fizeram
o pedido. Pra realizar isso, ultilize INNER JOIN para juntar as tabelas.
Ultilize o banco de dados chamado dbteremercado

SELECT nome,datapedido FROM clientes c
                       INNER JOIN pedido p ON c.idclientes=p.clientes_idclientes

2 Crie uma rota chamada '/pedidos_2026' que retorne
idclientes, nome, cidade, idade, idpedidos, datapedido dos pedidos feitos no ano
de 2026.

3 Crie uma rota chamada '\quantidade_pedidos' que retorne
um json no formato '{quantidade_pedidos:100}' com a quantidade de pedidos cadastrados
na tabela pedidos. USE O COMANDO COUNT(*) para contar as quantidades.

4 Crie uma rota chamada '\quantidade_pedidos_clientes' que retorne
um json no formato '[{nome: "tere", quantidade_pedidos:1000}]' que retorne
todos os clientes e a quantidade de pedidos que cada cliente fez
*/

1;
app.get("/cliente_data_pedido", async (require, res) => {
    try {
        const [resultado, campos] =
            await connection.execute(`SELECT nome,datapedido FROM clientes c
                       INNER JOIN pedido p ON c.idclientes=p.clientes_idclientes
`)
        console.log(resultado)
        res.status(200).json(resultado)
    } catch (err) {
        const mysqlErrorHandle = new MysqlErrorHandle(err, res)
        mysqlErrorHandle.validar()
    }
})

2;
app.get("/pedidos_2026", async (req, res) => {
    try {
        const [resultado, campos] =
            await connection.execute(`SELECT idclientes, nome, cidade, idade, idclientes, datapedido 
                FROM sua_tabela WHERE YEAR(datapedido) = 2026`)
        console.log(resultado)
        res.status(200).json(resultado)
    } catch (err) {
        const mysqlErrorHandle = new MysqlErrorHandle(err, res)
        mysqlErrorHandle.validar()
    }
})

3;
app.get("/quantidade_pedidos", async (req, res) => {
    try {
        const [resultado, campos] =
            await connection.execute(`SELECT COUNT(*) AS total FROM pedidos`)
        console.log(resultado)
        res.status(200).json(resultado)
    } catch (err) {
        const mysqlErrorHandle = new MysqlErrorHandle(err, res)
        mysqlErrorHandle.validar()
    }
})

4;
app.get("/quantidade_pedidos_clientes", async (req, res) => {
    try {
        const [resultado, campos] =
            await connection.execute(` SELECT p.nome, COUNT(o.id) AS quantidade_pedidos
            FROM pessoa p
            LEFT JOIN pedidos o ON p.id = o.cliente_id
            GROUP BY p.nome`)
        console.log(resultado)
        res.status(200).json(resultado)
    } catch (err) {
        const mysqlErrorHandle = new MysqlErrorHandle(err, res)
        mysqlErrorHandle.validar()
    }
})

// app.get("/pessoas", async (req, res) => {
//     try {
//         const [resultado, campos] =
//             await connection.execute(`SELECT * FROM pessoa`)
//         console.log(resultado)
//         res.status(200).json(resultado)
//     } catch (err) {
//         const mysqlErrorHandle = new MysqlErrorHandle(err, res)
//         mysqlErrorHandle.validar()
//     }
// })//listar
// app.post("/pessoas", async (req, res) => {
//     try {
//         const { id, nome } = req.body
//         if (!id || !nome)
//             return res.status(500).json({ mensagem: "Erro: Os dados de id ou nome estão incorretos!" })

//         const [resultado, campos] =
//             await connection.execute(`insert into pessoa values (?,?)`, [id, nome])
//         console.log(resultado)
//         res.status(201).json({ mensagem: "Sucesso" })
//     } catch (err) {
//         const mysqlErrorHandle = new MysqlErrorHandle(err, res)
//         mysqlErrorHandle.validar()
//     }
// })//Inserir
// app.post("/cadastro_produto", async (req, res) => {
//     try {
//         //const preparacao = await connection.prepare("select * from pessoa");
//         const { id, nome, categoria, preco, data_criacao, data_modificacao } = req.body

//         //Valide se o id e o nome foram passados corretamente. (Algum valor)
//         //Se não foram, retorne o código 400 com a mensagem "id ou nome inválidos"
//         //Não deixe o código executar a parte de baixo quando for inválido.
//         if (!id || !nome || !categoria || !preco || !data_criacao || !data_modificacao)
//             return res.status(500).json({ mensagem: "Erro: Os dados de id,nome,categoria,preco,data_criacao,data_modificacao estão incorretos!" })

//         const [resultado, campos] =
//             await connection.execute(`insert into produto values (?,?,?,?,?,?)`, [id, nome, categoria, preco, data_criacao, data_modificacao])
//         console.log(resultado)
//         res.status(201).json({ mensagem: "Sucesso" })
//     } catch (err) {
//         const mysqlErrorHandle = new MysqlErrorHandle(err, res)
//         mysqlErrorHandle.validar()
//     }
// })//Inserir
// app.get("/listar_produtos", async (req, res) => {
//     try {
//         const [resultado, campos] =
//             await connection.execute(`SELECT * FROM produto`)
//         console.log(resultado)
//         res.status(200).json(resultado)
//     } catch (err) {
//         const mysqlErrorHandle = new MysqlErrorHandle(err, res)
//         mysqlErrorHandle.validar()
//     }
// })//listar
// app.get("/listar_produtos_informatica", async (req, res) => {
//     try {
//         const [resultado, campos] =
//             await connection.execute(`SELECT * FROM produto WHERE categoria='informática'`)
//         console.log(resultado)
//         res.status(200).json(resultado)
//     } catch (err) {
//         const mysqlErrorHandle = new MysqlErrorHandle(err, res)
//         mysqlErrorHandle.validar()
//     }
// })//listar
// app.get("/listar_produtos_caros", async (req, res) => {
//     try {
//         const [resultado, campos] =
//             await connection.execute(`SELECT * FROM produto WHERE preco>100`)
//         console.log(resultado)
//         res.status(200).json(resultado)
//     } catch (err) {
//         const mysqlErrorHandle = new MysqlErrorHandle(err, res)
//         mysqlErrorHandle.validar()
//     }
// })//listar
//Criar o servidor
app.listen(8000, () => {
    console.log("Servidor iniciado na porta 8000")
})

