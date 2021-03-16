// import Vue from 'vue'
import axios from 'axios'


window.csrf_token = "csrf_token()"

axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest',
  'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]')
};

export default () => {
  return axios.create({
    baseURL: 'http://127.0.0.1:8000'
  })
}