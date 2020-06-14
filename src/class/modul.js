/*
 * @Date: 2020-06-13 15:26:22
 * @LastEditors: songlin
 * @LastEditTime: 2020-06-13 16:50:03
 * @FilePath: \api-codegen\src\class\modul.js
 */
import { Func } from "./functions";
export class Module {

    constructor(json) {
        this.desc = json.desc
        this.moduleName = json.moduleName
        this.serviceName = json.serviceName
        this.functions = this.createfunc(data)
    }
    createfunc(data) {
        const arr = []
        for (const item of data) {
            arr.push(new Func(item))
        }
    }

}