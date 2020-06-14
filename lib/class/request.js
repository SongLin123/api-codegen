"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Req = void 0;

/*
 * @Date: 2020-06-13 16:30:03
 * @LastEditors: songlin
 * @LastEditTime: 2020-06-13 16:37:57
 * @FilePath: \api-codegen\src\class\request.js
 */
class Req {
  constructor(data) {
    this.desc = data.desc;
    this.type = data.type;
    this.fullpath = data.fullpath;
    this.path = data.path;
    this.query = data.query;
  }

}

exports.Req = Req;