<script setup>
import { onMounted, onUnmounted } from 'vue'
import ParisPaletteBar from '../components/ParisPaletteBar.vue'
import ParisFooter from '../components/ParisFooter.vue'

// Force Paris light theme — override the dark noir default
const PARIS_VARS = [
  '--bg','--surface','--text','--gold','--gold-line',
  '--accent','--muted','--cream','--card','--shadow','--soft-shadow','--line'
]
let savedTheme = null
onMounted(() => {
  savedTheme = document.documentElement.getAttribute('data-noir-theme')
  const r = document.documentElement
  r.style.setProperty('--bg', '#fdf6f0')
  r.style.setProperty('--surface', '#f5e8da')
  r.style.setProperty('--text', '#2a1f1a')
  r.style.setProperty('--gold', '#c9a882')
  r.style.setProperty('--gold-line', '#dfc4a0')
  r.style.setProperty('--accent', '#9c6b4e')
  r.style.setProperty('--muted', '#6b4f42')
  r.style.setProperty('--cream', '#fdf0e4')
  r.style.setProperty('--card', 'rgba(255,255,255,0.65)')
  r.style.setProperty('--shadow', '0 20px 60px rgba(100,60,20,0.1)')
  r.style.setProperty('--soft-shadow', '0 8px 28px rgba(100,60,20,0.08)')
  r.style.setProperty('--line', '#dfc4a0')
  r.removeAttribute('data-noir-theme')
})
onUnmounted(() => {
  const r = document.documentElement
  PARIS_VARS.forEach(v => r.style.removeProperty(v))
  if (savedTheme) r.setAttribute('data-noir-theme', savedTheme)
})

</script>

<template>
  <main class="paris-demo">
    <ParisPaletteBar />

    <!-- keep your page exactly the same here -->

    <ParisFooter />
  </main>

</template>
