"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AST = void 0;
const TablaSimbolo_1 = require("./contexto/TablaSimbolo");
const Declaracion_1 = require("./instruccion/definiciones/Declaracion");
const Funcion_1 = require("./instruccion/definiciones/Funcion");
const Execute_1 = require("./instruccion/Execute");
class AST {
    constructor(instrucciones) {
        this.instrucciones = instrucciones;
        this.contextoGlobal = new TablaSimbolo_1.Contexto(null);
        this.contadorExec = 0;
        this.consola = this.contextoGlobal.consola;
    }
    Ejecutar() {
        this.instrucciones.forEach(instruccion => {
            if (instruccion instanceof Declaracion_1.Declaracion || instruccion instanceof Funcion_1.Funcion) {
                instruccion.interpretar(this.contextoGlobal, this.consola);
            }
        });
        this.instrucciones.forEach(instruccion => {
            if (instruccion instanceof Execute_1.Execute) {
                if (this.contadorExec == 0) {
                    instruccion.interpretar(this.contextoGlobal, this.consola);
                    this.contadorExec++;
                }
                else {
                    throw new Error("Error Semantico: No se puede ejecutar mas de una vez el execute");
                }
            }
        });
    }
    getConsola() {
        console.log(this.consola);
        return this.consola.join("");
    }
}
exports.AST = AST;
