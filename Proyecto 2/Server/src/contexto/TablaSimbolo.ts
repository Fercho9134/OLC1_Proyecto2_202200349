import { TipoDatos } from "../expresion/Resultado";
import { Bloque } from "../instruccion/Bloque";
import { Simbolo, TipoSimbolo } from "./Simbolo";
import { Simbolo_Funcion } from "./Simbolo_Funcion";
import { Simbolo_Metodo } from "./Simbolo_Metodo";

export class Contexto{
    public tablaSimbolos: Map<String, Simbolo>;
    public tablasMetodos: Map<String, Simbolo_Metodo>;
    public tablasFunciones: Map<String, Simbolo_Funcion>;
    private padre: Contexto | null;

    constructor(padre: Contexto | null){
        this.tablaSimbolos = new Map<String, Simbolo>;
        this.tablasMetodos = new Map<String, Simbolo_Metodo>;
        this.tablasFunciones = new Map<String, Simbolo_Funcion>;
        this.padre = padre;
    }

    public guardarSimbolo(id: string, valor: Object, tipo: TipoDatos, tipoSimbolo: TipoSimbolo){
        const existe = this.tablaSimbolos.has(id);
        if(!existe){
            this.tablaSimbolos.set(id, new Simbolo(id, valor, tipo, tipoSimbolo));
            return
        }
        throw new Error(`El simbolo ${id} ya existe en este contexto`);
    }

    public guardarMetodo(id: string, variables:Simbolo[], instrucciones: Bloque){
        const existe = this.tablasMetodos.has(id);
        if(!existe){
            this.tablasMetodos.set(id, new Simbolo_Metodo(id, variables, instrucciones));
            return
        }
        throw new Error(`El metodo ${id} ya existe en este contexto`);
    }

    public guardarFuncion(tipo:TipoDatos, id: string, variables:Simbolo[], instrucciones: Bloque){
        const existe = this.tablasFunciones.has(id);
        if(!existe){
            this.tablasFunciones.set(id, new Simbolo_Funcion(tipo,id, variables, instrucciones));
            return
        }
        throw new Error(`La funcion ${id} ya existe en este contexto`);
    }

    public obtenerVariable(id: string): Simbolo | undefined{
        let contexto_actual = this as Contexto | null
        while(contexto_actual != null){
            const existe = contexto_actual.tablaSimbolos.has(id);
            if(existe){
                return contexto_actual.tablaSimbolos.get(id);
            }
            contexto_actual = contexto_actual.padre;
        }
        return undefined;
    }

    public obtenerMetodo(id: string): Simbolo_Metodo | undefined{
        let contexto_actual = this as Contexto | null
        while(contexto_actual != null){
            const existe = contexto_actual.tablasMetodos.has(id);
            if(existe){
                return contexto_actual.tablasMetodos.get(id);
            }
            contexto_actual = contexto_actual.padre;
        }
        return undefined;
    }

    public obtenerFuncion(id: string): Simbolo_Funcion | undefined{
        let contexto_actual = this as Contexto | null
        while(contexto_actual != null){
            const existe = contexto_actual.tablasFunciones.has(id);
            if(existe){
                return contexto_actual.tablasFunciones.get(id);
            }
            contexto_actual = contexto_actual.padre;
        }
        return undefined;
    }

    public actualizarSimbolo(id: string, valor: Simbolo){
        this.tablaSimbolos.set(id, valor);
    }

    
}