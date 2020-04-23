import Vue from 'vue'
import Vuex from 'vuex'

 import tasks from './store-tasks'

Vue.use(Vuex)

/**
 * If not bulding with SSR mode, you can
 * directly export the store instantiation
 */

 export default function(){
     const Store = new Vuex.Store({
         modules:{
            tasks
         },

         //enable  strict mode (adds overhead!)
         //for dev mode only
         strict:process.env.DEV
     })
     return Store
 }