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

    public interpretar(contexto: Contexto, consola: string[]): string  | Resultado {
        
        if(this.retorno != null){
            const valor = this.retorno.interpretar(contexto)
            return {tipo:TipoDatos.RETURN,valor:valor}
        }
        return "return"

    }

}
