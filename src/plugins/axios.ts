import axios from 'axios'
import Vue from 'vue'

export default {
  install: (Vue: any, { store }: { [key:string]: any }) => {
    Vue.prototype.$axios = axios
  }
}