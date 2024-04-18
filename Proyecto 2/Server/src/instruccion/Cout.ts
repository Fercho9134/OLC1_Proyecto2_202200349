import { Expresion } from "../expresion/Expresion";
import { Instruccion } from "./Instruccion";
import { Contexto } from "../contexto/TablaSimbolo";

export class Cout extends Instruccion {
    private expresiones: Expresion[];

    constructor(expresiones: Expresion[], linea: number, columna: number) {
        super(linea, columna);
        this.expresiones = expresiones;
    }

    public interpretar(contexto:Contexto, consola: string[]): null {
        consola.push("\n");
        this.expresiones.forEach(expresion => {
            const resultado = expresion.interpretar(contexto);
            consola.push(resultado.valor);
        });
        return null;
    }
}
