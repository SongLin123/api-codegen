/*
 * @Date: 2020-06-05 17:57:47
 * @LastEditors: songlin
 * @LastEditTime: 2020-06-12 14:14:47
 * @FilePath: \codegen\src\index.js
 */

import readConf from "./readConfig"
import { testrender, testremove } from './test/index'
import { removeTar,splitSep } from "./utils"
import { renderIndex,renderModule } from "./render";
// renderIndex(['mico'], {
//     data: {
//         serviceName: 'service'
//     }
// })
// // TODO
// renderModule(['mico'], 'service', {
//     data: {
//         moduleName: 'service',
//         functions: [{
//             request: {
//                 query: true,
//                 path: 'test',
//             },
//             requestBody: {
//                 type: 'post',
//                 body: {}
//             }
//         }, {
//             request: {
//                 path: 'test2',
//             },
//             requestBody: {
//                 type: 'get',
//                 params: {}
//             }
//         }]
//     }
// })
(async function main() {

    
    await removeTar()
    const { apijson, targetPath } =await readConf()
    const basePath = splitSep(apijson.basePath),
        tags=apijson.tags
    renderIndex(basePath, {}, targetPath)
    
})()


