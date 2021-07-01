/*
 * @Date: 2020-06-05 18:47:42
 * @LastEditors  : BillySong
 * @LastEditTime : 2021-07-01 11:00:27
 * @FilePath: \codegen\src\readConfig.js
 */
// import * as fs from "fs";
import * as path from 'path'
import { readJson, convertPath, readRemoteJson } from './utils'

export default async function () {
  const confFile = process.argv[2]
    ? convertPath(process.argv[2])
    : path.resolve(__dirname, '../../config.json')

  const config = await readJson(confFile)

  try {
    let apijson
    if (config.api.includes('http')) {
      apijson = await readRemoteJson(config.api)
    } else {
      const apiFile = convertPath(config.api)
      apijson = await readJson(apiFile)
    }
    return {
      apijson,
      targetPath: convertPath(config.targetPath),
      hasEntryService: config.hasEntryService,
      entryServiceTargetPath: config.entryServiceTargetPath
    }
  } catch (error) {
    console.log(error)
    throw 'api必填'
  }
}
