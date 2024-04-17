"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logico = void 0;
const Expresion_1 = require("./Expresion");
const Resultado_1 = require("./Resultado");
class Logico extends Expresion_1.Expresion {
    constructor(izquierda, derecha, operador, linea, columna) {
        super(linea, columna);
        this.izquierda = izquierda;
        this.derecha = derecha;
        this.operador = operador;
    }
    interpretar() {
        let resultadoIzquierdo = null;
        if (this.operador != Resultado_1.OperadorLogico.NOT) {
            resultadoIzquierdo = this.izquierda.interpretar();
        }
        const resultadoDerecho = this.derecha.interpretar();
        if (resultadoIzquierdo != null && this.operador == Resultado_1.OperadorLogico.AND) {
            if (resultadoIzquierdo.tipo == Resultado_1.TipoDatos.BOOLEANO && resultadoDerecho.tipo == Resultado_1.TipoDatos.BOOLEANO) {
                return { valor: resultadoIzquierdo.valor && resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
        }
        else if (resultadoIzquierdo != null && this.operador == Resultado_1.OperadorLogico.OR) {
            if (resultadoIzquierdo.tipo == Resultado_1.TipoDatos.BOOLEANO && resultadoDerecho.tipo == Resultado_1.TipoDatos.BOOLEANO) {
                return { valor: resultadoIzquierdo.valor || resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
        }
        else if (this.operador == Resultado_1.OperadorLogico.NOT) {
            if (resultadoDerecho.tipo == Resultado_1.TipoDatos.BOOLEANO) {
                return { valor: !resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
        }
        return { valor: null, tipo: Resultado_1.TipoDatos.ERROR };
    }
}
exports.Logico = Logico;
