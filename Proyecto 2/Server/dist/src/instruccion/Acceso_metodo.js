"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Acceso_metodo = void 0;
const Instruccion_1 = require("./Instruccion");
class Acceso_metodo extends Instruccion_1.Instruccion {
    constructor(id, variables_metodo, linea, columna) {
        super(linea, columna);
        this.id = id;
        this.variables_metodo = variables_metodo;
    }
    interpretar(contexto, consola) {
        console.log("Acceso metodo");
        let simbolo_metodo;
        simbolo_metodo = contexto.obtenerMetodo(this.id);
        if (!simbolo_metodo) {
            simbolo_metodo = contexto.obtenerFuncion(this.id);
        }
        if (simbolo_metodo) {
            //Si el metodo existe actualizamos las variables del metodo
            //Hay dos opciones posibles, que la variable contenga el nombre de la variable o solo el valor
            //Si solo contiene el valor se hará en el orden que se declararon las variables en el metodo
            //Si contiene el nombre de la variable se asignará el valor a la variable correspondiente
            let i = 0;
            console.log(this.variables_metodo);
            for (let variable of this.variables_metodo) {
                const valor_nuevo = variable.valor.interpretar(contexto, consola).valor;
                console.log("Valor nuevo");
                if (variable.id == null) {
                    const simbolo = simbolo_metodo.variables[i];
                    console.log(simbolo);
                    console.log(valor_nuevo);
                    simbolo.actualizarValor({ valor: valor_nuevo, tipo: simbolo.tipo });
                    contexto.actualizarSimbolo(simbolo.id, simbolo);
                    i++;
                }
                else {
                    const simbolo = contexto.obtenerVariable(variable.id);
                    if (simbolo) {
                        const valor_nuevo2 = variable.valor.interpretar(contexto, consola).valor;
                        simbolo.actualizarValor({ valor: valor_nuevo2, tipo: simbolo.tipo });
                        contexto.actualizarSimbolo(variable.id, simbolo);
                    }
                    else {
                        throw new Error(`Error semantico: La variable ${variable.id} no existe en el contexto`);
                    }
                }
            }
            //Ejecutamos las instrucciones del metodo
            const retorno = simbolo_metodo.instrucciones.interpretar(contexto, consola);
            console.log("Retorno");
            console.log(retorno);
            console.log("Fin retorno");
            if (retorno != null && typeof retorno != "string" && retorno.tipo == "return") {
                console.log("Entro al return");
                return retorno.valor;
            }
        }
        return null;
    }
}
exports.Acceso_metodo = Acceso_metodo;
