"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Declaracion = void 0;
const Simbolo_1 = require("../../contexto/Simbolo");
const Instruccion_1 = require("../Instruccion");
class Declaracion extends Instruccion_1.Instruccion {
    constructor(tipo, id, expresion, linea, columna) {
        super(linea, columna);
        this.tipo = tipo;
        this.id = id;
        this.expresion = expresion;
    }
    interpretar(contexto, consola) {
        // Existe?
        const valor = this.expresion.interpretar(contexto);
        if (valor.tipo != this.tipo) {
            throw new Error(`Error semantico: No se puede asignar un valor de tipo ${valor.tipo} a una variable de tipo ${this.tipo} en la linea ${this.linea} y columna ${this.columna}`);
        }
        contexto.guardarSimbolo(this.id, valor, valor.tipo, Simbolo_1.TipoSimbolo.VARIABLE);
        return null;
    }
}
exports.Declaracion = Declaracion;
