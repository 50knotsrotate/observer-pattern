import { Observer } from "./Observer";
import { Subject } from "./Subject";

export class NumberLengthObserver implements Observer {
  subject: Subject;

  constructor(subject: Subject) {
    this.subject = subject;
  }

  update(): void {
    const subjectState = this.subject.getState();
    const subjectStateLength = subjectState.toString().length;
    console.log(
      subjectState + " " +  "is" + " " + subjectStateLength + " " + "digits long."
    );
  }
}
