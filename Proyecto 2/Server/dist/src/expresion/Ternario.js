"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ternario = void 0;
const Expresion_1 = require("./Expresion");
const Resultado_1 = require("./Resultado");
class Ternario extends Expresion_1.Expresion {
    constructor(condicion, expresionVerdadera, expresionFalsa, fila, columna) {
        super(fila, columna);
        this.condicion = condicion;
        this.expresionVerdadera = expresionVerdadera;
        this.expresionFalsa = expresionFalsa;
    }
    interpretar(contexto) {
        const condicion = this.condicion.interpretar(contexto);
        if (condicion.tipo != Resultado_1.TipoDatos.BOOLEANO)
            throw Error("La condición no es booleana");
        if (condicion.valor) {
            return this.expresionVerdadera.interpretar(contexto);
        }
        else {
            return this.expresionFalsa.interpretar(contexto);
        }
    }
}
exports.Ternario = Ternario;
