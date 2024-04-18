/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var analizador = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,19],$V1=[1,14],$V2=[1,11],$V3=[1,12],$V4=[1,18],$V5=[1,20],$V6=[1,21],$V7=[1,22],$V8=[1,15],$V9=[1,16],$Va=[1,17],$Vb=[5,21,33,45,46,49,52,53,54,55,57,58,59],$Vc=[1,37],$Vd=[1,38],$Ve=[1,39],$Vf=[1,40],$Vg=[1,41],$Vh=[1,42],$Vi=[1,43],$Vj=[1,44],$Vk=[1,45],$Vl=[1,46],$Vm=[1,49],$Vn=[1,50],$Vo=[8,47],$Vp=[1,57],$Vq=[1,56],$Vr=[1,58],$Vs=[1,59],$Vt=[1,60],$Vu=[1,61],$Vv=[1,62],$Vw=[1,63],$Vx=[1,64],$Vy=[1,65],$Vz=[1,66],$VA=[1,67],$VB=[8,16,17,18,19,29,30,34,35,36,37,38,39,40,41,47],$VC=[1,91],$VD=[8,16,17,29,30,34,35,36,37,38,39,40,41,47],$VE=[8,29,30,34,35,36,37,38,39,40,41,47],$VF=[5,21,33,45,46,49,50,52,53,54,55,57,58,59];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"ini":3,"instrucciones":4,"EOF":5,"instruccion":6,"cout":7,"PYC":8,"if_g":9,"declaracion":10,"asignacion":11,"ciclo_while":12,"instruccion_break":13,"instruccion_continue":14,"expresion":15,"RES":16,"MAS":17,"MUL":18,"DIV":19,"ENTERO":20,"DOUBLE":21,"CADENA":22,"CARACTER":23,"TRUE":24,"FALSE":25,"ENDL":26,"POW":27,"PARIZQ":28,"COMA":29,"PARDER":30,"relacionales":31,"logico":32,"ID":33,"IGUAL":34,"DISTINTO":35,"MENOR":36,"MENORIGUAL":37,"MAYOR":38,"MAYORIGUAL":39,"AND":40,"OR":41,"NOT":42,"bloque":43,"LLAVEIZQ":44,"LLAVEDER":45,"COUT":46,"OUTPUT":47,"lista_expresiones":48,"IF":49,"ELSE":50,"tipos_datos":51,"INT":52,"BOOL":53,"CHAR":54,"CADENA_ID":55,"ASIGNACION":56,"WHILE":57,"BREAK":58,"CONTINUE":59,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"PYC",16:"RES",17:"MAS",18:"MUL",19:"DIV",20:"ENTERO",21:"DOUBLE",22:"CADENA",23:"CARACTER",24:"TRUE",25:"FALSE",26:"ENDL",27:"POW",28:"PARIZQ",29:"COMA",30:"PARDER",33:"ID",34:"IGUAL",35:"DISTINTO",36:"MENOR",37:"MENORIGUAL",38:"MAYOR",39:"MAYORIGUAL",40:"AND",41:"OR",42:"NOT",44:"LLAVEIZQ",45:"LLAVEDER",46:"COUT",47:"OUTPUT",49:"IF",50:"ELSE",52:"INT",53:"BOOL",54:"CHAR",55:"CADENA_ID",56:"ASIGNACION",57:"WHILE",58:"BREAK",59:"CONTINUE"},
productions_: [0,[3,2],[4,2],[4,1],[6,2],[6,1],[6,2],[6,2],[6,1],[6,2],[6,2],[15,2],[15,3],[15,3],[15,3],[15,3],[15,1],[15,1],[15,1],[15,1],[15,1],[15,1],[15,1],[15,6],[15,3],[15,1],[15,1],[15,1],[31,3],[31,3],[31,3],[31,3],[31,3],[31,3],[32,3],[32,3],[32,2],[43,3],[43,2],[7,3],[48,3],[48,1],[9,5],[9,7],[9,7],[51,1],[51,1],[51,1],[51,1],[51,1],[10,4],[11,3],[12,5],[13,1],[14,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 return new AST($$[$0-1]);
break;
case 2:
  $$[$0-1].push($$[$0]); this.$ = $$[$0-1];
break;
case 3:
 this.$ =  [$$[$0]];
break;
case 4: case 6: case 7: case 9: case 10:
 this.$ = $$[$0-1];
break;
case 5: case 8:
 this.$ = $$[$0];
break;
case 11:
 this.$ = new Aritmetica(new Primitivo(0, TipoDatos.ENTERO, this._$.first_line, this._$.first_column), $$[$0], OperadorAritmetico.RESTA, lexer.yylineno, lexer.yyleng); 
break;
case 12:
 this.$ = new Aritmetica($$[$0-2], $$[$0], OperadorAritmetico.SUMA, this._$.first_line, this._$.first_column);
break;
case 13:
 this.$ = new Aritmetica($$[$0-2], $$[$0], OperadorAritmetico.RESTA, this._$.first_line, this._$.first_column); 
break;
case 14:
 this.$ = new Aritmetica($$[$0-2], $$[$0], OperadorAritmetico.MULTIPLICACION, this._$.first_line, this._$.first_column);
break;
case 15:
 this.$ =  new Aritmetica($$[$0-2], $$[$0], OperadorAritmetico.DIVISION, this._$.first_line, this._$.first_column); 
break;
case 16:
 this.$ = new Primitivo($$[$0], TipoDatos.ENTERO, this._$.first_line, this._$.first_column); 
break;
case 17:
 this.$ =  new Primitivo($$[$0], TipoDatos.DOBLE, this._$.first_line, this._$.first_column); 
break;
case 18:
 this.$ = new Primitivo($$[$0], TipoDatos.CADENA, this._$.first_line, this._$.first_column); 
break;
case 19:
 this.$ = new Primitivo($$[$0], TipoDatos.CARACTER, this._$.first_line, this._$.first_column); 
break;
case 20: case 21:
 this.$ = new Primitivo($$[$0], TipoDatos.BOOLEANO, this._$.first_line, this._$.first_column); 
break;
case 22:
 this.$ = new Primitivo("\n", TipoDatos.CADENA, this._$.first_line, this._$.first_column); 
break;
case 23:
 this.$ = new Aritmetica($$[$0-3], $$[$0-1], OperadorAritmetico.POTENCIA, this._$.first_line, this._$.first_column); 
break;
case 24:
 this.$ = $$[$0-1]; 
break;
case 25: case 26:
 this.$ = $$[$0]; 
break;
case 27:
 this.$ = new Acceso($$[$0], this._$.first_line, this._$.first_column); 
break;
case 28:
 this.$ = new Relacional($$[$0-2], $$[$0], OperadorRelacional.IGUAL, this._$.first_line, this._$.first_column); 
break;
case 29:
 this.$ = new Relacional($$[$0-2], $$[$0], OperadorRelacional.DIFERENTE, this._$.first_line, this._$.first_column); 
break;
case 30:
 this.$ = new Relacional($$[$0-2], $$[$0], OperadorRelacional.MENOR, this._$.first_line, this._$.first_column); 
break;
case 31:
 this.$ = new Relacional($$[$0-2], $$[$0], OperadorRelacional.MENORIGUAL, this._$.first_line, this._$.first_column); 
break;
case 32:
 this.$ = new Relacional($$[$0-2], $$[$0], OperadorRelacional.MAYOR, this._$.first_line, this._$.first_column); 
break;
case 33:
 this.$ = new Relacional($$[$0-2], $$[$0], OperadorRelacional.MAYORIGUAL, this._$.first_line, this._$.first_column); 
break;
case 34:
 this.$ = new Logico($$[$0-2], $$[$0], OperadorLogico.AND, this._$.first_line, this._$.first_column); 
break;
case 35:
 this.$ = new Logico($$[$0-2], $$[$0], OperadorLogico.OR, this._$.first_line, this._$.first_column); 
break;
case 36:
 this.$ = new Logico(null, $$[$0], OperadorLogico.NOT, this._$.first_line, this._$.first_column); 
break;
case 37:
 this.$ = new Bloque($$[$0-1], 0, 0); 
break;
case 38:
 this.$ = new Bloque([], 0, 0); 
break;
case 39:
this.$ = new Cout($$[$0], this._$.first_line, this._$.first_column);
break;
case 40:
 this.$.push($$[$0]); this.$ = $$[$0-2];
break;
case 41:
 this.$ = [$$[$0]]; 
break;
case 42:
 this.$ = new Fn_IF($$[$0-2], $$[$0], null, this._$.first_line, this._$.first_column); 
break;
case 43: case 44:
 this.$ = new Fn_IF($$[$0-4], $$[$0-2], $$[$0], this._$.first_line, this._$.first_column); 
break;
case 45:
 this.$ = TipoDatos.ENTERO; 
break;
case 46:
 this.$ = TipoDatos.DOBLE; 
break;
case 47:
 this.$ = TipoDatos.BOOLEANO; 
break;
case 48:
 this.$ = TipoDatos.CARACTER; 
break;
case 49:
 this.$ = TipoDatos.CADENA; 
break;
case 50:
 this.$ = new Declaracion($$[$0-3], $$[$0-2], $$[$0], this._$.first_line, this._$.first_column); 
break;
case 51:
 this.$ = new Asignacion($$[$0-2], $$[$0], this._$.first_line, this._$.first_column); 
break;
case 52:
 this.$ = new CWhile($$[$0-2], $$[$0], this._$.first_line, this._$.first_column); 
break;
case 53:
 this.$ = new Break(this._$.first_line, this._$.first_column); 
break;
case 54:
 this.$ = new Continue(this._$.first_line, this._$.first_column); 
break;
}
},
table: [{3:1,4:2,6:3,7:4,9:5,10:6,11:7,12:8,13:9,14:10,21:$V0,33:$V1,46:$V2,49:$V3,51:13,52:$V4,53:$V5,54:$V6,55:$V7,57:$V8,58:$V9,59:$Va},{1:[3]},{5:[1,23],6:24,7:4,9:5,10:6,11:7,12:8,13:9,14:10,21:$V0,33:$V1,46:$V2,49:$V3,51:13,52:$V4,53:$V5,54:$V6,55:$V7,57:$V8,58:$V9,59:$Va},o($Vb,[2,3]),{8:[1,25]},o($Vb,[2,5]),{8:[1,26]},{8:[1,27]},o($Vb,[2,8]),{8:[1,28]},{8:[1,29]},{47:[1,30]},{28:[1,31]},{33:[1,32]},{56:[1,33]},{28:[1,34]},{8:[2,53]},{8:[2,54]},{33:[2,45]},{33:[2,46]},{33:[2,47]},{33:[2,48]},{33:[2,49]},{1:[2,1]},o($Vb,[2,2]),o($Vb,[2,4]),o($Vb,[2,6]),o($Vb,[2,7]),o($Vb,[2,9]),o($Vb,[2,10]),{15:36,16:$Vc,20:$Vd,21:$Ve,22:$Vf,23:$Vg,24:$Vh,25:$Vi,26:$Vj,27:$Vk,28:$Vl,31:47,32:48,33:$Vm,42:$Vn,48:35},{15:51,16:$Vc,20:$Vd,21:$Ve,22:$Vf,23:$Vg,24:$Vh,25:$Vi,26:$Vj,27:$Vk,28:$Vl,31:47,32:48,33:$Vm,42:$Vn},{56:[1,52]},{15:53,16:$Vc,20:$Vd,21:$Ve,22:$Vf,23:$Vg,24:$Vh,25:$Vi,26:$Vj,27:$Vk,28:$Vl,31:47,32:48,33:$Vm,42:$Vn},{15:54,16:$Vc,20:$Vd,21:$Ve,22:$Vf,23:$Vg,24:$Vh,25:$Vi,26:$Vj,27:$Vk,28:$Vl,31:47,32:48,33:$Vm,42:$Vn},{8:[2,39],47:[1,55]},o($Vo,[2,41],{16:$Vp,17:$Vq,18:$Vr,19:$Vs,34:$Vt,35:$Vu,36:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA}),{15:68,16:$Vc,20:$Vd,21:$Ve,22:$Vf,23:$Vg,24:$Vh,25:$Vi,26:$Vj,27:$Vk,28:$Vl,31:47,32:48,33:$Vm,42:$Vn},o($VB,[2,16]),o($VB,[2,17]),o($VB,[2,18]),o($VB,[2,19]),o($VB,[2,20]),o($VB,[2,21]),o($VB,[2,22]),{28:[1,69]},{15:70,16:$Vc,20:$Vd,21:$Ve,22:$Vf,23:$Vg,24:$Vh,25:$Vi,26:$Vj,27:$Vk,28:$Vl,31:47,32:48,33:$Vm,42:$Vn},o($VB,[2,25]),o($VB,[2,26]),o($VB,[2,27]),{15:71,16:$Vc,20:$Vd,21:$Ve,22:$Vf,23:$Vg,24:$Vh,25:$Vi,26:$Vj,27:$Vk,28:$Vl,31:47,32:48,33:$Vm,42:$Vn},{16:$Vp,17:$Vq,18:$Vr,19:$Vs,30:[1,72],34:$Vt,35:$Vu,36:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA},{15:73,16:$Vc,20:$Vd,21:$Ve,22:$Vf,23:$Vg,24:$Vh,25:$Vi,26:$Vj,27:$Vk,28:$Vl,31:47,32:48,33:$Vm,42:$Vn},{8:[2,51],16:$Vp,17:$Vq,18:$Vr,19:$Vs,34:$Vt,35:$Vu,36:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA},{16:$Vp,17:$Vq,18:$Vr,19:$Vs,30:[1,74],34:$Vt,35:$Vu,36:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA},{15:75,16:$Vc,20:$Vd,21:$Ve,22:$Vf,23:$Vg,24:$Vh,25:$Vi,26:$Vj,27:$Vk,28:$Vl,31:47,32:48,33:$Vm,42:$Vn},{15:76,16:$Vc,20:$Vd,21:$Ve,22:$Vf,23:$Vg,24:$Vh,25:$Vi,26:$Vj,27:$Vk,28:$Vl,31:47,32:48,33:$Vm,42:$Vn},{15:77,16:$Vc,20:$Vd,21:$Ve,22:$Vf,23:$Vg,24:$Vh,25:$Vi,26:$Vj,27:$Vk,28:$Vl,31:47,32:48,33:$Vm,42:$Vn},{15:78,16:$Vc,20:$Vd,21:$Ve,22:$Vf,23:$Vg,24:$Vh,25:$Vi,26:$Vj,27:$Vk,28:$Vl,31:47,32:48,33:$Vm,42:$Vn},{15:79,16:$Vc,20:$Vd,21:$Ve,22:$Vf,23:$Vg,24:$Vh,25:$Vi,26:$Vj,27:$Vk,28:$Vl,31:47,32:48,33:$Vm,42:$Vn},{15:80,16:$Vc,20:$Vd,21:$Ve,22:$Vf,23:$Vg,24:$Vh,25:$Vi,26:$Vj,27:$Vk,28:$Vl,31:47,32:48,33:$Vm,42:$Vn},{15:81,16:$Vc,20:$Vd,21:$Ve,22:$Vf,23:$Vg,24:$Vh,25:$Vi,26:$Vj,27:$Vk,28:$Vl,31:47,32:48,33:$Vm,42:$Vn},{15:82,16:$Vc,20:$Vd,21:$Ve,22:$Vf,23:$Vg,24:$Vh,25:$Vi,26:$Vj,27:$Vk,28:$Vl,31:47,32:48,33:$Vm,42:$Vn},{15:83,16:$Vc,20:$Vd,21:$Ve,22:$Vf,23:$Vg,24:$Vh,25:$Vi,26:$Vj,27:$Vk,28:$Vl,31:47,32:48,33:$Vm,42:$Vn},{15:84,16:$Vc,20:$Vd,21:$Ve,22:$Vf,23:$Vg,24:$Vh,25:$Vi,26:$Vj,27:$Vk,28:$Vl,31:47,32:48,33:$Vm,42:$Vn},{15:85,16:$Vc,20:$Vd,21:$Ve,22:$Vf,23:$Vg,24:$Vh,25:$Vi,26:$Vj,27:$Vk,28:$Vl,31:47,32:48,33:$Vm,42:$Vn},{15:86,16:$Vc,20:$Vd,21:$Ve,22:$Vf,23:$Vg,24:$Vh,25:$Vi,26:$Vj,27:$Vk,28:$Vl,31:47,32:48,33:$Vm,42:$Vn},{15:87,16:$Vc,20:$Vd,21:$Ve,22:$Vf,23:$Vg,24:$Vh,25:$Vi,26:$Vj,27:$Vk,28:$Vl,31:47,32:48,33:$Vm,42:$Vn},o($VB,[2,11]),{15:88,16:$Vc,20:$Vd,21:$Ve,22:$Vf,23:$Vg,24:$Vh,25:$Vi,26:$Vj,27:$Vk,28:$Vl,31:47,32:48,33:$Vm,42:$Vn},{16:$Vp,17:$Vq,18:$Vr,19:$Vs,30:[1,89],34:$Vt,35:$Vu,36:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA},o([8,29,30,47],[2,36],{16:$Vp,17:$Vq,18:$Vr,19:$Vs,34:$Vt,35:$Vu,36:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA}),{43:90,44:$VC},{8:[2,50],16:$Vp,17:$Vq,18:$Vr,19:$Vs,34:$Vt,35:$Vu,36:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA},{43:92,44:$VC},o($Vo,[2,40],{16:$Vp,17:$Vq,18:$Vr,19:$Vs,34:$Vt,35:$Vu,36:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA}),o($VD,[2,12],{18:$Vr,19:$Vs}),o($VD,[2,13],{18:$Vr,19:$Vs}),o($VB,[2,14]),o($VB,[2,15]),o($VE,[2,28],{16:$Vp,17:$Vq,18:$Vr,19:$Vs}),o($VE,[2,29],{16:$Vp,17:$Vq,18:$Vr,19:$Vs}),o($VE,[2,30],{16:$Vp,17:$Vq,18:$Vr,19:$Vs}),o($VE,[2,31],{16:$Vp,17:$Vq,18:$Vr,19:$Vs}),o($VE,[2,32],{16:$Vp,17:$Vq,18:$Vr,19:$Vs}),o($VE,[2,33],{16:$Vp,17:$Vq,18:$Vr,19:$Vs}),o([8,29,30,40,41,47],[2,34],{16:$Vp,17:$Vq,18:$Vr,19:$Vs,34:$Vt,35:$Vu,36:$Vv,37:$Vw,38:$Vx,39:$Vy}),o([8,29,30,41,47],[2,35],{16:$Vp,17:$Vq,18:$Vr,19:$Vs,34:$Vt,35:$Vu,36:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz}),{16:$Vp,17:$Vq,18:$Vr,19:$Vs,29:[1,93],34:$Vt,35:$Vu,36:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA},o($VB,[2,24]),o($Vb,[2,42],{50:[1,94]}),{4:95,6:3,7:4,9:5,10:6,11:7,12:8,13:9,14:10,21:$V0,33:$V1,45:[1,96],46:$V2,49:$V3,51:13,52:$V4,53:$V5,54:$V6,55:$V7,57:$V8,58:$V9,59:$Va},o($Vb,[2,52]),{15:97,16:$Vc,20:$Vd,21:$Ve,22:$Vf,23:$Vg,24:$Vh,25:$Vi,26:$Vj,27:$Vk,28:$Vl,31:47,32:48,33:$Vm,42:$Vn},{9:99,43:98,44:$VC,49:$V3},{6:24,7:4,9:5,10:6,11:7,12:8,13:9,14:10,21:$V0,33:$V1,45:[1,100],46:$V2,49:$V3,51:13,52:$V4,53:$V5,54:$V6,55:$V7,57:$V8,58:$V9,59:$Va},o($VF,[2,38]),{16:$Vp,17:$Vq,18:$Vr,19:$Vs,30:[1,101],34:$Vt,35:$Vu,36:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA},o($Vb,[2,43]),o($Vb,[2,44]),o($VF,[2,37]),o($VB,[2,23])],
defaultActions: {16:[2,53],17:[2,54],18:[2,45],19:[2,46],20:[2,47],21:[2,48],22:[2,49],23:[2,1]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

    // Importar librerías
    const {Aritmetica}= require('./dist/src/expresion/Aritmetica');
    const {Primitivo} = require('./dist/src/expresion/Primitivo');
    const {Relacional} = require('./dist/src/expresion/Relacional');
    const {Resultado, OperadorAritmetico, TipoDatos, OperadorRelacional, OperadorLogico} = require('./dist/src/expresion/Resultado');
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
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0://ignora espacios
break;
case 1:console.log("Comentario")
break;
case 2:console.log("Comentario Multilinea")
break;
case 3:return 52;
break;
case 4:return 21;
break;
case 5:return 53;
break;
case 6:return 54;
break;
case 7:return 55;
break;
case 8:return 'EXEC';
break;
case 9:return 24;
break;
case 10:return 25;
break;
case 11:return 27;
break;
case 12:return 28;
break;
case 13:return 30;
break;
case 14:return 29;
break;
case 15:return 'MOD';
break;
case 16:return 34;
break;
case 17:return 35;
break;
case 18:return 47;
break;
case 19:return 37;
break;
case 20:return 36;
break;
case 21:return 39;
break;
case 22:return 38;
break;
case 23:return 56;
break;
case 24:return 'INTERROGACION';
break;
case 25:return 'DOSPUNTOS';
break;
case 26:return 40;
break;
case 27:return 41;
break;
case 28:return 42;
break;
case 29:return 44;
break;
case 30:return 45;
break;
case 31:return 'CORIZQ';
break;
case 32:return 'CORDER';
break;
case 33:return 'NEW';
break;
case 34:return 49;
break;
case 35:return 50;
break;
case 36:return 'SWITCH';
break;
case 37:return 'CASE';
break;
case 38:return 'DEFAULT';
break;
case 39:return 58;
break;
case 40:return 57;
break;
case 41:return 'FOR';
break;
case 42:return 'DO';
break;
case 43:return 59;
break;
case 44:return 'RETURN';
break;
case 45:return 'VOID';
break;
case 46:return 46;
break;
case 47:return 'TOLOWER';
break;
case 48:return 'TOUPPER';
break;
case 49:return 'ROUND';
break;
case 50:return 'LENGTH';
break;
case 51:return 'TYPEOF';
break;
case 52:return 26;
break;
case 53:return 'TOSTRING';
break;
case 54:return 'C_STR';
break;
case 55:return 'EXECUTE';
break;
case 56:return 17;
break;
case 57:return 16;
break;
case 58:return 18;
break;
case 59:return 19;
break;
case 60:return 8;
break;
case 61: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 23; 
break;
case 62: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 22; 
break;
case 63:return 21;
break;
case 64:return 20;
break;
case 65:return 33;
break;
case 66:return 5;
break;
case 67:    console.log(yy_.yylloc.first_line, yy_.yylloc.first_column,'Lexico',yy_.yytext);    
break;
}
},
rules: [/^(?:\s+)/i,/^(?:\/\/[\s\S]*?\n)/i,/^(?:\/\*[\s\S]*?\*\/)/i,/^(?:int\b)/i,/^(?:double\b)/i,/^(?:bool\b)/i,/^(?:char\b)/i,/^(?:std::string\b)/i,/^(?:EXEC\b)/i,/^(?:true\b)/i,/^(?:false\b)/i,/^(?:pow\b)/i,/^(?:\()/i,/^(?:\))/i,/^(?:,)/i,/^(?:%)/i,/^(?:==)/i,/^(?:!=)/i,/^(?:<<)/i,/^(?:<=)/i,/^(?:<)/i,/^(?:>=)/i,/^(?:>)/i,/^(?:=)/i,/^(?:\?)/i,/^(?::)/i,/^(?:&&)/i,/^(?:\|\|)/i,/^(?:!)/i,/^(?:\{)/i,/^(?:\})/i,/^(?:\[)/i,/^(?:\])/i,/^(?:new\b)/i,/^(?:if\b)/i,/^(?:else\b)/i,/^(?:switch\b)/i,/^(?:case\b)/i,/^(?:default\b)/i,/^(?:break\b)/i,/^(?:while\b)/i,/^(?:for\b)/i,/^(?:do\b)/i,/^(?:continue\b)/i,/^(?:return\b)/i,/^(?:void\b)/i,/^(?:cout\b)/i,/^(?:tolower\b)/i,/^(?:toupper\b)/i,/^(?:round\b)/i,/^(?:length\b)/i,/^(?:typeof\b)/i,/^(?:endl\b)/i,/^(?:tostring\b)/i,/^(?:c_str\b)/i,/^(?:execute\b)/i,/^(?:\+)/i,/^(?:-)/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:;)/i,/^(?:'(?:\\.|[^\'])*')/i,/^(?:"(?:\\.|[^\"])*")/i,/^(?:[0-9]+(\.[0-9]+)\b)/i,/^(?:[0-9]+\b)/i,/^(?:([a-zA-z])[a-zA-Z0-9_]*)/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = analizador;
exports.Parser = analizador.Parser;
exports.parse = function () { return analizador.parse.apply(analizador, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}