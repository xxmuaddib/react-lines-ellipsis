"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function omit(obj, omittedKeys) {
  if (!obj || _typeof(obj) !== 'object') {
    return obj;
  }

  var ret = {};
  Object.keys(obj).forEach(function (key) {
    if (omittedKeys.indexOf(key) > -1) {
      return;
    }

    ret[key] = obj[key];
  });
  return ret;
}

function string_as_unicode_escape(input) {
  function pad_four(input) {
    var l = input.length;
    if (l === 0) return '0000';
    if (l === 1) return '000' + input;
    if (l === 2) return '00' + input;
    if (l === 3) return '0' + input;
    return input;
  }

  var output = "\\u" + pad_four(input.charCodeAt(0).toString(16));
  return output;
}

module.exports = {
  omit: omit,
  string_as_unicode_escape: string_as_unicode_escape
};

