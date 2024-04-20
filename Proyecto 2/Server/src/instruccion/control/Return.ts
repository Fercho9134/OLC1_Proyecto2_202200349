import { Contexto } from "../../contexto/TablaSimbolo";
import { Expresion } from "../../expresion/Expresion";
import { Resultado, Resultado_return, TipoDatos } from "../../expresion/Resultado";
import { Instruccion } from "../Instruccion";

export class Return extends Instruccion{
    retorno:Expresion

    constructor(retorno:Expresion,linea:number,columna:number){
        super(linea,columna)
        this.retorno = retorno
    }

    public interpretar(contexto: Contexto, consola: string[]): Resultado_return {
        
        if(this.retorno != null){
            const valor = this.retorno.interpretar(contexto)
            return {valor:valor, tipo:"return"}
        }
        return {valor:{valor:null, tipo:TipoDatos.ERROR}, tipo:"return"}

    }

}
