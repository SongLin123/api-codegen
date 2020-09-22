/** JobPlan*/
const pre = '/JobPlan'
export default ({ request, requestForMock, mock, tools, moduleName }) => ({


  
      /**
  * @description 查询人员岗位计划列表  post /api/JobPlan/QueryJobPlanList
  
  */
  API_JOBPLAN_JOBPLAN_QUERYJOBPLANLIST_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/JobPlan_QueryJobPlanList`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 下载人员岗位计划模板  get /api/JobPlan/DownLoadJobPlanTemplate
  
  */
  API_JOBPLAN_JOBPLAN_DOWNLOADJOBPLANTEMPLATE_GET({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/JobPlan_DownLoadJobPlanTemplate`,
      method: 'get',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 上传人员岗位计划  post /api/JobPlan/UploadJobPlan
  
  */
  API_JOBPLAN_JOBPLAN_UPLOADJOBPLAN_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/JobPlan_UploadJobPlan`,
      method: 'post',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 获取人员岗位计划详情  get /api/JobPlan/GetJobPlanLackDetail
  
  */
  API_JOBPLAN_JOBPLAN_GETJOBPLANLACKDETAIL_GET({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/JobPlan_GetJobPlanLackDetail`,
      method: 'get',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 获取人员岗位计划详情列表  get /api/JobPlan/GetJobPlanDetailList
  
  */
  API_JOBPLAN_JOBPLAN_GETJOBPLANDETAILLIST_GET({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/JobPlan_GetJobPlanDetailList`,
      method: 'get',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 下载人员岗位计划详情Excel  get /api/JobPlan/DownLoadJobPlanListExcel
  
  */
  API_JOBPLAN_JOBPLAN_DOWNLOADJOBPLANLISTEXCEL_GET({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/JobPlan_DownLoadJobPlanListExcel`,
      method: 'get',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
 
})
