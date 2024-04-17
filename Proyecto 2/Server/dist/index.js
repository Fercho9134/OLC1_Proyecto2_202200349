"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parser = require("../analizador");
function interprete(contenido) {
    try {
        const ast = parser.parse(contenido);
        ast.Ejecutar();
        console.log("Analisis exitosa");
        return ast.getConsola();
    }
    catch (error) {
        console.error(error);
    }
}
const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
app.use(cors());
app.use(express.json());
app.post('/interpretar', (req, res) => {
    const contenido = req.body.contenido;
    const resultado = interprete(contenido);
    res.json({ resultado: resultado });
});
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
