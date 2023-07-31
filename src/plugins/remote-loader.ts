import VueRouter from 'vue-router'
import remotesManifest from '../../remotes.manifest'
import { Component } from 'vue'

const someVar = [1, 2,3,4,5]

async function loadModule(src: string, scope: string, module: string) {
  return new Promise<Component>((resolve, reject) => {
    const element = document.createElement('script')
  
    element.type = 'text/javascript'
    element.async = true
    element.src = src
    element.onload = async (): Promise<void> => {
      const cmp = await loadRemoteModule(scope, module)
      resolve(cmp.default)
    }

    document.head.appendChild(element)
  })
}

async function  loadRemoteModule(scope: string, module: string): Promise<any> {
  await __webpack_init_sharing__('default');
  const container = window.host; // or get the container somewhere else
  await container.init(__webpack_share_scopes__.default);
  const factory = await window[scope].get(module);
  const Module = factory();
  return Module;
}

export default {
  install: async (Vue: any, { router }: { router: VueRouter, [key: string]: any }): Promise<void> => {
    for(const remote of remotesManifest) {
      const component:  Component = await loadModule(remote.src, remote.scope, remote.module)
      console.log('Cmp: ', component)

      const route = {
        name: remote.name,
        path: `/${remote.name}`,
        component
      }
      
      router.addRoute('App',route)

      console.log('ROUTER: ', router)
    }
    // console.log('RMF: ', router, someVar)
    // Vue.prototype.$remotes = (scope: string, module: string) => {
    //   loadModule(scope, module)
    // }
  }
}