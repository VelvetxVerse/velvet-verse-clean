<template>
  <main class="links-page">
    <section class="hero">
      <img class="hero-image" src="/mk1.png" alt="Renata Oliveira" />
      <div class="hero-overlay"></div>

      <div class="hero-content">
        <p class="eyebrow">BEAUTY • TRAVEL • LIFESTYLE</p>
        <h1>Renata Oliveira</h1>
        <div class="socials">
          <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank">
            {{ social.icon }}
          </a>
        </div>
      </div>
    </section>

    <section class="content">
      <aside class="profile">
        <img class="avatar" src="/mk3.png" alt="Renata Oliveira" />
        <h2>@renataoliveiraofficial</h2>
        <p class="bio">Curated beauty, travel, lifestyle and favorite finds.</p>

        <div class="links">
          <a
            v-for="link in links"
            :key="link.title"
            class="link-card"
            :href="link.url"
            target="_blank"
          >
            <span class="icon">{{ link.icon }}</span>

            <span class="link-copy">
              <strong>{{ link.title }}</strong>
              <small>{{ link.subtitle }}</small>
            </span>

            <span class="arrow">›</span>
          </a>
        </div>
      </aside>

      <section class="features">
        <a
          v-for="card in cards"
          :key="card.title"
          class="feature-card"
          :href="card.url"
          target="_blank"
        >
          <img :src="card.image" :alt="card.title" />

          <div class="feature-copy">
            <p>{{ card.label }}</p>
            <h3>{{ card.title }}</h3>
            <span>Explore →</span>
          </div>
        </a>

        <div class="signature">
          <p>Thank you for being here</p>
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
    name: 'Email',
    icon: '✉',
    url: 'mailto:welovejetlag@gmail.com'
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
    subtitle: 'Hotels I love & recommend',
    icon: '✈',
    url: '#'
  },
  {
    title: 'CapCut Templates',
    subtitle: 'Edit your videos like me',
    icon: '✂',
    url: '#'
  },
  {
    title: 'Amazon Storefront',
    subtitle: 'Shop my favorite finds',
    icon: 'a',
    url: 'https://www.amazon.com/shop/renataoliveiraofficial'
  },
  {
    title: 'Shop My Recent Post',
    subtitle: 'Links from my latest content',
    icon: '⌑',
    url: '#'
  },
  {
    title: 'Travel With Me',
    subtitle: 'Guides, hotels & inspiration',
    icon: '◎',
    url: '#'
  },
  {
    title: 'Work With Me',
    subtitle: 'PR, brands & collaborations',
    icon: '✉',
    url: 'mailto:welovejetlag@gmail.com'
  }
]

const cards = [
  {
    label: 'Latest Finds',
    title: 'Shop My Recent Post',
    image: '/images/shop-post.jpg',
    url: '#'
  },
  {
    label: 'Curated Favorites',
    title: 'Amazon Storefront',
    image: '/images/amazon-finds.jpg',
    url: 'https://www.amazon.com/shop/renataoliveiraofficial'
  },
  {
    label: 'Travel Edit',
    title: 'Hotels & Destinations',
    image: '/images/travel.jpg',
    url: '#'
  }
]
</script>

<style scoped>
.links-page {
  min-height: 100vh;
  background: #fffaf7;
  color: #2f2520;
  font-family: 'Inter', sans-serif;
}

/* HERO */
.hero {
  position: relative;
  height: 430px;
  overflow: hidden;
  background: #f8eee8;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 18%;
  display: block;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to bottom, rgba(255, 250, 247, 0.05), #fffaf7 98%),
    linear-gradient(to right, rgba(255, 250, 247, 0.2), rgba(255, 250, 247, 0.65));
}

.hero-content {
  position: absolute;
  right: 9%;
  bottom: 58px;
  max-width: 420px;
  text-align: center;
}

.eyebrow {
  margin: 0 0 8px;
  color: #9f7b64;
  font-size: 0.68rem;
  letter-spacing: 0.36em;
  font-weight: 500;
}

.hero h1 {
  margin: 0;
  font-family: 'Great Vibes', cursive;
  font-size: clamp(3.8rem, 7vw, 5.8rem);
  font-weight: 400;
  color: #7c563f;
  line-height: 0.9;
}

.socials {
  margin-top: 22px;
  display: flex;
  justify-content: center;
  gap: 24px;
}

.socials a {
  color: #b58c6c;
  font-size: 1.35rem;
  text-decoration: none;
  transition: 0.25s ease;
}

.socials a:hover {
  color: #7c563f;
  transform: translateY(-2px);
}

/* CONTENT */
.content {
  max-width: 1040px;
  margin: 0 auto;
  padding: 76px 28px 90px;
  display: grid;
  grid-template-columns: 330px 1fr;
  gap: 78px;
}

.profile {
  text-align: center;
}

.avatar {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 14px;
  box-shadow: 0 16px 35px rgba(101, 70, 48, 0.12);
}

.profile h2 {
  margin: 0;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.35rem;
  font-weight: 400;
  color: #5c4032;
}

.bio {
  max-width: 250px;
  margin: 8px auto 26px;
  font-size: 0.82rem;
  line-height: 1.6;
  color: #7b6c64;
}

.links {
  display: grid;
  gap: 14px;
}

.link-card {
  display: grid;
  grid-template-columns: 36px 1fr 16px;
  align-items: center;
  gap: 12px;
  padding: 11px 14px;
  min-height: 58px;
  text-align: left;
  text-decoration: none;
  color: #2f2520;
  background: rgba(255, 253, 251, 0.86);
  border: 1px solid #ead9cf;
  border-radius: 15px;
  box-shadow: 0 12px 28px rgba(101, 70, 48, 0.05);
  transition: 0.25s ease;
}

.link-card:hover {
  transform: translateY(-3px);
  border-color: #d1aa94;
  box-shadow: 0 18px 38px rgba(101, 70, 48, 0.11);
}

.icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: #d6aa98;
  color: #fff;
  font-size: 0.95rem;
}

.link-copy strong {
  display: block;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.12rem;
  font-weight: 500;
  color: #4a342b;
}

.link-copy small {
  display: block;
  margin-top: 1px;
  font-size: 0.74rem;
  color: #83736b;
}

.arrow {
  color: #a87f63;
  font-size: 1.35rem;
  font-weight: 300;
}

/* FEATURE CARDS */
.features {
  display: grid;
  gap: 26px;
}

.feature-card {
  min-height: 180px;
  display: grid;
  grid-template-columns: 0.92fr 1.08fr;
  overflow: hidden;
  text-decoration: none;
  color: #2f2520;
  background: #fffdfb;
  border: 1px solid #ead9cf;
  border-radius: 18px;
  box-shadow: 0 18px 42px rgba(101, 70, 48, 0.07);
  transition: 0.25s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  border-color: #d1aa94;
  box-shadow: 0 24px 52px rgba(101, 70, 48, 0.12);
}

.feature-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.feature-copy {
  padding: 28px 34px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.feature-copy p {
  margin: 0 0 8px;
  color: #b58c6c;
  font-size: 0.68rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
}

.feature-copy h3 {
  margin: 0;
  font-family: 'Cormorant Garamond', serif;
  font-size: 2rem;
  font-weight: 400;
  line-height: 1;
  color: #5c4032;
}

.feature-copy span {
  margin-top: 22px;
  color: #9f7358;
  font-size: 0.86rem;
  letter-spacing: 0.08em;
}

.signature {
  padding: 38px 24px;
  text-align: center;
  border-radius: 18px;
  border: 1px solid #ead9cf;
  background: linear-gradient(135deg, #fffdfb, #faeee8);
}

.signature p {
  margin: 0 0 6px;
  font-family: 'Great Vibes', cursive;
  font-size: 2.5rem;
  color: #b58c6c;
}

.signature strong {
  font-family: 'Great Vibes', cursive;
  font-size: 1.9rem;
  font-weight: 400;
  color: #7c563f;
}

/* MOBILE */
@media (max-width: 850px) {
  .hero {
    height: 420px;
  }

  .hero-image {
    object-position: center top;
  }

  .hero-content {
    right: auto;
    left: 50%;
    bottom: 42px;
    transform: translateX(-50%);
    width: 100%;
    padding: 0 20px;
  }

  .hero h1 {
    font-size: 4.1rem;
  }

  .eyebrow {
    font-size: 0.62rem;
    letter-spacing: 0.24em;
  }

  .content {
    grid-template-columns: 1fr;
    padding: 54px 18px 70px;
    gap: 48px;
  }

  .profile {
    max-width: 370px;
    margin: 0 auto;
    width: 100%;
  }

  .feature-card {
    grid-template-columns: 1fr;
  }

  .feature-card img {
    height: 190px;
  }

  .feature-copy {
    padding: 28px;
  }

  .feature-copy h3 {
    font-size: 1.9rem;
  }
}
</style>
