"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AST = void 0;
const TablaSimbolo_1 = require("./contexto/TablaSimbolo");
class AST {
    constructor(instrucciones) {
        this.instrucciones = instrucciones;
        this.consola = [];
        this.contextoGlobal = new TablaSimbolo_1.Contexto(null);
    }
    Ejecutar() {
        this.instrucciones.forEach(instruccion => {
            instruccion.interpretar(this.contextoGlobal, this.consola);
        });
    }
    getConsola() {
        return this.consola.join("");
    }
}
exports.AST = AST;
