/** Face*/
const pre = '/Face'
export default ({ request, requestForMock, mock, tools, moduleName }) => ({


  
      /**
  * @description   post /api/Face/RegisterFace
  
  */
  API_FACE_REGISTERFACE_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/RegisterFace`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description   post /api/Face/QuerySignInList
  
  */
  API_FACE_QUERYSIGNINLIST_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/QuerySignInList`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description   post /api/Face/ClockIn
  
  */
  API_FACE_CLOCKIN_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/ClockIn`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
 
})
