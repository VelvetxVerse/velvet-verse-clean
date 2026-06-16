<script setup>
import { useTheme } from '../composables/useTheme'

const { setTheme } = useTheme()
</script>

<template>
  <section class="palette">
    <p class="label">NOIR COLLECTION</p>
    <h2>Choose a Color Palette</h2>

    <div class="buttons">
      <button type="button" @click="setTheme('classic')" class="classic">
        <span></span>
        Classic Noir
      </button>
      <button type="button" @click="setTheme('rosegold')" class="rosegold">
        <span></span>
        Rose Gold
      </button>
      <button type="button" @click="setTheme('ivory')" class="ivory">
        <span></span>
        Ivory Pearl
      </button>
      <button type="button" @click="setTheme('espresso')" class="espresso">
        <span></span>
        Espresso
      </button>
    </div>
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Inter:wght@300;400;500&display=swap");

.palette {
  padding: 14px 20px 16px;
  text-align: center;
  background: var(--bg);
  border-bottom: 1px solid color-mix(in srgb, var(--gold) 30%, transparent);
  position: relative;
  z-index: 999;
}

.label {
  margin: 0 0 4px;
  color: color-mix(in srgb, var(--gold) 70%, transparent);
  letter-spacing: 4px;
  text-transform: uppercase;
  font-size: 9px;
  font-family: "Inter", sans-serif;
  font-weight: 300;
}

.palette h2 {
  margin: 0 0 12px;
  color: var(--gold);
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: 18px;
  font-style: italic;
  font-weight: 400;
  letter-spacing: 0.5px;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

button {
  padding: 7px 16px;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--gold) 55%, transparent);
  background: transparent;
  color: color-mix(in srgb, var(--text) 80%, transparent);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-size: 9px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  transition: 0.3s ease;
}

button:hover {
  background: color-mix(in srgb, var(--gold) 12%, transparent);
  border-color: var(--gold);
  color: var(--gold);
}

button span {
  width: 13px;
  height: 13px;
  border-radius: 50%;
  display: block;
  border: 1px solid color-mix(in srgb, var(--gold) 60%, transparent);
  flex-shrink: 0;
}

.classic span { background: #050505; }
.rosegold span {
  background: linear-gradient(90deg, #fff7f1 25%, #f1d9cf 25% 50%, #b76e79 50% 75%, #2b1d1a 75%);
}
.ivory span {
  background: linear-gradient(90deg, #f7efe1 50%, #b88a44 50%);
}
.espresso span {
  background: linear-gradient(90deg, #2a160f 50%, #c0894b 50%);
}
</style>
