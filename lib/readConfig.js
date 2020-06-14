"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var path = _interopRequireWildcard(require("path"));

var _utils = require("./utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * @Date: 2020-06-05 18:47:42
 * @LastEditors: songlin
 * @LastEditTime: 2020-06-12 13:57:12
 * @FilePath: \codegen\src\readConfig.js
 */
// import * as fs from "fs";
async function _default() {
  const confFile = process.argv[2] ? (0, _utils.convertPath)(process.argv[2]) : path.resolve(__dirname, '../../config.json');
  const config = await (0, _utils.readJson)(confFile);

  try {
    const apiFile = (0, _utils.convertPath)(config.api);
    const apijson = await (0, _utils.readJson)(apiFile);
    return {
      apijson,
      targetPath: config.targetPath
    };
  } catch (error) {
    throw 'api必填';
  }
}