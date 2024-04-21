import { Expresion } from "./expresion/Expresion";
import { Instruccion } from "./instruccion/Instruccion";
import { Contexto } from "./contexto/TablaSimbolo";
import { Primitivo } from "./expresion/Primitivo";
import { TipoDatos } from "./expresion/Resultado";
import { Declaracion } from "./instruccion/definiciones/Declaracion";
import { Funcion } from "./instruccion/definiciones/Funcion";
import { Execute } from "./instruccion/Execute";
import { Cout } from "./instruccion/Cout";

export class AST {
    public instrucciones: Instruccion[];
    public consola:string[];
    public contextoGlobal: Contexto;
    public contadorExec:number

    constructor(instrucciones: Instruccion[]) {
        this.instrucciones = instrucciones;
        this.contextoGlobal = new Contexto(null);
        this.contadorExec = 0
        this.consola = this.contextoGlobal.consola
    }

    public Ejecutar(){
       this.instrucciones.forEach(instruccion => {
            if(instruccion instanceof Declaracion || instruccion instanceof Funcion){
                instruccion.interpretar(this.contextoGlobal, this.consola)
            }
       });

         this.instrucciones.forEach(instruccion => {
                if(instruccion instanceof Execute){
                 if(this.contadorExec == 0){
                    instruccion.interpretar(this.contextoGlobal, this.consola)
                    this.contadorExec++
                 }else{
                    throw new Error("Error Semantico: No se puede ejecutar mas de una vez el execute")
                 }
                }
         });

}


public getConsola(){
    console.log(this.consola)
    return this.consola.join("")

}
}