/*
 * @Date: 2020-06-05 17:57:47
 * @LastEditors  : BillySong
 * @LastEditTime : 2021-07-01 11:01:46
 * @FilePath: \codegen\src\index.js
 */

import readConf from './readConfig'
import { removeTar, longestCommonPrefix, splitSep } from './utils'
import { renderIndex, renderModule, renderEntry } from './render'
import _ from 'lodash'
;(async function main () {
  const {
    apijson,
    targetPath,
    hasEntryService,
    entryServiceTargetPath
  } = await readConf()

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
              let token
              // 取出最后几位
              if (/.+(?=\/\{.+\})/.test(item)) {
                let base = item.match(/.+(?=\/\{.+\})/)[0]
                token = base.split(/.*\//)[1]
              } else {
                token = item.split(/.*\//)[1]
              }
              let routes = item
                .split('/')
                .filter(t => (t.search(/\{/) ? t : ''))
              console.log(routes)
              return {
                tags: func.tags,
                request: {
                  fullpath: item,
                  type,
                  desc: func.summary,
                  path: token,
                  routes,
                  contenttype: func.consumes?.[0] // 一般接口只会有一个
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

  Array.from(module.keys()).forEach(async key => {
    await renderModule(key.dirname, key.filename, module.get(key), targetPath)
  })

  if (hasEntryService) {
    await removeTar(entryServiceTargetPath + 'index.js', ...basePath)
    await removeTar(entryServiceTargetPath + 'service.js', ...basePath)
    await removeTar(entryServiceTargetPath + 'tools.js', ...basePath)

    renderEntry(entryServiceTargetPath)
  }
})()
