if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kotlin-js-sample'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-js-sample'.");
}
this['kotlin-js-sample'] = function (_, Kotlin) {
  'use strict';
  var arrayListOf = Kotlin.kotlin.collections.arrayListOf_i5x0yv$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  Man.prototype = Object.create(Person.prototype);
  Man.prototype.constructor = Man;
  A.prototype = Object.create(Person.prototype);
  A.prototype.constructor = A;
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
  Person.prototype.toString = function () {
    return 'name=' + this.name + ', sex=' + this.sex + ', age=' + this.age;
  };
  Person.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Person',
    interfaces: []
  };
  function main(args) {
    var message = 'Hello JavaScript';
    var list = arrayListOf([1, 2, 3, 4, 5]);
    var longnum;
    var man = new Man('hahah');
    println(man.toString());
    var dny = 2;
    println(dny);
    f();
    alert('external test');
  }
  function hello($receiver) {
    println($receiver);
  }
  function isTypeOf(message) {
    console.log(message);
  }
  function hello_0() {
    println('hellow');
  }
  function f() {
    var tmp$;
    var x = 23;
    var y = x;
    println(typeof (tmp$ = y) === 'number' ? tmp$ : Kotlin.throwCCE());
    var Kotlin_0 = 1;
    println(Kotlin_0);
  }
  function A(name, sex, age) {
    if (sex === void 0)
      sex = 0;
    if (age === void 0)
      age = 11;
    Person.call(this, name, sex, age);
  }
  A.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'A',
    interfaces: [Person]
  };
  var package$testa = _.testa || (_.testa = {});
  package$testa.Man = Man;
  package$testa.Person = Person;
  var package$testb = _.testb || (_.testb = {});
  package$testb.main_kand9s$ = main;
  package$testb.hello_s8ev3n$ = hello;
  package$testb.isTypeOf_61zpoe$ = isTypeOf;
  package$testb.hello = hello_0;
  package$testb.f = f;
  package$testa.A = A;
  Kotlin.defineModule('kotlin-js-sample', _);
  main([]);
  return _;
}(typeof this['kotlin-js-sample'] === 'undefined' ? {} : this['kotlin-js-sample'], kotlin);
