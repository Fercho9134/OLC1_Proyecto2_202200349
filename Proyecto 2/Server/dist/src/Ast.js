"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AST = void 0;
const TablaSimbolo_1 = require("./contexto/TablaSimbolo");
const Primitivo_1 = require("./expresion/Primitivo");
const Resultado_1 = require("./expresion/Resultado");
const Declaracion_1 = require("./instruccion/definiciones/Declaracion");
const Funcion_1 = require("./instruccion/definiciones/Funcion");
const Execute_1 = require("./instruccion/Execute");
const Cout_1 = require("./instruccion/Cout");
class AST {
    constructor(instrucciones) {
        this.instrucciones = instrucciones;
        this.contextoGlobal = new TablaSimbolo_1.Contexto(null);
        this.contadorExec = 0;
        this.consola = this.contextoGlobal.consola;
    }
    Ejecutar() {
        this.instrucciones.forEach(instruccion => {
            try {
                if (instruccion instanceof Declaracion_1.Declaracion || instruccion instanceof Funcion_1.Funcion) {
                    instruccion.interpretar(this.contextoGlobal, this.consola);
                }
            }
            catch (error) {
                console.log(error);
                const salida = error.toString();
                const consola_salidad = [new Primitivo_1.Primitivo(salida, Resultado_1.TipoDatos.CADENA, false, 0, 0)];
                const Cout_error = new Cout_1.Cout(consola_salidad, 0, 0);
                Cout_error.interpretar(this.contextoGlobal, this.consola);
            }
        });
        this.instrucciones.forEach(instruccion => {
            try {
                if (instruccion instanceof Execute_1.Execute) {
                    if (this.contadorExec == 0) {
                        instruccion.interpretar(this.contextoGlobal, this.consola);
                        this.contadorExec++;
                    }
                    else {
                        throw new Error("Error Semantico: No se puede ejecutar mas de una vez el execute");
                    }
                }
            }
            catch (error) {
                console.log(error);
                const salida = error.toString();
                const consola_salidad = [new Primitivo_1.Primitivo(salida, Resultado_1.TipoDatos.CADENA, false, 0, 0)];
                const Cout_error = new Cout_1.Cout(consola_salidad, 0, 0);
                Cout_error.interpretar(this.contextoGlobal, this.consola);
            }
        });
    }
    getConsola() {
        console.log(this.consola);
        return this.consola.join("");
    }
}
exports.AST = AST;
