"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Switch = void 0;
const Instruccion_1 = require("../Instruccion");
const Resultado_1 = require("../../expresion/Resultado");
class Switch extends Instruccion_1.Instruccion {
    constructor(condicion, casos, fila, columna) {
        super(fila, columna);
        this.condicion = condicion;
        this.casos = casos;
    }
    /*Los casos vienen en la forma {expresion: una expresion, instrucciones: un bloque}*/
    interpretar(contexto, consola) {
        console.log("Switch");
        console.log("condicion switch", this.condicion);
        const condicion = this.condicion.interpretar(contexto);
        let bandera = false;
        console.log("Casos", this.casos);
        for (const caso of this.casos) {
            let condicion_caso;
            if (caso.expresion != null) {
                condicion_caso = caso.expresion.interpretar(contexto);
            }
            else {
                condicion_caso = null;
            }
            if (condicion_caso != null) {
                if ((condicion.valor == condicion_caso.valor)) {
                    const retorno = caso.instrucciones.interpretar(contexto, consola);
                    console.log("retorno", retorno);
                    console.log(typeof retorno);
                    if (typeof retorno == "string") {
                        if (retorno == "break") {
                            bandera = true;
                            console.log("break detectado");
                            return null;
                        }
                        else if (retorno == "return") {
                            return null;
                        }
                    }
                    if ((retorno === null || retorno === void 0 ? void 0 : retorno.tipo) == Resultado_1.TipoDatos.RETURN)
                        return retorno;
                }
            }
        }
        if (!bandera) {
            for (const caso of this.casos) {
                if (caso.expresion == null) {
                    const retorno = caso.instrucciones.interpretar(contexto, consola);
                    if (retorno)
                        return retorno;
                    break;
                }
            }
        }
        return null;
    }
}
exports.Switch = Switch;
