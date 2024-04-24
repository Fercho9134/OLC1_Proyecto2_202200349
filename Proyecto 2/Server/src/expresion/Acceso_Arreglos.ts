import { TipoSimbolo } from "../contexto/Simbolo"; 
import { Contexto } from "../contexto/TablaSimbolo";
import { Expresion } from "./Expresion";
import { Resultado } from "./Resultado";

export class Acceso_Arreglos extends Expresion{
    id: string;
    direccion: Expresion[];

    constructor(id: string, direccion: Expresion[], fila: number, columna: number){
        super(fila, columna);
        this.id = id;
        this.direccion = direccion;
    }

    public interpretar(contexto:Contexto): Resultado {

        //Obtenemos la cantidad de dimensiones que tiene el arreglo
        //Recordar que solo accederemos al nombre de la subvariable que tendran el nombre id@$posicion o id@$posicion@$posicion
        let cantidadDimensiones = this.direccion.length;

        //Si solo tiene una dimension
        if (cantidadDimensiones == 1){
            //Obtenemos el valor de la direccion
            let direccion = this.direccion[0].interpretar(contexto).valor;
            //Obtenemos el simbolo del arreglo
            const simbolo_a = contexto.obtenerSimbolo(this.id);
            if (simbolo_a){
                if(simbolo_a.tipoSimbolo == TipoSimbolo.ARREGLO){
                    
                    let vector = simbolo_a.obtenerValor() as Resultado[];

                    return vector[direccion];

                }
                throw new Error(`El simbolo ${this.id} no es un arreglo`);
            }
            throw new Error(`El simbolo ${this.id} no existe en este contexto`);

        }else if(cantidadDimensiones == 2){
            //Obtenemos el valor de la direccion
            let direccion1 = this.direccion[0].interpretar(contexto).valor;
            let direccion2 = this.direccion[1].interpretar(contexto).valor;
            //Obtenemos el simbolo del arreglo
            const simbolo_a = contexto.obtenerSimbolo(this.id);
            if (simbolo_a){
                if(simbolo_a.tipoSimbolo == TipoSimbolo.ARREGLO){
                    
                    let vector = simbolo_a.obtenerValor() as Resultado[][];

                    return vector[direccion1][direccion2];
                    
                }
                throw new Error(`El simbolo ${this.id} no es un arreglo`);
            }
            throw new Error(`El simbolo ${this.id} no existe en este contexto`);
        }
        throw new Error(`No se puede acceder a mas de dos dimensiones`);
    }

}