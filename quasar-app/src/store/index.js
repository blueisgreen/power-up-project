import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'
import admin from './admin'
import member from './member'
import user from './user'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      admin,
      member,
      user,
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV,
  })

  // for hot module reloading (HMR) -- keep out of production build
  // if (process.env.DEV && module.hot) {
  //   module.hot.accept(['./admin'], () => {
  //     const newAdmin = require('./admin').default
  //     Store.hotUpdate({ modules: { admin: newAdmin } })
  //   })
  // }

  return Store
}
