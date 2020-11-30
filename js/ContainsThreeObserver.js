"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainsThreeObserver = void 0;
var ContainsThreeObserver = /** @class */ (function () {
    function ContainsThreeObserver(subject) {
        this.subject = subject;
    }
    ContainsThreeObserver.prototype.update = function () {
        var subjectState = this.subject.getState();
        var subjectStateAsStringArray = subjectState
            .toString()
            .split("");
        var containsThree = subjectStateAsStringArray.includes('3');
        if (containsThree) {
            console.log(subjectState + " does indeed contain the number 3.");
        }
        else {
            console.log(subjectState + " does not contain the number 3.");
        }
    };
    return ContainsThreeObserver;
}());
exports.ContainsThreeObserver = ContainsThreeObserver;
