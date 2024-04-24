"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asignacion_Arreglo = void 0;
const Simbolo_1 = require("../contexto/Simbolo");
const Instruccion_1 = require("./Instruccion");
class Asignacion_Arreglo extends Instruccion_1.Instruccion {
    constructor(id, direccion, valor, linea, columna) {
        super(linea, columna);
        this.id = id;
        this.direccion = direccion;
        this.valor = valor;
    }
    interpretar(contexto, consola) {
        const simbolo_a = contexto.obtenerSimbolo(this.id);
        const nuevoValor = this.valor.interpretar(contexto);
        //Recordar que buscaremos modificar una subvariables con el nombre id@$direccion1 o id@$direccion1@$direccion2 segun sea el caso
        //Podemos verificar la cantidad de dimensiones que tiene el arreglo con this.direccion.length
        //Si existe el simbolo
        if (simbolo_a) {
            if (simbolo_a.tipoSimbolo == Simbolo_1.TipoSimbolo.ARREGLO) {
                //Obtenemos la cantidad de dimensiones que tiene el arreglo
                //Recordar que solo accederemos al nombre de la subvariable que tendran el nombre id@$posicion o id@$posicion@$posicion
                let cantidadDimensiones = this.direccion.length;
                //Si solo tiene una dimension
                if (cantidadDimensiones == 1) {
                    const vector = simbolo_a.obtenerValor();
                    //Obtenemos el valor de la direccion
                    let direccion = this.direccion[0].interpretar(contexto).valor;
                    if (simbolo_a.tipo == nuevoValor.tipo) {
                        vector[direccion] = nuevoValor;
                        return null;
                    }
                    else {
                        throw new Error(`No se puede asignar un valor de tipo ${nuevoValor.tipo} a un arreglo de tipo ${simbolo_a.tipo}`);
                    }
                }
                else if (cantidadDimensiones == 2) {
                    const vector = simbolo_a.obtenerValor();
                    //Obtenemos el valor de la direccion
                    let direccion1 = this.direccion[0].interpretar(contexto).valor;
                    let direccion2 = this.direccion[1].interpretar(contexto).valor;
                    if (simbolo_a.tipo == nuevoValor.tipo) {
                        vector[direccion1][direccion2] = nuevoValor;
                        return null;
                    }
                    else {
                        throw new Error(`No se puede asignar un valor de tipo ${nuevoValor.tipo} a un arreglo de tipo ${simbolo_a.tipo}`);
                    }
                }
                throw new Error(`No se puede acceder a mas de dos dimensiones`);
            }
            throw new Error("No es tipo arreglo");
        }
        throw new Error("El arreglo no existe");
    }
}
exports.Asignacion_Arreglo = Asignacion_Arreglo;
