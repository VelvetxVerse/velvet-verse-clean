<template>
  <div class="makeup-page">
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

    <div class="page-container">
      <section class="luxury-hero luxury-trim">
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

      <section class="brand-logos luxury-trim">
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

      <section class="content-grid">
        <div class="feature-card luxury-trim">
          <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80" />
          <div>
            <p>BEAUTY TIPS</p>
            <h3>Expert advice to elevate your routine.</h3>
            <a href="#blog">DISCOVER MORE ›</a>
          </div>
        </div>

        <div class="feature-card luxury-trim">
          <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80" />
          <div>
            <p>SHOP MY FAVORITES</p>
            <h3>Handpicked luxury essentials I love.</h3>
            <a href="#services">SHOP NOW ›</a>
          </div>
        </div>

        <div class="feature-card luxury-trim">
          <img src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80" />
          <div>
            <p>BEHIND THE LOOK</p>
            <h3>Step-by-step tutorials and beauty secrets.</h3>
            <a href="#blog">WATCH NOW ›</a>
          </div>
        </div>

        <div class="blog-sidebar luxury-trim">
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

      <section id="about" class="about">
        <div class="about-img">
          <img src="/valentino.png" alt="Renata Oliveira" />
        </div>

        <div class="about-text luxury-trim">
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

      <section id="services" class="services">
        <div class="section-heading">
          <p class="section-label">WHAT I OFFER</p>
          <h2>Services</h2>
        </div>

        <div class="service-grid">
          <div v-for="service in services" :key="service.title" class="service-card luxury-trim">
            <span>{{ service.icon }}</span>
            <h3>{{ service.title }}</h3>
            <p>{{ service.desc }}</p>
            <small>{{ service.price }}</small>
          </div>
        </div>
      </section>

      <section id="blog" class="blog">
        <div class="section-heading">
          <p class="section-label">THE JOURNAL</p>
          <h2>Latest Posts</h2>
        </div>

        <div class="post-grid">
          <div v-for="post in featuredPosts" :key="post.title" class="post-card luxury-trim">
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

      <section class="newsletter luxury-trim">
        <div>
          <p class="section-label">JOIN THE GLAM COMMUNITY</p>
          <h3>Exclusive beauty tips, early access, and insider-only content.</h3>
        </div>

        <form>
          <input type="email" placeholder="Enter your email" />
          <button>SUBSCRIBE</button>
        </form>
      </section>

      <section class="badges">
        <div v-for="badge in badges" :key="badge.label" class="badge-item luxury-trim">
          <span>{{ badge.icon }}</span>
          <div>
            <p>{{ badge.label }}</p>
            <small>{{ badge.desc }}</small>
          </div>
        </div>
      </section>

      <section id="contact" class="contact luxury-trim">
        <p class="section-label">GET IN TOUCH</p>
        <h2>Let’s Work Together</h2>
        <p>For brand collaborations, tutorials, and beauty partnerships.</p>

        <div>
          <a href="mailto:velvetverse@velvetxverse.com">EMAIL ME</a>
          <a href="https://instagram.com/velvetxverse" target="_blank">INSTAGRAM</a>
        </div>
      </section>

      <footer>
        <span>© 2024 Renata Oliveira. All rights reserved.</span>

        <div>
          <a href="/">Velvet Verse</a>
          <a href="/privacy-policy">Privacy</a>
          <a href="/terms-conditions">Terms</a>
        </div>
      </footer>
    </div>
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
  background: #050505;
  color: #fff;
  font-family: "Cormorant Garamond", Georgia, serif;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

.makeup-page::before {
  content: "";
  position: fixed;
  top: 16px;
  left: 16px;
  right: 16px;
  bottom: 16px;
  border: 1px solid rgba(201, 169, 110, 0.14);
  pointer-events: none;
  z-index: 9999;
}

.page-container {
  max-width: 1380px;
  margin: 0 auto;
  border-left: 1px solid rgba(201, 169, 110, 0.12);
  border-right: 1px solid rgba(201, 169, 110, 0.12);
}

.luxury-trim {
  position: relative;
}

.luxury-trim::before {
  content: "";
  position: absolute;
  inset: 12px;
  border: 1px solid rgba(201, 169, 110, 0.18);
  pointer-events: none;
  z-index: 5;
}

.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  height: 54px;
  padding: 0 34px;
  background: #050505;
  border-bottom: 1px solid rgba(201, 169, 110, 0.18);
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
.section-label,
.eyebrow {
  font-family: Montserrat, sans-serif;
}

.back-link {
  color: #c9a96e;
  font-size: 8px;
  letter-spacing: 3px;
  text-decoration: none;
}

.brand {
  text-align: center;
  display: flex;
  flex-direction: column;
}

.brand span {
  font-size: 15px;
  letter-spacing: 4px;
  font-weight: 700;
}

.brand small {
  font-size: 7px;
  letter-spacing: 5px;
  color: #c9a96e;
  margin-top: 4px;
}

.nav-links {
  display: flex;
  gap: 26px;
}

.nav-links a {
  color: #cfcfcf;
  text-decoration: none;
  font-size: 8px;
  letter-spacing: 2px;
}

.luxury-hero {
  display: grid;
  grid-template-columns: 27% 16% 51% 6%;
  height: 48vh;
  max-height: 470px;
  min-height: 390px;
  border-bottom: 1px solid rgba(201, 169, 110, 0.16);
  overflow: hidden;
  background: #090909;
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
  filter: brightness(0.82);
}

.hero-stack {
  display: grid;
  grid-template-rows: 1fr 1fr;
  border-left: 1px solid rgba(201, 169, 110, 0.12);
  border-right: 1px solid rgba(201, 169, 110, 0.12);
}

.hero-stack img {
  object-position: center top;
  filter: brightness(0.78);
}

.hero-stack img:first-child {
  border-bottom: 1px solid rgba(201, 169, 110, 0.12);
}

.hero-content {
  background: radial-gradient(circle at top right, #171717, #080808 58%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 34px 42px;
}

.eyebrow,
.section-label {
  font-size: 7px;
  letter-spacing: 4px;
  color: #c9a96e;
}

.gold-line {
  width: 30px;
  height: 1px;
  background: #c9a96e;
  margin: 14px 0;
}

.hero-content h1 {
  font-size: clamp(30px, 2.5vw, 44px);
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
  font-size: 7px;
  letter-spacing: 3px;
  color: #aaa;
  margin: 16px 0;
}

.hero-copy {
  font-family: Montserrat, sans-serif;
  font-size: 10px;
  line-height: 1.7;
  color: #999;
  max-width: 390px;
}

.hero-buttons {
  display: flex;
  gap: 9px;
  flex-wrap: wrap;
  margin-top: 20px;
}

.gold-btn,
.outline-btn {
  text-decoration: none;
  padding: 9px 18px;
  font-size: 7px;
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
  background: #0f0f0f;
  display: flex;
  align-items: center;
  justify-content: center;
}

.side-panel p {
  writing-mode: vertical-rl;
  color: #c9a96e;
  letter-spacing: 5px;
  font-family: Montserrat, sans-serif;
  font-size: 7px;
}

.brand-logos {
  background: #0d0d0d;
  border-bottom: 1px solid rgba(201, 169, 110, 0.16);
  padding: 20px 42px;
  text-align: center;
}

.brand-logos p {
  font-family: Montserrat, sans-serif;
  font-size: 7px;
  letter-spacing: 4px;
  color: #c9a96e;
  margin-bottom: 16px;
}

.brand-logos div {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.brand-logos span {
  font-size: 16px;
  letter-spacing: 2px;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 280px;
  min-height: 320px;
  border-bottom: 1px solid rgba(201, 169, 110, 0.16);
}

.feature-card {
  position: relative;
  overflow: hidden;
  border-right: 1px solid rgba(201, 169, 110, 0.12);
}

.feature-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.32);
  position: absolute;
  inset: 0;
}

.feature-card div {
  position: relative;
  z-index: 2;
  padding: 30px 28px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.feature-card p,
.feature-card a {
  font-family: Montserrat, sans-serif;
  font-size: 8px;
  letter-spacing: 3px;
  color: #c9a96e;
  text-decoration: none;
}

.feature-card h3 {
  font-size: 20px;
  color: #fff;
  margin: 8px 0;
  line-height: 1.15;
}

.blog-sidebar {
  background: #0d0d0d;
  padding: 28px 24px;
}

.mini-post {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(201, 169, 110, 0.12);
}

.mini-post img {
  width: 46px;
  height: 46px;
  object-fit: cover;
}

.mini-post h4 {
  font-size: 12px;
  margin-bottom: 4px;
}

.mini-post small {
  font-family: Montserrat, sans-serif;
  color: #666;
  font-size: 8px;
}

.blog-sidebar a {
  color: #c9a96e;
  font-family: Montserrat, sans-serif;
  font-size: 8px;
  letter-spacing: 2px;
  text-decoration: none;
}

.about {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 420px;
  border-bottom: 1px solid rgba(201, 169, 110, 0.16);
}

.about-img {
  overflow: hidden;
}

.about img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-text {
  background: #0d0d0d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 42px;
}

.about h2,
.section-heading h2,
.contact h2 {
  font-size: clamp(26px, 3vw, 40px);
  line-height: 1.1;
}

.about-text > p:not(.section-label),
.contact > p:not(.section-label) {
  font-family: Montserrat, sans-serif;
  color: #aaa;
  line-height: 1.8;
  font-size: 12px;
}

.stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-top: 24px;
}

.stats div {
  text-align: center;
  border: 1px solid rgba(201, 169, 110, 0.18);
  padding: 14px;
}

.stats strong {
  color: #c9a96e;
  font-size: 22px;
  display: block;
}

.stats span {
  font-family: Montserrat, sans-serif;
  color: #666;
  font-size: 8px;
  letter-spacing: 2px;
}

.services,
.blog,
.contact {
  padding: 55px 40px;
  border-bottom: 1px solid rgba(201, 169, 110, 0.16);
}

.section-heading {
  text-align: center;
  margin-bottom: 38px;
}

.section-heading h2::after {
  content: "";
  display: block;
  width: 50px;
  height: 1px;
  background: #c9a96e;
  margin: 14px auto 0;
}

.service-grid,
.post-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
}

.service-card {
  background: #0d0d0d;
  padding: 26px 22px;
  border: 1px solid rgba(201, 169, 110, 0.18);
  transition: border-color 0.25s ease;
}

.service-card:hover {
  border-color: rgba(201, 169, 110, 0.55);
}

.service-card span {
  font-size: 20px;
}

.service-card h3,
.post-card h3 {
  font-size: 17px;
  line-height: 1.2;
}

.service-card p,
.post-card span {
  font-family: Montserrat, sans-serif;
  color: #888;
  line-height: 1.65;
  font-size: 11px;
}

.service-card small,
.post-card small,
.post-card p {
  font-family: Montserrat, sans-serif;
  color: #c9a96e;
  letter-spacing: 2px;
  font-size: 8px;
}

.blog {
  background: #0d0d0d;
}

.post-card {
  background: #080808;
  overflow: hidden;
  border: 1px solid rgba(201, 169, 110, 0.18);
}

.post-card img {
  width: 100%;
  height: 210px;
  object-fit: cover;
  filter: brightness(0.88);
}

.post-card div {
  padding: 24px;
}

.newsletter {
  background: #090909;
  border-bottom: 1px solid rgba(201, 169, 110, 0.16);
  padding: 42px 40px;
  display: flex;
  justify-content: space-between;
  gap: 28px;
  flex-wrap: wrap;
}

.newsletter h3 {
  color: #aaa;
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  font-size: 13px;
}

.newsletter form {
  display: flex;
  max-width: 420px;
  flex: 1;
}

.newsletter input {
  flex: 1;
  background: #0d0d0d;
  border: 1px solid #333;
  padding: 12px 16px;
  color: #fff;
  font-size: 11px;
}

.newsletter button {
  background: #c9a96e;
  color: #0a0a0a;
  border: none;
  padding: 12px 22px;
  font-family: Montserrat, sans-serif;
  font-size: 8px;
  letter-spacing: 2px;
}

.badges {
  background: #0d0d0d;
  padding: 26px 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  border-bottom: 1px solid rgba(201, 169, 110, 0.16);
}

.badge-item {
  display: flex;
  gap: 14px;
  padding: 18px;
  border: 1px solid rgba(201, 169, 110, 0.14);
}

.badge-item span {
  color: #c9a96e;
  font-size: 18px;
}

.badge-item p {
  font-family: Montserrat, sans-serif;
  font-size: 8px;
  letter-spacing: 2px;
}

.badge-item small {
  font-family: Montserrat, sans-serif;
  color: #666;
  font-size: 9px;
}

.contact {
  text-align: center;
  background: #090909;
}

.contact div {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 28px;
}

.contact a {
  border: 1px solid #c9a96e;
  color: #c9a96e;
  padding: 11px 30px;
  text-decoration: none;
  font-size: 8px;
  letter-spacing: 3px;
}

.contact a:last-child {
  background: #c9a96e;
  color: #0a0a0a;
}

footer {
  background: #0d0d0d;
  border-top: 1px solid rgba(201, 169, 110, 0.16);
  padding: 18px 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 14px;
  font-family: Montserrat, sans-serif;
  font-size: 9px;
  color: #555;
}

footer a {
  color: #555;
  text-decoration: none;
  margin-left: 24px;
}

@media (max-width: 950px) {
  .page-container {
    border-left: none;
    border-right: none;
  }

  .makeup-page::before {
    display: none;
  }

  .nav {
    padding: 0 20px;
  }

  .nav-links {
    display: none;
  }

  .luxury-hero {
    grid-template-columns: 1fr;
    height: auto;
    max-height: none;
  }

  .hero-main-img {
    height: 330px;
  }

  .hero-stack {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: none;
    height: 220px;
  }

  .side-panel {
    display: none;
  }

  .hero-content {
    padding: 32px 24px;
  }

  .content-grid,
  .about,
  .service-grid,
  .post-grid,
  .badges {
    grid-template-columns: 1fr;
  }

  .services,
  .blog,
  .contact,
  .newsletter {
    padding: 42px 24px;
  }

  .newsletter form {
    width: 100%;
  }
}
</style>