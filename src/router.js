import { createRouter, createWebHistory } from 'vue-router'

import VelvetXVersePortal from './views/VelvetXVersePortal.vue'
import CollectionsView from './views/CollectionsView.vue'
import FounderView from './views/FounderView.vue'
import PresentationView from './views/PresentationView.vue'
import ServicesView from './views/ServicesView.vue'
import ShopView from './views/ShopView.vue'
import ShopCheckout from './views/ShopCheckout.vue'
import ShopConfirmation from './views/ShopConfirmation.vue'
import CartView from './views/CartView.vue'
import CollaborateView from './views/CollaborateView.vue'
import MakeupView from './views/MakeupView.vue'
import MakeupMediaKit from './views/MakeupMediaKit.vue'
import BlogView from './views/BlogView.vue'

/* PARIS */
import ParisEditionView from './views/ParisEditionView.vue'
import ParisDemoView from './views/ParisDemoView.vue'
import ParisGallery from './views/ParisGallery.vue'
import ParisMenu from './views/ParisMenu.vue'
import ParisVisit from './views/ParisVisit.vue'
import ParisRecipeCroissant from './views/ParisRecipeCroissant.vue'
import ParisRecipeCookies from './views/ParisRecipeCookies.vue'
import ParisRecipeCake from './views/ParisRecipeCake.vue'
import ParisRecipeBrunch from './views/ParisRecipeBrunch.vue'
import ParisAbout from './views/ParisAbout.vue'
import ParisContact from './views/ParisContact.vue'

/* NOIR */
import NoirHome from './views/NoirHome.vue'
import NoirAbout from './views/NoirAbout.vue'
import NoirServices from './views/NoirServices.vue'
import NoirGallery from './views/NoirGallery.vue'
import NoirContact from './views/NoirContact.vue'

/* LEGAL */
import PrivacyPolicy from './views/PrivacyPolicy.vue'
import TermsConditions from './views/TermsConditions.vue'

const routes = [
  /* MAIN */
  {
    path: '/',
    name: 'home',
    component: VelvetXVersePortal,
  },

  {
    path: '/collections',
    name: 'collections',
    component: CollectionsView,
  },

  {
    path: '/shop',
    name: 'shop',
    component: ShopView,
  },

  {
    path: '/shop-checkout',
    name: 'shop-checkout',
    component: ShopCheckout,
  },

  {
    path: '/shop-confirmation',
    name: 'shop-confirmation',
    component: ShopConfirmation,
  },

  {
    path: '/cart',
    name: 'cart',
    component: CartView,
  },

  {
    path: '/services',
    name: 'services',
    component: ServicesView,
  },

  {
    path: '/founder',
    name: 'founder',
    component: FounderView,
  },

  {
    path: '/presentation',
    name: 'presentation',
    component: PresentationView,
  },

  /* COLLABORATE */
  {
    path: '/collaborate',
    name: 'collaborate',
    component: CollaborateView,
  },

  /* MAKEUP & BEAUTY */
  {
    path: '/makeup',
    name: 'makeup',
    component: MakeupView,
  },

  /* MAKEUP MEDIA KIT */
  {
    path: '/makeup-media-kit',
    name: 'makeup-media-kit',
    component: MakeupMediaKit,
  },

  /* BLOG */
  {
    path: '/blog',
    name: 'blog',
    component: BlogView,
  },

  /* PARIS COLLECTION */
  {
    path: '/paris-edition',
    name: 'paris-edition',
    component: ParisEditionView,
  },

  {
    path: '/paris-demo',
    name: 'paris-demo',
    component: ParisDemoView,
  },

  {
    path: '/paris-gallery',
    name: 'paris-gallery',
    component: ParisGallery,
  },

  {
    path: '/paris-menu',
    name: 'paris-menu',
    component: ParisMenu,
  },

  {
    path: '/paris-visit',
    name: 'paris-visit',
    component: ParisVisit,
  },

  {
    path: '/paris-recipe-croissant',
    name: 'paris-recipe-croissant',
    component: ParisRecipeCroissant,
  },

  {
    path: '/paris-recipe-cookies',
    name: 'paris-recipe-cookies',
    component: ParisRecipeCookies,
  },

  {
    path: '/paris-recipe-cake',
    name: 'paris-recipe-cake',
    component: ParisRecipeCake,
  },

  {
    path: '/paris-recipe-brunch',
    name: 'paris-recipe-brunch',
    component: ParisRecipeBrunch,
  },

  {
    path: '/paris-about',
    name: 'paris-about',
    component: ParisAbout,
  },

  {
    path: '/paris-contact',
    name: 'paris-contact',
    component: ParisContact,
  },

  /* NOIR COLLECTION */
  {
    path: '/noir',
    name: 'noir-home',
    component: NoirHome,
  },

  {
    path: '/noir/about',
    name: 'noir-about',
    component: NoirAbout,
  },

  {
    path: '/noir/services',
    name: 'noir-services',
    component: NoirServices,
  },

  {
    path: '/noir/gallery',
    name: 'noir-gallery',
    component: NoirGallery,
  },

  {
    path: '/noir/contact',
    name: 'noir-contact',
    component: NoirContact,
  },

  /* LEGAL */
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: PrivacyPolicy,
  },

  {
    path: '/terms-conditions',
    name: 'terms-conditions',
    component: TermsConditions,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80,
      }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
