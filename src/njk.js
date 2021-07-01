/*
 * @Date: 2020-06-11 16:59:40
 * @LastEditors  : BillySong
 * @LastEditTime : 2021-07-01 11:01:05
 * @FilePath: \api-codegen\src\njk.js
 */
import * as nunjucks from 'nunjucks'
import * as path from 'path'
import { writeFile, convertPath } from './utils'
import * as fs from 'fs-extra'

import { isNumber } from 'lodash'

export function createNjk (
  searchPaths,
  {
    autoescape = true,
    noCache = false,
    watch = false,
    throwOnUndefined = false
  }
) {
  const env = new nunjucks.Environment(
    new nunjucks.FileSystemLoader(path.resolve(__dirname, searchPaths), {
      noCache: noCache,
      watch: watch
    }),
    {
      autoescape: autoescape,
      throwOnUndefined: throwOnUndefined
    }
  )
  env.addFilter('render', function (template, ctx) {
    try {
      return env.filters.safe(env.render(template, ctx))
    } catch (err) {
      return err.message
    }
  })
  env.addFilter('OR', function (tar, res, or) {
    try {
      return tar ? res : or
    } catch (err) {
      return err.message
    }
  })
  env.addFilter('replace', function (tar) {
    try {
      if (isNumber(tar.charAt(0))) {
        tar = '_' + tar
      }
      tar = tar.split(/\-/g).join('_')
      return tar
    } catch (err) {
      return err.message
    }
  })

  env.addGlobal('upper', function (tar) {
    try {
      return tar.toUpperCase()
    } catch (err) {
      return err.message
    }
  })

  env.addGlobal('iterator', function (
    tar,
    func = t => t,
    endConnector = '',
    preConnector = ''
  ) {
    try {
      let s = ''

      for (const item of tar) {
        s += preConnector + func(item) + endConnector
      }
      console.log(s)
      return s
    } catch (err) {
      return err.message
    }
  })

  // TODO 兼容多path参数
  env.addFilter('routePar', function (tar) {
    try {
      if (isNumber(tar.charAt(0))) {
        tar = '_' + tar
      }
      tar = tar.split(/\-/g).join('_')
      return tar
    } catch (err) {
      return err.message
    }
  })

  return env
}
export function fuckinTar (env) {
  return async function (temName, model, target) {
    const text = env.render(temName + '.njk', model)
    const p = convertPath(target)

    await writeFile(
      path.resolve(p, ...model.dirName),
      model.fileName + '.js',
      text
    )
  }
}
