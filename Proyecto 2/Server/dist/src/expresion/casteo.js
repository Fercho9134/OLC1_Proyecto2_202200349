"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casteo = void 0;
const Expresion_1 = require("./Expresion");
const Resultado_1 = require("./Resultado");
class Casteo extends Expresion_1.Expresion {
    constructor(valor, tipo, linea, columna) {
        super(linea, columna);
        this.valor = valor;
        this.tipo_fin = tipo;
    }
    interpretar(contexto) {
        const resultado = this.valor.interpretar(contexto);
        //De algo a int
        if (this.tipo_fin === Resultado_1.TipoDatos.ENTERO) {
            console.log("Casteo a entero", resultado);
            if (resultado.tipo === Resultado_1.TipoDatos.DOBLE) {
                return { valor: (Math.floor(resultado.valor)), tipo: Resultado_1.TipoDatos.ENTERO };
            }
            else if (resultado.tipo === Resultado_1.TipoDatos.CARACTER) {
                return { valor: resultado.valor.charCodeAt(0), tipo: Resultado_1.TipoDatos.ENTERO };
            }
        }
        else if (this.tipo_fin === Resultado_1.TipoDatos.DOBLE) {
            if (resultado.tipo === Resultado_1.TipoDatos.ENTERO) {
                return { valor: parseFloat(resultado.valor), tipo: Resultado_1.TipoDatos.DOBLE };
            }
            else if (resultado.tipo === Resultado_1.TipoDatos.CARACTER) {
                return { valor: parseFloat(resultado.valor.charCodeAt(0)), tipo: Resultado_1.TipoDatos.DOBLE };
            }
        }
        else if (this.tipo_fin === Resultado_1.TipoDatos.CADENA) {
            if (resultado.tipo === Resultado_1.TipoDatos.ENTERO) {
                return { valor: resultado.valor.toString(), tipo: Resultado_1.TipoDatos.CADENA };
            }
            else if (resultado.tipo === Resultado_1.TipoDatos.DOBLE) {
                return { valor: resultado.valor.toString(), tipo: Resultado_1.TipoDatos.CADENA };
            }
        }
        else if (this.tipo_fin === Resultado_1.TipoDatos.CARACTER) {
            if (resultado.tipo === Resultado_1.TipoDatos.ENTERO) {
                return { valor: String.fromCharCode(resultado.valor), tipo: Resultado_1.TipoDatos.CARACTER };
            }
        }
        console.log("Error en casteo", resultado);
        console.log("Error en casteo", this.tipo_fin, resultado.tipo);
        return { valor: null, tipo: Resultado_1.TipoDatos.ERROR };
    }
}
exports.Casteo = Casteo;
