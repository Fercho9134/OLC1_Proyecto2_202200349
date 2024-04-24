"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Round = void 0;
const Expresion_1 = require("./Expresion");
const Resultado_1 = require("./Resultado");
class Round extends Expresion_1.Expresion {
    constructor(expresion, linea, columna) {
        super(linea, columna);
        this.expresion = expresion;
    }
    interpretar(contexto) {
        const valor = this.expresion.interpretar(contexto);
        if (valor.tipo != Resultado_1.TipoDatos.DOBLE && valor.tipo != Resultado_1.TipoDatos.ENTERO) {
            throw new Error(`Error: se esperaba un double y se recibio un ${valor.tipo}`);
        }
        if (valor.tipo == Resultado_1.TipoDatos.DOBLE) {
            return { valor: Math.round(valor.valor), tipo: Resultado_1.TipoDatos.ENTERO };
        }
        return { valor: valor.valor, tipo: Resultado_1.TipoDatos.ENTERO };
    }
}
exports.Round = Round;
