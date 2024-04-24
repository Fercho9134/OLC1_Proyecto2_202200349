"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Acceso_Arreglos = void 0;
const Simbolo_1 = require("../contexto/Simbolo");
const Expresion_1 = require("./Expresion");
class Acceso_Arreglos extends Expresion_1.Expresion {
    constructor(id, direccion, fila, columna) {
        super(fila, columna);
        this.id = id;
        this.direccion = direccion;
    }
    interpretar(contexto) {
        //Obtenemos la cantidad de dimensiones que tiene el arreglo
        //Recordar que solo accederemos al nombre de la subvariable que tendran el nombre id@$posicion o id@$posicion@$posicion
        let cantidadDimensiones = this.direccion.length;
        //Si solo tiene una dimension
        if (cantidadDimensiones == 1) {
            //Obtenemos el valor de la direccion
            let direccion = this.direccion[0].interpretar(contexto).valor;
            //Obtenemos el simbolo del arreglo
            const simbolo_a = contexto.obtenerSimbolo(this.id);
            if (simbolo_a) {
                if (simbolo_a.tipoSimbolo == Simbolo_1.TipoSimbolo.ARREGLO) {
                    let vector = simbolo_a.obtenerValor();
                    return vector[direccion];
                }
                throw new Error(`El simbolo ${this.id} no es un arreglo`);
            }
            throw new Error(`El simbolo ${this.id} no existe en este contexto`);
        }
        else if (cantidadDimensiones == 2) {
            //Obtenemos el valor de la direccion
            let direccion1 = this.direccion[0].interpretar(contexto).valor;
            let direccion2 = this.direccion[1].interpretar(contexto).valor;
            //Obtenemos el simbolo del arreglo
            const simbolo_a = contexto.obtenerSimbolo(this.id);
            if (simbolo_a) {
                if (simbolo_a.tipoSimbolo == Simbolo_1.TipoSimbolo.ARREGLO) {
                    let vector = simbolo_a.obtenerValor();
                    return vector[direccion1][direccion2];
                }
                throw new Error(`El simbolo ${this.id} no es un arreglo`);
            }
            throw new Error(`El simbolo ${this.id} no existe en este contexto`);
        }
        throw new Error(`No se puede acceder a mas de dos dimensiones`);
    }
}
exports.Acceso_Arreglos = Acceso_Arreglos;
