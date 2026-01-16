import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../../pages/home/HomePage.vue";
import AboutPage from "../../pages/about/AboutPage.vue";
import ContactsPage from "../../pages/contacts/ContactsPage.vue";
import CartPage from "../../pages/cart/CartPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutPage },
  { path: "/contacts", component: ContactsPage },
  { path: "/cart", component: CartPage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
