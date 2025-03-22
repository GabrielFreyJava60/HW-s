import { testframework } from "./testframework.js";
Function.prototype.myBind = function(thisArg, ...argsBind) {
  return (...callArgs) => this.apply(thisArg, [...argsBind, ...callArgs]);
}
class Deferred {
  constructor() {
    this.functions = [];
  }
  then(fun) {
    this.functions.push(fun)
  }
  funCall(fun) {
    this.value = fun(this.value);
  }
  resolve(value) {
    this.value = value;
    this.functions.forEach(this.funCall.myBind(this));
  }
}
const d = new Deferred()
d.then(function(res){ console.log("1 ", res); return "a"; });
d.then(function(res){ console.log("2 ", res); return "b"; });
d.then(function(res){ console.log("3 ", res); return "c"; });
d.resolve('hello');
