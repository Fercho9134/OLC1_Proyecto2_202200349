"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Simbolo_Metodo = void 0;
class Simbolo_Metodo {
    constructor(id, variables, instrucciones) {
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
exports.Simbolo_Metodo = Simbolo_Metodo;
