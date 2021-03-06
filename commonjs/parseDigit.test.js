"use strict";

var _chai = require("chai");

var _parseDigit = _interopRequireDefault(require("./parseDigit.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('parseDigit', function () {
  it('should parse digits', function () {
    (0, _chai.expect)((0, _parseDigit.default)('')).to.be.undefined;
    (0, _chai.expect)((0, _parseDigit.default)('a')).to.be.undefined;
    (0, _chai.expect)((0, _parseDigit.default)('5')).to.equal('5'); // Arabic digits

    (0, _chai.expect)((0, _parseDigit.default)('١')).to.equal('1');
  });
});
//# sourceMappingURL=parseDigit.test.js.map