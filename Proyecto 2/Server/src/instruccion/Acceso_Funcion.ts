import { TipoSimbolo } from "../contexto/Simbolo"; 
import { Contexto } from "../contexto/TablaSimbolo";
import { Resultado, variables } from "../expresion/Resultado";
import { Instruccion } from "./Instruccion";

export class Acceso_Funcion extends Instruccion{
    id: string;
    variables_metodo:variables[]


    constructor(id: string,variables_metodo:variables[], linea: number, columna: number){
        super(linea, columna);
        this.id = id;
        this.variables_metodo = variables_metodo
    }

    public interpretar(contexto:Contexto, consola:[]): Resultado{
        const simbolo_funcion = contexto.obtenerFuncion(this.id)
        if (simbolo_funcion){
            //Si el metodo existe actualizamos las variables del metodo
            //Hay dos opciones posibles, que la variable contenga el nombre de la variable o solo el valor
            //Si solo contiene el valor se hará en el orden que se declararon las variables en el metodo
            //Si contiene el nombre de la variable se asignará el valor a la variable correspondiente
            let i = 0
            console.log(this.variables_metodo)
            for (let variable of this.variables_metodo){

                const valor_nuevo = variable.valor.interpretar(contexto, consola).valor

                if (variable.id == null){
                    const simbolo = simbolo_funcion.variables[i]
                    simbolo.actualizarValor({valor:valor_nuevo,tipo:simbolo.tipo})
                    contexto.actualizarSimbolo(simbolo.id,simbolo)
                    i++
                }else{
                    const simbolo = contexto.obtenerVariable(variable.id)
                    if (simbolo){
                        const valor_nuevo2 = variable.valor.interpretar(contexto, consola).valor
                        simbolo.actualizarValor({valor:valor_nuevo2,tipo:simbolo.tipo})
                        contexto.actualizarSimbolo(variable.id,simbolo)
                    }else{
                        throw new Error(`Error semantico: La variable ${variable.id} no existe en el contexto`)
                    }
                }
            }
            //Ejecutamos las instrucciones del metodo
            const retorno = simbolo_funcion.instrucciones.interpretar(contexto, consola)
            
            console.log(retorno)
            //Si el retorno no es un null o un string, entonces es un return
            if (retorno != null && typeof retorno != "string" && retorno.tipo == "return"){
                return retorno.valor
            }
            

        }

        throw new Error(`La funcion ${this.id} no tiene return`)

}
}