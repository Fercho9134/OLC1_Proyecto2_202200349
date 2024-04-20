"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contexto = void 0;
const Simbolo_1 = require("./Simbolo");
const Simbolo_Funcion_1 = require("./Simbolo_Funcion");
const Simbolo_Metodo_1 = require("./Simbolo_Metodo");
class Contexto {
    constructor(padre) {
        this.tablaSimbolos = new Map;
        this.tablasMetodos = new Map;
        this.tablasFunciones = new Map;
        this.padre = padre;
    }
    guardarSimbolo(id, valor, tipo, tipoSimbolo) {
        const existe = this.tablaSimbolos.has(id);
        if (!existe) {
            this.tablaSimbolos.set(id, new Simbolo_1.Simbolo(id, valor, tipo, tipoSimbolo));
            return;
        }
        throw new Error(`El simbolo ${id} ya existe en este contexto`);
    }
    guardarMetodo(id, variables, instrucciones) {
        const existe = this.tablasMetodos.has(id);
        if (!existe) {
            this.tablasMetodos.set(id, new Simbolo_Metodo_1.Simbolo_Metodo(id, variables, instrucciones));
            return;
        }
        throw new Error(`El metodo ${id} ya existe en este contexto`);
    }
    guardarFuncion(tipo, id, variables, instrucciones) {
        const existe = this.tablasFunciones.has(id);
        if (!existe) {
            this.tablasFunciones.set(id, new Simbolo_Funcion_1.Simbolo_Funcion(tipo, id, variables, instrucciones));
            return;
        }
        throw new Error(`La funcion ${id} ya existe en este contexto`);
    }
    obtenerVariable(id) {
        let contexto_actual = this;
        while (contexto_actual != null) {
            const existe = contexto_actual.tablaSimbolos.has(id);
            if (existe) {
                return contexto_actual.tablaSimbolos.get(id);
            }
            contexto_actual = contexto_actual.padre;
        }
        return undefined;
    }
    obtenerMetodo(id) {
        let contexto_actual = this;
        while (contexto_actual != null) {
            const existe = contexto_actual.tablasMetodos.has(id);
            if (existe) {
                return contexto_actual.tablasMetodos.get(id);
            }
            contexto_actual = contexto_actual.padre;
        }
        return undefined;
    }
    obtenerFuncion(id) {
        let contexto_actual = this;
        while (contexto_actual != null) {
            const existe = contexto_actual.tablasFunciones.has(id);
            if (existe) {
                return contexto_actual.tablasFunciones.get(id);
            }
            contexto_actual = contexto_actual.padre;
        }
        return undefined;
    }
    actualizarSimbolo(id, valor) {
        this.tablaSimbolos.set(id, valor);
    }
}
exports.Contexto = Contexto;
