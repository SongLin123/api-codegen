"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Field = void 0;

/*
 * @Date: 2020-06-13 16:41:29
 * @LastEditors: songlin
 * @LastEditTime: 2020-06-13 16:43:51
 * @FilePath: \api-codegen\src\class\field.js
 */
class Field {
  constructor(data) {
    this.fieldName = data.fieldName;
    this.type = data.type;
    this.desc = data.desc;
  }

}

exports.Field = Field;