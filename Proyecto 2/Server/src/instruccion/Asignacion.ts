import { TipoSimbolo } from "../contexto/Simbolo";
import { Contexto } from "../contexto/TablaSimbolo";
import { Expresion } from "../expresion/Expresion";
import { Instruccion } from "./Instruccion";

export class Asignacion extends Instruccion{
    id:string
    expresion:Expresion
    constructor(id:string,expresion:Expresion,linea:number,columna:number){
        super(linea,columna)
        this.id = id
        this.expresion = expresion
    }
    public interpretar(contexto: Contexto, consola: string[]): null {
        const simbolo = contexto.obtenerSimbolo(this.id)
        if (simbolo){
            if (simbolo.tipoSimbolo == TipoSimbolo.VARIABLE){

                if(this.expresion == null){
                    return null
                }

                const nuevoValor = this.expresion.interpretar(contexto)
                
                if (nuevoValor.tipo != simbolo.tipo){
                    console.log("nuevoValor",nuevoValor)
                    throw new Error(`Error semantico: No se puede asignar un valor de tipo ${nuevoValor.tipo} a una variable de tipo ${simbolo.tipo} en la linea ${this.linea} y columna ${this.columna}`)
                }
                simbolo.actualizarValor(nuevoValor)
                contexto.actualizarSimbolo(this.id,simbolo)
                return null
            }else if(simbolo.tipoSimbolo == TipoSimbolo.ARREGLO){
                //Arreglo
                const nuevoValor = this.expresion.interpretar(contexto)
                if (nuevoValor.tipo != simbolo.tipo){
                    throw new Error(`Error semantico: No se puede asignar un valor de tipo ${nuevoValor.tipo} a una variable de tipo ${simbolo.tipo} en la linea ${this.linea} y columna ${this.columna}`)
                }
                simbolo.actualizarValor(nuevoValor)
                contexto.actualizarSimbolo(this.id,simbolo)
                return null
            }
            throw new Error("No es tipo variable")
        }
        throw new Error("La variable no existe")
    }
}