if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kotlin-js-sample'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-js-sample'.");
}
this['kotlin-js-sample'] = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function main(args) {
    var message = 'Hello JavaScript';
    println(message);
  }
  _.main_kand9s$ = main;
  Kotlin.defineModule('kotlin-js-sample', _);
  main([]);
  return _;
}(typeof this['kotlin-js-sample'] === 'undefined' ? {} : this['kotlin-js-sample'], kotlin);
