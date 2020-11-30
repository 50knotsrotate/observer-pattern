"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberLengthObserver = void 0;
var NumberLengthObserver = /** @class */ (function () {
    function NumberLengthObserver(subject) {
        this.subject = subject;
    }
    NumberLengthObserver.prototype.update = function () {
        var subjectState = this.subject.getState();
        var subjectStateLength = subjectState.toString().length;
        console.log(subjectState + " " + "is" + " " + subjectStateLength + " " + "digits long.");
    };
    return NumberLengthObserver;
}());
exports.NumberLengthObserver = NumberLengthObserver;
