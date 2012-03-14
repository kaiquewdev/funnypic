// Screen functions
var Screen = Object;

Screen.prototype.percentOf = function percentOf( value ) {
	value = value || '';

	if ( value ) {
		if ( value > 0 ) {
			return value / 100 * this;
		} else {
			return 1 / 100 * this;
		}
	}
};