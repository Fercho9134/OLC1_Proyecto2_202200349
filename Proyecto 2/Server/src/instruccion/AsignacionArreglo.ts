import { TipoSimbolo } from "../contexto/Simbolo";
import { Contexto } from "../contexto/TablaSimbolo";
import { Expresion } from "../expresion/Expresion";
import { Resultado } from "../expresion/Resultado";
import { Instruccion } from "./Instruccion";

export class Asignacion_Arreglo extends Instruccion{
    id:string
    direccion:Expresion[]
    valor:Expresion
    
    constructor(id:string,direccion:Expresion[], valor:Expresion,linea:number,columna:number){
        super(linea,columna)
        this.id = id
        this.direccion = direccion
        this.valor = valor
    }

    public interpretar(contexto: Contexto, consola: string[]): null {
        const simbolo = contexto.obtenerSimbolo(this.id)
        const nuevoValor = this.valor.interpretar(contexto)
        


        //Recordar que buscaremos modificar una subvariables con el nombre id@$direccion1 o id@$direccion1@$direccion2 segun sea el caso
        //Podemos verificar la cantidad de dimensiones que tiene el arreglo con this.direccion.length

        //Si existe el simbolo

        if (simbolo){
            if (simbolo.tipoSimbolo == TipoSimbolo.ARREGLO){
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
                            //Obtenemos la subvariable
                            const subVariable = contexto.obtenerSimbolo(`${this.id}@$${direccion}`);
                            if (subVariable){
                                //Obtenemos el valor de la subvariable
                                const resultado = subVariable.obtenerValor() as Resultado;
                                if (resultado.tipo == nuevoValor.tipo){
                                    subVariable.actualizarValor(nuevoValor)
                                    contexto.actualizarSimbolo(`${this.id}@$${direccion}`,subVariable)
                                    return null
                                }
                                throw new Error(`Error semantico: No se puede asignar un valor de tipo ${nuevoValor.tipo} a una subvariable de tipo ${resultado.tipo} en la linea ${this.linea} y columna ${this.columna}`)
                            }
                            throw new Error(`No existe la subvariable ${this.id}@$${direccion}`);
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
                            //Obtenemos la subvariable
                            const subVariable = contexto.obtenerSimbolo(`${this.id}@$${direccion1}@$${direccion2}`);
                            if (subVariable){
                                //Obtenemos el valor de la subvariable
                                const resultado = subVariable.obtenerValor() as Resultado;
                                if (resultado.tipo == nuevoValor.tipo){
                                    subVariable.actualizarValor(nuevoValor)
                                    contexto.actualizarSimbolo(`${this.id}@$${direccion1}@$${direccion2}`,subVariable)
                                    return null
                                }
                                throw new Error(`Error semantico: No se puede asignar un valor de tipo ${nuevoValor.tipo} a una subvariable de tipo ${resultado.tipo} en la linea ${this.linea} y columna ${this.columna}`)
                            }
                            throw new Error(`No existe la subvariable ${this.id}@$${direccion1}@$${direccion2}`);
                        }

                        throw new Error(`El simbolo ${this.id} no es un arreglo`);
                    }
                    throw new Error(`El simbolo ${this.id} no existe en este contexto`);
                }
                throw new Error(`No se puede acceder a mas de dos dimensiones`);
            }
            throw new Error("No es tipo arreglo")
        }
        throw new Error("El arreglo no existe")
        
    }
}