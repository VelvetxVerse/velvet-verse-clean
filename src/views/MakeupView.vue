<template>
  <!-- ============================================================
    MakeupView.vue — Renata Oliveira Makeup & Beauty Portal
    Style: Black & white editorial luxury (Alessia Rose reference)
    Colors: #faf9f7 (ivory bg), #111111 (near-black), #ffffff (white), #c8a97e (gold accent)
    Fonts: Cormorant Garamond (headings), Parisienne (script), Jost (body)
    Images: /mascara.png, /valentino.png, /thinking.png (public folder)
  ============================================================ -->
  <div class="mv-root">

    <!-- ── STICKY NAV ── -->
    <nav class="mv-nav">
      <a href="/" class="mv-nav-back">← Velvet Verse</a>
      <div class="mv-nav-brand">
        <span class="mv-nav-name">RENATA OLIVEIRA</span>
        <span class="mv-nav-sub">Makeup Artist</span>
      </div>
      <ul class="mv-nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>

    <!-- ── HERO ── -->
    <section id="home" class="mv-hero">
      <!-- Left text column -->
      <div class="mv-hero-text">
        <p class="mv-hero-eyebrow">Makeup Artist &amp; Beauty Influencer</p>
        <h1 class="mv-hero-title">
          Elevate Your<br>
          <em>Natural Beauty</em>
        </h1>
        <p class="mv-hero-desc">
          Luxury beauty, honest reviews, and effortless elegance —
          explore the world of premium makeup and artistry with me.
        </p>
        <a href="#about" class="mv-btn-primary">Explore Now</a>
      </div>

      <!-- Right 3-column photo grid -->
      <div class="mv-hero-grid">
        <div class="mv-hero-col mv-hero-col--tall">
          <img src="/mascara.png" alt="Renata applying mascara" loading="eager" />
        </div>
        <div class="mv-hero-col mv-hero-col--mid">
          <img src="/valentino.png" alt="Renata with Valentino lipstick" loading="eager" />
        </div>
        <div class="mv-hero-col mv-hero-col--short">
          <img src="/thinking.png" alt="Renata beauty portrait" loading="eager" />
        </div>
      </div>
    </section>

    <!-- ── FEATURED WITH ── -->
    <section class="mv-brands">
      <p class="mv-brands-label">FEATURED &amp; COLLABORATED WITH</p>
      <div class="mv-brands-row">
        <span class="mv-brand-logo mv-brand-serif">DIOR</span>
        <span class="mv-brand-logo mv-brand-serif">CHANEL</span>
        <span class="mv-brand-logo mv-brand-serif">YSL</span>
        <span class="mv-brand-logo mv-brand-serif">LA MER</span>
        <span class="mv-brand-logo mv-brand-serif">VALENTINO</span>
        <span class="mv-brand-logo mv-brand-serif">TOM FORD</span>
      </div>
    </section>

    <!-- ── ABOUT ── -->
    <section id="about" class="mv-about">
      <div class="mv-about-inner">
        <div class="mv-about-img-wrap">
          <img src="/thinking.png" alt="Renata Oliveira portrait" />
        </div>
        <div class="mv-about-content">
          <p class="mv-section-eyebrow">About Me</p>
          <h2 class="mv-section-title">The Artist Behind<br><em>The Look</em></h2>
          <p class="mv-about-text">
            I'm Renata Oliveira — a professional makeup artist and luxury beauty influencer
            with over 959K followers on Instagram. My passion is transforming everyday beauty
            into editorial art, blending technique with storytelling.
          </p>
          <p class="mv-about-text">
            From red-carpet glam to effortless everyday looks, I believe makeup is a form of
            self-expression. I collaborate with the world's most prestigious beauty brands to
            bring you honest, elevated content that inspires and empowers.
          </p>
          <div class="mv-about-stats">
            <div class="mv-stat">
              <span class="mv-stat-num">959K</span>
              <span class="mv-stat-label">Instagram</span>
            </div>
            <div class="mv-stat">
              <span class="mv-stat-num">55K</span>
              <span class="mv-stat-label">Facebook</span>
            </div>
            <div class="mv-stat">
              <span class="mv-stat-num">30K</span>
              <span class="mv-stat-label">TikTok</span>
            </div>
            <div class="mv-stat">
              <span class="mv-stat-num">80K</span>
              <span class="mv-stat-label">Pinterest/mo</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── SERVICES ── -->
    <section id="services" class="mv-services">
      <div class="mv-services-inner">
        <p class="mv-section-eyebrow mv-light">What I Offer</p>
        <h2 class="mv-section-title mv-light">Services &amp; <em>Expertise</em></h2>
        <div class="mv-services-grid">
          <div class="mv-service-card">
            <div class="mv-service-icon">✦</div>
            <h3>Brand Collaborations</h3>
            <p>Sponsored content, product launches, and long-term ambassador partnerships with luxury beauty brands.</p>
          </div>
          <div class="mv-service-card">
            <div class="mv-service-icon">✦</div>
            <h3>UGC Content Creation</h3>
            <p>High-quality user-generated content — tutorials, reviews, and reels crafted for maximum engagement.</p>
          </div>
          <div class="mv-service-card">
            <div class="mv-service-icon">✦</div>
            <h3>Makeup Artistry</h3>
            <p>Professional makeup services for editorial shoots, events, weddings, and special occasions.</p>
          </div>
          <div class="mv-service-card">
            <div class="mv-service-icon">✦</div>
            <h3>Beauty Education</h3>
            <p>Masterclasses, tutorials, and 1-on-1 coaching sessions for aspiring makeup artists and beauty enthusiasts.</p>
          </div>
          <div class="mv-service-card">
            <div class="mv-service-icon">✦</div>
            <h3>Social Media Strategy</h3>
            <p>Consulting and content strategy for beauty brands looking to grow their presence on Instagram and TikTok.</p>
          </div>
          <div class="mv-service-card">
            <div class="mv-service-icon">✦</div>
            <h3>Product Reviews</h3>
            <p>Authentic, in-depth product reviews and first impressions for new launches and hero products.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── BLOG ── -->
    <section id="blog" class="mv-blog">
      <div class="mv-blog-inner">
        <p class="mv-section-eyebrow">Beauty Journal</p>
        <h2 class="mv-section-title">Latest from<br><em>The Blog</em></h2>
        <p class="mv-blog-intro">
          Tutorials, product reviews, and beauty secrets — updated regularly.
        </p>

        <!-- Blog posts — populated from Decap CMS -->
        <div class="mv-blog-grid" id="mv-blog-posts">
          <!-- Sample post 1 -->
          <article class="mv-blog-card">
            <div class="mv-blog-card-img">
              <img src="/mascara.png" alt="5 Steps to Perfect Lashes" />
            </div>
            <div class="mv-blog-card-body">
              <span class="mv-blog-tag">Tutorial</span>
              <h3>5 Steps to Perfect Lashes Every Time</h3>
              <p>The exact mascara technique I use to get that dramatic, volumized lash look in under 3 minutes.</p>
              <a href="#blog" class="mv-blog-read">Read More →</a>
            </div>
          </article>
          <!-- Sample post 2 -->
          <article class="mv-blog-card">
            <div class="mv-blog-card-img">
              <img src="/valentino.png" alt="Valentino Beauty Review" />
            </div>
            <div class="mv-blog-card-body">
              <span class="mv-blog-tag">Review</span>
              <h3>Valentino Beauty Rosso Valentino Lipstick Review</h3>
              <p>Is it worth the splurge? I tested the iconic Valentino lipstick for 30 days — here's my honest verdict.</p>
              <a href="#blog" class="mv-blog-read">Read More →</a>
            </div>
          </article>
          <!-- Sample post 3 -->
          <article class="mv-blog-card">
            <div class="mv-blog-card-img">
              <img src="/thinking.png" alt="Smoky Eye Tutorial" />
            </div>
            <div class="mv-blog-card-body">
              <span class="mv-blog-tag">Tutorial</span>
              <h3>The Smoky Eye Guide for Brown Eyes</h3>
              <p>My signature smoky eye technique — perfect for brown eyes and every skin tone. Step-by-step breakdown.</p>
              <a href="#blog" class="mv-blog-read">Read More →</a>
            </div>
          </article>
        </div>

        <div class="mv-blog-cta">
          <p class="mv-blog-cms-note">
            ✦ This blog is powered by <strong>Decap CMS</strong> — Renata can add new posts at
            <code>velvetxverse.com/admin</code> without touching any code.
          </p>
        </div>
      </div>
    </section>

    <!-- ── CONTACT ── -->
    <section id="contact" class="mv-contact">
      <div class="mv-contact-inner">
        <p class="mv-section-eyebrow mv-light">Get In Touch</p>
        <h2 class="mv-section-title mv-light">Let's Work <em>Together</em></h2>
        <p class="mv-contact-desc">
          Interested in a collaboration, partnership, or booking? I'd love to hear from you.
        </p>
        <div class="mv-contact-links">
          <a href="mailto:renataxoliveiraofficial@gmail.com" class="mv-btn-outline-light">
            renataxoliveiraofficial@gmail.com
          </a>
          <a href="https://www.instagram.com/renata.oliveiramua" target="_blank" rel="noopener" class="mv-btn-outline-light">
            @renata.oliveiramua
          </a>
        </div>
        <div class="mv-contact-socials">
          <a href="https://www.instagram.com/renata.oliveiramua" target="_blank" rel="noopener" aria-label="Instagram">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://www.tiktok.com/@renata.oliveiramua" target="_blank" rel="noopener" aria-label="TikTok">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/></svg>
          </a>
          <a href="https://www.pinterest.com/renata.oliveiramua" target="_blank" rel="noopener" aria-label="Pinterest">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
          </a>
        </div>
      </div>
    </section>

    <!-- ── FOOTER ── -->
    <footer class="mv-footer">
      <p>© 2025 Renata Oliveira · <a href="https://www.velvetxverse.com">velvetxverse.com</a></p>
      <p class="mv-footer-sub">Makeup Artist &amp; Beauty Influencer · renataxoliveiraofficial@gmail.com</p>
    </footer>

  </div>
</template>

<script setup>
// MakeupView.vue — Renata Oliveira Makeup & Beauty Portal
// No external dependencies required — pure Vue 3 <script setup>
</script>

<style scoped>
/* ============================================================
   MakeupView.vue — Scoped Styles
   Design: Black & white editorial luxury (Alessia Rose reference)
   All values hardcoded with !important to avoid global conflicts
   All class names prefixed with mv- to avoid conflicts
   ============================================================ */

/* ── Google Fonts ── */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Parisienne&family=Jost:wght@300;400;500;600&display=swap');

/* ── Root ── */
.mv-root {
  font-family: 'Jost', sans-serif !important;
  color: #111111 !important;
  background: #faf9f7 !important;
  margin: 0 !important;
  padding: 0 !important;
  scroll-behavior: smooth !important;
}

/* ── NAV ── */
.mv-nav {
  position: sticky !important;
  top: 0 !important;
  z-index: 100 !important;
  background: #ffffff !important;
  border-bottom: 1px solid #e8e4df !important;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  padding: 0 40px !important;
  height: 68px !important;
  gap: 20px !important;
}

.mv-nav-back {
  font-family: 'Jost', sans-serif !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  letter-spacing: 0.08em !important;
  color: #888 !important;
  text-decoration: none !important;
  white-space: nowrap !important;
  transition: color 0.2s !important;
}
.mv-nav-back:hover { color: #111 !important; }

.mv-nav-brand {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  line-height: 1.1 !important;
}
.mv-nav-name {
  font-family: 'Cormorant Garamond', serif !important;
  font-size: 14px !important;
  font-weight: 600 !important;
  letter-spacing: 0.2em !important;
  color: #111 !important;
}
.mv-nav-sub {
  font-family: 'Parisienne', cursive !important;
  font-size: 11px !important;
  color: #c8a97e !important;
  letter-spacing: 0.05em !important;
}

.mv-nav-links {
  display: flex !important;
  list-style: none !important;
  margin: 0 !important;
  padding: 0 !important;
  gap: 32px !important;
}
.mv-nav-links a {
  font-family: 'Jost', sans-serif !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  letter-spacing: 0.12em !important;
  color: #111 !important;
  text-decoration: none !important;
  text-transform: uppercase !important;
  transition: color 0.2s !important;
}
.mv-nav-links a:hover { color: #c8a97e !important; }

/* ── HERO ── */
.mv-hero {
  display: flex !important;
  align-items: center !important;
  min-height: 88vh !important;
  background: #faf9f7 !important;
  overflow: hidden !important;
  padding: 60px 60px 60px 80px !important;
  gap: 60px !important;
  max-width: 100% !important;
}

.mv-hero-text {
  flex: 0 0 420px !important;
  max-width: 420px !important;
  z-index: 2 !important;
}

.mv-hero-eyebrow {
  font-family: 'Jost', sans-serif !important;
  font-size: 11px !important;
  font-weight: 500 !important;
  letter-spacing: 0.2em !important;
  text-transform: uppercase !important;
  color: #888 !important;
  margin: 0 0 20px !important;
}

.mv-hero-title {
  font-family: 'Cormorant Garamond', serif !important;
  font-size: clamp(48px, 5vw, 72px) !important;
  font-weight: 300 !important;
  line-height: 1.1 !important;
  color: #111 !important;
  margin: 0 0 24px !important;
}
.mv-hero-title em {
  font-style: italic !important;
  font-weight: 400 !important;
  color: #111 !important;
}

.mv-hero-desc {
  font-family: 'Jost', sans-serif !important;
  font-size: 15px !important;
  font-weight: 300 !important;
  line-height: 1.7 !important;
  color: #555 !important;
  margin: 0 0 36px !important;
}

.mv-btn-primary {
  display: inline-block !important;
  font-family: 'Jost', sans-serif !important;
  font-size: 11px !important;
  font-weight: 600 !important;
  letter-spacing: 0.18em !important;
  text-transform: uppercase !important;
  color: #111 !important;
  background: transparent !important;
  border: 1.5px solid #111 !important;
  padding: 14px 36px !important;
  text-decoration: none !important;
  transition: background 0.25s, color 0.25s !important;
}
.mv-btn-primary:hover {
  background: #111 !important;
  color: #fff !important;
}

/* ── HERO PHOTO GRID ── */
.mv-hero-grid {
  flex: 1 !important;
  display: flex !important;
  align-items: flex-end !important;
  gap: 12px !important;
  height: 75vh !important;
  min-height: 480px !important;
  max-height: 680px !important;
}

.mv-hero-col {
  flex: 1 !important;
  overflow: hidden !important;
  border-radius: 0 !important;
}
.mv-hero-col img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  object-position: top center !important;
  display: block !important;
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1) !important;
}
.mv-hero-col:hover img {
  transform: scale(1.04) !important;
}

.mv-hero-col--tall { height: 100% !important; }
.mv-hero-col--mid  { height: 85% !important; }
.mv-hero-col--short { height: 70% !important; }

/* ── BRANDS ── */
.mv-brands {
  background: #ffffff !important;
  border-top: 1px solid #e8e4df !important;
  border-bottom: 1px solid #e8e4df !important;
  padding: 36px 60px !important;
  text-align: center !important;
}
.mv-brands-label {
  font-family: 'Jost', sans-serif !important;
  font-size: 10px !important;
  font-weight: 500 !important;
  letter-spacing: 0.25em !important;
  color: #aaa !important;
  margin: 0 0 24px !important;
  text-transform: uppercase !important;
}
.mv-brands-row {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 48px !important;
  flex-wrap: wrap !important;
}
.mv-brand-logo {
  font-family: 'Cormorant Garamond', serif !important;
  font-size: 20px !important;
  font-weight: 600 !important;
  letter-spacing: 0.12em !important;
  color: #111 !important;
  opacity: 0.7 !important;
  transition: opacity 0.2s !important;
}
.mv-brand-logo:hover { opacity: 1 !important; }

/* ── SECTION SHARED ── */
.mv-section-eyebrow {
  font-family: 'Jost', sans-serif !important;
  font-size: 10px !important;
  font-weight: 600 !important;
  letter-spacing: 0.3em !important;
  text-transform: uppercase !important;
  color: #c8a97e !important;
  margin: 0 0 16px !important;
}
.mv-section-eyebrow.mv-light { color: #c8a97e !important; }

.mv-section-title {
  font-family: 'Cormorant Garamond', serif !important;
  font-size: clamp(36px, 4vw, 56px) !important;
  font-weight: 300 !important;
  line-height: 1.15 !important;
  color: #111 !important;
  margin: 0 0 32px !important;
}
.mv-section-title.mv-light { color: #ffffff !important; }
.mv-section-title em {
  font-style: italic !important;
  font-weight: 400 !important;
}

/* ── ABOUT ── */
.mv-about {
  background: #faf9f7 !important;
  padding: 100px 80px !important;
}
.mv-about-inner {
  max-width: 1180px !important;
  margin: 0 auto !important;
  display: flex !important;
  align-items: center !important;
  gap: 80px !important;
}
.mv-about-img-wrap {
  flex: 0 0 380px !important;
  height: 500px !important;
  overflow: hidden !important;
}
.mv-about-img-wrap img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  object-position: top center !important;
  display: block !important;
}
.mv-about-content {
  flex: 1 !important;
}
.mv-about-text {
  font-family: 'Jost', sans-serif !important;
  font-size: 15px !important;
  font-weight: 300 !important;
  line-height: 1.8 !important;
  color: #444 !important;
  margin: 0 0 20px !important;
}
.mv-about-stats {
  display: flex !important;
  gap: 40px !important;
  margin-top: 40px !important;
  padding-top: 40px !important;
  border-top: 1px solid #e8e4df !important;
}
.mv-stat {
  display: flex !important;
  flex-direction: column !important;
  gap: 4px !important;
}
.mv-stat-num {
  font-family: 'Cormorant Garamond', serif !important;
  font-size: 32px !important;
  font-weight: 500 !important;
  color: #111 !important;
  line-height: 1 !important;
}
.mv-stat-label {
  font-family: 'Jost', sans-serif !important;
  font-size: 10px !important;
  font-weight: 500 !important;
  letter-spacing: 0.15em !important;
  text-transform: uppercase !important;
  color: #888 !important;
}

/* ── SERVICES ── */
.mv-services {
  background: #111111 !important;
  padding: 100px 80px !important;
}
.mv-services-inner {
  max-width: 1180px !important;
  margin: 0 auto !important;
}
.mv-services-grid {
  display: grid !important;
  grid-template-columns: repeat(3, 1fr) !important;
  gap: 2px !important;
  margin-top: 20px !important;
}
.mv-service-card {
  background: #1a1a1a !important;
  padding: 48px 36px !important;
  border: 1px solid #2a2a2a !important;
  transition: background 0.25s !important;
}
.mv-service-card:hover {
  background: #222 !important;
}
.mv-service-icon {
  font-size: 18px !important;
  color: #c8a97e !important;
  margin-bottom: 20px !important;
}
.mv-service-card h3 {
  font-family: 'Cormorant Garamond', serif !important;
  font-size: 22px !important;
  font-weight: 500 !important;
  color: #ffffff !important;
  margin: 0 0 14px !important;
  line-height: 1.2 !important;
}
.mv-service-card p {
  font-family: 'Jost', sans-serif !important;
  font-size: 14px !important;
  font-weight: 300 !important;
  line-height: 1.7 !important;
  color: #aaa !important;
  margin: 0 !important;
}

/* ── BLOG ── */
.mv-blog {
  background: #faf9f7 !important;
  padding: 100px 80px !important;
}
.mv-blog-inner {
  max-width: 1180px !important;
  margin: 0 auto !important;
}
.mv-blog-intro {
  font-family: 'Jost', sans-serif !important;
  font-size: 15px !important;
  font-weight: 300 !important;
  color: #666 !important;
  margin: 0 0 48px !important;
}
.mv-blog-grid {
  display: grid !important;
  grid-template-columns: repeat(3, 1fr) !important;
  gap: 32px !important;
}
.mv-blog-card {
  background: #ffffff !important;
  border: 1px solid #e8e4df !important;
  overflow: hidden !important;
  transition: transform 0.25s, box-shadow 0.25s !important;
}
.mv-blog-card:hover {
  transform: translateY(-4px) !important;
  box-shadow: 0 12px 40px rgba(0,0,0,0.08) !important;
}
.mv-blog-card-img {
  height: 240px !important;
  overflow: hidden !important;
}
.mv-blog-card-img img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  object-position: top center !important;
  display: block !important;
  transition: transform 0.5s !important;
}
.mv-blog-card:hover .mv-blog-card-img img {
  transform: scale(1.05) !important;
}
.mv-blog-card-body {
  padding: 28px !important;
}
.mv-blog-tag {
  font-family: 'Jost', sans-serif !important;
  font-size: 9px !important;
  font-weight: 600 !important;
  letter-spacing: 0.2em !important;
  text-transform: uppercase !important;
  color: #c8a97e !important;
  display: block !important;
  margin-bottom: 10px !important;
}
.mv-blog-card-body h3 {
  font-family: 'Cormorant Garamond', serif !important;
  font-size: 20px !important;
  font-weight: 500 !important;
  color: #111 !important;
  margin: 0 0 12px !important;
  line-height: 1.3 !important;
}
.mv-blog-card-body p {
  font-family: 'Jost', sans-serif !important;
  font-size: 13px !important;
  font-weight: 300 !important;
  line-height: 1.7 !important;
  color: #666 !important;
  margin: 0 0 18px !important;
}
.mv-blog-read {
  font-family: 'Jost', sans-serif !important;
  font-size: 11px !important;
  font-weight: 600 !important;
  letter-spacing: 0.1em !important;
  color: #111 !important;
  text-decoration: none !important;
  border-bottom: 1px solid #111 !important;
  padding-bottom: 2px !important;
  transition: color 0.2s, border-color 0.2s !important;
}
.mv-blog-read:hover {
  color: #c8a97e !important;
  border-color: #c8a97e !important;
}
.mv-blog-cta {
  margin-top: 48px !important;
  padding: 24px 32px !important;
  background: #f0ece6 !important;
  border-left: 3px solid #c8a97e !important;
}
.mv-blog-cms-note {
  font-family: 'Jost', sans-serif !important;
  font-size: 13px !important;
  color: #555 !important;
  margin: 0 !important;
}
.mv-blog-cms-note code {
  background: #e8e4df !important;
  padding: 2px 6px !important;
  font-size: 12px !important;
  color: #111 !important;
}

/* ── CONTACT ── */
.mv-contact {
  background: #111111 !important;
  padding: 100px 80px !important;
  text-align: center !important;
}
.mv-contact-inner {
  max-width: 700px !important;
  margin: 0 auto !important;
}
.mv-contact-desc {
  font-family: 'Jost', sans-serif !important;
  font-size: 16px !important;
  font-weight: 300 !important;
  color: #aaa !important;
  margin: 0 0 40px !important;
  line-height: 1.7 !important;
}
.mv-contact-links {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  gap: 16px !important;
  margin-bottom: 40px !important;
}
.mv-btn-outline-light {
  display: inline-block !important;
  font-family: 'Jost', sans-serif !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  letter-spacing: 0.08em !important;
  color: #ffffff !important;
  border: 1px solid #444 !important;
  padding: 14px 32px !important;
  text-decoration: none !important;
  transition: border-color 0.2s, color 0.2s !important;
}
.mv-btn-outline-light:hover {
  border-color: #c8a97e !important;
  color: #c8a97e !important;
}
.mv-contact-socials {
  display: flex !important;
  justify-content: center !important;
  gap: 24px !important;
}
.mv-contact-socials a {
  color: #666 !important;
  transition: color 0.2s !important;
  display: flex !important;
  align-items: center !important;
}
.mv-contact-socials a:hover { color: #c8a97e !important; }

/* ── FOOTER ── */
.mv-footer {
  background: #0a0a0a !important;
  padding: 32px 60px !important;
  text-align: center !important;
  border-top: 1px solid #1e1e1e !important;
}
.mv-footer p {
  font-family: 'Jost', sans-serif !important;
  font-size: 12px !important;
  font-weight: 300 !important;
  color: #555 !important;
  margin: 0 0 4px !important;
}
.mv-footer a {
  color: #888 !important;
  text-decoration: none !important;
}
.mv-footer a:hover { color: #c8a97e !important; }
.mv-footer-sub {
  font-size: 11px !important;
  color: #444 !important;
}

/* ── RESPONSIVE ── */
@media (max-width: 1024px) {
  .mv-hero {
    flex-direction: column !important;
    padding: 60px 40px !important;
    min-height: auto !important;
  }
  .mv-hero-text {
    flex: none !important;
    max-width: 100% !important;
    text-align: center !important;
  }
  .mv-hero-grid {
    width: 100% !important;
    height: 50vw !important;
    min-height: 300px !important;
    max-height: 400px !important;
  }
  .mv-about-inner {
    flex-direction: column !important;
    gap: 40px !important;
  }
  .mv-about-img-wrap {
    flex: none !important;
    width: 100% !important;
    height: 400px !important;
  }
  .mv-services-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
  .mv-blog-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media (max-width: 768px) {
  .mv-nav {
    padding: 0 20px !important;
    height: 60px !important;
  }
  .mv-nav-links {
    display: none !important;
  }
  .mv-hero {
    padding: 40px 24px !important;
  }
  .mv-about,
  .mv-services,
  .mv-blog,
  .mv-contact {
    padding: 60px 24px !important;
  }
  .mv-services-grid {
    grid-template-columns: 1fr !important;
  }
  .mv-blog-grid {
    grid-template-columns: 1fr !important;
  }
  .mv-about-stats {
    flex-wrap: wrap !important;
    gap: 24px !important;
  }
  .mv-brands {
    padding: 28px 24px !important;
  }
  .mv-brands-row {
    gap: 24px !important;
  }
}
</style>
