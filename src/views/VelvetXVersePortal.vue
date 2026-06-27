<template>
  <main class="vxv-page">
    <header class="vxv-header">
      <a href="/" class="brand">
        <div class="crown">♕</div>
        <div class="logo">VELVETXVERSE</div>
        <div class="byline">by Renata Oliver</div>
      </a>

      <nav class="vxv-nav">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/collaborate">Media Kit</a>
        <a href="/contact">Contact</a>
      </nav>

      <a href="/contact" class="work-btn">Work With Me</a>
    </header>

    <section class="hero">
      <div class="tiny-line">
        <span></span>
        <b>✦</b>
        <span></span>
      </div>

      <h1>Four Passions. One Purpose.</h1>

      <p>Designing beauty, building brands, and telling stories with intention.</p>
    </section>

    <section class="worlds">
      <a
        v-for="world in worlds"
        :key="world.title"
        :href="world.link"
        class="world-card"
      >
        <img :src="world.image" :alt="world.title" />

        <div class="card-body">
          <h2>{{ world.title }}</h2>
          <div class="mini">✦</div>
          <p>{{ world.desc }}</p>
          <span>Explore →</span>
        </div>
      </a>
    </section>

    <footer>
      Creating Beauty. Building Brands. Inspiring Lives.
    </footer>
  </main>
</template>

<script setup>
const worlds = [
  {
    title: 'Web Design',
    desc: 'Elegant websites for feminine brands with a luxury feel.',
    link: '/collections',
    image: '/webdesignfrontpage.png'
  },
  {
    title: 'Social Media',
    desc: 'Intentional content strategy for brands that want to grow beautifully.',
    link: '/social-media',
    image: '/vxv-card-social.png'
  },
  {
    title: 'Travel',
    desc: 'Luxury travel storytelling, global experiences, and visual inspiration.',
    link: '/travel',
    image: '/santorini26.png'
  },
  {
    title: 'Beauty',
    desc: 'Makeup, skincare, wellness, and beauty content with purpose.',
    link: '/makeup',
    image: '/makeup1.png'
  }
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Parisienne&family=DM+Sans:wght@300;400;500;600&family=Cormorant+Garamond:wght@300;400;500&display=swap');

.vxv-page {
  min-height: 100vh;
  background: #fbf2ea;
  color: #2a1b14;
  font-family: 'DM Sans', sans-serif;
  padding: 22px 36px 28px;
}

.vxv-header {
  max-width: 1480px;
  margin: 0 auto 58px;
  display: grid;
  grid-template-columns: 230px 1fr 170px;
  align-items: center;
  gap: 24px;
}

.brand {
  text-align: center;
  text-decoration: none;
  color: inherit;
}

.crown {
  font-size: 15px;
  color: #b88a55;
  line-height: 1;
  margin-bottom: 4px;
}

.logo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 20px;
  letter-spacing: 5px;
  line-height: 1;
}

.byline {
  font-family: 'Parisienne', cursive;
  font-size: 15px;
  color: #7a5746;
  margin-top: 6px;
}

.vxv-nav {
  display: flex;
  justify-content: center;
  gap: clamp(18px, 3vw, 44px);
}

.vxv-nav a {
  text-decoration: none;
  color: #2a1b14;
  text-transform: uppercase;
  font-size: 10px;
  letter-spacing: 2.6px;
  font-weight: 500;
}

.work-btn {
  justify-self: end;
  text-decoration: none;
  color: #2a1b14;
  background: #efd7cf;
  border: 1px solid rgba(184, 138, 85, 0.18);
  border-radius: 999px;
  padding: 11px 22px;
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  white-space: nowrap;
}

.hero {
  max-width: 980px;
  margin: 0 auto 64px;
  text-align: center;
}

.tiny-line {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-bottom: 18px;
  color: #b88a55;
}

.tiny-line span {
  width: 86px;
  height: 1px;
  background: rgba(184, 138, 85, 0.28);
}

.tiny-line b {
  font-size: 9px;
  font-weight: 400;
}

.hero h1 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(44px, 4vw, 66px);
  line-height: 0.98;
  font-weight: 400;
  letter-spacing: -0.5px;
  margin: 0;
}

.hero p {
  font-family: 'Parisienne', cursive;
  font-size: clamp(20px, 2vw, 25px);
  color: #8b6655;
  margin: 14px auto 0;
}

.worlds {
  max-width: 1480px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.world-card {
  background: rgba(255, 250, 246, 0.86);
  border: 1px solid rgba(184, 138, 85, 0.16);
  border-radius: 18px;
  overflow: hidden;
  text-align: center;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 10px 28px rgba(86, 57, 38, 0.045);
}

.world-card img {
  width: 100%;
  height: 218px;
  object-fit: cover;
  display: block;
}

.card-body {
  padding: 22px 22px 24px;
}

.card-body h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 26px;
  font-weight: 400;
  line-height: 1;
  margin: 0;
}

.mini {
  color: #b88a55;
  font-size: 9px;
  margin: 12px 0;
}

.card-body p {
  max-width: 260px;
  margin: 0 auto 22px;
  font-size: 12.5px;
  line-height: 1.65;
  color: #4d372c;
}

.card-body span {
  text-transform: uppercase;
  font-size: 9.5px;
  letter-spacing: 2.4px;
  color: #7d5b45;
}

footer {
  text-align: center;
  margin-top: 34px;
  font-size: 10px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: #7d5b45;
}

@media (max-width: 1100px) {
  .vxv-header {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  .work-btn {
    justify-self: center;
  }

  .vxv-nav {
    flex-wrap: wrap;
  }

  .worlds {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 650px) {
  .vxv-page {
    padding: 20px 16px;
  }

  .hero {
    margin-bottom: 42px;
  }

  .hero h1 {
    font-size: 42px;
  }

  .worlds {
    grid-template-columns: 1fr;
  }

  .world-card img {
    height: 240px;
  }

  footer {
    letter-spacing: 3px;
    line-height: 1.8;
  }
}
</style>