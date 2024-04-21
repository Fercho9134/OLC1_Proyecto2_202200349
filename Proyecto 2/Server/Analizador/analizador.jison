%{
    // Importar librerías
    const {Aritmetica}= require('./dist/src/expresion/Aritmetica');
    const {Primitivo} = require('./dist/src/expresion/Primitivo');
    const {Relacional} = require('./dist/src/expresion/Relacional');
    const {Resultado, OperadorAritmetico, TipoDatos, OperadorRelacional, OperadorLogico, variables} = require('./dist/src/expresion/Resultado');
    const {AST} = require('./dist/src/AST');
    const {Cout} = require('./dist/src/instruccion/Cout');
    const {Logico} = require('./dist/src/expresion/Logico');
    const {Bloque} = require('./dist/src/instruccion/Bloque');
    const {Fn_IF} = require('./dist/src/instruccion/control/Fn_IF');
    const {Acceso} = require('./dist/src/expresion/Acceso');
    const {Asignacion} = require('./dist/src/instruccion/Asignacion');
    const {Declaracion} = require('./dist/src/instruccion/definiciones/Declaracion');
    const {Break} = require('./dist/src/instruccion/control/Break');
    const {CWhile} = require('./dist/src/instruccion/ciclos/While');
    const {Continue} = require('./dist/src/instruccion/control/Continue');
    const {DoWhile} = require('./dist/src/instruccion/ciclos/DoWhile');
    const {Ternario} = require('./dist/src/expresion/Ternario');
    const {Incremento} = require('./dist/src/instruccion/Incremento');
    const {Decremento} = require('./dist/src/instruccion/Decremento');
    const {CFor} = require('./dist/src/instruccion/ciclos/For');
    const {Llamada} = require('./dist/src/instruccion/Llamada');
    const {Funcion} = require('./dist/src/instruccion/definiciones/Funcion');
        const {Return} = require('./dist/src/instruccion/control/Return');
        const {Execute} = require('./dist/src/instruccion/Execute');
        const {Switch} = require('./dist/src/instruccion/control/Switch');
        const {Casteo} = require('./dist/src/expresion/Casteo');
%}

%lex // Inicia parte léxica

%options case-insensitive

%%

\s+                                 //ignora espacios
\/\/[\s\S]*?\n    {console.log("Comentario")};                        //ignora comentarios de línea                                //ignora saltos de línea
\/\*[\s\S]*?\*\/ {console.log("Comentario Multilinea")};                   //ignora comentarios de bloque                 

// Comentarios son con //
"int"                  return 'INT';
"double"               return 'DOUBLE_ID';
"bool"                return 'BOOL';
"char"               return 'CHAR';
"std::string"         return 'CADENA_ID';
"EXEC"                  return 'EXEC';
"true"                 return 'TRUE';
"false"                return 'FALSE';
"pow"              return 'POW';
"("                    return 'PARIZQ';
")"                    return 'PARDER';
","                    return 'COMA';
"%"                    return 'MOD';
"=="                    return 'IGUAL';
"!="                    return 'DISTINTO';
"<<"    return 'OUTPUT';
"<="                    return 'MENORIGUAL';
"<"                     return 'MENOR';
">="                    return 'MAYORIGUAL';
">"                     return 'MAYOR';
"="                     return 'ASIGNACION';
"?"                  return 'INTERROGACION';
":"                   return 'DOSPUNTOS';

"&&"                    return 'AND';
"||"                    return 'OR';
"!"                     return 'NOT';

"{"                   return 'LLAVEIZQ';
"}"                   return 'LLAVEDER';
"["                  return 'CORIZQ';
"]"                  return 'CORDER';
"new"               return 'NEW';
"if"                    return 'IF';
"else"                return 'ELSE';
"switch"           return 'SWITCH';
"case"               return 'CASE';
"default"           return 'DEFAULT';
"break"              return 'BREAK';
"while"              return 'WHILE';
"for"               return 'FOR';
"do"                return 'DO';
"continue"       return 'CONTINUE';
"return"           return 'RETURN';
"void"              return 'VOID';
"cout"             return 'COUT';
"tolower"          return 'TOLOWER';
"toupper"          return 'TOUPPER';
"round"            return 'ROUND';
"length"           return 'LENGTH';
"typeof"           return 'TYPEOF';
"endl"              return 'ENDL';
"tostring"        return 'TOSTRING';
"c_str"             return 'C_STR';
"execute"         return 'EXECUTE';

"+"                     return 'MAS';
"-"                     return 'RES';
"*"                     return 'MUL';
"/"                     return 'DIV';
";"                     return 'PYC';


\'(?:\\.|[^\'])*\'				{ yytext = yytext.substr(1,yyleng-2); return 'CARACTER'; }
\"(?:\\.|[^\"])*\"				{ yytext = yytext.substr(1,yyleng-2); return 'CADENA'; }
[0-9]+("."[0-9]+)\b      return 'DOUBLE';
[0-9]+\b                return 'ENTERO';
([a-zA-z])[a-zA-Z0-9_]* return 'ID';


<<EOF>>                 return 'EOF';

.					   {    console.log(yylloc.first_line, yylloc.first_column,'Lexico',yytext);    }

// Finaliza parte de Léxica
/lex

// precedencia
%left 'PARIZQ'
%left 'INTERROGACION'
%right 'NOT'
%left 'OR'
%left 'AND'
%left 'IGUAL','DISTINTO','MENOR','MENORIGUAL','MAYOR','MAYORIGUAL'
%left 'MAS', 'RES'
%left 'MUL','DIV', 'MOD'
%right 'UMINUS'

// Inicio de gramática
%start ini

// Parte sintáctica  - Definición de la gramática
%%

ini : instrucciones EOF { return new AST($1);}
;
instrucciones: instrucciones instruccion    {  $1.push($2); $$ = $1;}
            | instruccion                   { $$ =  [$1];}
;
instruccion: cout PYC                    { $$ = $1;}
            | if_g                        { $$ = $1;} 
            |declaracion PYC               { $$ = $1;}
            | asignacion PYC                { $$ = $1;}
            |ciclo_while                { $$ = $1;} 
            |instruccion_break PYC         { $$ = $1;}
            |instruccion_continue PYC      { $$ = $1;}
            |ciclo_do_while            { $$ = $1;}
             |incremento PYC { $$ = $1;}
             |for_g { $$ = $1;}
        |declaracion_metodo { $$ = $1;}
        |acceso_metodo PYC { $$ = $1;}
        |instruccion_return PYC { $$ = $1;}
        |execute PYC { $$ = $1;}
        |switch_g { $$ = $1;}


;
// Para sitetisar un dato, se utiliza $$
expresion: RES expresion %prec UMINUS  { $$ = new Aritmetica(new Primitivo(0, TipoDatos.ENTERO, false, this._$.first_line, this._$.first_column), $2, OperadorAritmetico.RESTA, lexer.yylineno, lexer.yyleng); } 
        | expresion MAS expresion      { $$ = new Aritmetica($1, $3, OperadorAritmetico.SUMA, this._$.first_line, this._$.first_column);}
        | expresion RES expresion       { $$ = new Aritmetica($1, $3, OperadorAritmetico.RESTA, this._$.first_line, this._$.first_column); }
        | expresion MUL expresion       { $$ = new Aritmetica($1, $3, OperadorAritmetico.MULTIPLICACION, this._$.first_line, this._$.first_column);}
        | expresion DIV expresion       { $$ =  new Aritmetica($1, $3, OperadorAritmetico.DIVISION, this._$.first_line, this._$.first_column); } 
        | expresion MOD expresion       { $$ = new Aritmetica($1, $3, OperadorAritmetico.MODULO, this._$.first_line, this._$.first_column); }
        | ENTERO                        { $$ = new Primitivo($1, TipoDatos.ENTERO, false, this._$.first_line, this._$.first_column); }
        | DOUBLE                        { $$ =  new Primitivo($1, TipoDatos.DOBLE, false, this._$.first_line, this._$.first_column); }
        | CADENA                        { $$ = new Primitivo($1, TipoDatos.CADENA, false, this._$.first_line, this._$.first_column); }
        | CARACTER                      { $$ = new Primitivo($1, TipoDatos.CARACTER, false, this._$.first_line, this._$.first_column); }
        | TRUE                          { $$ = new Primitivo($1, TipoDatos.BOOLEANO, false, this._$.first_line, this._$.first_column); }
        | FALSE                         { $$ = new Primitivo($1, TipoDatos.BOOLEANO, false, this._$.first_line, this._$.first_column); }
        | ENDL                          { $$ = new Primitivo("\n", TipoDatos.CADENA, false, this._$.first_line, this._$.first_column); }
        | POW PARIZQ expresion COMA expresion PARDER { $$ = new Aritmetica($3, $5, OperadorAritmetico.POTENCIA, this._$.first_line, this._$.first_column); }
        | PARIZQ expresion PARDER       { $$ = $2; }
        | relacionales                  { $$ = $1; }
        | logico                        { $$ = $1; }
        | ID                            { $$ = new Acceso($1, this._$.first_line, this._$.first_column); }
        | expresion INTERROGACION expresion DOSPUNTOS expresion { $$ = new Ternario($1, $3, $5, this._$.first_line, this._$.first_column); }
        | acceso_metodo { $$ = $1; }
        | PARIZQ tipos_datos PARDER expresion { $$ = new Casteo($4, $2, true, this._$.first_line, this._$.first_column); }
        ;   

relacionales: expresion IGUAL expresion { $$ = new Relacional($1, $3, OperadorRelacional.IGUAL, this._$.first_line, this._$.first_column); }
            | expresion DISTINTO expresion { $$ = new Relacional($1, $3, OperadorRelacional.DIFERENTE, this._$.first_line, this._$.first_column); }
            | expresion MENOR expresion { $$ = new Relacional($1, $3, OperadorRelacional.MENOR, this._$.first_line, this._$.first_column); }
            | expresion MENORIGUAL expresion { $$ = new Relacional($1, $3, OperadorRelacional.MENORIGUAL, this._$.first_line, this._$.first_column); }
            | expresion MAYOR expresion { $$ = new Relacional($1, $3, OperadorRelacional.MAYOR, this._$.first_line, this._$.first_column); }
            | expresion MAYORIGUAL expresion { $$ = new Relacional($1, $3, OperadorRelacional.MAYORIGUAL, this._$.first_line, this._$.first_column); }
            ;

logico: expresion AND expresion { $$ = new Logico($1, $3, OperadorLogico.AND, this._$.first_line, this._$.first_column); }
        | expresion OR expresion { $$ = new Logico($1, $3, OperadorLogico.OR, this._$.first_line, this._$.first_column); }
        | NOT expresion { $$ = new Logico(null, $2, OperadorLogico.NOT, this._$.first_line, this._$.first_column); }
        ;

bloque: LLAVEIZQ instrucciones LLAVEDER { $$ = new Bloque($2, 0, 0); }
        | LLAVEIZQ LLAVEDER { $$ = new Bloque([], 0, 0); }
        ;

cout: COUT OUTPUT lista_expresiones {$$ = new Cout($3, this._$.first_line, this._$.first_column);};

lista_expresiones: lista_expresiones OUTPUT expresion { $$.push($3); $$ = $1;}
                 | expresion { $$ = [$1]; };


if_g: IF PARIZQ expresion PARDER bloque { $$ = new Fn_IF($3, $5, null, this._$.first_line, this._$.first_column); }
    | IF PARIZQ expresion PARDER bloque ELSE bloque { $$ = new Fn_IF($3, $5, $7, this._$.first_line, this._$.first_column); }
    | IF PARIZQ expresion PARDER bloque ELSE if_g { $$ = new Fn_IF($3, $5, $7, this._$.first_line, this._$.first_column); }
;

incremento: ID MAS MAS { $$ = new Incremento($1, this._$.first_line, this._$.first_column);}
        | ID RES RES { $$ = new Decremento($1, this._$.first_line, this._$.first_column);}
;


tipos_datos: INT { $$ = TipoDatos.ENTERO; }
            | DOUBLE_ID { $$ = TipoDatos.DOBLE; }
            | BOOL { $$ = TipoDatos.BOOLEANO; }
            | CHAR { $$ = TipoDatos.CARACTER; }
            | CADENA_ID { $$ = TipoDatos.CADENA; }
            | VOID { $$ = TipoDatos.VOID; }
            ;

lista_ids: lista_ids COMA ID { $1.push($3); $$ = $1; }
            | ID { $$ = [$1]; }
            ;

declaracion: tipos_datos lista_ids ASIGNACION expresion { $$ = new Declaracion($1, $2, $4, this._$.first_line, this._$.first_column); }
               | tipos_datos lista_ids { $$ = new Declaracion($1, $2, null, this._$.first_line, this._$.first_column); }
                ;



asignacion: ID ASIGNACION expresion { $$ = new Asignacion($1, $3, this._$.first_line, this._$.first_column); }
            ;   

ciclo_while: WHILE PARIZQ expresion PARDER bloque { $$ = new CWhile($3, $5, this._$.first_line, this._$.first_column); }
            ;
instruccion_break: BREAK { $$ = new Break(this._$.first_line, this._$.first_column); }
            ;
instruccion_continue: CONTINUE { $$ = new Continue(this._$.first_line, this._$.first_column); }
            ;

instruccion_return: RETURN expresion { $$ = new Return($2, this._$.first_line, this._$.first_column); }
                | RETURN { $$ = new Return(null, this._$.first_line, this._$.first_column); }
            ;

ciclo_do_while: DO bloque WHILE PARIZQ expresion PARDER { $$ = new DoWhile($2, $5, this._$.first_line, this._$.first_column); }
            ;

for_g: FOR PARIZQ declaracion PYC expresion PYC actalizacion PARDER bloque { $$ = new CFor($3, $5, $7, $9, this._$.first_line, this._$.first_column); }
        ;

actalizacion: incremento
            | asignacion
            ;

declaracion_metodo: tipos_datos ID PARIZQ lista_parametros PARDER bloque { $$ = new Funcion($1, $2, $4, $6, this._$.first_line, this._$.first_column); }
                | tipos_datos ID PARIZQ PARDER bloque { $$ = new Funcion($1, $2, [], $5, this._$.first_line, this._$.first_column); }
                ;

lista_parametros: lista_parametros COMA parametro { $1.push($3); $$ = $1; }
                | parametro { $$ = [$1]; }
                ;

parametro:  tipos_datos ID { $$ = {id: $2, tipo: $1, valor: null}; }
        ;

lista_parametros_acceso: lista_parametros_acceso COMA expresion { $1.push($3); $$ = $1; }
                    | expresion { $$ = [$1]; }
;



acceso_metodo: ID PARIZQ lista_parametros_acceso PARDER { $$ = new Llamada($1, $3, this._$.first_line, this._$.first_column); }
                | ID PARIZQ PARDER { $$ = new Llamada($1, [], this._$.first_line, this._$.first_column); }
            ;

execute: EXECUTE acceso_metodo { $$ = new Execute($2, this._$.first_line, this._$.first_column); }
        ;


switch_g: SWITCH PARIZQ expresion PARDER bloque_case { $$ = new Switch($3, $5, this._$.first_line, this._$.first_column); }
        ;

bloque_case: LLAVEIZQ casos LLAVEDER { $$ = $2; }
            ;

casos: casos caso { $1.push($2); $$ = $1; }
        | caso { $$ = [$1]; }
        ;

caso: CASE expresion DOSPUNTOS instrucciones { $$ = {expresion: $2, instrucciones: new Bloque($4, 0, 0)}; }
        | DEFAULT DOSPUNTOS instrucciones { $$ = {expresion: null, instrucciones: new Bloque($3, 0, 0)}; }
        ;