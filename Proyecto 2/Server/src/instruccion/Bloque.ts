import { Instruccion } from "./Instruccion";
import { Contexto } from "../contexto/TablaSimbolo";
import { Resultado, Resultado_return } from "../expresion/Resultado";

export class Bloque extends Instruccion{
    instrucciones: Instruccion [];

    constructor(instrucciones: Instruccion[], linea: number, columna: number){
        super(linea, columna);
        this.instrucciones = instrucciones;
    }

    public interpretar(contexto:Contexto, consola: string[]): null | string | Resultado{
        const nuevoContexto = new Contexto(contexto);
        for (const instruccion of this.instrucciones){
            console.log(instruccion)
            console.log("Consola",consola)

            const resultado = instruccion.interpretar(nuevoContexto, consola);
            console.log(resultado)
            if(resultado) return resultado;
            
        }
        return null;
    }
}