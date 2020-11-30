import { Observer } from './Observer';
import { Subject } from './Subject'

export class OddOrEvenObserver implements Observer {
    subject: Subject;

    constructor(subject : Subject) {
        this.subject = subject;
    };
    
    update(): void { 
        const subjectState = this.subject.getState();

        if (subjectState % 2 === 0) {
            console.log(subjectState + ' is an even number.')
        } else { 
            console.log(subjectState + " is an odd number.");
        }
    };

}