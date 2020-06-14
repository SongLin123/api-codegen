"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.writeFile = writeFile;
exports.readJson = readJson;
exports.removeTar = removeTar;
exports.splitSep = splitSep;
exports.convertPath = convertPath;
exports.longestCommonPrefix = longestCommonPrefix;
exports.promisfy = void 0;

var fs = _interopRequireWildcard(require("fs-extra"));

var path = _interopRequireWildcard(require("path"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * @Date: 2020-06-11 14:11:52
 * @LastEditors: songlin
 * @LastEditTime: 2020-06-15 00:03:28
 * @FilePath: \api-codegen\src\utils.js
 */
const promisfy = fn => {
  return function (args) {
    return new Promise(res => res(fn(...args)));
  };
};

exports.promisfy = promisfy;

async function writeFile(filePath, text) {
  await fs.outputFile(filePath, text);
}

async function readJson(filePath) {
  return await fs.readJson(path.resolve(filePath));
}

async function removeTar() {
  await fs.remove(path.resolve(__dirname, '../target'));
}

function splitSep(path) {
  return path.split(/\//g).filter(item => item !== '');
}

function convertPath(tarpath) {
  return path.resolve(process.cwd(), tarpath);
}

function longestCommonPrefix(strs) {
  if (strs === null || strs.length === 0) {
    return "";
  }

  let pre = strs[0],
      len;

  for (let i = 0; i < strs.length; i++) {
    //匹配选出来最短的字符串
    len = pre.length > strs[i].length ? strs[i].length : pre.length;
    let j; //追个比较

    for (j = 0; j < len; j++) {
      if (pre.charAt(j) != strs[i].charAt(j)) {
        break;
      }
    }

    pre = pre.substring(0, j);
  }

  return pre;
}