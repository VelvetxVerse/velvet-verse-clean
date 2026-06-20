<template>
  <div class="blog-page">

    <!-- ── NAV ── -->
    <nav class="nav">
      <div class="logo">
        <span>RENATA</span>
        <small>MAKEUP & BEAUTY</small>
      </div>
      <div class="nav-links">
        <a href="/makeup#hero">Home</a>
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
          <p class="eyebrow">NEW ON THE BLOG</p>
          <h1>EFFORTLESS<br>EVERYDAY GLAM</h1>
          <p>A soft, radiant makeup look that enhances your natural beauty and boosts your confidence.</p>
          <a href="#featured" class="hero-btn">Read the Post</a>
        </div>
      </section>

      <!-- ── CATEGORIES ── -->
      <section class="box cats-box">
        <div class="cats">
          <div v-for="(cat, i) in categories" :key="i" class="cat-item" :class="{ last: i === categories.length - 1 }">
            <span class="cat-icon">{{ cat.icon }}</span>
            <span class="cat-label">{{ cat.label }}</span>
          </div>
        </div>
      </section>

      <!-- ── FEATURED + SIDEBAR ── -->
      <section id="featured" class="featured-layout">

        <!-- Featured post -->
        <div class="box featured-box">
          <p class="eyebrow">FEATURED POST</p>
          <div class="featured-inner">
            <div class="featured-img-wrap">
              <img src="/mk5.png" alt="Featured post" />
            </div>
            <div class="featured-text">
              <p class="category">MAKEUP TUTORIAL</p>
              <h2>STEP-BY-STEP:<br><em>Bronzed Soft Glam</em></h2>
              <p>Follow along as I break down this easy soft glam look using my go-to products for a bronzed, radiant finish.</p>
              <a href="#" class="read-btn">Read More</a>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="sidebar">
          <!-- Welcome -->
          <div class="box sidebar-welcome">
            <p class="eyebrow center">WELCOME</p>
            <div class="welcome-photo">
              <img src="/mk3.png" alt="Renata Oliveira" />
            </div>
            <p>Hi, I'm obsessed with all things beauty! I love sharing makeup tips, product reviews, and tutorials to help you feel your most beautiful.</p>
            <p class="signature">xo, Renata</p>
          </div>

          <!-- Popular posts -->
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

      <!-- ── RECENT POSTS ── -->
      <section id="recent" class="box posts-box">
        <p class="eyebrow">RECENT POSTS</p>
        <div class="blog-grid">
          <article v-for="post in recentPosts" :key="post.title" class="post-card">
            <img :src="post.img" :alt="post.title" />
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
            <img :src="post.img" :alt="post.title" />
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
  </div>
</template>

<script setup>
const categories = [
  { icon: '💄', label: 'Makeup Tutorials' },
  { icon: '✨', label: 'Product Reviews' },
  { icon: '🖌️', label: 'Beauty Tips' },
  { icon: '🧴', label: 'Skincare Routine' },
  { icon: '🤍', label: 'Favorites' },
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
  height: 460px;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(15,10,8,0.72) 44%, rgba(0,0,0,0.05) 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 56px;
  max-width: 520px;
}

.hero-overlay p {
  color: rgba(255,255,255,0.85);
  margin-bottom: 12px;
}

.hero-overlay h1 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(34px, 4.5vw, 54px);
  font-weight: 400;
  color: #fff;
  line-height: 1.05;
  margin-bottom: 14px;
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
  margin-top: 8px;
  width: fit-content;
  transition: background 0.2s;
}

.hero-btn:hover {
  background: #b5905a;
}

/* CATEGORIES */
.cats-box {
  padding: 0;
}

.cats {
  display: flex;
}

.cat-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 22px 16px;
  cursor: pointer;
  border-right: 1px solid #e8ddd0;
  transition: background 0.2s;
}

.cat-item.last {
  border-right: none;
}

.cat-item:hover {
  background: #fffaf5;
}

.cat-icon {
  font-size: 22px;
}

.cat-label {
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #888;
  text-align: center;
  font-weight: 600;
}

/* FEATURED + SIDEBAR */
.featured-layout {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 26px;
  margin-bottom: 26px;
}

.featured-box {
  padding: 36px;
}

.featured-inner {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 28px;
  margin-top: 20px;
  align-items: start;
}

.featured-img-wrap {
  overflow: hidden;
  border-radius: 14px;
}

.featured-img-wrap img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  object-position: center top;
  display: block;
  transition: transform 0.4s;
}

.featured-img-wrap:hover img {
  transform: scale(1.04);
}

.featured-text h2 {
  font-size: 28px;
  line-height: 1.2;
  margin-bottom: 12px;
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
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: 22px;
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
  width: 54px;
  height: 54px;
  object-fit: cover;
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

/* POSTS */
.posts-box {
  padding: 36px;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
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

.post-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center top;
  display: block;
  transition: transform 0.4s;
}

.post-card:hover img {
  transform: scale(1.03);
}

.post-body {
  padding: 20px;
}

.post-body h3 {
  font-size: 17px;
  margin-bottom: 8px;
  line-height: 1.35;
}

.post-body a {
  color: #c8a16b;
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
}

/* CATEGORY */
.category {
  color: #c8a16b;
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 6px;
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

/* SHARED */
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
  margin: 0 0 10px;
}

.center {
  text-align: center;
}

@media (max-width: 900px) {
  .nav-links { display: none; }
  .featured-layout { grid-template-columns: 1fr; }
  .featured-inner, .blog-grid { grid-template-columns: 1fr; }
  .cats { flex-wrap: wrap; }
  .hero-overlay { padding: 0 28px; }
}
</style>
