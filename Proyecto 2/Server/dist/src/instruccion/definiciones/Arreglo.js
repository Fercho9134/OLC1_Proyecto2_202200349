"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arreglo = void 0;
const Simbolo_1 = require("../../contexto/Simbolo");
const Instruccion_1 = require("../Instruccion");
const Declaracion_1 = require("./Declaracion");
class Arreglo extends Instruccion_1.Instruccion {
    constructor(tipo, id, valores, dimensiones, linea, columna) {
        super(linea, columna);
        this.tipo = tipo;
        this.id = id;
        this.valores = valores;
        this.dimensiones = dimensiones;
    }
    interpretar(contexto, consola) {
        contexto.guardarSimbolo(this.id, this, this.tipo, Simbolo_1.TipoSimbolo.ARREGLO);
        console.log("Valores: ", this.valores);
        console.log("Dimensiones: ", this.dimensiones);
        console.log("Fina");
        //Creamos las subvariables del arreglo con el nombre del arreglo y el indice asi: id@$indice... por cada dimension, si es de dos dimensiones, entonces id@$indice1@$indice2
        //la cantidad de subvariables es igual al producto de las dimensiones
        //Hay dos opciones de crear el arreglo, si la lista de valores es null, entonces tenemos que crear un arreglo vacio
        //con la cantidad de subvariables igual al producto de las dimensiones. Si la lista de valores no es null, entonces
        //no tenemos las dimensiones, por lo que tenemos que crear un arreglo con la cantidad de subvariables igual a la cantidad
        //de valores que tenemos.
        if (this.valores == null) {
            //Si el arreglo es de una dimension solo se hará un for, si es de dos dimensiones se harán dos for anidados con el numero de filas y columnas
            let cantidadSubVariables = 1;
            for (let i = 0; i < this.dimensiones.length; i++) {
                cantidadSubVariables = cantidadSubVariables * this.dimensiones[i].interpretar(contexto).valor;
            }
            if (this.dimensiones.length == 1) {
                for (let i = 0; i < cantidadSubVariables; i++) {
                    const nueva = new Declaracion_1.Declaracion(this.tipo, [`${this.id}@$${i}`], null, this.linea, this.columna);
                    nueva.interpretar(contexto, consola);
                }
            }
            else if (this.dimensiones.length == 2) {
                // Obtener el número de elementos en la lista general
                for (let i = 0; i < this.dimensiones[0].interpretar(contexto).valor; i++) {
                    for (let j = 0; j < this.dimensiones[1].interpretar(contexto).valor; j++) {
                        const nueva = new Declaracion_1.Declaracion(this.tipo, [`${this.id}@$${i}@$${j}`], null, this.linea, this.columna);
                        nueva.interpretar(contexto, consola);
                    }
                }
            }
        }
        else {
            //Los valores vendran en una lista asi: [ [1, 2], [3, 4] ]; si es de dos dimensiones
            //Si es de una dimension vendra asi: [1, 2, 3, 4]
            //Si el arreglo es de una dimension solo se hará un for, si es de dos dimensiones se harán dos for anidados con el numero de filas y columnas
            let dimensiones = this.valores.length == 1 ? 1 : 2;
            if (dimensiones == 1) {
                for (let i = 0; i < this.valores.length; i++) {
                    const nueva = new Declaracion_1.Declaracion(this.tipo, [`${this.id}@$${i}`], this.valores[0][i], this.linea, this.columna);
                    nueva.interpretar(contexto, consola);
                    console.log("Nueva: ", nueva);
                }
            }
            else if (dimensiones == 2) {
                for (let i = 0; i < this.valores.length; i++) {
                    for (let j = 0; j < this.valores[i].length; j++) {
                        const nueva = new Declaracion_1.Declaracion(this.tipo, [`${this.id}@$${i}@$${j}`], this.valores[i][j], this.linea, this.columna);
                        nueva.interpretar(contexto, consola);
                        console.log("Nueva: ", nueva);
                    }
                }
            }
        }
        return null;
    }
}
exports.Arreglo = Arreglo;
