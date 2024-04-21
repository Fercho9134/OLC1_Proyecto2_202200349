"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoWhile = void 0;
const Resultado_1 = require("../../expresion/Resultado");
const Instruccion_1 = require("../Instruccion");
class DoWhile extends Instruccion_1.Instruccion {
    constructor(instrucciones, condicion, linea, columna) {
        super(linea, columna);
        this.condicion = condicion;
        this.instrucciones = instrucciones;
    }
    interpretar(contexto, consola) {
        let condicion = this.condicion.interpretar(contexto);
        if (condicion.tipo != Resultado_1.TipoDatos.BOOLEANO)
            throw new Error("La condicion no es booleana");
        do {
            // Se ejecutan las instrucciones
            const retorno = this.instrucciones.interpretar(contexto, consola);
            if (typeof retorno == "string") {
                if (retorno == "break") {
                    console.log("break");
                    break;
                }
                if (retorno == "continue") {
                    continue;
                }
            }
            else {
                if ((retorno === null || retorno === void 0 ? void 0 : retorno.tipo) == Resultado_1.TipoDatos.RETURN) {
                    return retorno;
                }
            }
            // Se calcula la condicion
            condicion = this.condicion.interpretar(contexto);
        } while (condicion.valor);
        return null;
    }
}
exports.DoWhile = DoWhile;
