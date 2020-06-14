"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testpath = testpath;
exports.testremove = testremove;
exports.testrender = testrender;

var path = _interopRequireWildcard(require("path"));

var fs = _interopRequireWildcard(require("fs-extra"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * @Date: 2020-06-11 17:22:44
 * @LastEditors: songlin
 * @LastEditTime: 2020-06-11 18:04:58
 * @FilePath: \codegen\src\test\index.js
 */
function testpath() {
  return path.resolve(__dirname, '../../template', ...['test1', 'test2'], 'test.njk');
}

function testremove() {
  fs.remove(path.resolve(__dirname, '../../target'));
}

function testrender(render) {
  const model = {
    dirName: ['test1', 'test2'],
    fileName: 'test',
    data: {
      field: '123456'
    }
  };
  render('test', model);
}