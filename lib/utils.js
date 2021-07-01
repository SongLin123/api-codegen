"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.writeFile = writeFile;
exports.readJson = readJson;
exports.readRemoteJson = readRemoteJson;
exports.removeTar = removeTar;
exports.splitSep = splitSep;
exports.convertPath = convertPath;
exports.longestCommonPrefix = longestCommonPrefix;
exports.uid = exports.promisfy = void 0;

var fs = _interopRequireWildcard(require("fs-extra"));

var path = _interopRequireWildcard(require("path"));

var http = _interopRequireWildcard(require("http"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * @Date: 2020-06-11 14:11:52
 * @LastEditors  : BillySong
 * @LastEditTime : 2021-07-01 10:44:11
 * @FilePath: \codegen\src\utils.js
 */
const promisfy = fn => {
  return function (args) {
    return new Promise(res => res(fn(...args)));
  };
};

exports.promisfy = promisfy;
let uid = 0;
exports.uid = uid;

function writeFile(dir, file, text) {
  let filePath = path.resolve(dir, file);

  if (fs.pathExistsSync(filePath)) {
    console.log(path.resolve(dir, uid + file));
    fs.outputFileSync(path.resolve(dir, uid + file), text, {
      flag: 'a+'
    });
    exports.uid = uid = uid + 1;
  } else {
    fs.outputFileSync(filePath, text, {
      flag: 'a+'
    });
  }
}

async function readJson(filePath) {
  return await fs.readJson(path.resolve(filePath));
}

async function readRemoteJson(remoteUrl) {
  return await new Promise(resolve => {
    http.get(remoteUrl, res => {
      const {
        statusCode
      } = res;
      const contentType = res.headers['content-type'];
      let error;

      if (statusCode !== 200) {
        error = new Error('请求失败\n' + `状态码: ${statusCode}`);
      } else if (!/^application\/json/.test(contentType)) {
        error = new Error('无效的 content-type.\n' + `期望的是 application/json 但接收到的是 ${contentType}`);
      }

      if (error) {
        console.error(error.message); // 消费响应数据来释放内存。

        res.resume();
        return;
      }

      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', chunk => {
        rawData += chunk;
      });
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(rawData);
          resolve(parsedData);
        } catch (error) {
          console.log(error);
        }
      });
    }).on('error', e => {
      console.error(`出现错误: ${e.message}`);
    });
  });
}

async function removeTar(...args) {
  await fs.remove(convertPath(...args));
}

function splitSep(path) {
  console.log(path);
  return path.split(/\//g).filter(item => item !== '');
}

function convertPath(...args) {
  return path.resolve(process.cwd(), ...args);
}

function longestCommonPrefix(strs) {
  if (strs === null || strs.length === 0) {
    return '';
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
  } // 截取最后一个 斜杠


  if (pre.charAt(pre.length - 1) !== '/') pre = pre.match(/.*\//)[0];
  return pre;
}