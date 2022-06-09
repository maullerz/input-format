"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parse;

// Parses the `text`.
//
// Returns `{ value, caret }` where `caret` is
// the caret position inside `value`
// corresponding to the `caret_position` inside `text`.
//
// The `text` is parsed by feeding each character sequentially to
// `parse_character(character, value)` function
// and appending the result (if it's not `undefined`) to `value`.
//
// Example:
//
// `text` is `8 (800) 555-35-35`,
// `caret_position` is `4` (before the first `0`).
// `parse_character` is `(character, value) =>
//   if (character >= '0' && character <= '9') { return character }`.
//
// then `parse()` outputs `{ value: '88005553535', caret: 2 }`.
//
function parse(text, caret_position, parse_character) {
  let value = '';
  let focused_input_character_index = 0;
  let index = 0;

  while (index < text.length) {
    const character = parse_character(text[index], value);

    if (character !== undefined) {
      value += character;

      if (caret_position !== undefined) {
        if (caret_position === index) {
          focused_input_character_index = value.length - 1;
        } else if (caret_position > index) {
          focused_input_character_index = value.length;
        }
      }
    }

    index++;
  } // If caret position wasn't specified


  if (caret_position === undefined) {
    // Then set caret position to "after the last input character"
    focused_input_character_index = value.length;
  }

  const result = {
    value,
    caret: focused_input_character_index
  };
  return result;
}
//# sourceMappingURL=parse.js.map