import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../shared/services/todo.service';
import { Todo } from '../../shared/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {

  todos ?: Todo[];

  message : string = ""

  edit : string = ""

  constructor(
    public todoService : TodoService
  ) {}

  ngOnInit(): void {
    this.todoService.todos$.subscribe((data) => {
      this.todos = data
    })
  }

  Edition(edit: HTMLInputElement, i: number){
    let todo = new Todo(edit.value)
    todo.id = i
    console.log(todo)
    this.todoService.EditTodo(todo)
  }

}