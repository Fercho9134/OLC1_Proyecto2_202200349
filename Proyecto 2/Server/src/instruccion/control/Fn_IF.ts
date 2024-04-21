import { Instruccion } from "../Instruccion";
import { Expresion } from "../../expresion/Expresion";
import {Bloque} from "../Bloque";
import { Resultado, Resultado_return, TipoDatos } from "../../expresion/Resultado";
import { Contexto } from "../../contexto/TablaSimbolo";
export class Fn_IF extends Instruccion{
    condicion: Expresion;
    bloque_if: Bloque;
    bloque_else: Bloque;

    constructor(condicion: Expresion, bloque_if: Bloque, bloque_else: Bloque, fila: number, columna: number){
        super(fila, columna);
        this.condicion = condicion;
        this.bloque_if = bloque_if;
        this.bloque_else = bloque_else;
    }

    public interpretar(contexto:Contexto,consola: string[]): null | string | Resultado {
        const condicion = this.condicion.interpretar(contexto)
        if (condicion.tipo!=TipoDatos.BOOLEANO)
            throw Error("La condición no es booleana")
        if (condicion.valor){
            const retorno =  this.bloque_if.interpretar(contexto,consola)
            if (retorno) return retorno
        }else{

            const retorno = this.bloque_else?.interpretar(contexto,consola)
            if (retorno) return retorno
        }
        return null
    }
}