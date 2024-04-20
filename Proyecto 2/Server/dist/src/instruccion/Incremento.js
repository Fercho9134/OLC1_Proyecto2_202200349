"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Incremento = void 0;
const Simbolo_1 = require("../contexto/Simbolo");
const Resultado_1 = require("../expresion/Resultado");
const Instruccion_1 = require("./Instruccion");
class Incremento extends Instruccion_1.Instruccion {
    constructor(id, linea, columna) {
        super(linea, columna);
        this.id = id;
    }
    interpretar(contexto, consola) {
        const simbolo = contexto.obtenerVariable(this.id);
        if (simbolo) {
            if (simbolo.tipoSimbolo == Simbolo_1.TipoSimbolo.VARIABLE) {
                const resultado = simbolo.obtenerValor();
                if (resultado.tipo == Resultado_1.TipoDatos.ENTERO || resultado.tipo == Resultado_1.TipoDatos.DOBLE) {
                    simbolo.actualizarValor({ valor: resultado.valor + 1, tipo: resultado.tipo });
                    contexto.actualizarSimbolo(this.id, simbolo);
                    return null;
                }
            }
        }
        throw new Error("La variable no existe");
    }
}
exports.Incremento = Incremento;
