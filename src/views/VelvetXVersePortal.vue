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

      <a href="/contact" class="work-btn">Work With Me <span>→</span></a>
    </header>

    <section class="hero">
      <div class="tiny-line">
        <span></span>
        <b>♕</b>
        <span></span>
      </div>

      <h1>Four Passions. One Purpose. <span>♡</span></h1>

      <p>Everything I do is rooted in creativity, connection, and purpose.</p>

      <div class="hero-star">
        <span></span>
        <b>✦</b>
        <span></span>
      </div>
    </section>

    <section class="worlds" id="worlds">
      <a
        v-for="world in worlds"
        :key="world.title"
        :href="world.link"
        class="world-card"
      >
        <img :src="world.image" :alt="world.title" />

        <div class="icon">{{ world.icon }}</div>

        <div class="card-body">
          <h2>{{ world.title }}</h2>
          <div class="mini">✦</div>
          <p>{{ world.desc }}</p>
          <span>View More →</span>
        </div>
      </a>
    </section>

    <footer>
      <span></span>
      <b>♡</b>
      <span></span>
      <p>Creating Beauty. Building Brands. Inspiring Lives. ♡</p>
    </footer>
  </main>
</template>

<script setup>
const worlds = [
  {
    title: 'Web Design',
    desc: 'I design stunning websites that elevate your brand and convert visitors into loyal clients.',
    link: '/collections',
    image: '/vxv-card-webdesign.png',
    icon: '⌘'
  },
  {
    title: 'Social Media Manager',
    desc: 'I create strategies and content that build your presence, engage your audience, and grow your brand.',
    link: '/social-media',
    image: '/vxv-card-social.png',
    icon: '▯'
  },
  {
    title: 'Travel Influencer',
    desc: 'I explore the world and share authentic experiences that inspire and connect.',
    link: '/travel',
    image: '/vxv-card-travel.png',
    icon: '✈'
  },
  {
    title: 'Makeup & Beauty',
    desc: 'I create beauty content that empowers, educates, and celebrates confidence.',
    link: '/makeup',
    image: '/vxv-card-makeup.png',
    icon: '♢'
  }
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Parisienne&family=DM+Sans:wght@300;400;500;600&family=Cormorant+Garamond:wght@300;400;500;600&display=swap');

.vxv-page {
  min-height: 100vh;
  background: radial-gradient(circle at top, #fffaf6 0%, #fbf2ea 45%, #f8eee6 100%);
  color: #2c1d16;
  font-family: 'DM Sans', sans-serif;
  padding: 28px 44px 26px;
}

.vxv-header {
  display: grid;
  grid-template-columns: 290px 1fr 230px;
  align-items: center;
  gap: 24px;
  margin-bottom: 44px;
}

.brand {
  text-align: center;
  text-decoration: none;
  color: inherit;
}

.crown {
  color: #c6975b;
  font-size: 21px;
  line-height: 1;
}

.logo {
  font-family: 'Cormorant Garamond', serif;
  letter-spacing: 7px;
  font-size: 27px;
  line-height: 1;
}

.byline {
  font-family: 'Parisienne', cursive;
  font-size: 19px;
  color: #6f4d3d;
  margin-top: 8px;
}

.vxv-nav {
  display: flex;
  justify-content: center;
  gap: clamp(22px, 3vw, 50px);
}

.vxv-nav a {
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 4px;
  text-decoration: none;
  color: #201612;
}

.work-btn {
  justify-self: end;
  background: #efd4ca;
  border-radius: 999px;
  padding: 16px 34px;
  text-decoration: none;
  color: #201612;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 4px;
  white-space: nowrap;
}

.hero {
  text-align: center;
  max-width: 1180px;
  margin: 0 auto 36px;
}

.tiny-line,
.hero-star {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  color: #c6975b;
}

.tiny-line {
  margin-bottom: 22px;
}

.hero-star {
  margin-top: 20px;
}

.tiny-line span,
.hero-star span {
  width: 110px;
  height: 1px;
  background: rgba(198, 151, 91, 0.28);
}

.tiny-line b,
.hero-star b {
  font-size: 14px;
  font-weight: 400;
}

.hero h1 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(58px, 5vw, 86px);
  font-weight: 400;
  line-height: 1;
  margin: 0;
  letter-spacing: -1px;
}

.hero h1 span {
  color: #c6975b;
}

.hero p {
  font-family: 'Parisienne', cursive;
  font-size: clamp(25px, 2.2vw, 34px);
  color: #936958;
  margin: 16px auto 0;
}

.worlds {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
}

.world-card {
  position: relative;
  background: rgba(255, 248, 243, 0.92);
  border: 1px solid rgba(198, 151, 91, 0.23);
  border-radius: 22px;
  overflow: hidden;
  text-align: center;
  color: #241711;
  text-decoration: none;
  box-shadow: 0 18px 45px rgba(125, 83, 54, 0.08);
}

.world-card img {
  width: 100%;
  height: 315px;
  object-fit: cover;
}

.icon {
  width: 74px;
  height: 74px;
  border-radius: 50%;
  background: #fffaf6;
  border: 1px solid rgba(198, 151, 91, 0.28);
  display: grid;
  place-items: center;
  color: #d2a06b;
  font-size: 30px;
  margin: -38px auto 18px;
  position: relative;
  z-index: 2;
}

.card-body {
  padding: 0 28px 28px;
}

.card-body h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 34px;
  font-weight: 400;
  line-height: 0.95;
  margin: 0;
}

.mini {
  color: #c6975b;
  margin: 12px 0;
}

.card-body p {
  font-size: 14px;
  line-height: 1.55;
  margin: 0 auto 26px;
  max-width: 300px;
}

.card-body span {
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 11px;
}

footer {
  text-align: center;
  margin-top: 30px;
  color: #2c1d16;
}

footer span {
  display: inline-block;
  width: 190px;
  height: 1px;
  background: rgba(198, 151, 91, 0.28);
  vertical-align: middle;
}

footer b {
  color: #c6975b;
  font-size: 22px;
  margin: 0 18px;
  font-weight: 400;
}

footer p {
  text-transform: uppercase;
  letter-spacing: 8px;
  font-size: 13px;
  margin: 18px 0 0;
}

@media (max-width: 1200px) {
  .vxv-header {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  .work-btn {
    justify-self: center;
  }

  .worlds {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 700px) {
  .vxv-page {
    padding: 22px 18px;
  }

  .vxv-nav {
    flex-wrap: wrap;
    gap: 18px;
  }

  .hero h1 {
    font-size: 46px;
  }

  .worlds {
    grid-template-columns: 1fr;
  }

  .world-card img {
    height: 260px;
  }

  footer span {
    width: 80px;
  }

  footer p {
    letter-spacing: 3px;
    line-height: 1.8;
  }
}
</style>