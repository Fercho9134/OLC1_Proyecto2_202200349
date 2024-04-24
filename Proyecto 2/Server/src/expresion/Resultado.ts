import { Expresion } from "./Expresion"

export type Resultado = {
    valor: any,
    tipo: TipoDatos
}

export type Resultado_return = {
    valor:Resultado,
    tipo: string
}

export type variables = {
    tipo: TipoDatos,
    id: string,
    valor: Expresion
}

export enum TipoDatos{
    ENTERO = "Int",
    DOBLE = "Double",
    BOOLEANO= "Bool",
    CADENA= "String",
    CARACTER= "Char",
    ERROR= "Error",
    VOID = "Void",
    RETURN = "Return",
    ARREGLO = "Arreglo"
}

export enum OperadorAritmetico{
    SUMA,
    RESTA,
    MULTIPLICACION,
    DIVISION,
    MODULO,
    POTENCIA,
    NEGATIVO,
}

export enum OperadorRelacional{
    IGUAL,
    DIFERENTE,
    MAYOR,
    MENOR,
    MAYORIGUAL,
    MENORIGUAL
}

export enum OperadorLogico{
    AND,
    OR,
    NOT
}