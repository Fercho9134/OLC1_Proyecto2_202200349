import { Resultado, TipoDatos } from "../expresion/Resultado";
import { Contexto } from "../contexto/TablaSimbolo";
import { Expresion } from "../expresion/Expresion";
import { Funcion } from "./definiciones/Funcion";
import { Instruccion } from "./Instruccion";
import { TipoSimbolo } from "../contexto/Simbolo";

export class Llamada extends Instruccion{
    id: string
    argumentos: Expresion[]

    constructor(id: string, argumentos: Expresion[], linea: number, columna: number){
        super(linea, columna)
        this.id = id
        this.argumentos = argumentos
    }

    public interpretar(contexto: Contexto, consola: string[]): string | null | Resultado {

        const simbolo = contexto.obtenerSimbolo(this.id)
        if (simbolo?.tipoSimbolo!=TipoSimbolo.FUNCION){
            
            throw new Error("La funcion no existe "+this.id)

        }

        const funcion = simbolo.obtenerValor() as Funcion
        const global = contexto.obtenerGlobal()
        const contextoFuncion = new Contexto(global)

        
        funcion.getParametros().forEach((parametro, index) => {
            const valor = this.argumentos[index].interpretar(contexto)
            contextoFuncion.guardarSimbolo(parametro.id, valor, valor.tipo, TipoSimbolo.VARIABLE)
        })

        const instrucciones = funcion.getInstrucciones()

        console.log("instrucciones",instrucciones)


        const retorno = instrucciones.interpretar(contextoFuncion, consola)

        console.log("retorno",retorno)
        
        if (typeof retorno == "string") {
            return null
        } else {

            if (retorno?.tipo == TipoDatos.RETURN) {
                return retorno.valor
            }else{
                return null
            }
        }




    }   
}