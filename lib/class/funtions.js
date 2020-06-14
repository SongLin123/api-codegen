"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Func = void 0;

var _request = require("./request");

var _ReqBody = require("./ReqBody");

/*
 * @Date: 2020-06-13 16:24:21
 * @LastEditors: songlin
 * @LastEditTime: 2020-06-13 16:47:59
 * @FilePath: \api-codegen\src\class\funtions.js
 */
class Func {
  constructor(data) {
    this.request = this.createReq(data.reqdata);
    this.requestBody = this.createReqBody(data.bodyData);
  }

  createReq(reqdata) {
    return reqdata.map(item => new _request.Req(item));
  }

  createReqBody(bodyData) {
    return bodyData.map(item => new _ReqBody.ReqBody(item));
  }

}

exports.Func = Func;