import { TipoSimbolo } from "../contexto/Simbolo";
import { Contexto } from "../contexto/TablaSimbolo";
import { Resultado, TipoDatos } from "../expresion/Resultado";
import { Instruccion } from "./Instruccion";

export class Decremento extends Instruccion {
    id: string
    constructor(id: string, linea: number, columna: number) {
        super(linea, columna)
        this.id = id
    }
    public interpretar(contexto: Contexto, consola: string[]): null {
        const simbolo = contexto.obtenerVariable(this.id)
        if (simbolo) {
            if (simbolo.tipoSimbolo == TipoSimbolo.VARIABLE) {
                const resultado = simbolo.obtenerValor() as Resultado
                if (resultado.tipo == TipoDatos.ENTERO || resultado.tipo == TipoDatos.DOBLE) {
                    simbolo.actualizarValor({ valor: resultado.valor - 1, tipo: resultado.tipo })
                    contexto.actualizarSimbolo(this.id, simbolo)
                    return null
                }
            }

        }
        throw new Error("La variable no existe")
    }
}