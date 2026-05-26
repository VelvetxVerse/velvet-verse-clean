import { createRouter, createWebHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import CollectionsView from './views/CollectionsView.vue'
import FounderView from './views/FounderView.vue'
import PresentationView from './views/PresentationView.vue'
import ServicesView from './views/ServicesView.vue'
import ShopView from './views/ShopView.vue'

import ParisEditionView from './views/ParisEditionView.vue'

import ParisDemoView from './views/ParisDemoView.vue'
import ParisGallery from './views/ParisGallery.vue'
import ParisMenu from './views/ParisMenu.vue'
import ParisRecipeCroissant from './views/ParisRecipeCroissant.vue'
import ParisRecipeCookies from './views/ParisRecipeCookies.vue'
import ParisRecipeCake from './views/ParisRecipeCake.vue'
import ParisRecipeBrunch from './views/ParisRecipeBrunch.vue'
import ParisAbout from './views/ParisAbout.vue'
import ParisContact from './views/ParisContact.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/collections', name: 'collections', component: CollectionsView },
  { path: '/shop', name: 'shop', component: ShopView },
  { path: '/services', name: 'services', component: ServicesView },
  { path: '/founder', name: 'founder', component: FounderView },
  { path: '/presentation', name: 'presentation', component: PresentationView },

  { path: '/paris-edition', name: 'paris-edition', component: ParisEditionView },

  { path: '/paris-demo', name: 'paris-demo', component: ParisDemoView },
  { path: '/paris-gallery', name: 'paris-gallery', component: ParisGallery },
  { path: '/paris-menu', name: 'paris-menu', component: ParisMenu },
  { path: '/paris-recipe-croissant', name: 'paris-recipe-croissant', component: ParisRecipeCroissant },
  { path: '/paris-recipe-cookies', name: 'paris-recipe-cookies', component: ParisRecipeCookies },
  { path: '/paris-recipe-cake', name: 'paris-recipe-cake', component: ParisRecipeCake },
  { path: '/paris-recipe-brunch', name: 'paris-recipe-brunch', component: ParisRecipeBrunch },
  { path: '/paris-about', name: 'paris-about', component: ParisAbout },
  { path: '/paris-contact', name: 'paris-contact', component: ParisContact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router