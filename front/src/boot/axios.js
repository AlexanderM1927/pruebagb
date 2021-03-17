// import Vue from 'vue'
import axios from 'axios'

let withCredentials = false;

// const token = '';

const headers = {
  //  'X-CSRF-TOKEN': localStorage.getItem('csrf'),
  //  'Access-Control-Allow-Origin': '*'
};


export default () => {
  return axios.create({
    baseURL: 'http://127.0.0.1:8000',
    // withCredentials: withCredentials,
    // headers: headers
  })
}