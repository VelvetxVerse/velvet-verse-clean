<template>
  <div class="beauty-page">
    <nav class="nav">
      <div class="logo">
        <span>RENATA</span>
        <small>MAKEUP & BEAUTY</small>
      </div>

      <div class="nav-links">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#brands">Brands</a>
        <a href="#services">Services</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </div>

      <a class="nav-btn" href="https://www.velvetxverse.com/collaborate">
        Collaborate
      </a>
    </nav>

    <main>
      <section id="hero" class="hero box">
        <div class="hero-image">
          <img src="/valentino.png" alt="Renata Oliveira" />
        </div>

        <div class="hero-content">
          <p class="eyebrow">MAKEUP ARTIST · BEAUTY CREATOR</p>
          <h1>Beauty, Makeup & Luxury Content</h1>
          <p>
            Editorial beauty creator sharing makeup tutorials, product reviews,
            skincare tips, and luxury brand collaborations.
          </p>

          <div class="tags">
            <span>Makeup Tutorials</span>
            <span>Product Reviews</span>
            <span>Skincare</span>
            <span>UGC Content</span>
          </div>

          <div class="hero-buttons">
            <a href="#services">View Services</a>
            <a href="mailto:velvetverse@velvetxverse.com">Email Me</a>
          </div>
        </div>
      </section>

      <section id="about" class="grid-two">
        <div class="box">
          <p class="eyebrow">ABOUT</p>
          <h2>Hi, I’m Renata</h2>
          <p>
            I combine professional makeup artistry with beauty storytelling,
            luxury product content, and an audience that loves glam, skincare,
            travel, and feminine lifestyle inspiration.
          </p>
        </div>

        <div class="box stats-grid">
          <div v-for="stat in stats" :key="stat.label" class="stat-card">
            <h3>{{ stat.value }}</h3>
            <p>{{ stat.label }}</p>
          </div>
        </div>
      </section>

      <section id="brands" class="box brands">
        <p class="eyebrow">FEATURED & COLLABORATED WITH</p>
        <div>
          <span>Dior</span>
          <span>Chanel</span>
          <span>YSL</span>
          <span>La Mer</span>
          <span>Valentino</span>
          <span>Tom Ford</span>
          <span>L’Oréal</span>
          <span>Bobbi Brown</span>
        </div>
      </section>

      <section id="services" class="box">
        <p class="eyebrow center">WHAT I OFFER</p>
        <h2 class="center">Collaboration Services</h2>

        <div class="card-grid">
          <div v-for="service in services" :key="service.title" class="mini-card">
            <span>{{ service.icon }}</span>
            <h3>{{ service.title }}</h3>
            <p>{{ service.desc }}</p>
          </div>
        </div>
      </section>

      <section id="blog" class="box">
        <p class="eyebrow center">THE BEAUTY BLOG</p>
        <h2 class="center">Latest Posts</h2>

        <div class="blog-grid">
          <article v-for="post in posts" :key="post.title" class="post-card">
            <img :src="post.img" :alt="post.title" />
            <div>
              <p class="category">{{ post.category }}</p>
              <h3>{{ post.title }}</h3>
              <p>{{ post.excerpt }}</p>
              <a href="#">Read More →</a>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" class="box contact">
        <p class="eyebrow">READY TO COLLABORATE?</p>
        <h2>Let’s Create Something Beautiful</h2>
        <p>
          For brand partnerships, sponsored content, UGC packages, product
          reviews, and beauty campaigns.
        </p>

        <a href="mailto:velvetverse@velvetxverse.com">
          velvetverse@velvetxverse.com
        </a>
      </section>
    </main>
  </div>
</template>

<script setup>
const stats = [
  { value: '957K+', label: 'Instagram' },
  { value: '15M+', label: 'Monthly Views' },
  { value: '30K+', label: 'TikTok' },
  { value: '80K+', label: 'Pinterest' },
]

const services = [
  {
    icon: '✦',
    title: 'Sponsored Reels',
    desc: 'Luxury beauty content created for Instagram and TikTok.',
  },
  {
    icon: '◇',
    title: 'UGC Content',
    desc: 'High-quality videos and photos for brand use.',
  },
  {
    icon: '♡',
    title: 'Product Reviews',
    desc: 'Authentic reviews with a beauty-focused audience.',
  },
  {
    icon: '✧',
    title: 'Makeup Tutorials',
    desc: 'Step-by-step glam, soft glam, and skincare prep content.',
  },
  {
    icon: '◈',
    title: 'Brand Campaigns',
    desc: 'Creative direction for launches and beauty partnerships.',
  },
  {
    icon: '❋',
    title: 'Event Coverage',
    desc: 'Social coverage for beauty events and launches.',
  },
]

const posts = [
  {
    category: 'MAKEUP',
    title: 'Everyday Soft Glam Routine',
    excerpt: 'My go-to look for glowing skin, soft eyes, and nude lips.',
    img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80',
  },
  {
    category: 'REVIEWS',
    title: 'Best Foundations for Glow',
    excerpt: 'A beauty guide for radiant skin and smooth coverage.',
    img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80',
  },
  {
    category: 'SKINCARE',
    title: 'Skin Prep Before Makeup',
    excerpt: 'How to prep your skin for a flawless makeup base.',
    img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
  },
]
</script>

<style scoped>
.beauty-page {
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
}

.nav-btn {
  border: 1px solid #c8a16b;
  padding: 9px 22px;
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #c8a16b;
  text-decoration: none;
}

.box {
  background: #ffffff;
  border: 1px solid #e8ddd0;
  border-radius: 22px;
  box-shadow: 0 18px 45px rgba(80, 55, 35, 0.07);
  overflow: hidden;
  margin-bottom: 26px;
}

.hero {
  display: grid;
  grid-template-columns: 40% 60%;
  min-height: 430px;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-content {
  padding: 58px;
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

h1,
h2,
h3 {
  font-family: 'Cormorant Garamond', serif;
  color: #2a2a2a;
  margin: 0;
}

h1 {
  font-size: 54px;
  line-height: 0.95;
  max-width: 560px;
}

h2 {
  font-size: 34px;
  margin-bottom: 16px;
}

h3 {
  font-size: 22px;
}

p {
  color: #7a7a7a;
  line-height: 1.75;
  font-size: 14px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin: 24px 0;
}

.tags span {
  border: 1px solid #e8ddd0;
  border-radius: 999px;
  padding: 8px 14px;
  font-size: 10px;
  letter-spacing: 1.5px;
  color: #8c7560;
  background: #fffaf5;
  text-transform: uppercase;
}

.hero-buttons {
  display: flex;
  gap: 12px;
}

.hero-buttons a,
.contact a {
  background: #c8a16b;
  color: white;
  padding: 13px 28px;
  border-radius: 999px;
  text-decoration: none;
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.hero-buttons a:nth-child(2) {
  background: transparent;
  color: #c8a16b;
  border: 1px solid #c8a16b;
}

.grid-two {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 26px;
}

.grid-two .box {
  padding: 36px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

.stat-card {
  border: 1px solid #e8ddd0;
  border-radius: 16px;
  padding: 24px;
  background: #fffaf5;
  text-align: center;
}

.stat-card h3 {
  font-size: 34px;
  color: #c8a16b;
}

.stat-card p {
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 4px 0 0;
}

.brands {
  padding: 34px;
  text-align: center;
}

.brands div {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 18px;
}

.brands span {
  border: 1px solid #e8ddd0;
  border-radius: 12px;
  padding: 12px 22px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px;
  color: #2a2a2a;
  background: #fffaf5;
}

.center {
  text-align: center;
}

#services,
#blog {
  padding: 42px;
}

.card-grid,
.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.mini-card {
  border: 1px solid #e8ddd0;
  border-radius: 18px;
  padding: 28px;
  background: #fffaf5;
  min-height: 210px;
}

.mini-card span {
  color: #c8a16b;
  font-size: 22px;
  display: block;
  margin-bottom: 12px;
}

.post-card {
  border: 1px solid #e8ddd0;
  border-radius: 18px;
  overflow: hidden;
  background: #fffaf5;
}

.post-card img {
  width: 100%;
  height: 210px;
  object-fit: cover;
}

.post-card div {
  padding: 24px;
}

.category {
  color: #c8a16b;
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.post-card a {
  color: #c8a16b;
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
}

.contact {
  padding: 52px;
  text-align: center;
}

.contact p {
  max-width: 560px;
  margin: 0 auto 26px;
}

@media (max-width: 900px) {
  .nav-links {
    display: none;
  }

  .hero,
  .grid-two,
  .card-grid,
  .blog-grid {
    grid-template-columns: 1fr;
  }

  .hero-content {
    padding: 36px;
  }

  h1 {
    font-size: 42px;
  }
}
</style>