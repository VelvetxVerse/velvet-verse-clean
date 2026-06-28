<template>
  <main class="links-page">
    <section class="hero">
      <div class="hero-overlay"></div>

      <div class="hero-content">
        <h1>Renata Oliveira</h1>
        <p>BEAUTY • TRAVEL • LIFESTYLE</p>

        <div class="socials">
          <a href="#">Instagram</a>
          <a href="#">TikTok</a>
          <a href="#">Amazon</a>
          <a href="#">YouTube</a>
        </div>
      </div>
    </section>

    <section class="content">
      <aside class="profile-card">
        <img src="/images/renata-profile.jpg" alt="Renata Oliveira" class="avatar" />

        <h2>@renataoliveiraofficial</h2>

        <div class="links">
          <a v-for="item in sideLinks" :key="item.title" :href="item.url" class="side-link">
            <span class="icon">{{ item.icon }}</span>
            <span>
              <strong>{{ item.title }}</strong>
              <small>{{ item.subtitle }}</small>
            </span>
            <b>›</b>
          </a>
        </div>
      </aside>

      <section class="feature-cards">
        <a v-for="card in cards" :key="card.title" :href="card.url" class="feature-card">
          <img :src="card.image" :alt="card.title" />

          <div>
            <h3>{{ card.title }}</h3>
            <p>{{ card.subtitle }}</p>
            <span>→</span>
          </div>
        </a>

        <div class="thank-you">
          <p>Thank you for being here!</p>
          <strong>♡ xo Renata</strong>
        </div>
      </section>
    </section>
  </main>
</template>

<script setup>
const sideLinks = [
  {
    title: 'My Fave Things',
    subtitle: 'All my favorite finds',
    icon: '♡',
    url: '#'
  },
  {
    title: 'Expedia Hotels',
    subtitle: 'My favorite places to stay',
    icon: '✈',
    url: '#'
  },
  {
    title: 'CapCut Templates',
    subtitle: 'Edit like me',
    icon: '✂',
    url: '#'
  },
  {
    title: 'Shop My Recent Post',
    subtitle: 'Links from my latest posts',
    icon: '🛍',
    url: '#'
  },
  {
    title: 'Amazon Storefront',
    subtitle: 'My favorite finds',
    icon: 'a',
    url: '#'
  },
  {
    title: 'Travel With Me',
    subtitle: 'Destinations & guides',
    icon: '◎',
    url: '#'
  },
  {
    title: 'Exclusive Content',
    subtitle: 'Behind the scenes & more',
    icon: '✦',
    url: '#'
  }
]

const cards = [
  {
    title: 'Shop My Recent Post',
    subtitle: 'All the links from my latest posts',
    image: '/images/shop-post.jpg',
    url: '#'
  },
  {
    title: 'Amazon Storefront',
    subtitle: 'My favorite finds, all in one place',
    image: '/images/amazon-finds.jpg',
    url: '#'
  },
  {
    title: 'Travel With Me',
    subtitle: 'Destinations, guides & travel favorites',
    image: '/images/travel.jpg',
    url: '#'
  }
]
</script>

<style scoped>
.links-page {
  min-height: 100vh;
  background: #fffaf7;
  color: #2c211b;
  font-family: Inter, sans-serif;
}

.hero {
  min-height: 430px;
  background-image: url('/images/renata-hero.jpg');
  background-size: cover;
  background-position: center top;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  text-align: center;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 35%, #fffaf7 95%);
}

.hero-content {
  position: relative;
  padding: 0 20px 45px;
}

.hero h1 {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(3rem, 8vw, 6.5rem);
  font-weight: 400;
  color: #7a553e;
  margin: 0;
}

.hero p {
  letter-spacing: 0.35em;
  font-size: 0.95rem;
  margin: 10px 0 24px;
}

.socials {
  display: flex;
  justify-content: center;
  gap: 26px;
  flex-wrap: wrap;
}

.socials a {
  color: #b58b63;
  text-decoration: none;
  font-weight: 600;
}

.content {
  max-width: 1180px;
  margin: 0 auto;
  padding: 45px 24px 80px;
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 46px;
}

.profile-card {
  text-align: center;
}

.avatar {
  width: 116px;
  height: 116px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 16px;
}

.profile-card h2 {
  font-size: 1rem;
  margin-bottom: 22px;
}

.links {
  display: grid;
  gap: 13px;
}

.side-link {
  display: grid;
  grid-template-columns: 48px 1fr 20px;
  align-items: center;
  text-align: left;
  padding: 14px 18px;
  border: 1px solid #e5d5ca;
  border-radius: 18px;
  background: #fffdfb;
  color: #2c211b;
  text-decoration: none;
  box-shadow: 0 12px 35px rgba(116, 78, 50, 0.06);
}

.icon {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #d8ad9d;
  color: white;
  display: grid;
  place-items: center;
  font-weight: 600;
}

.side-link strong {
  display: block;
  font-family: "Cormorant Garamond", serif;
  font-size: 1.25rem;
}

.side-link small {
  color: #6f625a;
}

.side-link b {
  font-size: 1.8rem;
  color: #9b745c;
  font-weight: 300;
}

.feature-cards {
  display: grid;
  gap: 22px;
}

.feature-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 230px;
  border: 1px solid #e5d5ca;
  border-radius: 18px;
  overflow: hidden;
  background: #fffdfb;
  color: #2c211b;
  text-decoration: none;
  box-shadow: 0 18px 45px rgba(116, 78, 50, 0.07);
}

.feature-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.feature-card div {
  padding: 34px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.feature-card h3 {
  font-family: "Cormorant Garamond", serif;
  font-size: 2.4rem;
  font-weight: 400;
  margin: 0 0 12px;
}

.feature-card p {
  margin: 0;
  line-height: 1.5;
}

.feature-card span {
  margin-top: 24px;
  width: 44px;
  height: 44px;
  border: 1px solid #b58b63;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #b58b63;
  font-size: 1.5rem;
}

.thank-you {
  border: 1px solid #e5d5ca;
  border-radius: 18px;
  padding: 45px;
  text-align: center;
  background: linear-gradient(135deg, #fffdfb, #faeee8);
  color: #b58b63;
}

.thank-you p {
  font-family: "Cormorant Garamond", serif;
  font-size: 2rem;
  margin: 0 0 10px;
}

@media (max-width: 850px) {
  .content {
    grid-template-columns: 1fr;
    padding: 30px 16px 60px;
  }

  .feature-card {
    grid-template-columns: 1fr;
  }

  .feature-card img {
    height: 220px;
  }

  .hero {
    min-height: 360px;
  }

  .hero p {
    letter-spacing: 0.22em;
  }
}
</style>