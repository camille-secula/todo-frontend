import { Component, OnInit } from '@angular/core';
import { TodoDataService } from 'src/app/services/TodoData/todo-data.service';
import { Todo } from 'src/app/classes/Todo/todo';

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoDataService]
})
export class TodoComponent {

  newTodo: Todo = new Todo();
  numberOfTodoNotYetCompleted: number = 0;

  constructor(private todoDataService: TodoDataService) { 
  }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
    this.onTodoCountChanged();
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
    this.onTodoCountChanged();
  }

  deleteTodoById(todo) {
    this.todoDataService.deleteTodoById(todo.id);
    this.onTodoCountChanged();
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

  getSumAllTodosNotCompleted() {
    this.numberOfTodoNotYetCompleted = this.todoDataService.getSumAllTodosNotCompleted();
  }

  onTodoCountChanged() {
    console.log("ok");
    this.getSumAllTodosNotCompleted();
  }



}
