import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource);
class HttpRequest {
  static paramsType (options) {
    const {dataType='params', data} = options;
    if (dataType === 'json') {
      return {...data}
    }
    if (dataType === 'FormData') {
      return data
    }
    if (dataType === 'params') {
      if(data && data.params===undefined){
        return {params:{...data}}
      }
      return data
    }
    return data
  }
  request(options){
    const {method='get',url} = options;
    return new Promise((resolve, reject) => {
      Vue.http[method](
        url,
        HttpRequest.paramsType(options)
      ).then(res => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}
const hgVueHttp = new HttpRequest();
export default hgVueHttp
