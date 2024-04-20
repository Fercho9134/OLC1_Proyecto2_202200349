"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Declaracion_Funcion = void 0;
const Simbolo_1 = require("../../contexto/Simbolo");
const Resultado_1 = require("../../expresion/Resultado");
const Instruccion_1 = require("../Instruccion");
class Declaracion_Funcion extends Instruccion_1.Instruccion {
    constructor(tipo, id, variables, instrucciones, linea, columna) {
        super(linea, columna);
        this.tipo = tipo;
        this.id = id;
        this.variables = variables;
        this.instrucciones = instrucciones;
    }
    interpretar(contexto, consola) {
        // Existe?
        const Simbolo_funcion = contexto.obtenerFuncion(this.id);
        let variables_funcion = [];
        if (Simbolo_funcion) {
            throw new Error(`Error semantico: La funcion ${this.id} ya existe en la linea ${this.linea} y columna ${this.columna}`);
        }
        //creamos variables en el contexto
        for (let variable of this.variables) {
            const existe = contexto.tablaSimbolos.has(variable.id);
            if (existe) {
                throw new Error(`Error semantico: La variable ${variable.id} ya existe en la linea ${this.linea} y columna ${this.columna}`);
            }
            if (variable.valor == null) {
                if (variable.tipo == Resultado_1.TipoDatos.ENTERO) {
                    variable.valor = { valor: 0, tipo: Resultado_1.TipoDatos.ENTERO };
                }
                else if (variable.tipo == Resultado_1.TipoDatos.DOBLE) {
                    variable.valor = { valor: 0, tipo: Resultado_1.TipoDatos.DOBLE };
                }
                else if (variable.tipo == Resultado_1.TipoDatos.BOOLEANO) {
                    variable.valor = { valor: false, tipo: Resultado_1.TipoDatos.BOOLEANO };
                }
                else if (variable.tipo == Resultado_1.TipoDatos.CADENA) {
                    variable.valor = { valor: "", tipo: Resultado_1.TipoDatos.CADENA };
                }
                else if (variable.tipo == Resultado_1.TipoDatos.CARACTER) {
                    variable.valor = { valor: "", tipo: Resultado_1.TipoDatos.CARACTER };
                }
            }
            else {
                variable.valor = variable.valor.interpretar(contexto);
            }
            contexto.guardarSimbolo(variable.id, variable.valor, variable.tipo, Simbolo_1.TipoSimbolo.VARIABLE);
            variables_funcion.push(contexto.obtenerVariable(variable.id));
        }
        //guardamos metodo
        contexto.guardarFuncion(this.tipo, this.id, variables_funcion, this.instrucciones);
        return null;
    }
}
exports.Declaracion_Funcion = Declaracion_Funcion;
