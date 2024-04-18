"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aritmetica = void 0;
const Expresion_1 = require("./Expresion");
const Resultado_1 = require("./Resultado");
class Aritmetica extends Expresion_1.Expresion {
    constructor(izquierda, derecha, operador, linea, columna) {
        super(linea, columna);
        this.izquierda = izquierda;
        this.derecha = derecha;
        this.operador = operador;
    }
    interpretar(contexto) {
        const resultadoIzquierdo = this.izquierda.interpretar(contexto);
        const resultadoDerecho = this.derecha.interpretar(contexto);
        if (this.operador === Resultado_1.OperadorAritmetico.SUMA) {
            if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.ENTERO && resultadoDerecho.tipo === Resultado_1.TipoDatos.ENTERO) {
                return { valor: resultadoIzquierdo.valor + resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.ENTERO };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.ENTERO && resultadoDerecho.tipo === Resultado_1.TipoDatos.DOBLE) {
                return { valor: resultadoIzquierdo.valor + resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.DOBLE };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.ENTERO && resultadoDerecho.tipo === Resultado_1.TipoDatos.BOOLEANO) {
                return { valor: resultadoIzquierdo.valor + resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.ENTERO };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.ENTERO && resultadoDerecho.tipo === Resultado_1.TipoDatos.CADENA) {
                return { valor: resultadoIzquierdo.valor.toString() + resultadoDerecho.valor.toString(), tipo: Resultado_1.TipoDatos.CADENA };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.ENTERO && resultadoDerecho.tipo === Resultado_1.TipoDatos.CARACTER) {
                return { valor: resultadoIzquierdo.valor + resultadoDerecho.valor.charCodeAt(0), tipo: Resultado_1.TipoDatos.ENTERO };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.DOBLE && resultadoDerecho.tipo === Resultado_1.TipoDatos.ENTERO) {
                return { valor: resultadoIzquierdo.valor + resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.DOBLE };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.DOBLE && resultadoDerecho.tipo === Resultado_1.TipoDatos.DOBLE) {
                return { valor: resultadoIzquierdo.valor + resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.DOBLE };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.DOBLE && resultadoDerecho.tipo === Resultado_1.TipoDatos.BOOLEANO) {
                return { valor: resultadoIzquierdo.valor + resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.DOBLE };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.DOBLE && resultadoDerecho.tipo === Resultado_1.TipoDatos.CADENA) {
                return { valor: resultadoIzquierdo.valor.toString() + resultadoDerecho.valor.toString(), tipo: Resultado_1.TipoDatos.CADENA };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.DOBLE && resultadoDerecho.tipo === Resultado_1.TipoDatos.CARACTER) {
                return { valor: resultadoIzquierdo.valor + resultadoDerecho.valor.charCodeAt(0), tipo: Resultado_1.TipoDatos.DOBLE };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.BOOLEANO && resultadoDerecho.tipo === Resultado_1.TipoDatos.ENTERO) {
                return { valor: resultadoIzquierdo.valor + resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.ENTERO };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.BOOLEANO && resultadoDerecho.tipo === Resultado_1.TipoDatos.DOBLE) {
                return { valor: resultadoIzquierdo.valor + resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.DOBLE };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.BOOLEANO && resultadoDerecho.tipo === Resultado_1.TipoDatos.BOOLEANO) {
                //Error semantico
                return { valor: null, tipo: Resultado_1.TipoDatos.ERROR };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.BOOLEANO && resultadoDerecho.tipo === Resultado_1.TipoDatos.CADENA) {
                return { valor: resultadoIzquierdo.valor.toString() + resultadoDerecho.valor.toString(), tipo: Resultado_1.TipoDatos.CADENA };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.BOOLEANO && resultadoDerecho.tipo === Resultado_1.TipoDatos.CARACTER) {
                //Error semantico
                return { valor: null, tipo: Resultado_1.TipoDatos.ERROR };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.CADENA && resultadoDerecho.tipo === Resultado_1.TipoDatos.ENTERO) {
                return { valor: resultadoIzquierdo.valor.toString() + resultadoDerecho.valor.toString(), tipo: Resultado_1.TipoDatos.CADENA };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.CADENA && resultadoDerecho.tipo === Resultado_1.TipoDatos.DOBLE) {
                return { valor: resultadoIzquierdo.valor.toString() + resultadoDerecho.valor.toString(), tipo: Resultado_1.TipoDatos.CADENA };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.CADENA && resultadoDerecho.tipo === Resultado_1.TipoDatos.BOOLEANO) {
                return { valor: resultadoIzquierdo.valor.toString() + resultadoDerecho.valor.toString(), tipo: Resultado_1.TipoDatos.CADENA };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.CADENA && resultadoDerecho.tipo === Resultado_1.TipoDatos.CADENA) {
                return { valor: resultadoIzquierdo.valor.toString() + resultadoDerecho.valor.toString(), tipo: Resultado_1.TipoDatos.CADENA };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.CADENA && resultadoDerecho.tipo === Resultado_1.TipoDatos.CARACTER) {
                return { valor: resultadoIzquierdo.valor.toString() + resultadoDerecho.valor.toString(), tipo: Resultado_1.TipoDatos.CADENA };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.CARACTER && resultadoDerecho.tipo === Resultado_1.TipoDatos.ENTERO) {
                return { valor: resultadoIzquierdo.valor.charCodeAt(0) + resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.ENTERO };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.CARACTER && resultadoDerecho.tipo === Resultado_1.TipoDatos.DOBLE) {
                return { valor: resultadoIzquierdo.valor.charCodeAt(0) + resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.DOBLE };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.CARACTER && resultadoDerecho.tipo === Resultado_1.TipoDatos.BOOLEANO) {
                //Error semantico
                return { valor: null, tipo: Resultado_1.TipoDatos.ERROR };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.CARACTER && resultadoDerecho.tipo === Resultado_1.TipoDatos.CADENA) {
                return { valor: resultadoIzquierdo.valor.toString() + resultadoDerecho.valor.toString(), tipo: Resultado_1.TipoDatos.CADENA };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.CARACTER && resultadoDerecho.tipo === Resultado_1.TipoDatos.CARACTER) {
                return { valor: resultadoIzquierdo.valor.toString() + resultadoDerecho.valor.toString(), tipo: Resultado_1.TipoDatos.CADENA };
            }
            else {
                //Error semantico
                return { valor: null, tipo: Resultado_1.TipoDatos.ERROR };
            }
        }
        else if (this.operador === Resultado_1.OperadorAritmetico.RESTA) {
            if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.ENTERO && resultadoDerecho.tipo === Resultado_1.TipoDatos.ENTERO) {
                return { valor: resultadoIzquierdo.valor - resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.ENTERO };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.ENTERO && resultadoDerecho.tipo === Resultado_1.TipoDatos.DOBLE) {
                return { valor: resultadoIzquierdo.valor - resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.DOBLE };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.ENTERO && resultadoDerecho.tipo === Resultado_1.TipoDatos.BOOLEANO) {
                return { valor: resultadoIzquierdo.valor - resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.ENTERO };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.ENTERO && resultadoDerecho.tipo === Resultado_1.TipoDatos.CARACTER) {
                return { valor: resultadoIzquierdo.valor - resultadoDerecho.valor.charCodeAt(0), tipo: Resultado_1.TipoDatos.ENTERO };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.DOBLE && resultadoDerecho.tipo === Resultado_1.TipoDatos.ENTERO) {
                return { valor: resultadoIzquierdo.valor - resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.DOBLE };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.DOBLE && resultadoDerecho.tipo === Resultado_1.TipoDatos.DOBLE) {
                return { valor: resultadoIzquierdo.valor - resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.DOBLE };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.DOBLE && resultadoDerecho.tipo === Resultado_1.TipoDatos.BOOLEANO) {
                return { valor: resultadoIzquierdo.valor - resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.DOBLE };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.DOBLE && resultadoDerecho.tipo === Resultado_1.TipoDatos.CARACTER) {
                return { valor: resultadoIzquierdo.valor - resultadoDerecho.valor.charCodeAt(0), tipo: Resultado_1.TipoDatos.DOBLE };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.BOOLEANO && resultadoDerecho.tipo === Resultado_1.TipoDatos.ENTERO) {
                return { valor: resultadoIzquierdo.valor - resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.ENTERO };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.BOOLEANO && resultadoDerecho.tipo === Resultado_1.TipoDatos.DOBLE) {
                return { valor: resultadoIzquierdo.valor - resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.DOBLE };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.CARACTER && resultadoDerecho.tipo === Resultado_1.TipoDatos.ENTERO) {
                return { valor: resultadoIzquierdo.valor.charCodeAt(0) - resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.ENTERO };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.CARACTER && resultadoDerecho.tipo === Resultado_1.TipoDatos.DOBLE) {
                return { valor: resultadoIzquierdo.valor.charCodeAt(0) - resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.DOBLE };
            }
            else {
                //Error semantico
                return { valor: null, tipo: Resultado_1.TipoDatos.ERROR };
            }
        }
        else if (this.operador === Resultado_1.OperadorAritmetico.MULTIPLICACION) {
            if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.ENTERO && resultadoDerecho.tipo === Resultado_1.TipoDatos.ENTERO) {
                return { valor: resultadoIzquierdo.valor * resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.ENTERO };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.ENTERO && resultadoDerecho.tipo === Resultado_1.TipoDatos.DOBLE) {
                return { valor: resultadoIzquierdo.valor * resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.DOBLE };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.ENTERO && resultadoDerecho.tipo === Resultado_1.TipoDatos.CARACTER) {
                return { valor: resultadoIzquierdo.valor * resultadoDerecho.valor.charCodeAt(0), tipo: Resultado_1.TipoDatos.ENTERO };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.DOBLE && resultadoDerecho.tipo === Resultado_1.TipoDatos.ENTERO) {
                return { valor: resultadoIzquierdo.valor * resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.DOBLE };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.DOBLE && resultadoDerecho.tipo === Resultado_1.TipoDatos.DOBLE) {
                return { valor: resultadoIzquierdo.valor * resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.DOBLE };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.DOBLE && resultadoDerecho.tipo === Resultado_1.TipoDatos.CARACTER) {
                return { valor: resultadoIzquierdo.valor * resultadoDerecho.valor.charCodeAt(0), tipo: Resultado_1.TipoDatos.DOBLE };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.CARACTER && resultadoDerecho.tipo === Resultado_1.TipoDatos.ENTERO) {
                return { valor: resultadoIzquierdo.valor.charCodeAt(0) * resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.ENTERO };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.CARACTER && resultadoDerecho.tipo === Resultado_1.TipoDatos.DOBLE) {
                return { valor: resultadoIzquierdo.valor.charCodeAt(0) * resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.DOBLE };
            }
            else {
                //Error semantico
                return { valor: null, tipo: Resultado_1.TipoDatos.ERROR };
            }
        }
        else if (this.operador === Resultado_1.OperadorAritmetico.DIVISION) {
            if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.ENTERO && resultadoDerecho.tipo === Resultado_1.TipoDatos.ENTERO) {
                return { valor: resultadoIzquierdo.valor / resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.ENTERO };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.ENTERO && resultadoDerecho.tipo === Resultado_1.TipoDatos.DOBLE) {
                return { valor: resultadoIzquierdo.valor / resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.DOBLE };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.ENTERO && resultadoDerecho.tipo === Resultado_1.TipoDatos.CARACTER) {
                return { valor: resultadoIzquierdo.valor / resultadoDerecho.valor.charCodeAt(0), tipo: Resultado_1.TipoDatos.ENTERO };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.DOBLE && resultadoDerecho.tipo === Resultado_1.TipoDatos.ENTERO) {
                return { valor: resultadoIzquierdo.valor / resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.DOBLE };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.DOBLE && resultadoDerecho.tipo === Resultado_1.TipoDatos.DOBLE) {
                return { valor: resultadoIzquierdo.valor / resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.DOBLE };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.DOBLE && resultadoDerecho.tipo === Resultado_1.TipoDatos.CARACTER) {
                return { valor: resultadoIzquierdo.valor / resultadoDerecho.valor.charCodeAt(0), tipo: Resultado_1.TipoDatos.DOBLE };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.CARACTER && resultadoDerecho.tipo === Resultado_1.TipoDatos.ENTERO) {
                return { valor: resultadoIzquierdo.valor.charCodeAt(0) / resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.ENTERO };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.CARACTER && resultadoDerecho.tipo === Resultado_1.TipoDatos.DOBLE) {
                return { valor: resultadoIzquierdo.valor.charCodeAt(0) / resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.DOBLE };
            }
            else {
                //Error semantico
                return { valor: null, tipo: Resultado_1.TipoDatos.ERROR };
            }
        }
        else if (this.operador === Resultado_1.OperadorAritmetico.POTENCIA) {
            if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.ENTERO && resultadoDerecho.tipo === Resultado_1.TipoDatos.ENTERO) {
                return { valor: Math.pow(resultadoIzquierdo.valor, resultadoDerecho.valor), tipo: Resultado_1.TipoDatos.ENTERO };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.ENTERO && resultadoDerecho.tipo === Resultado_1.TipoDatos.DOBLE) {
                return { valor: Math.pow(resultadoIzquierdo.valor, resultadoDerecho.valor), tipo: Resultado_1.TipoDatos.DOBLE };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.DOBLE && resultadoDerecho.tipo === Resultado_1.TipoDatos.ENTERO) {
                return { valor: Math.pow(resultadoIzquierdo.valor, resultadoDerecho.valor), tipo: Resultado_1.TipoDatos.DOBLE };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.DOBLE && resultadoDerecho.tipo === Resultado_1.TipoDatos.DOBLE) {
                return { valor: Math.pow(resultadoIzquierdo.valor, resultadoDerecho.valor), tipo: Resultado_1.TipoDatos.DOBLE };
            }
            else {
                //Error semantico
                return { valor: null, tipo: Resultado_1.TipoDatos.ERROR };
            }
        }
        else if (this.operador === Resultado_1.OperadorAritmetico.MODULO) {
            if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.ENTERO && resultadoDerecho.tipo === Resultado_1.TipoDatos.ENTERO) {
                return { valor: resultadoIzquierdo.valor % resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.DOBLE };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.ENTERO && resultadoDerecho.tipo === Resultado_1.TipoDatos.DOBLE) {
                return { valor: resultadoIzquierdo.valor % resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.DOBLE };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.DOBLE && resultadoDerecho.tipo === Resultado_1.TipoDatos.ENTERO) {
                return { valor: resultadoIzquierdo.valor % resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.DOBLE };
            }
            else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.DOBLE && resultadoDerecho.tipo === Resultado_1.TipoDatos.DOBLE) {
                return { valor: resultadoIzquierdo.valor % resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.DOBLE };
            }
            else {
                //Error semantico
                return { valor: null, tipo: Resultado_1.TipoDatos.ERROR };
            }
        }
        return { valor: null, tipo: Resultado_1.TipoDatos.ERROR };
    }
}
exports.Aritmetica = Aritmetica;
