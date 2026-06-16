<script setup>
import { onMounted, onUnmounted } from 'vue'
import VelvetHeader from '../components/VelvetHeader.vue'
import VelvetFooter from '../components/VelvetFooter.vue'
import { useGlobalCart } from '../composables/useGlobalCart'

const { clearCart } = useGlobalCart()

let savedTheme = null

onMounted(() => {
  clearCart()
  savedTheme = document.documentElement.getAttribute('data-noir-theme')
  document.documentElement.removeAttribute('data-noir-theme')
  document.documentElement.style.setProperty('--bg', '#fff8f5')
  document.documentElement.style.setProperty('--text', '#2a2a2a')
})

onUnmounted(() => {
  document.documentElement.style.removeProperty('--bg')
  document.documentElement.style.removeProperty('--text')
  if (savedTheme) {
    document.documentElement.setAttribute('data-noir-theme', savedTheme)
  }
})
</script>

<template>
  <main class="confirm-page" style="background:#fff8f5 !important; color:#2a2a2a !important;">
    <VelvetHeader />

    <!-- ── HERO ── -->
    <section class="confirm-hero">
      <p class="eyebrow">ORDER CONFIRMED</p>
      <div class="divider-line"><span>✦</span></div>
      <h1>Thank you for your purchase.</h1>
      <p class="sub">Your order has been received. You will receive a confirmation email shortly with your order details and next steps.</p>
    </section>

    <!-- ── WHAT HAPPENS NEXT ── -->
    <section class="next-section">
      <p class="eyebrow">WHAT HAPPENS NEXT</p>
      <h2>Your luxury website journey begins now.</h2>

      <div class="steps-grid">
        <div class="step-card">
          <div class="step-num">01</div>
          <h3>Check Your Email</h3>
          <p>A confirmation email with your order summary has been sent to your inbox.</p>
        </div>
        <div class="step-card">
          <div class="step-num">02</div>
          <h3>We'll Be in Touch</h3>
          <p>The Velvet Verse team will reach out within 24–48 hours to begin your onboarding.</p>
        </div>
        <div class="step-card">
          <div class="step-num">03</div>
          <h3>Share Your Details</h3>
          <p>Prepare your logo, brand colors, images, and any content you'd like included.</p>
        </div>
        <div class="step-card">
          <div class="step-num">04</div>
          <h3>Review &amp; Launch</h3>
          <p>Preview your refined website before it goes live. Your dream site is almost ready.</p>
        </div>
      </div>
    </section>

    <!-- ── CTA ── -->
    <section class="cta-section">
      <h2>Questions about your order?</h2>
      <p>Reach out anytime — Velvet Verse is here to help.</p>
      <div class="cta-buttons">
        <a href="mailto:VelvetVerse@velvetxverse.com" class="btn-dark">Contact Us</a>
        <router-link to="/shop" class="btn-outline">Back to Shop</router-link>
        <router-link to="/" class="btn-outline">Go to Home</router-link>
      </div>
    </section>

    <VelvetFooter />
  </main>
</template>

<style scoped>
/* ── BASE ── */
.confirm-page {
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

/* ── HERO ── */
.confirm-hero {
  max-width: 820px;
  margin: 0 auto;
  padding: 60px 24px 50px;
  text-align: center;
}

.divider-line {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin: 18px 0;
  color: #c8a49b;
  font-size: 18px;
}

.divider-line::before,
.divider-line::after {
  content: '';
  flex: 1;
  max-width: 160px;
  height: 1px;
  background: #eadad6;
}

.confirm-hero h1 {
  margin: 0 0 18px;
  font-size: clamp(36px, 5vw, 64px);
  font-weight: 300;
  line-height: .95;
  color: #2a2a2a;
}

.sub {
  max-width: 580px;
  margin: 0 auto;
  font-family: sans-serif;
  font-size: 13px;
  line-height: 1.9;
  color: #655956;
}

/* ── NEXT SECTION ── */
.next-section {
  background: #f3e8e4;
  padding: 54px 24px;
  text-align: center;
}

.next-section h2 {
  margin: 14px auto 40px;
  max-width: 700px;
  font-size: clamp(28px, 3vw, 46px);
  font-weight: 300;
  line-height: .95;
  color: #2a2a2a;
}

.steps-grid {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.step-card {
  background: white;
  border: 1px solid #eadad6;
  border-radius: 22px;
  padding: 28px 22px;
  text-align: left;
}

.step-num {
  font-family: sans-serif;
  font-size: 8px;
  letter-spacing: 4px;
  color: #b9857b;
  font-weight: 800;
  margin-bottom: 14px;
}

.step-card h3 {
  margin: 0 0 12px;
  font-size: 22px;
  font-weight: 300;
  color: #2a2a2a;
  line-height: 1;
}

.step-card p {
  font-family: sans-serif;
  font-size: 12px;
  line-height: 1.8;
  color: #655956;
  margin: 0;
}

/* ── CTA ── */
.cta-section {
  max-width: 700px;
  margin: 0 auto;
  padding: 60px 24px 70px;
  text-align: center;
}

.cta-section h2 {
  margin: 0 0 14px;
  font-size: clamp(28px, 3vw, 44px);
  font-weight: 300;
  color: #2a2a2a;
}

.cta-section p {
  font-family: sans-serif;
  font-size: 13px;
  line-height: 1.8;
  color: #655956;
  margin-bottom: 28px;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
}

.btn-dark {
  padding: 14px 30px;
  border-radius: 999px;
  background: #1b1717;
  color: white;
  font-family: sans-serif;
  font-size: 9px;
  letter-spacing: 2px;
  font-weight: 800;
  text-transform: uppercase;
  text-decoration: none;
  transition: .2s ease;
  cursor: pointer;
}

.btn-dark:hover {
  opacity: .85;
  transform: translateY(-1px);
}

.btn-outline {
  display: inline-block;
  padding: 14px 30px;
  border-radius: 999px;
  border: 1px solid #1b1717;
  background: transparent;
  color: #1b1717;
  font-family: sans-serif;
  font-size: 9px;
  letter-spacing: 2px;
  font-weight: 800;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: .2s ease;
}

.btn-outline:hover {
  background: #1b1717;
  color: white;
}

/* ── MOBILE ── */
@media (max-width: 900px) {
  .steps-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 500px) {
  .steps-grid {
    grid-template-columns: 1fr;
  }
}
</style>
