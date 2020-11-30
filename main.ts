import { Observer } from "./Observer";
import { Subject } from "./Subject";

import { OddOrEvenObserver } from "./OddOrEvenObserver";
import { NumberLengthObserver } from "./NumberLengthObserver";
import { ContainsThreeObserver } from './ContainsThreeObserver';

import { NumberSubject } from "./NumberSubject";

const numberSubject: Subject = new NumberSubject();

const oddOrEvenObserver: Observer = new OddOrEvenObserver(numberSubject);
const numberLengthObserver: Observer = new NumberLengthObserver(numberSubject);
const containsThreeObserver: Observer = new ContainsThreeObserver(numberSubject);

numberSubject.attach(oddOrEvenObserver);
numberSubject.attach(numberLengthObserver);
numberSubject.attach(containsThreeObserver);

numberSubject.setState(31);
numberSubject.setState(5005);

numberSubject.remove(oddOrEvenObserver);
numberSubject.remove(numberLengthObserver);
numberSubject.remove(containsThreeObserver);

numberSubject.setState(15);
// Nothing should be logged to the console - Each observer should have been removed.

