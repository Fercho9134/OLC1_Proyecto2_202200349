import { TipoSimbolo } from "../../contexto/Simbolo";
import { Contexto } from "../../contexto/TablaSimbolo";
import { Expresion } from "../../expresion/Expresion";
import { TipoDatos } from "../../expresion/Resultado";
import { Instruccion } from "../Instruccion";

export class Declaracion extends Instruccion{
    tipo:TipoDatos
    id:string
    expresion:Expresion

    constructor(tipo:TipoDatos,id:string,expresion:Expresion,linea:number,columna:number){
        super(linea,columna)
        this.tipo = tipo
        this.id = id
        this.expresion = expresion
    }

    public interpretar(contexto:Contexto,consola: string[]): null {
       // Existe?
        const valor = this.expresion.interpretar(contexto)
        if (valor.tipo != this.tipo) {
            throw new Error(`Error semantico: No se puede asignar un valor de tipo ${valor.tipo} a una variable de tipo ${this.tipo} en la linea ${this.linea} y columna ${this.columna}`)
        }
        contexto.guardarSimbolo(this.id,valor,valor.tipo,TipoSimbolo.VARIABLE)
        return null
    }

}