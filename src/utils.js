/*
 * @Date: 2020-06-11 14:11:52
 * @LastEditors: songlin
 * @LastEditTime: 2020-06-12 14:03:57
 * @FilePath: \codegen\src\utils.js
 */
import * as fs from "fs-extra"
import * as path from "path";
export const promisfy = (fn) => {
    return function (args) {
        return new Promise(res => res(fn(...args)))
    }
}
export async function writeFile(filePath, text, ) {
    await fs.outputFile(filePath, text)
}
export async function readJson(filePath) {
    return await fs.readJson(path.resolve(filePath))

}

export async function removeTar() {
    await fs.remove(path.resolve(__dirname, '../target'))
}

export function splitSep(path) {
    return path.split(/\//g).filter((item) => item !== '')
}

export function convertPath(tarpath) {
    return path.resolve(process.cwd(), tarpath)
}
