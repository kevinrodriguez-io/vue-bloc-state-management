export class TodosState {
  constructor(loading, todos) {
    if (new.target === TodosState) {
      throw new TypeError("Cannot construct Abstract instances directly");
    }
    this.loading = loading;
    this.todos = todos;
  }
}

export class Initial extends TodosState {
  constructor() {
    super(false, []);
  }
}

export class Loading extends TodosState {
  constructor() {
    super(true, []);
  }
}

export class Loaded extends TodosState {
  constructor(todos) {
    super(false, todos);
  }
}
