import { TipoDatos } from "../expresion/Resultado";
import { Bloque } from "../instruccion/Bloque";
import { Simbolo } from "./Simbolo";

export class Simbolo_Funcion {
    tipo:TipoDatos
    id: string;
    variables: Simbolo[];
    instrucciones: Bloque


    constructor(tipo:TipoDatos, id: string, variables: Simbolo[], instrucciones: Bloque){
        this.tipo = tipo;
        this.id = id;
        this.variables = variables;
        this.instrucciones = instrucciones;
    }

    public obtenerVariables(): Simbolo[]{
        return this.variables;
    }

    public obtenerInstrucciones(): Bloque{
        return this.instrucciones;
    }

    public obtenerId(): string{
        return this.id;
    }

}