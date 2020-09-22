/** StaffInfoAudit*/
const pre = '/StaffInfoAudit'
export default ({ request, requestForMock, mock, tools, moduleName }) => ({


  
      /**
  * @description 获取员工学院审核列表  post /api/StaffInfoAudit/GetStaffInfoAuditList
  
  */
  API_STAFFINFOAUDIT_STAFFINFOAUDIT_GETSTAFFINFOAUDITLIST_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/StaffInfoAudit_GetStaffInfoAuditList`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
 
})
