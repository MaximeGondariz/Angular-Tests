export class Todo {
  private static id = 0;
  public id: number;

    constructor(
      public message: string,
    ) {
      this.id = ++Todo.id;
    }
  }