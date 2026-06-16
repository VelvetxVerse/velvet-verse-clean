<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import VelvetHeader from '../components/VelvetHeader.vue'
import VelvetFooter from '../components/VelvetFooter.vue'
import { useGlobalCart, ADDONS } from '../composables/useGlobalCart'

const router = useRouter()
const {
  cartItems, cartCount, subtotal, total,
  couponCode, couponApplied, couponDiscount,
  isInCart, addAddon, removeItem, applyCoupon,
} = useGlobalCart()

// ── THEME OVERRIDE ─────────────────────────────────────────
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

function goCheckout() {
  router.push('/shop-checkout')
}
</script>

<template>
  <main class="cart-page" style="background:#fff8f5 !important;color:#2a2a2a !important;">
    <VelvetHeader />

    <!-- ── HERO BANNER ── -->
    <section class="cart-hero">
      <h1>Your Cart</h1>
    </section>

    <!-- ── EMPTY STATE ── -->
    <div v-if="cartItems.length === 0" class="empty-cart">
      <p class="empty-icon">🛒</p>
      <h2>Your cart is empty</h2>
      <p>Add a service or add-on to get started.</p>
      <button @click="$router.push('/services')">Browse Services →</button>
    </div>

    <!-- ── CART CONTENT ── -->
    <div v-else class="cart-layout">

      <!-- LEFT: Cart Table -->
      <div class="cart-table-wrap">
        <table class="cart-table">
          <thead>
            <tr>
              <th></th>
              <th>PRODUCT</th>
              <th>PRICE</th>
              <th>SUBTOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cartItems" :key="item.id">
              <td>
                <button class="remove-btn" @click="removeItem(item.id)">×</button>
              </td>
              <td class="product-cell">
                <div class="product-icon">{{ item.icon || '✦' }}</div>
                <div>
                  <div class="product-tag">{{ item.tag || 'ADD-ON' }}</div>
                  <div class="product-name">{{ item.label }}</div>
                </div>
              </td>
              <td class="price-cell">${{ item.price.toFixed(2) }}</td>
              <td class="price-cell">${{ item.price.toFixed(2) }}</td>
            </tr>
          </tbody>
        </table>

        <!-- Coupon -->
        <div class="coupon-row">
          <input
            v-model="couponCode"
            type="text"
            placeholder="Coupon code"
            class="coupon-input"
            :disabled="couponApplied"
          />
          <button class="coupon-btn" @click="applyCoupon" :disabled="couponApplied">
            {{ couponApplied ? 'APPLIED ✓' : 'APPLY COUPON' }}
          </button>
        </div>
        <p v-if="couponApplied" class="coupon-success">Coupon VELVET10 applied — 10% off!</p>
      </div>

      <!-- RIGHT: Totals -->
      <aside class="cart-totals">
        <h3>CART TOTALS</h3>
        <div class="totals-row">
          <span>Subtotal</span>
          <span>${{ subtotal.toFixed(2) }}</span>
        </div>
        <div v-if="couponApplied" class="totals-row discount">
          <span>Discount</span>
          <span>−${{ couponDiscount.toFixed(2) }}</span>
        </div>
        <div class="totals-row total-row">
          <strong>Total</strong>
          <strong>${{ total.toFixed(2) }}</strong>
        </div>
        <button class="proceed-btn" @click="goCheckout">PROCEED TO CHECKOUT</button>
        <button class="continue-link" @click="$router.push('/services')">← Continue Shopping</button>
      </aside>

    </div>

    <!-- ── ADD-ONS SECTION ── -->
    <section class="addons-section">
      <p class="eyebrow">SIGNATURE ENHANCEMENTS</p>
      <h2>Upgrade your experience with…</h2>

      <div class="addons-grid">
        <div
          v-for="addon in ADDONS"
          :key="addon.id"
          :class="['addon-card', { 'addon-added': isInCart(addon.id) }]"
        >
          <div class="addon-icon">{{ addon.icon }}</div>
          <div class="addon-price">+${{ addon.price }}</div>
          <div class="addon-label">{{ addon.label }}</div>
          <button
            class="addon-btn"
            :disabled="isInCart(addon.id)"
            @click="addAddon(addon)"
          >
            {{ isInCart(addon.id) ? 'Added ✓' : 'Add to Cart' }}
          </button>
        </div>
      </div>
    </section>

    <VelvetFooter />
  </main>
</template>

<style scoped>
/* ── BASE ── */
.cart-page {
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
.cart-hero {
  background: #f3e8e4;
  padding: 50px 24px 44px;
  text-align: center;
}

.cart-hero h1 {
  font-size: clamp(36px, 5vw, 64px);
  font-weight: 300;
  color: #2a2a2a;
  margin: 0;
}

/* ── EMPTY STATE ── */
.empty-cart {
  max-width: 500px;
  margin: 80px auto;
  text-align: center;
  padding: 0 24px;
}

.empty-icon {
  font-size: 52px;
  margin-bottom: 12px;
}

.empty-cart h2 {
  font-size: 32px;
  font-weight: 300;
  margin: 0 0 10px;
}

.empty-cart p {
  font-family: sans-serif;
  font-size: 13px;
  color: #655956;
  margin-bottom: 24px;
}

.empty-cart button {
  padding: 13px 28px;
  border: 1px solid #1b1717;
  border-radius: 999px;
  background: transparent;
  font-family: sans-serif;
  font-size: 9px;
  letter-spacing: 2px;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
  color: #1b1717;
  transition: .2s ease;
}

.empty-cart button:hover {
  background: #1b1717;
  color: white;
}

/* ── CART LAYOUT ── */
.cart-layout {
  max-width: 1180px;
  margin: 50px auto;
  padding: 0 50px;
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 40px;
  align-items: start;
}

/* ── CART TABLE ── */
.cart-table-wrap {
  background: white;
  border: 1px solid #eadad6;
  border-radius: 20px;
  overflow: hidden;
}

.cart-table {
  width: 100%;
  border-collapse: collapse;
}

.cart-table thead tr {
  border-bottom: 1px solid #eadad6;
}

.cart-table th {
  padding: 16px 20px;
  font-family: sans-serif;
  font-size: 8px;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 800;
  color: #b9857b;
  text-align: left;
}

.cart-table td {
  padding: 20px;
  border-bottom: 1px solid #f3ece8;
  vertical-align: middle;
}

.cart-table tbody tr:last-child td {
  border-bottom: none;
}

.remove-btn {
  border: none;
  background: none;
  font-size: 20px;
  color: #c8a49b;
  cursor: pointer;
  line-height: 1;
  padding: 0;
  transition: color .2s;
}

.remove-btn:hover {
  color: #1b1717;
}

.product-cell {
  display: flex;
  align-items: center;
  gap: 16px;
}

.product-icon {
  width: 52px;
  height: 52px;
  background: #f3e8e4;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  flex-shrink: 0;
}

.product-tag {
  font-family: sans-serif;
  font-size: 7px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #b9857b;
  font-weight: 800;
  margin-bottom: 4px;
}

.product-name {
  font-size: 16px;
  font-weight: 300;
  color: #2a2a2a;
  line-height: 1.2;
}

.price-cell {
  font-family: sans-serif;
  font-size: 14px;
  color: #2a2a2a;
  white-space: nowrap;
}

/* ── COUPON ── */
.coupon-row {
  display: flex;
  gap: 10px;
  padding: 20px;
  border-top: 1px solid #eadad6;
}

.coupon-input {
  flex: 1;
  padding: 11px 16px;
  border: 1px solid #eadad6;
  border-radius: 12px;
  font-family: sans-serif;
  font-size: 12px;
  background: #fff8f5;
  color: #2a2a2a;
  outline: none;
}

.coupon-input:focus {
  border-color: #c8a49b;
}

.coupon-btn {
  padding: 11px 20px;
  border: none;
  border-radius: 12px;
  background: #c8a49b;
  color: white;
  font-family: sans-serif;
  font-size: 8px;
  letter-spacing: 2px;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  transition: .2s ease;
}

.coupon-btn:hover:not(:disabled) {
  background: #b9857b;
}

.coupon-btn:disabled {
  background: #d4b5af;
}

.coupon-success {
  padding: 0 20px 14px;
  font-family: sans-serif;
  font-size: 11px;
  color: #7a9e7e;
  margin: 0;
}

/* ── CART TOTALS ── */
.cart-totals {
  background: white;
  border: 1px solid #eadad6;
  border-radius: 20px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.cart-totals h3 {
  font-family: sans-serif;
  font-size: 9px;
  letter-spacing: 4px;
  text-transform: uppercase;
  font-weight: 800;
  color: #2a2a2a;
  margin: 0 0 18px;
}

.totals-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #f3ece8;
  font-family: sans-serif;
  font-size: 13px;
  color: #2a2a2a;
}

.totals-row.discount {
  color: #7a9e7e;
}

.totals-row.total-row {
  border-bottom: none;
  font-size: 16px;
  padding-top: 16px;
}

.proceed-btn {
  margin-top: 20px;
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 999px;
  background: #c8a49b;
  color: white;
  font-family: sans-serif;
  font-size: 9px;
  letter-spacing: 2px;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
  transition: .2s ease;
}

.proceed-btn:hover {
  background: #b9857b;
}

.continue-link {
  margin-top: 12px;
  border: none;
  background: none;
  font-family: sans-serif;
  font-size: 9px;
  letter-spacing: 2px;
  font-weight: 800;
  text-transform: uppercase;
  color: #b9857b;
  cursor: pointer;
  text-align: center;
}

/* ── ADD-ONS SECTION ── */
.addons-section {
  max-width: 1180px;
  margin: 0 auto 70px;
  padding: 0 50px;
  text-align: center;
}

.addons-section h2 {
  font-size: clamp(28px, 3vw, 44px);
  font-weight: 300;
  font-style: italic;
  color: #2a2a2a;
  margin: 10px 0 36px;
}

.addons-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 14px;
}

.addon-card {
  background: white;
  border: 1px solid #eadad6;
  border-radius: 20px;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  transition: border-color .2s ease, box-shadow .2s ease;
}

.addon-card:hover {
  border-color: #c8a49b;
  box-shadow: 0 4px 16px rgba(180, 120, 100, .1);
}

.addon-card.addon-added {
  border-color: #1b1717;
  background: #fdf6f0;
}

.addon-icon {
  font-size: 26px;
  line-height: 1;
  color: #c8a49b;
}

.addon-price {
  font-size: 26px;
  font-weight: 300;
  color: #2a2a2a;
  line-height: 1;
}

.addon-label {
  font-family: sans-serif;
  font-size: 9px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 800;
  color: #655956;
  text-align: center;
  line-height: 1.4;
}

.addon-btn {
  margin-top: 6px;
  padding: 8px 14px;
  border: 1px solid #1b1717;
  border-radius: 999px;
  background: transparent;
  font-family: sans-serif;
  font-size: 7px;
  letter-spacing: 2px;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
  color: #1b1717;
  transition: .2s ease;
  white-space: nowrap;
}

.addon-btn:hover:not(:disabled) {
  background: #1b1717;
  color: white;
}

.addon-btn:disabled {
  border-color: #c8a49b;
  color: #c8a49b;
  cursor: default;
}

/* ── MOBILE ── */
@media (max-width: 1000px) {
  .cart-layout {
    grid-template-columns: 1fr;
    padding: 0 24px;
  }

  .addons-grid {
    grid-template-columns: repeat(3, 1fr);
    padding: 0 24px;
  }

  .addons-section {
    padding: 0 24px;
  }
}

@media (max-width: 600px) {
  .addons-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .product-cell {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
}
</style>
