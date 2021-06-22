import Vue from 'vue'
import App from './App.vue'
import store from "./store"
import vuetify from './plugins/vuetify'
import router from 'vue-router'
import { domain, clientId, audience } from "../auth_config.json";
import { Auth0Plugin } from "@/auth/auth0-plugin";

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  audience,
  onRedirectCallback: (appState) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname,
    );
  },
});

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
