import { BehaviorSubject } from 'rxjs';
import { Load } from "./event";
import { Initial, Loading, Loaded } from "./state";

export class Bloc {
  constructor() {
    this.observable = new BehaviorSubject(new Initial());
  }

  async dispatch(event) {
    if (event instanceof Load) {
      this.observable.next(new Loading());
      const result = await fetch('https://jsonplaceholder.typicode.com/todos');
      const todos =  await result.json();
      this.observable.next(new Loaded(todos));
    }
  }

}
