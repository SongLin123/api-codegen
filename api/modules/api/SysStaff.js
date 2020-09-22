/** SysStaff*/
const pre = '/SysStaff'
export default ({ request, requestForMock, mock, tools, moduleName }) => ({


  
      /**
  * @description 用户登陆（App）  post /api/SysStaff/AppLogin
  
  */
  API_SYSSTAFF_APPLOGIN_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/AppLogin`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 用户登陆(Web)  post /api/SysStaff/WebLogin
  
  */
  API_SYSSTAFF_WEBLOGIN_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/WebLogin`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 发送验证码  post /api/SysStaff/SendVerficationCode
  
  */
  API_SYSSTAFF_SENDVERFICATIONCODE_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/SendVerficationCode`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 更新登录密码  post /api/SysStaff/UpdatePWDByEmail
  
  */
  API_SYSSTAFF_UPDATEPWDBYEMAIL_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/UpdatePWDByEmail`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
 
})
