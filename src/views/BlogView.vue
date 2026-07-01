<template>
  <div class="blog-page">

    <!-- ── NAV ── -->
    <nav class="nav">
      <div class="nav-logo">
        <a href="/">
          <span class="logo-name">VELVET VERSE</span>
          <small class="logo-sub">BY RENATA OLIVEIRA</small>
        </a>
      </div>
      <div class="nav-links">
        <a href="/">HOME</a>
        <a href="/makeup#about">ABOUT</a>
        <a href="/makeup#services">SERVICES</a>
        <a href="/collections">COLLECTIONS</a>
        <a href="/blog" class="active">BLOG</a>
        <a href="/shop">SHOP</a>
        <a href="/makeup#contact">CONTACT</a>
      </div>
      <div class="nav-icons">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      </div>
    </nav>

    <main>

      <!-- ── HERO ── -->
      <section class="hero">
        <div class="hero-left">
          <p class="hero-script">The</p>
          <h1 class="hero-title">Beauty Journal</h1>
          <div class="hero-divider">
            <span class="hero-diamond">◆</span>
          </div>
          <p class="hero-desc">Honest reviews, timeless beauty rituals, luxury skincare, and makeup discoveries from around the world.</p>
          <a href="#latest" class="hero-btn">EXPLORE ARTICLES</a>
        </div>
        <div class="hero-right">
          <img src="/mk1.png" alt="Beauty Journal hero" class="hero-img" />
        </div>
      </section>

      <!-- ── CATEGORY ICONS ── -->
      <section class="cats-section">
        <div class="cats-row">
          <a href="#" class="cat-item" v-for="cat in categories" :key="cat.label">
            <div class="cat-icon" v-html="cat.icon"></div>
            <p class="cat-label">{{ cat.label }}</p>
          </a>
        </div>
      </section>

      <!-- ── FEATURED + LATEST POSTS ── -->
      <section id="latest" class="posts-section">
        <div class="featured-card">
          <div class="featured-img">
            <img src="/mk5.png" alt="Featured article" />
          </div>
          <div class="featured-body">
            <p class="featured-eyebrow">FEATURED ARTICLE</p>
            <h2 class="featured-title">The Korean Skincare Products Worth Buying in 2026</h2>
            <p class="featured-excerpt">Glass skin isn't about using 15 products. It's about using the right ones...</p>
            <a href="#" class="featured-read">READ ARTICLE →</a>
          </div>
        </div>
        <div class="latest-posts">
          <div class="latest-header">
            <h3 class="latest-heading">Latest Posts</h3>
            <a href="#" class="view-all">VIEW ALL →</a>
          </div>
          <div class="latest-grid">
            <article v-for="post in latestPosts" :key="post.title" class="latest-card">
              <a href="#" class="latest-img-wrap">
                <img :src="post.img" :alt="post.title" />
              </a>
              <div class="latest-body">
                <h4 class="latest-title">{{ post.title }}</h4>
                <p class="latest-meta">{{ post.read }} · {{ post.cat }}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- ── MY CURRENT FAVORITES ── -->
      <section class="favorites-section">
        <h2 class="favorites-heading">My Current Favorites</h2>
        <div class="favorites-track-wrap">
          <button class="fav-arrow fav-prev" @click="scrollFavs(-1)">&#8592;</button>
          <div class="favorites-track" ref="favsTrack">
            <a v-for="brand in favBrands" :key="brand.name" :href="brand.link" target="_blank" class="fav-item">
              <div class="fav-img-wrap">
                <img :src="brand.img" :alt="brand.name" />
              </div>
              <p class="fav-name">{{ brand.name }}</p>
            </a>
          </div>
          <button class="fav-arrow fav-next" @click="scrollFavs(1)">&#8594;</button>
        </div>
      </section>

      <!-- ── NEWSLETTER ── -->
      <section class="newsletter-section">
        <div class="newsletter-flowers newsletter-flowers-left">
          <img src="/mk3.png" alt="" />
        </div>
        <div class="newsletter-content">
          <p class="newsletter-diamond">◆</p>
          <h2 class="newsletter-title">Join The Velvet Beauty Letter</h2>
          <p class="newsletter-sub">Luxury beauty inspiration delivered weekly.</p>
          <form class="newsletter-form" @submit.prevent>
            <input type="email" placeholder="Your email address" class="newsletter-input" />
            <button type="submit" class="newsletter-btn">SUBSCRIBE</button>
          </form>
        </div>
        <div class="newsletter-flowers newsletter-flowers-right">
          <img src="/mk4.png" alt="" />
        </div>
      </section>

      <div class="tagline-bar">
        <p class="tagline-text">Beauty is an experience, not a trend.</p>
        <span class="tagline-diamond">◆</span>
      </div>

    </main>

    <!-- ── FOOTER ── -->
    <footer class="footer">
      <div class="footer-left">
        <a href="/privacy" class="footer-link">PRIVACY POLICY</a>
        <span class="footer-dot">·</span>
        <a href="/terms" class="footer-link">TERMS &amp; CONDITIONS</a>
      </div>
      <div class="footer-center">
        <span class="footer-brand">VELVET VERSE BY RENATA OLIVEIRA</span>
      </div>
      <div class="footer-socials">
        <a href="https://instagram.com/renataoliveiraofficial" target="_blank">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
        </a>
        <a href="https://pinterest.com" target="_blank">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.03-2.83.19-.77 1.27-5.37 1.27-5.37s-.32-.65-.32-1.61c0-1.51.88-2.64 1.97-2.64.93 0 1.38.7 1.38 1.54 0 .94-.6 2.34-.91 3.64-.26 1.09.54 1.97 1.6 1.97 1.92 0 3.21-2.46 3.21-5.37 0-2.22-1.5-3.88-4.22-3.88-3.08 0-5 2.3-5 4.87 0 .88.26 1.5.67 1.98.19.22.21.31.14.57-.05.18-.16.63-.2.8-.07.27-.28.37-.51.27-1.44-.6-2.11-2.21-2.11-4.02 0-2.98 2.52-6.56 7.54-6.56 4.03 0 6.68 2.93 6.68 6.07 0 4.16-2.3 7.27-5.68 7.27-1.14 0-2.21-.61-2.57-1.3l-.7 2.69c-.25.97-.93 2.18-1.39 2.92.99.3 2.03.47 3.12.47 5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>
        </a>
        <a href="https://tiktok.com/@renataoliveiraofficial" target="_blank">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/></svg>
        </a>
        <a href="https://youtube.com" target="_blank">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6a3 3 0 00-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg>
        </a>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const favsTrack = ref(null )

function scrollFavs(dir) {
  if (favsTrack.value) {
    favsTrack.value.scrollBy({ left: dir * 200, behavior: 'smooth' })
  }
}

const categories = [
  { label: 'SKINCARE', icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c8a0a0" stroke-width="1.2"><rect x="4" y="2" width="16" height="20" rx="3"/><path d="M8 7h8M8 11h8M8 15h5"/></svg>` },
  { label: 'MAKEUP', icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c8a0a0" stroke-width="1.2"><path d="M12 2c0 0-4 4-4 9a4 4 0 008 0c0-5-4-9-4-9z"/><line x1="12" y1="15" x2="12" y2="22"/></svg>` },
  { label: 'KOREAN BEAUTY', icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c8a0a0" stroke-width="1.2"><circle cx="12" cy="12" r="9"/><path d="M9 9c0 0 1 3 3 3s3-3 3-3"/><path d="M9 15h6"/></svg>` },
  { label: 'BEAUTY AROUND THE WORLD', icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c8a0a0" stroke-width="1.2"><circle cx="12" cy="12" r="9"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></svg>` },
  { label: 'SELF CARE', icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c8a0a0" stroke-width="1.2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>` },
  { label: 'LUXURY FAVORITES', icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c8a0a0" stroke-width="1.2"><path d="M6 2 3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>` },
]

const latestPosts = [
  { title: 'Summer Glass Skin Routine for a Dewy Glow', read: '3 MIN READ', cat: 'SKINCARE', img: '/mk9.png' },
  { title: 'Medicube Review After 30 Days', read: '5 MIN READ', cat: 'REVIEW', img: '/mk10.png' },
  { title: 'The Best Cushion Foundations for Every Skin Type', read: '4 MIN READ', cat: 'MAKEUP', img: '/mk11.png' },
  { title: 'Luxury Makeup Worth the Price', read: '6 MIN READ', cat: 'LUXURY', img: '/mk12.png' },
]

const favBrands = [
  { name: 'DIOR', img: '/mk2.png', link: 'https://www.amazon.com/shop/welovejetlag' },
  { name: 'CHANEL', img: '/mk3.png', link: 'https://www.amazon.com/shop/welovejetlag' },
  { name: 'MEDICUBE', img: '/mk4.png', link: 'https://www.amazon.com/shop/welovejetlag' },
  { name: 'BEAUTY OF JOSEON', img: '/mk6.png', link: 'https://www.amazon.com/shop/welovejetlag' },
  { name: 'TIRTIR', img: '/mk7.png', link: 'https://www.amazon.com/shop/welovejetlag' },
  { name: 'YSL BEAUTY', img: '/mk8.png', link: 'https://www.amazon.com/shop/welovejetlag' },
  { name: 'HOURGLASS', img: '/mk13.png', link: 'https://www.amazon.com/shop/welovejetlag' },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Jost:wght@300;400;500;600&family=Dancing+Script:wght@500;600&display=swap' );

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

.blog-page { min-height: 100vh; background: #fdf5f0; color: #2a1a14; font-family: 'Jost', sans-serif; }

.nav { background: #fff; border-bottom: 1px solid #f0e4dc; display: flex; align-items: center; justify-content: space-between; padding: 0 40px; height: 64px; position: sticky; top: 0; z-index: 30; }
.nav-logo a { text-decoration: none; display: flex; flex-direction: column; line-height: 1; }
.logo-name { font-family: 'Cormorant Garamond', serif; font-size: 18px; font-weight: 400; letter-spacing: 3px; color: #2a1a14; }
.logo-sub { font-size: 7px; letter-spacing: 2.5px; color: #c8a0a0; text-transform: uppercase; margin-top: 3px; }
.nav-links { display: flex; gap: 28px; }
.nav-links a { font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #6c5050; text-decoration: none; transition: color 0.2s; font-weight: 500; }
.nav-links a:hover, .nav-links a.active { color: #c8a0a0; }
.nav-icons { display: flex; gap: 16px; color: #6c5050; cursor: pointer; }

.hero { display: grid; grid-template-columns: 1fr 1fr; min-height: 420px; background: #fff8f5; }
.hero-left { padding: 60px 56px; display: flex; flex-direction: column; justify-content: center; }
.hero-script { font-family: 'Dancing Script', cursive; font-size: 42px; color: #c8a0a0; line-height: 1; margin-bottom: -6px; }
.hero-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(36px, 4.5vw, 58px); font-weight: 400; color: #2a1a14; line-height: 1.05; margin-bottom: 16px; }
.hero-divider { display: flex; align-items: center; gap: 10px; margin-bottom: 20px; }
.hero-diamond { font-size: 10px; color: #c8a0a0; }
.hero-desc { font-size: 14px; color: #7a5a54; line-height: 1.8; font-weight: 300; max-width: 380px; margin-bottom: 32px; }
.hero-btn { display: inline-block; background: #e8b4b0; color: #fff; font-size: 10px; letter-spacing: 2.5px; text-transform: uppercase; text-decoration: none; padding: 14px 28px; font-weight: 500; transition: background 0.2s; align-self: flex-start; }
.hero-btn:hover { background: #d49a96; }
.hero-right { overflow: hidden; }
.hero-img { width: 100%; height: 100%; object-fit: cover; object-position: center 20%; display: block; }

.cats-section { background: #fff; border-top: 1px solid #f0e4dc; border-bottom: 1px solid #f0e4dc; padding: 28px 40px; }
.cats-row { max-width: 1100px; margin: 0 auto; display: flex; justify-content: space-between; gap: 12px; }
.cat-item { display: flex; flex-direction: column; align-items: center; gap: 10px; text-decoration: none; flex: 1; padding: 10px 8px; transition: opacity 0.2s; }
.cat-item:hover { opacity: 0.7; }
.cat-icon { width: 52px; height: 52px; border: 1px solid #f0d8d0; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: #fff8f5; }
.cat-label { font-size: 8px; letter-spacing: 1.5px; text-transform: uppercase; color: #6c5050; text-align: center; font-weight: 600; line-height: 1.4; }

.posts-section { max-width: 1100px; margin: 0 auto; padding: 50px 24px; display: grid; grid-template-columns: 2fr 3fr; gap: 32px; }
.featured-card { background: #fff; border: 1px solid #f0e4dc; overflow: hidden; display: flex; flex-direction: column; }
.featured-img { height: 260px; overflow: hidden; }
.featured-img img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.5s ease; }
.featured-card:hover .featured-img img { transform: scale(1.04); }
.featured-body { padding: 28px 24px 32px; display: flex; flex-direction: column; flex: 1; }
.featured-eyebrow { font-size: 8px; letter-spacing: 3px; color: #c8a0a0; text-transform: uppercase; font-weight: 600; margin-bottom: 14px; }
.featured-title { font-family: 'Cormorant Garamond', serif; font-size: 26px; font-weight: 400; color: #2a1a14; line-height: 1.25; margin-bottom: 14px; }
.featured-excerpt { font-size: 13px; color: #7a5a54; line-height: 1.75; font-weight: 300; margin-bottom: 24px; flex: 1; }
.featured-read { font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #c8a0a0; text-decoration: none; font-weight: 600; transition: color 0.2s; }
.featured-read:hover { color: #a07878; }

.latest-posts { display: flex; flex-direction: column; }
.latest-header { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 20px; }
.latest-heading { font-family: 'Cormorant Garamond', serif; font-size: 28px; font-weight: 400; color: #2a1a14; }
.view-all { font-size: 10px; letter-spacing: 2px; color: #c8a0a0; text-decoration: none; font-weight: 600; transition: color 0.2s; }
.view-all:hover { color: #a07878; }
.latest-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.latest-card { background: #fff; border: 1px solid #f0e4dc; overflow: hidden; }
.latest-img-wrap { display: block; height: 160px; overflow: hidden; }
.latest-img-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.4s ease; }
.latest-card:hover .latest-img-wrap img { transform: scale(1.05); }
.latest-body { padding: 14px 16px 16px; }
.latest-title { font-family: 'Cormorant Garamond', serif; font-size: 17px; font-weight: 400; color: #2a1a14; line-height: 1.3; margin-bottom: 8px; }
.latest-meta { font-size: 9px; letter-spacing: 1.5px; color: #c8a0a0; text-transform: uppercase; font-weight: 600; }

.favorites-section { background: #fff8f5; border-top: 1px solid #f0e4dc; border-bottom: 1px solid #f0e4dc; padding: 44px 0; }
.favorites-heading { font-family: 'Cormorant Garamond', serif; font-size: 28px; font-weight: 400; color: #2a1a14; text-align: center; margin-bottom: 28px; }
.favorites-track-wrap { display: flex; align-items: center; max-width: 1100px; margin: 0 auto; padding: 0 24px; }
.fav-arrow { background: none; border: 1px solid #e8d0cc; width: 36px; height: 36px; border-radius: 50%; font-size: 16px; color: #a07878; cursor: pointer; flex-shrink: 0; transition: all 0.2s; display: flex; align-items: center; justify-content: center; }
.fav-arrow:hover { background: #e8b4b0; color: #fff; border-color: #e8b4b0; }
.favorites-track { display: flex; gap: 16px; overflow-x: auto; scroll-behavior: smooth; scrollbar-width: none; padding: 8px 16px; flex: 1; }
.favorites-track::-webkit-scrollbar { display: none; }
.fav-item { display: flex; flex-direction: column; align-items: center; gap: 10px; text-decoration: none; flex-shrink: 0; width: 110px; transition: opacity 0.2s; }
.fav-item:hover { opacity: 0.75; }
.fav-img-wrap { width: 90px; height: 90px; border: 1px solid #f0e4dc; border-radius: 4px; overflow: hidden; background: #fff; }
.fav-img-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }
.fav-name { font-size: 8px; letter-spacing: 2px; color: #6c5050; text-transform: uppercase; font-weight: 600; text-align: center; }

.newsletter-section { background: #fff; padding: 60px 40px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
.newsletter-flowers { width: 220px; flex-shrink: 0; height: 200px; overflow: hidden; opacity: 0.5; }
.newsletter-flowers img { width: 100%; height: 100%; object-fit: cover; }
.newsletter-flowers-left { border-radius: 0 50% 50% 0; }
.newsletter-flowers-right { border-radius: 50% 0 0 50%; }
.newsletter-content { flex: 1; max-width: 480px; text-align: center; padding: 0 40px; }
.newsletter-diamond { font-size: 10px; color: #e8b4b0; margin-bottom: 16px; }
.newsletter-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(24px, 3vw, 36px); font-weight: 400; color: #2a1a14; margin-bottom: 10px; }
.newsletter-sub { font-size: 13px; color: #7a5a54; font-weight: 300; margin-bottom: 28px; }
.newsletter-form { display: flex; max-width: 400px; margin: 0 auto; }
.newsletter-input { flex: 1; padding: 13px 18px; font-size: 13px; font-family: 'Jost', sans-serif; border: 1px solid #e8d0cc; background: #fff8f5; color: #2a1a14; outline: none; transition: border-color 0.2s; }
.newsletter-input::placeholder { color: #c0a0a0; }
.newsletter-input:focus { border-color: #e8b4b0; }
.newsletter-btn { padding: 13px 24px; background: #e8b4b0; color: #fff; font-size: 10px; letter-spacing: 2px; font-family: 'Jost', sans-serif; font-weight: 600; border: none; cursor: pointer; transition: background 0.2s; white-space: nowrap; }
.newsletter-btn:hover { background: #d49a96; }

.tagline-bar { background: #fff8f5; padding: 28px 24px; text-align: center; border-top: 1px solid #f0e4dc; }
.tagline-text { font-family: 'Cormorant Garamond', serif; font-size: 20px; font-style: italic; font-weight: 300; color: #7a5a54; letter-spacing: 1px; }
.tagline-diamond { display: block; font-size: 10px; color: #e8b4b0; margin-top: 10px; }

.footer { background: #fff; border-top: 1px solid #f0e4dc; padding: 20px 40px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; }
.footer-left { display: flex; align-items: center; gap: 10px; }
.footer-link { font-size: 9px; letter-spacing: 2px; text-transform: uppercase; color: #a08080; text-decoration: none; transition: color 0.2s; }
.footer-link:hover { color: #c8a0a0; }
.footer-dot { color: #d0b0b0; font-size: 14px; }
.footer-brand { font-size: 9px; letter-spacing: 2px; text-transform: uppercase; color: #a08080; }
.footer-socials { display: flex; gap: 14px; }
.footer-socials a { color: #a08080; transition: color 0.2s; }
.footer-socials a:hover { color: #c8a0a0; }

@media (max-width: 960px) {
  .hero { grid-template-columns: 1fr; }
  .hero-right { height: 300px; }
  .posts-section { grid-template-columns: 1fr; }
  .cats-row { flex-wrap: wrap; justify-content: center; }
  .cat-item { width: calc(33% - 12px); flex: none; }
  .nav-links { gap: 16px; }
}
@media (max-width: 640px) {
  .nav { padding: 0 20px; }
  .nav-links { display: none; }
  .hero-left { padding: 40px 24px; }
  .latest-grid { grid-template-columns: 1fr; }
  .newsletter-section { flex-direction: column; padding: 40px 24px; }
  .newsletter-flowers { display: none; }
  .footer { flex-direction: column; align-items: center; text-align: center; padding: 20px; }
  .cat-item { width: calc(50% - 12px); }
}
</style>
