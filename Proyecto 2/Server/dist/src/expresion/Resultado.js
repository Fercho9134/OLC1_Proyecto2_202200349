"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperadorLogico = exports.OperadorRelacional = exports.OperadorAritmetico = exports.TipoDatos = void 0;
var TipoDatos;
(function (TipoDatos) {
    TipoDatos["ENTERO"] = "Int";
    TipoDatos["DOBLE"] = "Double";
    TipoDatos["BOOLEANO"] = "Bool";
    TipoDatos["CADENA"] = "String";
    TipoDatos["CARACTER"] = "Char";
    TipoDatos["ERROR"] = "Error";
    TipoDatos["VOID"] = "Void";
    TipoDatos["RETURN"] = "Return";
    TipoDatos["ARREGLO"] = "Arreglo";
})(TipoDatos || (exports.TipoDatos = TipoDatos = {}));
var OperadorAritmetico;
(function (OperadorAritmetico) {
    OperadorAritmetico[OperadorAritmetico["SUMA"] = 0] = "SUMA";
    OperadorAritmetico[OperadorAritmetico["RESTA"] = 1] = "RESTA";
    OperadorAritmetico[OperadorAritmetico["MULTIPLICACION"] = 2] = "MULTIPLICACION";
    OperadorAritmetico[OperadorAritmetico["DIVISION"] = 3] = "DIVISION";
    OperadorAritmetico[OperadorAritmetico["MODULO"] = 4] = "MODULO";
    OperadorAritmetico[OperadorAritmetico["POTENCIA"] = 5] = "POTENCIA";
    OperadorAritmetico[OperadorAritmetico["NEGATIVO"] = 6] = "NEGATIVO";
})(OperadorAritmetico || (exports.OperadorAritmetico = OperadorAritmetico = {}));
var OperadorRelacional;
(function (OperadorRelacional) {
    OperadorRelacional[OperadorRelacional["IGUAL"] = 0] = "IGUAL";
    OperadorRelacional[OperadorRelacional["DIFERENTE"] = 1] = "DIFERENTE";
    OperadorRelacional[OperadorRelacional["MAYOR"] = 2] = "MAYOR";
    OperadorRelacional[OperadorRelacional["MENOR"] = 3] = "MENOR";
    OperadorRelacional[OperadorRelacional["MAYORIGUAL"] = 4] = "MAYORIGUAL";
    OperadorRelacional[OperadorRelacional["MENORIGUAL"] = 5] = "MENORIGUAL";
})(OperadorRelacional || (exports.OperadorRelacional = OperadorRelacional = {}));
var OperadorLogico;
(function (OperadorLogico) {
    OperadorLogico[OperadorLogico["AND"] = 0] = "AND";
    OperadorLogico[OperadorLogico["OR"] = 1] = "OR";
    OperadorLogico[OperadorLogico["NOT"] = 2] = "NOT";
})(OperadorLogico || (exports.OperadorLogico = OperadorLogico = {}));
