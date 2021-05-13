/**
 *  External Modules
 */

 import Vue from "vue";
 import createAuth0Client from "@auth0/auth0-spa-js";
 
 /**
  *  Vue Instance Definition
  */
 
 let instance;
 
 export const getInstance = () => instance;
 
 /**
  *  Vue Instance Initialization
  */
 
 export const useAuth0 = ({
   onRedirectCallback = () =>
     window.history.replaceState({}, document.title, window.location.pathname),
   redirectUri = window.location.origin,
   ...pluginOptions
 }) => {
   if (instance) return instance;
 
   instance = new Vue({
     data() {
       return {
         auth0Client: null,
         isLoading: true,
         isAuthenticated: false,
         user: {},
         error: null,
       };
     },
     methods: {
       async handleRedirectCallback() {
           console.log('handleDirect is running...')
         this.isLoading = true;
         try {
           await this.auth0Client.handleRedirectCallback();
           this.user = await this.auth0Client.getUser();
           console.log(this.user)
           this.isAuthenticated = true;
         } catch (error) {
           this.error = error;
         } finally {
           this.isLoading = false;
         }
       },
 
       loginWithRedirect(options) {
           console.log('trying to log in')
         return this.auth0Client.loginWithRedirect(options);
       },
 
       logout(options) {
         return this.auth0Client.logout(options);
       },
 
       getTokenSilently(o) {
         return this.auth0Client.getTokenSilently(o);
       },
     },
 
     async created() {
         console.log('we are in created')
         console.log(pluginOptions.domain, pluginOptions.clientId)
       this.auth0Client = await createAuth0Client({
         ...pluginOptions,
         domain: pluginOptions.domain,
         client_id: pluginOptions.clientId,
         audience: pluginOptions.audience,
         redirect_uri: redirectUri,
       });
 
       try {
         if (
           window.location.search.includes("code=") &&
           window.location.search.includes("state=")
         ) {
           const { appState } = await this.auth0Client.handleRedirectCallback();
 
           onRedirectCallback(appState);
         }
       } catch (error) {
         this.error = error;
       } finally {
         this.isAuthenticated = await this.auth0Client.isAuthenticated();
         console.log(this.isAuthenticated)
         this.user = await this.auth0Client.getUser();
         console.log(this.user)
         this.isLoading = false;
       }
     },
   });
 
   return instance;
 };
 
 /**
  *  Vue Plugin Definition
  */
 
 export const Auth0Plugin = {
   install(Vue, options) {
     Vue.prototype.$auth = useAuth0(options);
   },
 };