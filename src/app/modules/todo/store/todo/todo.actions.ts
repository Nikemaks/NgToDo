import {Action} from "@ngrx/store";


export enum todoActionsType {
  create = '[TODO] Todo create item'
}

export class TodoCreateAcion implements Action {
  readonly type = todoActionsType.create;

  constructor(public payload: { name: string }) {

  }
}

export type TodoActions = TodoCreateAcion;