import { convertUpdateArguments } from "@angular/compiler/src/compiler_util/expression_converter";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Todo } from "../models/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos$ = new BehaviorSubject<Todo[]>([
    new Todo("Faire la vaisselle"),
    new Todo("Faire le ménage"),
    new Todo("Faire les courses"),
  ]);

  constructor() {
    setTimeout(() => {
      const todos = this.todos$.value
       todos.push(new Todo("Faire du sport"));
    }, 3000);
  }

  CreerTodo(message: HTMLInputElement){
    // let todo = new Todo(message.value)
    // const todos = this.todos$.value
    // todos.push(todo)
    this.todos$.next([new Todo(message.value), ...this.todos$.value])
    message.value = ""
  }

  EditTodo(edit: Todo){
    this.todos$.value[edit.id] = edit
  }

  SupprimerTodo(id: number){
    const todos = this.todos$.value
    todos.splice(id, 1)
  }
} 