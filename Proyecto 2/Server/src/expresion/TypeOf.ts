import { Contexto } from "../contexto/TablaSimbolo";
import { Expresion } from "./Expresion";
import { Resultado, TipoDatos } from "./Resultado";
import { TipoSimbolo } from "../contexto/Simbolo";
import { Acceso } from "./Acceso";

export class TypeOf extends Expresion{
    id: Acceso;

    constructor(id: Acceso, fila: number, columna: number){
        super(fila, columna);
        this.id = id;
    }

    public interpretar(contexto:Contexto): Resultado {
        const simbolo = contexto.obtenerSimbolo(this.id.id);
        console.log(simbolo)
        if (simbolo){
            if(simbolo.tipoSimbolo == TipoSimbolo.ARREGLO){
                return {valor: "Arreglo", tipo: TipoDatos.CADENA}
            }else if(simbolo.tipoSimbolo == TipoSimbolo.VARIABLE){
                return {valor: simbolo.tipo, tipo: TipoDatos.CADENA}
            }
            throw new Error(`El simbolo ${this.id} no es un arreglo`);
        }
        throw new Error(`El simbolo ${this.id} no existe en este contexto`);
    }
}