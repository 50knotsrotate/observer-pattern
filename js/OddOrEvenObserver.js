"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OddOrEvenObserver = void 0;
var OddOrEvenObserver = /** @class */ (function () {
    function OddOrEvenObserver(subject) {
        this.subject = subject;
    }
    ;
    OddOrEvenObserver.prototype.update = function () {
        var subjectState = this.subject.getState();
        if (subjectState % 2 === 0) {
            console.log(subjectState + ' is an even number.');
        }
        else {
            console.log(subjectState + " is an odd number.");
        }
    };
    ;
    return OddOrEvenObserver;
}());
exports.OddOrEvenObserver = OddOrEvenObserver;
