/** Swagger*/
const pre = '/Swagger'
export default ({ request, requestForMock, mock, tools, moduleName }) => ({


  
      /**
  * @description   get /api/Swagger/Get
  
  */
  API_SWAGGER_GET_GET({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/Get`,
      method: 'get',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
 
})
