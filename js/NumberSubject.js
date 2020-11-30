"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberSubject = void 0;
var NumberSubject = /** @class */ (function () {
    function NumberSubject() {
        this.observers = new Array();
        this.state = 0;
    }
    NumberSubject.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var o = _a[_i];
            o.update();
        }
    };
    NumberSubject.prototype.getState = function () {
        return this.state;
    };
    NumberSubject.prototype.setState = function (state) {
        this.state = state;
        this.notifyObservers();
    };
    NumberSubject.prototype.attach = function (observer) {
        if (this.observers.indexOf(observer) > -1) {
            console.log("You cannot add the same observer more than once");
        }
        else {
            this.observers.push(observer);
        }
    };
    NumberSubject.prototype.remove = function (observer) {
        var elementToRemoveIndex = this.observers.indexOf(observer);
        this.observers.splice(elementToRemoveIndex, 1);
        console.log("Observer succesfully removed");
    };
    return NumberSubject;
}());
exports.NumberSubject = NumberSubject;
