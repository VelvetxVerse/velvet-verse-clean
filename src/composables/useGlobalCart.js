import { ref, computed } from 'vue'

// ── SERVICES ──────────────────────────────────────────────
export const SERVICES = [
  {
    id: 'signature-setup',
    tag: 'THE SIGNATURE SETUP',
    title: 'A beautifully branded launch, handled for you.',
    desc: "Velvet Verse installs, styles, and refines your website so it feels polished, elevated, and ready for launch.",
    price: 500,
    featured: true,
  },
  {
    id: 'vip-atelier',
    tag: 'THE VIP ATELIER',
    title: 'A personalized styling experience.',
    desc: 'Custom branding, elevated styling, refined layouts, and luxury-inspired personalization tailored to your vision.',
    price: 900,
    featured: false,
  },
  {
    id: 'creator-blueprint',
    tag: 'THE CREATOR BLUEPRINT',
    title: 'Strategy & digital presence for creators.',
    desc: 'A luxury-inspired strategy experience for creators ready to elevate their content, collaborations, and digital presence.',
    price: 350,
    featured: false,
  },
]

// ── ADD-ONS ───────────────────────────────────────────────
export const ADDONS = [
  { id: 'pages',      icon: '▧', label: 'Additional Pages',    price: 80  },
  { id: 'palette',    icon: '🎨', label: 'Custom Color Palette', price: 60  },
  { id: 'animations', icon: '✦', label: 'Luxury Animations',   price: 90  },
  { id: 'priority',   icon: '🚀', label: 'Priority Launch',     price: 120 },
  { id: 'mobile',     icon: '▯', label: 'Mobile Refinements',  price: 50  },
  { id: 'instagram',  icon: '◎', label: 'Instagram Integration', price: 40 },
]

// ── CART STATE (module-level so it's shared across pages) ──
const cartItems = ref([])   // [{ id, type:'service'|'addon', label, price }]
const couponCode = ref('')
const couponApplied = ref(false)
const couponDiscount = ref(0)

// ── COMPUTED ───────────────────────────────────────────────
const subtotal = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.price, 0)
)

const total = computed(() => Math.max(0, subtotal.value - couponDiscount.value))

const cartCount = computed(() => cartItems.value.length)

function isInCart(id) {
  return cartItems.value.some(i => i.id === id)
}

// ── ACTIONS ────────────────────────────────────────────────
function addService(svc) {
  // Only one service at a time — replace if already has one
  const existing = cartItems.value.findIndex(i => i.type === 'service')
  const item = { id: svc.id, type: 'service', label: svc.title, tag: svc.tag, price: svc.price }
  if (existing >= 0) {
    cartItems.value.splice(existing, 1, item)
  } else {
    cartItems.value.push(item)
  }
}

function addAddon(addon) {
  if (!isInCart(addon.id)) {
    cartItems.value.push({
      id: addon.id,
      type: 'addon',
      label: addon.label,
      icon: addon.icon,
      price: addon.price,
    })
  }
}

function removeItem(id) {
  cartItems.value = cartItems.value.filter(i => i.id !== id)
}

function applyCoupon() {
  // Demo coupon: VELVET10 = 10% off
  if (couponCode.value.trim().toUpperCase() === 'VELVET10') {
    couponDiscount.value = Math.round(subtotal.value * 0.1)
    couponApplied.value = true
  } else {
    couponDiscount.value = 0
    couponApplied.value = false
  }
}

function clearCart() {
  cartItems.value = []
  couponCode.value = ''
  couponApplied.value = false
  couponDiscount.value = 0
}

export function useGlobalCart() {
  return {
    cartItems,
    cartCount,
    subtotal,
    total,
    couponCode,
    couponApplied,
    couponDiscount,
    isInCart,
    addService,
    addAddon,
    removeItem,
    applyCoupon,
    clearCart,
    SERVICES,
    ADDONS,
  }
}
