import { Contexto } from "../contexto/TablaSimbolo";
import { Expresion } from "./Expresion";
import { Resultado, TipoDatos } from "./Resultado";
import { TipoSimbolo } from "../contexto/Simbolo";
import { Acceso } from "./Acceso";

export class Length extends Expresion{
    id: string;

    constructor(id: string, fila: number, columna: number){
        super(fila, columna);
        this.id = id;
    }

    public interpretar(contexto:Contexto): Resultado {
        const simbolo = contexto.obtenerSimbolo(this.id);
        if (simbolo){
            if(simbolo.tipoSimbolo == TipoSimbolo.ARREGLO){
                const vector = simbolo.obtenerValor() as Resultado[]
                return {valor: vector.length, tipo: TipoDatos.ENTERO}
            }else if(simbolo.tipoSimbolo == TipoSimbolo.VARIABLE){
                if(simbolo.tipo == TipoDatos.CADENA){
                    const resultado = simbolo.obtenerValor() as Resultado
                    return {valor: resultado.valor.length, tipo: TipoDatos.ENTERO}
                }
            }
            throw new Error(`El simbolo ${this.id} no es un arreglo`);
        }
        throw new Error(`El simbolo ${this.id} no existe en este contexto`);
    }
}