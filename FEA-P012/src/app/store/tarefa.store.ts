import { patchState, signalStore, withMethods, withState, } from "@ngrx/signals";
import { Tarefa } from "../models/tarefa.model";

export const tarefaStore = signalStore(
    { providedIn: 'root' },
    withState(
        {
            tarefas: [
                { id: '1', descricao: 'Aprender Angular com a residencia TIC18 do CEPEDI'},
                { id: '2', descricao: 'Aprender NgRx com a residencia TIC18 do CEPEDI'},
                { id: '3', descricao: 'Aprender Redux com a residencia TIC18 do CEPEDI'},
            ]
        },
    ),
    withMethods(
        (store) => ({
            adicionarTarefa(tarefa: Tarefa) {
                patchState(store, { tarefas: [...store.tarefas(), tarefa] });
            }
        })
    ),
);