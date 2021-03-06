"use strict";

var _chai = require("chai");

var _templateParser = _interopRequireDefault(require("./templateParser.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('templateParser', function () {
  it('should parse a phone number', function () {
    const parse = (0, _templateParser.default)('x (xxx) xxx-xx-xx', (character, value) => {
      if (character >= '0' && character <= '9') {
        return character;
      }
    });
    (0, _chai.expect)(parse('', '')).to.be.undefined;
    (0, _chai.expect)(parse('a', '')).to.be.undefined;
    (0, _chai.expect)(parse('5', '8800555353')).to.equal('5');
    (0, _chai.expect)(parse('5', '88005553535')).to.be.undefined;
  });
  it('should accept placeholder parameter', function () {
    const parse = (0, _templateParser.default)('A (AAA) AAA-AA-AA', 'A', (character, value) => {
      if (character >= '0' && character <= '9') {
        return character;
      }
    });
    (0, _chai.expect)(parse('5', '8800555353')).to.equal('5');
    (0, _chai.expect)(parse('5', '88005553535')).to.be.undefined;
  });
});
//# sourceMappingURL=templateParser.test.js.map