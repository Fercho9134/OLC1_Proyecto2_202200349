import { Contexto } from "../contexto/TablaSimbolo";
import { Resultado, Resultado_return } from "../expresion/Resultado";

export abstract class Instruccion {
    public linea: number;
    public columna: number;

    constructor(linea: number, columna: number) {
        this.linea = linea;
        this.columna = columna;

    }

    public abstract interpretar(contexto:Contexto, consola:string []): null | string | Resultado_return|Resultado;
}