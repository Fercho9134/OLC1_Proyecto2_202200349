"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contexto = void 0;
const Simbolo_1 = require("./Simbolo");
class Contexto {
    constructor(padre) {
        this.consola = [];
        this.tablaSimbolos = new Map;
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
    obtenerSimbolo(id) {
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
    actualizarSimbolo(id, valor) {
        this.tablaSimbolos.set(id, valor);
    }
    obtenerGlobal() {
        let contexto_actual = this;
        while (contexto_actual.padre != null) {
            contexto_actual = contexto_actual.padre;
        }
        return contexto_actual;
    }
}
exports.Contexto = Contexto;
