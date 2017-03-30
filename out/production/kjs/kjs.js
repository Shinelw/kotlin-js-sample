if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kjs'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kjs'.");
}
var kjs = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function Person(name) {
    this.name = name;
  }
  Person.prototype.hello = function () {
    println('Hello ' + this.name + '!');
  };
  Person.prototype.helloWithGreeting = function (greeting) {
    println(greeting + ' ' + this.name + '!');
  };
  Person.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Person',
    interfaces: []
  };
  _.Person = Person;
  Kotlin.defineModule('kjs', _);
  return _;
}(typeof kjs === 'undefined' ? {} : kjs, kotlin);
