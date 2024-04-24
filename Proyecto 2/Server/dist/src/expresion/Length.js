"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Length = void 0;
const Expresion_1 = require("./Expresion");
const Resultado_1 = require("./Resultado");
const Simbolo_1 = require("../contexto/Simbolo");
class Length extends Expresion_1.Expresion {
    constructor(id, fila, columna) {
        super(fila, columna);
        this.id = id;
    }
    interpretar(contexto) {
        const simbolo = contexto.obtenerSimbolo(this.id);
        if (simbolo) {
            if (simbolo.tipoSimbolo == Simbolo_1.TipoSimbolo.ARREGLO) {
                const vector = simbolo.obtenerValor();
                return { valor: vector.length, tipo: Resultado_1.TipoDatos.ENTERO };
            }
            else if (simbolo.tipoSimbolo == Simbolo_1.TipoSimbolo.VARIABLE) {
                if (simbolo.tipo == Resultado_1.TipoDatos.CADENA) {
                    const resultado = simbolo.obtenerValor();
                    return { valor: resultado.valor.length, tipo: Resultado_1.TipoDatos.ENTERO };
                }
            }
            throw new Error(`El simbolo ${this.id} no es un arreglo`);
        }
        throw new Error(`El simbolo ${this.id} no existe en este contexto`);
    }
}
exports.Length = Length;
