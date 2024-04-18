"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fn_IF = void 0;
const Instruccion_1 = require("./Instruccion");
const Resultado_1 = require("../expresion/Resultado");
class Fn_IF extends Instruccion_1.Instruccion {
    constructor(condicion, bloque_if, bloque_else, fila, columna) {
        super(fila, columna);
        this.condicion = condicion;
        this.bloque_if = bloque_if;
        this.bloque_else = bloque_else;
    }
    interpretar(consola) {
        const condicion = this.condicion.interpretar();
        if (condicion == null) {
            //Ejecutamos el else
            if (this.bloque_else != null) {
                this.bloque_else.interpretar(consola);
            }
            return null;
        }
        else if (condicion.tipo == Resultado_1.TipoDatos.BOOLEANO) {
            if (condicion.valor == true) {
                this.bloque_if.interpretar(consola);
            }
            else {
                if (this.bloque_else != null) {
                    this.bloque_else.interpretar(consola);
                }
            }
        }
        return null;
    }
}
exports.Fn_IF = Fn_IF;
