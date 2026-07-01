<template>
  <div class="blog-page">

    <!-- ── MARQUEE ANNOUNCEMENT BAR ── -->
    <div class="marquee-bar">
      <div class="marquee-track">
        <span>Beauty Without Compromise ✦ Tips, Tutorials &amp; Honest Reviews ✦ Beauty Without Compromise ✦ Tips, Tutorials &amp; Honest Reviews ✦ Beauty Without Compromise ✦ Tips, Tutorials &amp; Honest Reviews ✦ Beauty Without Compromise ✦ Tips, Tutorials &amp; Honest Reviews ✦</span>
      </div>
    </div>

    <!-- ── NAVIGATION ── -->
    <nav class="nav">
      <div class="nav-logo">
        <a href="/">
          <span class="logo-name">Renata Oliver</span>
          <small class="logo-sub">Makeup &amp; Beauty</small>
        </a>
      </div>
      <div class="nav-links">
        <a href="/">HOME</a>
        <a href="/blog" class="active">BLOG</a>
        <a href="/makeup">MAKEUP</a>
        <a href="/skincare">SKINCARE</a>
        <a href="/shop">SHOP</a>
        <a href="/makeup#about">ABOUT</a>
        <a href="/makeup#contact">CONTACT</a>
      </div>
      <div class="nav-collab">
        <a href="/makeup#contact" class="collab-btn">COLLABORATE</a>
      </div>
    </nav>

    <main>

      <!-- ── HERO ── -->
      <section class="hero">
        <img src="/mk1.png" alt="Blog hero" class="hero-img" />
        <div class="hero-overlay">
          <p class="hero-eyebrow">The Journal</p>
          <h1 class="hero-title">Beauty, Makeup<br><em>&amp; Lifestyle</em></h1>
          <p class="hero-sub">Tips, tutorials, and honest reviews from a professional makeup artist</p>
          <a href="#posts" class="hero-btn">EXPLORE ARTICLES</a>
        </div>
      </section>

      <!-- ── INTRO TEXT ── -->
      <section class="intro-section">
        <p class="intro-eyebrow">Welcome to the Journal</p>
        <h2 class="intro-heading">Love Your Beauty Routine Again</h2>
        <p class="intro-body">Here you'll find honest product reviews, step-by-step tutorials, skincare rituals, and beauty discoveries from my travels around the world.</p>
        <a href="#posts" class="intro-btn">EXPLORE ARTICLES</a>
      </section>

      <!-- ── CATEGORY TABS ── -->
      <section id="posts" class="tabs-section">
        <div class="tabs-row">
          <button
            v-for="tab in tabs"
            :key="tab"
            class="tab-btn"
            :class="{ active: activeTab === tab }"
            @click="activeTab = tab"
          >{{ tab }}</button>
        </div>
      </section>

      <!-- ── POST GRID ── -->
      <section class="post-grid-section">
        <div class="post-grid">
          <article v-for="post in filteredPosts" :key="post.title" class="post-card">
            <a :href="post.slug" class="post-card-img-wrap">
              <img :src="post.img" :alt="post.title" />
            </a>
            <div class="post-card-body">
              <p class="post-card-cat" @click="activeTab = post.cat" style="cursor:pointer">{{ post.cat }}</p>
              <h3 class="post-card-title"><a :href="post.slug">{{ post.title }}</a></h3>
              <p class="post-card-meta">{{ post.date }} · {{ post.read }}</p>
            </div>
          </article>
        </div>
        <div class="grid-cta">
          <a href="/blog/all" class="view-all-btn">View All Articles</a>
        </div>
      </section>

      <!-- ── FEATURED POST (arch accent) ── -->
      <section class="featured-section">
        <div class="featured-inner">
          <a href="/blog/bronzed-soft-glam" class="featured-img-wrap">
            <img src="/mk5.png" alt="Featured post" class="featured-img" />
          </a>
          <div class="featured-text">
            <p class="featured-eyebrow">FEATURED ARTICLE</p>
            <h2 class="featured-title">Step-by-Step:<br><em>Bronzed Soft Glam</em></h2>
            <p class="featured-body">Follow along as I break down this easy soft glam look using my go-to products for a bronzed, radiant finish. Perfect for everyday wear or a special occasion.</p>
            <a href="/blog/bronzed-soft-glam" class="featured-btn">READ ARTICLE →</a>
          </div>
          <div class="featured-arch">
            <div class="arch-shape">
              <img src="/mk2.png" alt="Beauty product" />
            </div>
          </div>
        </div>
      </section>

      <!-- ── PRESS / AS SEEN IN ── -->
      <section class="press-section">
        <p class="press-label">AS FEATURED IN</p>
        <div class="press-logos">
          <span class="press-logo">VOGUE</span>
          <span class="press-dot">✦</span>
          <span class="press-logo">ELLE</span>
          <span class="press-dot">✦</span>
          <span class="press-logo">ALLURE</span>
          <span class="press-dot">✦</span>
          <span class="press-logo">BYRDIE</span>
          <span class="press-dot">✦</span>
          <span class="press-logo">REFINERY29</span>
        </div>
      </section>

      <!-- ── MY CURRENT FAVORITES ── -->
      <section class="favorites-section">
        <p class="favorites-eyebrow">SHOP MY PICKS</p>
        <h2 class="favorites-heading">My Current Favorites</h2>
        <p class="favorites-sub">Products I'm loving right now — all shoppable on my Amazon storefront</p>
        <div class="favorites-track-wrap">
          <button class="fav-arrow" @click="scrollFavs(-1)">&#8592;</button>
          <div class="favorites-track" ref="favsTrack">
            <a v-for="brand in favBrands" :key="brand.name" :href="brand.link" target="_blank" class="fav-item">
              <div class="fav-img-wrap">
                <img :src="brand.img" :alt="brand.name" />
              </div>
              <p class="fav-name">{{ brand.name }}</p>
              <p class="fav-shop">Shop Now →</p>
            </a>
          </div>
          <button class="fav-arrow" @click="scrollFavs(1)">&#8594;</button>
        </div>
        <div class="favorites-cta">
          <a href="https://www.amazon.com/shop/welovejetlag" target="_blank" class="amazon-btn">VIEW MY AMAZON STOREFRONT</a>
        </div>
      </section>

      <!-- ── TESTIMONIAL ── -->
      <section class="testimonial-section">
        <h2 class="testimonial-heading">What Readers Are Saying</h2>
        <div class="testimonial-stars">★★★★★</div>
        <p class="testimonial-quote">"Renata's tutorials changed the way I do my makeup. Her product recommendations are always spot-on — I've never felt more confident in my skin."</p>
        <div class="testimonial-author">
          <img src="/mk13.png" alt="Reader" class="testimonial-avatar" />
          <span class="testimonial-name">— Sofia M.</span>
        </div>
      </section>

      <!-- ── NEWSLETTER ── -->
      <section class="newsletter-section">
        <p class="newsletter-eyebrow">JOIN THE COMMUNITY</p>
        <h2 class="newsletter-heading">Join Our List</h2>
        <p class="newsletter-sub">Subscribe for the latest beauty tips, tutorials &amp; exclusive picks.</p>
        <form class="newsletter-form" @submit.prevent>
          <div class="newsletter-field">
            <input type="email" placeholder="Email" class="newsletter-input" />
            <button type="submit" class="newsletter-arrow">→</button>
          </div>
        </form>
      </section>

      <!-- ── FOLLOW ON INSTAGRAM ── -->
      <section class="instagram-section">
        <h2 class="instagram-heading">Follow Along</h2>
        <a href="https://instagram.com/renataoliveiraofficial" target="_blank" class="instagram-handle-btn">@renataoliveiraofficial</a>
        <div class="instagram-grid">
          <a v-for="img in instaImgs" :key="img" href="https://instagram.com/renataoliveiraofficial" target="_blank" class="insta-img">
            <img :src="img" alt="Instagram" />
          </a>
        </div>
      </section>

    </main>

    <!-- ── FOOTER ── -->
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-logo">
          <a href="/"><span class="footer-logo-name">Renata Oliver</span></a>
          <small class="footer-logo-sub">Makeup &amp; Beauty</small>
        </div>
        <nav class="footer-nav">
          <a href="/">Home</a>
          <a href="/blog">Blog</a>
          <a href="/makeup">Makeup</a>
          <a href="/skincare">Skincare</a>
          <a href="/shop">Shop</a>
          <a href="/makeup#about">About</a>
          <a href="/makeup#contact">Contact</a>
        </nav>
        <div class="footer-socials">
          <a href="https://instagram.com/renataoliveiraofficial" target="_blank" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
          </a>
          <a href="https://tiktok.com/@renataoliveiraofficial" target="_blank" aria-label="TikTok">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/></svg>
          </a>
          <a href="https://pinterest.com" target="_blank" aria-label="Pinterest">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.03-2.83.19-.77 1.27-5.37 1.27-5.37s-.32-.65-.32-1.61c0-1.51.88-2.64 1.97-2.64.93 0 1.38.7 1.38 1.54 0 .94-.6 2.34-.91 3.64-.26 1.09.54 1.97 1.6 1.97 1.92 0 3.21-2.46 3.21-5.37 0-2.22-1.5-3.88-4.22-3.88-3.08 0-5 2.3-5 4.87 0 .88.26 1.5.67 1.98.19.22.21.31.14.57-.05.18-.16.63-.2.8-.07.27-.28.37-.51.27-1.44-.6-2.11-2.21-2.11-4.02 0-2.98 2.52-6.56 7.54-6.56 4.03 0 6.68 2.93 6.68 6.07 0 4.16-2.3 7.27-5.68 7.27-1.14 0-2.21-.61-2.57-1.3l-.7 2.69c-.25.97-.93 2.18-1.39 2.92.99.3 2.03.47 3.12.47 5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>
          </a>
          <a href="https://youtube.com" target="_blank" aria-label="YouTube">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6a3 3 0 00-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg>
          </a>
        </div>
      </div>
      <p class="footer-copy">© 2025 Renata Oliver · All rights reserved · <a href="/privacy">Privacy Policy</a></p>
    </footer>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const favsTrack = ref(null)
const activeTab = ref('ALL')
const tabs = ['ALL', 'MAKEUP', 'SKINCARE', 'TUTORIALS', 'REVIEWS', 'LIFESTYLE']

function scrollFavs(dir) {
  if (favsTrack.value) {
    favsTrack.value.scrollBy({ left: dir * 280, behavior: 'smooth' })
  }
}

const allPosts = [
  { cat: 'MAKEUP',    title: '10 Must-Have Products for Your Makeup Bag',    date: 'June 20, 2025',  read: '4 MIN READ', img: '/mk9.png',  tags: ['MAKEUP'],    slug: '/blog/must-have-products' },
  { cat: 'REVIEWS',   title: 'Foundation Showdown: Dewy vs. Matte',          date: 'June 14, 2025',  read: '5 MIN READ', img: '/mk10.png', tags: ['REVIEWS'],   slug: '/blog/foundation-showdown' },
  { cat: 'TUTORIALS', title: 'How to Make Your Makeup Last All Day',          date: 'June 8, 2025',   read: '3 MIN READ', img: '/mk11.png', tags: ['TUTORIALS'], slug: '/blog/makeup-last-all-day' },
  { cat: 'TUTORIALS', title: 'The Perfect Smoky Eye in 10 Minutes',           date: 'May 30, 2025',   read: '4 MIN READ', img: '/mk12.png', tags: ['TUTORIALS'], slug: '/blog/smoky-eye' },
  { cat: 'LIFESTYLE', title: 'My Morning Beauty Ritual for Glowing Skin',     date: 'May 22, 2025',   read: '3 MIN READ', img: '/mk13.png', tags: ['LIFESTYLE'], slug: '/blog/morning-ritual' },
  { cat: 'REVIEWS',   title: 'Dior Addict Lip Maximizer: Worth the Hype?',    date: 'May 15, 2025',   read: '5 MIN READ', img: '/mk2.png',  tags: ['REVIEWS'],   slug: '/blog/dior-lip-maximizer' },
  { cat: 'SKINCARE',  title: 'Skin Prep: My Glowing Base Routine',            date: 'May 8, 2025',    read: '4 MIN READ', img: '/mk4.png',  tags: ['SKINCARE'],  slug: '/blog/skin-prep' },
  { cat: 'MAKEUP',    title: 'My Go-To Everyday Makeup Routine',              date: 'April 28, 2025', read: '3 MIN READ', img: '/mk6.png',  tags: ['MAKEUP'],    slug: '/blog/everyday-makeup' },
  { cat: 'SKINCARE',  title: 'The Sunscreen Edit: My Top 5 Picks',            date: 'April 10, 2025', read: '4 MIN READ', img: '/mk7.png',  tags: ['SKINCARE'],  slug: '/blog/sunscreen-edit' },
  { cat: 'LIFESTYLE', title: 'Paris Beauty Finds: What I Bought & Loved',     date: 'April 20, 2025', read: '6 MIN READ', img: '/mk8.png',  tags: ['LIFESTYLE'], slug: '/blog/paris-beauty' },
  { cat: 'TUTORIALS', title: 'No-Makeup Makeup: A Step-by-Step Guide',        date: 'March 28, 2025', read: '5 MIN READ', img: '/mk3.png',  tags: ['TUTORIALS'], slug: '/blog/no-makeup-look' },
  { cat: 'REVIEWS',   title: 'Charlotte Tilbury Pillow Talk: Full Review',    date: 'March 15, 2025', read: '4 MIN READ', img: '/mk5.png',  tags: ['REVIEWS'],   slug: '/blog/charlotte-tilbury' },
]

const filteredPosts = computed(() => {
  if (activeTab.value === 'ALL') return allPosts
  return allPosts.filter(p => p.tags.includes(activeTab.value))
})

const favBrands = [
  { name: 'Dior Beauty',       img: '/mk2.png',  link: 'https://www.amazon.com/shop/welovejetlag' },
  { name: 'Chanel',            img: '/mk3.png',  link: 'https://www.amazon.com/shop/welovejetlag' },
  { name: 'Medicube',          img: '/mk4.png',  link: 'https://www.amazon.com/shop/welovejetlag' },
  { name: 'Beauty of Joseon',  img: '/mk6.png',  link: 'https://www.amazon.com/shop/welovejetlag' },
  { name: 'Tirtir',            img: '/mk7.png',  link: 'https://www.amazon.com/shop/welovejetlag' },
  { name: 'YSL Beauty',        img: '/mk8.png',  link: 'https://www.amazon.com/shop/welovejetlag' },
  { name: 'Hourglass',         img: '/mk13.png', link: 'https://www.amazon.com/shop/welovejetlag' },
  { name: 'Charlotte Tilbury', img: '/mk12.png', link: 'https://www.amazon.com/shop/welovejetlag' },
]

const instaImgs = ['/mk1.png', '/mk5.png', '/mk9.png', '/mk11.png']
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

.blog-page {
  min-height: 100vh;
  background: #fff;
  color: #1a1a1a;
  font-family: 'Jost', sans-serif;
}

/* ── MARQUEE ── */
.marquee-bar {
  background: #f2c4c4;
  overflow: hidden;
  padding: 10px 0;
  white-space: nowrap;
}
.marquee-track {
  display: inline-block;
  animation: marquee 28s linear infinite;
}
.marquee-track span {
  font-size: 11px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #fff;
  font-weight: 500;
  padding-right: 60px;
}
@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* ── NAV ── */
.nav {
  background: #fff;
  border-bottom: 1px solid #f0e4e4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
  height: 68px;
  position: sticky;
  top: 0;
  z-index: 30;
}
.nav-logo a {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
}
.logo-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 2px;
  color: #1a1a1a;
}
.logo-sub {
  font-size: 8px;
  letter-spacing: 2.5px;
  color: #c8848a;
  text-transform: uppercase;
}
.nav-links {
  display: flex;
  gap: 28px;
}
.nav-links a {
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #5a3a3a;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}
.nav-links a:hover,
.nav-links a.active { color: #c8848a; }
.collab-btn {
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #c8848a;
  text-decoration: none;
  border: 1px solid #c8848a;
  padding: 7px 18px;
  font-weight: 500;
  transition: all 0.2s;
  white-space: nowrap;
}
.collab-btn:hover { background: #c8848a; color: #fff; }

/* ── HERO ── */
.hero {
  position: relative;
  height: 520px;
  overflow: hidden;
}
.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 25%;
  display: block;
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(15,8,8,0.3) 0%, rgba(15,8,8,0.55) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 24px;
}
.hero-eyebrow {
  font-family: 'Cormorant Garamond', serif;
  font-size: 18px;
  font-style: italic;
  font-weight: 300;
  color: #f2c4c4;
  margin-bottom: 12px;
}
.hero-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(42px, 6vw, 72px);
  font-weight: 300;
  color: #fff;
  line-height: 1.1;
  margin-bottom: 18px;
}
.hero-title em { font-style: italic; }
.hero-sub {
  font-size: 13px;
  color: rgba(255,255,255,0.75);
  font-weight: 300;
  max-width: 460px;
  line-height: 1.7;
  margin-bottom: 32px;
}
.hero-btn {
  display: inline-block;
  font-size: 10px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #fff;
  text-decoration: none;
  border: 1px solid rgba(255,255,255,0.7);
  padding: 13px 32px;
  font-weight: 500;
  transition: all 0.25s;
}
.hero-btn:hover { background: #f2c4c4; border-color: #f2c4c4; }

/* ── INTRO ── */
.intro-section {
  background: #fff;
  text-align: center;
  padding: 72px 24px;
  max-width: 600px;
  margin: 0 auto;
}
.intro-eyebrow {
  font-size: 10px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #c8848a;
  font-weight: 600;
  margin-bottom: 16px;
}
.intro-heading {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(30px, 4vw, 44px);
  font-weight: 400;
  color: #1a1a1a;
  line-height: 1.15;
  margin-bottom: 18px;
}
.intro-body {
  font-size: 14px;
  color: #6a4a4a;
  line-height: 1.85;
  font-weight: 300;
  margin-bottom: 28px;
}
.intro-btn {
  display: inline-block;
  font-size: 10px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #fff;
  text-decoration: none;
  background: #f2c4c4;
  padding: 13px 32px;
  font-weight: 500;
  transition: background 0.2s;
}
.intro-btn:hover { background: #d9a0a6; }

/* ── TABS ── */
.tabs-section {
  background: #fdf5f5;
  border-top: 1px solid #f0e0e0;
  border-bottom: 1px solid #f0e0e0;
}
.tabs-row {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: stretch;
}
.tab-btn {
  flex: 1;
  background: transparent;
  border: none;
  border-right: 1px solid #f0e0e0;
  padding: 18px 10px;
  font-size: 10px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #8a6060;
  cursor: pointer;
  font-family: 'Jost', sans-serif;
  font-weight: 500;
  transition: background 0.2s, color 0.2s;
}
.tab-btn:last-child { border-right: none; }
.tab-btn:hover { background: #fce8e8; color: #1a1a1a; }
.tab-btn.active { background: #f2c4c4; color: #fff; }

/* ── POST GRID ── */
.post-grid-section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 56px 24px;
}
.post-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 28px;
  margin-bottom: 48px;
}
.post-card { display: flex; flex-direction: column; }
.post-card-img-wrap {
  display: block;
  overflow: hidden;
  aspect-ratio: 4/5;
  margin-bottom: 16px;
  background: #fdf0f0;
}
.post-card-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}
.post-card:hover .post-card-img-wrap img { transform: scale(1.04); }
.post-card-cat {
  font-size: 9px;
  letter-spacing: 2.5px;
  color: #c8848a;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 8px;
  transition: opacity 0.2s;
}
.post-card-cat:hover { opacity: 0.7; }
.post-card-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 21px;
  font-weight: 400;
  color: #1a1a1a;
  line-height: 1.3;
  margin-bottom: 8px;
}
.post-card-title a { text-decoration: none; color: inherit; transition: color 0.2s; }
.post-card-title a:hover { color: #c8848a; }
.post-card-meta { font-size: 11px; color: #b09090; }

.grid-cta { text-align: center; }
.view-all-btn {
  display: inline-block;
  font-size: 13px;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 400;
  color: #1a1a1a;
  text-decoration: none;
  border-bottom: 1px solid #c8848a;
  padding-bottom: 3px;
  transition: color 0.2s;
}
.view-all-btn:hover { color: #c8848a; }

/* ── FEATURED POST ── */
.featured-section {
  background: #fdf5f5;
  padding: 72px 24px;
}
.featured-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 260px;
  gap: 48px;
  align-items: center;
}
.featured-img-wrap {
  display: block;
  overflow: hidden;
  height: 460px;
}
.featured-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}
.featured-img-wrap:hover .featured-img { transform: scale(1.03); }
.featured-text { display: flex; flex-direction: column; justify-content: center; }
.featured-eyebrow {
  font-size: 9px;
  letter-spacing: 3px;
  color: #c8848a;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 16px;
}
.featured-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(30px, 3.5vw, 44px);
  font-weight: 300;
  color: #1a1a1a;
  line-height: 1.15;
  margin-bottom: 18px;
}
.featured-title em { font-style: italic; }
.featured-body {
  font-size: 14px;
  color: #6a4a4a;
  line-height: 1.85;
  font-weight: 300;
  margin-bottom: 24px;
}
.featured-btn {
  font-size: 10px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #c8848a;
  text-decoration: none;
  font-weight: 600;
  border-bottom: 1px solid #c8848a;
  padding-bottom: 3px;
  align-self: flex-start;
  transition: color 0.2s;
}
.featured-btn:hover { color: #a06068; border-color: #a06068; }
.featured-arch { display: flex; justify-content: center; align-items: center; }
.arch-shape {
  width: 210px;
  height: 300px;
  border-radius: 105px 105px 0 0;
  overflow: hidden;
  background: #f2c4c4;
}
.arch-shape img { width: 100%; height: 100%; object-fit: cover; display: block; }

/* ── PRESS ── */
.press-section {
  background: #f2c4c4;
  padding: 28px 24px;
  text-align: center;
}
.press-label {
  font-size: 9px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.7);
  font-weight: 600;
  margin-bottom: 14px;
}
.press-logos {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  flex-wrap: wrap;
}
.press-logo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  letter-spacing: 3px;
}
.press-dot { color: rgba(255,255,255,0.5); font-size: 10px; }

/* ── FAVORITES ── */
.favorites-section {
  background: #fff;
  padding: 64px 0 52px;
  text-align: center;
}
.favorites-eyebrow {
  font-size: 9px;
  letter-spacing: 3px;
  color: #c8848a;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 10px;
}
.favorites-heading {
  font-family: 'Cormorant Garamond', serif;
  font-size: 38px;
  font-weight: 400;
  color: #1a1a1a;
  margin-bottom: 10px;
}
.favorites-sub {
  font-size: 13px;
  color: #8a6060;
  font-weight: 300;
  margin-bottom: 36px;
}
.favorites-track-wrap {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
.fav-arrow {
  background: none;
  border: 1px solid #f0d0d0;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  font-size: 18px;
  color: #c8848a;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.fav-arrow:hover { background: #f2c4c4; color: #fff; border-color: #f2c4c4; }
.favorites-track {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  padding: 8px 16px;
  flex: 1;
}
.favorites-track::-webkit-scrollbar { display: none; }
.fav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  flex-shrink: 0;
  width: 150px;
  transition: opacity 0.2s;
}
.fav-item:hover { opacity: 0.8; }
.fav-img-wrap {
  width: 130px;
  height: 130px;
  background: #fdf0f0;
  overflow: hidden;
  border-radius: 4px;
}
.fav-img-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }
.fav-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 14px;
  font-weight: 400;
  color: #1a1a1a;
  text-align: center;
}
.fav-shop {
  font-size: 9px;
  letter-spacing: 1.5px;
  color: #c8848a;
  text-transform: uppercase;
  font-weight: 600;
}
.favorites-cta { margin-top: 36px; }
.amazon-btn {
  display: inline-block;
  font-size: 10px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #fff;
  text-decoration: none;
  background: #f2c4c4;
  padding: 14px 36px;
  font-weight: 500;
  transition: background 0.2s;
}
.amazon-btn:hover { background: #d9a0a6; }

/* ── TESTIMONIAL ── */
.testimonial-section {
  background: #fdf5f5;
  padding: 72px 24px;
  text-align: center;
  border-top: 1px solid #f0e0e0;
  border-bottom: 1px solid #f0e0e0;
}
.testimonial-heading {
  font-family: 'Cormorant Garamond', serif;
  font-size: 34px;
  font-weight: 400;
  color: #1a1a1a;
  margin-bottom: 18px;
}
.testimonial-stars {
  font-size: 20px;
  color: #f2c4c4;
  letter-spacing: 4px;
  margin-bottom: 22px;
}
.testimonial-quote {
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px;
  font-style: italic;
  font-weight: 300;
  color: #3a2a2a;
  max-width: 640px;
  margin: 0 auto 24px;
  line-height: 1.6;
}
.testimonial-author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}
.testimonial-avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
}
.testimonial-name { font-size: 12px; letter-spacing: 1.5px; color: #8a6060; font-weight: 500; }

/* ── NEWSLETTER ── */
.newsletter-section {
  background: #f2c4c4;
  padding: 72px 24px;
  text-align: center;
}
.newsletter-eyebrow {
  font-size: 9px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.7);
  font-weight: 600;
  margin-bottom: 12px;
}
.newsletter-heading {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(30px, 4vw, 44px);
  font-weight: 400;
  color: #fff;
  margin-bottom: 10px;
}
.newsletter-sub {
  font-size: 13px;
  color: rgba(255,255,255,0.8);
  font-weight: 300;
  margin-bottom: 32px;
  max-width: 420px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
}
.newsletter-form { max-width: 380px; margin: 0 auto; }
.newsletter-field {
  display: flex;
  align-items: flex-end;
  border-bottom: 1.5px solid rgba(255,255,255,0.7);
  padding-bottom: 8px;
}
.newsletter-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-size: 15px;
  font-family: 'Jost', sans-serif;
  color: #fff;
  font-weight: 300;
}
.newsletter-input::placeholder { color: rgba(255,255,255,0.6); }
.newsletter-arrow {
  background: none;
  border: none;
  font-size: 22px;
  color: #fff;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  transition: transform 0.2s;
}
.newsletter-arrow:hover { transform: translateX(4px); }

/* ── INSTAGRAM ── */
.instagram-section {
  background: #fff;
  padding: 64px 24px 52px;
  text-align: center;
}
.instagram-heading {
  font-family: 'Cormorant Garamond', serif;
  font-size: 34px;
  font-weight: 400;
  color: #1a1a1a;
  margin-bottom: 14px;
}
.instagram-handle-btn {
  display: inline-block;
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #fff;
  text-decoration: none;
  background: #1a1a1a;
  border-radius: 100px;
  padding: 10px 26px;
  font-weight: 500;
  margin-bottom: 32px;
  transition: background 0.2s;
}
.instagram-handle-btn:hover { background: #c8848a; }
.instagram-grid {
  max-width: 960px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}
.insta-img { display: block; aspect-ratio: 1; overflow: hidden; }
.insta-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}
.insta-img:hover img { transform: scale(1.06); }

/* ── FOOTER (compact) ── */
.footer {
  background: #f2c4c4;
  padding: 36px 48px 20px;
}
.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(255,255,255,0.3);
  margin-bottom: 16px;
}
.footer-logo { display: flex; flex-direction: column; gap: 4px; }
.footer-logo a { text-decoration: none; }
.footer-logo-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px;
  font-weight: 400;
  letter-spacing: 2px;
  color: #fff;
}
.footer-logo-sub {
  font-size: 8px;
  letter-spacing: 2.5px;
  color: rgba(255,255,255,0.65);
  text-transform: uppercase;
}
.footer-nav { display: flex; gap: 22px; flex-wrap: wrap; }
.footer-nav a {
  font-size: 10px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.85);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}
.footer-nav a:hover { color: #fff; }
.footer-socials { display: flex; gap: 14px; }
.footer-socials a { color: rgba(255,255,255,0.7); transition: color 0.2s; }
.footer-socials a:hover { color: #fff; }
.footer-copy {
  max-width: 1100px;
  margin: 0 auto;
  font-size: 10px;
  color: rgba(255,255,255,0.5);
  letter-spacing: 0.5px;
  text-align: center;
}
.footer-copy a { color: rgba(255,255,255,0.6); text-decoration: none; }
.footer-copy a:hover { color: #fff; }

/* ── RESPONSIVE ── */
@media (max-width: 1024px) {
  .featured-inner { grid-template-columns: 1fr 1fr; }
  .featured-arch { display: none; }
}
@media (max-width: 768px) {
  .nav { padding: 0 20px; }
  .nav-links { display: none; }
  .nav-collab { display: none; }
  .post-grid { grid-template-columns: repeat(2, 1fr); }
  .featured-inner { grid-template-columns: 1fr; }
  .instagram-grid { grid-template-columns: repeat(2, 1fr); }
  .tabs-row { flex-wrap: wrap; }
  .tab-btn { flex: none; width: 50%; border-bottom: 1px solid #f0e0e0; }
  .footer { padding: 28px 24px 16px; }
  .footer-inner { flex-direction: column; align-items: center; text-align: center; }
  .footer-nav { justify-content: center; }
}
@media (max-width: 480px) {
  .post-grid { grid-template-columns: 1fr; }
  .hero { height: 380px; }
}
</style>
