<template>
  <div class="blog-page">

    <!-- ── NAV ── -->
    <nav class="nav">
      <div class="logo">
        <span>RENATA</span>
        <small>MAKEUP & BEAUTY</small>
      </div>
      <div class="nav-links">
        <a href="/makeup">Home</a>
        <a href="/makeup#about">About</a>
        <a href="/makeup#brands">Brands</a>
        <a href="/makeup#services">Services</a>
        <a href="/blog" class="active">Blog</a>
        <a href="/makeup#contact">Contact</a>
      </div>
      <a class="nav-btn" href="https://www.velvetxverse.com/collaborate">Collaborate</a>
    </nav>

    <main>

      <!-- ── HERO ── -->
      <section class="hero box">
        <img src="/mk1.png" alt="Blog hero" class="hero-img" />
        <div class="hero-overlay">
          <p class="eyebrow-light">NEW ON THE BLOG</p>
          <h1>EFFORTLESS<br>EVERYDAY GLAM</h1>
          <div class="hero-divider"></div>
          <p>A soft, radiant makeup look that enhances your natural beauty and boosts your confidence.</p>
          <a href="#featured" class="hero-btn">Read the Post</a>
        </div>
      </section>

      <!-- ── BRANDS STRIP ── -->
      <section class="brands-strip">
        <p class="brands-eyebrow">FEATURED & COLLABORATED WITH</p>
        <div class="brands-row">
          <span>Dior</span><span class="div">|</span>
          <span>Pixi Beauty</span><span class="div">|</span>
          <span>YSL</span><span class="div">|</span>
          <span>IT Cosmetics</span><span class="div">|</span>
          <span>NYX Cosmetics</span><span class="div">|</span>
          <span>Eucerin</span><span class="div">|</span>
          <span>L'Oréal</span><span class="div">|</span>
          <span>Bobbi Brown</span>
        </div>
      </section>

      <!-- ── BROWSE BY CATEGORY ── -->
      <section class="box cats-section">
        <div class="cats-header">
          <h2 class="script-heading">Browse by <em>Category</em></h2>
          <div class="cats-arrows">
            <button class="arrow-btn">&#8592;</button>
            <button class="arrow-btn">&#8594;</button>
          </div>
        </div>
        <div class="cats-grid">
          <div v-for="(cat, i) in categories" :key="i" class="cat-card">
            <img :src="cat.img" :alt="cat.label" />
            <p class="cat-label">{{ cat.label }}</p>
          </div>
        </div>
      </section>

      <!-- ── FEATURED + SIDEBAR ── -->
      <section id="featured" class="featured-layout">

        <!-- Featured posts -->
        <div class="box featured-box">
          <p class="eyebrow">FEATURED POSTS</p>
          <div class="featured-inner">
            <div class="feat-post">
              <div class="featured-img-wrap">
                <img src="/mk5.png" alt="Featured post 1" />
              </div>
              <div class="featured-text">
                <p class="category">MAKEUP TUTORIAL</p>
                <h2>STEP-BY-STEP:<br><em>Bronzed Soft Glam</em></h2>
                <p>Follow along as I break down this easy soft glam look using my go-to products for a bronzed, radiant finish.</p>
                <a href="#" class="read-btn">Read More</a>
              </div>
            </div>
            <div class="feat-post">
              <div class="featured-img-wrap">
                <img src="/mk4.png" alt="Featured post 2" />
              </div>
              <div class="featured-text">
                <p class="category">SKINCARE</p>
                <h2>SKIN PREP:<br><em>Glowing Base Routine</em></h2>
                <p>The exact steps I follow before every makeup application for a flawless, long-lasting finish.</p>
                <a href="#" class="read-btn">Read More</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="sidebar">
          <div class="box sidebar-welcome">
            <p class="eyebrow center">WELCOME</p>
            <div class="welcome-photo">
              <img src="/mk3.png" alt="Renata Oliveira" />
            </div>
            <p>Hi, I'm obsessed with all things beauty! I love sharing makeup tips, product reviews, and tutorials to help you feel your most beautiful.</p>
            <p class="signature">xo, Renata</p>
          </div>

          <div class="box sidebar-popular">
            <p class="eyebrow">POPULAR POSTS</p>
            <div v-for="(post, i) in popularPosts" :key="i" class="pop-post">
              <img :src="post.img" :alt="post.title" />
              <div>
                <p class="category">{{ post.cat }}</p>
                <p class="pop-title">{{ post.title }}</p>
              </div>
            </div>
            <a href="#recent" class="view-all-btn">View All Posts</a>
          </div>
        </div>
      </section>

      <!-- ── WHAT'S ON THE BLOG ── -->
      <section class="whats-on-blog">
        <h2 class="script-heading-lg">what's on the blog</h2>
        <div class="filter-tabs">
          <button v-for="tab in tabs" :key="tab"
            class="tab-btn"
            :class="{ active: activeTab === tab }"
            @click="activeTab = tab">{{ tab }}</button>
        </div>
      </section>

      <!-- ── RECENT POSTS ── -->
      <section id="recent" class="box posts-box">
        <p class="eyebrow">RECENT POSTS</p>
        <div class="blog-grid">
          <article v-for="post in recentPosts" :key="post.title" class="post-card">
            <div class="post-img-wrap">
              <img :src="post.img" :alt="post.title" />
            </div>
            <div class="post-body">
              <p class="category">{{ post.cat }}</p>
              <h3>{{ post.title }}</h3>
              <p>{{ post.excerpt }}</p>
              <a href="#">Read More →</a>
            </div>
          </article>
        </div>
      </section>

      <!-- ── MORE POSTS ── -->
      <section class="box posts-box">
        <div class="blog-grid">
          <article v-for="post in morePosts" :key="post.title" class="post-card">
            <div class="post-img-wrap">
              <img :src="post.img" :alt="post.title" />
            </div>
            <div class="post-body">
              <p class="category">{{ post.cat }}</p>
              <h3>{{ post.title }}</h3>
              <a href="#">Read More →</a>
            </div>
          </article>
        </div>
      </section>

      <!-- ── NEWSLETTER ── -->
      <section class="box contact">
        <p class="eyebrow">JOIN THE COMMUNITY</p>
        <h2>Beauty in Your Inbox</h2>
        <p>Subscribe to get the latest beauty tips, product picks, and blog updates!</p>
        <div class="subscribe-row">
          <input type="email" placeholder="Enter your email..." />
          <button>Subscribe</button>
        </div>
      </section>

    </main>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="footer-social">
        <a href="https://instagram.com/renataoliveiraofficial" target="_blank" class="social-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
          @renataoliveiraofficial
        </a>
        <a href="https://instagram.com/renataxolivermakeup" target="_blank" class="social-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
          @renataxolivermakeup
        </a>
        <a href="https://tiktok.com/@renataoliveiraofficial" target="_blank" class="social-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/></svg>
          TikTok
        </a>
        <a href="https://pinterest.com" target="_blank" class="social-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.03-2.83.19-.77 1.27-5.37 1.27-5.37s-.32-.65-.32-1.61c0-1.51.88-2.64 1.97-2.64.93 0 1.38.7 1.38 1.54 0 .94-.6 2.34-.91 3.64-.26 1.09.54 1.97 1.6 1.97 1.92 0 3.21-2.46 3.21-5.37 0-2.22-1.5-3.88-4.22-3.88-3.08 0-5 2.3-5 4.87 0 .88.26 1.5.67 1.98.19.22.21.31.14.57-.05.18-.16.63-.2.8-.07.27-.28.37-.51.27-1.44-.6-2.11-2.21-2.11-4.02 0-2.98 2.52-6.56 7.54-6.56 4.03 0 6.68 2.93 6.68 6.07 0 4.16-2.3 7.27-5.68 7.27-1.14 0-2.21-.61-2.57-1.3l-.7 2.69c-.25.97-.93 2.18-1.39 2.92.99.3 2.03.47 3.12.47 5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>
          Pinterest
        </a>
        <a href="mailto:velvetverse@velvetxverse.com" class="social-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/></svg>
          velvetverse@velvetxverse.com
        </a>
      </div>
      <p class="footer-copy">&copy; 2024 Renata Oliveira &middot; All rights reserved</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('REVIEWS')

const tabs = ['REVIEWS', 'SKIN', 'MAKEUP', 'HAIR', 'BODY', 'FRAGRANCE', 'NAILS']

const categories = [
  { label: 'REVIEWS', img: '/mk4.png' },
  { label: 'MAKEUP', img: '/mk5.png' },
  { label: 'BEAUTY TIPS', img: '/mk6.png' },
  { label: 'SKINCARE', img: '/mk7.png' },
  { label: 'TUTORIALS', img: '/mk8.png' },
  { label: 'FAVORITES', img: '/mk9.png' },
]

const popularPosts = [
  { cat: 'MAKEUP', title: 'My Go-To Everyday Makeup Routine', img: '/mk6.png' },
  { cat: 'REVIEWS', title: 'The Best Foundations for Glowing Skin', img: '/mk7.png' },
  { cat: 'TIPS', title: '5 Makeup Tips That Changed My Game', img: '/mk8.png' },
]

const recentPosts = [
  { cat: 'MAKEUP', title: '10 Must-Have Products for Your Makeup Bag', excerpt: 'These are the products I reach for every single day — from a flawless base to the perfect lip.', img: '/mk9.png' },
  { cat: 'REVIEWS', title: 'Foundation Showdown: Dewy vs. Matte', excerpt: 'I tested 6 luxury foundations side by side to find the ultimate winner for every skin type.', img: '/mk10.png' },
  { cat: 'TIPS', title: 'How to Make Your Makeup Last All Day', excerpt: 'My professional secrets for a long-lasting, fresh look from morning to night.', img: '/mk11.png' },
]

const morePosts = [
  { cat: 'TUTORIAL', title: 'The Perfect Smoky Eye in 10 Minutes', img: '/mk12.png' },
  { cat: 'LIFESTYLE', title: 'My Morning Beauty Ritual for Glowing Skin', img: '/mk13.png' },
  { cat: 'REVIEW', title: 'Dior Addict Lip Maximizer: Worth the Hype?', img: '/mk2.png' },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Montserrat:wght@300;400;500;600&family=Dancing+Script:wght@600&display=swap');

.blog-page {
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

/* NAV */
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

.nav-links a:hover,
.nav-links a.active {
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

/* BRANDS STRIP */
.brands-strip {
  background: #fff;
  border: 1px solid #e8ddd0;
  border-radius: 18px;
  padding: 22px 36px;
  margin-bottom: 26px;
  text-align: center;
}

.brands-eyebrow {
  font-size: 9px;
  letter-spacing: 3px;
  color: #c8a16b;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 14px;
}

.brands-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  flex-wrap: wrap;
}

.brands-row span {
  font-family: 'Cormorant Garamond', serif;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #2a2a2a;
}

.brands-row .div {
  color: #e8ddd0;
  font-size: 18px;
  font-weight: 300;
}

/* BOX */
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
  position: relative;
  height: 440px;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
  display: block;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(15,10,8,0.75) 42%, rgba(0,0,0,0.05) 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 56px;
  max-width: 540px;
}

.eyebrow-light {
  font-size: 10px;
  letter-spacing: 3px;
  color: #c8a16b;
  text-transform: uppercase;
  margin-bottom: 14px;
  font-weight: 600;
}

.hero-overlay h1 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(36px, 4.5vw, 56px);
  font-weight: 400;
  color: #fff;
  line-height: 1.05;
  margin-bottom: 14px;
}

.hero-divider {
  width: 40px;
  height: 1px;
  background: #c8a16b;
  margin-bottom: 16px;
}

.hero-overlay p {
  color: rgba(255,255,255,0.82);
  font-size: 14px;
  line-height: 1.75;
  margin-bottom: 22px;
  font-weight: 300;
}

.hero-btn {
  display: inline-block;
  background: #c8a16b;
  color: #fff;
  padding: 12px 28px;
  border-radius: 999px;
  text-decoration: none;
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  width: fit-content;
  transition: background 0.2s;
}

.hero-btn:hover {
  background: #b5905a;
}

/* BROWSE BY CATEGORY */
.cats-section {
  padding: 36px 36px 32px;
}

.cats-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

.script-heading {
  font-family: 'Dancing Script', cursive;
  font-size: 32px;
  color: #2a2a2a;
  font-weight: 600;
  margin: 0;
}

.script-heading em {
  font-style: italic;
}

.cats-arrows {
  display: flex;
  gap: 10px;
}

.arrow-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid #e8ddd0;
  background: #fff;
  cursor: pointer;
  font-size: 16px;
  color: #2a2a2a;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.arrow-btn:hover {
  border-color: #c8a16b;
  color: #c8a16b;
}

.cats-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 14px;
}

.cat-card {
  cursor: pointer;
  text-align: center;
}

.cat-card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  object-position: center top;
  display: block;
  border-radius: 10px;
  transition: transform 0.3s;
}

.cat-card:hover img {
  transform: scale(1.03);
}

.cat-label {
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #2a2a2a;
  font-weight: 600;
  margin: 10px 0 0;
}

/* FEATURED + SIDEBAR */
.featured-layout {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 26px;
  margin-bottom: 26px;
}

.featured-box {
  padding: 36px;
}

.featured-inner {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-top: 20px;
}

.feat-post {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  align-items: start;
  padding-bottom: 28px;
  margin-bottom: 28px;
  border-bottom: 1px solid #e8ddd0;
}

.feat-post:last-child {
  border-bottom: none;
  padding-bottom: 0;
  margin-bottom: 0;
}

.featured-img-wrap {
  overflow: hidden;
  border-radius: 14px;
  height: 300px;
}

.featured-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  transition: transform 0.4s;
}

.featured-img-wrap:hover img {
  transform: scale(1.04);
}

.featured-text h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 28px;
  line-height: 1.2;
  margin-bottom: 12px;
  color: #2a2a2a;
}

.read-btn {
  display: inline-block;
  background: #c8a16b;
  color: #fff;
  padding: 11px 26px;
  border-radius: 999px;
  text-decoration: none;
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 8px;
  transition: background 0.2s;
}

.read-btn:hover {
  background: #b5905a;
}

/* SIDEBAR */
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 26px;
}

.sidebar-welcome {
  padding: 28px 24px;
  text-align: center;
}

.welcome-photo {
  margin: 12px auto 16px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #e8ddd0;
}

.welcome-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.signature {
  font-family: 'Dancing Script', cursive;
  font-size: 24px;
  color: #c8a16b;
  margin-top: 8px;
}

.sidebar-popular {
  padding: 28px 24px;
}

.pop-post {
  display: flex;
  gap: 12px;
  margin-bottom: 14px;
  padding-bottom: 14px;
  border-bottom: 1px solid #e8ddd0;
  cursor: pointer;
}

.pop-post img {
  width: 56px;
  height: 56px;
  object-fit: cover;
  object-position: center top;
  border-radius: 8px;
  flex-shrink: 0;
}

.pop-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 15px;
  color: #2a2a2a;
  line-height: 1.35;
  margin: 0;
}

.view-all-btn {
  display: block;
  text-align: center;
  border: 1px solid #c8a16b;
  color: #c8a16b;
  padding: 10px;
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 999px;
  margin-top: 14px;
  transition: all 0.2s;
}

.view-all-btn:hover {
  background: #c8a16b;
  color: #fff;
}

/* WHAT'S ON THE BLOG */
.whats-on-blog {
  text-align: center;
  padding: 20px 0 10px;
}

.script-heading-lg {
  font-family: 'Dancing Script', cursive;
  font-size: 52px;
  color: #2a2a2a;
  font-weight: 600;
  margin-bottom: 20px;
}

.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 0;
  border-bottom: 1px solid #e8ddd0;
  margin-bottom: 26px;
}

.tab-btn {
  background: none;
  border: none;
  padding: 10px 22px;
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #999;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
  margin-bottom: -1px;
}

.tab-btn:hover {
  color: #c8a16b;
}

.tab-btn.active {
  color: #2a2a2a;
  border-bottom-color: #2a2a2a;
  font-weight: 600;
}

/* POSTS */
.posts-box {
  padding: 36px;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
}

.post-card {
  border: 1px solid #e8ddd0;
  border-radius: 18px;
  overflow: hidden;
  background: #fffaf5;
  transition: box-shadow 0.2s;
}

.post-card:hover {
  box-shadow: 0 8px 24px rgba(80,55,35,0.1);
}

.post-img-wrap {
  height: 220px;
  overflow: hidden;
}

.post-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  transition: transform 0.4s;
}

.post-card:hover .post-img-wrap img {
  transform: scale(1.04);
}

.post-body {
  padding: 20px;
}

.post-body h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 18px;
  margin-bottom: 8px;
  line-height: 1.35;
  color: #2a2a2a;
}

.post-body p {
  font-size: 13px;
  color: #888;
  line-height: 1.7;
  margin-bottom: 12px;
}

.post-body a {
  color: #c8a16b;
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
}

/* SHARED */
.eyebrow {
  font-size: 10px;
  letter-spacing: 3px;
  color: #c8a16b;
  text-transform: uppercase;
  margin-bottom: 14px;
  font-weight: 600;
}

.category {
  color: #c8a16b;
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 6px;
  font-weight: 600;
}

h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 34px;
  color: #2a2a2a;
  margin: 0 0 16px;
}

p {
  color: #7a7a7a;
  line-height: 1.75;
  font-size: 14px;
  margin: 0 0 10px;
}

.center {
  text-align: center;
}

/* NEWSLETTER */
.contact {
  padding: 52px;
  text-align: center;
}

.contact p {
  max-width: 500px;
  margin: 0 auto 20px;
}

.subscribe-row {
  display: flex;
  max-width: 480px;
  margin: 0 auto;
}

.subscribe-row input {
  flex: 1;
  background: #fffaf5;
  border: 1px solid #e8ddd0;
  border-right: none;
  border-radius: 999px 0 0 999px;
  padding: 13px 20px;
  color: #2a2a2a;
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  outline: none;
}

.subscribe-row button {
  background: #c8a16b;
  color: #fff;
  border: none;
  border-radius: 0 999px 999px 0;
  padding: 13px 28px;
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s;
}

.subscribe-row button:hover {
  background: #b5905a;
}

/* FOOTER */
.footer {
  text-align: center;
  padding: 40px 22px 28px;
  border-top: 1px solid #e8ddd0;
  background: #fffaf5;
  margin-top: 10px;
}

.footer-social {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 22px;
  margin-bottom: 20px;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #6c625b;
  text-decoration: none;
  font-size: 12px;
  letter-spacing: 1px;
  transition: color 0.2s;
}

.social-link:hover {
  color: #c8a16b;
}

.footer-copy {
  font-size: 11px;
  color: #bbb;
  letter-spacing: 1px;
  margin: 0;
}

@media (max-width: 900px) {
  .nav-links { display: none; }
  .featured-layout { grid-template-columns: 1fr; }
  .featured-inner, .blog-grid { grid-template-columns: 1fr; }
  .cats-grid { grid-template-columns: repeat(3, 1fr); }
  .hero-overlay { padding: 0 28px; max-width: 100%; }
  .filter-tabs { flex-wrap: wrap; }
}
</style>
