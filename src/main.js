import Vue from 'vue'

//Components

//TestLayout
import App from './App.vue'
import Layout1 from './Layout1.vue'
import Test from './Test.vue'

//Contents
import Login from './contents/Login.vue'

//Layout
import Empty from './layout/Empty.vue'
import Menu1 from './layout/Menu1.vue'
import PageNotFound from './layout/PageNotFound.vue'

//Dependancy
import VueRouter from 'vue-router'
import vueHeadful from 'vue-headful';

require("../src/components/components.js");

//Vue.config.productionTip = false

//Components
Vue.component('vue-headful', vueHeadful);
Vue.use(VueRouter);

const routes = [
  {
    path: "", name: "", component: Empty,
    children:[
      {path: ""       , name: "homepage", redirect:"/login"},
      {path: "login"  , name: "login", component: Login},
      {path: "about"  , name: "about", component: Empty},
      {path: "layout"  , name: "layout", component: Layout1},
      {path: "test"   , name: "test", component: Test},
    ]
  },
  {
    path: '/user/:userId', name: 'user', component: Menu1, props:true,
    children:[
      {path: "", name:"hello", component: App},
      {path: "aabout", name: "aabout", component: Empty},
      {path: "ttest", name: "ttest", component: Empty}
    ]
  },
  { path: '/404', name: "page404", component: PageNotFound },
  //{ path: '*'  , redirect: '/404' },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});


var vm = new  Vue({
  el:'#app',
  router,
  render (h) { return h(Empty) }
});


// <!-- Bootstrap Core CSS -->
require('../vendor/bootstrap/css/bootstrap.min.css');

// <!-- MetisMenu CSS -->
require("../vendor/metisMenu/metisMenu.min.css");

// <!-- Custom CSS -->
require("../dist/css/sb-admin-2.css");

// <!-- Custom Fonts -->
require("../vendor/font-awesome/css/font-awesome.min.css");

require("../vendor/jquery/jquery.min.js");

require("../vendor/bootstrap/js/bootstrap.min.js");

require("../vendor/metisMenu/metisMenu.min.js");

require("../vendor/raphael/raphael.min.js");
require("../vendor/morrisjs/morris.min.js");
require("../data/morris-data.js");

require("../dist/js/sb-admin-2.js");
