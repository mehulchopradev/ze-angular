import { Component, OnInit } from '@angular/core';
import Todo from './todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  newTodo: string;
  todosCount: number

  constructor() {
    this.todos = [];
    this.todosCount = 0;
  }

  ngOnInit() {
  }

  onSave() {
    const newTodo = this.newTodo;
    this.todos.push(new Todo(newTodo));
    this.newTodo = '';
    this.todosCount++;
  }

  onClearCompletedTodos() {
    this.todos = this.todos.filter((todo: Todo) => !todo.done);
    this.todosCount = this.todos.length;
  }

  isClearDisabled() {
    const doneTodos = this.todos.filter((todo: Todo) => todo.done);
    return doneTodos.length == 0;
  }
}
