"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToString = void 0;
const Expresion_1 = require("./Expresion");
const Resultado_1 = require("./Resultado");
class ToString extends Expresion_1.Expresion {
    constructor(expresion, linea, columna) {
        super(linea, columna);
        this.expresion = expresion;
    }
    interpretar(contexto) {
        const valor = this.expresion.interpretar(contexto);
        return { valor: valor.valor.toString(), tipo: Resultado_1.TipoDatos.CADENA };
    }
}
exports.ToString = ToString;
