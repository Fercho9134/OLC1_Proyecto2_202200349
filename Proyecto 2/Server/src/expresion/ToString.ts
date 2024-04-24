import { Contexto } from "../contexto/TablaSimbolo";
import { Expresion } from "./Expresion";
import { Resultado, TipoDatos } from "./Resultado";

export class ToString extends Expresion{
expresion: Expresion;

        constructor(expresion: Expresion, linea: number, columna: number){
            super(linea, columna);
            this.expresion = expresion;
        }
    
        public interpretar(contexto:Contexto): Resultado {
            const valor = this.expresion.interpretar(contexto);
            return {valor: valor.valor.toString(), tipo: TipoDatos.CADENA};
        }

}