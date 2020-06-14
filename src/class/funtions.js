/*
 * @Date: 2020-06-13 16:24:21
 * @LastEditors: songlin
 * @LastEditTime: 2020-06-13 16:47:59
 * @FilePath: \api-codegen\src\class\funtions.js
 */
import { Req } from "./request";
import { ReqBody } from "./ReqBody";
export class Func {
    constructor(data) {

        this.request = this.createReq(data.reqdata)
        this.requestBody = this.createReqBody(data.bodyData)
    }

    createReq(reqdata) {
        return reqdata.map(item => new Req(item))
    }
    createReqBody(bodyData) {
        return bodyData.map(item => new ReqBody(item))
    }
}