import {createFeatureSelector, createSelector} from "@ngrx/store";
import {TODO_REDUSER_NODE, TodoState} from "./todo.reducer";

export const todoFeaturesSelector = createFeatureSelector<TodoState>(TODO_REDUSER_NODE);

export const todoListSelector = createSelector(
  todoFeaturesSelector,
  state => state.todoList
);
