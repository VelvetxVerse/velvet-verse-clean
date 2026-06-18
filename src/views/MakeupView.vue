<template>
  <div class="makeup-page">

    <!-- NAV -->
    <nav class="nav">
      <a href="/" class="back-link">← VELVET VERSE</a>

      <div class="brand">
        <span>RENATA OLIVEIRA</span>
        <small>BEAUTY & MAKEUP</small>
      </div>

      <div class="nav-links">
        <a href="#about">ABOUT</a>
        <a href="#services">SERVICES</a>
        <a href="#blog">JOURNAL</a>
        <a href="#contact">CONTACT</a>
      </div>
    </nav>

    <!-- NEW HERO TOP ONLY -->
    <section class="luxury-hero">

      <div class="hero-main-img">
        <img src="/valentino.png" alt="Renata Oliveira" />
      </div>

      <div class="hero-stack">
        <img src="/mascara.png" alt="Mascara beauty look" />
        <img src="/thinking.png" alt="Editorial beauty look" />
      </div>

      <div class="hero-content">
        <p class="eyebrow">OFFICIAL MEDIA KIT · 2026</p>
        <div class="gold-line"></div>

        <h1>RENATA</h1>
        <h1 class="gold">OLIVEIRA</h1>

        <p class="subtitle">
          MAKEUP ARTIST · BEAUTY CREATOR · BRAND COLLABORATOR
        </p>

        <p class="hero-copy">
          Luxury beauty creator, makeup artist, and brand collaborator with
          a combined reach of over <strong>972K</strong> followers across Instagram.
          Trusted by the world’s most prestigious beauty houses.
        </p>

        <div class="hero-buttons">
          <a href="#contact" class="gold-btn">INQUIRE NOW</a>
          <a href="mailto:velvetverse@velvetxverse.com" class="outline-btn">EMAIL DIRECTLY</a>
        </div>
      </div>

      <div class="side-panel">
        <p>BEAUTY · CONFIDENCE · ARTISTRY</p>
      </div>

    </section>

    <!-- BRAND LOGOS -->
    <section class="brand-logos">
      <p>FEATURED & COLLABORATED WITH</p>
      <div>
        <span>DIOR</span>
        <span>|</span>
        <span>CHANEL</span>
        <span>|</span>
        <span>YSL</span>
        <span>|</span>
        <span>LA MER</span>
        <span>|</span>
        <span>VALENTINO</span>
        <span>|</span>
        <span>TOM FORD</span>
      </div>
    </section>

    <!-- CONTENT GRID + BLOG SIDEBAR -->
    <section class="content-grid">

      <div class="feature-card">
        <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80" />
        <div>
          <p>BEAUTY TIPS</p>
          <h3>Expert advice to elevate your routine.</h3>
          <a href="#blog">DISCOVER MORE ›</a>
        </div>
      </div>

      <div class="feature-card">
        <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80" />
        <div>
          <p>SHOP MY FAVORITES</p>
          <h3>Handpicked luxury essentials I love.</h3>
          <a href="#services">SHOP NOW ›</a>
        </div>
      </div>

      <div class="feature-card">
        <img src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80" />
        <div>
          <p>BEHIND THE LOOK</p>
          <h3>Step-by-step tutorials and beauty secrets.</h3>
          <a href="#blog">WATCH NOW ›</a>
        </div>
      </div>

      <div class="blog-sidebar">
        <p class="section-label">LATEST ON THE BLOG</p>

        <div v-for="(post, i) in blogPosts" :key="i" class="mini-post">
          <img :src="post.img" :alt="post.title" />
          <div>
            <h4>{{ post.title }}</h4>
            <small>{{ post.date }}</small>
          </div>
        </div>

        <a href="#blog">VIEW ALL POSTS ›</a>
      </div>

    </section>

    <!-- ABOUT -->
    <section id="about" class="about">
      <div>
        <img src="/valentino.png" alt="Renata Oliveira" />
      </div>

      <div class="about-text">
        <p class="section-label">ABOUT RENATA</p>
        <h2>Beauty is an art.<br><em>You are the canvas.</em></h2>
        <p>
          With over a decade of experience in luxury beauty and content creation,
          I help brands and individuals discover their most radiant selves.
          My work has been featured alongside Dior, Chanel, Valentino, and more.
        </p>

        <div class="stats">
          <div v-for="stat in stats" :key="stat.label">
            <strong>{{ stat.value }}</strong>
            <span>{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICES -->
    <section id="services" class="services">
      <div class="section-heading">
        <p class="section-label">WHAT I OFFER</p>
        <h2>Services</h2>
      </div>

      <div class="service-grid">
        <div v-for="service in services" :key="service.title" class="service-card">
          <span>{{ service.icon }}</span>
          <h3>{{ service.title }}</h3>
          <p>{{ service.desc }}</p>
          <small>{{ service.price }}</small>
        </div>
      </div>
    </section>

    <!-- BLOG -->
    <section id="blog" class="blog">
      <div class="section-heading">
        <p class="section-label">THE JOURNAL</p>
        <h2>Latest Posts</h2>
      </div>

      <div class="post-grid">
        <div v-for="post in featuredPosts" :key="post.title" class="post-card">
          <img :src="post.img" :alt="post.title" />
          <div>
            <p>{{ post.category }}</p>
            <h3>{{ post.title }}</h3>
            <span>{{ post.excerpt }}</span>
            <small>READ MORE ›</small>
          </div>
        </div>
      </div>
    </section>

    <!-- NEWSLETTER -->
    <section class="newsletter">
      <div>
        <p class="section-label">JOIN THE GLAM COMMUNITY</p>
        <h3>Exclusive beauty tips, early access, and insider-only content.</h3>
      </div>

      <form>
        <input type="email" placeholder="Enter your email" />
        <button>SUBSCRIBE</button>
      </form>
    </section>

    <!-- TRUST BADGES -->
    <section class="badges">
      <div v-for="badge in badges" :key="badge.label">
        <span>{{ badge.icon }}</span>
        <div>
          <p>{{ badge.label }}</p>
          <small>{{ badge.desc }}</small>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="contact">
      <p class="section-label">GET IN TOUCH</p>
      <h2>Let’s Work Together</h2>
      <p>For brand collaborations, tutorials, and beauty partnerships.</p>

      <div>
        <a href="mailto:velvetverse@velvetxverse.com">EMAIL ME</a>
        <a href="https://instagram.com/velvetxverse" target="_blank">INSTAGRAM</a>
      </div>
    </section>

    <!-- FOOTER -->
    <footer>
      <span>© 2024 Renata Oliveira. All rights reserved.</span>

      <div>
        <a href="/">Velvet Verse</a>
        <a href="/privacy-policy">Privacy</a>
        <a href="/terms-conditions">Terms</a>
      </div>
    </footer>

  </div>
</template>

<script setup>
const blogPosts = [
  {
    title: 'My Nighttime Skincare Routine',
    date: 'MAY 21, 2024',
    img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=120&q=80',
  },
  {
    title: 'The Perfect Smoky Eye',
    date: 'MAY 16, 2024',
    img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=120&q=80',
  },
  {
    title: 'Summer Beauty Must-Haves',
    date: 'MAY 10, 2024',
    img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=120&q=80',
  },
]

const stats = [
  { value: '959K', label: 'INSTAGRAM' },
  { value: '55K', label: 'FACEBOOK' },
  { value: '30K', label: 'TIKTOK' },
  { value: '80K', label: 'PINTEREST' },
]

const services = [
  {
    icon: '✦',
    title: 'Brand Collaborations',
    desc: 'Full-service UGC content creation for luxury beauty and lifestyle brands.',
    price: 'INQUIRE FOR PRICING',
  },
  {
    icon: '◇',
    title: 'Makeup Tutorials',
    desc: 'Step-by-step video and photo tutorials tailored to your brand aesthetic.',
    price: 'STARTING FROM $500',
  },
  {
    icon: '▷',
    title: 'Beauty Consulting',
    desc: 'One-on-one sessions to develop your personal beauty routine.',
    price: 'STARTING FROM $150/HR',
  },
  {
    icon: '✧',
    title: 'Event Glam',
    desc: 'Professional makeup artistry for editorial shoots and special occasions.',
    price: 'STARTING FROM $300',
  },
  {
    icon: '◈',
    title: 'Social Media Strategy',
    desc: 'Content planning for beauty brands looking to grow their presence.',
    price: 'STARTING FROM $800/MO',
  },
  {
    icon: '❋',
    title: 'Product Reviews',
    desc: 'Honest, in-depth reviews of luxury beauty products.',
    price: 'INQUIRE FOR PRICING',
  },
]

const featuredPosts = [
  {
    category: 'TUTORIAL',
    title: 'The Perfect Smoky Eye in 10 Minutes',
    excerpt: 'Master the classic smoky eye with professional techniques and luxury products.',
    img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80',
  },
  {
    category: 'REVIEW',
    title: 'Dior Addict Lip Maximizer: Worth the Hype?',
    excerpt: 'I tested this iconic lip product and here is my honest review.',
    img: 'https://images.unsplash.com/photo-1586495777744-4e6232bf2f9e?w=600&q=80',
  },
  {
    category: 'LIFESTYLE',
    title: 'My Morning Beauty Ritual for Glowing Skin',
    excerpt: 'The exact routine I follow every morning for a polished glow.',
    img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80',
  },
]

const badges = [
  { icon: '◈', label: 'EXCLUSIVE CONTENT', desc: 'Only for subscribers' },
  { icon: '◇', label: 'LUXURY CURATED', desc: 'Handpicked. High-end. Always.' },
  { icon: '✦', label: 'EXPERT TIPS', desc: 'Professional beauty advice' },
  { icon: '❋', label: 'BRAND PARTNERSHIPS', desc: 'Trusted by luxury brands' },
]
</script>

<style scoped>
.makeup-page {
  background: #0a0a0a;
  color: #fff;
  font-family: "Cormorant Garamond", Georgia, serif;
  min-height: 100vh;
}

.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  height: 72px;
  padding: 0 40px;
  background: #0a0a0a;
  border-bottom: 1px solid #2a2a2a;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.back-link,
.nav-links a,
.gold-btn,
.outline-btn,
.contact a,
.brand small,
.section-label {
  font-family: Montserrat, sans-serif;
}

.back-link {
  color: #c9a96e;
  font-size: 11px;
  letter-spacing: 3px;
  text-decoration: none;
}

.brand {
  text-align: center;
  display: flex;
  flex-direction: column;
}

.brand span {
  font-size: 22px;
  letter-spacing: 4px;
  font-weight: 700;
}

.brand small {
  font-size: 10px;
  letter-spacing: 5px;
  color: #c9a96e;
  margin-top: 5px;
}

.nav-links {
  display: flex;
  gap: 32px;
}

.nav-links a {
  color: #ccc;
  text-decoration: none;
  font-size: 11px;
  letter-spacing: 2px;
}

.luxury-hero {
  display: grid;
  grid-template-columns: 38% 22% 32% 8%;
  min-height: 82vh;
  border-bottom: 1px solid #2a2a2a;
}

.hero-main-img,
.hero-stack {
  overflow: hidden;
}

.hero-main-img img,
.hero-stack img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-main-img img {
  object-position: center top;
  filter: brightness(0.86);
}

.hero-stack {
  display: grid;
  grid-template-rows: 1fr 1fr;
  border-left: 1px solid #1e1e1e;
  border-right: 1px solid #1e1e1e;
}

.hero-stack img {
  object-position: center top;
  filter: brightness(0.82);
}

.hero-stack img:first-child {
  border-bottom: 1px solid #1e1e1e;
}

.hero-content {
  background: radial-gradient(circle at top right, #171717, #0a0a0a 60%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 58px;
}

.eyebrow,
.section-label {
  font-size: 10px;
  letter-spacing: 4px;
  color: #c9a96e;
}

.gold-line {
  width: 40px;
  height: 1px;
  background: #c9a96e;
  margin: 22px 0;
}

.hero-content h1 {
  font-size: clamp(54px, 5vw, 82px);
  line-height: 0.9;
  margin: 0;
  letter-spacing: 3px;
}

.gold,
.hero-copy strong,
.about em {
  color: #c9a96e;
}

.subtitle {
  font-family: Montserrat, sans-serif;
  font-size: 10px;
  letter-spacing: 3px;
  color: #aaa;
  margin: 28px 0;
}

.hero-copy {
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  line-height: 1.8;
  color: #999;
  max-width: 520px;
}

.hero-buttons {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 32px;
}

.gold-btn,
.outline-btn {
  text-decoration: none;
  padding: 14px 30px;
  font-size: 10px;
  letter-spacing: 3px;
}

.gold-btn {
  background: #c9a96e;
  color: #0a0a0a;
  font-weight: 700;
}

.outline-btn {
  border: 1px solid #444;
  color: #fff;
}

.side-panel {
  background: #111;
  display: flex;
  align-items: center;
  justify-content: center;
}

.side-panel p {
  writing-mode: vertical-rl;
  color: #c9a96e;
  letter-spacing: 5px;
  font-family: Montserrat, sans-serif;
  font-size: 10px;
}

.brand-logos {
  background: #111;
  border-bottom: 1px solid #2a2a2a;
  padding: 28px 60px;
  text-align: center;
}

.brand-logos p {
  font-family: Montserrat, sans-serif;
  font-size: 9px;
  letter-spacing: 4px;
  color: #c9a96e;
  margin-bottom: 24px;
}

.brand-logos div {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 42px;
  flex-wrap: wrap;
}

.brand-logos span {
  font-size: 20px;
  letter-spacing: 2px;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 320px;
  min-height: 420px;
  border-bottom: 1px solid #2a2a2a;
}

.feature-card {
  position: relative;
  overflow: hidden;
  border-right: 1px solid #2a2a2a;
}

.feature-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.35);
  position: absolute;
  inset: 0;
}

.feature-card div {
  position: relative;
  z-index: 2;
  padding: 40px 36px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.feature-card p,
.feature-card a {
  font-family: Montserrat, sans-serif;
  font-size: 10px;
  letter-spacing: 3px;
  color: #c9a96e;
  text-decoration: none;
}

.feature-card h3 {
  font-size: 26px;
  color: #fff;
  margin: 10px 0;
}

.blog-sidebar {
  background: #111;
  padding: 36px 28px;
}

.mini-post {
  display: flex;
  gap: 14px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #2a2a2a;
}

.mini-post img {
  width: 56px;
  height: 56px;
  object-fit: cover;
}

.mini-post h4 {
  font-size: 14px;
  margin-bottom: 4px;
}

.mini-post small {
  font-family: Montserrat, sans-serif;
  color: #666;
}

.blog-sidebar a {
  color: #c9a96e;
  font-family: Montserrat, sans-serif;
  font-size: 10px;
  letter-spacing: 2px;
  text-decoration: none;
}

.about {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 500px;
}

.about img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-text {
  background: #111;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 64px;
}

.about h2,
.section-heading h2,
.contact h2 {
  font-size: clamp(32px, 4vw, 52px);
  line-height: 1.1;
}

.about-text > p:not(.section-label),
.contact > p:not(.section-label) {
  font-family: Montserrat, sans-serif;
  color: #aaa;
  line-height: 1.8;
}

.stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 30px;
}

.stats div {
  text-align: center;
  border: 1px solid #2a2a2a;
  padding: 20px;
}

.stats strong {
  color: #c9a96e;
  font-size: 28px;
  display: block;
}

.stats span {
  font-family: Montserrat, sans-serif;
  color: #666;
  font-size: 10px;
  letter-spacing: 2px;
}

.services,
.blog,
.contact {
  padding: 90px 60px;
}

.section-heading {
  text-align: center;
  margin-bottom: 60px;
}

.service-grid,
.post-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
}

.service-card {
  background: #111;
  padding: 44px 36px;
  border: 1px solid #1a1a1a;
}

.service-card span {
  font-size: 28px;
}

.service-card h3,
.post-card h3 {
  font-size: 22px;
}

.service-card p,
.post-card span {
  font-family: Montserrat, sans-serif;
  color: #888;
  line-height: 1.7;
  font-size: 14px;
}

.service-card small,
.post-card small,
.post-card p {
  font-family: Montserrat, sans-serif;
  color: #c9a96e;
  letter-spacing: 2px;
  font-size: 10px;
}

.blog {
  background: #111;
}

.post-card {
  background: #0a0a0a;
  overflow: hidden;
}

.post-card img {
  width: 100%;
  height: 280px;
  object-fit: cover;
}

.post-card div {
  padding: 32px;
}

.newsletter {
  background: #0a0a0a;
  border-top: 1px solid #2a2a2a;
  border-bottom: 1px solid #2a2a2a;
  padding: 60px;
  display: flex;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
}

.newsletter h3 {
  color: #aaa;
  font-family: Montserrat, sans-serif;
  font-weight: 300;
}

.newsletter form {
  display: flex;
  max-width: 500px;
  flex: 1;
}

.newsletter input {
  flex: 1;
  background: #111;
  border: 1px solid #333;
  padding: 14px 20px;
  color: #fff;
}

.newsletter button {
  background: #c9a96e;
  color: #0a0a0a;
  border: none;
  padding: 14px 28px;
  font-family: Montserrat, sans-serif;
  font-size: 10px;
  letter-spacing: 2px;
}

.badges {
  background: #111;
  padding: 32px 60px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.badges div {
  display: flex;
  gap: 16px;
}

.badges span {
  color: #c9a96e;
  font-size: 24px;
}

.badges p {
  font-family: Montserrat, sans-serif;
  font-size: 10px;
  letter-spacing: 2px;
}

.badges small {
  font-family: Montserrat, sans-serif;
  color: #666;
}

.contact {
  text-align: center;
}

.contact div {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 35px;
}

.contact a {
  border: 1px solid #c9a96e;
  color: #c9a96e;
  padding: 14px 40px;
  text-decoration: none;
  font-size: 10px;
  letter-spacing: 3px;
}

.contact a:last-child {
  background: #c9a96e;
  color: #0a0a0a;
}

footer {
  background: #111;
  border-top: 1px solid #2a2a2a;
  padding: 24px 60px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  font-family: Montserrat, sans-serif;
  font-size: 11px;
  color: #555;
}

footer a {
  color: #555;
  text-decoration: none;
  margin-left: 28px;
}

@media (max-width: 950px) {
  .nav-links {
    display: none;
  }

  .luxury-hero {
    grid-template-columns: 1fr;
  }

  .hero-main-img {
    height: 430px;
  }

  .hero-stack {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: none;
    height: 300px;
  }

  .side-panel {
    display: none;
  }

  .hero-content {
    padding: 40px 24px;
  }

  .content-grid,
  .about,
  .service-grid,
  .post-grid,
  .badges {
    grid-template-columns: 1fr;
  }

  .newsletter {
    padding: 40px 24px;
  }
}
</style>