"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.C_STR = void 0;
const Acceso_1 = require("./Acceso");
const Expresion_1 = require("./Expresion");
const Primitivo_1 = require("./Primitivo");
const Resultado_1 = require("./Resultado");
class C_STR extends Expresion_1.Expresion {
    constructor(id, linea, columna) {
        super(linea, columna);
        this.id = id;
    }
    interpretar(contexto) {
        const valor = new Acceso_1.Acceso(this.id, this.linea, this.columna).interpretar(contexto);
        if (valor.tipo == Resultado_1.TipoDatos.CADENA) {
            //Comvertimos la cadena en un arreglo de objetos de tipo primitivo caracter
            let cadena = [];
            for (let i = 0; i < valor.valor.length; i++) {
                let primitivo_nuevo = new Primitivo_1.Primitivo(valor.valor[i], Resultado_1.TipoDatos.CARACTER, false, 0, 0);
                cadena.push(primitivo_nuevo);
            }
            return { valor: cadena, tipo: Resultado_1.TipoDatos.CARACTER };
        }
        throw new Error(`Error: se esperaba una cadena y se recibio un ${valor.tipo}`);
    }
}
exports.C_STR = C_STR;
