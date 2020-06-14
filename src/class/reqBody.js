/*
 * @Date: 2020-06-13 16:30:48
 * @LastEditors: songlin
 * @LastEditTime: 2020-06-13 16:41:20
 * @FilePath: \api-codegen\src\class\reqBody.js
 */
import { Field } from "./field";
export class ReqBody {
    constructor(data) {
        this.type = data.type
        this.body = data.body
        this.params = data.params
        this.field = this.createField(data.fields)
    }

    createField(data) {
        return data.map(item => new Field(item))
    }
}