/** 人员管理*/
const pre = '/person'
export default ({ request, requestForMock, mock, tools, moduleName }) => ({


  
      /**
  * @description 添加人员  post /person/addPerson
  
  */
  _PERSON_ADDPERSON_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/addPerson`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 删除人员  delete /person/deletePerson/{personId}
  
  */
  _PERSON_DELETEPERSON_DELETE({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/deletePerson/${path}`,
      method: 'delete',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 查询组内人员id  post /person/getGroupPersonId
  
  */
  _PERSON_GETGROUPPERSONID_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/getGroupPersonId`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 查询人员  post /person/getPerson
  
  */
  _PERSON_GETPERSON_POST({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/getPerson`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 查询人员详情  get /person/getPersonDetail/{personId}
  
  */
  _PERSON_GETPERSONDETAIL_GET({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/getPersonDetail/${path}`,
      method: 'get',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 获取人员所在组  get /person/getPersonGroup/{personId}
  
  */
  _PERSON_GETPERSONGROUP_GET({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/getPersonGroup/${path}`,
      method: 'get',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 查询本人所在组内人员id列表  get /person/getPersonIdInGroup/{personId}
  
  */
  _PERSON_GETPERSONIDINGROUP_GET({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/getPersonIdInGroup/${path}`,
      method: 'get',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
      /**
  * @description 修改人员  put /person/updatePerson
  
  */
  _PERSON_UPDATEPERSON_PUT({body=undefined,param=undefined,header=undefined,path=undefined}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/updatePerson`,
      method: 'put',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
    })
  },
  
 
})
