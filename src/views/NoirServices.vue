<script setup>
import NoirHeader from '../components/NoirHeader.vue'
import NoirFooter from '../components/NoirFooter.vue'
import NoirPaletteBar from '../components/NoirPaletteBar.vue'
import { ref } from 'vue'

const activeTestimonial = ref(0)
const testimonials = [
  { quote: "The most incredible beauty experience I've ever had.", name: "Jessica M.", img: "/noir-closeup.png" },
  { quote: "Every detail felt intentional and so luxurious.", name: "Amanda R.", img: "/noir-makeup.png" },
  { quote: "Renata truly listens and brings your vision to life beyond expectation.", name: "Nicole B.", img: "/noir-bridal.png" },
]

function prev() {
  activeTestimonial.value = (activeTestimonial.value - 1 + testimonials.length) % testimonials.length
}
function next() {
  activeTestimonial.value = (activeTestimonial.value + 1) % testimonials.length
}
</script>

<template>
  <main class="noir-services">
    <NoirHeader />
    <NoirPaletteBar />

    <!-- ═══════════════════════════════════════ -->
    <!-- SERVICES HERO                           -->
    <!-- ═══════════════════════════════════════ -->
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-copy">
          <p class="eyebrow">OUR SERVICES</p>
          <h1>Luxury Beauty<br />Experiences</h1>
          <p class="script">Tailored. Intentional. Unforgettable. <span class="sparkle">✦</span></p>
          <p class="hero-body">Every appointment is designed around your vision, your features, and your moment.</p>
          <router-link to="/noir/contact" class="btn-gold">BOOK PRIVATE CONSULTATION →</router-link>
        </div>
        <div class="hero-img">
          <img src="/noir-bridal.png" alt="Luxury bridal beauty" />
          <div class="hero-img-overlay"></div>
        </div>
        <div class="hero-img-right">
          <img src="/noir-flowers.png" alt="Luxury flowers" />
        </div>
      </div>
      <div class="arc"></div>
    </section>

    <!-- ═══════════════════════════════════════ -->
    <!-- SIGNATURE EXPERIENCES                   -->
    <!-- ═══════════════════════════════════════ -->
    <section class="signature">
      <div class="section-header">
        <span class="rule"></span>
        <p class="section-label">SIGNATURE EXPERIENCES</p>
        <span class="rule"></span>
      </div>

      <div class="service-cards">
        <!-- BRIDAL -->
        <article>
          <div class="card-img"><img src="/noir-bridal.png" alt="Bridal" /></div>
          <div class="card-body">
            <div class="card-title-row">
              <span class="card-icon">♕</span>
              <h3>BRIDAL EXPERIENCE</h3>
            </div>
            <p>Perfect for your most important day.</p>
            <ul>
              <li>Consultation</li>
              <li>Bridal Preview</li>
              <li>Wedding Day Styling</li>
              <li>Touch-Up Guidance</li>
            </ul>
            <p class="price">STARTING AT $950</p>
            <router-link to="/noir/contact" class="card-btn">EXPLORE BRIDAL →</router-link>
          </div>
        </article>

        <!-- SIGNATURE HAIR -->
        <article>
          <div class="card-img"><img src="/noir-hair-service.png" alt="Hair" /></div>
          <div class="card-body">
            <div class="card-title-row">
              <span class="card-icon">✦</span>
              <h3>SIGNATURE HAIR</h3>
            </div>
            <p>Healthy, beautiful hair crafted just for you.</p>
            <ul>
              <li>Cut &amp; Style</li>
              <li>Color Services</li>
              <li>Treatments</li>
              <li>Blowout</li>
            </ul>
            <p class="price">STARTING AT $150</p>
            <router-link to="/noir/contact" class="card-btn">EXPLORE HAIR →</router-link>
          </div>
        </article>

        <!-- MAKEUP ARTISTRY -->
        <article>
          <div class="card-img"><img src="/noir-makeup.png" alt="Makeup" /></div>
          <div class="card-body">
            <div class="card-title-row">
              <span class="card-icon">✧</span>
              <h3>MAKEUP ARTISTRY</h3>
            </div>
            <p>Enhance your natural beauty for every occasion.</p>
            <ul>
              <li>Soft Glam</li>
              <li>Full Glam</li>
              <li>Editorial</li>
              <li>Special Events</li>
            </ul>
            <p class="price">STARTING AT $180</p>
            <router-link to="/noir/contact" class="card-btn">EXPLORE MAKEUP →</router-link>
          </div>
        </article>

        <!-- PRIVATE LUXURY -->
        <article>
          <div class="card-img"><img src="/noir-products.png" alt="Private Luxury" /></div>
          <div class="card-body">
            <div class="card-title-row">
              <span class="card-icon">◻</span>
              <h3>PRIVATE LUXURY PACKAGE</h3>
              <span class="invite-tag">BY INVITATION ONLY</span>
            </div>
            <p>The ultimate all-inclusive beauty experience.</p>
            <ul>
              <li>Full Beauty Planning</li>
              <li>Hair + Makeup</li>
              <li>Concierge Experience</li>
              <li>VIP Scheduling</li>
            </ul>
            <p class="price">&nbsp;</p>
            <router-link to="/noir/contact" class="card-btn outline">INQUIRE PRIVATELY</router-link>
          </div>
        </article>
      </div>
    </section>

    <!-- ═══════════════════════════════════════ -->
    <!-- EXPERIENCE PROCESS                      -->
    <!-- ═══════════════════════════════════════ -->
    <section class="process">
      <div class="section-header">
        <span class="rule"></span>
        <p class="section-label">THE EXPERIENCE PROCESS</p>
        <span class="rule"></span>
      </div>

      <div class="process-steps">
        <article>
          <div class="step-num">01</div>
          <div class="step-arrow">▶</div>
          <h4>CONSULTATION</h4>
          <p>We begin with a personalized consultation to understand your vision and goals.</p>
        </article>
        <article>
          <div class="step-num">02</div>
          <div class="step-arrow">▶</div>
          <h4>PERSONALIZATION</h4>
          <p>A custom beauty plan is created tailored specifically to you.</p>
        </article>
        <article>
          <div class="step-num">03</div>
          <div class="step-arrow">▶</div>
          <h4>EXPERIENCE</h4>
          <p>Relax and enjoy while every detail is handled with precision and care.</p>
        </article>
        <article>
          <div class="step-num">04</div>
          <h4>REVEAL</h4>
          <p>Step into your best self with confidence and radiance.</p>
        </article>
      </div>
    </section>

    <!-- ═══════════════════════════════════════ -->
    <!-- 5-COLUMN AMENITIES                      -->
    <!-- ═══════════════════════════════════════ -->
    <section class="amenities">
      <article>
        <div class="icon-wrap">♕</div>
        <h4>PRIVATE STUDIO</h4>
        <p>A tranquil, luxurious space just for you.</p>
      </article>
      <article>
        <div class="icon-wrap">⬡</div>
        <h4>PREMIUM PRODUCTS</h4>
        <p>Only the finest professional products.</p>
      </article>
      <article>
        <div class="icon-wrap">◎</div>
        <h4>COMPLIMENTARY REFRESHMENTS</h4>
        <p>Enjoy curated refreshments.</p>
      </article>
      <article>
        <div class="icon-wrap">◷</div>
        <h4>PERSONALIZED CONSULTATIONS</h4>
        <p>Focused on you, 100% of the time.</p>
      </article>
      <article>
        <div class="icon-wrap">▣</div>
        <h4>FLEXIBLE SCHEDULING</h4>
        <p>Appointments that work for you.</p>
      </article>
    </section>

    <!-- ═══════════════════════════════════════ -->
    <!-- GALLERY PREVIEW                         -->
    <!-- ═══════════════════════════════════════ -->
    <section class="gallery-preview">
      <div class="section-header">
        <span class="rule"></span>
        <p class="section-label">GALLERY PREVIEW</p>
        <span class="rule"></span>
      </div>

      <div class="gallery-grid">
        <img src="/noir-studio.png" alt="" />
        <img src="/noir-bathroom.png" alt="" />
        <img src="/noir-brushes.png" alt="" />
        <img src="/noir-hair.jpg" alt="" />
        <img src="/noir-flowers.png" alt="" />
        <img src="/noir-closeup.png" alt="" />
      </div>

      <div class="gallery-cta">
        <router-link to="/noir/gallery" class="btn-outline">VIEW FULL GALLERY →</router-link>
      </div>
    </section>

    <!-- ═══════════════════════════════════════ -->
    <!-- TESTIMONIALS                            -->
    <!-- ═══════════════════════════════════════ -->
    <section class="testimonials">
      <button class="t-arrow left" @click="prev">‹</button>

      <div class="t-track">
        <div
          v-for="(t, i) in testimonials"
          :key="i"
          class="t-card"
          :class="{ active: i === activeTestimonial }"
        >
          <span class="quote-mark">"</span>
          <p class="quote-text">{{ t.quote }}</p>
          <div class="t-author">
            <img :src="t.img" :alt="t.name" />
            <span>— {{ t.name }}</span>
          </div>
        </div>
      </div>

      <button class="t-arrow right" @click="next">›</button>
    </section>

    <!-- ═══════════════════════════════════════ -->
    <!-- INVITATION CTA                          -->
    <!-- ═══════════════════════════════════════ -->
    <section class="invitation-cta">
      <div class="inv-left">
        <div class="inv-badge">
          <span class="inv-crown">♕</span>
          <small>BY INVITATION</small>
          <em>Only</em>
          <b>✦</b>
        </div>
        <div class="inv-text">
          <p>Your beauty deserves more than ordinary.</p>
          <h2><em>This is your experience.</em> <span class="sparkle">✦</span></h2>
        </div>
      </div>
      <div class="inv-right">
        <p class="inv-label">READY TO EXPERIENCE THE NOIR DIFFERENCE?</p>
        <router-link to="/noir/contact" class="btn-gold">BOOK PRIVATE EXPERIENCE →</router-link>
        <p class="inv-sub">BY INVITATION ONLY</p>
      </div>
    </section>

    <NoirFooter />
  </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Inter:wght@300;400;500&display=swap");

/* ── BASE ─────────────────────────────────────── */
.noir-services {
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

/* ── HERO ─────────────────────────────────────── */
.hero {
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid var(--line);
}

.hero-inner {
  display: grid;
  grid-template-columns: 38% 36% 26%;
  min-height: 360px;
}

.hero-copy {
  padding: 56px 40px 56px 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 3;
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
  font-size: clamp(28px, 3vw, 46px);
  font-weight: 300;
  line-height: 1.08;
  margin: 0 0 12px;
  color: var(--text);
}

.script {
  font-family: "Cormorant Garamond", serif;
  font-size: 16px;
  font-style: italic;
  font-weight: 300;
  color: var(--gold-soft);
  margin-bottom: 10px;
}

.sparkle {
  color: var(--gold-soft);
  font-size: 0.6em;
  vertical-align: super;
}

.hero-body {
  font-size: 11px;
  font-weight: 300;
  color: var(--muted);
  line-height: 1.75;
  max-width: 280px;
  margin-bottom: 22px;
}

.btn-gold {
  display: inline-block;
  background: var(--gold);
  color: var(--bg);
  font-size: 8px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  padding: 11px 22px;
  text-decoration: none;
  width: fit-content;
  transition: opacity 0.3s ease;
}

.btn-gold:hover { opacity: 0.82; }

.hero-img {
  position: relative;
  overflow: hidden;
}

.hero-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-img-right {
  overflow: hidden;
}

.hero-img-right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.7;
}

.arc {
  position: absolute;
  left: 30%;
  top: -80px;
  width: 300px;
  height: 600px;
  border-right: 1px solid var(--line);
  border-radius: 50%;
  opacity: 0.4;
  pointer-events: none;
}

/* ── SECTION HEADER ───────────────────────────── */
.section-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
}

.rule {
  flex: 1;
  height: 1px;
  background: var(--line);
  display: block;
}

.section-label {
  font-size: 9px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 5px;
  color: var(--gold-soft);
  white-space: nowrap;
}

/* ── SIGNATURE SERVICES ───────────────────────── */
.signature {
  padding: 52px 48px;
}

.service-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.service-cards article {
  border: 1px solid var(--line);
  background: var(--surface);
  transition: border-color 0.4s ease;
}

.service-cards article:hover {
  border-color: color-mix(in srgb, var(--gold) 50%, transparent);
}

.card-img {
  height: 160px;
  overflow: hidden;
}

.card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.service-cards article:hover .card-img img {
  transform: scale(1.04);
}

.card-body {
  padding: 18px 16px;
}

.card-title-row {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 8px;
  flex-wrap: wrap;
}

.card-icon {
  color: var(--gold-soft);
  font-size: 14px;
}

.card-body h3 {
  font-size: 8px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--gold);
  font-weight: 500;
  margin: 0;
}

.invite-tag {
  font-size: 7px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--gold-soft);
  border: 1px solid var(--line);
  padding: 2px 6px;
  margin-left: auto;
}

.card-body > p {
  font-size: 10px;
  color: var(--muted);
  line-height: 1.6;
  margin-bottom: 10px;
  font-weight: 300;
}

.card-body ul {
  list-style: none;
  padding: 0;
  margin: 0 0 12px;
}

.card-body li {
  font-size: 10px;
  color: var(--muted);
  font-weight: 300;
  padding: 3px 0;
  padding-left: 14px;
  position: relative;
}

.card-body li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--gold-soft);
  font-size: 9px;
}

.price {
  font-size: 8px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--gold-soft);
  font-weight: 400;
  margin-bottom: 12px;
  min-height: 14px;
}

.card-btn {
  display: block;
  text-align: center;
  background: var(--gold);
  color: var(--bg);
  font-size: 7px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 10px 14px;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.card-btn:hover { opacity: 0.82; }

.card-btn.outline {
  background: transparent;
  color: var(--text);
  border: 1px solid var(--line);
}

.card-btn.outline:hover {
  border-color: var(--gold);
  color: var(--gold);
  opacity: 1;
}

/* ── PROCESS ──────────────────────────────────── */
.process {
  padding: 0 48px 52px;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  border: 1px solid var(--line);
}

.process-steps article {
  padding: 28px 20px;
  border-right: 1px solid var(--line);
  text-align: center;
  position: relative;
}

.process-steps article:last-child {
  border-right: none;
}

.step-num {
  font-family: "Cormorant Garamond", serif;
  font-size: 28px;
  font-weight: 300;
  color: var(--gold-soft);
  margin-bottom: 8px;
  line-height: 1;
}

.step-arrow {
  position: absolute;
  right: -10px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--line);
  font-size: 12px;
  z-index: 2;
}

.process-steps h4 {
  font-size: 8px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--gold);
  font-weight: 500;
  margin-bottom: 8px;
}

.process-steps p {
  font-size: 10px;
  color: var(--muted);
  line-height: 1.6;
  font-weight: 300;
}

/* ── AMENITIES ────────────────────────────────── */
.amenities {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  margin: 0 48px 52px;
}

.amenities article {
  text-align: center;
  padding: 28px 14px;
  border-right: 1px solid var(--line);
}

.amenities article:last-child { border-right: none; }

.icon-wrap {
  font-size: 22px;
  color: var(--gold-soft);
  margin-bottom: 10px;
  line-height: 1;
}

.amenities h4 {
  font-size: 8px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--gold);
  font-weight: 500;
  margin-bottom: 6px;
}

.amenities p {
  font-size: 10px;
  color: var(--muted);
  line-height: 1.55;
  font-weight: 300;
}

/* ── GALLERY PREVIEW ──────────────────────────── */
.gallery-preview {
  padding: 0 48px 52px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
  margin-bottom: 20px;
}

.gallery-grid img {
  width: 100%;
  height: 110px;
  object-fit: cover;
  border: 1px solid var(--line);
}

.gallery-cta {
  text-align: center;
}

.btn-outline {
  display: inline-block;
  color: var(--text);
  font-size: 8px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  padding: 11px 28px;
  border: 1px solid var(--line);
  text-decoration: none;
  transition: 0.3s ease;
}

.btn-outline:hover {
  border-color: var(--gold);
  color: var(--gold);
}

/* ── TESTIMONIALS ─────────────────────────────── */
.testimonials {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 48px 52px;
}

.t-arrow {
  background: none;
  border: 1px solid var(--line);
  color: var(--gold-soft);
  font-size: 22px;
  width: 36px;
  height: 36px;
  cursor: pointer;
  flex-shrink: 0;
  transition: 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.t-arrow:hover {
  border-color: var(--gold);
  color: var(--gold);
}

.t-track {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.t-card {
  border: 1px solid var(--line);
  background: var(--surface);
  padding: 24px 20px;
  opacity: 0.4;
  transition: opacity 0.4s ease;
}

.t-card.active { opacity: 1; }

.quote-mark {
  font-family: "Cormorant Garamond", serif;
  font-size: 48px;
  color: var(--gold-soft);
  line-height: 0.8;
  display: block;
  margin-bottom: 8px;
}

.quote-text {
  font-size: 12px;
  font-style: italic;
  font-family: "Cormorant Garamond", serif;
  font-weight: 300;
  color: var(--text);
  line-height: 1.6;
  margin-bottom: 16px;
}

.t-author {
  display: flex;
  align-items: center;
  gap: 10px;
}

.t-author img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid var(--line);
}

.t-author span {
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--gold-soft);
  font-weight: 300;
}

/* ── INVITATION CTA ───────────────────────────── */
.invitation-cta {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin: 0 48px 48px;
  padding: 36px 40px;
  border: 1px solid var(--line);
  background: var(--surface);
}

.inv-left {
  display: flex;
  align-items: center;
  gap: 28px;
}

.inv-badge {
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

.inv-crown { font-size: 12px; }

.inv-badge small {
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 6px;
  font-weight: 300;
}

.inv-badge em {
  font-family: "Cormorant Garamond", cursive;
  font-size: 18px;
  font-weight: 300;
  font-style: italic;
  line-height: 1;
}

.inv-badge b {
  font-size: 7px;
  font-weight: 300;
  opacity: 0.6;
}

.inv-text p {
  font-size: 11px;
  color: var(--muted);
  font-weight: 300;
  margin-bottom: 6px;
}

.inv-text h2 {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(20px, 2.2vw, 30px);
  font-weight: 300;
  margin: 0;
  line-height: 1.2;
}

.inv-text h2 em {
  color: var(--gold);
  font-style: italic;
}

.inv-right {
  text-align: center;
}

.inv-label {
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: var(--muted);
  font-weight: 300;
  margin-bottom: 14px;
}

.inv-sub {
  font-size: 8px;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: var(--muted);
  font-weight: 300;
  margin-top: 10px;
}

/* ── RESPONSIVE ───────────────────────────────── */
@media (max-width: 960px) {
  .hero-inner { grid-template-columns: 1fr 1fr; }
  .hero-img-right { display: none; }

  .service-cards { grid-template-columns: repeat(2, 1fr); }

  .process-steps { grid-template-columns: repeat(2, 1fr); }
  .step-arrow { display: none; }

  .amenities { grid-template-columns: repeat(3, 1fr); margin: 0 24px 40px; }

  .gallery-grid { grid-template-columns: repeat(3, 1fr); }

  .t-track { grid-template-columns: 1fr; }
  .t-card:not(.active) { display: none; }

  .invitation-cta { grid-template-columns: 1fr; gap: 28px; margin: 0 24px 36px; }

  .signature,
  .process,
  .gallery-preview,
  .testimonials { padding-left: 24px; padding-right: 24px; }
}

@media (max-width: 600px) {
  .hero-inner { grid-template-columns: 1fr; }
  .hero-img { height: 260px; }
  .service-cards { grid-template-columns: 1fr; }
  .process-steps { grid-template-columns: 1fr; }
  .amenities { grid-template-columns: repeat(2, 1fr); }
  .gallery-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>
