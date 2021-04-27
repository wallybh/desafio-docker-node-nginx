const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql')

const connection = mysql.createPool({
    connectionLimit: 10,
    host: 'desafio-nginx-node-db',
    user: 'root',
    database: process.env.MYSQL_DATABASE,
    multipleStatements: true
})

connection.query(`CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(500) NOT NULL,
    PRIMARY KEY (id));
    INSERT users(name) values ('James Smith');
    INSERT users(name) values ('Michael Smith');
    INSERT users(name) values ('Robert Smith')`);

app.get('/', (req, res) => {
    res.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">')
    res.write('<h1>Full Cycle Rocks!</h1>')

    writeNames(res)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

function writeNames(res) {
    connection.query("SELECT name FROM users", function (err, results, fields) {
        if (err) throw err;
        res.write('<ul class="list-group">')
        for (let i = 0; i < results.length; i++) {
            const name = results[i].name;
            res.write(`<li class="list-group-item">${name}</li>`)
        }
        res.write('</ul>')
        res.send()
    })
}