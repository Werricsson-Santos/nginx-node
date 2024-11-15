const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const insertQuery = `INSERT INTO people(name) values('Werricsson')`
connection.query(insertQuery)

app.get('/', (req,res) => {
    const selectQuery = `SELECT * FROM people`
    connection.query(selectQuery, (err, results) => {
        if (err) {
            res.status(500).send("Erro ao consultar o banco de dados");
            throw err;
        }

        const names = results.map(row => `<li>${row.name}</li>`).join('');
        res.send(`<h1>Full Cycle</h1>
            <ul>${names}</ul>
        `)
    })
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})