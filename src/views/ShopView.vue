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
      <h1>Premade Website Collections<br>For Modern Luxury Brands.</h1>
      <p class="shop-intro">Explore available website editions, curated add-ons,<br>and purchase directly online.</p>
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

    <VelvetFooter />

    <!-- CART DRAWER -->
    <transition name="drawer">
      <div v-if="showCart" class="cart-overlay" @click.self="showCart = false">
        <aside class="cart-drawer">
          <button class="close-btn" @click="showCart = false">×</button>
          <p class="drawer-eyebrow">YOUR ORDER</p>
          <h2 class="drawer-title">Paris Edition</h2>
          <div class="cart-line">
            <span>Paris Edition Base</span>
            <span>${{ BASE_PRICE }}</span>
          </div>
          <div
            v-for="addon in ADDONS.filter(a => isSelected(a.id))"
            :key="addon.id"
            class="cart-line addon"
          >
            <span>+ {{ addon.label }}</span>
            <span>${{ addon.price }}</span>
          </div>
          <div class="cart-divider"></div>
          <div class="cart-line total-line">
            <strong>Total</strong>
            <strong>${{ total }}</strong>
          </div>
          <router-link to="/shop-checkout" class="checkout-btn" @click="showCart = false">
            CONTINUE TO CHECKOUT
          </router-link>
          <button class="back-link" @click="showCart = false">← KEEP BROWSING</button>
        </aside>
      </div>
    </transition>
  </main>
</template>

<style scoped>
/* ── BASE ── */
.shop-page {
  min-height: 100vh;
  background: #fff8f5 !important;
  color: #2a2a2a;
  font-family: 'Cormorant Garamond', serif;
}

.eyebrow {
  margin: 0;
  color: #b9857b;
  font-family: sans-serif;
  font-size: 9px;
  letter-spacing: 5px;
  text-transform: uppercase;
  font-weight: 800;
}

/* ── HERO ── */
.shop-hero {
  text-align: center;
  padding: 60px 24px 50px;
  max-width: 820px;
  margin: 0 auto;
}

.shop-hero h1 {
  margin: 18px 0 18px;
  font-size: clamp(36px, 5vw, 64px);
  font-weight: 300;
  line-height: .95;
  color: #2a2a2a;
  text-transform: uppercase;
}

.shop-intro {
  font-family: sans-serif;
  font-size: 14px;
  line-height: 1.9;
  color: #655956;
  margin: 0;
}

/* ── EDITION SECTION ── */
.edition-section {
  max-width: 1160px;
  margin: 0 auto 60px;
  padding: 0 40px;
}

.edition-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  background: white;
  border: 1px solid #eadad6;
  border-radius: 28px;
  overflow: hidden;
}

.edition-img img {
  width: 100%;
  height: 480px;
  object-fit: cover;
  display: block;
}

.edition-copy {
  padding: 42px 42px 42px 0;
}

.edition-copy h2 {
  margin: 14px 0 18px;
  font-size: clamp(36px, 4vw, 58px);
  font-weight: 300;
  line-height: .95;
  color: #2a2a2a;
  text-transform: uppercase;
}

.edition-desc {
  font-family: sans-serif;
  font-size: 13px;
  line-height: 1.9;
  color: #655956;
  margin: 0 0 24px;
  max-width: 420px;
}

.price-label {
  display: block;
  margin-top: 8px;
  color: #b9857b;
  font-family: sans-serif;
  font-size: 9px;
  letter-spacing: 3px;
  font-weight: 800;
  text-transform: uppercase;
}

.price {
  margin: 6px 0 18px;
  color: #2a2a2a;
  font-size: clamp(64px, 8vw, 100px);
  line-height: .85;
  font-weight: 300;
}

.shop-buttons {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.shop-btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 160px;
  padding: 14px 24px;
  border-radius: 999px;
  text-decoration: none;
  font-family: sans-serif;
  font-size: 9px;
  letter-spacing: 2px;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  transition: .2s ease;
}

.shop-btn:hover { transform: translateY(-2px); }

.shop-btn.dark {
  background: #1b1717;
  color: white;
}

.shop-btn.outline {
  border: 1px solid #1b1717;
  color: #1b1717;
  background: transparent;
}

.shop-btn.outline:hover {
  background: #1b1717;
  color: white;
}

/* ── ADD-ONS ── */
.addons-section {
  background: #f3e8e4;
  padding: 60px 40px;
  text-align: center;
}

.addons-section h2 {
  margin: 14px auto 10px;
  max-width: 700px;
  font-size: clamp(28px, 3vw, 44px);
  font-weight: 300;
  line-height: .95;
  color: #2a2a2a;
}

.addons-sub {
  font-family: sans-serif;
  font-size: 13px;
  color: #655956;
  margin: 0 0 28px;
}

.addons-grid {
  max-width: 1100px;
  margin: 0 auto 28px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 14px;
}

.addon-card {
  position: relative;
  min-height: 128px;
  padding: 20px 12px;
  border: 1px solid #eadad6;
  border-radius: 18px;
  background: white;
  text-align: center;
  cursor: pointer;
  user-select: none;
  transition: .2s ease;
}

.addon-card:hover {
  border-color: #c8a49b;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0,0,0,.06);
}

.addon-card.selected {
  border-color: #1b1717;
  background: #fdf6f0;
}

.addon-check {
  position: absolute;
  top: 10px;
  right: 12px;
  font-size: 10px;
  color: #b9857b;
  font-weight: 800;
  font-family: sans-serif;
}

.addon-icon {
  display: block;
  font-size: 22px;
  margin-bottom: 10px;
}

.addon-card strong {
  display: block;
  color: #2a2a2a;
  font-size: 26px;
  font-weight: 300;
}

.addon-card p {
  margin: 8px 0 0;
  color: #655956;
  font-family: sans-serif;
  font-size: 10px;
  line-height: 1.45;
}

/* ── CART SUMMARY BAR ── */
.cart-summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
  border: 1px solid #eadad6;
  border-radius: 999px;
  padding: 18px 28px;
  background: white;
}

.cart-total {
  display: flex;
  align-items: center;
  gap: 16px;
}

.cart-total span {
  font-family: sans-serif;
  font-size: 9px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #b9857b;
  font-weight: 800;
}

.cart-total strong {
  font-size: 28px;
  font-weight: 300;
  color: #2a2a2a;
}

/* ── COMING SOON ── */
.coming-section {
  max-width: 1160px;
  margin: 0 auto;
  padding: 60px 40px 70px;
  text-align: center;
}

.coming-section h2 {
  margin: 14px 0 32px;
  font-size: clamp(28px, 3vw, 44px);
  font-weight: 300;
  color: #2a2a2a;
}

.coming-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.coming-grid article {
  overflow: hidden;
  border-radius: 18px;
  background: white;
  border: 1px solid #eadad6;
}

.coming-grid img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  filter: grayscale(100%);
  display: block;
}

.coming-grid span {
  display: block;
  font-family: sans-serif;
  font-size: 7px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #b9857b;
  font-weight: 800;
  margin: 14px 0 4px;
}

.coming-grid h3 {
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  margin: 0 0 16px;
  color: #2a2a2a;
}

/* ── CART DRAWER ── */
.cart-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.4);
  z-index: 200;
  display: flex;
  justify-content: flex-end;
}

.cart-drawer {
  width: 420px;
  max-width: 95vw;
  height: 100%;
  background: #fff8f5;
  border-left: 1px solid #eadad6;
  padding: 50px 36px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.drawer-eyebrow {
  margin: 0;
  color: #b9857b;
  font-family: sans-serif;
  font-size: 9px;
  letter-spacing: 5px;
  text-transform: uppercase;
  font-weight: 800;
}

.drawer-title {
  font-size: 42px;
  font-weight: 300;
  font-style: italic;
  margin: 10px 0 28px;
  color: #2a2a2a;
}

.close-btn {
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #2a2a2a;
  margin-bottom: 10px;
  line-height: 1;
}

.cart-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: sans-serif;
  font-size: 12px;
  color: #655956;
  padding: 10px 0;
  border-bottom: 1px solid #eadad6;
}

.cart-line.addon {
  font-size: 11px;
  color: #b9857b;
}

.cart-divider {
  height: 1px;
  background: #eadad6;
  margin: 10px 0;
}

.cart-line.total-line {
  font-size: 16px;
  color: #2a2a2a;
  border-bottom: none;
  padding: 14px 0;
}

.checkout-btn {
  display: block;
  text-align: center;
  text-decoration: none;
  background: #1b1717;
  color: white;
  padding: 16px 22px;
  border-radius: 999px;
  font-family: sans-serif;
  font-size: 9px;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 800;
  margin-top: 24px;
  transition: .2s ease;
}

.checkout-btn:hover { transform: translateY(-2px); opacity: .9; }

.back-link {
  background: none;
  border: none;
  cursor: pointer;
  font-family: sans-serif;
  font-size: 8px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #b9857b;
  font-weight: 800;
  margin-top: 14px;
  text-align: center;
  transition: .2s ease;
}

.back-link:hover { color: #2a2a2a; }

/* ── DRAWER TRANSITION ── */
.drawer-enter-active,
.drawer-leave-active { transition: opacity .25s ease; }
.drawer-enter-active .cart-drawer,
.drawer-leave-active .cart-drawer { transition: transform .3s cubic-bezier(0.23, 1, 0.32, 1); }
.drawer-enter-from,
.drawer-leave-to { opacity: 0; }
.drawer-enter-from .cart-drawer,
.drawer-leave-to .cart-drawer { transform: translateX(100%); }

/* ── RESPONSIVE ── */
@media (max-width: 1000px) {
  .edition-grid { grid-template-columns: 1fr; }
  .edition-copy { padding: 28px 24px; }
  .addons-grid { grid-template-columns: repeat(3, 1fr); }
  .coming-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .addons-section,
  .edition-section,
  .coming-section { padding-left: 20px; padding-right: 20px; }
  .addons-grid { grid-template-columns: repeat(2, 1fr); }
  .cart-summary {
    flex-direction: column;
    gap: 16px;
    border-radius: 20px;
    text-align: center;
    padding: 20px;
  }
  .coming-grid { grid-template-columns: 1fr 1fr; }
}
</style>
