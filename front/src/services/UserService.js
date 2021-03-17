import Api from '../boot/axios'

export default {
  // getCSRF () {
  //   return Api().get('csrf')
  // },
  create (params) {
    return Api().post('api/users', params)
  },
  update (params) {
    return Api().put('api/users/' + params.id, params)
  },
  delete (params) {
    return Api().delete('api/users/' + params.id, params)
  },
  get (params) {
    return Api().get('api/users', params)
  }
}