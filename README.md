# vueHttp
> Simple secondary encapsulation of HTTP request based on Vue resource plug-in, supporting params, JSON, formdatau, URL parameter transfer, etc
# Install
> npm install vue-http

# Usage
###   In the need to access the interface file to introduce:
    import vueHttp from 'vue-http'
### vueHttp API:
    Requests can be made by passing the relevant config to vueHttp.
  ```
     vueHttp.request({
          url:'url',
          data: { page: 1, pageSize: 10 },
          method: 'post',
          dataType:'json'
        }).then(res=>console.log(res))
  ```
### Default
    method：'get'，
    dataType：'params'
    
    vueHttp.request({
                      url:'url'，
                      data: { page: 1, pageSize: 10 }}
                    ).then(res=>console.log(res))
     

 ### button style Constructor Options
 
 method |dataType| data  | url      |
 ----   |-----   | ----- | ------   | 
 get    | params  | data | 接口地址 | 
 post   | json    | 无   | url传参  | 
 put    | FormData|                 | 
 delete |              
  ...   |   
