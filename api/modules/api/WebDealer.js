/** WebDealer*/
const pre = '/WebDealer'
export default ({ request, requestForMock, mock, tools, moduleName }) => ({


  
      /**
  * @description   post /api/WebDealer/GetDealerList
  
  */
  API_WEBDEALER_GETDEALERLIST_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/GetDealerList`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description   post /api/WebDealer/GetDealerItem
  
  */
  API_WEBDEALER_GETDEALERITEM_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/GetDealerItem`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description   post /api/WebDealer/AddDealer
  
  */
  API_WEBDEALER_ADDDEALER_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/AddDealer`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description   post /api/WebDealer/UpdateDealer
  
  */
  API_WEBDEALER_UPDATEDEALER_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/UpdateDealer`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description   post /api/WebDealer/GetDealer
  
  */
  API_WEBDEALER_GETDEALER_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/GetDealer`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
 
})
