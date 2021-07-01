"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNjk = createNjk;
exports.fuckinTar = fuckinTar;

var nunjucks = _interopRequireWildcard(require("nunjucks"));

var path = _interopRequireWildcard(require("path"));

var _utils = require("./utils");

var fs = _interopRequireWildcard(require("fs-extra"));

var _lodash = require("lodash");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * @Date: 2020-06-11 16:59:40
 * @LastEditors  : BillySong
 * @LastEditTime : 2021-07-01 11:01:05
 * @FilePath: \api-codegen\src\njk.js
 */
function createNjk(searchPaths, {
  autoescape = true,
  noCache = false,
  watch = false,
  throwOnUndefined = false
}) {
  const env = new nunjucks.Environment(new nunjucks.FileSystemLoader(path.resolve(__dirname, searchPaths), {
    noCache: noCache,
    watch: watch
  }), {
    autoescape: autoescape,
    throwOnUndefined: throwOnUndefined
  });
  env.addFilter('render', function (template, ctx) {
    try {
      return env.filters.safe(env.render(template, ctx));
    } catch (err) {
      return err.message;
    }
  });
  env.addFilter('OR', function (tar, res, or) {
    try {
      return tar ? res : or;
    } catch (err) {
      return err.message;
    }
  });
  env.addFilter('replace', function (tar) {
    try {
      if ((0, _lodash.isNumber)(tar.charAt(0))) {
        tar = '_' + tar;
      }

      tar = tar.split(/\-/g).join('_');
      return tar;
    } catch (err) {
      return err.message;
    }
  });
  env.addGlobal('upper', function (tar) {
    try {
      return tar.toUpperCase();
    } catch (err) {
      return err.message;
    }
  });
  env.addGlobal('iterator', function (tar, func = t => t, endConnector = '', preConnector = '') {
    try {
      let s = '';

      for (const item of tar) {
        s += preConnector + func(item) + endConnector;
      }

      console.log(s);
      return s;
    } catch (err) {
      return err.message;
    }
  }); // TODO 兼容多path参数

  env.addFilter('routePar', function (tar) {
    try {
      if ((0, _lodash.isNumber)(tar.charAt(0))) {
        tar = '_' + tar;
      }

      tar = tar.split(/\-/g).join('_');
      return tar;
    } catch (err) {
      return err.message;
    }
  });
  return env;
}

function fuckinTar(env) {
  return async function (temName, model, target) {
    const text = env.render(temName + '.njk', model);
    const p = (0, _utils.convertPath)(target);
    await (0, _utils.writeFile)(path.resolve(p, ...model.dirName), model.fileName + '.js', text);
  };
}