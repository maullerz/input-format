export
{
	default as templateParser
}
from './modules/template parser'

export
{
	default as templateFormatter
}
from './modules/template formatter'

export
{
	default as parseDigit
}
from './modules/parse digit'

export
{
	default as parse
}
from './modules/parse'

export
{
	default as format
}
from './modules/format'

export
{
	onChange,
	onKeyDown,

	// Deprecated.
	// I don't know why these functions exist.
	onPaste,
	onCut
}
from './modules/input control'