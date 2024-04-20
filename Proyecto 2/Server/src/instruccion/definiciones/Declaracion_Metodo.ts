
import { Simbolo, TipoSimbolo } from "../../contexto/Simbolo";
import { Contexto } from "../../contexto/TablaSimbolo";
import { Expresion } from "../../expresion/Expresion";
import { TipoDatos, variables } from "../../expresion/Resultado";
import { Bloque } from "../Bloque";
import { Instruccion } from "../Instruccion";

export class Declaracion_Metodo extends Instruccion{
    id:string
    variables:variables[]
    instrucciones:Bloque

    constructor(id:string,variables:variables[],instrucciones:Bloque,linea:number,columna:number){
        super(linea,columna)
        this.id = id
        this.variables = variables
        this.instrucciones = instrucciones
    }

    public interpretar(contexto:Contexto,consola: string[]): null {
        // Existe?
        const simbolo_metodo = contexto.obtenerMetodo(this.id)
        let variables_metodo:Simbolo[] = []
        if (simbolo_metodo){
            throw new Error(`Error semantico: El metodo ${this.id} ya existe en la linea ${this.linea} y columna ${this.columna}`)
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
            variables_metodo.push(contexto.obtenerVariable(variable.id) as Simbolo)
        }

        //guardamos metodo
        contexto.guardarMetodo(this.id,variables_metodo,this.instrucciones)

        return null

    }

}