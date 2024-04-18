"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asignacion = void 0;
const Simbolo_1 = require("../contexto/Simbolo");
const Instruccion_1 = require("./Instruccion");
class Asignacion extends Instruccion_1.Instruccion {
    constructor(id, expresion, linea, columna) {
        super(linea, columna);
        this.id = id;
        this.expresion = expresion;
    }
    interpretar(contexto, consola) {
        const simbolo = contexto.obtenerVariable(this.id);
        if (simbolo) {
            if (simbolo.tipoSimbolo == Simbolo_1.TipoSimbolo.VARIABLE) {
                const nuevoValor = this.expresion.interpretar(contexto);
                if (nuevoValor.tipo != simbolo.tipo) {
                    throw new Error(`Error semantico: No se puede asignar un valor de tipo ${nuevoValor.tipo} a una variable de tipo ${simbolo.tipo} en la linea ${this.linea} y columna ${this.columna}`);
                }
                simbolo.actualizarValor(nuevoValor);
                contexto.actualizarSimbolo(this.id, simbolo);
                return null;
            }
            throw new Error("No es tipo variable");
        }
        throw new Error("La variable no existe");
    }
}
exports.Asignacion = Asignacion;
