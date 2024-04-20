import { TipoSimbolo } from "../../contexto/Simbolo";
import { Contexto } from "../../contexto/TablaSimbolo";
import { Expresion } from "../../expresion/Expresion";
import { TipoDatos } from "../../expresion/Resultado";
import { Instruccion } from "../Instruccion";

export class Declaracion extends Instruccion{
    tipo:TipoDatos
    id:string[]
    expresion:Expresion

    constructor(tipo:TipoDatos,id:string[],expresion:Expresion,linea:number,columna:number){
        super(linea,columna)
        this.tipo = tipo
        this.id = id
        this.expresion = expresion
    }

    public interpretar(contexto:Contexto,consola: string[]): null {

        let valor = null

        if(this.expresion != null){
            valor = this.expresion.interpretar(contexto)  
        }

        for (let id of this.id){
            if (valor!=null){
                if (valor.tipo != this.tipo) {
                    throw new Error(`Error semantico: No se puede asignar un valor de tipo ${valor.tipo} a una variable de tipo ${this.tipo} en la linea ${this.linea} y columna ${this.columna}`)
                }
                contexto.guardarSimbolo(id,valor,valor.tipo,TipoSimbolo.VARIABLE)
            }else{
                if (this.tipo == TipoDatos.ENTERO){
                    contexto.guardarSimbolo(id,{valor:0,tipo:TipoDatos.ENTERO},TipoDatos.ENTERO,TipoSimbolo.VARIABLE)
                }else if (this.tipo == TipoDatos.DOBLE){
                    contexto.guardarSimbolo(id,{valor:0,tipo:TipoDatos.DOBLE},TipoDatos.DOBLE,TipoSimbolo.VARIABLE)
                }else if (this.tipo == TipoDatos.BOOLEANO){
                    contexto.guardarSimbolo(id,{valor:true,tipo:TipoDatos.BOOLEANO},TipoDatos.BOOLEANO,TipoSimbolo.VARIABLE)
                }else if (this.tipo == TipoDatos.CADENA){
                    contexto.guardarSimbolo(id,{valor:"",tipo:TipoDatos.CADENA},TipoDatos.CADENA,TipoSimbolo.VARIABLE)
                }else if (this.tipo == TipoDatos.CARACTER){
                    contexto.guardarSimbolo(id,{valor:"0",tipo:TipoDatos.CARACTER},TipoDatos.CARACTER,TipoSimbolo.VARIABLE)
                }
            }
        }

        return null
       /*
        // Existe?
        const valor = this.expresion.interpretar(contexto)
        if (valor.tipo != this.tipo) {
            throw new Error(`Error semantico: No se puede asignar un valor de tipo ${valor.tipo} a una variable de tipo ${this.tipo} en la linea ${this.linea} y columna ${this.columna}`)
        }
        contexto.guardarSimbolo(this.id,valor,valor.tipo,TipoSimbolo.VARIABLE)
        return null
        */
    }

}