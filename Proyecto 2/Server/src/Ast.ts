import { join } from "path";
import { Expresion } from "./expresion/Expresion";
import { Instruccion } from "./instruccion/Instruccion";

export class AST {
    public instrucciones: Instruccion[];
    public consola:string[];

    constructor(instrucciones: Instruccion[]) {
        this.instrucciones = instrucciones;
        this.consola = [];
    }

    public Ejecutar(){
       this.instrucciones.forEach(instruccion => {
            instruccion.interpretar(this.consola)
       });

}


public getConsola(){
    return this.consola.join("")

}
}