"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cout = void 0;
const Instruccion_1 = require("./Instruccion");
class Cout extends Instruccion_1.Instruccion {
    constructor(expresiones, linea, columna) {
        super(linea, columna);
        this.expresiones = expresiones;
    }
    interpretar(contexto, consola) {
        consola.push("\n");
        this.expresiones.forEach(expresion => {
            const resultado = expresion.interpretar(contexto);
            consola.push(resultado.valor);
        });
        return null;
    }
}
exports.Cout = Cout;
