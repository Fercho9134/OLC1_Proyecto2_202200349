"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bloque = void 0;
const Instruccion_1 = require("./Instruccion");
const TablaSimbolo_1 = require("../contexto/TablaSimbolo");
class Bloque extends Instruccion_1.Instruccion {
    constructor(instrucciones, linea, columna) {
        super(linea, columna);
        this.instrucciones = instrucciones;
    }
    interpretar(contexto, consola) {
        const nuevoContexto = new TablaSimbolo_1.Contexto(contexto);
        for (const instruccion of this.instrucciones) {
            const resultado = instruccion.interpretar(nuevoContexto, consola);
            if (resultado)
                return resultado;
        }
        return null;
    }
}
exports.Bloque = Bloque;
