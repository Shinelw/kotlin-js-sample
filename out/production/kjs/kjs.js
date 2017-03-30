if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kjs'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kjs'.");
}
var kjs = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  function Person(name) {
    this.name = name;
  }
  Person.prototype.hello = function () {
    println('Hello ' + this.name + '!');
  };
  Person.prototype.helloWithGreeting = function (greeting) {
    println(greeting + ' ' + this.name + '!');
    console.log(greeting);
  };
  Person.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Person',
    interfaces: []
  };
  function A() {
  }
  A.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'A',
    interfaces: []
  };
  function B() {
  }
  B.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'B',
    interfaces: []
  };
  function C() {
  }
  C.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'C',
    interfaces: []
  };
  var foo = Kotlin.defineInlineFunction('kjs.foo_287e2$', function (foo$T_0, isT) {
    Kotlin.kotlin.io.println_s8jyv4$(Kotlin.getKClass(foo$T_0).simpleName);
  });
  function main(args) {
    var a = new A();
    println(Kotlin.getKClassFromExpression(a).simpleName);
    println(Kotlin.getKClass(B).simpleName);
    println(Kotlin.getKClass(C).simpleName);
    println(get_js(Kotlin.getKClass(B)).name);
    Kotlin.kotlin.io.println_s8jyv4$(Kotlin.getKClass(C).simpleName);
  }
  _.Person = Person;
  _.A = A;
  _.B = B;
  _.C = C;
  _.main_kand9s$ = main;
  Kotlin.defineModule('kjs', _);
  main([]);
  return _;
}(typeof kjs === 'undefined' ? {} : kjs, kotlin);
