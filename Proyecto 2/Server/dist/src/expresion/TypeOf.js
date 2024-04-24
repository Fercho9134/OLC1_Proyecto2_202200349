"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOf = void 0;
const Expresion_1 = require("./Expresion");
const Resultado_1 = require("./Resultado");
const Simbolo_1 = require("../contexto/Simbolo");
class TypeOf extends Expresion_1.Expresion {
    constructor(id, fila, columna) {
        super(fila, columna);
        this.id = id;
    }
    interpretar(contexto) {
        const simbolo = contexto.obtenerSimbolo(this.id.id);
        console.log(simbolo);
        if (simbolo) {
            if (simbolo.tipoSimbolo == Simbolo_1.TipoSimbolo.ARREGLO) {
                return { valor: "Arreglo", tipo: Resultado_1.TipoDatos.CADENA };
            }
            else if (simbolo.tipoSimbolo == Simbolo_1.TipoSimbolo.VARIABLE) {
                return { valor: simbolo.tipo, tipo: Resultado_1.TipoDatos.CADENA };
            }
            throw new Error(`El simbolo ${this.id} no es un arreglo`);
        }
        throw new Error(`El simbolo ${this.id} no existe en este contexto`);
    }
}
exports.TypeOf = TypeOf;
