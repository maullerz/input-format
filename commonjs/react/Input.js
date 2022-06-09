"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _inputControl = require("../inputControl.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// Usage:
//
// <ReactInput
// 	value={this.state.phone}
// 	onChange={phone => this.setState({ phone })}
// 	parse={character => character}
// 	format={value => ({ text: value, template: 'xxxxxxxx' })}/>
//
function Input(_ref, ref) {
  let {
    value,
    parse,
    format,
    inputComponent: InputComponent,
    onChange,
    onKeyDown,
    ...rest
  } = _ref;
  const internalRef = (0, _react.useRef)();
  const setRef = (0, _react.useCallback)(instance => {
    internalRef.current = instance;

    if (ref) {
      if (typeof ref === 'function') {
        ref(instance);
      } else {
        ref.current = instance;
      }
    }
  }, [ref]);

  const _onChange = (0, _react.useCallback)(event => {
    return (0, _inputControl.onChange)(event, internalRef.current, parse, format, onChange);
  }, [internalRef, parse, format, onChange]);

  const _onKeyDown = (0, _react.useCallback)(event => {
    if (onKeyDown) {
      onKeyDown(event);
    }

    return (0, _inputControl.onKeyDown)(event, internalRef.current, parse, format, onChange);
  }, [internalRef, parse, format, onChange, onKeyDown]);

  return /*#__PURE__*/_react.default.createElement(InputComponent, _extends({}, rest, {
    ref: setRef,
    value: format(isEmptyValue(value) ? '' : value).text,
    onKeyDown: _onKeyDown,
    onChange: _onChange
  }));
}

Input = /*#__PURE__*/_react.default.forwardRef(Input);
Input.propTypes = {
  // Parses a single characher of `<input/>` text.
  parse: _propTypes.default.func.isRequired,
  // Formats `value` into `<input/>` text.
  format: _propTypes.default.func.isRequired,
  // Renders `<input/>` by default.
  inputComponent: _propTypes.default.elementType.isRequired,
  // `<input/>` `type` attribute.
  type: _propTypes.default.string.isRequired,
  // Is parsed from <input/> text.
  value: _propTypes.default.string,
  // This handler is called each time `<input/>` text is changed.
  onChange: _propTypes.default.func.isRequired,
  // Passthrough
  onKeyDown: _propTypes.default.func,
  onCut: _propTypes.default.func,
  onPaste: _propTypes.default.func
};
Input.defaultProps = {
  // Renders `<input/>` by default.
  inputComponent: 'input',
  // `<input/>` `type` attribute.
  type: 'text'
};
var _default = Input;
exports.default = _default;

function isEmptyValue(value) {
  return value === undefined || value === null;
}
//# sourceMappingURL=Input.js.map