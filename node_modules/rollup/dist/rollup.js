/*
  @license
	Rollup.js v4.7.0
	Fri, 08 Dec 2023 07:57:30 GMT - commit 098e29ca3e0643006870f9ed94710fd3004a9043

	https://github.com/rollup/rollup

	Released under the MIT License.
*/
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const rollup = require('./shared/rollup.js');
const watchProxy = require('./shared/watch-proxy.js');
require('./shared/parseAst.js');
require('./native.js');
require('node:path');
require('node:process');
require('tty');
require('path');
require('node:perf_hooks');
require('node:fs/promises');
require('./shared/fsevents-importer.js');



exports.VERSION = rollup.version;
exports.defineConfig = rollup.defineConfig;
exports.rollup = rollup.rollup;
exports.watch = watchProxy.watch;
//# sourceMappingURL=rollup.js.map
