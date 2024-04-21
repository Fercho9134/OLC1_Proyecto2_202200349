"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error = void 0;
const Primitivo_1 = require("../expresion/Primitivo");
const Resultado_1 = require("../expresion/Resultado");
const Cout_1 = require("./Cout");
const Instruccion_1 = require("./Instruccion");
class Error extends Instruccion_1.Instruccion {
    constructor(mensaje, linea, columna) {
        super(linea, columna);
        this.mensaje = mensaje;
    }
    interpretar(contexto, consola) {
        console.log("Error Detectado:");
        const error_string = this.mensaje.toString();
        const primirtivo = [new Primitivo_1.Primitivo(error_string, Resultado_1.TipoDatos.CADENA, this.linea, this.columna)];
        const cout_e = new Cout_1.Cout(primirtivo, this.linea, this.columna);
        cout_e.interpretar(contexto, consola);
        return null;
    }
}
exports.Error = Error;
