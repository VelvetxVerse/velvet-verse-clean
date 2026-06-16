<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

// All 5 palettes — variables applied directly to <html> inline styles
// so they override the onMounted base values set by ParisDemoView/ParisEditionView
const palettes = {
  'theme-neutral': {
    '--bg':        '#fdf9f5',
    '--surface':   '#f2ebe3',
    '--cream':     '#fdf5ed',
    '--card':      'rgba(255,255,255,0.65)',
    '--text':      '#2a1f1a',
    '--muted':     '#6b5a50',
    '--gold':      '#b49683',
    '--gold-line': '#d4bfb0',
    '--accent':    '#8c6b55',
    '--line':      '#d4bfb0',
    '--shadow':    '0 20px 60px rgba(100,60,20,0.1)',
    '--soft-shadow':'0 8px 28px rgba(100,60,20,0.08)',
  },
  'theme-blush': {
    '--bg':        '#fdf6f5',
    '--surface':   '#f5e2e0',
    '--cream':     '#fff0ee',
    '--card':      'rgba(255,255,255,0.65)',
    '--text':      '#2a1a1a',
    '--muted':     '#7a4a4a',
    '--gold':      '#cf626b',
    '--gold-line': '#e8a8ad',
    '--accent':    '#b84a55',
    '--line':      '#e8a8ad',
    '--shadow':    '0 20px 60px rgba(180,60,70,0.1)',
    '--soft-shadow':'0 8px 28px rgba(180,60,70,0.08)',
  },
  'theme-almond': {
    '--bg':        '#fdfaf6',
    '--surface':   '#f0e8dc',
    '--cream':     '#fdf5ec',
    '--card':      'rgba(255,255,255,0.65)',
    '--text':      '#2a2018',
    '--muted':     '#6b5540',
    '--gold':      '#9b836d',
    '--gold-line': '#c8b09a',
    '--accent':    '#7d6050',
    '--line':      '#c8b09a',
    '--shadow':    '0 20px 60px rgba(100,60,20,0.1)',
    '--soft-shadow':'0 8px 28px rgba(100,60,20,0.08)',
  },
  'theme-lavender': {
    '--bg':        '#faf8fd',
    '--surface':   '#ede8f5',
    '--cream':     '#f6f2fb',
    '--card':      'rgba(255,255,255,0.65)',
    '--text':      '#1e1a2a',
    '--muted':     '#5a4e6b',
    '--gold':      '#b8a5c9',
    '--gold-line': '#d4c8e4',
    '--accent':    '#8a6faa',
    '--line':      '#d4c8e4',
    '--shadow':    '0 20px 60px rgba(80,60,120,0.1)',
    '--soft-shadow':'0 8px 28px rgba(80,60,120,0.08)',
  },
  'theme-champagne': {
    '--bg':        '#fdfaf4',
    '--surface':   '#f5edda',
    '--cream':     '#fdf8ee',
    '--card':      'rgba(255,255,255,0.65)',
    '--text':      '#2a2010',
    '--muted':     '#6b5830',
    '--gold':      '#d2b184',
    '--gold-line': '#e8d4a8',
    '--accent':    '#b8903a',
    '--line':      '#e8d4a8',
    '--shadow':    '0 20px 60px rgba(120,90,20,0.1)',
    '--soft-shadow':'0 8px 28px rgba(120,90,20,0.08)',
  },
}

const paletteList = [
  { name: 'Neutral',   key: 'theme-neutral',   colors: ['#b49683', '#fffdfa'] },
  { name: 'Blush',     key: 'theme-blush',     colors: ['#cf626b', '#fff7f5'] },
  { name: 'Almond',    key: 'theme-almond',    colors: ['#9b836d', '#fffaf6'] },
  { name: 'Lavender',  key: 'theme-lavender',  colors: ['#B8A5C9', '#F6F2F8'] },
  { name: 'Champagne', key: 'theme-champagne', colors: ['#d2b184', '#fffdf9'] },
]

const activePalette = ref('theme-blush')

function applyPalette(key) {
  const vars = palettes[key]
  if (!vars) return
  const r = document.documentElement
  Object.entries(vars).forEach(([prop, val]) => r.style.setProperty(prop, val))
  localStorage.setItem('parisPalette', key)
  activePalette.value = key
}

onMounted(() => {
  // Always start on Blush (pink) — ignore localStorage so it's always fresh
  applyPalette('theme-blush')
})

onUnmounted(() => {
  // Restore base Paris values — ParisDemoView/ParisEditionView onUnmounted
  // will then clean everything up when navigating away
  applyPalette('theme-blush')
})
</script>

<template>
  <section class="palette-strip">
    <div class="top-divider">
      <span></span>
      ❧
      <span></span>
    </div>

    <p class="preview-label">TEMPLATE PREVIEW</p>
    <h3>Choose a Color Palette</h3>

    <div class="palette-options">
      <button
        v-for="palette in paletteList"
        :key="palette.key"
        type="button"
        class="palette-btn"
        :class="{ active: activePalette === palette.key }"
        @click="applyPalette(palette.key)"
      >
        <span class="swatch">
          <i :style="{ background: palette.colors[0] }"></i>
          <i :style="{ background: palette.colors[1] }"></i>
        </span>
        {{ palette.name }}
      </button>
    </div>
  </section>
</template>

<style scoped>
.palette-strip{
  position:relative;
  z-index:4;
  margin:18px auto 34px;
  padding:24px 0 18px;
  text-align:center;
  border-top:1px solid var(--gold-line);
  border-bottom:1px solid var(--gold-line);
}

.top-divider{
  display:flex;
  justify-content:center;
  align-items:center;
  gap:12px;
  color:var(--gold);
  margin-bottom:12px;
}

.top-divider span{
  width:52px;
  height:1px;
  background:var(--gold-line);
}

.preview-label{
  margin:0 0 8px;
  color:var(--accent);
  font-family:Arial,sans-serif;
  font-size:9px;
  letter-spacing:4px;
  font-weight:800;
}

.palette-strip h3{
  margin:0 0 18px;
  color:var(--gold);
  font-size:clamp(28px,3vw,40px);
  font-weight:300;
  font-style:italic;
}

.palette-options{
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  gap:12px;
}

.palette-btn{
  min-width:138px;
  padding:11px 18px;
  border:1px solid var(--gold-line);
  border-radius:999px;
  background:rgba(255,255,255,.55);
  color:var(--text);
  font-family:Arial,sans-serif;
  font-size:9px;
  letter-spacing:2px;
  font-weight:800;
  cursor:pointer;
  display:flex;
  justify-content:center;
  align-items:center;
  gap:10px;
  transition:.35s ease;
}

.palette-btn:hover,
.palette-btn.active{
  transform:translateY(-2px);
  color:white;
  border-color:var(--accent);
  background:var(--accent);
}

.swatch{
  width:28px;
  height:20px;
  display:flex;
  overflow:hidden;
  border-radius:999px;
  border:1px solid rgba(0,0,0,.08);
}

.swatch i{
  width:50%;
  height:100%;
}
</style>
