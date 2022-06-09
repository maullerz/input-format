function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// This is just `./ReactInput.js` rewritten in Hooks.
import React, { useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { onChange as onInputChange, onKeyDown as onInputKeyDown } from '../inputControl.js'; // Usage:
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
  const internalRef = useRef();
  const setRef = useCallback(instance => {
    internalRef.current = instance;

    if (ref) {
      if (typeof ref === 'function') {
        ref(instance);
      } else {
        ref.current = instance;
      }
    }
  }, [ref]);

  const _onChange = useCallback(event => {
    return onInputChange(event, internalRef.current, parse, format, onChange);
  }, [internalRef, parse, format, onChange]);

  const _onKeyDown = useCallback(event => {
    if (onKeyDown) {
      onKeyDown(event);
    }

    return onInputKeyDown(event, internalRef.current, parse, format, onChange);
  }, [internalRef, parse, format, onChange, onKeyDown]);

  return /*#__PURE__*/React.createElement(InputComponent, _extends({}, rest, {
    ref: setRef,
    value: format(isEmptyValue(value) ? '' : value).text,
    onKeyDown: _onKeyDown,
    onChange: _onChange
  }));
}

Input = /*#__PURE__*/React.forwardRef(Input);
Input.propTypes = {
  // Parses a single characher of `<input/>` text.
  parse: PropTypes.func.isRequired,
  // Formats `value` into `<input/>` text.
  format: PropTypes.func.isRequired,
  // Renders `<input/>` by default.
  inputComponent: PropTypes.elementType.isRequired,
  // `<input/>` `type` attribute.
  type: PropTypes.string.isRequired,
  // Is parsed from <input/> text.
  value: PropTypes.string,
  // This handler is called each time `<input/>` text is changed.
  onChange: PropTypes.func.isRequired,
  // Passthrough
  onKeyDown: PropTypes.func,
  onCut: PropTypes.func,
  onPaste: PropTypes.func
};
Input.defaultProps = {
  // Renders `<input/>` by default.
  inputComponent: 'input',
  // `<input/>` `type` attribute.
  type: 'text'
};
export default Input;

function isEmptyValue(value) {
  return value === undefined || value === null;
}
//# sourceMappingURL=Input.js.map