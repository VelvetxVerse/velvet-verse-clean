<template>
  <div class="kit-page">

    <!-- ── NAV ── -->
    <nav class="nav">
      <div class="logo">
        <span>RENATA</span>
        <small>MAKEUP & BEAUTY</small>
      </div>
      <div class="nav-links">
        <a href="/makeup#hero">Home</a>
        <a href="/makeup#about">About</a>
        <a href="#brands">Brands</a>
        <a href="#services">Services</a>
        <a href="/blog">Blog</a>
        <a href="#contact">Contact</a>
      </div>
      <a class="nav-btn" href="https://www.velvetxverse.com/collaborate">Collaborate</a>
    </nav>

    <main>

      <!-- ── HERO ── -->
      <section class="hero box">
        <div class="hero-photos">
          <img src="/valentino.png" alt="Renata Oliveira" class="photo-main" />
          <div class="photo-stack">
            <img src="/mk1.png" alt="Renata beauty" />
            <img src="/mk2.png" alt="Renata beauty" />
          </div>
        </div>
        <div class="hero-content">
          <p class="eyebrow">OFFICIAL MEDIA KIT · 2024</p>
          <h1>RENATA<br><span class="gold">OLIVEIRA</span></h1>
          <p class="subtitle">Makeup Artist · Beauty Creator · Brand Collaborator</p>
          <p>Luxury beauty creator with a combined reach of over <strong>972K followers</strong> across Instagram. Trusted by the world's most prestigious beauty houses.</p>
          <div class="hero-buttons">
            <a href="#contact">Inquire Now</a>
            <a href="mailto:velvetverse@velvetxverse.com" class="outline">Email Directly</a>
          </div>
        </div>
      </section>

      <!-- ── STATS STRIP ── -->
      <section class="stats-strip box">
        <div v-for="stat in platformStats" :key="stat.label" class="stat-item">
          <h3>{{ stat.value }}</h3>
          <p class="stat-label">{{ stat.label }}</p>
          <p class="stat-handle">{{ stat.handle }}</p>
        </div>
      </section>

      <!-- ── ABOUT + AUDIENCE ── -->
      <section class="grid-two">
        <div class="box about-box">
          <p class="eyebrow">ABOUT RENATA</p>
          <h2>Beauty is an art.<br><em>You are the canvas.</em></h2>
          <p>With over a decade of experience in luxury beauty and content creation, Renata helps brands and individuals discover their most radiant selves. Her work has been featured alongside Dior, Chanel, Valentino, and more.</p>
          <div class="about-stats">
            <div v-for="s in aboutStats" :key="s.label" class="about-stat">
              <h3>{{ s.value }}</h3>
              <p>{{ s.label }}</p>
            </div>
          </div>
        </div>
        <div class="box audience-box">
          <p class="eyebrow">AUDIENCE INSIGHTS</p>
          <h2>Who She Reaches</h2>
          <div class="demo-bars">
            <div v-for="d in demographics" :key="d.label" class="demo-row">
              <div class="demo-meta">
                <span>{{ d.label }}</span>
                <span class="demo-val">{{ d.value }}</span>
              </div>
              <div class="bar-bg">
                <div class="bar-fill" :style="{ width: d.pct }"></div>
              </div>
            </div>
          </div>
          <div class="tags" style="margin-top:24px;">
            <span v-for="loc in locations" :key="loc">{{ loc }}</span>
          </div>
        </div>
      </section>

      <!-- ── BRANDS ── -->
      <section id="brands" class="box brands">
        <p class="eyebrow">FEATURED & COLLABORATED WITH</p>
        <div>
          <span>Dior</span>
          <span>Chanel</span>
          <span>YSL</span>
          <span>Medicude</span>
          <span>Revlon</span>
          <span>Pixi Beauty</span>
          <span>L'Oréal</span>
          <span>Bobbi Brown</span>
        </div>
      </section>

      <!-- ── SERVICES ── -->
      <section id="services" class="box">
        <p class="eyebrow center">COLLABORATION SERVICES</p>
        <h2 class="center">What We Can Create Together</h2>
        <div class="card-grid">
          <div v-for="s in kitServices" :key="s.title" class="mini-card">
            <span>{{ s.icon }}</span>
            <h3>{{ s.title }}</h3>
            <p>{{ s.desc }}</p>
          </div>
        </div>
      </section>

      <!-- ── GALLERY ── -->
      <section id="gallery" class="box gallery-box">
        <p class="eyebrow center">CONTENT GALLERY</p>
        <h2 class="center">Work & Aesthetic</h2>
        <div class="gallery-grid">
          <div v-for="img in galleryImages" :key="img" class="gallery-item">
            <img :src="img" alt="Renata Oliveira beauty content" />
          </div>
        </div>
      </section>

      <!-- ── WHY RENATA ── -->
      <section class="box why-box">
        <p class="eyebrow center">THE RENATA DIFFERENCE</p>
        <h2 class="center">Why Work With Me</h2>
        <div class="card-grid">
          <div v-for="d in differentiators" :key="d.title" class="mini-card">
            <span>{{ d.icon }}</span>
            <h3>{{ d.title }}</h3>
            <p>{{ d.desc }}</p>
          </div>
        </div>
      </section>

      <!-- ── BLOG ── -->
      <section id="blog-section" class="box">
        <p class="eyebrow center">THE BEAUTY BLOG</p>
        <h2 class="center">Latest Posts</h2>
        <div class="blog-grid">
          <article v-for="post in featuredPosts" :key="post.title" class="post-card">
            <img :src="post.img" :alt="post.title" />
            <div>
              <p class="category">{{ post.category }}</p>
              <h3>{{ post.title }}</h3>
              <p>{{ post.excerpt }}</p>
              <a href="/blog">Read More →</a>
            </div>
          </article>
        </div>
      </section>

      <!-- ── CONTACT ── -->
      <section id="contact" class="box contact">
        <p class="eyebrow">READY TO COLLABORATE?</p>
        <h2>Let's Create Something Beautiful</h2>
        <p>For brand partnerships, sponsored content, UGC packages, product reviews, and beauty campaigns.</p>
        <a href="mailto:velvetverse@velvetxverse.com">velvetverse@velvetxverse.com</a>
      </section>

    </main>
  </div>
</template>

<script setup>
const platformStats = [
  { value: '957K', label: 'INSTAGRAM', handle: '@renataoliveiraofficial' },
  { value: '15.5K', label: 'INSTAGRAM', handle: '@renataxolivermakeup' },
  { value: '61K', label: 'FACEBOOK', handle: 'Renata Oliveira' },
  { value: '1M+', label: 'FB VIEWS/MO', handle: 'Avg. monthly reach' },
  { value: '30K', label: 'TIKTOK', handle: '@renataoliveiraofficial' },
  { value: '80K', label: 'PINTEREST', handle: 'Renata Oliveira' },
]

const aboutStats = [
  { value: '957K', label: 'Instagram' },
  { value: '10+', label: 'Years Experience' },
  { value: '50+', label: 'Brand Partnerships' },
  { value: '4.2%', label: 'Engagement Rate' },
]

const demographics = [
  { label: 'Female Audience', value: '87%', pct: '87%' },
  { label: 'Age 18–34', value: '62%', pct: '62%' },
  { label: 'Age 35–44', value: '24%', pct: '24%' },
  { label: 'Engagement (Main)', value: '4.2%', pct: '42%' },
  { label: 'Engagement (Makeup)', value: '6.8%', pct: '68%' },
]

const locations = ['Brazil', 'USA', 'Portugal', 'France', 'UK', 'Spain']

const kitServices = [
  { icon: '✦', title: 'Sponsored Posts & Reels', desc: 'Dedicated Instagram posts and Reels featuring your brand with full creative direction and authentic storytelling.' },
  { icon: '◇', title: 'UGC Content Creation', desc: 'High-quality content packages for use across your brand\'s own channels — no posting required.' },
  { icon: '▷', title: 'Tutorial & Review Content', desc: 'In-depth makeup tutorials and honest product reviews that drive purchase intent.' },
  { icon: '✧', title: 'Brand Ambassador Packages', desc: 'Long-term ambassador relationships with monthly content deliverables and ongoing audience engagement.' },
  { icon: '◈', title: 'Event Appearances', desc: 'In-person attendance at product launches, press events, and brand activations with live social coverage.' },
  { icon: '❋', title: 'Gifted Collaborations', desc: 'Organic gifted content for emerging luxury and indie beauty brands — authentic reviews.' },
]

const galleryImages = [
  '/mk4.png', '/mk5.png', '/mk6.png', '/mk7.png',
  '/mk8.png', '/mk9.png', '/mk10.png', '/mk11.png', '/mk12.png',
]

const differentiators = [
  { icon: '✦', title: 'Luxury Niche', desc: 'Exclusively high-end beauty — her audience expects and trusts premium brand recommendations.' },
  { icon: '◇', title: 'Bilingual Reach', desc: 'Fluent in English and Portuguese, reaching Brazil, Europe, and North America.' },
  { icon: '▷', title: 'High Engagement', desc: 'Above-average engagement rates driven by genuine community connection.' },
  { icon: '✧', title: 'Editorial Quality', desc: 'Every piece of content is produced to editorial standards.' },
]

const featuredPosts = [
  { category: 'TUTORIAL', title: 'The Perfect Smoky Eye in 10 Minutes', excerpt: 'Master the classic smoky eye with professional techniques and my favorite products from Tom Ford and Charlotte Tilbury.', img: '/mk13.png' },
  { category: 'REVIEW', title: 'Dior Addict Lip Maximizer: Worth the Hype?', excerpt: 'I tested this iconic lip plumper for 30 days. Here\'s my honest take on whether it lives up to its luxury price tag.', img: '/mk3.png' },
  { category: 'LIFESTYLE', title: 'My Morning Beauty Ritual for Glowing Skin', excerpt: 'The exact 15-minute routine I follow every morning to achieve that lit-from-within glow.', img: '/mk2.png' },
]
</script>

<style scoped>
.kit-page {
  min-height: 100vh;
  background: #faf7f2;
  color: #2a2a2a;
  font-family: 'Montserrat', sans-serif;
}

main {
  max-width: 1180px;
  margin: 0 auto;
  padding: 28px 22px 70px;
}

.nav {
  height: 62px;
  padding: 0 34px;
  background: #fffaf5;
  border-bottom: 1px solid #e8ddd0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 20;
}

.logo {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.logo span {
  font-family: 'Cormorant Garamond', serif;
  font-size: 23px;
  letter-spacing: 3px;
  color: #2a2a2a;
}

.logo small {
  margin-top: 5px;
  font-size: 8px;
  letter-spacing: 3px;
  color: #c8a16b;
}

.nav-links {
  display: flex;
  gap: 26px;
}

.nav-links a {
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #6c625b;
  text-decoration: none;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: #c8a16b;
}

.nav-btn {
  border: 1px solid #c8a16b;
  padding: 9px 22px;
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #c8a16b;
  text-decoration: none;
  transition: all 0.2s;
}

.nav-btn:hover {
  background: #c8a16b;
  color: #fff;
}

.box {
  background: #ffffff;
  border: 1px solid #e8ddd0;
  border-radius: 22px;
  box-shadow: 0 18px 45px rgba(80, 55, 35, 0.07);
  overflow: hidden;
  margin-bottom: 26px;
}

/* HERO */
.hero {
  display: grid;
  grid-template-columns: 55% 45%;
  min-height: 420px;
}

.hero-photos {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2px;
  overflow: hidden;
}

.photo-main {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

.photo-stack {
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 2px;
}

.photo-stack img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

.hero-content {
  padding: 48px 52px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.eyebrow {
  font-size: 10px;
  letter-spacing: 3px;
  color: #c8a16b;
  text-transform: uppercase;
  margin-bottom: 14px;
}

h1, h2, h3 {
  font-family: 'Cormorant Garamond', serif;
  color: #2a2a2a;
  margin: 0;
}

h1 {
  font-size: 52px;
  line-height: 0.95;
  margin-bottom: 10px;
}

.gold {
  color: #c8a16b;
}

.subtitle {
  font-size: 11px;
  letter-spacing: 2px;
  color: #c8a16b;
  text-transform: uppercase;
  margin-bottom: 16px;
}

h2 {
  font-size: 34px;
  margin-bottom: 16px;
}

h3 {
  font-size: 20px;
  margin-bottom: 8px;
}

p {
  color: #7a7a7a;
  line-height: 1.75;
  font-size: 14px;
  margin: 0 0 12px;
}

.hero-buttons {
  display: flex;
  gap: 12px;
  margin-top: 20px;
}

.hero-buttons a {
  background: #c8a16b;
  color: white;
  padding: 13px 28px;
  border-radius: 999px;
  text-decoration: none;
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: background 0.2s;
}

.hero-buttons a:hover {
  background: #b5905a;
}

.hero-buttons a.outline {
  background: transparent;
  color: #c8a16b;
  border: 1px solid #c8a16b;
}

.hero-buttons a.outline:hover {
  background: #c8a16b;
  color: #fff;
}

/* STATS STRIP */
.stats-strip {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 28px 0;
  text-align: center;
}

.stat-item {
  padding: 12px 16px;
  border-right: 1px solid #e8ddd0;
}

.stat-item:last-child {
  border-right: none;
}

.stat-item h3 {
  font-size: 28px;
  color: #c8a16b;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #2a2a2a;
  margin: 0;
}

.stat-handle {
  font-size: 10px;
  color: #aaa;
  margin: 2px 0 0;
}

/* GRID TWO */
.grid-two {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 26px;
  margin-bottom: 26px;
}

.about-box, .audience-box {
  padding: 40px;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 24px;
}

.about-stat {
  border: 1px solid #e8ddd0;
  border-radius: 14px;
  padding: 18px;
  background: #fffaf5;
  text-align: center;
}

.about-stat h3 {
  font-size: 28px;
  color: #c8a16b;
  margin-bottom: 4px;
}

.about-stat p {
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0;
}

/* DEMOGRAPHICS */
.demo-bars {
  margin-top: 16px;
}

.demo-row {
  margin-bottom: 14px;
}

.demo-meta {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-bottom: 5px;
  color: #5a5a5a;
}

.demo-val {
  color: #c8a16b;
  font-weight: 600;
}

.bar-bg {
  height: 6px;
  background: #f0e8de;
  border-radius: 999px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  background: #c8a16b;
  border-radius: 999px;
}

/* TAGS */
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tags span {
  border: 1px solid #e8ddd0;
  border-radius: 999px;
  padding: 6px 14px;
  font-size: 10px;
  letter-spacing: 1.5px;
  color: #8c7560;
  background: #fffaf5;
  text-transform: uppercase;
}

/* BRANDS */
.brands {
  padding: 34px;
  text-align: center;
}

.brands div {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 16px;
}

.brands span {
  border: 1px solid #e8ddd0;
  border-radius: 12px;
  padding: 10px 20px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 20px;
  color: #2a2a2a;
  background: #fffaf5;
}

/* SERVICES / CARDS */
#services, #blog-section {
  padding: 42px;
}

.center {
  text-align: center;
}

.card-grid, .blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-top: 24px;
}

.mini-card {
  border: 1px solid #e8ddd0;
  border-radius: 18px;
  padding: 28px;
  background: #fffaf5;
  min-height: 200px;
  transition: box-shadow 0.2s;
}

.mini-card:hover {
  box-shadow: 0 8px 24px rgba(80,55,35,0.1);
}

.mini-card > span {
  color: #c8a16b;
  font-size: 22px;
  display: block;
  margin-bottom: 12px;
}

/* GALLERY */
.gallery-box {
  padding: 42px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 24px;
}

.gallery-item {
  overflow: hidden;
  border-radius: 14px;
}

.gallery-item img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  object-position: center top;
  display: block;
  transition: transform 0.4s;
}

.gallery-item:hover img {
  transform: scale(1.04);
}

/* WHY BOX */
.why-box {
  padding: 42px;
}

/* BLOG */
.post-card {
  border: 1px solid #e8ddd0;
  border-radius: 18px;
  overflow: hidden;
  background: #fffaf5;
}

.post-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center top;
}

.post-card div {
  padding: 22px;
}

.category {
  color: #c8a16b;
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 6px;
}

.post-card a {
  color: #c8a16b;
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
}

/* CONTACT */
.contact {
  padding: 52px;
  text-align: center;
}

.contact p {
  max-width: 560px;
  margin: 0 auto 26px;
}

.contact a {
  background: #c8a16b;
  color: white;
  padding: 13px 32px;
  border-radius: 999px;
  text-decoration: none;
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: inline-block;
  transition: background 0.2s;
}

.contact a:hover {
  background: #b5905a;
}

@media (max-width: 900px) {
  .nav-links { display: none; }
  .hero, .hero-photos, .grid-two, .card-grid, .blog-grid, .gallery-grid, .stats-strip {
    grid-template-columns: 1fr;
  }
  .hero-content { padding: 32px; }
  h1 { font-size: 40px; }
}
</style>
