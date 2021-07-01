"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderEntry = renderEntry;
exports.renderIndex = renderIndex;
exports.renderModule = renderModule;

var _njk = require("./njk");

/*
 * @Date: 2020-06-12 10:20:55
 * @LastEditors  : BillySong
 * @LastEditTime : 2021-07-01 10:44:56
 * @FilePath: \codegen\src\render.js
 */
const render = (0, _njk.fuckinTar)((0, _njk.createNjk)('../template', {}));

function renderEntry(target) {
  render('entry/index', {
    dirName: [],
    fileName: 'index'
  }, target);
  render('entry/tools', {
    dirName: [],
    fileName: 'tools'
  }, target);
  render('entry/service', {
    dirName: [],
    fileName: 'service'
  }, target);
}

function renderIndex(dirName = [], model, target) {
  Object.assign(model, {
    dirName,
    fileName: 'index'
  });
  console.log(model);
  render('index', model, target);
}

function renderModule(dirName = [], fileName, model, target) {
  Object.assign(model, {
    dirName,
    fileName
  });
  render('module', model, target);
}