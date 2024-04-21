import { Expresion } from "./Expresion";
import { Resultado, TipoDatos } from "./Resultado";

export class Primitivo extends Expresion {
    public valor: string;
    tipo: TipoDatos;
    parseo:boolean;

    constructor(valor: string, tipo:TipoDatos, parsero:boolean, linea: number, columna: number) {
        super(linea, columna);
        this.valor = valor;
        this.tipo = tipo;
        this.parseo = parsero;
    }

    public interpretar(): Resultado {
  
        if (this.tipo === TipoDatos.ENTERO) {
            return {valor: parseInt(this.valor), tipo: TipoDatos.ENTERO}
        } else if (this.tipo === TipoDatos.DOBLE) {
            return {valor: parseFloat(this.valor), tipo: TipoDatos.DOBLE}
        } else if (this.tipo === TipoDatos.BOOLEANO) {
            if (this.valor.toLowerCase() === "true") {
                return {valor: true, tipo: TipoDatos.BOOLEANO}
            }
            return {valor: false, tipo: TipoDatos.BOOLEANO}
        }else if (this.tipo === TipoDatos.CADENA) {
            return {valor: this.valor, tipo: TipoDatos.CADENA}
        }else if (this.tipo === TipoDatos.CARACTER) {
            return {valor: this.valor, tipo: TipoDatos.CARACTER}
        }
        return {valor: null, tipo: TipoDatos.ERROR}
    
}
}
