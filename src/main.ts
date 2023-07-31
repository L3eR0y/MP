import VueRouter from 'vue-router'
import Vuex, { Store } from 'Vuex'
import Vue, { Component } from 'vue'

// Routes
import router from './routes/index'

//Components and .vue
import App from './App.vue'

//Store
import Stores from './store/index'

//Styles
import './styles/normalize.scss'
import './styles/app.scss'

//Plugins
import KeycloakPlugin from './plugins/keycloak'
import RemoteLoaderPlugin from './plugins/remote-loader'
import AxiosPlugin from './plugins/axios' 


Vue.use(VueRouter)
Vue.use(Vuex)

const store: Store<any> = new Vuex.Store(Stores)


Vue.use(KeycloakPlugin, { store })
Vue.use(AxiosPlugin, { store })
Vue.use(RemoteLoaderPlugin, { router })

const app: Vue = new Vue({
  router,
  store,
  render: h => h(App)
})

app.$mount('#app')