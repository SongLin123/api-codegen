/** Audit*/
const pre = '/Audit'
export default ({ request, requestForMock, mock, tools, moduleName }) => ({


  
      /**
  * @description   post /api/Audit/QueryAuditList
  
  */
  API_AUDIT_QUERYAUDITLIST_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/QueryAuditList`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description   post /api/Audit/FirstAuditCheck
  
  */
  API_AUDIT_FIRSTAUDITCHECK_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/FirstAuditCheck`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description   get /api/Audit/DownloadAuditAccordExcel
  
  */
  API_AUDIT_DOWNLOADAUDITACCORDEXCEL_GET({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/DownloadAuditAccordExcel`,
      method: 'get',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description   post /api/Audit/QueryStaffAuditList
  
  */
  API_AUDIT_QUERYSTAFFAUDITLIST_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/QueryStaffAuditList`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description   post /api/Audit/QueryCollegeAuditList
  
  */
  API_AUDIT_QUERYCOLLEGEAUDITLIST_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/QueryCollegeAuditList`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description   post /api/Audit/SubmitAuditStuff
  
  */
  API_AUDIT_SUBMITAUDITSTUFF_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/SubmitAuditStuff`,
      method: 'post',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description   post /api/Audit/QueryDealerAuditList
  
  */
  API_AUDIT_QUERYDEALERAUDITLIST_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/QueryDealerAuditList`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description   post /api/Audit/UploadSupplyStuff
  
  */
  API_AUDIT_UPLOADSUPPLYSTUFF_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/UploadSupplyStuff`,
      method: 'post',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description   post /api/Audit/SubmitSupplyStuff
  
  */
  API_AUDIT_SUBMITSUPPLYSTUFF_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/SubmitSupplyStuff`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description   post /api/Audit/QueryAuditApproveList
  
  */
  API_AUDIT_QUERYAUDITAPPROVELIST_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/QueryAuditApproveList`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description   post /api/Audit/GetAuditApproveDetail
  
  */
  API_AUDIT_GETAUDITAPPROVEDETAIL_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/GetAuditApproveDetail`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description   post /api/Audit/AuditApprove
  
  */
  API_AUDIT_AUDITAPPROVE_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/AuditApprove`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description   get /api/Audit/DownloadAuditApproveExcel
  
  */
  API_AUDIT_DOWNLOADAUDITAPPROVEEXCEL_GET({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/DownloadAuditApproveExcel`,
      method: 'get',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
 
})
