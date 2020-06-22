import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import cookies from 'vue-cookies'
import router from './routes'

Vue.config.productionTip = false

Vue.use(cookies)
Vue.$cookies.config('3d')

const firebaseConfig = {
  apiKey: "AIzaSyDy4mpZrRdRwldn-XIhi4Wj5_36t4O2M24",
  authDomain: "bcapp-a28cb.firebaseapp.com",
  databaseURL: "https://bcapp-a28cb.firebaseio.com",
  projectId: "bcapp-a28cb",
  storageBucket: "bcapp-a28cb.appspot.com",
  messagingSenderId: "1001061763581",
  appId: "1:1001061763581:web:8d2b8fa9d3d8d1b8753194",
  signInOptions:[
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ]
};

export const db = firebase.initializeApp(firebaseConfig).firestore()

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
