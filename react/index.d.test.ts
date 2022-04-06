// Experimental TypeScript typings.
// https://gitlab.com/catamphetamine/input-format/-/issues/1

import * as React from 'react';

import {
	ParseFunction,
	FormatFunction
} from '../index.d.test';

type InputComponent<InputComponentProps> = (props: InputComponentProps) => JSX.Element;

// export type DefaultInputComponentProps = React.InputHTMLAttributes<HTMLInputElement>
// Precise TypeScript "typings" turned out to be too complex to figure out,
// so it just allows any property that a hypothetical custom `inputComponent` could accept.
export type DefaultInputComponentProps = {
	[anyProperty: string]: any;
}

type Props<InputComponentProps> = InputComponentProps & {
	value?: string;
	parse: ParseFunction;
	format: FormatFunction;
	type?: string;
	inputComponent?: InputComponent<InputComponentProps>;
	onChange?(value?: string): void;
	onKeyDown?(value?: string): void;
};

// React TypeScript Cheatsheet doesn't recommend using React.FunctionalComponent.
// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components
// declare const ReactInput: React.FC<Props>;

type ReactInputComponent<InputComponentProps = DefaultInputComponentProps> = (props: Props<InputComponentProps>) => JSX.Element;

declare const ReactInput: ReactInputComponent;

export default ReactInput;
