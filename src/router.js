// Assuming your router configuration is in a file like "router.js" or "routes.js"

import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../Home.vue';
import About from '../component/About.vue';
import MessagePage from '../component/MessagePage.vue'; // Import the MessagePage component

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/message', component: MessagePage }, // Add a route for the Message page
];

const router = new VueRouter({
  routes,
});

export default router;
