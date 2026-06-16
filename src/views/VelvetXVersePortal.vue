<template>
  <div class="portal-root">
    <aside class="portal-sidebar">
      <div class="sidebar-top">
        <div class="logo-crown">V</div>
        <div class="logo-brand">VELVETXVERSE</div>
        <div class="logo-sub">by Renata Oliver</div>
      </div>

      <nav class="sidebar-nav">
        <a href="/" class="nav-item active"><span class="nav-icon">⌂</span><span>Home</span></a>
        <a href="/about" class="nav-item"><span class="nav-icon">✧</span><span>About</span></a>
        <a href="/services" class="nav-item"><span class="nav-icon">▦</span><span>Services</span></a>
        <a href="/portfolio" class="nav-item"><span class="nav-icon">▢</span><span>Portfolio</span></a>
        <a href="/contact" class="nav-item"><span class="nav-icon">✉</span><span>Contact</span></a>
      </nav>

      <div class="sidebar-divider">
        <span></span><b>✦</b><span></span>
      </div>

      <div class="sidebar-tagline">
        <p>Five passions.</p>
        <p>One vision.</p>
        <p>Endless possibilities.</p>
        <div>♡</div>
      </div>
    </aside>

    <main class="portal-hero">
      <div class="hero-bg">
        <img src="/vxv-hero-laptop.png" alt="" class="hero-bg-img" />
        <div class="hero-bg-overlay"></div>
      </div>

      <section class="hero-content">
        <div class="hero-crown">♕</div>
        <p class="hero-welcome">Welcome to <span>♡</span></p>
        <h1>VELVETXVERSE</h1>
        <p class="hero-byline">by Renata Oliver</p>

        <div class="hero-rule">
          <span></span><b>✦</b><span></span>
        </div>
      </section>

      <div class="hero-message">
        <p>
          One brand. Five worlds.<br />
          Explore, inspire, elevate.
        </p>
        <a href="#worlds" class="hero-cta">EXPLORE <span>→</span></a>
      </div>

      <section class="hero-worlds-bar" id="worlds">
        <div class="worlds-bar-container">
          <a v-for="(w, i) in worlds" :key="i" :href="w.link" class="world-item">
            <div class="world-icon-large">{{ w.icon }}</div>
            <div class="world-label" v-html="w.label"></div>
          </a>
        </div>
      </section>

      <div class="hero-quote-bar">
        <span></span><b>✦</b><em>Luxury is in the Details.</em><b>✦</b><span></span>
      </div>
    </main>

    <aside class="portal-cards">
      <a
        v-for="(w, i) in worlds"
        :key="i"
        :href="w.link"
        class="world-card"
        :class="{ 'media-card': w.title === 'Media Kit' }"
      >
        <img :src="w.image" :alt="w.title" />

        <div class="card-content">
          <h3>{{ w.title }}</h3>
          <p>{{ w.desc }}</p>
          <span class="card-more">
            {{ w.title === 'Media Kit' ? 'VIEW MEDIA KIT →' : 'VIEW MORE →' }}
          </span>
        </div>

        <div class="card-arrow">→</div>
      </a>
    </aside>
  </div>
</template>

<script setup>
const worlds = [
  {
    title: 'Web Designer',
    label: 'Web<br>Designer',
    desc: 'I design stunning websites that tell your brand story.',
    link: '/collections',
    image: '/vxv-card-webdesign.png',
    icon: '⌘'
  },
  {
    title: 'Social Media Manager',
    label: 'Social Media<br>Manager',
    desc: 'I build brands, create content, and grow real connections.',
    link: '/social-media',
    image: '/vxv-card-social.png',
    icon: '◎'
  },
  {
    title: 'Travel Influencer',
    label: 'Travel<br>Influencer',
    desc: 'I explore the world and inspire souls.',
    link: '/travel',
    image: '/vxv-card-travel.png',
    icon: '✈'
  },
  {
    title: 'Makeup & Beauty',
    label: 'Makeup &<br>Beauty',
    desc: 'I enhance beauty and empower confidence.',
    link: '/makeup',
    image: '/vxv-card-makeup.png',
    icon: '♢'
  },
  {
    title: 'Media Kit',
    label: 'Media Kit<br>& Insights',
    desc: 'Audience insights, brand partnerships and collaboration opportunities.',
    link: '/collaborate',
    image: '/vxv-card-social.png',
    icon: '♡'
  }
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Parisienne&family=DM+Sans:wght@300;400;500;600&family=Cormorant+Garamond:wght@300;400;500;600&display=swap');

.portal-root {
  display: grid;
  grid-template-columns: 160px minmax(0, 1fr) 520px;
  gap: 12px;
  min-height: 100vh;
  padding: 8px;
  margin: 0;
  background: #fbf2ea;
  font-family: 'DM Sans', sans-serif;
  overflow: hidden;
}

.portal-sidebar {
  height: calc(100vh - 16px);
  border-radius: 24px;
  background: rgba(255, 250, 246, 0.92);
  border: 1px solid rgba(185, 144, 93, 0.22);
  box-shadow: 0 8px 28px rgba(120, 80, 45, 0.06);
  padding: 34px 14px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sidebar-top {
  text-align: center;
  margin-bottom: 28px;
}

.logo-crown {
  position: relative;
  font-family: 'Cormorant Garamond', serif;
  font-size: 54px;
  line-height: 0.8;
  color: #b1844f;
}

.logo-crown::before {
  content: '♛';
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 15px;
}

.logo-crown::after {
  content: '✦';
  position: absolute;
  right: -10px;
  top: 16px;
  font-size: 9px;
}

.logo-brand {
  margin-top: 12px;
  font-size: 8px;
  letter-spacing: 3px;
  color: #3a2417;
}

.logo-sub {
  margin-top: 7px;
  font-family: 'Parisienne', cursive;
  font-size: 15px;
  color: #7d6049;
}

.sidebar-nav {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 999px;
  text-decoration: none;
  color: #2b1f19;
  font-size: 12px;
  font-weight: 500;
}

.nav-item:hover,
.nav-item.active {
  background: rgba(231, 194, 181, 0.72);
}

.nav-icon {
  width: 15px;
  min-width: 15px;
  color: #a27748;
  font-size: 15px;
  display: inline-flex;
  justify-content: center;
}

.sidebar-divider {
  width: 72%;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 26px 0;
}

.sidebar-divider span {
  flex: 1;
  height: 1px;
  background: rgba(177, 132, 79, 0.28);
}

.sidebar-divider b {
  color: #b1844f;
  font-size: 8px;
}

.sidebar-tagline {
  margin-top: auto;
  text-align: center;
  color: #3a2417;
  font-family: 'Cormorant Garamond', serif;
}

.sidebar-tagline p {
  margin: 0;
  font-size: 16px;
  line-height: 1.08;
}

.sidebar-tagline div {
  margin-top: 16px;
  font-size: 16px;
  color: #b1844f;
}

.portal-hero {
  position: relative;
  min-height: calc(100vh - 16px);
  border-radius: 24px;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left center;
}

.hero-bg-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(255, 247, 242, 0.04) 0%,
    rgba(255, 247, 242, 0.1) 35%,
    rgba(255, 247, 242, 0.42) 72%,
    rgba(255, 247, 242, 0.62) 100%
  );
}

.hero-content {
  position: absolute;
  z-index: 10;
  top: 32px;
  left: 58%;
  transform: translateX(-50%);
  width: 780px;
  max-width: 72%;
  text-align: center;
}

.hero-crown {
  font-size: 24px;
  color: #b1844f;
  margin-bottom: 6px;
}

.hero-welcome {
  font-family: 'Parisienne', cursive;
  font-size: 40px;
  color: #4a3428;
  margin: 0 0 4px;
}

.hero-welcome span {
  color: #b1844f;
}

.hero-content h1 {
  margin: 0;
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(54px, 4.2vw, 78px);
  font-weight: 500;
  letter-spacing: 3px;
  color: #3a2417;
  line-height: 0.9;
}

.hero-byline {
  margin: 4px 0 10px;
  font-family: 'Parisienne', cursive;
  font-size: 32px;
  color: #7d6049;
}

.hero-rule {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  margin-top: 4px;
}

.hero-rule span {
  width: 74px;
  height: 1px;
  background: rgba(177, 132, 79, 0.34);
}

.hero-rule b {
  color: #b1844f;
  font-size: 12px;
}

.hero-message {
  position: absolute;
  z-index: 12;
  top: 355px;
  left: 70%;
  transform: translateX(-50%);
  width: 340px;
  text-align: center;
}

.hero-message p {
  margin: 0 0 18px;
  font-size: 18px;
  line-height: 1.28;
  color: #2c1f19;
  font-weight: 500;
}

.hero-cta {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  padding: 13px 48px;
  border-radius: 999px;
  background: linear-gradient(180deg, #f1cec4, #e0ad9e);
  border: 1px solid rgba(177, 132, 79, 0.28);
  text-decoration: none;
  color: #2b1a12;
  font-size: 13px;
  letter-spacing: 3px;
  font-weight: 600;
  box-shadow: 0 10px 25px rgba(165, 110, 89, 0.12);
}

.hero-worlds-bar {
  position: absolute;
  z-index: 2;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 86%;
}

.worlds-bar-container {
  display: flex;
  justify-content: space-between;
  border-radius: 24px;
  overflow: hidden;
  background: rgba(255, 250, 247, 0.86);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(177, 132, 79, 0.2);
  box-shadow: 0 10px 26px rgba(120, 80, 45, 0.07);
  max-width: 620px;
  margin: 0 auto;
}

.world-item {
  flex: 1;
  text-align: center;
  text-decoration: none;
  color: #3a2417;
  padding: 12px 7px;
  border-right: 1px solid rgba(177, 132, 79, 0.14);
}

.world-item:last-child {
  border-right: none;
}

.world-icon-large {
  width: 30px;
  height: 30px;
  margin: 0 auto 6px;
  font-size: 22px;
  color: #b1844f;
  display: grid;
  place-items: center;
}

.world-label {
  font-size: 10.5px;
  line-height: 1.15;
}

.hero-quote-bar {
  position: absolute;
  z-index: 2;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;
}

.hero-quote-bar span {
  width: 88px;
  height: 1px;
  background: rgba(177, 132, 79, 0.26);
}

.hero-quote-bar b {
  color: #b1844f;
  font-size: 9px;
}

.hero-quote-bar em {
  font-family: 'Parisienne', cursive;
  font-size: 24px;
  color: #8b623c;
}

.portal-cards {
  height: calc(100vh - 16px);
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
}

.world-card {
  position: relative;
  flex: 1;
  min-height: 0;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(177, 132, 79, 0.22);
  text-decoration: none;
  color: #2b1a12;
  box-shadow: 0 7px 22px rgba(120, 80, 45, 0.07);
}

.world-card img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.world-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(255, 247, 242, 0.96) 0%,
    rgba(255, 247, 242, 0.86) 30%,
    rgba(255, 247, 242, 0.28) 62%,
    rgba(255, 247, 242, 0.05) 100%
  );
}

.card-content {
  position: relative;
  z-index: 2;
  width: 36%;
  height: 100%;
  padding: 14px 0 14px 22px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-content h3 {
  margin: 0 0 8px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px;
  line-height: 1;
  font-weight: 500;
}

.card-content p {
  margin: 0 0 8px;
  font-size: 9.5px;
  line-height: 1.25;
  font-weight: 500;
  max-width: 160px;
}

.card-more {
  width: fit-content;
  padding: 5px 11px;
  border-radius: 999px;
  border: 1px solid rgba(177, 132, 79, 0.36);
  font-size: 7.5px;
  letter-spacing: 1.2px;
  font-weight: 600;
  background: rgba(255, 250, 247, 0.76);
  white-space: nowrap;
}

.media-card .card-content {
  width: 39%;
}

.media-card .card-content h3 {
  font-size: 21px;
  line-height: 0.95;
  max-width: 150px;
}

.media-card .card-content p {
  font-size: 9px;
  line-height: 1.22;
  max-width: 155px;
}

.media-card .card-more {
  font-size: 7px;
  padding: 5px 10px;
}

.card-arrow {
  position: absolute;
  z-index: 3;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 29px;
  color: #b1844f;
  background: rgba(255, 250, 247, 0.88);
  border: 2px solid rgba(177, 132, 79, 0.25);
}

@media (max-width: 1300px) {
  .portal-root {
    grid-template-columns: 150px minmax(0, 1fr) 470px;
  }

  .hero-content {
    left: 58%;
    width: 680px;
  }

  .hero-message {
    left: 68%;
    top: 350px;
  }

  .card-content {
    width: 40%;
  }
}

@media (max-width: 1050px) {
  .portal-root {
    grid-template-columns: 1fr;
    overflow: auto;
  }

  .portal-sidebar,
  .portal-hero,
  .portal-cards {
    height: auto;
    min-height: auto;
  }

  .portal-hero {
    min-height: 760px;
  }

  .portal-cards {
    overflow: visible;
  }

  .world-card {
    min-height: 190px;
  }
}

@media (max-width: 700px) {
  .portal-root {
    padding: 6px;
  }

  .hero-content {
    top: 70px;
    left: 50%;
    width: 86%;
    max-width: 86%;
  }

  .hero-content h1 {
    font-size: 38px;
  }

  .hero-byline,
  .hero-welcome {
    font-size: 28px;
  }

  .hero-message {
    top: 300px;
    left: 50%;
    width: 80%;
    text-align: center;
  }

  .hero-worlds-bar {
    bottom: 86px;
    width: 92%;
  }

  .worlds-bar-container {
    flex-wrap: wrap;
  }

  .world-item {
    flex: 0 0 50%;
  }

  .card-content,
  .media-card .card-content {
    width: 58%;
  }
}
</style>