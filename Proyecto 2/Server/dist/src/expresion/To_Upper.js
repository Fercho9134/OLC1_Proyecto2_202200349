"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.To_Upper = void 0;
const Expresion_1 = require("./Expresion");
const Resultado_1 = require("./Resultado");
class To_Upper extends Expresion_1.Expresion {
    constructor(expresion, linea, columna) {
        super(linea, columna);
        this.expresion = expresion;
    }
    interpretar(contexto) {
        const valor = this.expresion.interpretar(contexto);
        if (valor.tipo != Resultado_1.TipoDatos.CADENA) {
            throw new Error(`Error: se esperaba una cadena y se recibio un ${valor.tipo}`);
        }
        return { valor: valor.valor.toUpperCase(), tipo: Resultado_1.TipoDatos.CADENA };
    }
}
exports.To_Upper = To_Upper;
