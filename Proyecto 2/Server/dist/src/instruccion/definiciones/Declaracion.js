"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Declaracion = void 0;
const Simbolo_1 = require("../../contexto/Simbolo");
const Resultado_1 = require("../../expresion/Resultado");
const Instruccion_1 = require("../Instruccion");
class Declaracion extends Instruccion_1.Instruccion {
    constructor(tipo, id, expresion, linea, columna) {
        super(linea, columna);
        this.tipo = tipo;
        this.id = id;
        this.expresion = expresion;
    }
    interpretar(contexto, consola) {
        let valor = null;
        if (this.expresion != null) {
            valor = this.expresion.interpretar(contexto);
        }
        for (let id of this.id) {
            if (valor != null) {
                if (valor.tipo != this.tipo) {
                    throw new Error(`Error semantico: No se puede asignar un valor de tipo ${valor.tipo} a una variable de tipo ${this.tipo} en la linea ${this.linea} y columna ${this.columna}`);
                }
                contexto.guardarSimbolo(id, valor, valor.tipo, Simbolo_1.TipoSimbolo.VARIABLE);
            }
            else {
                if (this.tipo == Resultado_1.TipoDatos.ENTERO) {
                    contexto.guardarSimbolo(id, { valor: 0, tipo: Resultado_1.TipoDatos.ENTERO }, Resultado_1.TipoDatos.ENTERO, Simbolo_1.TipoSimbolo.VARIABLE);
                }
                else if (this.tipo == Resultado_1.TipoDatos.DOBLE) {
                    contexto.guardarSimbolo(id, { valor: 0, tipo: Resultado_1.TipoDatos.DOBLE }, Resultado_1.TipoDatos.DOBLE, Simbolo_1.TipoSimbolo.VARIABLE);
                }
                else if (this.tipo == Resultado_1.TipoDatos.BOOLEANO) {
                    contexto.guardarSimbolo(id, { valor: true, tipo: Resultado_1.TipoDatos.BOOLEANO }, Resultado_1.TipoDatos.BOOLEANO, Simbolo_1.TipoSimbolo.VARIABLE);
                }
                else if (this.tipo == Resultado_1.TipoDatos.CADENA) {
                    contexto.guardarSimbolo(id, { valor: "", tipo: Resultado_1.TipoDatos.CADENA }, Resultado_1.TipoDatos.CADENA, Simbolo_1.TipoSimbolo.VARIABLE);
                }
                else if (this.tipo == Resultado_1.TipoDatos.CARACTER) {
                    contexto.guardarSimbolo(id, { valor: "0", tipo: Resultado_1.TipoDatos.CARACTER }, Resultado_1.TipoDatos.CARACTER, Simbolo_1.TipoSimbolo.VARIABLE);
                }
            }
        }
        return null;
        /*
         // Existe?
         const valor = this.expresion.interpretar(contexto)
         if (valor.tipo != this.tipo) {
             throw new Error(`Error semantico: No se puede asignar un valor de tipo ${valor.tipo} a una variable de tipo ${this.tipo} en la linea ${this.linea} y columna ${this.columna}`)
         }
         contexto.guardarSimbolo(this.id,valor,valor.tipo,TipoSimbolo.VARIABLE)
         return null
         */
    }
}
exports.Declaracion = Declaracion;
