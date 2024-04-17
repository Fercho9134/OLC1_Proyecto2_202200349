import e from "express";
import { Expresion } from "./Expresion";
import { Resultado, OperadorRelacional, TipoDatos } from "./Resultado";

export class Relacional extends Expresion{
    public izquierda: Expresion;
    public derecha: Expresion;
    public operacion: OperadorRelacional;

    constructor(izquierda: Expresion, derecha: Expresion, operacion: OperadorRelacional, linea: number, columna: number) {
        super(linea, columna);
        this.izquierda = izquierda;
        this.derecha = derecha;
        this.operacion = operacion;
    }

    public interpretar(): Resultado {
        const resultadoIzquierdo = this.izquierda.interpretar();
        const resultadoDerecho = this.derecha.interpretar();
        if(resultadoIzquierdo.tipo === TipoDatos.ENTERO && resultadoDerecho.tipo === TipoDatos.ENTERO){
            if(this.operacion === OperadorRelacional.IGUAL){
                return {valor: resultadoIzquierdo.valor === resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.DIFERENTE){
                return {valor: resultadoIzquierdo.valor !== resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.MAYOR){
                return {valor: resultadoIzquierdo.valor > resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.MENOR){
                return {valor: resultadoIzquierdo.valor < resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.MAYORIGUAL){
                return {valor: resultadoIzquierdo.valor >= resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.MENORIGUAL){
                return {valor: resultadoIzquierdo.valor <= resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }
        }else if(resultadoIzquierdo.tipo === TipoDatos.ENTERO && resultadoDerecho.tipo === TipoDatos.DOBLE){
            if(this.operacion === OperadorRelacional.IGUAL){
                return {valor: resultadoIzquierdo.valor === resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.DIFERENTE){
                return {valor: resultadoIzquierdo.valor !== resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.MAYOR){
                return {valor: resultadoIzquierdo.valor > resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.MENOR){
                return {valor: resultadoIzquierdo.valor < resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.MAYORIGUAL){
                return {valor: resultadoIzquierdo.valor >= resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.MENORIGUAL){
                return {valor: resultadoIzquierdo.valor <= resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }
        }else if(resultadoIzquierdo.tipo === TipoDatos.ENTERO && resultadoDerecho.tipo === TipoDatos.CARACTER){
            if(this.operacion === OperadorRelacional.IGUAL){
                return {valor: resultadoIzquierdo.valor === resultadoDerecho.valor.charCodeAt(0), tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.DIFERENTE){
                return {valor: resultadoIzquierdo.valor !== resultadoDerecho.valor.charCodeAt(0), tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.MAYOR){
                return {valor: resultadoIzquierdo.valor > resultadoDerecho.valor.charCodeAt(0), tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.MENOR){
                return {valor: resultadoIzquierdo.valor < resultadoDerecho.valor.charCodeAt(0), tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.MAYORIGUAL){
                return {valor: resultadoIzquierdo.valor >= resultadoDerecho.valor.charCodeAt(0), tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.MENORIGUAL){
                return {valor: resultadoIzquierdo.valor <= resultadoDerecho.valor.charCodeAt(0), tipo: TipoDatos.BOOLEANO}
            }
        }else if(resultadoIzquierdo.tipo === TipoDatos.DOBLE && resultadoDerecho.tipo === TipoDatos.ENTERO){
            if(this.operacion === OperadorRelacional.IGUAL){
                return {valor: resultadoIzquierdo.valor === resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.DIFERENTE){
                return {valor: resultadoIzquierdo.valor !== resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.MAYOR){
                return {valor: resultadoIzquierdo.valor > resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.MENOR){
                return {valor: resultadoIzquierdo.valor < resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.MAYORIGUAL){
                return {valor: resultadoIzquierdo.valor >= resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.MENORIGUAL){
                return {valor: resultadoIzquierdo.valor <= resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }
        }else if(resultadoIzquierdo.tipo === TipoDatos.DOBLE && resultadoDerecho.tipo === TipoDatos.DOBLE){
            if(this.operacion === OperadorRelacional.IGUAL){
                return {valor: resultadoIzquierdo.valor === resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.DIFERENTE){
                return {valor: resultadoIzquierdo.valor !== resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.MAYOR){
                return {valor: resultadoIzquierdo.valor > resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.MENOR){
                return {valor: resultadoIzquierdo.valor < resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.MAYORIGUAL){
                return {valor: resultadoIzquierdo.valor >= resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.MENORIGUAL){
                return {valor: resultadoIzquierdo.valor <= resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }
        }else if(resultadoIzquierdo.tipo === TipoDatos.DOBLE && resultadoDerecho.tipo === TipoDatos.CARACTER){
            if(this.operacion === OperadorRelacional.IGUAL){
                return {valor: resultadoIzquierdo.valor === resultadoDerecho.valor.charCodeAt(0), tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.DIFERENTE){
                return {valor: resultadoIzquierdo.valor !== resultadoDerecho.valor.charCodeAt(0), tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.MAYOR){
                return {valor: resultadoIzquierdo.valor > resultadoDerecho.valor.charCodeAt(0), tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.MENOR){
                return {valor: resultadoIzquierdo.valor < resultadoDerecho.valor.charCodeAt(0), tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.MAYORIGUAL){
                return {valor: resultadoIzquierdo.valor >= resultadoDerecho.valor.charCodeAt(0), tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.MENORIGUAL){
                return {valor: resultadoIzquierdo.valor <= resultadoDerecho.valor.charCodeAt(0), tipo: TipoDatos.BOOLEANO}
            }
        }else if(resultadoIzquierdo.tipo === TipoDatos.CARACTER && resultadoDerecho.tipo === TipoDatos.ENTERO){
            if(this.operacion === OperadorRelacional.IGUAL){
                return {valor: resultadoIzquierdo.valor.charCodeAt(0) === resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.DIFERENTE){
                return {valor: resultadoIzquierdo.valor.charCodeAt(0) !== resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.MAYOR){
                return {valor: resultadoIzquierdo.valor.charCodeAt(0) > resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.MENOR){
                return {valor: resultadoIzquierdo.valor.charCodeAt(0) < resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.MAYORIGUAL){
                return {valor: resultadoIzquierdo.valor.charCodeAt(0) >= resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.MENORIGUAL){
                return {valor: resultadoIzquierdo.valor.charCodeAt(0) <= resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }
        }else if(resultadoIzquierdo.tipo === TipoDatos.CARACTER && resultadoDerecho.tipo === TipoDatos.DOBLE){
            if(this.operacion === OperadorRelacional.IGUAL){
                return {valor: resultadoIzquierdo.valor.charCodeAt(0) === resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.DIFERENTE){
                return {valor: resultadoIzquierdo.valor.charCodeAt(0) !== resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.MAYOR){
                return {valor: resultadoIzquierdo.valor.charCodeAt(0) > resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.MENOR){
                return {valor: resultadoIzquierdo.valor.charCodeAt(0) < resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.MAYORIGUAL){
                return {valor: resultadoIzquierdo.valor.charCodeAt(0) >= resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.MENORIGUAL){
                return {valor: resultadoIzquierdo.valor.charCodeAt(0) <= resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }
        }else if(resultadoIzquierdo.tipo === TipoDatos.CARACTER && resultadoDerecho.tipo === TipoDatos.CARACTER){
            if(this.operacion === OperadorRelacional.IGUAL){
                return {valor: resultadoIzquierdo.valor.charCodeAt(0) === resultadoDerecho.valor.charCodeAt(0), tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.DIFERENTE){
                return {valor: resultadoIzquierdo.valor.charCodeAt(0) !== resultadoDerecho.valor.charCodeAt(0), tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.MAYOR){
                return {valor: resultadoIzquierdo.valor.charCodeAt(0) > resultadoDerecho.valor.charCodeAt(0), tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.MENOR){
                return {valor: resultadoIzquierdo.valor.charCodeAt(0) < resultadoDerecho.valor.charCodeAt(0), tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.MAYORIGUAL){
                return {valor: resultadoIzquierdo.valor.charCodeAt(0) >= resultadoDerecho.valor.charCodeAt(0), tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.MENORIGUAL){
                return {valor: resultadoIzquierdo.valor.charCodeAt(0) <= resultadoDerecho.valor.charCodeAt(0), tipo: TipoDatos.BOOLEANO}
            }
        }else if(resultadoIzquierdo.tipo === TipoDatos.CADENA && resultadoDerecho.tipo === TipoDatos.CADENA){
            if(this.operacion === OperadorRelacional.IGUAL){
                return {valor: resultadoIzquierdo.valor === resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }
        }else if(resultadoIzquierdo.tipo === TipoDatos.BOOLEANO && resultadoDerecho.tipo === TipoDatos.BOOLEANO){
            if(this.operacion === OperadorRelacional.IGUAL){
                return {valor: resultadoIzquierdo.valor === resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }else if(this.operacion === OperadorRelacional.DIFERENTE){
                return {valor: resultadoIzquierdo.valor !== resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }
        }
        return {valor: null, tipo: TipoDatos.ERROR}
    }
}