import Api from '../boot/axios'

export default {
  create (params) {
    return Api().post('users', params)
  },
  update (params) {
    return Api().put('users/' + params.id, params)
  },
  delete (params) {
    return Api().delete('users/' + params.id, params)
  },
  get (params) {
    return Api().get('users', params)
  },
}