<script setup>
import NoirHeader from '../components/NoirHeader.vue'
import NoirFooter from '../components/NoirFooter.vue'
import NoirPaletteBar from '../components/NoirPaletteBar.vue'
</script>

<template>
  <main class="noir-about">
    <NoirHeader />
    <NoirPaletteBar />

    <!-- HERO -->
    <section class="hero">
      <div class="hero-copy">
        <span class="crown">♕</span>
        <p class="eyebrow">ABOUT ME</p>
        <h1>
          Artistry.<br />
          Passion.<br />
          <em>Purpose.</em>
          <span class="sparkle">✦</span>
        </h1>
        <div class="thin-rule">
          <span class="rule-line"></span>
          <span class="rule-dot">✦</span>
          <span class="rule-line"></span>
        </div>
        <p class="hero-body">
          With a background in both beauty and skincare, my mission is to help
          you feel your most confident through personalized, luxurious experiences
          tailored just for you.
        </p>
        <p class="signature">Renata Oliver ♡</p>
        <p class="credential">LICENSED ESTHETICIAN <span class="cred-icon">✧</span></p>
      </div>

      <div class="hero-portrait">
        <img src="/noir-bridal.png" alt="Renata Oliver portrait" />
        <div class="arc"></div>
      </div>

      <div class="hero-right">
        <div class="invitation-badge">
          <span class="inv-crown">♕</span>
          <small>BY INVITATION</small>
          <em>Only</em>
          <b>✦</b>
        </div>
        <div class="brand-panel">
          <p>CHANEL</p>
          <p>DIOR</p>
          <p>LOEWE</p>
        </div>
        <div class="hero-right-img">
          <img src="/noir-flowers.png" alt="Studio details" />
        </div>
      </div>

      <div class="side-label">BY RENATA OLIVER</div>
      <div class="monogram"><span>N</span><span>N</span></div>
    </section>

    <!-- VALUES STRIP -->
    <section class="values">
      <article>
        <div class="val-icon">♕</div>
        <h4>PASSION</h4>
        <p>A true love for beauty that drives creativity and excellence.</p>
      </article>
      <article>
        <div class="val-icon">✦</div>
        <h4>ARTISTRY</h4>
        <p>Blending technique and elegance to create timeless results.</p>
      </article>
      <article>
        <div class="val-icon">✧</div>
        <h4>PERSONALIZED</h4>
        <p>Every detail is tailored to you — your style, your vision, your glow.</p>
      </article>
      <article>
        <div class="val-icon">◻</div>
        <h4>DISCREET</h4>
        <p>Your privacy and comfort are at the heart of everything I do.</p>
      </article>
      <article>
        <div class="val-icon">♡</div>
        <h4>LUXURY</h4>
        <p>An elevated experience designed to make you feel exceptional.</p>
      </article>
    </section>

    <!-- STORY + CREDENTIALS -->
    <section class="story">
      <div class="story-copy">
        <p class="eyebrow">MY STORY <span class="sparkle-sm">✦</span></p>
        <h2>
          Beauty is personal.<br />
          <em>So is the experience.</em>
          <span class="sparkle-sm">✦</span>
        </h2>
        <p class="story-body">
          I built my brand on the belief that true beauty comes from feeling seen,
          understood, and cared for. Every service I offer is more than just a
          treatment — it's a moment for you to relax, recharge, and be your best self.
        </p>
        <p class="story-sig">— Renata Oliver</p>
        <div class="story-actions">
          <router-link to="/noir/contact" class="btn-gold">BOOK YOUR EXPERIENCE →</router-link>
          <router-link to="/noir/services" class="btn-outline">EXPLORE SERVICES ◎</router-link>
        </div>
      </div>

      <div class="story-img">
        <img src="/noir-products.png" alt="Noir studio" />
      </div>

      <div class="credentials">
        <div class="cred-header">
          <span class="cred-crown">♕</span>
          <p class="eyebrow">CREDENTIALS</p>
        </div>
        <ul>
          <li>Licensed Esthetician</li>
          <li>Soft Glam Specialist</li>
          <li>Bridal Hair &amp; Makeup Expert</li>
          <li>Advanced Colorist</li>
          <li>Ongoing Education</li>
          <li>10+ Years Experience</li>
        </ul>
        <p class="cred-script"><em>Continually perfecting<br />the art of beauty.</em></p>
      </div>
    </section>

    <!-- GALLERY ROW + QUOTE -->
    <section class="gallery-row">
      <div class="gallery-grid">
        <img src="/noir-hair.jpg"     alt="" />
        <img src="/noir-bathroom.png" alt="" />
        <img src="/noir-brushes.png"  alt="" />
        <img src="/noir-closeup.png"  alt="" />
      </div>
      <div class="gallery-quote">
        <span class="big-quote">"</span>
        <p>Because your beauty deserves more than ordinary.</p>
        <p class="quote-attr">— by Renata Oliver</p>
        <span class="sparkle-sm">✦</span>
      </div>
    </section>

    <!-- INVITATION CTA -->
    <section class="cta">
      <div class="cta-left">
        <div class="cta-badge">
          <span class="cta-crown">♕</span>
          <small>BY INVITATION</small>
          <em>Only</em>
          <b>✦</b>
        </div>
        <div class="cta-copy">
          <p>This isn't just an appointment.</p>
          <h3><em>It's an experience.</em> <span class="sparkle-sm">✦</span></h3>
        </div>
      </div>
      <div class="cta-right">
        <p class="cta-label">READY TO EXPERIENCE THE NOIR DIFFERENCE?</p>
        <router-link to="/noir/contact" class="btn-gold">BOOK PRIVATE →</router-link>
        <p class="cta-sub">BY INVITATION ONLY</p>
      </div>
    </section>

    <!-- FOOTER VALUES STRIP -->
    <section class="footer-values">
      <article>
        <div class="fv-icon">◈</div>
        <h5>LUXURY EXPERIENCE</h5>
        <p>Elevated service in a private, relaxing space.</p>
      </article>
      <article>
        <div class="fv-icon">✦</div>
        <h5>PREMIUM PRODUCTS</h5>
        <p>Only the best for your hair, skin, and glow.</p>
      </article>
      <article>
        <div class="fv-icon">◻</div>
        <h5>DISCREET &amp; PRIVATE</h5>
        <p>Your privacy and comfort are always a priority.</p>
      </article>
      <article>
        <div class="fv-icon">◷</div>
        <h5>TAILORED FOR YOU</h5>
        <p>Customized services designed just for you.</p>
      </article>
      <article>
        <div class="fv-icon">▣</div>
        <h5>BY APPOINTMENT ONLY</h5>
        <p>Exclusively by invitation for a personalized touch.</p>
      </article>
    </section>

    <NoirFooter />
  </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Inter:wght@300;400;500&display=swap");

/* ── BASE ─────────────────────────────────────── */
/* Uses ONLY Noir theme variables — zero Velvet Verse colors */
.noir-about {
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

/* ── SHARED ATOMS ─────────────────────────────── */
.eyebrow {
  display: block;
  font-size: 9px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 5px;
  color: var(--gold-soft);
  margin-bottom: 14px;
}

.sparkle    { color: var(--gold-soft); font-size: 0.55em; vertical-align: super; }
.sparkle-sm { color: var(--gold-soft); font-size: 10px; }

.btn-gold {
  display: inline-block;
  background: var(--gold);
  color: var(--bg);
  font-size: 8px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  padding: 12px 22px;
  text-decoration: none;
  transition: opacity 0.3s ease;
}
.btn-gold:hover { opacity: 0.82; }

.btn-outline {
  display: inline-block;
  background: transparent;
  color: var(--text);
  font-size: 8px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  padding: 12px 22px;
  text-decoration: none;
  border: 1px solid var(--line);
  transition: 0.3s ease;
}
.btn-outline:hover { border-color: var(--gold); color: var(--gold); }

/* ── HERO ─────────────────────────────────────── */
.hero {
  display: grid;
  grid-template-columns: 34% 36% 30%;
  min-height: 480px;
  position: relative;
  border-bottom: 1px solid var(--line);
  overflow: hidden;
}

.hero-copy {
  padding: 52px 32px 52px 52px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 3;
}

.crown {
  display: block;
  color: var(--gold-soft);
  font-size: 18px;
  margin-bottom: 10px;
}

h1 {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(28px, 3vw, 46px);
  font-weight: 300;
  line-height: 1.1;
  margin: 0 0 18px;
}
h1 em { color: var(--gold); font-style: italic; }

.thin-rule {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 120px;
  margin-bottom: 16px;
}
.rule-line { flex: 1; height: 1px; background: var(--line); display: block; }
.rule-dot  { color: var(--gold-soft); font-size: 8px; flex: none; }

.hero-body {
  font-size: 11px;
  font-weight: 300;
  color: var(--muted);
  line-height: 1.8;
  max-width: 280px;
  margin-bottom: 18px;
}

.signature {
  font-family: "Cormorant Garamond", serif;
  font-size: 18px;
  font-style: italic;
  font-weight: 300;
  color: var(--gold-soft);
  margin-bottom: 6px;
}

.credential {
  font-size: 8px;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: var(--muted);
  font-weight: 300;
  display: flex;
  align-items: center;
  gap: 6px;
}
.cred-icon { color: var(--gold-soft); }

.hero-portrait {
  position: relative;
  overflow: hidden;
}
.hero-portrait img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}
.arc {
  position: absolute;
  left: -60px;
  top: -40px;
  width: 260px;
  height: 560px;
  border-right: 1px solid color-mix(in srgb, var(--gold) 30%, transparent);
  border-radius: 50%;
  pointer-events: none;
}

.hero-right {
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.invitation-badge {
  position: absolute;
  top: 24px;
  right: 24px;
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
  gap: 1px;
  z-index: 4;
  background: var(--bg);
}
.inv-crown { font-size: 11px; }
.invitation-badge small {
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 6px;
  font-weight: 300;
}
.invitation-badge em {
  font-family: "Cormorant Garamond", cursive;
  font-size: 17px;
  font-weight: 300;
  font-style: italic;
  line-height: 1;
}
.invitation-badge b { font-size: 7px; font-weight: 300; opacity: 0.6; }

.brand-panel {
  padding: 120px 28px 16px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.brand-panel p {
  font-family: "Cormorant Garamond", serif;
  font-size: 13px;
  font-weight: 300;
  letter-spacing: 4px;
  color: var(--muted);
  margin: 0;
}

.hero-right-img {
  flex: 1;
  overflow: hidden;
  min-height: 160px;
}
.hero-right-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.75;
}

.side-label {
  position: absolute;
  left: 14px;
  bottom: 40%;
  transform: rotate(-90deg);
  transform-origin: left center;
  font-size: 7px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: var(--muted);
  font-weight: 300;
  white-space: nowrap;
}

.monogram {
  position: absolute;
  left: 36px;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border: 1px solid var(--line);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Cormorant Garamond", serif;
  font-size: 11px;
  font-weight: 400;
  color: var(--gold-soft);
  line-height: 1;
  z-index: 5;
}

/* ── VALUES STRIP ─────────────────────────────── */
.values {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-bottom: 1px solid var(--line);
}
.values article {
  text-align: center;
  padding: 28px 16px;
  border-right: 1px solid var(--line);
}
.values article:last-child { border-right: none; }
.val-icon {
  font-size: 22px;
  color: var(--gold-soft);
  margin-bottom: 10px;
  line-height: 1;
}
.values h4 {
  font-size: 8px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--gold);
  font-weight: 500;
  margin-bottom: 8px;
}
.values p {
  font-size: 10px;
  color: var(--muted);
  line-height: 1.6;
  font-weight: 300;
}

/* ── STORY ────────────────────────────────────── */
.story {
  display: grid;
  grid-template-columns: 36% 30% 34%;
  border-bottom: 1px solid var(--line);
}
.story-copy {
  padding: 48px 36px 48px 52px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
h2 {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(22px, 2.4vw, 36px);
  font-weight: 300;
  line-height: 1.15;
  margin: 0 0 16px;
}
h2 em { color: var(--gold); font-style: italic; }
.story-body {
  font-size: 11px;
  font-weight: 300;
  color: var(--muted);
  line-height: 1.8;
  max-width: 320px;
  margin-bottom: 14px;
}
.story-sig {
  font-family: "Cormorant Garamond", serif;
  font-size: 16px;
  font-style: italic;
  color: var(--gold-soft);
  margin-bottom: 22px;
}
.story-actions { display: flex; gap: 10px; flex-wrap: wrap; }
.story-img { overflow: hidden; }
.story-img img { width: 100%; height: 100%; object-fit: cover; }

.credentials {
  padding: 48px 36px;
  background: var(--surface);
  border-left: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.cred-header { display: flex; align-items: center; gap: 10px; margin-bottom: 16px; }
.cred-crown  { color: var(--gold-soft); font-size: 16px; }
.credentials ul { list-style: none; padding: 0; margin: 0 0 20px; }
.credentials li {
  font-size: 10px;
  font-weight: 300;
  color: var(--muted);
  padding: 6px 0 6px 16px;
  position: relative;
  border-bottom: 1px solid var(--line);
}
.credentials li:last-child { border-bottom: none; }
.credentials li::before { content: "✓"; position: absolute; left: 0; color: var(--gold-soft); font-size: 9px; }
.cred-script {
  font-family: "Cormorant Garamond", serif;
  font-size: 14px;
  font-style: italic;
  color: var(--gold-soft);
  font-weight: 300;
  line-height: 1.5;
}

/* ── GALLERY ROW ──────────────────────────────── */
.gallery-row {
  display: grid;
  grid-template-columns: 1fr 280px;
  border-bottom: 1px solid var(--line);
}
.gallery-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
.gallery-grid img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-right: 1px solid var(--line);
  display: block;
}
.gallery-grid img:last-child { border-right: none; }
.gallery-quote {
  padding: 28px;
  background: var(--surface);
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-left: 1px solid var(--line);
}
.big-quote {
  font-family: "Cormorant Garamond", serif;
  font-size: 52px;
  color: var(--gold-soft);
  line-height: 0.7;
  display: block;
  margin-bottom: 10px;
}
.gallery-quote p { font-size: 13px; font-weight: 300; color: var(--text); line-height: 1.55; margin-bottom: 8px; }
.quote-attr { font-family: "Cormorant Garamond", serif; font-style: italic; font-size: 13px !important; color: var(--gold-soft) !important; }

/* ── CTA ──────────────────────────────────────── */
.cta {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 36px 52px;
  border-bottom: 1px solid var(--line);
  background: var(--surface);
}
.cta-left { display: flex; align-items: center; gap: 24px; }
.cta-badge {
  width: 76px;
  height: 76px;
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
.cta-crown { font-size: 11px; }
.cta-badge small { text-transform: uppercase; letter-spacing: 1.5px; font-size: 6px; font-weight: 300; }
.cta-badge em { font-family: "Cormorant Garamond", cursive; font-size: 17px; font-weight: 300; font-style: italic; line-height: 1; }
.cta-badge b  { font-size: 7px; font-weight: 300; opacity: 0.6; }
.cta-copy p   { font-size: 11px; color: var(--muted); font-weight: 300; margin-bottom: 4px; }
.cta-copy h3  { font-family: "Cormorant Garamond", serif; font-size: clamp(18px, 2vw, 28px); font-weight: 300; margin: 0; }
.cta-copy h3 em { color: var(--gold); font-style: italic; }
.cta-right { text-align: center; }
.cta-label { font-size: 9px; text-transform: uppercase; letter-spacing: 3px; color: var(--muted); font-weight: 300; margin-bottom: 14px; }
.cta-sub   { font-size: 8px; text-transform: uppercase; letter-spacing: 3px; color: var(--muted); font-weight: 300; margin-top: 10px; }

/* ── FOOTER VALUES ────────────────────────────── */
.footer-values {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-bottom: 1px solid var(--line);
}
.footer-values article { text-align: center; padding: 28px 14px; border-right: 1px solid var(--line); }
.footer-values article:last-child { border-right: none; }
.fv-icon { font-size: 22px; color: var(--gold-soft); margin-bottom: 10px; line-height: 1; }
.footer-values h5 { font-size: 8px; letter-spacing: 2.5px; text-transform: uppercase; color: var(--gold); font-weight: 500; margin-bottom: 6px; }
.footer-values p  { font-size: 10px; color: var(--muted); line-height: 1.55; font-weight: 300; }

/* ── RESPONSIVE ───────────────────────────────── */
@media (max-width: 960px) {
  .hero { grid-template-columns: 1fr 1fr; }
  .hero-right, .monogram, .side-label { display: none; }
  .values { grid-template-columns: repeat(3, 1fr); }
  .story { grid-template-columns: 1fr; }
  .story-img { height: 280px; }
  .credentials { border-left: none; border-top: 1px solid var(--line); }
  .story-copy { padding: 40px 24px; }
  .gallery-row { grid-template-columns: 1fr; }
  .gallery-quote { border-left: none; border-top: 1px solid var(--line); }
  .cta { grid-template-columns: 1fr; gap: 28px; padding: 36px 24px; }
  .footer-values { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 600px) {
  .hero { grid-template-columns: 1fr; }
  .hero-portrait { height: 300px; }
  .values { grid-template-columns: repeat(2, 1fr); }
  .gallery-grid { grid-template-columns: repeat(2, 1fr); }
  .gallery-grid img { height: 130px; }
  .footer-values { grid-template-columns: repeat(2, 1fr); }
}
</style>
