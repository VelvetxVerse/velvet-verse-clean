<script setup>
import NoirHeader from '../components/NoirHeader.vue'
import NoirFooter from '../components/NoirFooter.vue'
import NoirPaletteBar from '../components/NoirPaletteBar.vue'
import { ref } from 'vue'

const activeFilter = ref('all')

const filters = [
  { key: 'all',    label: 'All Work' },
  { key: 'bridal', label: 'Bridal' },
  { key: 'hair',   label: 'Hair' },
  { key: 'makeup', label: 'Makeup' },
  { key: 'studio', label: 'Studio' },
]

const images = [
  { src: '/noir-bridal.png',               category: 'bridal', label: 'Bridal Updo',          sub: 'Bridal Experience' },
  { src: '/noir-hair.jpg',                 category: 'hair',   label: 'Signature Waves',       sub: 'Hair Artistry' },
  { src: '/noir-makeup.png',               category: 'makeup', label: 'Soft Glam',             sub: 'Makeup Artistry' },
  { src: '/noir-flowers.png',              category: 'studio', label: 'Studio Details',        sub: 'Private Studio' },
  { src: '/noir-brushes.png',              category: 'studio', label: 'The Tools',             sub: 'Private Studio' },
  { src: '/noir-closeup.png',              category: 'makeup', label: 'Editorial Look',        sub: 'Makeup Artistry' },
  { src: '/noir-hair-service.png',         category: 'hair',   label: 'Color & Cut',           sub: 'Signature Hair' },
  { src: '/noir-products.png',             category: 'studio', label: 'Noir Collection',       sub: 'Private Studio' },
  { src: '/noir-luxury-makeup.png',        category: 'makeup', label: 'Full Glam',             sub: 'Makeup Artistry' },
  { src: '/noir-signature-collection.png', category: 'studio', label: 'Signature Collection',  sub: 'Private Studio' },
  { src: '/noir-storefront.png',           category: 'studio', label: 'The Studio',            sub: 'Private Studio' },
  { src: '/noir-studio.png',               category: 'studio', label: 'Studio Ambiance',       sub: 'Private Studio' },
]

const filtered = () =>
  activeFilter.value === 'all'
    ? images
    : images.filter(i => i.category === activeFilter.value)
</script>

<template>
  <main class="noir-gallery">
    <NoirHeader />
    <NoirPaletteBar />

    <!-- ═══════════════════════════════════════ -->
    <!-- PAGE HERO                               -->
    <!-- ═══════════════════════════════════════ -->
    <section class="page-hero">
      <div class="hero-copy">
        <span class="crown">♕</span>
        <p class="eyebrow">THE GALLERY</p>
        <h1>Beauty in Every<br /><em>Detail.</em></h1>
        <div class="thin-rule">
          <span></span><span class="dot">✦</span><span></span>
        </div>
        <p class="hero-body">
          A curated collection of moments — bridal artistry, signature hair,
          and elevated beauty experiences by Renata Oliver.
        </p>
      </div>
      <div class="hero-mosaic">
        <img src="/noir-bridal.png"  class="m1" alt="" />
        <img src="/noir-hair.jpg"    class="m2" alt="" />
        <img src="/noir-flowers.png" class="m3" alt="" />
      </div>
    </section>

    <!-- ═══════════════════════════════════════ -->
    <!-- FILTER BAR                              -->
    <!-- ═══════════════════════════════════════ -->
    <section class="filter-bar">
      <div class="filter-inner">
        <button
          v-for="f in filters"
          :key="f.key"
          :class="{ active: activeFilter === f.key }"
          @click="activeFilter = f.key"
        >
          {{ f.label }}
        </button>
      </div>
    </section>

    <!-- ═══════════════════════════════════════ -->
    <!-- GALLERY GRID                            -->
    <!-- ═══════════════════════════════════════ -->
    <section class="gallery-grid-section">
      <div class="gallery-grid">
        <article
          v-for="(img, i) in filtered()"
          :key="i"
          class="gallery-item"
        >
          <div class="img-wrap">
            <img :src="img.src" :alt="img.label" />
            <div class="img-overlay">
              <span class="overlay-icon">✦</span>
              <p class="overlay-label">{{ img.label }}</p>
              <p class="overlay-sub">{{ img.sub }}</p>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- ═══════════════════════════════════════ -->
    <!-- QUOTE BANNER                            -->
    <!-- ═══════════════════════════════════════ -->
    <section class="quote-banner">
      <span class="q-mark">"</span>
      <h2>Because your beauty deserves<br />more than ordinary.</h2>
      <p class="q-attr">— by Renata Oliver</p>
      <span class="sparkle">✦</span>
    </section>

    <!-- ═══════════════════════════════════════ -->
    <!-- INVITATION CTA                          -->
    <!-- ═══════════════════════════════════════ -->
    <section class="cta-section">
      <div class="cta-inner">
        <div class="cta-badge">
          <span class="cta-crown">♕</span>
          <small>BY INVITATION</small>
          <em>Only</em>
          <b>✦</b>
        </div>
        <div class="cta-copy">
          <p class="cta-label">READY TO CREATE YOUR OWN MOMENT?</p>
          <h3>Your experience awaits.</h3>
          <router-link to="/noir/contact" class="btn-gold">BOOK PRIVATE EXPERIENCE →</router-link>
          <p class="cta-sub">BY INVITATION ONLY</p>
        </div>
      </div>
    </section>

    <NoirFooter />
  </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Inter:wght@300;400;500&display=swap");

/* ── BASE ─────────────────────────────────────── */
.noir-gallery {
  --muted:     color-mix(in srgb, var(--text) 55%, transparent);
  --line:      color-mix(in srgb, var(--gold) 22%, transparent);
  --gold-soft: color-mix(in srgb, var(--gold) 72%, transparent);

  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  font-family: "Inter", sans-serif;
  font-size: 13px;
  font-weight: 300;
  transition: background 0.45s ease, color 0.45s ease;
}

/* ── PAGE HERO ────────────────────────────────── */
.page-hero {
  display: grid;
  grid-template-columns: 42% 58%;
  min-height: 320px;
  border-bottom: 1px solid var(--line);
}

.hero-copy {
  padding: 56px 40px 56px 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.crown {
  display: block;
  color: var(--gold-soft);
  font-size: 18px;
  margin-bottom: 10px;
}

.eyebrow {
  display: block;
  font-size: 9px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 5px;
  color: var(--gold-soft);
  margin-bottom: 14px;
}

h1 {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(28px, 3vw, 48px);
  font-weight: 300;
  line-height: 1.08;
  margin: 0 0 18px;
}

h1 em { color: var(--gold); font-style: italic; }

.thin-rule {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 140px;
  margin-bottom: 14px;
}

.thin-rule span:first-child,
.thin-rule span:last-child {
  flex: 1;
  height: 1px;
  background: var(--line);
  display: block;
}

.dot {
  color: var(--gold-soft);
  font-size: 9px;
  flex: none;
}

.hero-body {
  font-size: 11px;
  font-weight: 300;
  color: var(--muted);
  line-height: 1.75;
  max-width: 300px;
}

/* mosaic */
.hero-mosaic {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2px;
  overflow: hidden;
}

.hero-mosaic img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.m1 { grid-row: 1 / 3; }
.m2 { grid-row: 1; }
.m3 { grid-row: 2; }

/* ── FILTER BAR ───────────────────────────────── */
.filter-bar {
  padding: 24px 48px;
  border-bottom: 1px solid var(--line);
}

.filter-inner {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.filter-inner button {
  background: transparent;
  border: 1px solid var(--line);
  color: var(--muted);
  font-size: 9px;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 3px;
  padding: 8px 18px;
  cursor: pointer;
  border-radius: 999px;
  transition: 0.3s ease;
}

.filter-inner button:hover {
  border-color: var(--gold-soft);
  color: var(--gold-soft);
}

.filter-inner button.active {
  background: var(--gold);
  border-color: var(--gold);
  color: var(--bg);
}

/* ── GALLERY GRID ─────────────────────────────── */
.gallery-grid-section {
  padding: 40px 48px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.gallery-item {
  position: relative;
  overflow: hidden;
}

.img-wrap {
  position: relative;
  overflow: hidden;
  aspect-ratio: 3 / 4;
}

.img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
  display: block;
}

.gallery-item:hover .img-wrap img {
  transform: scale(1.06);
}

.img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    color-mix(in srgb, var(--bg) 85%, transparent) 0%,
    transparent 55%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 16px;
  text-align: center;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.gallery-item:hover .img-overlay {
  opacity: 1;
}

.overlay-icon {
  color: var(--gold-soft);
  font-size: 14px;
  margin-bottom: 6px;
}

.overlay-label {
  font-family: "Cormorant Garamond", serif;
  font-size: 16px;
  font-weight: 400;
  color: var(--text);
  margin-bottom: 2px;
}

.overlay-sub {
  font-size: 8px;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: var(--gold-soft);
  font-weight: 300;
}

/* ── QUOTE BANNER ─────────────────────────────── */
.quote-banner {
  padding: 52px 48px;
  text-align: center;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: var(--surface);
}

.q-mark {
  font-family: "Cormorant Garamond", serif;
  font-size: 64px;
  color: var(--gold-soft);
  line-height: 0.6;
  display: block;
  margin-bottom: 12px;
}

.quote-banner h2 {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(22px, 2.6vw, 36px);
  font-weight: 300;
  line-height: 1.3;
  margin: 0 0 12px;
}

.q-attr {
  font-family: "Cormorant Garamond", serif;
  font-style: italic;
  font-size: 16px;
  color: var(--gold-soft);
  margin-bottom: 8px;
}

.sparkle {
  color: var(--gold-soft);
  font-size: 12px;
}

/* ── CTA SECTION ──────────────────────────────── */
.cta-section {
  padding: 48px;
}

.cta-inner {
  display: flex;
  align-items: center;
  gap: 36px;
  border: 1px solid var(--line);
  background: var(--surface);
  padding: 36px 40px;
}

.cta-badge {
  width: 80px;
  height: 80px;
  border: 1px solid var(--line);
  outline: 1px solid color-mix(in srgb, var(--gold) 12%, transparent);
  outline-offset: 4px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--gold-soft);
  flex-shrink: 0;
  gap: 1px;
}

.cta-crown { font-size: 12px; }

.cta-badge small {
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 6px;
  font-weight: 300;
}

.cta-badge em {
  font-family: "Cormorant Garamond", cursive;
  font-size: 18px;
  font-weight: 300;
  font-style: italic;
  line-height: 1;
}

.cta-badge b {
  font-size: 7px;
  font-weight: 300;
  opacity: 0.6;
}

.cta-copy {
  flex: 1;
}

.cta-label {
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: var(--muted);
  font-weight: 300;
  margin-bottom: 6px;
}

.cta-copy h3 {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(22px, 2.4vw, 32px);
  font-weight: 300;
  margin: 0 0 18px;
}

.btn-gold {
  display: inline-block;
  background: var(--gold);
  color: var(--bg);
  font-size: 8px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  padding: 12px 24px;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.btn-gold:hover { opacity: 0.82; }

.cta-sub {
  font-size: 8px;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: var(--muted);
  font-weight: 300;
  margin-top: 10px;
}

/* ── RESPONSIVE ───────────────────────────────── */
@media (max-width: 960px) {
  .page-hero { grid-template-columns: 1fr; }
  .hero-mosaic { height: 280px; }
  .hero-copy { padding: 48px 24px; }

  .filter-bar { padding: 20px 24px; }

  .gallery-grid { grid-template-columns: repeat(3, 1fr); }
  .gallery-grid-section { padding: 32px 24px; }

  .quote-banner,
  .cta-section { padding: 40px 24px; }

  .cta-inner { flex-direction: column; text-align: center; }
}

@media (max-width: 600px) {
  .gallery-grid { grid-template-columns: repeat(2, 1fr); }
  .hero-mosaic { display: none; }
}
</style>
