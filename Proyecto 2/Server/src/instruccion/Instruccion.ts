import { Contexto } from "../contexto/TablaSimbolo";

export abstract class Instruccion {
    public linea: number;
    public columna: number;

    constructor(linea: number, columna: number) {
        this.linea = linea;
        this.columna = columna;

    }

    public abstract interpretar(contexto:Contexto, consola:string []): null | string;
}