<script setup>
import VelvetHeader from '../components/VelvetHeader.vue'
import VelvetFooter from '../components/VelvetFooter.vue'
</script>

<template>
  <main class="home-page">
    <VelvetHeader />

    <section class="hero">
      <div class="hero-left">
        <p class="eyebrow">VELVET VERSE</p>

        <h1>
          Feminine websites for modern luxury brands.
        </h1>

        <p class="intro">
          Luxury-inspired websites for creators, beauty brands, cafés,
          and modern women building intentional businesses.
        </p>

        <div class="hero-buttons">
          <router-link to="/collections" class="dark-btn">
            View Collections
          </router-link>

          <router-link to="/presentation" class="text-btn">
            View Presentation
          </router-link>
        </div>
      </div>

      <div class="hero-right">
        <img src="/renata-profile.png" alt="">
      </div>
    </section>

    <section class="services-section">
      <p class="eyebrow">WHY CLIENTS CHOOSE VELVET VERSE</p>

      <h2>
        Elegant strategy meets modern web design.
      </h2>

      <div class="services-grid">
        <article class="service-card">
          <span>01</span>
          <h3>Luxury Design</h3>
          <p>
            Editorial-inspired layouts designed to feel elevated,
            intentional, and visually unforgettable.
          </p>
        </article>

        <article class="service-card">
          <span>02</span>
          <h3>Responsive Experience</h3>
          <p>
            Beautifully optimized websites that work seamlessly
            across desktop, tablet, and mobile devices.
          </p>
        </article>

        <article class="service-card">
          <span>03</span>
          <h3>Smooth Client Process</h3>
          <p>
            Clear communication, creative direction, revisions,
            and launch support.
          </p>
        </article>
      </div>
    </section>

    <section class="archive-section">
      <p class="eyebrow">THE COLLECTION</p>

      <h2>The Archive</h2>

      <div class="archive-grid">
        <router-link to="/paris-edition" class="archive-card">
          <img src="/cafe-tower.jpg" alt="">
          <div class="archive-copy">
            <p>FOOD & CAFÉ</p>
            <h3>Paris Edition</h3>
            <span>View Collection</span>
          </div>
        </router-link>

        <article class="archive-card coming">
          <div class="coming-overlay">
            COMING SOON
          </div>

          <img src="/demodubai.png" alt="">
          <div class="archive-copy">
            <p>LUXURY STUDIO</p>
            <h3>Dubai Edition</h3>
          </div>
        </article>

        <article class="archive-card coming">
          <div class="coming-overlay">
            COMING SOON
          </div>

         <img src="/nyc-demo.png" alt="">
          <div class="archive-copy">
            <p>BEAUTY & BRANDING</p>
            <h3>New York Muse</h3>
          </div>
        </article>
      </div>
    </section>

    <section class="testimonial-section">
      <p class="eyebrow">CLIENT EXPERIENCE</p>

      <h2>
        Designed to feel effortless,
        elegant, and unforgettable.
      </h2>

      <div class="testimonial-grid">
        <article class="testimonial-card">
          <p>
            “The entire experience felt polished and organized.
            Every detail reflected the aesthetic of my brand.”
          </p>
          <span>— Luxury Café Client</span>
        </article>

        <article class="testimonial-card">
          <p>
            “Finally a website that feels feminine, modern,
            and professional without looking generic.”
          </p>
          <span>— Beauty Studio Founder</span>
        </article>

        <article class="testimonial-card">
          <p>
            “Velvet Verse made the process simple,
            collaborative, and visually stunning.”
          </p>
          <span>— Boutique Brand Owner</span>
        </article>
      </div>
    </section>

    <VelvetFooter />
  </main>
</template>

<style scoped>
.home-page{
  background:#fff8f5;
  color:#2a2a2a;
  font-family:'Cormorant Garamond', serif;
}

.eyebrow{
  font-family:sans-serif;
  font-size:8px;
  letter-spacing:5px;
  color:#b9857b;
  text-transform:uppercase;
  font-weight:800;
}

/* HERO */

.hero{
  max-width:1180px;
  margin:auto;
  min-height:620px;
  padding:50px 50px 60px;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:48px;
  align-items:center;
}

.hero-left h1{
  font-size:clamp(42px,5vw,66px);
  line-height:.95;
  font-weight:300;
  margin:16px 0;
}

.intro{
  max-width:520px;
  font-family:sans-serif;
  font-size:13px;
  line-height:1.9;
  color:#655956;
}

.hero-buttons{
  display:flex;
  gap:16px;
  margin-top:28px;
}

.dark-btn{
  background:#1f1b1b;
  color:white;
  padding:14px 22px;
  border-radius:999px;
  text-decoration:none;
  font-family:sans-serif;
  font-size:8px;
  letter-spacing:3px;
  text-transform:uppercase;
  font-weight:800;
}

.text-btn{
  text-decoration:none;
  color:#1f1b1b;
  border-bottom:1px solid #1f1b1b;
  padding:14px 0;
  font-family:sans-serif;
  font-size:8px;
  letter-spacing:3px;
  text-transform:uppercase;
  font-weight:800;
}

.hero-right{
  display:flex;
  justify-content:center;
}

.hero-right img{
  width:100%;
  max-width:430px;
  height:520px;
  object-fit:cover;
  border-radius:45% 45% 0 0;
}

/* SERVICES */

.services-section,
.testimonial-section{
  padding:55px 50px;
  background:#fdf6f2;
  text-align:center;
}

.services-section h2,
.testimonial-section h2{
  font-size:clamp(32px,4vw,48px);
  line-height:1;
  margin:14px auto 36px;
  font-weight:300;
  max-width:760px;
}

.services-grid,
.testimonial-grid{
  max-width:1040px;
  margin:auto;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:18px;
}

.service-card,
.testimonial-card{
  padding:28px 24px;
  background:white;
  border:1px solid #eadad6;
  border-radius:22px;
  transition:.3s ease;
  box-shadow:0 8px 24px rgba(0,0,0,.025);
}

.service-card:hover,
.testimonial-card:hover{
  transform:translateY(-4px);
}

.service-card span,
.testimonial-card span{
  font-family:sans-serif;
  font-size:8px;
  letter-spacing:4px;
  color:#b9857b;
  font-weight:800;
}

.service-card h3{
  margin:14px 0;
  font-size:28px;
  font-weight:300;
}

.service-card p,
.testimonial-card p{
  font-family:sans-serif;
  font-size:12px;
  line-height:1.8;
  color:#655956;
}

/* ARCHIVE */

.archive-section{
  padding:55px 50px;
  text-align:center;
}

.archive-section h2{
  font-size:clamp(34px,4vw,50px);
  margin:10px 0 34px;
  font-style:italic;
  font-weight:300;
}

.archive-grid{
  max-width:1040px;
  margin:auto;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:20px;
}

.archive-card{
  position:relative;
  text-decoration:none;
  color:#2a2a2a;
  background:#fff3ef;
  border:1px solid rgba(42,42,42,.14);
  overflow:hidden;
  transition:.35s ease;
}

.archive-card:hover{
  transform:translateY(-5px);
  box-shadow:0 14px 30px rgba(0,0,0,.05);
}

.archive-card img{
  width:100%;
  height:300px;
  object-fit:cover;
  filter:grayscale(100%);
  transition:.5s ease;
}

.archive-card:hover img{
  filter:grayscale(0%);
  transform:scale(1.03);
}

.archive-card.coming{
  opacity:.92;
}

.archive-copy{
  padding:24px 20px;
  text-align:center;
}

.archive-copy p{
  margin:0;
  font-family:sans-serif;
  font-size:8px;
  letter-spacing:4px;
  color:#b9857b;
  text-transform:uppercase;
  font-weight:800;
}

.archive-copy h3{
  font-size:30px;
  margin:14px 0 16px;
  font-style:italic;
  font-weight:300;
  line-height:1;
}

.archive-copy span{
  font-family:sans-serif;
  font-size:8px;
  letter-spacing:3px;
  text-transform:uppercase;
  border-bottom:1px solid #2a2a2a;
}

.coming-overlay{
  position:absolute;
  top:16px;
  left:16px;
  z-index:10;
  background:rgba(0,0,0,.7);
  color:white;
  padding:10px 14px;
  border-radius:999px;
  font-family:sans-serif;
  font-size:7px;
  letter-spacing:3px;
  text-transform:uppercase;
  font-weight:800;
}

/* MOBILE */

@media(max-width:900px){
  .hero,
  .services-grid,
  .archive-grid,
  .testimonial-grid{
    grid-template-columns:1fr;
  }

  .hero,
  .services-section,
  .archive-section,
  .testimonial-section{
    padding:40px 24px;
  }

  .hero{
    min-height:auto;
  }

  .hero-buttons{
    flex-direction:column;
    align-items:flex-start;
  }

  .hero-right img{
    height:420px;
  }

  .archive-card img{
    height:260px;
  }
}
</style>