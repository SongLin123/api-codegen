/*
 * @Date: 2020-06-05 17:57:47
 * @LastEditors: songlin
 * @LastEditTime: 2020-06-15 11:45:02
 * @FilePath: \codegen\src\index.js
 */

import readConf from "./readConfig"
import { removeTar, longestCommonPrefix, splitSep } from "./utils"
import { renderIndex, renderModule } from "./render"
import _ from "lodash";

(async function main() {

    const { apijson, targetPath } = await readConf(),
        basePath = splitSep(apijson.basePath)
    await removeTar(targetPath, ...basePath)

    renderIndex(basePath, {}, targetPath)

    const oldpaths = apijson.paths,
        // oldpars = apijson.definitions
        paths = [].concat(..._(oldpaths).keys().map(item => {
            const inter = oldpaths[item]
            return _(inter).keys().map(type => {
                const func = inter[type]
                return {
                    tags: func.tags,
                    request: {
                        fullpath: item,
                        type,
                        desc: func.summary,
                        path: func.operationId,
                        contenttype: func.consumes[0], // 一般接口只会有一个
                    },
                    // TODO 字段填写
                    requestBody: {
                        query: (func.parameters || (func.parameters = [])).some(t => t.in === 'path')
                    }
                }
            }).value()
        }).value())

    const module = new Map()
    apijson.tags.forEach(item => {
        const functions = paths.filter(it => it.tags.includes(item.name)),
            moduleName = splitSep(longestCommonPrefix(functions.map(t => t.request.fullpath))),
            filename = moduleName[0],
            key = {
                dirname: basePath.concat(moduleName),
                filename
            }
        functions.forEach(f => {
            f.request.serviceName = basePath.join('')
            f.request.moduleName = moduleName.join('')
        })
        const val = {
            data: {
                desc: item.name,
                moduleName,
                functions
            }
        }
        console.log(val)

        module.set(key, val)
    })
    Array.from(module.keys()).forEach(key => {
        renderModule(key.dirname, key.filename, module.get(key), targetPath)

    })
})()


