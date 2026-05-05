import mysql from 'mysql2/promise';
import express from 'express'
import MysqlErrorHandle from './mysql_error_handle.js';
import cors from 'cors'

import connection from './mysql_connection_handle.js'

const app = express()
app.use(cors())
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

/**
 * 5) ROTA    /quantidade_produtos_por_cliente
 * Crie um código que retorne o nome do cliente e a quantidade de produtos que cada pedido tem
 *    formato    [{nome:"Nome Cliente",idpedido:1,quantidade_produtos:1000}]
 * 
 * 6)    /valor_pedido_total
 * Crie um código que retorne o nome do cliente e o valor total de cada pedido
 *    [{nome:"Nome Cliente",valor_total:1000}]
 */

5;
app.get("/quantidade_produtos_por_cliente", async (req, res) => {
  try {
    const query = `
      SELECT 
        c.nome, 
        p.idpedidos AS idpedido, 
        SUM(ip.quantidade) AS quantidade_produtos
      FROM clientes c
      JOIN pedidos p ON c.idclientes = p.clientes_idclientes
      JOIN itenspedidos ip ON p.idpedidos = ip.pedidos_idpedidos
      GROUP BY p.idpedidos, c.nome
    `;

    const [resultado] = await connection.execute(query);
    res.status(200).json(resultado);
  } catch (err) {
    const mysqlErrorHandle = new MysqlErrorHandle(err, res);
    mysqlErrorHandle.validar();
  }
});

6;
app.get("/valor_pedido_total", async (req, res) => {
  try {
    const query = `
      SELECT clientes.nome as nome, SUM(quantidade*preco) as valor_total FROM clientes INNER JOIN
pedidos on clientes_idclientes=idclientes INNER JOIN
itenspedidos ON pedidos_idpedidos=idpedidos INNER JOIN produtos
ON idprodutos=produtos_idprodutos GROUP BY idpedidos
    `;

    const [resultado] = await connection.execute(query);
    res.status(200).json(resultado);
  } catch (err) {
    const mysqlErrorHandle = new MysqlErrorHandle(err, res);
    mysqlErrorHandle.validar();
  }
});

app.listen(8000, () => {
    console.log("Servidor iniciado na porta 8000")
})
