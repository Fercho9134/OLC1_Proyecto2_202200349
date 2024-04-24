import { Contexto } from "../contexto/TablaSimbolo";
import { Expresion } from "./Expresion";
import { Resultado, TipoDatos } from "./Resultado";

export class To_Lower extends Expresion{
expresion: Expresion;
    
        constructor(expresion: Expresion, linea: number, columna: number){
            super(linea, columna);
            this.expresion = expresion;
        }
    
        public interpretar(contexto:Contexto): Resultado {
            const valor = this.expresion.interpretar(contexto);
            if (valor.tipo != TipoDatos.CADENA) {
                throw new Error(`Error: se esperaba una cadena y se recibio un ${valor.tipo}`);
            }
            return {valor: valor.valor.toLowerCase(), tipo: TipoDatos.CADENA};
        }

}