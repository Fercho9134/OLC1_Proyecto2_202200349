import { Contexto } from "../../contexto/TablaSimbolo";
import { Expresion } from "../../expresion/Expresion";
import { Resultado, Resultado_return } from "../../expresion/Resultado";
import { Bloque } from "../Bloque";
import { Instruccion } from "../Instruccion";
import { Declaracion } from "../definiciones/Declaracion";

export class CFor extends Instruccion{
    declaracion: Declaracion
    condicion: Expresion
    actualizacion: Instruccion
    bloque: Bloque

    constructor(declaracion: Declaracion, condicion: Expresion, actualizacion: Instruccion, bloque: Bloque, linea: number, columna: number){
        super(linea, columna)
        this.declaracion = declaracion
        this.condicion = condicion
        this.actualizacion = actualizacion
        this.bloque = bloque
    }

    public interpretar(contexto: Contexto, consola: string[]): null | string | Resultado_return| Resultado{
        this.declaracion.interpretar(contexto, consola)
        while (this.condicion.interpretar(contexto).valor){
            const retorno = this.bloque.interpretar(contexto, consola)
            if (typeof retorno == "string") {
                if (retorno == "break") {
                    console.log("break")
                    break;
                }

                if (retorno == "continue") {
                    continue;
                }
            } else {

                if (retorno?.tipo == "return") {
                    return retorno
                }
            }
            this.actualizacion.interpretar(contexto, consola)
        }
        return null
    }
}