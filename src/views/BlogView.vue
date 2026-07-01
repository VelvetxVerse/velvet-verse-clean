<template>
  <div class="blog-page">

    <!-- ── NAV ── -->
    <nav class="nav">
      <div class="nav-top-bar">
        <div class="nav-socials">
          <a href="https://instagram.com/renataoliveiraofficial" target="_blank" aria-label="Instagram">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
          </a>
          <a href="https://tiktok.com/@renataoliveiraofficial" target="_blank" aria-label="TikTok">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/></svg>
          </a>
          <a href="https://pinterest.com" target="_blank" aria-label="Pinterest">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.03-2.83.19-.77 1.27-5.37 1.27-5.37s-.32-.65-.32-1.61c0-1.51.88-2.64 1.97-2.64.93 0 1.38.7 1.38 1.54 0 .94-.6 2.34-.91 3.64-.26 1.09.54 1.97 1.6 1.97 1.92 0 3.21-2.46 3.21-5.37 0-2.22-1.5-3.88-4.22-3.88-3.08 0-5 2.3-5 4.87 0 .88.26 1.5.67 1.98.19.22.21.31.14.57-.05.18-.16.63-.2.8-.07.27-.28.37-.51.27-1.44-.6-2.11-2.21-2.11-4.02 0-2.98 2.52-6.56 7.54-6.56 4.03 0 6.68 2.93 6.68 6.07 0 4.16-2.3 7.27-5.68 7.27-1.14 0-2.21-.61-2.57-1.3l-.7 2.69c-.25.97-.93 2.18-1.39 2.92.99.3 2.03.47 3.12.47 5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>
          </a>
          <a href="https://youtube.com" target="_blank" aria-label="YouTube">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6a3 3 0 00-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg>
          </a>
        </div>
        <p class="nav-announce">BEAUTY · MAKEUP · LIFESTYLE · TRAVEL</p>
        <a class="nav-collab-btn" href="https://www.velvetxverse.com/collaborate">COLLABORATE</a>
      </div>
      <div class="nav-main">
        <div class="logo">
          <a href="/">
            <span class="logo-name">RENATA OLIVEIRA</span>
            <small class="logo-sub">BEAUTY &amp; MAKEUP</small>
          </a>
        </div>
        <div class="nav-links">
          <a href="/makeup">HOME</a>
          <a href="/makeup#about">ABOUT</a>
          <a href="/makeup#services">SERVICES</a>
          <a href="/blog" class="active">BLOG</a>
          <a href="/makeup#contact">CONTACT</a>
        </div>
      </div>
    </nav>

    <main>

      <!-- ── HERO BANNER ── -->
      <section class="hero-banner">
        <img src="/mk1.png" alt="Blog hero" class="hero-banner-img" />
        <div class="hero-banner-overlay">
          <p class="hero-eyebrow">THE JOURNAL</p>
          <h1 class="hero-title">Beauty, Makeup  
<em>&amp; Lifestyle</em></h1>
          <p class="hero-sub">Tips, tutorials, and honest reviews from a professional makeup artist</p>
        </div>
      </section>

      <!-- ── LATEST POST ── -->
      <section class="latest-post-section">
        <div class="latest-post-inner">
          <div class="latest-post-img">
            <img src="/mk5.png" alt="Latest post" />
          </div>
          <div class="latest-post-text">
            <p class="section-eyebrow">LATEST POST</p>
            <p class="post-cat-tag">MAKEUP TUTORIAL</p>
            <h2 class="latest-post-title">Step-by-Step:  
<em>Bronzed Soft Glam</em></h2>
            <p class="latest-post-date">June 28, 2025</p>
            <p class="latest-post-excerpt">Follow along as I break down this easy soft glam look using my go-to products for a bronzed, radiant finish. Perfect for everyday wear or a special occasion — this look works for every skin tone.</p>
            <a href="#" class="read-more-arrow">Read More →</a>
          </div>
        </div>
      </section>

      <!-- ── CATEGORY TABS ── -->
      <section class="category-tabs-section">
        <div class="category-tabs">
          <button
            v-for="tab in tabs"
            :key="tab"
            class="cat-tab"
            :class="{ active: activeTab === tab }"
            @click="activeTab = tab"
          >{{ tab }}</button>
          <button class="cat-tab read-all-tab">READ ALL</button>
        </div>
      </section>

      <!-- ── POST GRID ── -->
      <section class="post-grid-section">
        <div class="post-grid">
          <article
            v-for="post in filteredPosts"
            :key="post.title"
            class="post-card"
          >
            <a href="#" class="post-card-img-wrap">
              <img :src="post.img" :alt="post.title" />
            </a>
            <div class="post-card-body">
              <p class="post-card-cat">{{ post.cat }}</p>
              <h3 class="post-card-title">
                <a href="#">{{ post.title }}</a>
              </h3>
              <p class="post-card-date">{{ post.date }}</p>
            </div>
          </article>
        </div>
        <div class="load-more-wrap">
          <a href="#" class="load-more-btn">VIEW ALL POSTS</a>
        </div>
      </section>

      <!-- ── NEWSLETTER ── -->
      <section class="newsletter-section">
        <div class="newsletter-inner">
          <p class="section-eyebrow">JOIN THE COMMUNITY</p>
          <h2 class="newsletter-title">Beauty in Your Inbox</h2>
          <p class="newsletter-sub">Subscribe for the latest beauty tips, product picks, and blog updates.</p>
          <form class="newsletter-form" @submit.prevent>
            <input type="email" placeholder="Your email address" class="newsletter-input" />
            <button type="submit" class="newsletter-btn">SUBSCRIBE</button>
          </form>
        </div>
      </section>

    </main>

    <!-- ── FOOTER ── -->
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-logo">
          <span class="footer-logo-name">RENATA OLIVEIRA</span>
          <small class="footer-logo-sub">BEAUTY &amp; MAKEUP</small>
        </div>
        <nav class="footer-links">
          <a href="/makeup">Home</a>
          <a href="/makeup#about">About</a>
          <a href="/blog">Blog</a>
          <a href="/makeup#contact">Contact</a>
          <a href="/collaborate">Collaborate</a>
        </nav>
        <div class="footer-socials">
          <a href="https://instagram.com/renataoliveiraofficial" target="_blank">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
          </a>
          <a href="https://tiktok.com/@renataoliveiraofficial" target="_blank">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/></svg>
          </a>
          <a href="https://pinterest.com" target="_blank">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.03-2.83.19-.77 1.27-5.37 1.27-5.37s-.32-.65-.32-1.61c0-1.51.88-2.64 1.97-2.64.93 0 1.38.7 1.38 1.54 0 .94-.6 2.34-.91 3.64-.26 1.09.54 1.97 1.6 1.97 1.92 0 3.21-2.46 3.21-5.37 0-2.22-1.5-3.88-4.22-3.88-3.08 0-5 2.3-5 4.87 0 .88.26 1.5.67 1.98.19.22.21.31.14.57-.05.18-.16.63-.2.8-.07.27-.28.37-.51.27-1.44-.6-2.11-2.21-2.11-4.02 0-2.98 2.52-6.56 7.54-6.56 4.03 0 6.68 2.93 6.68 6.07 0 4.16-2.3 7.27-5.68 7.27-1.14 0-2.21-.61-2.57-1.3l-.7 2.69c-.25.97-.93 2.18-1.39 2.92.99.3 2.03.47 3.12.47 5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>
          </a>
          <a href="https://youtube.com" target="_blank">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6a3 3 0 00-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg>
          </a>
        </div>
      </div>
      <p class="footer-copy">&copy; 2025 Renata Oliveira &middot; All rights reserved &middot; <a href="/privacy">Privacy Policy</a></p>
    </footer>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeTab = ref('ALL' )

const tabs = ['ALL', 'MAKEUP', 'SKINCARE', 'TUTORIALS', 'REVIEWS', 'LIFESTYLE']

const allPosts = [
  { cat: 'MAKEUP', title: '10 Must-Have Products for Your Makeup Bag', date: 'June 20, 2025', img: '/mk9.png', tags: ['MAKEUP'] },
  { cat: 'REVIEWS', title: 'Foundation Showdown: Dewy vs. Matte', date: 'June 14, 2025', img: '/mk10.png', tags: ['REVIEWS'] },
  { cat: 'TUTORIALS', title: 'How to Make Your Makeup Last All Day', date: 'June 8, 2025', img: '/mk11.png', tags: ['TUTORIALS'] },
  { cat: 'TUTORIALS', title: 'The Perfect Smoky Eye in 10 Minutes', date: 'May 30, 2025', img: '/mk12.png', tags: ['TUTORIALS'] },
  { cat: 'LIFESTYLE', title: 'My Morning Beauty Ritual for Glowing Skin', date: 'May 22, 2025', img: '/mk13.png', tags: ['LIFESTYLE'] },
  { cat: 'REVIEWS', title: 'Dior Addict Lip Maximizer: Worth the Hype?', date: 'May 15, 2025', img: '/mk2.png', tags: ['REVIEWS'] },
  { cat: 'SKINCARE', title: 'Skin Prep: My Glowing Base Routine', date: 'May 8, 2025', img: '/mk4.png', tags: ['SKINCARE'] },
  { cat: 'MAKEUP', title: 'My Go-To Everyday Makeup Routine', date: 'April 28, 2025', img: '/mk6.png', tags: ['MAKEUP'] },
  { cat: 'REVIEWS', title: 'The Best Foundations for Glowing Skin', date: 'April 20, 2025', img: '/mk7.png', tags: ['REVIEWS'] },
]

const filteredPosts = computed(() => {
  if (activeTab.value === 'ALL') return allPosts
  return allPosts.filter(p => p.tags.includes(activeTab.value))
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap' );

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

.blog-page {
  min-height: 100vh;
  background: #f5ede4;
  color: #2a2218;
  font-family: 'Jost', sans-serif;
}

.nav-top-bar {
  background: #2a2218;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 40px;
}

.nav-socials { display: flex; gap: 14px; }
.nav-socials a { color: #c8a97a; transition: color 0.2s; }
.nav-socials a:hover { color: #fff; }

.nav-announce {
  font-size: 9px;
  letter-spacing: 3px;
  color: rgba(255,255,255,0.55);
  text-transform: uppercase;
}

.nav-collab-btn {
  font-size: 9px;
  letter-spacing: 2px;
  color: #c8a97a;
  text-decoration: none;
  border: 1px solid #c8a97a;
  padding: 5px 16px;
  transition: all 0.2s;
}
.nav-collab-btn:hover { background: #c8a97a; color: #2a2218; }

.nav-main {
  background: #fdf8f3;
  border-bottom: 1px solid #e8ddd0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 22px 40px 16px;
  gap: 16px;
  position: sticky;
  top: 0;
  z-index: 20;
}

.logo a {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.logo-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 28px;
  font-weight: 300;
  letter-spacing: 6px;
  color: #2a2218;
}

.logo-sub {
  font-size: 8px;
  letter-spacing: 4px;
  color: #c8a97a;
  text-transform: uppercase;
}

.nav-links { display: flex; gap: 32px; }

.nav-links a {
  font-size: 10px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #6c5c4e;
  text-decoration: none;
  transition: color 0.2s;
  font-weight: 500;
}
.nav-links a:hover, .nav-links a.active { color: #c8a97a; }

.hero-banner {
  position: relative;
  height: 420px;
  overflow: hidden;
}

.hero-banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 25%;
  display: block;
}

.hero-banner-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(20,14,8,0.45) 0%, rgba(20,14,8,0.65) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 24px;
}

.hero-eyebrow {
  font-size: 10px;
  letter-spacing: 4px;
  color: #c8a97a;
  text-transform: uppercase;
  margin-bottom: 16px;
  font-weight: 500;
}

.hero-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(38px, 5vw, 64px);
  font-weight: 300;
  color: #fff;
  line-height: 1.1;
  margin-bottom: 16px;
}
.hero-title em { font-style: italic; font-weight: 300; }

.hero-sub {
  font-size: 13px;
  color: rgba(255,255,255,0.75);
  font-weight: 300;
  max-width: 480px;
}

.latest-post-section { background: #fdf8f3; padding: 0; }

.latest-post-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 480px;
}

.latest-post-img { overflow: hidden; }
.latest-post-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}
.latest-post-img:hover img { transform: scale(1.03); }

.latest-post-text {
  padding: 60px 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fdf8f3;
}

.section-eyebrow {
  font-size: 9px;
  letter-spacing: 4px;
  color: #c8a97a;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 18px;
}

.post-cat-tag {
  font-size: 9px;
  letter-spacing: 2.5px;
  color: #9e8878;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 12px;
}

.latest-post-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(30px, 3.5vw, 44px);
  font-weight: 300;
  color: #2a2218;
  line-height: 1.15;
  margin-bottom: 10px;
}
.latest-post-title em { font-style: italic; }

.latest-post-date {
  font-size: 11px;
  color: #b0a090;
  letter-spacing: 1px;
  margin-bottom: 18px;
}

.latest-post-excerpt {
  font-size: 14px;
  color: #5c4e42;
  line-height: 1.8;
  font-weight: 300;
  margin-bottom: 28px;
}

.read-more-arrow {
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #2a2218;
  text-decoration: none;
  font-weight: 500;
  border-bottom: 1px solid #c8a97a;
  padding-bottom: 3px;
  align-self: flex-start;
  transition: color 0.2s;
}
.read-more-arrow:hover { color: #c8a97a; }

.category-tabs-section {
  background: #f5ede4;
  border-top: 1px solid #e4d8cc;
  border-bottom: 1px solid #e4d8cc;
}

.category-tabs {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: stretch;
}

.cat-tab {
  flex: 1;
  background: transparent;
  border: none;
  border-right: 1px solid #e4d8cc;
  padding: 18px 10px;
  font-size: 10px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #7a6a5a;
  cursor: pointer;
  font-family: 'Jost', sans-serif;
  font-weight: 500;
  transition: background 0.2s, color 0.2s;
}
.cat-tab:last-child { border-right: none; }
.cat-tab:hover { background: #ede3d8; color: #2a2218; }
.cat-tab.active { background: #2a2218; color: #c8a97a; }
.read-all-tab { color: #c8a97a; font-weight: 600; }

.post-grid-section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 50px 24px 60px;
}

.post-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 36px 28px;
  margin-bottom: 50px;
}

.post-card { display: flex; flex-direction: column; }

.post-card-img-wrap {
  display: block;
  overflow: hidden;
  aspect-ratio: 3/4;
  margin-bottom: 16px;
}
.post-card-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.45s ease;
}
.post-card:hover .post-card-img-wrap img { transform: scale(1.04); }

.post-card-cat {
  font-size: 9px;
  letter-spacing: 2.5px;
  color: #c8a97a;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 8px;
}

.post-card-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 20px;
  font-weight: 400;
  color: #2a2218;
  line-height: 1.3;
  margin-bottom: 8px;
}
.post-card-title a {
  text-decoration: none;
  color: inherit;
  transition: color 0.2s;
}
.post-card-title a:hover { color: #c8a97a; }

.post-card-date {
  font-size: 11px;
  color: #b0a090;
}

.load-more-wrap { text-align: center; }

.load-more-btn {
  display: inline-block;
  font-size: 10px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #2a2218;
  text-decoration: none;
  border: 1px solid #2a2218;
  padding: 14px 40px;
  font-weight: 500;
  transition: all 0.2s;
}
.load-more-btn:hover { background: #2a2218; color: #f5ede4; }

.newsletter-section {
  background: #2a2218;
  padding: 70px 24px;
}

.newsletter-inner {
  max-width: 560px;
  margin: 0 auto;
  text-align: center;
}

.newsletter-section .section-eyebrow { color: #c8a97a; margin-bottom: 14px; }

.newsletter-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(28px, 3.5vw, 40px);
  font-weight: 300;
  color: #fdf8f3;
  margin-bottom: 12px;
}

.newsletter-sub {
  font-size: 13px;
  color: rgba(253,248,243,0.6);
  font-weight: 300;
  margin-bottom: 32px;
  line-height: 1.7;
}

.newsletter-form {
  display: flex;
  max-width: 440px;
  margin: 0 auto;
}

.newsletter-input {
  flex: 1;
  padding: 14px 20px;
  font-size: 13px;
  font-family: 'Jost', sans-serif;
  border: 1px solid rgba(200,169,122,0.4);
  background: rgba(255,255,255,0.06);
  color: #fdf8f3;
  outline: none;
  transition: border-color 0.2s;
}
.newsletter-input::placeholder { color: rgba(253,248,243,0.35); }
.newsletter-input:focus { border-color: #c8a97a; }

.newsletter-btn {
  padding: 14px 28px;
  background: #c8a97a;
  color: #2a2218;
  font-size: 10px;
  letter-spacing: 2px;
  font-family: 'Jost', sans-serif;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
}
.newsletter-btn:hover { background: #b8956a; }

.footer {
  background: #1c1510;
  padding: 48px 40px 28px;
}

.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
  padding-bottom: 32px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  margin-bottom: 24px;
}

.footer-logo { display: flex; flex-direction: column; gap: 5px; }
.footer-logo-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 4px;
  color: #fdf8f3;
}
.footer-logo-sub {
  font-size: 8px;
  letter-spacing: 3px;
  color: #c8a97a;
  text-transform: uppercase;
}

.footer-links { display: flex; gap: 28px; flex-wrap: wrap; }
.footer-links a {
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(253,248,243,0.5);
  text-decoration: none;
  transition: color 0.2s;
}
.footer-links a:hover { color: #c8a97a; }

.footer-socials { display: flex; gap: 16px; }
.footer-socials a { color: rgba(253,248,243,0.45); transition: color 0.2s; }
.footer-socials a:hover { color: #c8a97a; }

.footer-copy {
  max-width: 1100px;
  margin: 0 auto;
  font-size: 10px;
  color: rgba(253,248,243,0.3);
  letter-spacing: 1px;
  text-align: center;
}
.footer-copy a { color: rgba(253,248,243,0.4); text-decoration: none; }
.footer-copy a:hover { color: #c8a97a; }

@media (max-width: 900px) {
  .latest-post-inner { grid-template-columns: 1fr; }
  .latest-post-img { height: 320px; }
  .latest-post-text { padding: 36px 28px; }
  .post-grid { grid-template-columns: repeat(2, 1fr); gap: 28px 20px; }
  .category-tabs { flex-wrap: wrap; }
  .cat-tab { flex: none; width: 50%; border-bottom: 1px solid #e4d8cc; }
  .nav-top-bar { padding: 8px 20px; }
  .nav-main { padding: 16px 20px 12px; }
  .nav-links { gap: 18px; }
}

@media (max-width: 580px) {
  .post-grid { grid-template-columns: 1fr; }
  .hero-banner { height: 300px; }
  .nav-links { gap: 12px; flex-wrap: wrap; justify-content: center; }
  .nav-announce { display: none; }
  .footer-inner { flex-direction: column; align-items: center; text-align: center; }
}
</style>
