"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Declaracion_Metodo = void 0;
const Simbolo_1 = require("../../contexto/Simbolo");
const Resultado_1 = require("../../expresion/Resultado");
const Instruccion_1 = require("../Instruccion");
class Declaracion_Metodo extends Instruccion_1.Instruccion {
    constructor(id, variables, instrucciones, linea, columna) {
        super(linea, columna);
        this.id = id;
        this.variables = variables;
        this.instrucciones = instrucciones;
    }
    interpretar(contexto, consola) {
        // Existe?
        const simbolo_metodo = contexto.obtenerMetodo(this.id);
        let variables_metodo = [];
        if (simbolo_metodo) {
            throw new Error(`Error semantico: El metodo ${this.id} ya existe en la linea ${this.linea} y columna ${this.columna}`);
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
            variables_metodo.push(contexto.obtenerVariable(variable.id));
        }
        //guardamos metodo
        contexto.guardarMetodo(this.id, variables_metodo, this.instrucciones);
        return null;
    }
}
exports.Declaracion_Metodo = Declaracion_Metodo;
