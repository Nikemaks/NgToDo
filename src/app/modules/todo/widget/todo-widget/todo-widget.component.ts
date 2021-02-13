import {Component, OnInit} from '@angular/core';
import {TodoState} from "../../store/todo/todo.reducer";
import {select, Store} from "@ngrx/store";
import {TodoCreateAction, TodoDeleteAction, TodoEditAction, TodoToggleAction} from "../../store/todo/todo.actions";
import {todoListSelector} from "../../store/todo/todo.selectors";
import {Todo} from "../../model/todo";
import {Observable} from "rxjs/internal/Observable";

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.scss']
})
export class TodoWidgetComponent implements OnInit {

  todoList = [];
  todoList$: Observable<Todo[]> = this.store$.pipe(select(todoListSelector));

  constructor(private store$: Store<TodoState>) {
  }

  ngOnInit(): void {
  }

  onCreate(name: string) {
    this.store$.dispatch(new TodoCreateAction({name}))
  }

  onDelete(id: number) {
    this.store$.dispatch(new TodoDeleteAction({id}))
  }

  onToggle(id: number) {
    this.store$.dispatch(new TodoToggleAction({id}))
  }

  onEdit({id, name}: {id: number, name: string}) {
    this.store$.dispatch(new TodoEditAction({id, name}))
  }


}
