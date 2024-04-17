
export type Resultado = {
    valor: any,
    tipo: TipoDatos
}

export enum TipoDatos{
    ENTERO = "ENTERO",
    DOBLE = "DOBLE",
    BOOLEANO= "BOOLEANO",
    CADENA= "CADENA",
    CARACTER= "CARACTER",
    ERROR= "ERROR"
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