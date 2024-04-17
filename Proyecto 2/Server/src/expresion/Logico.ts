import { Expresion } from "./Expresion";
import { OperadorLogico, Resultado, TipoDatos } from "./Resultado";

export class Logico extends Expresion{
    public izquierda: Expresion;
    public derecha: Expresion;
    public operador: OperadorLogico;

    constructor(izquierda: Expresion, derecha: Expresion, operador: OperadorLogico, linea: number, columna: number){
        super(linea, columna);
        this.izquierda = izquierda;
        this.derecha = derecha;
        this.operador = operador;
    }

    public interpretar(): Resultado {
        let resultadoIzquierdo = null
        if (this.operador != OperadorLogico.NOT) {
            resultadoIzquierdo = this.izquierda.interpretar()
        }
        const resultadoDerecho = this.derecha.interpretar()

        if (resultadoIzquierdo != null && this.operador == OperadorLogico.AND) {
            if (resultadoIzquierdo.tipo == TipoDatos.BOOLEANO && resultadoDerecho.tipo == TipoDatos.BOOLEANO) {
                return {valor: resultadoIzquierdo.valor && resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }   
        } else if (resultadoIzquierdo != null && this.operador == OperadorLogico.OR) {
            if (resultadoIzquierdo.tipo == TipoDatos.BOOLEANO && resultadoDerecho.tipo == TipoDatos.BOOLEANO) {
                return {valor: resultadoIzquierdo.valor || resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }
        } else if (this.operador == OperadorLogico.NOT) {
            if (resultadoDerecho.tipo == TipoDatos.BOOLEANO) {
                return {valor: !resultadoDerecho.valor, tipo: TipoDatos.BOOLEANO}
            }
        }
        return {valor: null, tipo: TipoDatos.ERROR}
    }
}