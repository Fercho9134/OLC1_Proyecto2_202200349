"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AST = void 0;
class AST {
    constructor(instrucciones) {
        this.instrucciones = instrucciones;
        this.consola = [];
    }
    Ejecutar() {
        this.instrucciones.forEach(instruccion => {
            instruccion.interpretar(this.consola);
        });
    }
    getConsola() {
        return this.consola.join("");
    }
}
exports.AST = AST;
