<template>
  <div class="makeup-page">
    <nav class="nav">
      <a href="/" class="back">← VELVET VERSE</a>

      <div class="logo">
        <span>RENATA OLIVEIRA</span>
        <small>BEAUTY & MAKEUP</small>
      </div>

      <div class="nav-links">
        <a href="#about">ABOUT</a>
        <a href="#services">SERVICES</a>
        <a href="#blog">BLOG</a>
        <a href="#contact">CONTACT</a>
        <a href="/makeup-media-kit" class="media-btn">MEDIA KIT</a>
      </div>
    </nav>

    <section class="hero">
      <div class="hero-text">
        <p class="eyebrow">BEAUTY. CONFIDENCE. YOU.</p>
        <h1>Elevate Your <em>Everyday</em> Beauty</h1>
        <p>
          Luxury beauty made effortless. Expert tips, curated favorites,
          and timeless looks to bring out your most confident self.
        </p>
        <a href="#services" class="btn">EXPLORE BEAUTY</a>
      </div>

      <img src="/mascara.png" alt="Mascara look" />
      <img src="/valentino.png" alt="Valentino look" />
      <img src="/thinking.png" alt="Editorial look" />
    </section>

    <section class="brands">
      <p class="eyebrow">FEATURED & COLLABORATED WITH</p>
      <div>
        <span>DIOR</span>
        <span>PIXI BEAUTY</span>
        <span>YSL</span>
        <span>IT COSMETICS</span>
        <span>NYX</span>
        <span>L’ORÉAL</span>
      </div>
    </section>

    <section id="about" class="about">
      <img src="/valentino.png" alt="Renata Oliveira" />

      <div>
        <p class="eyebrow">ABOUT RENATA</p>
        <h2>Beauty is an art. <em>You are the canvas.</em></h2>
        <p>
          I create luxury beauty content, makeup tutorials, product reviews,
          and brand campaigns with an editorial feminine style.
        </p>

        <div class="stats">
          <div v-for="stat in stats" :key="stat.label">
            <strong>{{ stat.value }}</strong>
            <span>{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="section">
      <p class="eyebrow">WHAT I OFFER</p>
      <h2>Services</h2>

      <div class="grid">
        <div v-for="service in services" :key="service.title" class="card">
          <span>{{ service.icon }}</span>
          <h3>{{ service.title }}</h3>
          <p>{{ service.desc }}</p>
          <small>{{ service.price }}</small>
        </div>
      </div>
    </section>

    <section id="blog" class="section light">
      <p class="eyebrow">THE JOURNAL</p>
      <h2>Latest Posts</h2>

      <div class="grid">
        <article v-for="post in featuredPosts" :key="post.title" class="post">
          <img :src="post.img" :alt="post.title" />
          <div>
            <small>{{ post.category }}</small>
            <h3>{{ post.title }}</h3>
            <p>{{ post.excerpt }}</p>
            <a href="#">READ MORE ›</a>
          </div>
        </article>
      </div>
    </section>

    <section id="contact" class="contact">
      <p class="eyebrow">GET IN TOUCH</p>
      <h2>Let’s Work Together</h2>
      <p>For brand collaborations, tutorials, UGC, and beauty partnerships.</p>

      <a href="mailto:velvetverse@velvetxverse.com" class="btn">
        EMAIL ME
      </a>
    </section>
  </div>
</template>

<script setup>
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
    desc: 'UGC content creation for luxury beauty and lifestyle brands.',
    price: 'INQUIRE FOR PRICING',
  },
  {
    icon: '◇',
    title: 'Makeup Tutorials',
    desc: 'Step-by-step beauty tutorials for social media and campaigns.',
    price: 'STARTING FROM $500',
  },
  {
    icon: '♡',
    title: 'Product Reviews',
    desc: 'Honest product reviews with a beauty-focused audience.',
    price: 'INQUIRE FOR PRICING',
  },
]

const featuredPosts = [
  {
    category: 'TUTORIAL',
    title: 'The Perfect Smoky Eye',
    excerpt: 'A soft glam tutorial with professional beauty techniques.',
    img: '/mk9.png',
  },
  {
    category: 'REVIEW',
    title: 'Dior Lip Maximizer Review',
    excerpt: 'My honest thoughts on this luxury beauty favorite.',
    img: '/mk10.png',
  },
  {
    category: 'SKINCARE',
    title: 'Morning Glow Routine',
    excerpt: 'How I prep my skin before makeup.',
    img: '/mk11.png',
  },
]
</script>

<style scoped>
.makeup-page {
  background: #faf7f2;
  color: #2a2a2a;
  font-family: Montserrat, sans-serif;
}

.nav {
  height: 64px;
  padding: 0 36px;
  background: #fffaf5;
  border-bottom: 1px solid #e7d9c8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  text-align: center;
  font-family: "Cormorant Garamond", serif;
}

.logo span {
  display: block;
  font-size: 24px;
  letter-spacing: 3px;
}

.logo small,
.eyebrow {
  color: #c8a16b;
  letter-spacing: 3px;
  font-size: 10px;
}

.nav-links {
  display: flex;
  gap: 22px;
  align-items: center;
}

a {
  text-decoration: none;
  color: inherit;
}

.nav-links a,
.back {
  font-size: 10px;
  letter-spacing: 2px;
}

.media-btn,
.btn {
  border: 1px solid #c8a16b;
  color: #c8a16b;
  padding: 10px 20px;
  border-radius: 999px;
}

.hero {
  display: grid;
  grid-template-columns: 1.1fr repeat(3, 1fr);
  min-height: 560px;
}

.hero-text {
  background: #fff;
  padding: 60px 46px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero img,
.about img,
.post img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h1,
h2,
h3 {
  font-family: "Cormorant Garamond", serif;
  margin: 0;
}

h1 {
  font-size: 58px;
  line-height: 1;
}

h2 {
  font-size: 42px;
}

em {
  color: #c8a16b;
}

p {
  color: #706761;
  line-height: 1.7;
}

.brands,
.section,
.contact {
  padding: 70px 50px;
  text-align: center;
}

.brands div,
.grid,
.stats {
  display: grid;
  gap: 18px;
}

.brands div {
  grid-template-columns: repeat(6, 1fr);
}

.brands span,
.card,
.post,
.stats div {
  background: #fff;
  border: 1px solid #e7d9c8;
  border-radius: 18px;
  padding: 24px;
}

.about {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #fff;
}

.about > div {
  padding: 70px;
}

.stats {
  grid-template-columns: repeat(2, 1fr);
}

.stats strong {
  display: block;
  color: #c8a16b;
  font-size: 30px;
  font-family: "Cormorant Garamond", serif;
}

.grid {
  grid-template-columns: repeat(3, 1fr);
}

.card span {
  color: #c8a16b;
  font-size: 26px;
}

.post {
  padding: 0;
  overflow: hidden;
  text-align: left;
}

.post img {
  height: 260px;
}

.post div {
  padding: 28px;
}

.post small,
.post a {
  color: #c8a16b;
  letter-spacing: 2px;
  font-size: 10px;
}

.contact {
  background: #fff;
}

@media (max-width: 900px) {
  .nav-links {
    display: none;
  }

  .hero,
  .about,
  .grid,
  .brands div {
    grid-template-columns: 1fr;
  }

  h1 {
    font-size: 44px;
  }
}
</style>