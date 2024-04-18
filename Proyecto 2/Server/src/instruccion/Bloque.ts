import { Instruccion } from "./Instruccion";
import { Contexto } from "../contexto/TablaSimbolo";

export class Bloque extends Instruccion{
    instrucciones: Instruccion [];

    constructor(instrucciones: Instruccion[], linea: number, columna: number){
        super(linea, columna);
        this.instrucciones = instrucciones;
    }

    public interpretar(contexto:Contexto, consola: string[]): null | string {
        const nuevoContexto = new Contexto(contexto);
        for (const instruccion of this.instrucciones){
            const resultado = instruccion.interpretar(nuevoContexto, consola);
            if(resultado) return resultado;
        }
        return null;
    }
}