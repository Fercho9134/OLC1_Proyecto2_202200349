"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Return = void 0;
const Resultado_1 = require("../../expresion/Resultado");
const Instruccion_1 = require("../Instruccion");
class Return extends Instruccion_1.Instruccion {
    constructor(retorno, linea, columna) {
        super(linea, columna);
        this.retorno = retorno;
    }
    interpretar(contexto, consola) {
        if (this.retorno != null) {
            const valor = this.retorno.interpretar(contexto);
            return { tipo: Resultado_1.TipoDatos.RETURN, valor: valor };
        }
        return "return";
    }
}
exports.Return = Return;
