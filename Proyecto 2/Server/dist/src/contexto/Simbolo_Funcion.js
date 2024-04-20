"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Simbolo_Funcion = void 0;
class Simbolo_Funcion {
    constructor(tipo, id, variables, instrucciones) {
        this.tipo = tipo;
        this.id = id;
        this.variables = variables;
        this.instrucciones = instrucciones;
    }
    obtenerVariables() {
        return this.variables;
    }
    obtenerInstrucciones() {
        return this.instrucciones;
    }
    obtenerId() {
        return this.id;
    }
}
exports.Simbolo_Funcion = Simbolo_Funcion;
