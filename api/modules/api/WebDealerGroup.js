/** WebDealerGroup*/
const pre = '/WebDealerGroup'
export default ({ request, requestForMock, mock, tools, moduleName }) => ({


  
      /**
  * @description   post /api/WebDealerGroup/GetDealerGroupList
  
  */
  API_WEBDEALERGROUP_GETDEALERGROUPLIST_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/GetDealerGroupList`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description   post /api/WebDealerGroup/GetDealerGroup
  
  */
  API_WEBDEALERGROUP_GETDEALERGROUP_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/GetDealerGroup`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description   post /api/WebDealerGroup/AddDealerGroup
  
  */
  API_WEBDEALERGROUP_ADDDEALERGROUP_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/AddDealerGroup`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description   post /api/WebDealerGroup/UpdateDealerGroup
  
  */
  API_WEBDEALERGROUP_UPDATEDEALERGROUP_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/UpdateDealerGroup`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
 
})
