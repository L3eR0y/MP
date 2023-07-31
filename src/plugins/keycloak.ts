import Vue from 'vue'
import Keycloak from 'keycloak-js'

const keycloak_config: Keycloak.KeycloakConfig = {
  url: 'https://authdev2.synergy.ru/auth',
  clientId: 'public',
  realm: 'clients',  
}

const init_options: Keycloak.KeycloakInitOptions = {
  flow: 'standard',
  onLoad: 'login-required',
  scope: ['openid', 'profile', 'email'].join(' ')
}

export default {
  install: async (Vue, { store }: { [key: string]: any }) => {
    const _keycloak = new Keycloak(keycloak_config)
    Vue.prototype.$auth = store.state.auth
    _keycloak.init(init_options).then((auth: boolean) => {
      store.commit('auth/SET_AUTENTICATION', auth)
      store.commit('auth/SET_USER', _keycloak.idTokenParsed)
      store.commit('auth/SET_TOKEN', `Bearer ${_keycloak.token}`)
    })
  }
}