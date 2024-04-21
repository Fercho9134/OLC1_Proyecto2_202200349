import { TipoDatos } from "../expresion/Resultado";

export class Simbolo {
    id: string;
    valor: Object;
    tipo: TipoDatos;
    public tipoSimbolo: TipoSimbolo;

    constructor(id: string, valor: Object, tipo: TipoDatos, tipoSimbolo: TipoSimbolo){
        this.id = id;
        this.valor = valor;
        this.tipo = tipo;
        this.tipoSimbolo = tipoSimbolo;
    }

    public obtenerValor():Object{
        return this.valor;
    }

    public actualizarValor(valor: Object){
        this.valor = valor;
    }

    public obtenerTipo(){
        return this.tipo;
    }
}

export enum TipoSimbolo {
    VARIABLE,
    FUNCION,
    METODO
}