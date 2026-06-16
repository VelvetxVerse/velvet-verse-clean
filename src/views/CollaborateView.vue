<template>
  <main class="collab-page">

    <!-- NAV -->
    <nav class="top-nav">
      <div class="logo">
        RENATA OLIVER
        <span>PRIVATE BRAND PARTNERSHIPS</span>
      </div>

      <div class="links">
        <a href="#home" @click.prevent="scrollTo('home')">Home</a>
        <a href="#about" @click.prevent="scrollTo('about')">About</a>
        <a href="#collaborations" @click.prevent="scrollTo('collaborations')">Collaboration</a>
        <a href="#portfolio" @click.prevent="scrollTo('portfolio')">Portfolio</a>
        <a href="#media-kit" @click.prevent="scrollTo('media-kit')">Media Kit</a>
        <a href="#contact" @click.prevent="scrollTo('contact')">Contact</a>
      </div>

      <div class="nav-right">
        <a href="/" class="back-btn">← Velvet Verse</a>
        <a href="/socialmediakit.png" download="Renata-Oliveira-MediaKit.png" class="nav-btn">⬇ Download Media Kit</a>
      </div>
    </nav>

    <!-- HERO -->
    <section id="home" class="hero-luxe">
      <div class="hero-text">
        <p class="eyebrow">Luxury Beauty • Travel • Lifestyle</p>

        <h1>
          Something
          <span>Beautiful</span>
          Together
        </h1>

        <p class="intro">
          Professional content creation, luxury storytelling, and authentic brand
          partnerships with a highly engaged audience.
        </p>

        <div class="mini-stats">
          <div>
            <svg class="stat-icon" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="22" stroke="#b8935a" stroke-width="1.5"/><ellipse cx="30" cy="30" rx="10" ry="22" stroke="#b8935a" stroke-width="1.5"/><line x1="8" y1="30" x2="52" y2="30" stroke="#b8935a" stroke-width="1.5"/><line x1="8" y1="20" x2="52" y2="20" stroke="#b8935a" stroke-width="1.5"/><line x1="8" y1="40" x2="52" y2="40" stroke="#b8935a" stroke-width="1.5"/></svg>
            <strong>140+</strong><p>Countries<br />Reached</p>
          </div>
          <div>
            <svg class="stat-icon" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 30 C14 14 46 14 54 30 C46 46 14 46 6 30Z" stroke="#b8935a" stroke-width="1.5"/><circle cx="30" cy="30" r="7" stroke="#b8935a" stroke-width="1.5"/><circle cx="30" cy="30" r="2.5" fill="#b8935a"/><line x1="30" y1="10" x2="30" y2="6" stroke="#b8935a" stroke-width="1.5"/><line x1="22" y1="12" x2="20" y2="8" stroke="#b8935a" stroke-width="1.5"/><line x1="38" y1="12" x2="40" y2="8" stroke="#b8935a" stroke-width="1.5"/></svg>
            <strong>15M+</strong><p>Monthly<br />Views</p>
          </div>
          <div>
            <svg class="stat-icon" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 8 C22 8 18 14 18 20 C18 28 24 34 30 38 C36 34 42 28 42 20 C42 14 38 8 30 8Z" stroke="#b8935a" stroke-width="1.5"/><path d="M20 42 C20 42 18 52 30 52 C42 52 40 42 40 42" stroke="#b8935a" stroke-width="1.5"/></svg>
            <strong>75%</strong><p>Women<br />25 - 45</p>
          </div>
          <div>
            <svg class="stat-icon" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="28" width="8" height="24" stroke="#b8935a" stroke-width="1.5"/><rect x="22" y="20" width="8" height="32" stroke="#b8935a" stroke-width="1.5"/><rect x="34" y="14" width="8" height="38" stroke="#b8935a" stroke-width="1.5"/><rect x="46" y="22" width="6" height="30" stroke="#b8935a" stroke-width="1.5"/><line x1="6" y1="52" x2="54" y2="52" stroke="#b8935a" stroke-width="1.5"/></svg>
            <strong>New York</strong><p>Based</p>
          </div>
        </div>

        <div class="buttons">
          <a href="#media-kit" @click.prevent="scrollTo('media-kit')" class="btn filled">View Media Kit</a>
          <a href="#contact" @click.prevent="scrollTo('contact')" class="btn outline">Work With Me</a>
        </div>
      </div>

      <div class="hero-image">
        <img :src="heroImg" alt="Renata Oliver luxury collaboration" />
      </div>
    </section>

    <!-- STATS BAR -->
    <div class="bottom-stats">
      <div>
        <svg class="stat-icon" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="22" stroke="#b8935a" stroke-width="1.5"/><ellipse cx="30" cy="30" rx="10" ry="22" stroke="#b8935a" stroke-width="1.5"/><line x1="8" y1="30" x2="52" y2="30" stroke="#b8935a" stroke-width="1.5"/><line x1="8" y1="20" x2="52" y2="20" stroke="#b8935a" stroke-width="1.5"/><line x1="8" y1="40" x2="52" y2="40" stroke="#b8935a" stroke-width="1.5"/></svg>
        <strong>140+</strong><p>Countries Reached</p>
      </div>
      <div>
        <svg class="stat-icon" viewBox="0 0 60 60" fill="none"><path d="M6 30 C14 14 46 14 54 30 C46 46 14 46 6 30Z" stroke="#b8935a" stroke-width="1.5"/><circle cx="30" cy="30" r="7" stroke="#b8935a" stroke-width="1.5"/><circle cx="30" cy="30" r="2.5" fill="#b8935a"/><line x1="30" y1="10" x2="30" y2="6" stroke="#b8935a" stroke-width="1.5"/><line x1="22" y1="12" x2="20" y2="8" stroke="#b8935a" stroke-width="1.5"/><line x1="38" y1="12" x2="40" y2="8" stroke="#b8935a" stroke-width="1.5"/></svg>
        <strong>15M+</strong><p>Monthly Views</p>
      </div>
      <div>
        <svg class="stat-icon" viewBox="0 0 60 60" fill="none"><path d="M30 8 C22 8 18 14 18 20 C18 28 24 34 30 38 C36 34 42 28 42 20 C42 14 38 8 30 8Z" stroke="#b8935a" stroke-width="1.5"/><path d="M20 42 C20 42 18 52 30 52 C42 52 40 42 40 42" stroke="#b8935a" stroke-width="1.5"/></svg>
        <strong>75%</strong><p>Women 25 - 45</p>
      </div>
      <div>
        <svg class="stat-icon" viewBox="0 0 60 60" fill="none"><rect x="10" y="28" width="8" height="24" stroke="#b8935a" stroke-width="1.5"/><rect x="22" y="20" width="8" height="32" stroke="#b8935a" stroke-width="1.5"/><rect x="34" y="14" width="8" height="38" stroke="#b8935a" stroke-width="1.5"/><rect x="46" y="22" width="6" height="30" stroke="#b8935a" stroke-width="1.5"/><line x1="6" y1="52" x2="54" y2="52" stroke="#b8935a" stroke-width="1.5"/></svg>
        <strong>7+</strong><p>Years of Experience</p>
      </div>
    </div>

    <!-- ABOUT -->
    <div id="about" class="anchor"></div>
    <section class="about section-trim">
      <div class="about-img">
        <img :src="aboutImg" alt="Renata Oliver" />
      </div>

      <div class="about-copy">
        <p class="label">Meet Renata</p>
        <h2>Luxury Creator<br /><span>& Storyteller</span></h2>
        <p>
          Renata Oliver is a New York based beauty, travel, and lifestyle creator
          specializing in refined visual storytelling for luxury brands, hotels,
          clinics, beauty companies, and elevated experiences.
        </p>
      </div>
    </section>

    <!-- COLLABORATIONS / SERVICES -->
    <div id="collaborations" class="anchor"></div>
    <section class="services section-trim">
      <p class="label center">Collaboration Services</p>
      <h2>Partnership Opportunities</h2>

      <div class="service-grid">
        <div v-for="item in services" :key="item">✦<span>{{ item }}</span></div>
      </div>
    </section>

    <!-- PORTFOLIO -->
    <div id="portfolio" class="anchor"></div>
    <section class="portfolio section-trim">
      <div class="section-header">
        <span class="section-line"></span>
        <p class="label center">Editorial Portfolio</p>
        <h2>Featured Campaigns</h2>
      </div>

      <div class="masonry-grid">
        <div
          v-for="(img, index) in workImages"
          :key="img"
          class="masonry-card"
          :class="`card-${index + 1}`"
        >
          <img :src="img" alt="Portfolio image" />
        </div>
      </div>
    </section>

    <!-- MEDIA KIT -->
    <div id="media-kit" class="anchor"></div>
    <section class="media-kit section-trim">
      <div class="kit-copy">
        <p class="label">Media Kit</p>
        <h2>Audience &amp; Campaign Reach</h2>
        <p class="kit-desc">Renata Oliveira is a multilingual beauty creator, professional makeup artist, and luxury lifestyle influencer known for cinematic storytelling and elevated editorial content.</p>

        <div class="kit-platforms">
          <div class="kit-platform">
            <span class="kit-icon">📸</span>
            <div>
              <strong>959K</strong>
              <p>Instagram Followers</p>
              <small>Avg. 200K views per post</small>
            </div>
          </div>
          <div class="kit-platform">
            <span class="kit-icon">👍</span>
            <div>
              <strong>55K</strong>
              <p>Facebook Followers</p>
              <small>11M+ monthly views</small>
            </div>
          </div>
          <div class="kit-platform">
            <span class="kit-icon">📌</span>
            <div>
              <strong>80K</strong>
              <p>Pinterest Views/Month</p>
            </div>
          </div>
          <div class="kit-platform">
            <span class="kit-icon">🎵</span>
            <div>
              <strong>30.1K</strong>
              <p>TikTok Followers</p>
            </div>
          </div>
        </div>

        <div class="kit-stats-row">
          <div><strong>100K+</strong><p>Avg. Video Views</p></div>
          <div><strong>200K+</strong><p>Avg. Instagram Views/Post</p></div>
          <div><strong>80%</strong><p>USA, Europe, Brazil</p></div>
          <div><strong>58%</strong><p>Female Audience</p></div>
        </div>

        <a href="/mediakit.pdf" download class="btn filled kit-download">⬇ Download Full Media Kit</a>
      </div>

      <div class="kit-card">
        <img :src="mediaKitImg" alt="Media kit preview" />
      </div>
    </section>

    <!-- CONTACT -->
    <div id="contact" class="anchor"></div>
    <section class="contact section-trim">
      <p class="label center">New York • Worldwide</p>
      <h2>Let's Create Something Beautiful Together</h2>
      <a href="mailto:welovejetlag@gmail.com">welovejetlag@gmail.com</a>
    </section>

  </main>
</template>

<script setup>
const heroImg = '/makeupinlucencer.PNG'
const aboutImg = '/beauty.PNG'
const mediaKitImg = '/socialmediakit.png'

const workImages = [
  '/beautyroutine.PNG',
  '/beauty.PNG',
  '/makeupinlucencer.PNG',
  '/mirror.PNG',
  '/morningte.PNG',
  '/podcast.PNG',
  '/socialmediaprofile.PNG',
  '/whitedres.PNG',
  '/workingsocialmedia.PNG',
]

const services = [
  'Instagram Reels',
  'TikTok Videos',
  'Product Photography',
  'Luxury Lifestyle Content',
  'Hotel & Spa Features',
  'Beauty Campaigns',
  'UGC Content',
  'Brand Ambassadorships',
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Parisienne&family=Cormorant+Garamond:wght@300;400;500&family=DM+Sans:wght@300;400;500&display=swap');

html {
  scroll-behavior: smooth;
}

.anchor {
  position: relative;
  top: -115px;
  display: block;
  visibility: hidden;
  pointer-events: none;
}

.collab-page {
  background: #f6eee8;
  color: #30251f;
  font-family: 'DM Sans', sans-serif;
  max-width: 1800px;
  margin: 0 auto;
}

/* NAV */
.top-nav {
  height: 78px;
  padding: 0 46px;
  background: rgba(255, 248, 243, 0.96);
  border-bottom: 1px solid #d7b9a9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 18px;
  letter-spacing: 4px;
  line-height: 1;
  text-align: center;
  color: #30251f;
  text-decoration: none;
}

.logo span {
  display: block;
  font-family: 'DM Sans', sans-serif;
  font-size: 6px;
  letter-spacing: 3px;
  margin-top: 7px;
  color: #9b7d71;
}

.links {
  display: flex;
  gap: 34px;
}

.links a {
  text-decoration: none;
  color: #1f1a17;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  transition: color 180ms;
}

.links a:hover {
  color: #b98580;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 14px;
}

.back-btn {
  text-decoration: none;
  color: #b8935a;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
  padding: 8px 14px;
  border: 1px solid #d7b9a9;
  transition: all 180ms;
}

.back-btn:hover {
  background: #f5ede3;
  color: #30251f;
}

.stat-icon {
  width: 42px;
  height: 42px;
  display: block;
  margin: 0 auto 10px;
}

.nav-btn,
.btn {
  text-decoration: none;
  text-transform: uppercase;
  font-size: 8px;
  letter-spacing: 1.8px;
  padding: 10px 18px;
  transition: opacity 180ms;
}

.nav-btn:hover,
.btn.filled:hover {
  opacity: 0.85;
}

.nav-btn,
.btn.filled {
  background: linear-gradient(135deg, #b98580, #c8a073);
  color: white;
}

.btn.outline {
  border: 1px solid #b98580;
  color: #30251f;
  transition: border-color 180ms, color 180ms;
}

.btn.outline:hover {
  border-color: #c8a073;
  color: #b98580;
}

/* HERO */
.hero-luxe {
  min-height: 480px;
  display: grid;
  grid-template-columns: 52% 48%;
  background: #fff8f3;
  border-bottom: 1px solid #e7d7cc;
  max-width: 1180px;
  margin: 0 auto;
}

.hero-text {
  padding: 0 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 520px;
  margin: 0 auto;
}

.eyebrow,
.label {
  font-size: 9px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #9b7d71;
  margin: 0 0 16px;
  text-align: center;
}

.center {
  text-align: center;
}

h1 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(34px, 3vw, 52px);
  letter-spacing: -0.5px;
  font-weight: 400;
  line-height: .95;
  text-transform: uppercase;
  margin: 0;
  color: #30251f;
  text-align: center;
}

h1 span {
  display: block;
  font-family: 'Parisienne', cursive;
  font-size: clamp(42px, 4vw, 60px);
  color: #bd9588;
  text-transform: none;
  line-height: .75;
}

h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(22px, 2vw, 34px);
  font-weight: 400;
  line-height: 1.05;
  margin: 0 0 22px;
  color: #30251f;
}

h2 span {
  font-family: 'Parisienne', cursive;
  color: #bd9588;
  font-size: 1.25em;
}

.intro {
  max-width: 360px;
  font-size: 13px;
  line-height: 1.8;
  color: #574943;
  margin: 26px auto;
  text-align: center;
}

.hero-image {
  overflow: hidden;
  max-height: 720px;
}

.hero-image img,
.about-img img,
.photo-grid img,
.kit-card img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

/* MINI STATS */
.mini-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 440px;
  margin: 24px auto 28px;
}

.mini-stats div {
  text-align: center;
  border-right: 1px solid #dfc8bd;
  padding: 0 12px;
}

.mini-stats div:last-child {
  border-right: none;
}

.mini-stats span,
.bottom-stats span {
  color: #bd8f75;
  font-size: 23px;
  display: block;
  margin-bottom: 7px;
}

.mini-stats strong {
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  color: #30251f;
}

.mini-stats p {
  font-size: 8px;
  text-transform: uppercase;
  line-height: 1.35;
  margin: 6px 0 0;
  color: #9b7d71;
}

.buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
}

/* BOTTOM STATS BAR */
.bottom-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: #fff8f3;
  border-bottom: 1px solid #d7b9a9;
  max-width: 1180px;
  margin: 0 auto;
}

.bottom-stats div {
  padding: 22px 16px;
  text-align: center;
  border-right: 1px solid #d7b9a9;
}

.bottom-stats div:last-child {
  border-right: none;
}

.bottom-stats strong {
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px;
  font-weight: 400;
  color: #30251f;
  display: block;
}

.bottom-stats p {
  font-size: 8px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  line-height: 1.4;
  margin: 4px 0 0;
  color: #9b7d71;
}

/* SECTION SHARED */
.section-trim {
  border-top: 1px solid #e7d7cc;
  border-bottom: 1px solid #e7d7cc;
}

/* ABOUT */
.about {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 54px;
  padding: 36px 42px;
  background: #f8f0ea;
  align-items: center;
  max-width: 1180px;
  margin: 0 auto;
}

.about-img {
  height: 280px;
  overflow: hidden;
}

.about-copy p,
.media-kit p,
.media-kit li {
  font-size: 13px;
  line-height: 1.85;
  color: #574943;
}

/* SERVICES */
.services {
  padding: 36px 42px;
  background: #fffdfb;
  max-width: 1180px;
  margin: 0 auto;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin-top: 28px;
}

.service-grid div {
  border: 1px solid #dfc8bd;
  padding: 24px 14px;
  text-align: center;
  color: #bd8f75;
  font-size: 18px;
  transition: background 200ms;
}

.service-grid div:hover {
  background: rgba(189, 143, 117, 0.06);
}

.service-grid span {
  display: block;
  color: #30251f;
  font-size: 10px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-top: 8px;
}

/* PORTFOLIO */
.portfolio {
  padding: 36px 40px;
  background: #f7efe8;
  max-width: 1180px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-line {
  width: 60px;
  height: 1px;
  background: #c7a38f;
  display: block;
  margin: 0 auto 20px;
}

/* MASONRY GRID */
.masonry-grid {
  columns: 3;
  column-gap: 10px;
}

.masonry-card {
  break-inside: avoid;
  margin-bottom: 10px;
  overflow: hidden;
  border: 1px solid #e7d7cc;
  position: relative;
}

.masonry-card img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  transition: transform 0.45s ease;
}

.masonry-card:hover img {
  transform: scale(1.04);
}

/* Vary heights for Pinterest feel */
.card-1 img { aspect-ratio: 3/4; }
.card-2 img { aspect-ratio: 4/5; }
.card-3 img { aspect-ratio: 2/3; }
.card-4 img { aspect-ratio: 3/5; }
.card-5 img { aspect-ratio: 4/3; }
.card-6 img { aspect-ratio: 3/4; }
.card-7 img { aspect-ratio: 2/3; }
.card-8 img { aspect-ratio: 5/6; }
.card-9 img { aspect-ratio: 3/4; }

@media (max-width: 1100px) {
  .masonry-grid { columns: 2; }
}

@media (max-width: 600px) {
  .masonry-grid { columns: 1; }
}

/* MEDIA KIT */
.media-kit {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 54px;
  padding: 36px 42px;
  background: linear-gradient(to right, #f8f0ea 50%, #fffdfb 50%);
  align-items: center;
  max-width: 1180px;
  margin: 0 auto;
}

.media-kit ul {
  padding-left: 18px;
  margin-top: 20px;
}

.kit-copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.kit-desc {
  font-size: 12px;
  line-height: 1.8;
  color: #574943;
  margin-bottom: 22px;
}

.kit-platforms {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-bottom: 22px;
}

.kit-platform {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 14px;
  border: 1px solid #e7d7cc;
  background: rgba(255,248,243,0.7);
}

.kit-icon {
  font-size: 20px;
  line-height: 1;
  margin-top: 2px;
}

.kit-platform strong {
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px;
  font-weight: 500;
  color: #30251f;
  display: block;
  line-height: 1;
}

.kit-platform p {
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #9b7d71;
  margin: 4px 0 2px;
}

.kit-platform small {
  font-size: 9px;
  color: #b98580;
}

.kit-stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  border: 1px solid #e7d7cc;
  margin-bottom: 26px;
}

.kit-stats-row div {
  padding: 12px 10px;
  text-align: center;
  border-right: 1px solid #e7d7cc;
}

.kit-stats-row div:last-child {
  border-right: none;
}

.kit-stats-row strong {
  font-family: 'Cormorant Garamond', serif;
  font-size: 20px;
  font-weight: 500;
  color: #30251f;
  display: block;
}

.kit-stats-row p {
  font-size: 8px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: #9b7d71;
  margin: 4px 0 0;
  line-height: 1.3;
}

.kit-download {
  display: inline-block;
  align-self: flex-start;
}

.kit-card {
  overflow: hidden;
  box-shadow: 0 22px 55px rgba(93, 62, 43, .12);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* CONTACT */
.contact {
  padding: 36px 42px;
  background:
    linear-gradient(
      rgba(255,248,243,.92),
      rgba(255,248,243,.92)
    ),
    url('/whitedres.PNG');
  background-size: cover;
  background-position: center;
  text-align: center;
  max-width: 1180px;
  margin: 0 auto;
}

.contact a {
  color: #b98580;
  text-decoration: none;
  font-size: 15px;
  border-bottom: 1px solid #dfc8bd;
  padding-bottom: 2px;
  transition: color 180ms;
}

.contact a:hover {
  color: #c8a073;
}

/* RESPONSIVE */
@media (max-width: 1100px) {
  .links {
    display: none;
  }

  .hero-luxe,
  .about,
  .media-kit {
    grid-template-columns: 1fr;
  }

  .hero-text,
  .about,
  .media-kit,
  .services,
  .portfolio,
  .contact {
    padding: 42px 26px;
  }

  .hero-image {
    height: 520px;
  }

  .mini-stats,
  .bottom-stats,
  .service-grid,
  .photo-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .top-nav {
    padding: 0 20px;
  }

  .nav-btn {
    display: none;
  }

  .logo {
    font-size: 18px;
    letter-spacing: 4px;
  }

  .mini-stats,
  .bottom-stats,
  .service-grid,
  .photo-grid {
    grid-template-columns: 1fr;
  }

  .buttons {
    flex-direction: column;
  }
}
</style>
