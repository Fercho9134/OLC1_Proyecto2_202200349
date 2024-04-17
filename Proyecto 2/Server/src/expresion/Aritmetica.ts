import { Expresion } from "./Expresion";
import { Resultado, TipoDatos, OperadorAritmetico } from "./Resultado";

export class Aritmetica extends Expresion{
    public izquierda: Expresion;
    public derecha: Expresion;
    public operador: OperadorAritmetico;

    constructor(izquierda: Expresion, derecha: Expresion, operador: OperadorAritmetico, linea: number, columna: number){
        super(linea, columna);
        this.izquierda = izquierda;
        this.derecha = derecha;
        this.operador = operador;
    }

    public interpretar():Resultado{
        const resultadoIzquierdo = this.izquierda.interpretar();
        const resultadoDerecho = this.derecha.interpretar();

        if(this.operador === OperadorAritmetico.SUMA){

            if(resultadoIzquierdo.tipo === TipoDatos.ENTERO && resultadoDerecho.tipo === TipoDatos.ENTERO){
                return {valor: resultadoIzquierdo.valor + resultadoDerecho.valor, tipo: TipoDatos.ENTERO};
            }
            else if(resultadoIzquierdo.tipo === TipoDatos.ENTERO && resultadoDerecho.tipo === TipoDatos.DOBLE){
                return {valor: resultadoIzquierdo.valor + resultadoDerecho.valor, tipo: TipoDatos.DOBLE};
            }
            else if(resultadoIzquierdo.tipo === TipoDatos.ENTERO && resultadoDerecho.tipo === TipoDatos.BOOLEANO){
                return {valor: resultadoIzquierdo.valor + resultadoDerecho.valor, tipo: TipoDatos.ENTERO};
            }
            else if(resultadoIzquierdo.tipo === TipoDatos.ENTERO && resultadoDerecho.tipo === TipoDatos.CADENA){
                return {valor: resultadoIzquierdo.valor.toString() + resultadoDerecho.valor.toString(), tipo: TipoDatos.CADENA};
            }
            else if(resultadoIzquierdo.tipo === TipoDatos.ENTERO && resultadoDerecho.tipo === TipoDatos.CARACTER){
                return {valor: resultadoIzquierdo.valor + resultadoDerecho.valor.charCodeAt(0), tipo: TipoDatos.ENTERO};
            }
            else if(resultadoIzquierdo.tipo === TipoDatos.DOBLE && resultadoDerecho.tipo === TipoDatos.ENTERO){
                return {valor: resultadoIzquierdo.valor + resultadoDerecho.valor, tipo: TipoDatos.DOBLE};
            }
            else if(resultadoIzquierdo.tipo === TipoDatos.DOBLE && resultadoDerecho.tipo === TipoDatos.DOBLE){
                return {valor: resultadoIzquierdo.valor  + resultadoDerecho.valor, tipo: TipoDatos.DOBLE};
            }
            else if(resultadoIzquierdo.tipo === TipoDatos.DOBLE && resultadoDerecho.tipo === TipoDatos.BOOLEANO){
                return {valor: resultadoIzquierdo.valor + resultadoDerecho.valor, tipo: TipoDatos.DOBLE};
            }
            else if(resultadoIzquierdo.tipo === TipoDatos.DOBLE && resultadoDerecho.tipo === TipoDatos.CADENA){
                return {valor: resultadoIzquierdo.valor.toString() + resultadoDerecho.valor.toString(), tipo: TipoDatos.CADENA};
            }
            else if(resultadoIzquierdo.tipo === TipoDatos.DOBLE && resultadoDerecho.tipo === TipoDatos.CARACTER){
                return {valor: resultadoIzquierdo.valor + resultadoDerecho.valor.charCodeAt(0), tipo: TipoDatos.DOBLE};
            }
            else if(resultadoIzquierdo.tipo === TipoDatos.BOOLEANO && resultadoDerecho.tipo === TipoDatos.ENTERO){
                return {valor: resultadoIzquierdo.valor + resultadoDerecho.valor, tipo: TipoDatos.ENTERO};
            }
            else if(resultadoIzquierdo.tipo === TipoDatos.BOOLEANO && resultadoDerecho.tipo === TipoDatos.DOBLE){
                return {valor: resultadoIzquierdo.valor + resultadoDerecho.valor, tipo: TipoDatos.DOBLE};
            }
            else if(resultadoIzquierdo.tipo === TipoDatos.BOOLEANO && resultadoDerecho.tipo === TipoDatos.BOOLEANO){
                //Error semantico
                return {valor: null, tipo: TipoDatos.ERROR};
            }
            else if(resultadoIzquierdo.tipo === TipoDatos.BOOLEANO && resultadoDerecho.tipo === TipoDatos.CADENA){
                return {valor: resultadoIzquierdo.valor.toString() + resultadoDerecho.valor.toString(), tipo: TipoDatos.CADENA};
            }
            else if(resultadoIzquierdo.tipo === TipoDatos.BOOLEANO && resultadoDerecho.tipo === TipoDatos.CARACTER){
                //Error semantico
                return {valor: null, tipo: TipoDatos.ERROR};
            }
            else if(resultadoIzquierdo.tipo === TipoDatos.CADENA && resultadoDerecho.tipo === TipoDatos.ENTERO){
                return {valor: resultadoIzquierdo.valor.toString() + resultadoDerecho.valor.toString(), tipo: TipoDatos.CADENA};
            }
            else if(resultadoIzquierdo.tipo === TipoDatos.CADENA && resultadoDerecho.tipo === TipoDatos.DOBLE){
                return {valor: resultadoIzquierdo.valor.toString() + resultadoDerecho.valor.toString(), tipo: TipoDatos.CADENA};
            }
            else if(resultadoIzquierdo.tipo === TipoDatos.CADENA && resultadoDerecho.tipo === TipoDatos.BOOLEANO){
                return {valor: resultadoIzquierdo.valor.toString() + resultadoDerecho.valor.toString(), tipo: TipoDatos.CADENA};
            }
            else if(resultadoIzquierdo.tipo === TipoDatos.CADENA && resultadoDerecho.tipo === TipoDatos.CADENA){
                return {valor: resultadoIzquierdo.valor.toString() + resultadoDerecho.valor.toString(), tipo: TipoDatos.CADENA};
            }
            else if(resultadoIzquierdo.tipo === TipoDatos.CADENA && resultadoDerecho.tipo === TipoDatos.CARACTER){
                return {valor: resultadoIzquierdo.valor.toString() + resultadoDerecho.valor.toString(), tipo: TipoDatos.CADENA};
            }
            else if(resultadoIzquierdo.tipo === TipoDatos.CARACTER && resultadoDerecho.tipo === TipoDatos.ENTERO){
                return {valor: resultadoIzquierdo.valor.charCodeAt(0) + resultadoDerecho.valor, tipo: TipoDatos.ENTERO};
            }
            else if(resultadoIzquierdo.tipo === TipoDatos.CARACTER && resultadoDerecho.tipo === TipoDatos.DOBLE){
                return {valor: resultadoIzquierdo.valor.charCodeAt(0) + resultadoDerecho.valor, tipo: TipoDatos.DOBLE};
            }
            else if(resultadoIzquierdo.tipo === TipoDatos.CARACTER && resultadoDerecho.tipo === TipoDatos.BOOLEANO){
                //Error semantico
                return {valor: null, tipo: TipoDatos.ERROR};
            }
            else if(resultadoIzquierdo.tipo === TipoDatos.CARACTER && resultadoDerecho.tipo === TipoDatos.CADENA){
                return {valor: resultadoIzquierdo.valor.toString() + resultadoDerecho.valor.toString(), tipo: TipoDatos.CADENA};
            }
            else if(resultadoIzquierdo.tipo === TipoDatos.CARACTER && resultadoDerecho.tipo === TipoDatos.CARACTER){
                return {valor: resultadoIzquierdo.valor.toString() + resultadoDerecho.valor.toString(), tipo: TipoDatos.CADENA};
            }
            else{
                //Error semantico
                return {valor: null, tipo: TipoDatos.ERROR};
            }
        }else if(this.operador === OperadorAritmetico.RESTA){
            if(resultadoIzquierdo.tipo === TipoDatos.ENTERO && resultadoDerecho.tipo === TipoDatos.ENTERO){
                return {valor: resultadoIzquierdo.valor - resultadoDerecho.valor, tipo: TipoDatos.ENTERO};
            }else if(resultadoIzquierdo.tipo === TipoDatos.ENTERO && resultadoDerecho.tipo === TipoDatos.DOBLE){
                return {valor: resultadoIzquierdo.valor - resultadoDerecho.valor, tipo: TipoDatos.DOBLE};
            }else if (resultadoIzquierdo.tipo === TipoDatos.ENTERO && resultadoDerecho.tipo === TipoDatos.BOOLEANO){
                return {valor: resultadoIzquierdo.valor - resultadoDerecho.valor, tipo: TipoDatos.ENTERO};
            }else if(resultadoIzquierdo.tipo === TipoDatos.ENTERO && resultadoDerecho.tipo === TipoDatos.CARACTER){
                return {valor: resultadoIzquierdo.valor - resultadoDerecho.valor.charCodeAt(0), tipo: TipoDatos.ENTERO};
            }else if(resultadoIzquierdo.tipo === TipoDatos.DOBLE && resultadoDerecho.tipo === TipoDatos.ENTERO){
                return {valor: resultadoIzquierdo.valor - resultadoDerecho.valor, tipo: TipoDatos.DOBLE};
            }else if(resultadoIzquierdo.tipo === TipoDatos.DOBLE && resultadoDerecho.tipo === TipoDatos.DOBLE){
                return {valor: resultadoIzquierdo.valor - resultadoDerecho.valor, tipo: TipoDatos.DOBLE};
            }else if(resultadoIzquierdo.tipo === TipoDatos.DOBLE && resultadoDerecho.tipo === TipoDatos.BOOLEANO){
                return {valor: resultadoIzquierdo.valor - resultadoDerecho.valor, tipo: TipoDatos.DOBLE};
            }else if(resultadoIzquierdo.tipo === TipoDatos.DOBLE && resultadoDerecho.tipo === TipoDatos.CARACTER){
                return {valor: resultadoIzquierdo.valor - resultadoDerecho.valor.charCodeAt(0), tipo: TipoDatos.DOBLE};
            }else if(resultadoIzquierdo.tipo === TipoDatos.BOOLEANO && resultadoDerecho.tipo === TipoDatos.ENTERO){
                return {valor: resultadoIzquierdo.valor - resultadoDerecho.valor, tipo: TipoDatos.ENTERO};
            }else if(resultadoIzquierdo.tipo === TipoDatos.BOOLEANO && resultadoDerecho.tipo === TipoDatos.DOBLE){
                return {valor: resultadoIzquierdo.valor - resultadoDerecho.valor, tipo: TipoDatos.DOBLE};
            }else if(resultadoIzquierdo.tipo === TipoDatos.CARACTER && resultadoDerecho.tipo === TipoDatos.ENTERO){
                return {valor: resultadoIzquierdo.valor.charCodeAt(0) - resultadoDerecho.valor, tipo: TipoDatos.ENTERO};
            }else if(resultadoIzquierdo.tipo === TipoDatos.CARACTER && resultadoDerecho.tipo === TipoDatos.DOBLE){
                return {valor: resultadoIzquierdo.valor.charCodeAt(0) - resultadoDerecho.valor, tipo: TipoDatos.DOBLE};
            }else{  
                //Error semantico
                return {valor: null, tipo: TipoDatos.ERROR};
            }
        }else if(this.operador === OperadorAritmetico.MULTIPLICACION){
            if (resultadoIzquierdo.tipo === TipoDatos.ENTERO && resultadoDerecho.tipo === TipoDatos.ENTERO){
                return {valor: resultadoIzquierdo.valor * resultadoDerecho.valor, tipo: TipoDatos.ENTERO};
            }else if(resultadoIzquierdo.tipo === TipoDatos.ENTERO && resultadoDerecho.tipo === TipoDatos.DOBLE){
                return {valor: resultadoIzquierdo.valor * resultadoDerecho.valor, tipo: TipoDatos.DOBLE};
            }else if(resultadoIzquierdo.tipo === TipoDatos.ENTERO && resultadoDerecho.tipo === TipoDatos.CARACTER){
                return {valor: resultadoIzquierdo.valor * resultadoDerecho.valor.charCodeAt(0), tipo: TipoDatos.ENTERO};
            }else if(resultadoIzquierdo.tipo === TipoDatos.DOBLE && resultadoDerecho.tipo === TipoDatos.ENTERO){
                return {valor: resultadoIzquierdo.valor * resultadoDerecho.valor, tipo: TipoDatos.DOBLE};
            }else if(resultadoIzquierdo.tipo === TipoDatos.DOBLE && resultadoDerecho.tipo === TipoDatos.DOBLE){
                return {valor: resultadoIzquierdo.valor * resultadoDerecho.valor, tipo: TipoDatos.DOBLE};
            }else if(resultadoIzquierdo.tipo === TipoDatos.DOBLE && resultadoDerecho.tipo === TipoDatos.CARACTER){
                return {valor: resultadoIzquierdo.valor * resultadoDerecho.valor.charCodeAt(0), tipo: TipoDatos.DOBLE};
            }else if(resultadoIzquierdo.tipo === TipoDatos.CARACTER && resultadoDerecho.tipo === TipoDatos.ENTERO){
                return {valor: resultadoIzquierdo.valor.charCodeAt(0) * resultadoDerecho.valor, tipo: TipoDatos.ENTERO};
            }else if(resultadoIzquierdo.tipo === TipoDatos.CARACTER && resultadoDerecho.tipo === TipoDatos.DOBLE){
                return {valor: resultadoIzquierdo.valor.charCodeAt(0) * resultadoDerecho.valor, tipo: TipoDatos.DOBLE};
            }else{
                //Error semantico
                return {valor: null, tipo: TipoDatos.ERROR};
            }
        }else if (this.operador === OperadorAritmetico.DIVISION){
            if (resultadoIzquierdo.tipo === TipoDatos.ENTERO && resultadoDerecho.tipo === TipoDatos.ENTERO){
                return {valor: resultadoIzquierdo.valor / resultadoDerecho.valor, tipo: TipoDatos.ENTERO};
            }else if(resultadoIzquierdo.tipo === TipoDatos.ENTERO && resultadoDerecho.tipo === TipoDatos.DOBLE){
                return {valor: resultadoIzquierdo.valor / resultadoDerecho.valor, tipo: TipoDatos.DOBLE};
            }else if(resultadoIzquierdo.tipo === TipoDatos.ENTERO && resultadoDerecho.tipo === TipoDatos.CARACTER){
                return {valor: resultadoIzquierdo.valor / resultadoDerecho.valor.charCodeAt(0), tipo: TipoDatos.ENTERO};
            }else if(resultadoIzquierdo.tipo === TipoDatos.DOBLE && resultadoDerecho.tipo === TipoDatos.ENTERO){
                return {valor: resultadoIzquierdo.valor / resultadoDerecho.valor, tipo: TipoDatos.DOBLE};
            }else if(resultadoIzquierdo.tipo === TipoDatos.DOBLE && resultadoDerecho.tipo === TipoDatos.DOBLE){
                return {valor: resultadoIzquierdo.valor / resultadoDerecho.valor, tipo: TipoDatos.DOBLE};
            }else if(resultadoIzquierdo.tipo === TipoDatos.DOBLE && resultadoDerecho.tipo === TipoDatos.CARACTER){
                return {valor: resultadoIzquierdo.valor / resultadoDerecho.valor.charCodeAt(0), tipo: TipoDatos.DOBLE};
            }else if(resultadoIzquierdo.tipo === TipoDatos.CARACTER && resultadoDerecho.tipo === TipoDatos.ENTERO){
                return {valor: resultadoIzquierdo.valor.charCodeAt(0) / resultadoDerecho.valor, tipo: TipoDatos.ENTERO};
            }else if(resultadoIzquierdo.tipo === TipoDatos.CARACTER && resultadoDerecho.tipo === TipoDatos.DOBLE){
                return {valor: resultadoIzquierdo.valor.charCodeAt(0) / resultadoDerecho.valor, tipo: TipoDatos.DOBLE};
            }else{
                //Error semantico
                return {valor: null, tipo: TipoDatos.ERROR};
            }
        }else if(this.operador === OperadorAritmetico.POTENCIA){
            if (resultadoIzquierdo.tipo === TipoDatos.ENTERO && resultadoDerecho.tipo === TipoDatos.ENTERO){
                return {valor: Math.pow(resultadoIzquierdo.valor, resultadoDerecho.valor), tipo: TipoDatos.ENTERO};
            }else if(resultadoIzquierdo.tipo === TipoDatos.ENTERO && resultadoDerecho.tipo === TipoDatos.DOBLE){
                return {valor: Math.pow(resultadoIzquierdo.valor, resultadoDerecho.valor), tipo: TipoDatos.DOBLE};
            }else if(resultadoIzquierdo.tipo === TipoDatos.DOBLE && resultadoDerecho.tipo === TipoDatos.ENTERO){
                return {valor: Math.pow(resultadoIzquierdo.valor, resultadoDerecho.valor), tipo: TipoDatos.DOBLE};
            }else if(resultadoIzquierdo.tipo === TipoDatos.DOBLE && resultadoDerecho.tipo === TipoDatos.DOBLE){
                return {valor: Math.pow(resultadoIzquierdo.valor, resultadoDerecho.valor), tipo: TipoDatos.DOBLE};
            }else{
                //Error semantico
                return {valor: null, tipo: TipoDatos.ERROR};
            }
        }else if(this.operador === OperadorAritmetico.MODULO){
            if (resultadoIzquierdo.tipo === TipoDatos.ENTERO && resultadoDerecho.tipo === TipoDatos.ENTERO){
                return {valor: resultadoIzquierdo.valor % resultadoDerecho.valor, tipo: TipoDatos.DOBLE};
            }else if(resultadoIzquierdo.tipo === TipoDatos.ENTERO && resultadoDerecho.tipo === TipoDatos.DOBLE){
                return {valor: resultadoIzquierdo.valor % resultadoDerecho.valor, tipo: TipoDatos.DOBLE};
            }else if(resultadoIzquierdo.tipo === TipoDatos.DOBLE && resultadoDerecho.tipo === TipoDatos.ENTERO){
                return {valor: resultadoIzquierdo.valor % resultadoDerecho.valor, tipo: TipoDatos.DOBLE};
            }else if(resultadoIzquierdo.tipo === TipoDatos.DOBLE && resultadoDerecho.tipo === TipoDatos.DOBLE){
                return {valor: resultadoIzquierdo.valor % resultadoDerecho.valor, tipo: TipoDatos.DOBLE};
            }else{
                //Error semantico
                return {valor: null, tipo: TipoDatos.ERROR};
            }
        }  

        return {valor: null, tipo: TipoDatos.ERROR};

    }
}