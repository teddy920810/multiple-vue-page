import request from '@/utils/request'

export function getLog (params) {
  return request({
    url: '/log',
    method: 'get',
    params
  })
}
