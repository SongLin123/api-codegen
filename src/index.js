/*
 * @Date: 2020-06-05 17:57:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-22 10:50:29
 * @FilePath: \codegen\src\index.js
 */

import readConf from './readConfig'
import { removeTar, longestCommonPrefix, splitSep } from './utils'
import { renderIndex, renderModule } from './render'
import _ from 'lodash'
;(async function main () {
  const { apijson, targetPath } = await readConf()

  const oldpaths = apijson.paths,
    // oldpars = apijson.definitions
    paths = [].concat(
      ..._(oldpaths)
        .keys()
        .map(item => {
          const inter = oldpaths[item]
          return _(inter)
            .keys()
            .map(type => {
              const func = inter[type]
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
                  query: (func.parameters || (func.parameters = [])).some(
                    t => t.in === 'path'
                  )
                }
              }
            })
            .value()
        })
        .value()
    )

  function getTag (apijson) {
    if (apijson.tags) return apijson.tags

    const tags = [],
      object = apijson.paths
    for (const key in apijson.paths) {
      if (object.hasOwnProperty(key)) {
        const element = object[key]

        Object.values(element).forEach(i => {
          tags.push(i.tags)
        })
      }
    }
    return [...new Set(tags.flat())].map(i => ({ name: i, description: '' }))
  }

  const module = new Map()
  let basePath

  getTag(apijson).forEach(tag => {
    const functions = paths.filter(it => it.tags.includes(tag.name))
    // 截取公共前缀
    let moduleName = splitSep(
      longestCommonPrefix(functions.map(t => t.request.fullpath))
    )
    basePath = apijson.basePath
      ? splitSep(apijson.basePath)
      : moduleName.splice(0, 1)

    const filename = moduleName[0],
      key = {
        dirname: basePath,
        filename
      }
    functions.forEach(f => {
      f.request.serviceName = basePath.join('')
      f.request.moduleName = moduleName.join('')
    })
    const val = {
      data: {
        desc: tag.name,
        moduleName,
        functions
      }
    }
    module.set(key, val)
  })
  await removeTar(targetPath, ...basePath)

  renderIndex(basePath, {}, targetPath)

  Array.from(module.keys()).forEach(key => {
    renderModule(key.dirname, key.filename, module.get(key), targetPath)
  })
})()
