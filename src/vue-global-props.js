import axios from 'axios'

const CancelToken = axios.CancelToken
let baseURL = 'http://localhost:12345/'
let dev = process.env.NODE_ENV === 'development'

export const axiosHttp = axios.create({
  baseURL: baseURL,
  withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    // 'X-Requested-With': '*',
    'Access-Control-Allow-Origin': '*',
    // 'Content-Type': 'application/x-www-form-urlencoded'
  },
  timeout: 4000
})

/**
 * axios request拦截器设置
 * 修改后的config 需要return config
 */
axiosHttp.interceptors.request.use(
  config => {
    // loading start
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
/**
 * axios response 拦截器
 * 修改后的response 需要return response
 */
axiosHttp.interceptors.response.use(
  response => {
    // loading end
    return response
  },
  err => {
    return Promise.reject(err)
  }
)

function SafeRequest (method, {
  url,
  params,
  data,
  successType,
  errorType,
  headers,
  commit}) {
  let cancelToken = false
  if (params && params.cancelToken) {
    cancelToken = params.cancelToken
    delete params.cancelToken
  }
  if (data && data.cancelToken) {
    cancelToken = data.cancelToken
    delete data.cancelToken
  }
  const request = axiosHttp.request({
    url,
    data,
    params,
    headers,
    method: method.toLowerCase(),
    cancelToken: cancelToken && new CancelToken(function executor (c) {
      // 设置abort方法用户abort axios
      cancelToken.cancel = () => c()
    })
  })
  //
  return new Promise((resolve, reject) => {
    // 成功不成功都resolve data到下一层
    // 这一层会根据successType来触发mutations
    request.then((res) => {
      if ([200, 201, 304, 301, 302].includes(res.status)) {
        if (successType) {
          commit(successType, res.data)
        }
      }
      resolve(res)
    }, (res) => {
      reject(res)
    }).catch(() => {
      console.log('ajax error!')
    })
  })
}

export const axiosInstance = {
  get (paramBean, cancelToken) {
    return SafeRequest('get', paramBean, cancelToken)
  },
  post (paramBean, cancelToken) {
    return SafeRequest('post', paramBean, cancelToken)
  },
  put (paramBean, cancelToken) {
    return SafeRequest('put', paramBean, cancelToken)
  },
  delete (paramBean, cancelToken) {
    return SafeRequest('delete', paramBean, cancelToken)
  }
}
