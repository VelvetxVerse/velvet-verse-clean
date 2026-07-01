<template>
  <div class="all-posts-page">

    <!-- ── MARQUEE BAR ── -->
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

      <!-- ── PAGE HEADER ── -->
      <section class="page-header">
        <p class="page-eyebrow">The Journal</p>
        <h1 class="page-title">All Articles</h1>
        <p class="page-sub">{{ filteredPosts.length }} articles · Beauty, Makeup, Skincare &amp; Lifestyle</p>
      </section>

      <!-- ── CATEGORY TABS ── -->
      <section class="tabs-section">
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

      <!-- ── POSTS GRID ── -->
      <section class="post-grid-section">
        <div class="post-grid">
          <article v-for="post in filteredPosts" :key="post.slug" class="post-card">
            <a :href="`/blog/${post.slug}`" class="post-card-img-wrap">
              <img :src="post.img" :alt="post.title" />
              <div class="post-card-overlay">
                <span class="read-label">Read Article →</span>
              </div>
            </a>
            <div class="post-card-body">
              <p class="post-card-cat" @click="activeTab = post.cat" style="cursor:pointer">{{ post.cat }}</p>
              <h3 class="post-card-title">
                <a :href="`/blog/${post.slug}`">{{ post.title }}</a>
              </h3>
              <p class="post-card-excerpt">{{ post.excerpt }}</p>
              <p class="post-card-meta">{{ post.date }} · {{ post.read }}</p>
            </div>
          </article>
        </div>

        <div class="no-posts" v-if="filteredPosts.length === 0">
          <p>No posts in this category yet. Check back soon!</p>
          <button @click="activeTab = 'ALL'" class="reset-btn">View All Posts</button>
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

const activeTab = ref('ALL')
const tabs = ['ALL', 'MAKEUP', 'SKINCARE', 'TUTORIALS', 'REVIEWS', 'LIFESTYLE']

const allPosts = [
  { cat: 'TUTORIALS', title: 'Step-by-Step: Bronzed Soft Glam',              date: 'June 28, 2025',  read: '5 MIN READ', img: '/mk5.png',  tags: ['TUTORIALS'], slug: 'bronzed-soft-glam',    excerpt: 'Follow along as I break down this easy soft glam look using my go-to products for a bronzed, radiant finish.' },
  { cat: 'MAKEUP',    title: '10 Must-Have Products for Your Makeup Bag',     date: 'June 20, 2025',  read: '4 MIN READ', img: '/mk9.png',  tags: ['MAKEUP'],    slug: 'must-have-products',   excerpt: 'These are the 10 products I always have in my kit — from a flawless base to the perfect finishing touch.' },
  { cat: 'REVIEWS',   title: 'Foundation Showdown: Dewy vs. Matte',           date: 'June 14, 2025',  read: '5 MIN READ', img: '/mk10.png', tags: ['REVIEWS'],   slug: 'foundation-showdown',  excerpt: 'Which finish is right for you? I tested both formulas side by side to help you find your perfect match.' },
  { cat: 'TUTORIALS', title: 'How to Make Your Makeup Last All Day',           date: 'June 8, 2025',   read: '3 MIN READ', img: '/mk11.png', tags: ['TUTORIALS'], slug: 'makeup-last-all-day',   excerpt: 'My professional tips for makeup that stays put from morning to midnight — no touch-ups needed.' },
  { cat: 'TUTORIALS', title: 'The Perfect Smoky Eye in 10 Minutes',            date: 'May 30, 2025',   read: '4 MIN READ', img: '/mk12.png', tags: ['TUTORIALS'], slug: 'smoky-eye',             excerpt: 'Think a smoky eye takes forever? Think again. Here\'s my quick and easy method for a stunning smoky look.' },
  { cat: 'LIFESTYLE', title: 'My Morning Beauty Ritual for Glowing Skin',      date: 'May 22, 2025',   read: '3 MIN READ', img: '/mk13.png', tags: ['LIFESTYLE'], slug: 'morning-ritual',        excerpt: 'The simple morning routine I follow every day for healthy, glowing skin — no matter where in the world I am.' },
  { cat: 'REVIEWS',   title: 'Dior Addict Lip Maximizer: Worth the Hype?',     date: 'May 15, 2025',   read: '5 MIN READ', img: '/mk2.png',  tags: ['REVIEWS'],   slug: 'dior-lip-maximizer',   excerpt: 'I\'ve been using the Dior Lip Maximizer for 6 months. Here\'s my honest, unsponsored review.' },
  { cat: 'SKINCARE',  title: 'Skin Prep: My Glowing Base Routine',             date: 'May 8, 2025',    read: '4 MIN READ', img: '/mk4.png',  tags: ['SKINCARE'],  slug: 'skin-prep',            excerpt: 'The secret to flawless makeup? It starts with your skin. Here\'s the prep routine I use before every application.' },
  { cat: 'MAKEUP',    title: 'My Go-To Everyday Makeup Routine',               date: 'April 28, 2025', read: '3 MIN READ', img: '/mk6.png',  tags: ['MAKEUP'],    slug: 'everyday-makeup',      excerpt: 'Quick, easy, and always polished — this is the 10-minute routine I do every single day.' },
  { cat: 'SKINCARE',  title: 'The Sunscreen Edit: My Top 5 Picks',             date: 'April 10, 2025', read: '4 MIN READ', img: '/mk7.png',  tags: ['SKINCARE'],  slug: 'sunscreen-edit',       excerpt: 'SPF is the most important skincare step — and these 5 sunscreens are the best I\'ve ever tried.' },
  { cat: 'LIFESTYLE', title: 'Paris Beauty Finds: What I Bought & Loved',      date: 'April 20, 2025', read: '6 MIN READ', img: '/mk8.png',  tags: ['LIFESTYLE'], slug: 'paris-beauty',         excerpt: 'From Marais pharmacies to Sephora on the Champs-Élysées — everything I bought on my last Paris trip.' },
  { cat: 'TUTORIALS', title: 'No-Makeup Makeup: A Step-by-Step Guide',         date: 'March 28, 2025', read: '5 MIN READ', img: '/mk3.png',  tags: ['TUTORIALS'], slug: 'no-makeup-look',       excerpt: 'The art of looking like you\'re wearing nothing while actually wearing everything. Here\'s how I do it.' },
  { cat: 'REVIEWS',   title: 'Charlotte Tilbury Pillow Talk: Full Review',     date: 'March 15, 2025', read: '4 MIN READ', img: '/mk5.png',  tags: ['REVIEWS'],   slug: 'charlotte-tilbury',    excerpt: 'The iconic Pillow Talk collection — is it really worth the hype? After 3 months, here\'s my verdict.' },
]

const filteredPosts = computed(() => {
  if (activeTab.value === 'ALL') return allPosts
  return allPosts.filter(p => p.tags.includes(activeTab.value))
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

.all-posts-page { min-height: 100vh; background: #fff; color: #1a1a1a; font-family: 'Jost', sans-serif; }

/* ── MARQUEE ── */
.marquee-bar { background: #f2c4c4; overflow: hidden; padding: 10px 0; white-space: nowrap; }
.marquee-track { display: inline-block; animation: marquee 28s linear infinite; }
.marquee-track span { font-size: 11px; letter-spacing: 2.5px; text-transform: uppercase; color: #fff; font-weight: 500; padding-right: 60px; }
@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

/* ── NAV ── */
.nav { background: #fff; border-bottom: 1px solid #f0e4e4; display: flex; align-items: center; justify-content: space-between; padding: 0 48px; height: 68px; position: sticky; top: 0; z-index: 30; }
.nav-logo a { text-decoration: none; display: flex; flex-direction: column; gap: 2px; }
.logo-name { font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 400; letter-spacing: 2px; color: #1a1a1a; }
.logo-sub { font-size: 8px; letter-spacing: 2.5px; color: #c8848a; text-transform: uppercase; }
.nav-links { display: flex; gap: 28px; }
.nav-links a { font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #5a3a3a; text-decoration: none; font-weight: 500; transition: color 0.2s; }
.nav-links a:hover, .nav-links a.active { color: #c8848a; }
.collab-btn { font-size: 9px; letter-spacing: 2px; text-transform: uppercase; color: #c8848a; text-decoration: none; border: 1px solid #c8848a; padding: 7px 18px; font-weight: 500; transition: all 0.2s; }
.collab-btn:hover { background: #c8848a; color: #fff; }

/* ── PAGE HEADER ── */
.page-header { background: #fdf5f5; text-align: center; padding: 64px 24px 48px; border-bottom: 1px solid #f0e0e0; }
.page-eyebrow { font-size: 10px; letter-spacing: 3px; text-transform: uppercase; color: #c8848a; font-weight: 600; margin-bottom: 14px; }
.page-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(36px, 5vw, 60px); font-weight: 300; color: #1a1a1a; margin-bottom: 12px; }
.page-sub { font-size: 13px; color: #8a6060; font-weight: 300; }

/* ── TABS ── */
.tabs-section { background: #fdf5f5; border-bottom: 1px solid #f0e0e0; }
.tabs-row { max-width: 1100px; margin: 0 auto; display: flex; align-items: stretch; }
.tab-btn { flex: 1; background: transparent; border: none; border-right: 1px solid #f0e0e0; padding: 18px 10px; font-size: 10px; letter-spacing: 2.5px; text-transform: uppercase; color: #8a6060; cursor: pointer; font-family: 'Jost', sans-serif; font-weight: 500; transition: background 0.2s, color 0.2s; }
.tab-btn:last-child { border-right: none; }
.tab-btn:hover { background: #fce8e8; color: #1a1a1a; }
.tab-btn.active { background: #f2c4c4; color: #fff; }

/* ── POST GRID ── */
.post-grid-section { max-width: 1100px; margin: 0 auto; padding: 56px 24px; }
.post-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 48px 28px; margin-bottom: 48px; }
.post-card { display: flex; flex-direction: column; }
.post-card-img-wrap { display: block; overflow: hidden; aspect-ratio: 4/5; margin-bottom: 18px; background: #fdf0f0; position: relative; }
.post-card-img-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.5s ease; }
.post-card:hover .post-card-img-wrap img { transform: scale(1.04); }
.post-card-overlay { position: absolute; inset: 0; background: rgba(20,8,8,0.35); opacity: 0; transition: opacity 0.3s; display: flex; align-items: center; justify-content: center; }
.post-card:hover .post-card-overlay { opacity: 1; }
.read-label { font-size: 10px; letter-spacing: 2.5px; text-transform: uppercase; color: #fff; font-weight: 600; border: 1px solid rgba(255,255,255,0.7); padding: 10px 22px; }
.post-card-cat { font-size: 9px; letter-spacing: 2.5px; color: #c8848a; text-transform: uppercase; font-weight: 600; margin-bottom: 8px; transition: opacity 0.2s; }
.post-card-cat:hover { opacity: 0.7; }
.post-card-title { font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 400; color: #1a1a1a; line-height: 1.3; margin-bottom: 10px; }
.post-card-title a { text-decoration: none; color: inherit; transition: color 0.2s; }
.post-card-title a:hover { color: #c8848a; }
.post-card-excerpt { font-size: 13px; color: #6a4a4a; line-height: 1.7; font-weight: 300; margin-bottom: 12px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.post-card-meta { font-size: 11px; color: #b09090; }

.no-posts { text-align: center; padding: 60px 0; color: #8a6060; }
.no-posts p { font-size: 16px; margin-bottom: 20px; font-family: 'Cormorant Garamond', serif; }
.reset-btn { font-size: 10px; letter-spacing: 2.5px; text-transform: uppercase; color: #fff; background: #f2c4c4; border: none; padding: 13px 32px; cursor: pointer; font-family: 'Jost', sans-serif; font-weight: 500; transition: background 0.2s; }
.reset-btn:hover { background: #d9a0a6; }

/* ── NEWSLETTER ── */
.newsletter-section { background: #f2c4c4; padding: 72px 24px; text-align: center; }
.newsletter-eyebrow { font-size: 9px; letter-spacing: 3px; text-transform: uppercase; color: rgba(255,255,255,0.7); font-weight: 600; margin-bottom: 12px; }
.newsletter-heading { font-family: 'Cormorant Garamond', serif; font-size: clamp(30px, 4vw, 44px); font-weight: 400; color: #fff; margin-bottom: 10px; }
.newsletter-sub { font-size: 13px; color: rgba(255,255,255,0.8); font-weight: 300; margin-bottom: 32px; max-width: 420px; margin-left: auto; margin-right: auto; line-height: 1.7; }
.newsletter-form { max-width: 380px; margin: 0 auto; }
.newsletter-field { display: flex; align-items: flex-end; border-bottom: 1.5px solid rgba(255,255,255,0.7); padding-bottom: 8px; }
.newsletter-input { flex: 1; background: transparent; border: none; outline: none; font-size: 15px; font-family: 'Jost', sans-serif; color: #fff; font-weight: 300; }
.newsletter-input::placeholder { color: rgba(255,255,255,0.6); }
.newsletter-arrow { background: none; border: none; font-size: 22px; color: #fff; cursor: pointer; padding: 0; line-height: 1; transition: transform 0.2s; }
.newsletter-arrow:hover { transform: translateX(4px); }

/* ── FOOTER ── */
.footer { background: #f2c4c4; padding: 36px 48px 20px; }
.footer-inner { max-width: 1100px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px; padding-bottom: 24px; border-bottom: 1px solid rgba(255,255,255,0.3); margin-bottom: 16px; }
.footer-logo { display: flex; flex-direction: column; gap: 4px; }
.footer-logo a { text-decoration: none; }
.footer-logo-name { font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 400; letter-spacing: 2px; color: #fff; }
.footer-logo-sub { font-size: 8px; letter-spacing: 2.5px; color: rgba(255,255,255,0.65); text-transform: uppercase; }
.footer-nav { display: flex; gap: 22px; flex-wrap: wrap; }
.footer-nav a { font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: rgba(255,255,255,0.85); text-decoration: none; font-weight: 500; transition: color 0.2s; }
.footer-nav a:hover { color: #fff; }
.footer-socials { display: flex; gap: 14px; }
.footer-socials a { color: rgba(255,255,255,0.7); transition: color 0.2s; }
.footer-socials a:hover { color: #fff; }
.footer-copy { max-width: 1100px; margin: 0 auto; font-size: 10px; color: rgba(255,255,255,0.5); letter-spacing: 0.5px; text-align: center; }
.footer-copy a { color: rgba(255,255,255,0.6); text-decoration: none; }
.footer-copy a:hover { color: #fff; }

/* ── RESPONSIVE ── */
@media (max-width: 768px) {
  .nav { padding: 0 20px; }
  .nav-links { display: none; }
  .nav-collab { display: none; }
  .post-grid { grid-template-columns: repeat(2, 1fr); }
  .tabs-row { flex-wrap: wrap; }
  .tab-btn { flex: none; width: 50%; border-bottom: 1px solid #f0e0e0; }
  .footer { padding: 28px 24px 16px; }
  .footer-inner { flex-direction: column; align-items: center; text-align: center; }
  .footer-nav { justify-content: center; }
}
@media (max-width: 480px) {
  .post-grid { grid-template-columns: 1fr; }
}
</style>
