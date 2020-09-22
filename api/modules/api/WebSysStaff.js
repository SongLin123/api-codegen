/** WebSysStaff*/
const pre = '/WebSysStaff'
export default ({ request, requestForMock, mock, tools, moduleName }) => ({


  
      /**
  * @description 新建用户  post /api/WebSysStaff/AddSysStaff
  
  */
  API_WEBSYSSTAFF_WEBSYSSTAFF_ADDSYSSTAFF_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/WebSysStaff_AddSysStaff`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 修改用户  post /api/WebSysStaff/UpdateSysStaff
  
  */
  API_WEBSYSSTAFF_WEBSYSSTAFF_UPDATESYSSTAFF_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/WebSysStaff_UpdateSysStaff`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 删除用户信息  post /api/WebSysStaff/DelSysStaff
  
  */
  API_WEBSYSSTAFF_WEBSYSSTAFF_DELSYSSTAFF_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/WebSysStaff_DelSysStaff`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 查询用户信息列表（分页）  post /api/WebSysStaff/GetSysStaffList
  
  */
  API_WEBSYSSTAFF_WEBSYSSTAFF_GETSYSSTAFFLIST_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/WebSysStaff_GetSysStaffList`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 获取系统所有角色  post /api/WebSysStaff/GetRoleList
  
  */
  API_WEBSYSSTAFF_WEBSYSSTAFF_GETROLELIST_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/WebSysStaff_GetRoleList`,
      method: 'post',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
 
})
