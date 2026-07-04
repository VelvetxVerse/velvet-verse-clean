<template>
  <div class="links-page">
    <section class="hero">
      <img src="/mk5.png" alt="Renata Oliver" class="profile" />

      <p class="eyebrow">VELVET X VERSE</p>
      <h1>Renata Oliver</h1>

      <p class="subtitle">Beauty • Luxury Travel • Lifestyle Creator</p>

      <p class="description">
        Sharing elevated beauty discoveries, luxury destinations,
        timeless style, and inspiring experiences from around the world.
      </p>
    </section>

    <section class="links-grid">
      <RouterLink to="/work-with-me" class="link-card">
        <span>Work With Me</span>
        <small>Brand Collaborations</small>
      </RouterLink>

      <RouterLink to="/media-kit" class="link-card">
        <span>Media Kit</span>
        <small>Audience & Statistics</small>
      </RouterLink>

      <RouterLink to="/portfolio" class="link-card">
        <span>Portfolio</span>
        <small>Past Collaborations</small>
      </RouterLink>

      <RouterLink to="/blog" class="link-card featured">
        <img src="/mk5.png" alt="Beauty Blog" />
        <div>
          <span>Beauty & Travel Blog</span>
          <small>Read the Latest Articles</small>
        </div>
      </RouterLink>

      <a
        href="https://www.amazon.com/shop/yourstore"
        target="_blank"
        rel="noopener noreferrer"
        class="link-card"
      >
        <span>Amazon Storefront</span>
        <small>Favorite Products</small>
      </a>

      <RouterLink to="/shop" class="link-card">
        <span>Website Templates</span>
        <small>Luxury Premade Designs</small>
      </RouterLink>

      <RouterLink to="/contact" class="link-card">
        <span>Contact</span>
        <small>Let's Connect</small>
      </RouterLink>
    </section>

    <section class="socials">
      <a href="https://instagram.com/renataoliveiraofficial" target="_blank" rel="noopener noreferrer">Instagram</a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
      <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a>
      <a href="https://tiktok.com/@renataoliveiraofficial" target="_blank" rel="noopener noreferrer">TikTok</a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
    </section>

    <footer>
      © 2026 Velvet X Verse · Designed by Renata Oliver
    </footer>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.links-page {
  min-height: 100vh;
  background:
    radial-gradient(circle at top, rgba(242, 196, 196, 0.22), transparent 35%),
    #faf8f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 20px 55px;
}

.hero {
  text-align: center;
  max-width: 610px;
}

.profile {
  width: 148px;
  height: 148px;
  border-radius: 50%;
  object-fit: cover;
  border: 7px solid #fff;
  box-shadow: 0 22px 55px rgba(120, 80, 60, 0.12);
  margin-bottom: 30px;
}

.eyebrow {
  font-size: 0.72rem;
  letter-spacing: 5px;
  color: #b88b73;
  margin-bottom: 18px;
  text-transform: uppercase;
}

h1 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.6rem, 7vw, 4rem);
  color: #2b2b2b;
  font-weight: 500;
  margin-bottom: 12px;
}

.subtitle {
  color: #8a7b73;
  font-size: 0.95rem;
  letter-spacing: 1px;
  margin-bottom: 22px;
}

.description {
  color: #666;
  line-height: 1.9;
  max-width: 480px;
  margin: auto;
  font-size: 1rem;
}

.links-grid {
  width: 100%;
  max-width: 520px;
  margin-top: 52px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.link-card {
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid #efe7e1;
  border-radius: 20px;
  padding: 22px 26px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  transition: 0.35s ease;
  box-shadow: 0 10px 30px rgba(80, 55, 45, 0.045);
  overflow: hidden;
}

.link-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 42px rgba(80, 55, 45, 0.1);
  border-color: #d7b79c;
}

.link-card span {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.75rem;
  color: #222;
  margin-bottom: 4px;
}

.link-card small {
  color: #8a8179;
  font-size: 0.9rem;
}

.link-card.featured {
  min-height: 190px;
  position: relative;
  justify-content: flex-end;
  padding: 0;
}

.link-card.featured img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.link-card.featured::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(40, 25, 20, 0.72), rgba(40, 25, 20, 0.12));
}

.link-card.featured div {
  position: relative;
  z-index: 2;
  padding: 26px;
}

.link-card.featured span,
.link-card.featured small {
  color: #fff;
}

.socials {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px 24px;
  margin-top: 48px;
}

.socials a {
  font-size: 0.72rem;
  color: #8b7d74;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  transition: 0.3s;
}

.socials a:hover {
  color: #b88b73;
  transform: translateY(-2px);
}

footer {
  margin-top: 52px;
  color: #9b928d;
  font-size: 0.82rem;
  letter-spacing: 1px;
  text-align: center;
}

@media (max-width: 768px) {
  .links-page {
    padding-top: 52px;
  }

  .link-card span {
    font-size: 1.48rem;
  }

  .link-card.featured {
    min-height: 165px;
  }
}
</style>