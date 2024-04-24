"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CFor = void 0;
const Resultado_1 = require("../../expresion/Resultado");
const Instruccion_1 = require("../Instruccion");
class CFor extends Instruccion_1.Instruccion {
    constructor(declaracion, condicion, actualizacion, bloque, linea, columna) {
        super(linea, columna);
        this.declaracion = declaracion;
        this.condicion = condicion;
        this.actualizacion = actualizacion;
        this.bloque = bloque;
    }
    interpretar(contexto, consola) {
        this.declaracion.interpretar(contexto, consola);
        while (this.condicion.interpretar(contexto).valor) {
            const retorno = this.bloque.interpretar(contexto, consola);
            this.actualizacion.interpretar(contexto, consola);
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
        }
        return null;
    }
}
exports.CFor = CFor;
