/** WebRegion*/
const pre = '/WebRegion'
export default ({ request, requestForMock, mock, tools, moduleName }) => ({


  
      /**
  * @description 查询区域列表  post /api/WebRegion/GetRegionList
  
  */
  API_WEBREGION_GETREGIONLIST_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/GetRegionList`,
      method: 'post',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 新增大区  post /api/WebRegion/AddPRegion
  
  */
  API_WEBREGION_ADDPREGION_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/AddPRegion`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 新增小区  post /api/WebRegion/AddSRegion
  
  */
  API_WEBREGION_ADDSREGION_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/AddSRegion`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 更新大区  post /api/WebRegion/UpdatePRegion
  
  */
  API_WEBREGION_UPDATEPREGION_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/UpdatePRegion`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 更新小区  post /api/WebRegion/UpdateSRegion
  
  */
  API_WEBREGION_UPDATESREGION_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/UpdateSRegion`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
 
})
