import { TipoSimbolo } from "../../contexto/Simbolo";
import { Contexto } from "../../contexto/TablaSimbolo";
import { TipoDatos, variables } from "../../expresion/Resultado";
import { Bloque } from "../Bloque";
import { Instruccion } from "../Instruccion";

export class Funcion extends Instruccion {
    tipo: TipoDatos;
    id: string;
    parametros: any[];
    bloque: Bloque;

    constructor(tipo: TipoDatos, id: string, parametros: any[], bloque: Bloque, linea: number, columna: number) {
        super(linea, columna);
        this.tipo = tipo;
        this.id = id;
        this.parametros = parametros;
        this.bloque = bloque;
    }

    public interpretar(contexto: Contexto, consola: string[]): string | null {
        const global = contexto.obtenerGlobal();
        global.guardarSimbolo(this.id, this, this.tipo, TipoSimbolo.FUNCION);
        return null;
    }

    public getParametros = () => this.parametros;
    public getInstrucciones = () => this.bloque;

}