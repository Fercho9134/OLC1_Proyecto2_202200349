import { Expresion } from "../expresion/Expresion";
import { Instruccion } from "./Instruccion";

export class Cout extends Instruccion {
    private expresiones: Expresion[];

    constructor(expresiones: Expresion[], linea: number, columna: number) {
        super(linea, columna);
        this.expresiones = expresiones;
    }

    public interpretar(consola: string[]): null {
        consola.push("\n");
        console.log(this.expresiones)
        this.expresiones.forEach(expresion => {
            console.log(expresion)
            const resultado = expresion.interpretar();
            consola.push(resultado.valor);
        });
        return null;
    }
}
