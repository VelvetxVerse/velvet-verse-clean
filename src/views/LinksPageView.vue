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
      <a href="/work-with-me" class="link-card">
        <span>Work With Me</span>
        <small>Brand Collaborations</small>
      </a>

      <a href="/media-kit" class="link-card">
        <span>Media Kit</span>
        <small>Audience &amp; Statistics</small>
      </a>

      <a href="/portfolio" class="link-card">
        <span>Portfolio</span>
        <small>Past Collaborations</small>
      </a>

      <a href="/blog" class="link-card featured">
        <img src="/mk5.png" alt="Beauty Blog" />
        <div>
          <span>Beauty &amp; Travel Blog</span>
          <small>Read the Latest Articles</small>
        </div>
      </a>

      <a
        href="https://www.amazon.com/shop/yourstore"
        target="_blank"
        rel="noopener noreferrer"
        class="link-card"
      >
        <span>Amazon Storefront</span>
        <small>Favorite Products</small>
      </a>

      <a href="/shop" class="link-card">
        <span>Website Templates</span>
        <small>Luxury Premade Designs</small>
      </a>

      <a href="/contact" class="link-card">
        <span>Contact</span>
        <small>Let's Connect</small>
      </a>
    </section>

    <footer>
      © 2026 Velvet X Verse · Designed by Renata Oliver
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
.links-page {
  min-height: 100vh;
  background: #faf8f6;
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
  font-size: 3.4rem;
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
  background: #fff;
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

.featured {
  min-height: 190px;
  position: relative;
  justify-content: flex-end;
  padding: 0;
}

.featured img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.featured::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(40, 25, 20, 0.72), rgba(40, 25, 20, 0.12));
}

.featured div {
  position: relative;
  z-index: 2;
  padding: 26px;
}

.featured span,
.featured small {
  color: #fff;
}

footer {
  margin-top: 52px;
  color: #9b928d;
  font-size: 0.82rem;
  letter-spacing: 1px;
  text-align: center;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }

  .link-card span {
    font-size: 1.48rem;
  }

  .featured {
    min-height: 165px;
  }
}
</style>
