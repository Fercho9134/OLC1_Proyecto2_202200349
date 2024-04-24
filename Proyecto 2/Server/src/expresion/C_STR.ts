import { Contexto } from "../contexto/TablaSimbolo";
import { Acceso } from "./Acceso";
import { Expresion } from "./Expresion";
import { Primitivo } from "./Primitivo";
import { Resultado, TipoDatos } from "./Resultado";

export class C_STR extends Expresion{
id: string;

        constructor(id: string, linea: number, columna: number){
            super(linea, columna);
            this.id = id;
        }
    
        public interpretar(contexto:Contexto): Resultado {
            const valor = new Acceso(this.id, this.linea, this.columna).interpretar(contexto)
            
            if(valor.tipo == TipoDatos.CADENA){
                //Comvertimos la cadena en un arreglo de objetos de tipo primitivo caracter
                let cadena = []
                for (let i = 0; i < valor.valor.length; i++) {
                    let primitivo_nuevo = new Primitivo(valor.valor[i], TipoDatos.CARACTER, false, 0, 0)
                    cadena.push(primitivo_nuevo)
                }

                return {valor: cadena, tipo: TipoDatos.CARACTER};
            }
            throw new Error(`Error: se esperaba una cadena y se recibio un ${valor.tipo}`);
        }

}