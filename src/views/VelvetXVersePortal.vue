<template>
  <main class="vxv-page">
    <header class="vxv-header">
      <div class="brand">
        <div class="crown">♕</div>
        <div class="logo">VELVETXVERSE</div>
        <div class="byline">by Renata Oliver</div>
      </div>

      <nav>
        <a>Home</a>
        <a>About</a>
        <a>Services</a>
        <a>Portfolio</a>
        <a>Media Kit</a>
        <a>Contact</a>
      </nav>

      <a class="work-btn">Work With Me <span>→</span></a>
    </header>

    <section class="hero">
      <div class="hero-text">
        <div class="tiny-line">
          <span></span>♕<span></span>
        </div>

        <h1>
          Four Passions.<br />
          One Purpose. <span>♡</span>
        </h1>

        <p>
          Everything I do is rooted in creativity, connection, and purpose.
        </p>

        <div class="hero-buttons">
          <a href="#worlds">Explore My Worlds →</a>
          <a href="/contact" class="outline">Work With Me →</a>
        </div>
      </div>

      <div class="hero-image">
        <img src="/vxv-hero-laptop.png" alt="VelvetXVerse" />
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
      Creating Beauty. Building Brands. Inspiring Lives. ♡
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
  },
  {
    title: 'Media Kit & Insights',
    desc: 'Audience insights, brand partnerships, and collaboration opportunities.',
    link: '/collaborate',
    image: '/vxv-card-social.png',
    icon: '♡'
  }
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Parisienne&family=DM+Sans:wght@300;400;500;600&family=Cormorant+Garamond:wght@300;400;500;600&display=swap');

.vxv-page {
  min-height: 100vh;
  background: #fbf2ea;
  color: #2c1d16;
  font-family: 'DM Sans', sans-serif;
  padding: 32px 44px 28px;
}

.vxv-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 46px;
}

.brand {
  text-align: center;
}

.crown {
  color: #c6975b;
  font-size: 22px;
  line-height: 1;
}

.logo {
  font-family: 'Cormorant Garamond', serif;
  letter-spacing: 6px;
  font-size: 27px;
}

.byline {
  font-family: 'Parisienne', cursive;
  font-size: 18px;
  color: #6f4d3d;
}

nav {
  display: flex;
  gap: 44px;
}

nav a {
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 3px;
  text-decoration: none;
  color: #201612;
}

.work-btn,
.hero-buttons a {
  background: #efd4ca;
  border-radius: 999px;
  padding: 15px 34px;
  text-decoration: none;
  color: #201612;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 3px;
}

.hero {
  display: grid;
  grid-template-columns: 43% 57%;
  align-items: center;
  min-height: 420px;
  margin-bottom: 34px;
}

.hero-text {
  text-align: center;
  z-index: 2;
}

.tiny-line {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  color: #c6975b;
  margin-bottom: 20px;
}

.tiny-line span {
  width: 90px;
  height: 1px;
  background: rgba(198, 151, 91, 0.35);
}

.hero h1 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(58px, 6vw, 92px);
  font-weight: 400;
  line-height: 0.92;
  margin: 0;
}

.hero h1 span {
  color: #c6975b;
}

.hero p {
  font-family: 'Parisienne', cursive;
  font-size: 30px;
  color: #936958;
  margin: 24px auto 30px;
  max-width: 620px;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 18px;
}

.hero-buttons .outline {
  background: transparent;
  border: 1px solid #d6a878;
}

.hero-image img {
  width: 100%;
  height: 430px;
  object-fit: cover;
  border-radius: 34px;
}

.worlds {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 22px;
}

.world-card {
  position: relative;
  background: #fff8f3;
  border: 1px solid rgba(198, 151, 91, 0.25);
  border-radius: 22px;
  overflow: hidden;
  text-align: center;
  color: #241711;
  text-decoration: none;
  box-shadow: 0 18px 45px rgba(125, 83, 54, 0.08);
}

.world-card img {
  width: 100%;
  height: 230px;
  object-fit: cover;
}

.icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #fffaf6;
  border: 1px solid rgba(198, 151, 91, 0.28);
  display: grid;
  place-items: center;
  color: #d2a06b;
  font-size: 30px;
  margin: -36px auto 18px;
  position: relative;
  z-index: 2;
}

.card-body {
  padding: 0 24px 28px;
}

.card-body h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 31px;
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
  margin-bottom: 26px;
}

.card-body span {
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 11px;
}

footer {
  text-align: center;
  margin-top: 28px;
  text-transform: uppercase;
  letter-spacing: 8px;
  font-size: 13px;
}

@media (max-width: 1100px) {
  nav {
    display: none;
  }

  .hero {
    grid-template-columns: 1fr;
  }

  .worlds {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 650px) {
  .vxv-page {
    padding: 20px;
  }

  .vxv-header {
    flex-direction: column;
    gap: 20px;
  }

  .hero h1 {
    font-size: 50px;
  }

  .worlds {
    grid-template-columns: 1fr;
  }

  footer {
    letter-spacing: 3px;
    line-height: 1.8;
  }
}
</style>