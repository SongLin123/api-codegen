"use strict";

var _readConfig = _interopRequireDefault(require("./readConfig"));

var _utils = require("./utils");

var _render = require("./render");

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Date: 2020-06-05 17:57:47
 * @LastEditors: songlin
 * @LastEditTime: 2020-06-15 11:45:02
 * @FilePath: \codegen\src\index.js
 */
(async function main() {
  const {
    apijson,
    targetPath
  } = await (0, _readConfig.default)(),
        basePath = (0, _utils.splitSep)(apijson.basePath);
  await (0, _utils.removeTar)(targetPath, ...basePath);
  (0, _render.renderIndex)(basePath, {}, targetPath);
  const oldpaths = apijson.paths,
        // oldpars = apijson.definitions
  paths = [].concat(...(0, _lodash.default)(oldpaths).keys().map(item => {
    const inter = oldpaths[item];
    return (0, _lodash.default)(inter).keys().map(type => {
      const func = inter[type];
      return {
        tags: func.tags,
        request: {
          fullpath: item,
          type,
          desc: func.summary,
          path: func.operationId,
          contenttype: func.consumes[0] // 一般接口只会有一个

        },
        // TODO 字段填写
        requestBody: {
          query: (func.parameters || (func.parameters = [])).some(t => t.in === 'path')
        }
      };
    }).value();
  }).value());
  const module = new Map();
  apijson.tags.forEach(item => {
    const functions = paths.filter(it => it.tags.includes(item.name)),
          moduleName = (0, _utils.splitSep)((0, _utils.longestCommonPrefix)(functions.map(t => t.request.fullpath))),
          filename = moduleName[0],
          key = {
      dirname: basePath.concat(moduleName),
      filename
    };
    functions.forEach(f => {
      f.request.serviceName = basePath.join('');
      f.request.moduleName = moduleName.join('');
    });
    const val = {
      data: {
        desc: item.name,
        moduleName,
        functions
      }
    };
    console.log(val);
    module.set(key, val);
  });
  Array.from(module.keys()).forEach(key => {
    (0, _render.renderModule)(key.dirname, key.filename, module.get(key), targetPath);
  });
})();