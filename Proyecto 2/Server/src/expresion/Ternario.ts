import { Expresion } from "./Expresion";
import { Resultado, TipoDatos } from "./Resultado";
import { Contexto } from "../contexto/TablaSimbolo"

export class Ternario extends Expresion{
    condicion: Expresion;
    expresionVerdadera: Expresion;
    expresionFalsa: Expresion;

    constructor(condicion: Expresion, expresionVerdadera: Expresion, expresionFalsa: Expresion, fila: number, columna: number){
        super(fila, columna);
        this.condicion = condicion;
        this.expresionVerdadera = expresionVerdadera;
        this.expresionFalsa = expresionFalsa;
    }

    public interpretar(contexto:Contexto): Resultado {
        const condicion = this.condicion.interpretar(contexto)
        if (condicion.tipo!=TipoDatos.BOOLEANO)
            throw Error("La condición no es booleana")
        if (condicion.valor){
            return this.expresionVerdadera.interpretar(contexto)
        }else{
            return this.expresionFalsa.interpretar(contexto)
        }
    }

    
}