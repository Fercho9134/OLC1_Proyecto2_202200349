import { TipoDatos } from "../expresion/Resultado";
import { Simbolo, TipoSimbolo } from "./Simbolo";

export class Contexto{
    public tablaSimbolos: Map<String, Simbolo>;
    private padre: Contexto | null;

    constructor(padre: Contexto | null){
        this.tablaSimbolos = new Map<String, Simbolo>;
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

    public actualizarSimbolo(id: string, valor: Simbolo){
        this.tablaSimbolos.set(id, valor);
    }

    
}