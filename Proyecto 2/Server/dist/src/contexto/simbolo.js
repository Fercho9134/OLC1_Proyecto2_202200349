"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoSimbolo = exports.Simbolo = void 0;
class Simbolo {
    constructor(id, valor, tipo, tipoSimbolo) {
        this.id = id;
        this.valor = valor;
        this.tipo = tipo;
        this.tipoSimbolo = tipoSimbolo;
    }
    obtenerValor() {
        return this.valor;
    }
    actualizarValor(valor) {
        this.valor = valor;
    }
    obtenerTipo() {
        return this.tipo;
    }
}
exports.Simbolo = Simbolo;
var TipoSimbolo;
(function (TipoSimbolo) {
    TipoSimbolo[TipoSimbolo["VARIABLE"] = 0] = "VARIABLE";
    TipoSimbolo[TipoSimbolo["FUNCION"] = 1] = "FUNCION";
    TipoSimbolo[TipoSimbolo["METODO"] = 2] = "METODO";
})(TipoSimbolo || (exports.TipoSimbolo = TipoSimbolo = {}));
