import { join } from "path";
import { Expresion } from "./expresion/Expresion";
import { Instruccion } from "./instruccion/Instruccion";
import { Contexto } from "./contexto/TablaSimbolo";

export class AST {
    public instrucciones: Instruccion[];
    public consola:string[];
    public contextoGlobal: Contexto;

    constructor(instrucciones: Instruccion[]) {
        this.instrucciones = instrucciones;
        this.consola = [];
        this.contextoGlobal = new Contexto(null);
    }

    public Ejecutar(){
       this.instrucciones.forEach(instruccion => {
            instruccion.interpretar(this.contextoGlobal, this.consola)
       });

}


public getConsola(){
    return this.consola.join("")

}
}