import { Observer } from "./Observer";
import { Subject } from "./Subject";

export class ContainsThreeObserver implements Observer {
  subject: Subject;

  constructor(subject: Subject) {
    this.subject = subject;
  }

  update(): void {
    const subjectState: Number = this.subject.getState();
    const subjectStateAsStringArray: Array<String> = subjectState
      .toString()
      .split("");

      const containsThree: Boolean = subjectStateAsStringArray.includes('3');

    if (containsThree) {
      console.log(subjectState + " does indeed contain the number 3.");
    } else {
      console.log(subjectState + " does not contain the number 3.");
    }
  }
}
