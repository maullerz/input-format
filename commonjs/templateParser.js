"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _helpers = require("./helpers.js");

function _default(template, placeholder, parse) {
  if (typeof placeholder === 'function') {
    parse = placeholder;
    placeholder = 'x';
  }

  const max_characters = (0, _helpers.count_occurences)(placeholder, template);
  return function (character, value) {
    if (value.length < max_characters) {
      return parse(character, value);
    }
  };
}
//# sourceMappingURL=templateParser.js.map