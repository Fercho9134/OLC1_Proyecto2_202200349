"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ternario = void 0;
const Instruccion_1 = require("../Instruccion");
const Resultado_1 = require("../../expresion/Resultado");
class Ternario extends Instruccion_1.Instruccion {
    constructor(condicion, expresionVerdadera, expresionFalsa, fila, columna) {
        super(fila, columna);
        this.condicion = condicion;
        this.expresionVerdadera = expresionVerdadera;
        this.expresionFalsa = expresionFalsa;
    }
    interpretar(contexto, consola) {
        const condicion = this.condicion.interpretar(contexto);
        if (condicion.tipo != Resultado_1.TipoDatos.BOOLEANO)
            throw Error("La condición no es booleana");
        if (condicion.valor) {
            return this.expresionVerdadera.interpretar(contexto).valor;
        }
        else {
            return this.expresionFalsa.interpretar(contexto).valor;
        }
    }
}
exports.Ternario = Ternario;
