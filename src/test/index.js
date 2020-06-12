/*
 * @Date: 2020-06-11 17:22:44
 * @LastEditors: songlin
 * @LastEditTime: 2020-06-11 18:04:58
 * @FilePath: \codegen\src\test\index.js
 */
import * as path from "path";
import * as fs from "fs-extra";

export function testpath() {
    return path.resolve(__dirname, '../../template', ...['test1', 'test2'],'test.njk')
}
export function testremove() {
    fs.remove(path.resolve(__dirname, '../../target'))
}

export function testrender(render) {
    const model={
        dirName: ['test1', 'test2'],
        fileName: 'test',
        data:{field:'123456'}
    }
    render('test', model)
}