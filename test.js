'use strict';
var assert = require('assert');
var isDeprecated = require('./index');
var util = require('util');

var greet = {
  yo: function(){
    console.log("yo yo!");
  },
  hello: util.deprecate(function() {
    return yo();
  }, '`hello` is depreciated, please use `yo` instead.')
};

var hello = util.deprecate(function() {
    return yo();
  }, '`hello` is depreciated, please use `yo` instead.');

function check(obj, attr) {
  return isDeprecated(obj, attr);
}

it("should report if the method is deprecated or not.", function() {
  assert(check(greet.hello));
  assert(check(hello));
  assert(!check(greet.yo));
});