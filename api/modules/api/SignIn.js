/** SignIn*/
const pre = '/SignIn'
export default ({ request, requestForMock, mock, tools, moduleName }) => ({


  
      /**
  * @description   post /api/SignIn/SetDeadLine
  
  */
  API_SIGNIN_SETDEADLINE_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/SetDeadLine`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
 
})
