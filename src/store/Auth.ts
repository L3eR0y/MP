import AuthStore,  { User } from 'types/store/auth'

const store: { [key: string]: any } = {
  namespaced: true,
  state: (): AuthStore => ({
    authenticated: false,
    token: '',
    user: undefined     
  }),
  mutations: {
    SET_AUTENTICATION(state: AuthStore, authenticated: boolean) {
      state.authenticated = authenticated
    },
    SET_USER(state: AuthStore, user: User) {
      state.user = user
    },
    SET_TOKEN(state: AuthStore, token: string) {
      state.token = token
    },
  },
  actions: {},
  getters: {
    authenticated(state: AuthStore) {
      return state.authenticated
    },
    user(state: AuthStore) {
      return state.user
    }, 
    token(state: AuthStore) {
      return state.token
    }
  }
}

export default store