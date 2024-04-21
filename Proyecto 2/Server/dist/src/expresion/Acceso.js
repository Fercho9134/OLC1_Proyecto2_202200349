"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Acceso = void 0;
const Simbolo_1 = require("../contexto/Simbolo");
const Expresion_1 = require("./Expresion");
class Acceso extends Expresion_1.Expresion {
    constructor(id, fila, columna) {
        super(fila, columna);
        this.id = id;
    }
    interpretar(contexto) {
        const simbolo = contexto.obtenerSimbolo(this.id);
        if (simbolo) {
            if (simbolo.tipoSimbolo == Simbolo_1.TipoSimbolo.VARIABLE) {
                const resultado = simbolo.obtenerValor();
                console.log(resultado);
                return { valor: resultado.valor, tipo: resultado.tipo };
            }
            throw new Error(`El simbolo ${this.id} no es una variable`);
        }
        throw new Error(`El simbolo ${this.id} no existe en este contexto`);
    }
}
exports.Acceso = Acceso;
