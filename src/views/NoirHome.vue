<script setup>
import NoirHeader from '../components/NoirHeader.vue'
import NoirFooter from '../components/NoirFooter.vue'
import NoirPaletteBar from '../components/NoirPaletteBar.vue'
</script>

<template>
  <main class="noir-page">
    <NoirHeader />
    <NoirPaletteBar />

    <section class="hero">
      <div class="side-label">
        <span>TAYLOR GIRONDA</span>
      </div>

      <div class="monogram">TG</div>

      <div class="hero-copy">
        <p class="eyebrow">Soft Glam Event Makeup Artist</p>

        <h1>
          Effortless beauty.<br />
          Unforgettable<br />
          <em>moments.</em> <span>✦</span>
        </h1>

        <div class="thin-rule"></div>

        <p class="services-line">Custom Color · Cuts · Bridal · Skin Care</p>

        <p class="hero-body">
          Elevated beauty experiences tailored with precision, artistry, and quiet luxury.
        </p>

        <div class="hero-actions">
          <router-link to="/noir/contact" class="btn-gold">Book Experience →</router-link>
          <router-link to="/noir/services" class="btn-outline">Services</router-link>
        </div>
      </div>

      <div class="invitation-badge">
        <small>By Invitation</small>
        <em>Only</em>
      </div>
    </section>

    <section class="icon-strip">
      <article>
        <div class="icon">✂</div>
        <h3>Color</h3>
        <p>Bespoke color tailored to your lifestyle.</p>
      </article>

      <article>
        <div class="icon">◎</div>
        <h3>Cuts</h3>
        <p>Precision cuts designed to frame.</p>
      </article>

      <article>
        <div class="icon">◇</div>
        <h3>Bridal</h3>
        <p>Hair and makeup for your day.</p>
      </article>

      <article>
        <div class="icon">⬡</div>
        <h3>Skin Care</h3>
        <p>Personalized care for radiant skin.</p>
      </article>
    </section>

    <section class="about-panel">
      <div class="about-copy">
        <p class="eyebrow">About Taylor</p>

        <h2>
          Artistry. Passion.<br />
          <em>Purpose.</em>
        </h2>

        <p>
          A refined private beauty experience designed around your natural
          features, personal style, and most important moments.
        </p>

        <p class="signature">Taylor Gironda ♡</p>
        <p class="license">Licensed Esthetician</p>
      </div>

      <div class="about-img">
        <img src="/noir-bridal.png" alt="Taylor Gironda Beauty" />
      </div>

      <div class="booking-card">
        <p class="bc-label">Booking</p>
        <h3>2026</h3>
        <em>Bridal Season</em>
        <p>Now accepting a limited number of private bridal dates.</p>

        <router-link to="/noir/contact" class="btn-gold sm">
          Inquire →
        </router-link>
      </div>
    </section>

    <section class="values-row">
      <article>
        <h4>Luxury Experience</h4>
        <p>Private, relaxing, elevated service.</p>
      </article>

      <article>
        <h4>Premium Products</h4>
        <p>Only professional-quality products.</p>
      </article>

      <article>
        <h4>Discreet & Private</h4>
        <p>Your comfort is always protected.</p>
      </article>

      <article>
        <h4>Appointment Only</h4>
        <p>Personalized time reserved for you.</p>
      </article>
    </section>

    <section class="follow-section">
      <div>
        <p class="eyebrow">Follow Along</p>

        <div class="social-icons">
          <a href="#">◎</a>
          <a href="#">⊕</a>
          <a href="#">♪</a>
          <a href="#">✉</a>
        </div>
      </div>

      <div class="mini-gallery">
        <img src="/noir-hair.jpg" alt="" />
        <img src="/noir-flowers.png" alt="" />
        <img src="/noir-brushes.png" alt="" />
        <img src="/noir-bridal.png" alt="" />
      </div>
    </section>

    <NoirFooter />
  </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Inter:wght@300;400;500&display=swap");

.noir-page {
  --muted: color-mix(in srgb, var(--text) 54%, transparent);
  --line: color-mix(in srgb, var(--gold) 18%, transparent);
  --gold-soft: color-mix(in srgb, var(--gold) 74%, transparent);

  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  font-family: "Inter", sans-serif;
  font-size: 12px;
}

/* HERO */
.hero {
  position: relative;
  height: 430px;
  overflow: hidden;
  display: flex;
  align-items: center;
  background:
    linear-gradient(
      90deg,
      color-mix(in srgb, var(--bg) 98%, transparent) 0%,
      color-mix(in srgb, var(--bg) 80%, transparent) 38%,
      color-mix(in srgb, var(--bg) 14%, transparent) 100%
    ),
    url("/noir-hair.jpg") center right / cover no-repeat;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.side-label {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 26px;
  border-right: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: center;
}

.side-label span {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  letter-spacing: 4px;
  font-size: 7px;
  text-transform: uppercase;
  color: var(--muted);
}

.monogram {
  position: absolute;
  left: 48px;
  top: 50%;
  transform: translateY(-50%);
  width: 38px;
  height: 38px;
  border: 1px solid var(--line);
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-family: "Cormorant Garamond", serif;
  font-size: 15px;
  letter-spacing: 1px;
  color: var(--gold-soft);
  background: var(--bg);
}

.hero-copy {
  position: relative;
  z-index: 2;
  padding-left: 110px;
  max-width: 430px;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 8px;
  color: var(--gold-soft);
  margin-bottom: 12px;
}

.hero h1 {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(34px, 3.4vw, 54px);
  line-height: 0.98;
  font-weight: 300;
  margin: 0 0 14px;
}

.hero h1 em {
  color: var(--gold);
  font-style: italic;
}

.hero h1 span {
  color: var(--gold-soft);
  font-size: 0.5em;
}

.thin-rule {
  width: 130px;
  height: 1px;
  background: var(--line);
  margin-bottom: 14px;
}

.services-line {
  font-family: "Cormorant Garamond", serif;
  color: var(--gold-soft);
  font-style: italic;
  font-size: 14px;
  margin-bottom: 8px;
}

.hero-body {
  max-width: 280px;
  color: var(--muted);
  font-size: 10.5px;
  line-height: 1.7;
  margin-bottom: 20px;
}

.hero-actions {
  display: flex;
  gap: 10px;
}

.btn-gold,
.btn-outline {
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2.4px;
  font-size: 7.5px;
  transition: 0.3s ease;
}

.btn-gold {
  background: var(--gold);
  color: var(--bg);
  padding: 10px 18px;
}

.btn-outline {
  border: 1px solid var(--line);
  color: var(--text);
  padding: 9px 17px;
}

.btn-gold:hover,
.btn-outline:hover {
  opacity: 0.75;
}

.btn-gold.sm {
  padding: 9px 16px;
}

.invitation-badge {
  position: absolute;
  right: 70px;
  top: 54px;
  width: 78px;
  height: 78px;
  border: 1px solid var(--line);
  border-radius: 50%;
  display: grid;
  place-content: center;
  text-align: center;
  color: var(--gold-soft);
  background: color-mix(in srgb, var(--bg) 55%, transparent);
}

.invitation-badge small {
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 5.5px;
}

.invitation-badge em {
  font-family: "Cormorant Garamond", serif;
  font-size: 19px;
  font-style: italic;
}

/* SMALL LUXURY BOXES */
.icon-strip {
  max-width: 1180px;
  margin: 24px auto 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid var(--line);
  border-radius: 14px;
  overflow: hidden;
  background: var(--surface);
}

.icon-strip article {
  text-align: center;
  padding: 18px 16px;
  border-right: 1px solid var(--line);
}

.icon-strip article:last-child {
  border-right: none;
}

.icon {
  font-size: 16px;
  color: var(--gold-soft);
  margin-bottom: 8px;
}

.icon-strip h3,
.values-row h4 {
  text-transform: uppercase;
  letter-spacing: 2.8px;
  font-size: 7.5px;
  color: var(--gold);
  margin-bottom: 6px;
}

.icon-strip p,
.values-row p {
  color: var(--muted);
  font-size: 9.5px;
  line-height: 1.55;
  max-width: 170px;
  margin: 0 auto;
}

/* ABOUT */
.about-panel {
  max-width: 1180px;
  margin: 22px auto 0;
  padding: 28px 34px;
  display: grid;
  grid-template-columns: 33% 30% 37%;
  align-items: center;
  border: 1px solid var(--line);
  border-radius: 14px 14px 0 0;
  background: var(--surface);
}

.about-copy h2 {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(26px, 2.5vw, 38px);
  line-height: 1.05;
  font-weight: 300;
  margin: 0 0 12px;
}

.about-copy h2 em {
  color: var(--gold);
  font-style: italic;
}

.about-copy p {
  max-width: 285px;
  color: var(--muted);
  font-size: 10.5px;
  line-height: 1.75;
}

.signature {
  font-family: "Cormorant Garamond", serif;
  font-style: italic;
  font-size: 19px !important;
  color: var(--text) !important;
  margin-top: 12px;
}

.license {
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 7px !important;
}

.about-img {
  height: 220px;
  border: 1px solid var(--line);
  overflow: hidden;
}

.about-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.booking-card {
  margin-left: 26px;
  padding: 24px 20px;
  border: 1px solid var(--line);
  text-align: center;
  background: color-mix(in srgb, var(--bg) 60%, transparent);
}

.bc-label {
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 7px;
  color: var(--muted);
}

.booking-card h3 {
  font-family: "Cormorant Garamond", serif;
  font-size: 38px;
  font-weight: 300;
  margin: 4px 0;
}

.booking-card em {
  display: block;
  font-family: "Cormorant Garamond", serif;
  color: var(--gold);
  font-size: 21px;
  margin-bottom: 12px;
}

.booking-card p {
  color: var(--muted);
  font-size: 8px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  line-height: 1.7;
  margin-bottom: 14px;
}

/* VALUES */
.values-row {
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid var(--line);
  border-top: none;
  border-radius: 0 0 14px 14px;
  overflow: hidden;
  background: var(--surface);
}

.values-row article {
  text-align: center;
  padding: 18px 16px;
  border-right: 1px solid var(--line);
}

.values-row article:last-child {
  border-right: none;
}

/* FOLLOW */
.follow-section {
  max-width: 1180px;
  margin: 22px auto 42px;
  padding: 22px 28px;
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 26px;
  align-items: center;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--surface);
}

.social-icons {
  display: flex;
  gap: 12px;
}

.social-icons a {
  color: var(--gold-soft);
  text-decoration: none;
  font-size: 15px;
}

.mini-gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}

.mini-gallery img {
  width: 100%;
  height: 82px;
  object-fit: cover;
  border: 1px solid var(--line);
}

/* RESPONSIVE */
@media (max-width: 960px) {
  .hero {
    height: auto;
    min-height: 420px;
  }

  .hero-copy {
    padding: 56px 24px 56px 60px;
  }

  .invitation-badge {
    display: none;
  }

  .icon-strip,
  .values-row {
    grid-template-columns: repeat(2, 1fr);
    margin-left: 22px;
    margin-right: 22px;
  }

  .about-panel {
    grid-template-columns: 1fr;
    margin-left: 22px;
    margin-right: 22px;
    gap: 20px;
  }

  .booking-card {
    margin-left: 0;
  }

  .follow-section {
    grid-template-columns: 1fr;
    margin-left: 22px;
    margin-right: 22px;
  }

  .mini-gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .side-label,
  .monogram {
    display: none;
  }

  .hero-copy {
    padding-left: 26px;
  }

  .icon-strip,
  .values-row {
    grid-template-columns: 1fr;
  }

  .hero-actions {
    flex-wrap: wrap;
  }
}
</style>