import { Contexto } from "../contexto/TablaSimbolo";
import { Expresion } from "./Expresion";
import { Resultado, TipoDatos } from "./Resultado";

export class Round extends Expresion{
expresion: Expresion;
    
        constructor(expresion: Expresion, linea: number, columna: number){
            super(linea, columna);
            this.expresion = expresion;
        }
    
        public interpretar(contexto:Contexto): Resultado {
            const valor = this.expresion.interpretar(contexto);
            if (valor.tipo != TipoDatos.DOBLE && valor.tipo != TipoDatos.ENTERO) {
                throw new Error(`Error: se esperaba un double y se recibio un ${valor.tipo}`);
            }

            if(valor.tipo == TipoDatos.DOBLE){
                return {valor: Math.round(valor.valor), tipo: TipoDatos.ENTERO};
            }
            return {valor: valor.valor, tipo: TipoDatos.ENTERO};
        }

}