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

        //Obtenemos la consola global que esta en el ast

        consola = contexto.obtenerGlobal().consola;
        console.log("Cout");
        console.log("Impri",this.expresiones);
        this.expresiones.forEach(expresion => {
            const resultado = expresion.interpretar(contexto);
            if (resultado!= undefined && resultado != null){
                consola.push(resultado.valor);
            }
            
        });
        return null;
    }
}
