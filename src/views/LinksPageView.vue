<template>
  <main class="links-page">
    <section class="hero">
      <img class="hero-image" src="/images/renata-hero.jpg" alt="Renata Oliveira" />
      <div class="hero-overlay"></div>

      <div class="hero-content">
        <h1>Renata Oliveira</h1>
        <p>BEAUTY • TRAVEL • LIFESTYLE</p>

        <div class="socials">
          <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank">
            {{ social.icon }}
          </a>
        </div>
      </div>
    </section>

    <section class="page-content">
      <aside class="link-column">
        <img class="avatar" src="/images/renata-profile.jpg" alt="Renata Oliveira" />
        <h2>@renataoliveiraofficial</h2>

        <a
          v-for="link in links"
          :key="link.title"
          class="link-button"
          :href="link.url"
          target="_blank"
        >
          <span class="icon">{{ link.icon }}</span>

          <span class="text">
            <strong>{{ link.title }}</strong>
            <small>{{ link.subtitle }}</small>
          </span>

          <span class="arrow">›</span>
        </a>

        <div class="bottom-socials">
          <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank">
            {{ social.icon }}
          </a>
        </div>
      </aside>

      <section class="cards-column">
        <a
          v-for="card in cards"
          :key="card.title"
          class="feature-card"
          :href="card.url"
          target="_blank"
        >
          <img :src="card.image" :alt="card.title" />

          <div class="feature-text">
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
const socials = [
  {
    name: 'Instagram',
    icon: '◎',
    url: 'https://www.instagram.com/renataoliveiraofficial'
  },
  {
    name: 'TikTok',
    icon: '♪',
    url: 'https://www.tiktok.com/@renataoliveiraofficial'
  },
  {
    name: 'Amazon',
    icon: 'a',
    url: 'https://www.amazon.com/shop/renataoliveiraofficial'
  },
  {
    name: 'YouTube',
    icon: '▶',
    url: 'https://www.youtube.com/'
  }
]

const links = [
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
    icon: '⌑',
    url: '#'
  },
  {
    title: 'Amazon Storefront',
    subtitle: 'My favorite finds',
    icon: 'a',
    url: 'https://www.amazon.com/shop/renataoliveiraofficial'
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
  },
  {
    title: 'Work With Me',
    subtitle: 'PR, brands & collaborations',
    icon: '✉',
    url: 'mailto:welovejetlag@gmail.com'
  },
  {
    title: 'Follow Me on Instagram',
    subtitle: '@renataoliveiraofficial',
    icon: '◎',
    url: 'https://www.instagram.com/renataoliveiraofficial'
  },
  {
    title: 'Follow Me on TikTok',
    subtitle: '@renataoliveiraofficial',
    icon: '♪',
    url: 'https://www.tiktok.com/@renataoliveiraofficial'
  },
  {
    title: 'Follow Me on YouTube',
    subtitle: 'Renata Oliveira',
    icon: '▶',
    url: 'https://www.youtube.com/'
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
    url: 'https://www.amazon.com/shop/renataoliveiraofficial'
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
  color: #2a211d;
  font-family: 'Inter', sans-serif;
}

.hero {
  position: relative;
  height: 620px;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(255, 250, 247, 0) 35%,
    rgba(255, 250, 247, 0.65) 70%,
    #fffaf7 100%
  );
}

.hero-content {
  position: absolute;
  left: 50%;
  bottom: 55px;
  transform: translateX(-50%);
  width: 100%;
  padding: 0 20px;
  text-align: center;
}

.hero-content h1 {
  font-family: 'Great Vibes', cursive;
  font-size: clamp(4.8rem, 10vw, 8rem);
  font-weight: 400;
  color: #7c563f;
  margin: 0;
}

.hero-content p {
  margin: 8px 0 26px;
  letter-spacing: 0.35em;
  font-size: 0.95rem;
  color: #221b18;
}

.socials,
.bottom-socials {
  display: flex;
  justify-content: center;
  gap: 34px;
}

.socials a,
.bottom-socials a {
  color: #b88d68;
  font-size: 2rem;
  text-decoration: none;
  transition: 0.3s ease;
}

.socials a:hover,
.bottom-socials a:hover {
  color: #7c563f;
  transform: translateY(-3px);
}

.page-content {
  max-width: 1180px;
  margin: 0 auto;
  padding: 30px 24px 80px;
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 48px;
}

.link-column {
  text-align: center;
}

.avatar {
  width: 112px;
  height: 112px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 14px;
  box-shadow: 0 14px 35px rgba(105, 73, 50, 0.12);
}

.link-column h2 {
  font-size: 1rem;
  margin: 0 0 22px;
}

.link-button {
  display: grid;
  grid-template-columns: 48px 1fr 20px;
  gap: 12px;
  align-items: center;
  text-align: left;
  background: #fffdfb;
  border: 1px solid #e6d5ca;
  border-radius: 18px;
  padding: 13px 18px;
  margin-bottom: 12px;
  color: #2a211d;
  text-decoration: none;
  box-shadow: 0 14px 35px rgba(105, 73, 50, 0.06);
  transition: 0.3s ease;
}

.link-button:hover {
  transform: translateY(-3px);
  border-color: #cda18c;
  box-shadow: 0 18px 45px rgba(105, 73, 50, 0.12);
}

.icon {
  width: 39px;
  height: 39px;
  border-radius: 50%;
  background: #d7aa99;
  color: white;
  display: grid;
  place-items: center;
  font-size: 1.3rem;
}

.text strong {
  display: block;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.28rem;
  font-weight: 500;
}

.text small {
  color: #6f625b;
  font-size: 0.92rem;
}

.arrow {
  color: #8a634e;
  font-size: 1.8rem;
  font-weight: 300;
}

.bottom-socials {
  margin-top: 24px;
}

.cards-column {
  display: grid;
  gap: 22px;
}

.feature-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 230px;
  overflow: hidden;
  border-radius: 18px;
  border: 1px solid #e6d5ca;
  background: #fffdfb;
  color: #2a211d;
  text-decoration: none;
  box-shadow: 0 18px 45px rgba(105, 73, 50, 0.07);
  transition: 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  border-color: #cda18c;
}

.feature-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.feature-text {
  padding: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.feature-text h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2.5rem;
  font-weight: 400;
  margin: 0 0 14px;
}

.feature-text p {
  margin: 0;
  line-height: 1.5;
}

.feature-text span {
  margin-top: 24px;
  width: 46px;
  height: 46px;
  border: 1px solid #b98d67;
  color: #b98d67;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 1.4rem;
}

.thank-you {
  padding: 48px 24px;
  text-align: center;
  border-radius: 18px;
  border: 1px solid #e6d5ca;
  background: linear-gradient(135deg, #fffdfb, #faeee8);
  color: #b98d67;
}

.thank-you p {
  font-family: 'Great Vibes', cursive;
  font-size: 3rem;
  margin: 0 0 8px;
}

.thank-you strong {
  font-family: 'Great Vibes', cursive;
  font-size: 2.2rem;
  font-weight: 400;
}

@media (max-width: 850px) {
  .hero {
    height: 520px;
  }

  .hero-content h1 {
    font-size: 4.4rem;
  }

  .hero-content p {
    letter-spacing: 0.18em;
    font-size: 0.78rem;
  }

  .page-content {
    grid-template-columns: 1fr;
    padding: 20px 16px 60px;
    gap: 30px;
  }

  .feature-card {
    grid-template-columns: 1fr;
  }

  .feature-card img {
    height: 220px;
  }

  .feature-text h3 {
    font-size: 2.2rem;
  }
}
</style>