/** Demo*/
const pre = '/Demo'
export default ({ request, requestForMock, mock, tools, moduleName }) => ({


  
      /**
  * @description 获取的注释  get /api/Demo/Get
  
  */
  API_DEMO_DEMO_GET_GET({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/Demo_Get`,
      method: 'get',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description   get /api/Demo/Get/{id}
  
  */
  API_DEMO_DEMO_GET_GET({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/Demo_Get/${path}`,
      method: 'get',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description   post /api/Demo/Post
  
  */
  API_DEMO_DEMO_POST_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/Demo_Post`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description   put /api/Demo/Put/{id}
  
  */
  API_DEMO_DEMO_PUT_PUT({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/Demo_Put/${path}`,
      method: 'put',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description   delete /api/Demo/Delete/{id}
  
  */
  API_DEMO_DEMO_DELETE_DELETE({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/Demo_Delete/${path}`,
      method: 'delete',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
 
})
