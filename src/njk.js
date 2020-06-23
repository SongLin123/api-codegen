/*
 * @Date: 2020-06-11 16:59:40
 * @LastEditors: songlin
 * @LastEditTime: 2020-06-23 08:41:18
 * @FilePath: \api-codegen\src\njk.js
 */
import * as nunjucks from "nunjucks"
import * as path from "path"
import { writeFile, convertPath } from "./utils"
import { isNumber } from "lodash";

export function createNjk(searchPaths, { autoescape = true, noCache = false, watch = false, throwOnUndefined = false }) {
    const env = new nunjucks.Environment(
        new nunjucks.FileSystemLoader(path.resolve(__dirname, searchPaths), {
            noCache: noCache,
            watch: watch,
        }), {
        autoescape: autoescape,
        throwOnUndefined: throwOnUndefined
    })
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
    return env
}

export function fuckinTar(env) {
    return async function (temName, model, target) {
        const text = env.render(temName + '.njk', model)
        const p = convertPath(target)
        await writeFile(path.resolve(p, ...model.dirName, model.fileName + '.js'), text)
    }
}