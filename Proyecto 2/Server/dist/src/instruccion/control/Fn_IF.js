"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fn_IF = void 0;
const Instruccion_1 = require("../Instruccion");
const Resultado_1 = require("../../expresion/Resultado");
class Fn_IF extends Instruccion_1.Instruccion {
    constructor(condicion, bloque_if, bloque_else, fila, columna) {
        super(fila, columna);
        this.condicion = condicion;
        this.bloque_if = bloque_if;
        this.bloque_else = bloque_else;
    }
    interpretar(contexto, consola) {
        var _a;
        const condicion = this.condicion.interpretar(contexto);
        if (condicion.tipo != Resultado_1.TipoDatos.BOOLEANO)
            throw Error("La condición no es booleana");
        if (condicion.valor) {
            const retorno = this.bloque_if.interpretar(contexto, consola);
            if (retorno)
                return retorno;
        }
        else {
            const retorno = (_a = this.bloque_else) === null || _a === void 0 ? void 0 : _a.interpretar(contexto, consola);
            if (retorno)
                return retorno;
        }
        return null;
    }
}
exports.Fn_IF = Fn_IF;
