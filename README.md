<!--
 * @Date: 2020-06-12 17:04:42
 * @LastEditors: songlin
 * @LastEditTime: 2020-06-15 13:23:35
 * @FilePath: \codegen\README.md
--> 
# api-codegen
 根据swagger文档生成js api文件,基于axios库的请求
 不生成基础index.js和请求响应拦截器，请根据需求灵活配置
 提供示例的api目录，在/api目录下

## 使用
``` shell
npm i -g songlin-api-swagger

api-codegen ./config.json
```

> 可以使用多配置文件应对多服务的场景，例如
```
api-codegen ./service1.json

api-codegen ./service2.json

api-codegen ./service3.json

```
 ## 配置
 
 ``` 
 {      // 根路径为执行api-codegen的路径
     // api-docs 位置
     // 可以使用本地路径，如 ./api-docs.json.
    "api": "http://127.0.0.1:5500/api-docs.json",
    // 生成的code的位置，重复执行命令会删掉路径下之前生成的目录
    "targetPath": "./api/modules/"
}
 ```