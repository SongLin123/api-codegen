/*
 * @Date: 2020-06-05 18:47:42
 * @LastEditors: songlin
 * @LastEditTime: 2020-06-12 13:57:12
 * @FilePath: \codegen\src\readConfig.js
 */
// import * as fs from "fs";
import * as path from "path"
import { readJson, convertPath } from "./utils"

export default async function () {
    const confFile = process.argv[2] ? convertPath( process.argv[2]) : path.resolve(__dirname, '../../config.json')

    const config = await readJson(confFile)

    try {
        const apiFile = convertPath( config.api)
        const apijson = await readJson(apiFile)

        return { apijson, targetPath: config.targetPath }
    } catch (error) {
        throw 'api必填'
    }

}

