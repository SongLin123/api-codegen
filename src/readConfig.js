/*
 * @Date: 2020-06-05 18:47:42
 * @LastEditors: songlin
 * @LastEditTime: 2020-06-15 11:28:08
 * @FilePath: \codegen\src\readConfig.js
 */
// import * as fs from "fs";
import * as path from "path"
import { readJson, convertPath, readRemoteJson } from "./utils"

export default async function () {
    const confFile = process.argv[2] ? convertPath(process.argv[2]) : path.resolve(__dirname, '../../config.json')

    const config = await readJson(confFile)

    try {


        let apijson
        if (config.api.includes('http')) {

            apijson = await readRemoteJson(config.api)
        } else {
            const apiFile = convertPath(config.api)
            apijson = await readJson(apiFile)
        }
        return { apijson, targetPath: config.targetPath }
    } catch (error) {
        console.log(error)
        throw 'api必填'
    }

}

