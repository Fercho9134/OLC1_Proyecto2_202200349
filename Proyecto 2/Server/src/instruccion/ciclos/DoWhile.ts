import { Contexto } from "../../contexto/TablaSimbolo";
import { Expresion } from "../../expresion/Expresion";
import { Resultado, Resultado_return, TipoDatos } from "../../expresion/Resultado";
import { Bloque } from "../Bloque";
import { Instruccion } from "../Instruccion";

export class DoWhile extends Instruccion {
    condicion: Expresion
    instrucciones: Bloque

    constructor(instrucciones: Bloque, condicion: Expresion, linea: number, columna: number) {
        super(linea, columna)
        this.condicion = condicion
        this.instrucciones = instrucciones
    }

    public interpretar(contexto: Contexto, consola: string[]): null | string | Resultado{
        let condicion = this.condicion.interpretar(contexto)
        if (condicion.tipo != TipoDatos.BOOLEANO) throw new Error("La condicion no es booleana")
        do {
            // Se ejecutan las instrucciones
            const retorno = this.instrucciones.interpretar(contexto, consola)

            if (typeof retorno == "string") {
                if (retorno == "break") {
                    console.log("break")
                    break;
                }

                if (retorno == "continue") {
                    continue;
                }


            } else {

                if (retorno?.tipo == TipoDatos.RETURN) {
                    return retorno
                }



            }
            // Se calcula la condicion
            condicion = this.condicion.interpretar(contexto)
        } while (condicion.valor)
        return null
    }
}