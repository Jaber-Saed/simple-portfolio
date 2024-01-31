/*
  @license
	Rollup.js v4.7.0
	Fri, 08 Dec 2023 07:57:30 GMT - commit 098e29ca3e0643006870f9ed94710fd3004a9043

	https://github.com/rollup/rollup

	Released under the MIT License.
*/
export { version as VERSION, defineConfig, rollup, watch } from './shared/node-entry.js';
import './shared/parseAst.js';
import '../native.js';
import 'node:path';
import 'path';
import 'node:process';
import 'node:perf_hooks';
import 'node:fs/promises';
import 'tty';
