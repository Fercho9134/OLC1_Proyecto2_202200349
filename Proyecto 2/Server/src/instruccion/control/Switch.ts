import { Instruccion } from "../Instruccion";
import { Expresion } from "../../expresion/Expresion";
import {Bloque} from "../Bloque";
import { Resultado, Resultado_return, TipoDatos } from "../../expresion/Resultado";
import { Contexto } from "../../contexto/TablaSimbolo";

export class Switch extends Instruccion{
    condicion: Expresion;
    casos: any[];

    constructor(condicion: Expresion, casos: any[], fila: number, columna: number){
        super(fila, columna);
        this.condicion = condicion;
        this.casos = casos;
    }

    /*Los casos vienen en la forma {expresion: una expresion, instrucciones: un bloque}*/
    public interpretar(contexto:Contexto,consola: string[]): null | string | Resultado {
        console.log("Switch")
        console.log("condicion switch", this.condicion)
        const condicion = this.condicion.interpretar(contexto)
        let bandera = false

        console.log("Casos", this.casos)

        for (const caso of this.casos){
            let condicion_caso
            if (caso.expresion != null){
                condicion_caso = caso.expresion.interpretar(contexto)
            }else{
                condicion_caso = null
            }

            if (condicion_caso != null){
            if ((condicion.valor == condicion_caso.valor)){
                const retorno = caso.instrucciones.interpretar(contexto,consola)
                console.log("retorno", retorno)
                console.log (typeof retorno)
                if(typeof retorno == "string"){
                    if (retorno == "break"){
                    bandera = true
                    console.log("break detectado")
                    return null
                    }
                }

                if (retorno?.tipo == TipoDatos.RETURN) return retorno
            }
        }

        }
        if (!bandera){
            for (const caso of this.casos){
                if (caso.expresion == null){
                    const retorno = caso.instrucciones.interpretar(contexto,consola)
                    if (retorno) return retorno
                    break
                }
            }
        }
        return null
    }

}