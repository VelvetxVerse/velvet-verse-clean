<template>
  <main class="media-page">
    <nav class="nav">
      <div class="logo">
        <strong>RENATA</strong>
        <span>OLIVEIRA</span>
        <small>MAKEUP & BEAUTY</small>
      </div>

      <div class="links">
        <a href="#hero">HOME</a>
        <a href="#audience">ABOUT</a>
        <a href="#brands">COLLABORATIONS</a>
        <a href="#services">SERVICES</a>
        <a href="#stats">STATS</a>
        <a href="#cta">CONTACT</a>
      </div>

      <a class="nav-btn" href="https://www.velvetxverse.com/collaborate">
        COLLABORATE
      </a>
    </nav>

    <section id="hero" class="hero">
      <div class="hero-img">
        <img src="/valentino.png" alt="Renata Oliveira" />
      </div>

      <div class="hero-text">
        <p class="eyebrow">OFFICIAL MEDIA KIT · 2024</p>
        <div class="line"></div>

        <h1>RENATA</h1>
        <h1 class="gold">OLIVEIRA</h1>

        <p class="subtitle">
          MAKEUP ARTIST · BEAUTY CREATOR · BRAND COLLABORATOR
        </p>

        <p class="intro">
          Luxury beauty creator, makeup artist, and brand collaborator with a
          combined reach of over <strong>972K</strong> followers across Instagram.
          Trusted by the world’s most prestigious beauty houses.
        </p>

        <div class="buttons">
          <a href="https://www.velvetxverse.com/collaborate" class="btn gold-btn">
            INQUIRE NOW →
          </a>
          <a href="mailto:velvetverse@velvetxverse.com" class="btn outline-btn">
            EMAIL DIRECTLY →
          </a>
        </div>
      </div>
    </section>

    <section id="brands" class="brands">
      <p>FEATURED & COLLABORATED WITH</p>
      <div>
        <span>DIOR</span>
        <span>CHANEL</span>
        <span>YSL</span>
        <span>LA MER</span>
        <span>VALENTINO</span>
        <span>TOM FORD</span>
      </div>
    </section>

    <section id="stats" class="stats">
      <div v-for="stat in statsStrip" :key="stat.label" class="stat">
        <strong>{{ stat.value }}</strong>
        <span>{{ stat.label }}</span>
        <small>{{ stat.sub }}</small>
      </div>
    </section>

    <section id="audience" class="split">
      <div>
        <p class="section-label">AUDIENCE PROFILE</p>

        <div v-for="demo in demographics" :key="demo.label" class="bar-wrap">
          <div class="bar-head">
            <span>{{ demo.label }}</span>
            <strong>{{ demo.value }}</strong>
          </div>
          <div class="bar">
            <i :style="{ width: demo.pct }"></i>
          </div>
        </div>

        <p class="mini-title">TOP LOCATIONS</p>
        <div class="tags">
          <span v-for="loc in locations" :key="loc">{{ loc }}</span>
        </div>
      </div>

      <div>
        <p class="section-label">PLATFORM REACH</p>

        <div class="platform" v-for="plat in platformStats" :key="plat.label">
          <div>
            <span>{{ plat.label }}</span>
            <small>{{ plat.handle }}</small>
          </div>
          <strong>{{ plat.value }}</strong>
        </div>
      </div>
    </section>

    <section id="services" class="services">
      <p class="section-label center">WHAT I OFFER</p>
      <h2>Collaboration Services</h2>

      <div class="cards">
        <article v-for="service in kitServices" :key="service.title">
          <span>{{ service.icon }}</span>
          <h3>{{ service.title }}</h3>
          <p>{{ service.desc }}</p>
        </article>
      </div>
    </section>

    <section class="why">
      <p class="section-label center">THE RENATA DIFFERENCE</p>
      <h2>Why Work With Me</h2>

      <div class="why-grid">
        <article v-for="point in differentiators" :key="point.title">
          <span>{{ point.icon }}</span>
          <h3>{{ point.title }}</h3>
          <p>{{ point.desc }}</p>
        </article>
      </div>
    </section>

    <section id="cta" class="cta">
      <p class="section-label center">READY TO COLLABORATE?</p>
      <h2>Let’s Create <em>Something Beautiful</em></h2>
      <p>
        For brand partnerships, sponsored content, event appearances, and beauty consulting.
      </p>

      <div class="buttons center-buttons">
        <a href="https://www.velvetxverse.com/collaborate" class="btn gold-btn">
          START A COLLABORATION
        </a>
        <a href="mailto:velvetverse@velvetxverse.com" class="btn outline-btn">
          EMAIL ME
        </a>
      </div>
    </section>

    <footer>
      <span>© 2024 Renata Oliveira. All rights reserved.</span>
      <div>
        <a href="/">Velvet Verse</a>
        <a href="/makeup">Makeup</a>
        <a href="/privacy-policy">Privacy</a>
      </div>
    </footer>
  </main>
</template>

<script setup>
const statsStrip = [
  { value: '972K+', label: 'TOTAL FOLLOWERS', sub: 'Across Instagram' },
  { value: '15M+', label: 'MONTHLY IMPRESSIONS', sub: 'Avg. across platforms' },
  { value: 'GLOBAL', label: 'GLOBAL AUDIENCE', sub: 'US · BR · EU · MENA' },
  { value: 'PREMIUM', label: 'PREMIUM CONTENT', sub: 'High Quality · Engaging' },
  { value: 'TRUSTED', label: 'TRUSTED BY', sub: 'Luxury Beauty Brands' },
]

const platformStats = [
  { value: '957K', label: 'INSTAGRAM', handle: '@renataoliveiraofficial' },
  { value: '15.5K', label: 'INSTAGRAM', handle: '@renataxolivermakeup' },
  { value: '61K', label: 'FACEBOOK', handle: 'Renata Oliveira' },
  { value: '30K', label: 'TIKTOK', handle: '@renataoliveiraofficial' },
  { value: '80K', label: 'PINTEREST', handle: 'Renata Oliveira' },
]

const demographics = [
  { label: 'Female Audience', value: '87%', pct: '87%' },
  { label: 'Age 18–34', value: '62%', pct: '62%' },
  { label: 'Age 35–44', value: '24%', pct: '24%' },
  { label: 'Engagement Rate', value: '4.2%', pct: '42%' },
]

const locations = ['Brazil', 'USA', 'Portugal', 'France', 'UK', 'Spain']

const kitServices = [
  { icon: '✦', title: 'Sponsored Posts & Reels', desc: 'Dedicated Instagram posts and Reels with professional beauty storytelling.' },
  { icon: '◇', title: 'UGC Content Creation', desc: 'High-quality content for brand websites, ads, and social channels.' },
  { icon: '▷', title: 'Tutorial & Review Content', desc: 'Makeup tutorials and product reviews that feel polished and authentic.' },
  { icon: '✧', title: 'Brand Ambassador Packages', desc: 'Long-term monthly content partnerships with beauty brands.' },
  { icon: '◈', title: 'Event Appearances', desc: 'In-person beauty events, product launches, and social coverage.' },
  { icon: '❋', title: 'Gifted Collaborations', desc: 'Organic content for luxury, beauty, skincare, and lifestyle brands.' },
]

const differentiators = [
  { icon: '✦', title: 'LUXURY NICHE', desc: 'Premium beauty audience with trust in high-end recommendations.' },
  { icon: '◇', title: 'BILINGUAL REACH', desc: 'English and Portuguese audience across global markets.' },
  { icon: '▷', title: 'HIGH ENGAGEMENT', desc: 'Strong community connection and consistent content performance.' },
  { icon: '✧', title: 'EDITORIAL QUALITY', desc: 'Polished content with a luxury beauty campaign feel.' },
]
</script>

<style scoped>
.media-page {
  background: #080808;
  color: white;
  min-height: 100vh;
  font-family: "Cormorant Garamond", Georgia, serif;
}

.nav {
  height: 64px;
  padding: 0 34px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #080808;
  border-bottom: 1px solid #202020;
  position: sticky;
  top: 0;
  z-index: 10;
}

.logo {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.logo strong {
  font-size: 20px;
  letter-spacing: 4px;
}

.logo span {
  font-size: 10px;
  letter-spacing: 5px;
  color: #c9a96e;
  margin-top: 4px;
}

.logo small {
  font-family: Montserrat, sans-serif;
  font-size: 7px;
  letter-spacing: 4px;
  color: #777;
  margin-top: 5px;
}

.links {
  display: flex;
  gap: 28px;
}

.links a,
.nav-btn,
.btn {
  font-family: Montserrat, sans-serif;
  text-decoration: none;
  letter-spacing: 2px;
  font-size: 9px;
}

.links a {
  color: #aaa;
}

.links a:hover {
  color: #c9a96e;
}

.nav-btn {
  border: 1px solid #c9a96e;
  color: #c9a96e;
  padding: 9px 22px;
}

.hero {
  display: grid;
  grid-template-columns: 48% 52%;
  min-height: 640px;
  max-height: 720px;
  overflow: hidden;
  border-bottom: 1px solid #202020;
}

.hero-img {
  position: relative;
  background: #0d0d0d;
}

.hero-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  filter: brightness(0.9);
}

.hero-img::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, transparent 65%, #080808 100%);
}

.hero-text {
  padding: 42px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: radial-gradient(circle at 70% 30%, #171717, #080808 55%);
}

.eyebrow,
.section-label {
  font-family: Montserrat, sans-serif;
  color: #c9a96e;
  font-size: 8px;
  letter-spacing: 5px;
}

.line {
  width: 34px;
  height: 1px;
  background: #c9a96e;
  margin: 16px 0;
}

h1 {
  font-size: clamp(38px, 4.6vw, 64px);
  line-height: 0.9;
  letter-spacing: 3px;
  margin: 0;
}

.gold,
strong,
em {
  color: #c9a96e;
}

.subtitle {
  font-family: Montserrat, sans-serif;
  font-size: 9px;
  letter-spacing: 3px;
  color: #aaa;
  margin: 18px 0;
}

.intro {
  font-family: Montserrat, sans-serif;
  max-width: 430px;
  font-size: 12px;
  line-height: 1.8;
  color: #999;
}

.buttons {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 24px;
}

.btn {
  padding: 11px 26px;
  font-weight: 600;
}

.gold-btn {
  background: #c9a96e;
  color: #080808;
}

.outline-btn {
  border: 1px solid #444;
  color: #ddd;
}

.brands {
  padding: 20px 32px;
  text-align: center;
  background: #101010;
  border-bottom: 1px solid #202020;
}

.brands p {
  font-family: Montserrat, sans-serif;
  color: #c9a96e;
  font-size: 8px;
  letter-spacing: 4px;
  margin-bottom: 18px;
}

.brands div {
  display: flex;
  justify-content: center;
  gap: 36px;
  flex-wrap: wrap;
}

.brands span {
  font-size: 20px;
  letter-spacing: 2px;
}

.stats {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 18px 34px;
  border-bottom: 1px solid #202020;
}

.stat {
  text-align: center;
  border-right: 1px solid #202020;
}

.stat:last-child {
  border-right: none;
}

.stat strong {
  display: block;
  font-size: 18px;
}

.stat span,
.stat small {
  display: block;
  font-family: Montserrat, sans-serif;
}

.stat span {
  font-size: 8px;
  letter-spacing: 2px;
  color: #c9a96e;
}

.stat small {
  color: #666;
  font-size: 9px;
  margin-top: 4px;
}

.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.split > div {
  padding: 34px;
  border-bottom: 1px solid #202020;
}

.split > div:first-child {
  border-right: 1px solid #202020;
}

.bar-wrap {
  margin: 18px 0;
}

.bar-head {
  display: flex;
  justify-content: space-between;
  font-family: Montserrat, sans-serif;
  font-size: 10px;
  color: #aaa;
  margin-bottom: 7px;
}

.bar {
  height: 2px;
  background: #222;
}

.bar i {
  display: block;
  height: 100%;
  background: #c9a96e;
}

.mini-title {
  font-family: Montserrat, sans-serif;
  color: #c9a96e;
  font-size: 8px;
  letter-spacing: 3px;
  margin-top: 24px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tags span {
  border: 1px solid #2a2a2a;
  padding: 5px 12px;
  font-family: Montserrat, sans-serif;
  color: #888;
  font-size: 9px;
}

.platform {
  background: #111;
  border: 1px solid #1d1d1d;
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.platform span,
.platform small {
  display: block;
  font-family: Montserrat, sans-serif;
}

.platform span {
  font-size: 9px;
  letter-spacing: 2px;
  color: #aaa;
}

.platform small {
  color: #666;
  margin-top: 4px;
}

.platform strong {
  font-size: 24px;
}

.services,
.why,
.cta {
  padding: 42px 34px;
  border-bottom: 1px solid #202020;
}

.center {
  text-align: center;
}

h2 {
  text-align: center;
  font-size: 32px;
  margin: 8px 0 30px;
}

.cards {
  max-width: 1080px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
}

.cards article,
.why-grid article {
  background: #0b0b0b;
  border: 1px solid #1d1d1d;
  padding: 24px;
}

.cards h3,
.why-grid h3 {
  font-size: 17px;
  margin: 10px 0;
}

.cards p,
.why-grid p,
.cta p {
  font-family: Montserrat, sans-serif;
  color: #777;
  font-size: 11px;
  line-height: 1.7;
}

.why-grid {
  max-width: 1080px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  text-align: center;
}

.cta h2 {
  font-size: 36px;
}

.cta p {
  max-width: 520px;
  margin: auto;
}

.center-buttons {
  justify-content: center;
}

footer {
  padding: 18px 34px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 14px;
  font-family: Montserrat, sans-serif;
  font-size: 10px;
  color: #555;
}

footer a {
  color: #555;
  text-decoration: none;
  margin-left: 20px;
}

@media (max-width: 900px) {
  .links {
    display: none;
  }

  .hero,
  .split {
    grid-template-columns: 1fr;
    max-height: none;
  }

  .hero {
    min-height: auto;
  }

  .hero-img {
    height: 420px;
  }

  .stats,
  .cards,
  .why-grid {
    grid-template-columns: 1fr;
  }

  .stat {
    border-right: none;
    border-bottom: 1px solid #202020;
    padding: 14px 0;
  }

  .hero-text {
    padding: 34px 24px;
  }
}
</style>