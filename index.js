module.exports = livescript;

function livescript ( code, options ) {
	var compiled;

	options.sourceMap = true;
	compiled = require("LiveScript").compile( code, options );

	return {
		code: compiled.js,
		map: compiled.v3SourceMap
	};
}

livescript.defaults = {
	accept: '.ls',
	ext: '.js'
};
