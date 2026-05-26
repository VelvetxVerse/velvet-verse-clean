<script setup>
import { onMounted, ref } from 'vue'

const palettes = [
  { name: 'Neutral', className: 'theme-neutral', colors: ['#b49683', '#fffdfa'] },
  { name: 'Blush', className: 'theme-blush', colors: ['#cf626b', '#fff7f5'] },
  { name: 'Almond', className: 'theme-almond', colors: ['#9b836d', '#fffaf6'] },
  { name: 'Lavender', className: 'theme-lavender', colors: ['#B8A5C9', '#F6F2F8'] },
  { name: 'Champagne', className: 'theme-champagne', colors: ['#d2b184', '#fffdf9'] }
]

const activePalette = ref('theme-blush')
const themeClasses = palettes.map((palette) => palette.className)

function setPalette(className) {
  document.body.classList.remove(...themeClasses)
  document.body.classList.add(className)
  localStorage.setItem('parisPalette', className)
  activePalette.value = className
}

onMounted(() => {
  setPalette(localStorage.getItem('parisPalette') || 'theme-blush')
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
        v-for="palette in palettes"
        :key="palette.name"
        type="button"
        class="palette-btn"
        :class="{ active: activePalette === palette.className }"
        @click="setPalette(palette.className)"
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
  border:1px solid var(--line);
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