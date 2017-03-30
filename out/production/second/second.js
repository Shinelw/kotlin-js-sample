if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'second'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'second'.");
}
var second = function (_, Kotlin) {
  'use strict';
  Man.prototype = Object.create(Person.prototype);
  Man.prototype.constructor = Man;
  function Man(name, sex, age) {
    if (sex === void 0)
      sex = 0;
    if (age === void 0)
      age = 11;
    Person.call(this, name, sex, age);
  }
  Man.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Man',
    interfaces: [Person]
  };
  function Person(name, sex, age) {
    this.name = name;
    this.sex = sex;
    this.age = age;
  }
  Person.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Person',
    interfaces: []
  };
  _.Man = Man;
  _.Person = Person;
  Kotlin.defineModule('second', _);
  return _;
}(typeof second === 'undefined' ? {} : second, kotlin);
