"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Llamada = void 0;
const Resultado_1 = require("../expresion/Resultado");
const TablaSimbolo_1 = require("../contexto/TablaSimbolo");
const Instruccion_1 = require("./Instruccion");
const Simbolo_1 = require("../contexto/Simbolo");
class Llamada extends Instruccion_1.Instruccion {
    constructor(id, argumentos, linea, columna) {
        super(linea, columna);
        this.id = id;
        this.argumentos = argumentos;
    }
    interpretar(contexto, consola) {
        const simbolo = contexto.obtenerSimbolo(this.id);
        if ((simbolo === null || simbolo === void 0 ? void 0 : simbolo.tipoSimbolo) != Simbolo_1.TipoSimbolo.FUNCION) {
            throw new Error("La funcion no existe " + this.id);
        }
        const funcion = simbolo.obtenerValor();
        const global = contexto.obtenerGlobal();
        const contextoFuncion = new TablaSimbolo_1.Contexto(global);
        funcion.getParametros().forEach((parametro, index) => {
            const valor = this.argumentos[index].interpretar(contexto);
            contextoFuncion.guardarSimbolo(parametro.id, valor, valor.tipo, Simbolo_1.TipoSimbolo.VARIABLE);
        });
        const instrucciones = funcion.getInstrucciones();
        console.log("instrucciones", instrucciones);
        const retorno = instrucciones.interpretar(contextoFuncion, consola);
        console.log("retorno", retorno);
        if (typeof retorno == "string") {
            return null;
        }
        else {
            if ((retorno === null || retorno === void 0 ? void 0 : retorno.tipo) == Resultado_1.TipoDatos.RETURN) {
                return retorno.valor;
            }
            else {
                return null;
            }
        }
    }
}
exports.Llamada = Llamada;
