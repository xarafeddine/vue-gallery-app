import Vue from "vue";
import VueRouter from "vue-router";
import ItemDetails from "../views/ItemDetails";
import GalleryList from "../views/GalleryList";
import NotFound from "../components/NotFound";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    component: NotFound,
  },
  {
    path: "/",
    name: "gallery-list",
    component: GalleryList,
  },
  {
    path: "/item/:id",
    name: "item-details",
    component: ItemDetails,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
