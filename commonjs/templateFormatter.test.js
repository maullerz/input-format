"use strict";

var _chai = require("chai");

var _templateFormatter = _interopRequireDefault(require("./templateFormatter.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('templateFormatter', function () {
  it('should format a phone number', function () {
    const formatter = (0, _templateFormatter.default)('x (xxx) xxx-xx-xx');
    (0, _chai.expect)(formatter('').template).to.equal('x (xxx) xxx-xx-xx');
    (0, _chai.expect)(formatter('8').text).to.equal('8');
    (0, _chai.expect)(formatter('88').text).to.equal('8 (8');
    (0, _chai.expect)(formatter('880').text).to.equal('8 (80');
    (0, _chai.expect)(formatter('8800').text).to.equal('8 (800');
    (0, _chai.expect)(formatter('88005').text).to.equal('8 (800) 5');
    (0, _chai.expect)(formatter('880055').text).to.equal('8 (800) 55');
    (0, _chai.expect)(formatter('8800555').text).to.equal('8 (800) 555');
    (0, _chai.expect)(formatter('88005553').text).to.equal('8 (800) 555-3');
    (0, _chai.expect)(formatter('880055535').text).to.equal('8 (800) 555-35');
    (0, _chai.expect)(formatter('8800555353').text).to.equal('8 (800) 555-35-3');
    (0, _chai.expect)(formatter('88005553535').text).to.equal('8 (800) 555-35-35');
  });
  it('should format for edge case templates', function () {
    const formatter = (0, _templateFormatter.default)('(x x x)');
    (0, _chai.expect)(formatter('').text).to.equal('');
    (0, _chai.expect)(formatter('0').text).to.equal('(0');
    (0, _chai.expect)(formatter('00').text).to.equal('(0 0');
    (0, _chai.expect)(formatter('000').text).to.equal('(0 0 0)'); // More than the template can handle

    (0, _chai.expect)(formatter('0000').text).to.equal('(0 0 0)');
  });
  it('should default to "x" placeholder', function () {
    const formatter = (0, _templateFormatter.default)('A (AAA) AAA-AA-AA');
    (0, _chai.expect)(formatter('88005553535').text).to.equal('A (AAA) AAA-AA-AA');
  });
  it('should accept custom placeholder', function () {
    const formatter = (0, _templateFormatter.default)('A (AAA) AAA-AA-AA', 'A');
    (0, _chai.expect)(formatter('88005553535').text).to.equal('8 (800) 555-35-35');
  });
  it('should skip formatting when given no template', function () {
    const formatter = (0, _templateFormatter.default)();
    (0, _chai.expect)(formatter('88005553535').text).to.equal('88005553535');
  });
  it('should close braces', function () {
    const formatter = (0, _templateFormatter.default)('x (xxx) xxx-xx-xx', 'x', true);
    (0, _chai.expect)(formatter('88').text).to.equal('8 (8  )');
  });
});
//# sourceMappingURL=templateFormatter.test.js.map