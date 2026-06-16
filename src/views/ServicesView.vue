<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import VelvetHeader from '../components/VelvetHeader.vue'
import VelvetFooter from '../components/VelvetFooter.vue'
import { useGlobalCart, SERVICES } from '../composables/useGlobalCart'

const router = useRouter()
const { cartCount, isInCart, addService } = useGlobalCart()

const showInquiry = ref(false)
const selectedService = ref('')

function handleServiceClick(svc) {
  if (svc.price === null) {
    openInquiry(svc.tag)
    return
  }
  addService(svc)
  router.push('/cart')
}

function openInquiry(service) {
  selectedService.value = service
  showInquiry.value = true
}

function closeInquiry() {
  showInquiry.value = false
}

// ── THEME OVERRIDE ─────────────────────────────────────────
let savedTheme = null
onMounted(() => {
  savedTheme = document.documentElement.getAttribute('data-noir-theme')
  document.documentElement.removeAttribute('data-noir-theme')
  document.documentElement.style.setProperty('--bg', '#fff8f5')
  document.documentElement.style.setProperty('--text', '#2a2a2a')
  document.documentElement.style.setProperty('--surface', '#f8efeb')
})
onUnmounted(() => {
  document.documentElement.style.removeProperty('--bg')
  document.documentElement.style.removeProperty('--text')
  document.documentElement.style.removeProperty('--surface')
  if (savedTheme) document.documentElement.setAttribute('data-noir-theme', savedTheme)
})
</script>

<template>
  <main class="services-page" style="background:#fff8f5 !important;color:#2a2a2a !important;">

    <VelvetHeader />

    <!-- Cart badge floating button -->
    <button v-if="cartCount > 0" class="cart-fab" @click="$router.push('/cart')">
      🛒 <span class="cart-badge">{{ cartCount }}</span>
    </button>

    <!-- ── HERO ── -->
    <section class="services-hero">
      <p class="eyebrow">VELVET VERSE SERVICES</p>
      <h1>Luxury digital experiences<br>for modern brands &amp; creators.</h1>
      <p class="hero-text">
        Velvet Verse blends elegant web design,
        visual storytelling, influencer strategy,
        and curated branding to help businesses
        build a polished online presence.
      </p>
    </section>

    <!-- ── SERVICE CARDS ── -->
    <section class="main-services">

      <!-- Purchasable services -->
      <article
        v-for="svc in SERVICES"
        :key="svc.id"
        :class="['service-card', { featured: svc.featured }]"
      >
        <p class="mini-label">{{ svc.tag }}</p>
        <h2>{{ svc.title }}</h2>
        <p>{{ svc.desc }}</p>
        <div class="service-price">Starting at ${{ svc.price }}</div>
        <button class="add-cart-btn" @click="handleServiceClick(svc)">
          {{ isInCart(svc.id) ? 'In Cart ✓' : 'Add to Cart' }}
        </button>
      </article>

      <!-- Bespoke — inquiry only -->
      <article class="service-card">
        <p class="mini-label">BESPOKE ENHANCEMENTS</p>
        <h2>Elegant refinements &amp; custom features.</h2>
        <p>Need additional sections, animations, custom pages, mobile refinements, or unique design details? Velvet Verse offers elevated custom upgrades.</p>
        <div class="service-price">Custom Quote</div>
        <button class="add-cart-btn outline" @click="openInquiry('Bespoke Enhancements')">Request Details</button>
      </article>

    </section>

    <!-- ── RUSH UPGRADE ── -->
    <section class="rush-section">
      <div class="rush-left">
        <p class="eyebrow">RUSH LAUNCH UPGRADE</p>
        <h2>Need your website sooner?</h2>
        <p>Upgrade any installation order to a 2-day priority turnaround for a faster luxury launch.</p>
      </div>
      <div class="rush-right">
        <div class="rush-price">$129</div>
        <button class="add-cart-btn" @click="$router.push('/cart')">Upgrade My Launch</button>
      </div>
    </section>

    <!-- ── CREATOR SECTION ── -->
    <section class="creator-section">
      <p class="eyebrow">CREATOR SERVICES</p>
      <h2>Strategy, storytelling,<br>and digital presence for creators.</h2>

      <div class="creator-card">
        <div class="creator-left">
          <p class="mini-label-light">THE CREATOR BLUEPRINT</p>
          <h3>Built for influencers,<br>creators, and personal brands.</h3>
          <p>A luxury-inspired strategy experience designed for creators ready to elevate their content, collaborations, audience growth, and digital presence.</p>
          <div class="creator-stats">
            <div><strong>1M+</strong><span>Followers</span></div>
            <div><strong>8M+</strong><span>Monthly Views</span></div>
            <div><strong>Luxury</strong><span>Brand Experience</span></div>
          </div>
        </div>

        <div class="creator-right">
          <article>
            <span>01</span>
            <h4>Brand Pitch Vault</h4>
            <p>Luxury pitch templates, outreach strategies, media kit guidance, and negotiation direction.</p>
          </article>
          <article>
            <span>02</span>
            <h4>Content Positioning</h4>
            <p>Learn how to create elevated content and visual storytelling that attracts premium collaborations.</p>
          </article>
          <article>
            <span>03</span>
            <h4>Platform Strategy</h4>
            <p>Guidance for influencer platforms, affiliate programs, growth strategy, and creator opportunities.</p>
          </article>
          <article>
            <span>04</span>
            <h4>Digital Presence</h4>
            <p>Combine Velvet Verse web design with creator branding for a polished online identity.</p>
          </article>
        </div>
      </div>
    </section>

    <!-- ── SOCIAL EDIT ── -->
    <section class="social-section">
      <p class="eyebrow">COMING SOON</p>
      <h2>The Social Edit</h2>
      <p>Luxury-inspired social media management designed to help modern brands maintain a cohesive and elevated digital presence across web and social platforms.</p>
    </section>

    <!-- ── FAQ ── -->
    <section class="faq-section">
      <p class="eyebrow">SERVICE FAQ</p>
      <h2>Questions before booking?</h2>
      <div class="faq-list">
        <details open>
          <summary>What businesses do you work with?</summary>
          <p>Velvet Verse works with boutiques, beauty brands, cafés, influencers, creators, and modern luxury businesses.</p>
        </details>
        <details>
          <summary>Do you offer customizations?</summary>
          <p>Yes. Additional pages, custom branding, animations, and refinements are available.</p>
        </details>
        <details>
          <summary>How long does setup take?</summary>
          <p>Timelines vary by package, but rush upgrades are available.</p>
        </details>
        <details>
          <summary>Is everything mobile responsive?</summary>
          <p>Yes. Every Velvet Verse experience is designed responsively for mobile, tablet, and desktop.</p>
        </details>
      </div>
    </section>

    <!-- ── CONTACT ── -->
    <section class="contact-section">
      <p class="eyebrow">READY TO BEGIN?</p>
      <h2>Let's create something beautiful.</h2>
      <a href="mailto:VelvetVerse@velvetxverse.com">VelvetVerse@velvetxverse.com</a>
    </section>

    <VelvetFooter />

    <!-- ── INQUIRY MODAL ── -->
    <div v-if="showInquiry" class="modal-overlay">
      <div class="modal-box">
        <button class="close-btn" @click="closeInquiry">×</button>
        <p class="eyebrow">SERVICE INQUIRY</p>
        <h2>{{ selectedService }}</h2>
        <p>Please email Velvet Verse with your name, business, preferred service, and a short description of what you need.</p>
        <a href="mailto:VelvetVerse@velvetxverse.com">VelvetVerse@velvetxverse.com</a>
      </div>
    </div>

  </main>
</template>

<style scoped>
/* ── BASE ── */
.services-page {
  min-height: 100vh;
  background: #fff8f5 !important;
  color: #2a2a2a;
  font-family: 'Cormorant Garamond', serif;
}

.eyebrow {
  margin: 0;
  font-family: sans-serif;
  font-size: 8px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: #b9857b;
  font-weight: 800;
}

.mini-label {
  margin: 0 0 4px;
  font-family: sans-serif;
  font-size: 8px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #b9857b;
  font-weight: 800;
}

.mini-label-light {
  margin: 0 0 4px;
  font-family: sans-serif;
  font-size: 8px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #d8b4aa;
  font-weight: 800;
}

/* ── CART FAB ── */
.cart-fab {
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 999;
  background: #1b1717;
  color: white;
  border: none;
  border-radius: 999px;
  padding: 14px 22px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(0,0,0,.2);
  display: flex;
  align-items: center;
  gap: 8px;
  transition: .2s ease;
}

.cart-fab:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(0,0,0,.25);
}

.cart-badge {
  background: #c8a49b;
  color: white;
  border-radius: 999px;
  font-family: sans-serif;
  font-size: 10px;
  font-weight: 800;
  padding: 2px 7px;
  line-height: 1.4;
}

/* ── HERO ── */
.services-hero {
  max-width: 900px;
  margin: 0 auto;
  padding: 50px 24px 36px;
  text-align: center;
}

.services-hero h1 {
  margin: 14px auto 18px;
  font-size: clamp(34px, 4vw, 58px);
  line-height: .95;
  font-weight: 300;
  color: #2a2a2a;
}

.hero-text {
  max-width: 640px;
  margin: 0 auto;
  font-family: sans-serif;
  font-size: 12px;
  line-height: 1.9;
  color: #655956;
}

/* ── SERVICE CARDS ── */
.main-services {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 50px 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.service-card {
  background: white;
  border: 1px solid #eadad6;
  border-radius: 24px;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
}

.service-card.featured {
  background: #1b1717;
  color: white;
  border-color: #1b1717;
}

.service-card.featured .mini-label {
  color: #d8b4aa;
}

.service-card.featured > p {
  color: #e6ddda;
}

.service-card h2 {
  margin: 14px 0;
  font-size: 26px;
  line-height: .95;
  font-weight: 300;
  color: inherit;
}

.service-card > p {
  font-family: sans-serif;
  font-size: 11px;
  line-height: 1.9;
  color: #655956;
  flex: 1;
}

.service-price {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #eadad6;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 300;
  color: inherit;
}

.service-card.featured .service-price {
  border-color: rgba(255,255,255,.15);
}

.add-cart-btn {
  margin-top: 14px;
  padding: 12px 16px;
  border: none;
  border-radius: 999px;
  background: #1b1717;
  color: white;
  font-family: sans-serif;
  font-size: 8px;
  letter-spacing: 2px;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
  transition: .2s ease;
}

.add-cart-btn:hover {
  opacity: .85;
  transform: translateY(-1px);
}

.add-cart-btn.outline {
  background: transparent;
  border: 1px solid #1b1717;
  color: #1b1717;
}

.service-card.featured .add-cart-btn {
  background: #f3d0c7;
  color: #1b1717;
}

/* ── RUSH ── */
.rush-section {
  max-width: 1180px;
  margin: 0 auto 50px;
  padding: 28px 34px;
  background: #f8efeb;
  border: 1px solid #eadad6;
  border-radius: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}

.rush-left h2 {
  margin: 10px 0;
  font-size: 34px;
  line-height: 1;
  font-weight: 300;
  color: #2a2a2a;
}

.rush-left p {
  font-family: sans-serif;
  font-size: 12px;
  line-height: 1.8;
  color: #655956;
}

.rush-price {
  font-size: 54px;
  line-height: 1;
  font-weight: 300;
  color: #2a2a2a;
}

.rush-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
}

/* ── CREATOR ── */
.creator-section {
  padding: 46px 24px;
  text-align: center;
}

.creator-section h2 {
  max-width: 700px;
  margin: 14px auto 34px;
  font-size: clamp(28px, 3vw, 44px);
  line-height: .95;
  font-weight: 300;
  color: #2a2a2a;
}

.creator-card {
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: .9fr 1.1fr;
  gap: 20px;
  text-align: left;
}

.creator-left {
  background: #1b1717;
  color: white;
  border-radius: 24px;
  padding: 30px;
}

.creator-left h3 {
  margin: 16px 0 18px;
  font-size: 32px;
  line-height: .95;
  font-weight: 300;
}

.creator-left p {
  font-family: sans-serif;
  font-size: 12px;
  line-height: 1.9;
  color: #ebe3df;
}

.creator-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 24px;
}

.creator-stats div {
  border: 1px solid rgba(255,255,255,.15);
  border-radius: 16px;
  padding: 14px 10px;
  text-align: center;
}

.creator-stats strong {
  display: block;
  font-size: 20px;
  font-weight: 300;
}

.creator-stats span {
  font-family: sans-serif;
  font-size: 8px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #d8b4aa;
}

.creator-right {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.creator-right article {
  background: white;
  border: 1px solid #eadad6;
  border-radius: 18px;
  padding: 22px;
}

.creator-right span {
  font-family: sans-serif;
  font-size: 8px;
  letter-spacing: 4px;
  color: #b9857b;
  font-weight: 800;
}

.creator-right h4 {
  margin: 14px 0 12px;
  font-size: 22px;
  line-height: 1;
  font-weight: 300;
  color: #2a2a2a;
}

.creator-right p {
  font-family: sans-serif;
  font-size: 12px;
  line-height: 1.8;
  color: #655956;
}

/* ── SOCIAL ── */
.social-section {
  padding: 20px 24px 50px;
  text-align: center;
}

.social-section h2 {
  margin: 14px 0;
  font-size: 38px;
  line-height: 1;
  font-weight: 300;
  color: #2a2a2a;
}

.social-section p {
  max-width: 620px;
  margin: 0 auto;
  font-family: sans-serif;
  font-size: 12px;
  line-height: 1.9;
  color: #655956;
}

/* ── FAQ ── */
.faq-section {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 24px 50px;
  text-align: center;
}

.faq-section h2 {
  margin: 12px 0 28px;
  font-size: 36px;
  line-height: 1;
  font-weight: 300;
  color: #2a2a2a;
}

.faq-list { text-align: left; }

details {
  background: white;
  border: 1px solid #eadad6;
  border-radius: 16px;
  padding: 18px 20px;
  margin-bottom: 12px;
}

summary {
  cursor: pointer;
  font-family: sans-serif;
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 800;
  color: #2a2a2a;
}

details p {
  margin-top: 14px;
  font-family: sans-serif;
  font-size: 12px;
  line-height: 1.8;
  color: #655956;
}

/* ── CONTACT ── */
.contact-section {
  padding: 0 24px 60px;
  text-align: center;
}

.contact-section h2 {
  margin: 14px 0 18px;
  font-size: 42px;
  line-height: 1;
  font-weight: 300;
  color: #2a2a2a;
}

.contact-section a {
  color: #1b1717;
  font-family: sans-serif;
  font-size: 11px;
  letter-spacing: 2px;
  font-weight: 800;
  text-decoration: none;
}

/* ── MODAL ── */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(20, 16, 16, .65);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 24px;
}

.modal-box {
  width: 100%;
  max-width: 520px;
  background: #fff8f5;
  border: 1px solid #eadad6;
  border-radius: 28px;
  padding: 42px;
  text-align: center;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 16px;
  right: 18px;
  border: none;
  background: none;
  font-size: 30px;
  cursor: pointer;
  color: #2a2a2a;
}

.modal-box h2 {
  font-size: 36px;
  font-weight: 300;
  margin: 14px 0;
  color: #2a2a2a;
}

.modal-box p {
  font-family: sans-serif;
  font-size: 12px;
  line-height: 1.8;
  color: #655956;
}

.modal-box a {
  display: inline-block;
  margin-top: 18px;
  color: #1b1717;
  font-family: sans-serif;
  font-size: 11px;
  letter-spacing: 2px;
  font-weight: 800;
}

/* ── MOBILE ── */
@media (max-width: 1000px) {
  .main-services {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 24px 40px;
  }
}

@media (max-width: 700px) {
  .main-services,
  .creator-card,
  .creator-right,
  .creator-stats {
    grid-template-columns: 1fr;
  }

  .rush-section {
    flex-direction: column;
    text-align: center;
  }

  .rush-right {
    align-items: center;
  }
}
</style>
