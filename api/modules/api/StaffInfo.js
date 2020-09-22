/** StaffInfo*/
const pre = '/StaffInfo'
export default ({ request, requestForMock, mock, tools, moduleName }) => ({


  
      /**
  * @description 获取员工列表  post /api/StaffInfo/GetStaffInfoList
  
  */
  API_STAFFINFO_GETSTAFFINFOLIST_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/GetStaffInfoList`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 根据身份证号，员工号查找员工信息  get /api/StaffInfo/StaffInfoIsExit
  
  */
  API_STAFFINFO_STAFFINFOISEXIT_GET({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/StaffInfoIsExit`,
      method: 'get',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 员工添加  post /api/StaffInfo/StaffInfoAdd
  
  */
  API_STAFFINFO_STAFFINFOADD_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/StaffInfoAdd`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 根据员工号查找员工编辑信息  get /api/StaffInfo/GetStaffInfoEditByEmpCode
  
  */
  API_STAFFINFO_GETSTAFFINFOEDITBYEMPCODE_GET({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/GetStaffInfoEditByEmpCode`,
      method: 'get',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 员工修改  post /api/StaffInfo/StaffInfoEdit
  
  */
  API_STAFFINFO_STAFFINFOEDIT_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/StaffInfoEdit`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 根据员工号查找 员工详细信息  get /api/StaffInfo/GetStaffInfoDetailByEmpCode
  
  */
  API_STAFFINFO_GETSTAFFINFODETAILBYEMPCODE_GET({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/GetStaffInfoDetailByEmpCode`,
      method: 'get',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 调岗  post /api/StaffInfo/StaffInfoTransferPosition
  
  */
  API_STAFFINFO_STAFFINFOTRANSFERPOSITION_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/StaffInfoTransferPosition`,
      method: 'post',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 离职  post /api/StaffInfo/StaffInfoLeave
  
  */
  API_STAFFINFO_STAFFINFOLEAVE_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/StaffInfoLeave`,
      method: 'post',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 迁出/集团调动  post /api/StaffInfo/StaffInfoTransfer
  
  */
  API_STAFFINFO_STAFFINFOTRANSFER_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/StaffInfoTransfer`,
      method: 'post',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 获取 迁入迁出 列表  post /api/StaffInfo/GetStaffTransferHistoryList
  
  */
  API_STAFFINFO_GETSTAFFTRANSFERHISTORYLIST_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/GetStaffTransferHistoryList`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 同意迁入  post /api/StaffInfo/StaffInfoTransferConfirm
  
  */
  API_STAFFINFO_STAFFINFOTRANSFERCONFIRM_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/StaffInfoTransferConfirm`,
      method: 'post',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
 
})
