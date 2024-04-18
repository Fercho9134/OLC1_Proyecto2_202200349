"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Relacional = void 0;
const Expresion_1 = require("./Expresion");
const Resultado_1 = require("./Resultado");
class Relacional extends Expresion_1.Expresion {
    constructor(izquierda, derecha, operacion, linea, columna) {
        super(linea, columna);
        this.izquierda = izquierda;
        this.derecha = derecha;
        this.operacion = operacion;
    }
    interpretar(contexto) {
        const resultadoIzquierdo = this.izquierda.interpretar(contexto);
        const resultadoDerecho = this.derecha.interpretar(contexto);
        if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.ENTERO && resultadoDerecho.tipo === Resultado_1.TipoDatos.ENTERO) {
            if (this.operacion === Resultado_1.OperadorRelacional.IGUAL) {
                return { valor: resultadoIzquierdo.valor === resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.DIFERENTE) {
                return { valor: resultadoIzquierdo.valor !== resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.MAYOR) {
                return { valor: resultadoIzquierdo.valor > resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.MENOR) {
                return { valor: resultadoIzquierdo.valor < resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.MAYORIGUAL) {
                return { valor: resultadoIzquierdo.valor >= resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.MENORIGUAL) {
                return { valor: resultadoIzquierdo.valor <= resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
        }
        else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.ENTERO && resultadoDerecho.tipo === Resultado_1.TipoDatos.DOBLE) {
            if (this.operacion === Resultado_1.OperadorRelacional.IGUAL) {
                return { valor: resultadoIzquierdo.valor === resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.DIFERENTE) {
                return { valor: resultadoIzquierdo.valor !== resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.MAYOR) {
                return { valor: resultadoIzquierdo.valor > resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.MENOR) {
                return { valor: resultadoIzquierdo.valor < resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.MAYORIGUAL) {
                return { valor: resultadoIzquierdo.valor >= resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.MENORIGUAL) {
                return { valor: resultadoIzquierdo.valor <= resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
        }
        else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.ENTERO && resultadoDerecho.tipo === Resultado_1.TipoDatos.CARACTER) {
            if (this.operacion === Resultado_1.OperadorRelacional.IGUAL) {
                return { valor: resultadoIzquierdo.valor === resultadoDerecho.valor.charCodeAt(0), tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.DIFERENTE) {
                return { valor: resultadoIzquierdo.valor !== resultadoDerecho.valor.charCodeAt(0), tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.MAYOR) {
                return { valor: resultadoIzquierdo.valor > resultadoDerecho.valor.charCodeAt(0), tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.MENOR) {
                return { valor: resultadoIzquierdo.valor < resultadoDerecho.valor.charCodeAt(0), tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.MAYORIGUAL) {
                return { valor: resultadoIzquierdo.valor >= resultadoDerecho.valor.charCodeAt(0), tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.MENORIGUAL) {
                return { valor: resultadoIzquierdo.valor <= resultadoDerecho.valor.charCodeAt(0), tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
        }
        else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.DOBLE && resultadoDerecho.tipo === Resultado_1.TipoDatos.ENTERO) {
            if (this.operacion === Resultado_1.OperadorRelacional.IGUAL) {
                return { valor: resultadoIzquierdo.valor === resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.DIFERENTE) {
                return { valor: resultadoIzquierdo.valor !== resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.MAYOR) {
                return { valor: resultadoIzquierdo.valor > resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.MENOR) {
                return { valor: resultadoIzquierdo.valor < resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.MAYORIGUAL) {
                return { valor: resultadoIzquierdo.valor >= resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.MENORIGUAL) {
                return { valor: resultadoIzquierdo.valor <= resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
        }
        else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.DOBLE && resultadoDerecho.tipo === Resultado_1.TipoDatos.DOBLE) {
            if (this.operacion === Resultado_1.OperadorRelacional.IGUAL) {
                return { valor: resultadoIzquierdo.valor === resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.DIFERENTE) {
                return { valor: resultadoIzquierdo.valor !== resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.MAYOR) {
                return { valor: resultadoIzquierdo.valor > resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.MENOR) {
                return { valor: resultadoIzquierdo.valor < resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.MAYORIGUAL) {
                return { valor: resultadoIzquierdo.valor >= resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.MENORIGUAL) {
                return { valor: resultadoIzquierdo.valor <= resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
        }
        else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.DOBLE && resultadoDerecho.tipo === Resultado_1.TipoDatos.CARACTER) {
            if (this.operacion === Resultado_1.OperadorRelacional.IGUAL) {
                return { valor: resultadoIzquierdo.valor === resultadoDerecho.valor.charCodeAt(0), tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.DIFERENTE) {
                return { valor: resultadoIzquierdo.valor !== resultadoDerecho.valor.charCodeAt(0), tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.MAYOR) {
                return { valor: resultadoIzquierdo.valor > resultadoDerecho.valor.charCodeAt(0), tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.MENOR) {
                return { valor: resultadoIzquierdo.valor < resultadoDerecho.valor.charCodeAt(0), tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.MAYORIGUAL) {
                return { valor: resultadoIzquierdo.valor >= resultadoDerecho.valor.charCodeAt(0), tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.MENORIGUAL) {
                return { valor: resultadoIzquierdo.valor <= resultadoDerecho.valor.charCodeAt(0), tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
        }
        else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.CARACTER && resultadoDerecho.tipo === Resultado_1.TipoDatos.ENTERO) {
            if (this.operacion === Resultado_1.OperadorRelacional.IGUAL) {
                return { valor: resultadoIzquierdo.valor.charCodeAt(0) === resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.DIFERENTE) {
                return { valor: resultadoIzquierdo.valor.charCodeAt(0) !== resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.MAYOR) {
                return { valor: resultadoIzquierdo.valor.charCodeAt(0) > resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.MENOR) {
                return { valor: resultadoIzquierdo.valor.charCodeAt(0) < resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.MAYORIGUAL) {
                return { valor: resultadoIzquierdo.valor.charCodeAt(0) >= resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.MENORIGUAL) {
                return { valor: resultadoIzquierdo.valor.charCodeAt(0) <= resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
        }
        else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.CARACTER && resultadoDerecho.tipo === Resultado_1.TipoDatos.DOBLE) {
            if (this.operacion === Resultado_1.OperadorRelacional.IGUAL) {
                return { valor: resultadoIzquierdo.valor.charCodeAt(0) === resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.DIFERENTE) {
                return { valor: resultadoIzquierdo.valor.charCodeAt(0) !== resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.MAYOR) {
                return { valor: resultadoIzquierdo.valor.charCodeAt(0) > resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.MENOR) {
                return { valor: resultadoIzquierdo.valor.charCodeAt(0) < resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.MAYORIGUAL) {
                return { valor: resultadoIzquierdo.valor.charCodeAt(0) >= resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.MENORIGUAL) {
                return { valor: resultadoIzquierdo.valor.charCodeAt(0) <= resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
        }
        else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.CARACTER && resultadoDerecho.tipo === Resultado_1.TipoDatos.CARACTER) {
            if (this.operacion === Resultado_1.OperadorRelacional.IGUAL) {
                return { valor: resultadoIzquierdo.valor.charCodeAt(0) === resultadoDerecho.valor.charCodeAt(0), tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.DIFERENTE) {
                return { valor: resultadoIzquierdo.valor.charCodeAt(0) !== resultadoDerecho.valor.charCodeAt(0), tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.MAYOR) {
                return { valor: resultadoIzquierdo.valor.charCodeAt(0) > resultadoDerecho.valor.charCodeAt(0), tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.MENOR) {
                return { valor: resultadoIzquierdo.valor.charCodeAt(0) < resultadoDerecho.valor.charCodeAt(0), tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.MAYORIGUAL) {
                return { valor: resultadoIzquierdo.valor.charCodeAt(0) >= resultadoDerecho.valor.charCodeAt(0), tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.MENORIGUAL) {
                return { valor: resultadoIzquierdo.valor.charCodeAt(0) <= resultadoDerecho.valor.charCodeAt(0), tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
        }
        else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.CADENA && resultadoDerecho.tipo === Resultado_1.TipoDatos.CADENA) {
            if (this.operacion === Resultado_1.OperadorRelacional.IGUAL) {
                return { valor: resultadoIzquierdo.valor === resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
        }
        else if (resultadoIzquierdo.tipo === Resultado_1.TipoDatos.BOOLEANO && resultadoDerecho.tipo === Resultado_1.TipoDatos.BOOLEANO) {
            if (this.operacion === Resultado_1.OperadorRelacional.IGUAL) {
                return { valor: resultadoIzquierdo.valor === resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            else if (this.operacion === Resultado_1.OperadorRelacional.DIFERENTE) {
                return { valor: resultadoIzquierdo.valor !== resultadoDerecho.valor, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
        }
        return { valor: null, tipo: Resultado_1.TipoDatos.ERROR };
    }
}
exports.Relacional = Relacional;
