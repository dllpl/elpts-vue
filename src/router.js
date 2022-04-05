import VueRouter from 'vue-router';
import Order from "./components/Order";
import PayFinish from "./components/PayFinish";
import Vue from "vue";

Vue.use(VueRouter)


let router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Order
        },
        {
            path: '/finish',
            component: PayFinish
        }
    ],
})

export default router
