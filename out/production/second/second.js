if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'second'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'second'.");
}
var second = function (_, Kotlin) {
  'use strict';
  function Tests() {
  }
  Tests.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Tests',
    interfaces: []
  };
  _.Tests = Tests;
  Kotlin.defineModule('second', _);
  return _;
}(typeof second === 'undefined' ? {} : second, kotlin);
