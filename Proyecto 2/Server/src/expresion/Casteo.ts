import { Contexto } from "../contexto/TablaSimbolo";
import { Expresion } from "./Expresion";
import { Resultado, TipoDatos } from "./Resultado";

export class Casteo extends Expresion {
    public valor:Expresion;
    tipo_fin: TipoDatos;

    constructor(valor: Expresion, tipo:TipoDatos, linea: number, columna: number) {
        super(linea, columna);
        this.valor = valor;
        this.tipo_fin = tipo;
    }

    public interpretar(contexto:Contexto): Resultado {
        const resultado = this.valor.interpretar(contexto);
        //De algo a int
        if(this.tipo_fin === TipoDatos.ENTERO){
            console.log("Casteo a entero", resultado)
            if(resultado.tipo === TipoDatos.DOBLE){
                return {valor: (Math.floor(resultado.valor)), tipo: TipoDatos.ENTERO}
            }else if(resultado.tipo === TipoDatos.CARACTER){
                return {valor: resultado.valor.charCodeAt(0), tipo: TipoDatos.ENTERO}
            }
        }else if(this.tipo_fin === TipoDatos.DOBLE){
            if(resultado.tipo === TipoDatos.ENTERO){
                return {valor: parseFloat(resultado.valor), tipo: TipoDatos.DOBLE}
            }else if(resultado.tipo === TipoDatos.CARACTER){
                return {valor: parseFloat(resultado.valor.charCodeAt(0)), tipo: TipoDatos.DOBLE}
            }
        }else if(this.tipo_fin === TipoDatos.CADENA){
            if(resultado.tipo === TipoDatos.ENTERO){
                return {valor: resultado.valor.toString(), tipo: TipoDatos.CADENA}
            }else if(resultado.tipo === TipoDatos.DOBLE){
                return {valor: resultado.valor.toString(), tipo: TipoDatos.CADENA}
            }
        }else if(this.tipo_fin === TipoDatos.CARACTER){
            if (resultado.tipo === TipoDatos.ENTERO){
                return {valor: String.fromCharCode(resultado.valor), tipo: TipoDatos.CARACTER}
            }
        }

        console.log("Error en casteo", resultado)
        console.log("Error en casteo", this.tipo_fin, resultado.tipo)

        return {valor: null, tipo: TipoDatos.ERROR}
}
}
