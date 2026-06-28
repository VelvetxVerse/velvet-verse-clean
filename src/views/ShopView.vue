<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import VelvetHeader from '../components/VelvetHeader.vue'
import VelvetFooter from '../components/VelvetFooter.vue'
import { useCart } from '../composables/useCart'

const { ADDONS, BASE_PRICE, total, toggleAddon, isSelected } = useCart()

const showCart = ref(false)

let savedTheme = null
onMounted(() => {
  savedTheme = document.documentElement.getAttribute('data-noir-theme')
  document.documentElement.removeAttribute('data-noir-theme')
  document.documentElement.style.setProperty('--bg', '#fff8f5')
  document.documentElement.style.setProperty('--text', '#2a2a2a')
})
onUnmounted(() => {
  document.documentElement.style.removeProperty('--bg')
  document.documentElement.style.removeProperty('--text')
  if (savedTheme) document.documentElement.setAttribute('data-noir-theme', savedTheme)
})
</script>

<template>
  <main class="shop-page">
    <VelvetHeader />

    <!-- ── HERO ── -->
    <section class="shop-hero">
      <p class="eyebrow">VELVET VERSE SHOP</p>
      <h1>Premade Website Collections  
For Modern Luxury Brands.</h1>
      <p class="shop-intro">Explore available website editions, curated add-ons,  
and purchase directly online.</p>
    </section>

    <!-- ── PARIS EDITION ── -->
    <section class="edition-section">
      <div class="edition-grid">
        <div class="edition-img">
          <img src="/cafeparis.jpg" alt="Paris Edition">
        </div>
        <div class="edition-copy">
          <p class="eyebrow">AVAILABLE NOW</p>
          <h2>Paris Edition</h2>
          <p class="edition-desc">A romantic, luxury-inspired premade website collection designed for cafés, bakeries, beauty brands, boutiques, influencers, and modern feminine businesses.</p>
          <span class="price-label">STARTING AT</span>
          <div class="price">${{ BASE_PRICE }}</div>
          <div class="shop-buttons">
            <router-link to="/paris-edition" class="shop-btn dark">VIEW DETAILS</router-link>
            <router-link to="/paris-demo" class="shop-btn outline">VIEW DEMO</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- ── ADD-ONS ── -->
    <section class="addons-section">
      <p class="eyebrow">SIGNATURE ENHANCEMENTS</p>
      <h2>Customize your Paris Edition with add-ons.</h2>
      <p class="addons-sub">Select any combination below — your total updates instantly.</p>

      <div class="addons-grid">
        <article
          v-for="addon in ADDONS"
          :key="addon.id"
          :class="['addon-card', { selected: isSelected(addon.id) }]"
          @click="toggleAddon(addon.id)"
        >
          <div class="addon-check" v-if="isSelected(addon.id)">✓</div>
          <span class="addon-icon">{{ addon.icon }}</span>
          <strong>+${{ addon.price }}</strong>
          <p>{{ addon.label }}</p>
        </article>
      </div>

      <!-- CART SUMMARY BAR -->
      <div class="cart-summary">
        <div class="cart-total">
          <span>YOUR TOTAL</span>
          <strong>${{ total }}</strong>
        </div>
        <button class="shop-btn dark" @click="showCart = true">
          PROCEED TO CHECKOUT →
        </button>
      </div>
    </section>

    <!-- ── COMING SOON ── -->
    <section class="coming-section">
      <p class="eyebrow">COMING SOON</p>
      <h2>More collections are being designed.</h2>
      <div class="coming-grid">
        <article>
          <img src="/paris-interior.png" alt="">
          <span>COMING SOON</span>
          <h3>Dubai Edition</h3>
        </article>
        <article>
          <img src="/santorini26.png" alt="">
          <span>COMING SOON</span>
          <h3>Santorini Escape</h3>
        </article>
        <article>
          <img src="/tokyo.jpg" alt="">
          <span>COMING SOON</span>
          <h3>Tokyo Muse</h3>
        </article>
        <article>
          <img src="/bangkok.jpg" alt="">
          <span>COMING SOON</span>
          <h3>Bangkok Nights</h3>
        </article>
      </div>
    </section>

 
