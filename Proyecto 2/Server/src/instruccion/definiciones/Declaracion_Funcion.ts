
import { Simbolo, TipoSimbolo } from "../../contexto/Simbolo";
import { Contexto } from "../../contexto/TablaSimbolo";
import { Expresion } from "../../expresion/Expresion";
import { TipoDatos, variables } from "../../expresion/Resultado";
import { Bloque } from "../Bloque";
import { Instruccion } from "../Instruccion";

export class Declaracion_Funcion extends Instruccion{
    tipo:TipoDatos
    id:string
    variables:variables[]
    instrucciones:Bloque

    constructor(tipo:TipoDatos, id:string,variables:variables[],instrucciones:Bloque,linea:number,columna:number){
        super(linea,columna)
        this.tipo = tipo
        this.id = id
        this.variables = variables
        this.instrucciones = instrucciones
    }

    public interpretar(contexto:Contexto,consola: string[]): null {
        // Existe?
        const Simbolo_funcion = contexto.obtenerFuncion(this.id)
        let variables_funcion:Simbolo[] = []
        if (Simbolo_funcion){
            throw new Error(`Error semantico: La funcion ${this.id} ya existe en la linea ${this.linea} y columna ${this.columna}`)
        }

        //creamos variables en el contexto
        for (let variable of this.variables){
            const existe = contexto.tablaSimbolos.has(variable.id)
            if (existe){
                throw new Error(`Error semantico: La variable ${variable.id} ya existe en la linea ${this.linea} y columna ${this.columna}`)
            }
            
            if (variable.valor == null){
                if (variable.tipo == TipoDatos.ENTERO){
                    variable.valor = {valor:0,tipo:TipoDatos.ENTERO}
                }else if (variable.tipo == TipoDatos.DOBLE){
                    variable.valor = {valor:0,tipo:TipoDatos.DOBLE}
                }else if (variable.tipo == TipoDatos.BOOLEANO){
                    variable.valor = {valor:false,tipo:TipoDatos.BOOLEANO}
                }else if (variable.tipo == TipoDatos.CADENA){
                    variable.valor = {valor:"",tipo:TipoDatos.CADENA}
                }else if (variable.tipo == TipoDatos.CARACTER){
                    variable.valor = {valor:"",tipo:TipoDatos.CARACTER}
                }
            }else{
                variable.valor = (variable.valor as Expresion).interpretar(contexto)
            }
            
            contexto.guardarSimbolo(variable.id,variable.valor,variable.tipo,TipoSimbolo.VARIABLE)
            variables_funcion.push(contexto.obtenerVariable(variable.id) as Simbolo)
        }

        //guardamos metodo
        contexto.guardarFuncion(this.tipo,this.id,variables_funcion,this.instrucciones)

        return null

    }

}