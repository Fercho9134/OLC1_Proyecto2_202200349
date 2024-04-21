"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cout = void 0;
const Instruccion_1 = require("./Instruccion");
class Cout extends Instruccion_1.Instruccion {
    constructor(expresiones, linea, columna) {
        super(linea, columna);
        this.expresiones = expresiones;
    }
    interpretar(contexto, consola) {
        //Obtenemos la consola global que esta en el ast
        consola = contexto.obtenerGlobal().consola;
        consola.push("\n");
        console.log("Cout");
        console.log("Impri", this.expresiones);
        this.expresiones.forEach(expresion => {
            const resultado = expresion.interpretar(contexto);
            if (resultado != undefined && resultado != null) {
                consola.push(resultado.valor);
            }
        });
        return null;
    }
}
exports.Cout = Cout;
