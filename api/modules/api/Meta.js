/** Meta*/
const pre = '/Meta'
export default ({ request, requestForMock, mock, tools, moduleName }) => ({


  
      /**
  * @description 获取 在职状态 下拉列表  post /api/Meta/GetJobStatus
  
  */
  API_META_META_GETJOBSTATUS_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/Meta_GetJobStatus`,
      method: 'post',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 获取 入职路径 下拉列表  post /api/Meta/GetFunction
  
  */
  API_META_META_GETFUNCTION_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/Meta_GetFunction`,
      method: 'post',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 获取 人才来源 下拉列表  post /api/Meta/GetEmployeeSource
  
  */
  API_META_META_GETEMPLOYEESOURCE_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/Meta_GetEmployeeSource`,
      method: 'post',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 获取 行业 下拉列表  post /api/Meta/GetIndustry
  
  */
  API_META_META_GETINDUSTRY_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/Meta_GetIndustry`,
      method: 'post',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 获取 曾任职能 下拉列表  post /api/Meta/GetFunctions
  
  */
  API_META_META_GETFUNCTIONS_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/Meta_GetFunctions`,
      method: 'post',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 获取 部门 下拉列表  post /api/Meta/GetSysDepartment
  
  */
  API_META_META_GETSYSDEPARTMENT_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/Meta_GetSysDepartment`,
      method: 'post',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 获取 部门下的岗位 下拉列表  post /api/Meta/GetSysJob
  
  */
  API_META_META_GETSYSJOB_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/Meta_GetSysJob`,
      method: 'post',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 获取 服务品牌 下拉列表  post /api/Meta/GetCarBrand
  
  */
  API_META_META_GETCARBRAND_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/Meta_GetCarBrand`,
      method: 'post',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 获取 服务车系 下拉列表  post /api/Meta/GetCarSer
  
  */
  API_META_META_GETCARSER_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/Meta_GetCarSer`,
      method: 'post',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 获取 集团下的 经销商 下拉列表  post /api/Meta/GetDealer
  
  */
  API_META_META_GETDEALER_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/Meta_GetDealer`,
      method: 'post',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
 
})
