import { Subject } from "./Subject";
import { Observer } from "./Observer";

export class NumberSubject implements Subject {
  observers: Array<Observer> = new Array();

  state: Number = 0;

  notifyObservers() {
    for (const o of this.observers) {
      o.update();
    }
  }

  getState() {
    return this.state;
  }

  setState(state: Number) {
    this.state = state;
    this.notifyObservers();
  }

  attach(observer: Observer) {
    if (this.observers.indexOf(observer) > -1) {
      console.log("You cannot add the same observer more than once");
    } else {
      this.observers.push(observer);
    }
  }

  remove(observer: Observer): void {
    const elementToRemoveIndex = this.observers.indexOf(observer);
    this.observers.splice(elementToRemoveIndex, 1);
    console.log("Observer succesfully removed");
  }
}
