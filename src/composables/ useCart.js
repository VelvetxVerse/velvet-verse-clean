/ composables/useCart.js
// Drop this file into src/composables/useCart.js

import { ref, computed } from 'vue'

const BASE_PRICE = 500

const ADDONS = [
  { id: 'additional-pages',     label: 'Additional\nPages',      price: 80,  icon: '▧' },
  { id: 'custom-color-palette', label: 'Custom Color\nPalette',  price: 60,  icon: '🎨' },
  { id: 'luxury-animations',    label: 'Luxury\nAnimations',     price: 90,  icon: '✦' },
  { id: 'priority-launch',      label: 'Priority\nLaunch',       price: 120, icon: '🚀' },
  { id: 'mobile-refinements',   label: 'Mobile\nRefinements',    price: 50,  icon: '▯' },
  { id: 'instagram-integration',label: 'Instagram\nIntegration', price: 40,  icon: '◎' },
]

const selectedAddons = ref([])

const total = computed(() => {
  const addonsTotal = selectedAddons.value.reduce((sum, id) => {
    const addon = ADDONS.find(a => a.id === id)
    return sum + (addon ? addon.price : 0)
  }, 0)
  return BASE_PRICE + addonsTotal
})

function toggleAddon(id) {
  const index = selectedAddons.value.indexOf(id)
  if (index === -1) {
    selectedAddons.value.push(id)
  } else {
    selectedAddons.value.splice(index, 1)
  }
}

function isSelected(id) {
  return selectedAddons.value.includes(id)
}

function clearCart() {
  selectedAddons.value = []
}

export function useCart() {
  return {
    ADDONS,
    BASE_PRICE,
    selectedAddons,
    total,
    toggleAddon,
    isSelected,
    clearCart,
  }
}
