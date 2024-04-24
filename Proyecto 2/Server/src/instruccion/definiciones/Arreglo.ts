import { Simbolo, TipoSimbolo } from "../../contexto/Simbolo";
import { Contexto } from "../../contexto/TablaSimbolo";
import { C_STR } from "../../expresion/C_STR";
import { Expresion } from "../../expresion/Expresion";
import { TipoDatos } from "../../expresion/Resultado";
import { Instruccion } from "../Instruccion";
import { Declaracion } from "./Declaracion";

export class Arreglo extends Instruccion {
    tipo: TipoDatos;
    id: string;
    valores: any[];
    dimensiones:any[];

    constructor(tipo: TipoDatos, id: string, valores: any[], dimensiones:any[], linea: number, columna: number) {
        super(linea, columna);
        this.tipo = tipo;
        this.id = id;
        this.valores = valores;
        this.dimensiones = dimensiones;
    }

    public interpretar(contexto: Contexto, consola:string[]): null {

        //de valores que tenemos.
        if(this.valores == null){
            
            //Contamos las dimensiones que tenemos.
            let cantidadDimensiones = this.dimensiones.length;
            let dimensiones = [];
            for(let i = 0; i < cantidadDimensiones; i++){
                dimensiones.push(this.dimensiones[i].interpretar(contexto).valor);
            }

            let valorDefecto;
            let tipoDefecto;

            //Obtenemos los valores por defecto.
            if(this.tipo == TipoDatos.ENTERO){
                valorDefecto = 0;
                tipoDefecto = TipoDatos.ENTERO;
            }else if(this.tipo == TipoDatos.DOBLE){
                valorDefecto = 0.0;
                tipoDefecto = TipoDatos.DOBLE;
            }else if(this.tipo == TipoDatos.CARACTER){
                valorDefecto = '0';
                tipoDefecto = TipoDatos.CARACTER;
            }else if(this.tipo == TipoDatos.BOOLEANO){
                valorDefecto = true;
                tipoDefecto = TipoDatos.BOOLEANO;
            }else if(this.tipo == TipoDatos.CADENA){
                valorDefecto = "";
                tipoDefecto = TipoDatos.CADENA;
            }

            //Si es un arreglo de una dimension. Entonces llenamos el array con valores predeterminados.
            if(cantidadDimensiones == 1){
                this.valores = [];
                for(let i = 0; i < dimensiones[0]; i++){
                    this.valores.push({valor:valorDefecto,tipo:tipoDefecto});
                }
            }

            //Si es un arreglo de dos dimensiones. Entonces llenamos el array con valores predeterminados.
            if(cantidadDimensiones == 2){
                this.valores = [];
                for(let i = 0; i < dimensiones[0]; i++){
                    let temp = [];
                    for(let j = 0; j < dimensiones[1]; j++){
                        temp.push({valor:valorDefecto,tipo:tipoDefecto});
                    }
                    this.valores.push(temp);
                }
            }
        }else{

            if (this.valores instanceof C_STR){
                this.valores = this.valores.interpretar(contexto).valor;
            }


            //Si tenemos los valores entonces los llenamos
            let cantidadDimensiones = 1
            if(this.valores[0] instanceof Array){
                cantidadDimensiones = 2;
            }

            if(cantidadDimensiones ==1){
                for(let i = 0; i < this.valores.length; i++){
                    let valor =this.valores[i].interpretar(contexto);
                    if (valor.tipo == this.tipo){
                        this.valores[i]=valor;
                    }else{
                        throw new Error(`Error semantico: No se puede asignar un valor de tipo ${valor.tipo} a una subvariable de tipo ${this.tipo} en la linea ${this.linea} y columna ${this.columna}`)
                    }
                }
            }else if(cantidadDimensiones == 2){
                for(let i = 0; i < this.valores.length; i++){
                    for(let j = 0; j < this.valores[i].length; j++){
                        let valor =this.valores[i][j].interpretar(contexto);
                        if (valor.tipo == this.tipo){
                            this.valores[i][j]=valor;
                        }else{
                            throw new Error(`Error semantico: No se puede asignar un valor de tipo ${valor.tipo} a una subvariable de tipo ${this.tipo} en la linea ${this.linea} y columna ${this.columna}`)
                        }
                    }
                }
            }
            
        }
        
        //Creamos el simbolo del arreglo
        contexto.guardarSimbolo(this.id, this.valores, this.tipo, TipoSimbolo.ARREGLO);

        

    

        return null;
    }



    
}