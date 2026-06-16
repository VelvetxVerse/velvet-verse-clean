<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import VelvetHeader from '../components/VelvetHeader.vue'
import VelvetFooter from '../components/VelvetFooter.vue'
import { useGlobalCart } from '../composables/useGlobalCart'

const { cartItems, total, subtotal, couponCode, couponApplied, couponDiscount, applyCoupon, clearCart } = useGlobalCart()

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

const name = ref('')
const email = ref('')
const business = ref('')
const loading = ref(false)
const error = ref('')

const BACKEND_URL = 'https://velvetshop-sbyxd4r8.manus.space'

const serviceItem = computed(() => cartItems.value.find(i => i.type === 'service'))
const addonItems = computed(() => cartItems.value.filter(i => i.type === 'addon'))

async function handleCheckout() {
  if (!name.value || !email.value) {
    error.value = 'Please enter your name and email to continue.'
    return
  }
  if (!serviceItem.value) {
    error.value = 'No product in cart. Please go back and select a package.'
    return
  }
  loading.value = true
  error.value = ''
  try {
    const addons = addonItems.value.map(a => ({
      id: a.id,
      name: a.label,
      price: a.price,
      icon: a.icon || '',
    }))
    const response = await fetch(`${BACKEND_URL}/api/trpc/orders.create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        json: {
          customerName: name.value,
          customerEmail: email.value,
          productId: serviceItem.value.id,
          productName: serviceItem.value.label || serviceItem.value.tag,
          basePrice: serviceItem.value.price,
          addons,
          totalAmount: total.value,
          paymentMethod: 'stripe',
          notes: business.value ? `Business: ${business.value}` : '',
        }
      })
    })
    const data = await response.json()
    const checkoutUrl = data?.result?.data?.json?.checkoutUrl
    if (checkoutUrl) {
      window.location.href = checkoutUrl
    } else {
      console.error('Checkout response:', data)
      error.value = 'Something went wrong. Please try again or contact us.'
    }
  } catch (e) {
    console.error('Checkout error:', e)
    error.value = 'Unable to connect to checkout. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <main class="checkout-page">
    <VelvetHeader />

    <section class="checkout-hero">
      <p class="eyebrow">SECURE CHECKOUT</p>
      <h1>Complete Your Order</h1>
      <p class="hero-sub">You're one step away from your luxury website collection.</p>
    </section>

    <section class="checkout-body">

      <!-- ORDER SUMMARY -->
      <div class="order-summary">
        <p class="eyebrow">ORDER SUMMARY</p>
        <h2>{{ serviceItem?.tag || 'Paris Edition' }}</h2>

        <div class="summary-line" v-if="serviceItem">
          <span>{{ serviceItem.label }}</span>
          <span>${{ serviceItem.price }}</span>
        </div>

        <div
          v-for="addon in addonItems"
          :key="addon.id"
          class="summary-line addon"
        >
          <span>{{ addon.icon }} {{ addon.label }}</span>
          <span>${{ addon.price }}</span>
        </div>

        <div class="summary-divider"></div>

        <div v-if="couponApplied" class="summary-line coupon">
          <span>Coupon ({{ couponCode.toUpperCase() }})</span>
          <span>-${{ couponDiscount }}</span>
        </div>

        <div class="summary-line total">
          <strong>Total</strong>
          <strong>${{ total }}</strong>
        </div>

        <div class="secure-note">
          <span>🔒</span>
          <p>Payments are processed securely via Stripe. Your card details are never stored.</p>
        </div>
      </div>

      <!-- CHECKOUT FORM -->
      <div class="checkout-form-wrap">
        <p class="eyebrow">YOUR DETAILS</p>
        <h2>Tell us about yourself</h2>

        <div class="form-field">
          <label>Full Name *</label>
          <input v-model="name" type="text" placeholder="Your full name">
        </div>

        <div class="form-field">
          <label>Email Address *</label>
          <input v-model="email" type="email" placeholder="your@email.com">
        </div>

        <div class="form-field">
          <label>Business Name <span class="optional">(optional)</span></label>
          <input v-model="business" type="text" placeholder="Your business or brand name">
        </div>

        <p v-if="error" class="error-msg">{{ error }}</p>

        <button class="checkout-btn" :disabled="loading" @click="handleCheckout">
          <span v-if="loading">Redirecting to Stripe…</span>
          <span v-else>PAY ${{ total }} SECURELY →</span>
        </button>

        <p class="back-note">
          <router-link to="/cart">← BACK TO CART</router-link>
        </p>
      </div>

    </section>

    <VelvetFooter />
  </main>
</template>

<style scoped>
.checkout-page {
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

.checkout-hero {
  text-align: center;
  padding: 54px 24px 40px;
  max-width: 700px;
  margin: 0 auto;
}

.checkout-hero h1 {
  font-size: clamp(36px, 4vw, 58px);
  font-weight: 300;
  line-height: .95;
  margin: 16px 0 14px;
  color: #2a2a2a;
  text-transform: uppercase;
}

.hero-sub {
  font-family: sans-serif;
  font-size: 14px;
  line-height: 1.8;
  color: #655956;
  margin: 0;
}

.checkout-body {
  max-width: 1000px;
  margin: 0 auto 70px;
  padding: 0 40px;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 28px;
  align-items: start;
}

.order-summary {
  background: white;
  border: 1px solid #eadad6;
  border-radius: 24px;
  padding: 32px 28px;
}

.order-summary h2 {
  font-size: 36px;
  font-weight: 300;
  font-style: italic;
  margin: 12px 0 24px;
  color: #2a2a2a;
}

.summary-line {
  display: flex;
  justify-content: space-between;
  font-family: sans-serif;
  font-size: 12px;
  color: #655956;
  padding: 9px 0;
  border-bottom: 1px solid #eadad6;
}

.summary-line.addon {
  color: #b9857b;
  font-size: 11px;
}

.summary-line.coupon {
  color: #6aaa64;
  font-size: 11px;
}

.summary-divider {
  height: 1px;
  background: #eadad6;
  margin: 10px 0;
}

.summary-line.total {
  font-size: 16px;
  color: #2a2a2a;
  border-bottom: none;
  padding: 14px 0 0;
}

.secure-note {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 22px;
  background: #f3e8e4;
  border-radius: 12px;
  padding: 14px 16px;
}

.secure-note p {
  font-family: sans-serif;
  font-size: 11px;
  line-height: 1.7;
  color: #655956;
  margin: 0;
}

.checkout-form-wrap {
  background: white;
  border: 1px solid #eadad6;
  border-radius: 24px;
  padding: 32px 28px;
}

.checkout-form-wrap h2 {
  font-size: 32px;
  font-weight: 300;
  margin: 12px 0 28px;
  color: #2a2a2a;
}

.form-field {
  margin-bottom: 18px;
}

.form-field label {
  display: block;
  font-family: sans-serif;
  font-size: 8px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #b9857b;
  font-weight: 800;
  margin-bottom: 8px;
}

.optional {
  color: #c4a090;
  text-transform: none;
  letter-spacing: 0;
  font-size: 9px;
}

.form-field input {
  width: 100%;
  border: 1px solid #eadad6;
  border-radius: 12px;
  padding: 14px 16px;
  font-family: sans-serif;
  font-size: 13px;
  color: #2a2a2a;
  background: #fff8f5;
  outline: none;
  box-sizing: border-box;
  transition: border-color .2s;
}

.form-field input:focus {
  border-color: #c8a49b;
}

.error-msg {
  font-family: sans-serif;
  font-size: 11px;
  color: #c0392b;
  margin-bottom: 14px;
}

.checkout-btn {
  width: 100%;
  background: #1b1717;
  color: white;
  border: none;
  border-radius: 999px;
  padding: 18px 22px;
  font-family: sans-serif;
  font-size: 9px;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 800;
  cursor: pointer;
  transition: .2s ease;
  margin-top: 6px;
}

.checkout-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  opacity: .9;
}

.checkout-btn:disabled {
  opacity: .6;
  cursor: not-allowed;
}

.back-note {
  text-align: center;
  margin-top: 16px;
}

.back-note a {
  font-family: sans-serif;
  font-size: 8px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #b9857b;
  font-weight: 800;
  text-decoration: none;
}

.back-note a:hover { color: #2a2a2a; }

@media (max-width: 900px) {
  .checkout-body {
    grid-template-columns: 1fr;
    padding: 0 24px;
  }
}

@media (max-width: 600px) {
  .checkout-body { padding: 0 16px; }
}
</style>
