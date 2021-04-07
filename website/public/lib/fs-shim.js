

/*
exports.resolve = function(path, ...args) {
	for (let i=0; i<args.length; i++) {
		const arg = args[i];
		path = path.replace(/\/$/, '');
		if (arg[0] === '/') path = arg;
		else if (arg[0] === '.' && arg[1] === '.') {
			path = path.replace(/\/[^/]+$/g, '');
			args[i] = arg.substring(3);
			// args[i] = args[i].replace(/^\.\.\//g, '');
			i--;
		}
		else if (arg[0] === '.') {
			path += arg.substring(1);
		}
	}
	return path;
};
*/
