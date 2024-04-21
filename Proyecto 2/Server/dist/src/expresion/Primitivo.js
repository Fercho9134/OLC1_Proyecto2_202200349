"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primitivo = void 0;
const Expresion_1 = require("./Expresion");
const Resultado_1 = require("./Resultado");
class Primitivo extends Expresion_1.Expresion {
    constructor(valor, tipo, parsero, linea, columna) {
        super(linea, columna);
        this.valor = valor;
        this.tipo = tipo;
        this.parseo = parsero;
    }
    interpretar() {
        if (this.tipo === Resultado_1.TipoDatos.ENTERO) {
            return { valor: parseInt(this.valor), tipo: Resultado_1.TipoDatos.ENTERO };
        }
        else if (this.tipo === Resultado_1.TipoDatos.DOBLE) {
            return { valor: parseFloat(this.valor), tipo: Resultado_1.TipoDatos.DOBLE };
        }
        else if (this.tipo === Resultado_1.TipoDatos.BOOLEANO) {
            if (this.valor.toLowerCase() === "true") {
                return { valor: true, tipo: Resultado_1.TipoDatos.BOOLEANO };
            }
            return { valor: false, tipo: Resultado_1.TipoDatos.BOOLEANO };
        }
        else if (this.tipo === Resultado_1.TipoDatos.CADENA) {
            return { valor: this.valor, tipo: Resultado_1.TipoDatos.CADENA };
        }
        else if (this.tipo === Resultado_1.TipoDatos.CARACTER) {
            return { valor: this.valor, tipo: Resultado_1.TipoDatos.CARACTER };
        }
        return { valor: null, tipo: Resultado_1.TipoDatos.ERROR };
    }
}
exports.Primitivo = Primitivo;
