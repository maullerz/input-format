"use strict";

var _inputControl = require("./inputControl.js");

var _dom = require("./dom.js");

var _templateParser = _interopRequireDefault(require("./templateParser.js"));

var _templateFormatter = _interopRequireDefault(require("./templateFormatter.js"));

var _parseDigit = _interopRequireDefault(require("./parseDigit.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// US phone number template
const TEMPLATE = '(xxx) xxx-xxxx';
const parse = (0, _templateParser.default)(TEMPLATE, _parseDigit.default);
const format = (0, _templateFormatter.default)(TEMPLATE);
describe('inputControl', function () {
  it('should handle onChange', function () {
    const input = {
      value: '1234567-',
      selectionStart: 5,
      selectionEnd: 6,

      setSelectionRange(position) {
        this.selectionStart = position;
      },

      hasAttribute(attribute) {
        return false;
      }

    };
    let value;

    const on_change = _ => value = _;

    (0, _inputControl.onChange)({}, input, parse, format, on_change);
    expect(input.value).to.equal('(123) 456-7');
    expect(input.selectionStart).to.equal(8);
    expect(value).to.equal('1234567');
  });
  it('should handle onCut', function (done) {
    const input = {
      value: '1234567-',
      selectionStart: 5,
      selectionEnd: 6,

      setSelectionRange(position) {
        this.selectionStart = position;
      },

      hasAttribute(attribute) {
        return false;
      }

    };
    let value;

    const on_change = _ => value = _;

    (0, _inputControl.onCut)({}, input, parse, format, on_change);
    setTimeout(() => {
      expect(input.value).to.equal('(123) 456-7');
      expect(input.selectionStart).to.equal(8);
      expect(value).to.equal('1234567');
      done();
    }, 0);
  });
  it('should handle onPaste', function () {
    const input = {
      value: '1234567-',
      selectionStart: 5,
      selectionEnd: 5,

      setSelectionRange(position) {
        this.selectionStart = position;
      },

      hasAttribute(attribute) {
        return false;
      }

    };
    let value;

    const on_change = _ => value = _;

    (0, _inputControl.onPaste)({}, input, parse, format, on_change);
    expect(input.value).to.equal('(123) 456-7');
    expect(input.selectionStart).to.equal(8);
    expect(value).to.equal('1234567');
  });
  it('should handle onPaste (with selection)', function () {
    const input = {
      value: '1234567-',
      selectionStart: 5,
      selectionEnd: 6,

      setSelectionRange(position) {
        this.selectionStart = position;
      },

      hasAttribute(attribute) {
        return false;
      }

    };
    let value;

    const on_change = _ => value = _;

    (0, _inputControl.onPaste)({}, input, parse, format, on_change);
    expect(input.value).to.equal('(123) 457');
    expect(input.selectionStart).to.equal(8);
    expect(value).to.equal('123457');
  });
  it('should not handle onKeyDown', function () {
    const input = {
      value: '1234567-',
      selectionStart: 5,
      selectionEnd: 6,

      setSelectionRange(position) {
        this.selectionStart = position;
      },

      hasAttribute(attribute) {
        return false;
      }

    };
    let value;

    const on_change = _ => value = _;

    (0, _inputControl.onKeyDown)({}, input, parse, format, on_change);
    expect(input.value).to.equal('1234567-');
    expect(input.selectionStart).to.equal(5);
    expect(value).to.be.undefined;
  });
  it('should handle onKeyDown (Delete)', function () {
    const input = {
      value: '1234567-',
      selectionStart: 5,
      selectionEnd: 5,

      setSelectionRange(position) {
        this.selectionStart = position;
      },

      hasAttribute(attribute) {
        return false;
      }

    };
    const event = {
      keyCode: _dom.Keys.Delete,

      preventDefault() {}

    };
    let value;

    const on_change = _ => value = _;

    (0, _inputControl.onKeyDown)(event, input, parse, format, on_change);
    expect(input.value).to.equal('(123) 457');
    expect(input.selectionStart).to.equal(8);
    expect(value).to.equal('123457');
  });
  it('should handle onKeyDown (Backspace)', function () {
    const input = {
      value: '1234567-',
      selectionStart: 5,
      selectionEnd: 5,

      setSelectionRange(position) {
        this.selectionStart = position;
      },

      hasAttribute(attribute) {
        return false;
      }

    };
    const event = {
      keyCode: _dom.Keys.Backspace,

      preventDefault() {}

    };
    let value;

    const on_change = _ => value = _;

    (0, _inputControl.onKeyDown)(event, input, parse, format, on_change);
    expect(input.value).to.equal('(123) 467');
    expect(input.selectionStart).to.equal(7);
    expect(value).to.equal('123467');
  });
  it('should handle onKeyDown (Backspace with selection)', function () {
    const input = {
      value: '1234567-',
      selectionStart: 4,
      selectionEnd: 6,

      setSelectionRange(position) {
        this.selectionStart = position;
      },

      hasAttribute(attribute) {
        return false;
      }

    };
    const event = {
      keyCode: _dom.Keys.Backspace,

      preventDefault() {}

    };
    let value;

    const on_change = _ => value = _;

    (0, _inputControl.onKeyDown)(event, input, parse, format, on_change);
    expect(input.value).to.equal('(123) 47');
    expect(input.selectionStart).to.equal(7);
    expect(value).to.equal('12347');
  });
  it('should handle onKeyDown (Delete with selection)', function () {
    const input = {
      value: '1234567-',
      selectionStart: 4,
      selectionEnd: 6,

      setSelectionRange(position) {
        this.selectionStart = position;
      },

      hasAttribute(attribute) {
        return false;
      }

    };
    const event = {
      keyCode: _dom.Keys.Delete,

      preventDefault() {}

    };
    let value;

    const on_change = _ => value = _;

    (0, _inputControl.onKeyDown)(event, input, parse, format, on_change);
    expect(input.value).to.equal('(123) 47');
    expect(input.selectionStart).to.equal(7);
    expect(value).to.equal('12347');
  });
});
//# sourceMappingURL=inputControl.test.js.map