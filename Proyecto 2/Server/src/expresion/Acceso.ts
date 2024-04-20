import { TipoSimbolo } from "../contexto/Simbolo"; 
import { Contexto } from "../contexto/TablaSimbolo";
import { Expresion } from "./Expresion";
import { Resultado } from "./Resultado";

export class Acceso extends Expresion{
    id: string;

    constructor(id: string, fila: number, columna: number){
        super(fila, columna);
        this.id = id;
    }

    public interpretar(contexto:Contexto): Resultado {
        const simbolo = contexto.obtenerVariable(this.id);
        if (simbolo){
            if(simbolo.tipoSimbolo == TipoSimbolo.VARIABLE){
                const resultado = simbolo.obtenerValor() as Resultado
                console.log(resultado)
                return {valor: resultado.valor, tipo: resultado.tipo}
            }
            throw new Error(`El simbolo ${this.id} no es una variable`);
        }
        throw new Error(`El simbolo ${this.id} no existe en este contexto`);
    }

}