import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-create-form-ui',
  templateUrl: './todo-create-form-ui.component.html',
  styleUrls: ['./todo-create-form-ui.component.scss']
})
export class TodoCreateFormUiComponent implements OnInit {
  nameTask = '';

  @Output()
  create = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onCreate() {
    if (this.nameTask) {
      this.create.emit(this.nameTask);
      this.nameTask = '';
    }
  }
}
