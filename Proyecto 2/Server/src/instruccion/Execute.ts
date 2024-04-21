import { Contexto } from "../contexto/TablaSimbolo";
import { Instruccion } from "./Instruccion";
import { Llamada } from "./Llamada";

export class Execute extends Instruccion{
    llamada: Llamada

    constructor(llamada: Llamada, linea: number, columna: number){
        super(linea, columna)
        this.llamada = llamada
    }

    public interpretar(contexto: Contexto, consola: string[]): null | string {
        this.llamada.interpretar(contexto, consola)
        console.log("Ejecutando")
        return null
    }
}