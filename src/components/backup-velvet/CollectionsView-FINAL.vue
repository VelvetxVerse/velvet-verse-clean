<script setup>
import VelvetHeader from '../components/VelvetHeader.vue'
import VelvetFooter from '../components/VelvetFooter.vue'
</script>

<template>
  <main class="collections-page">

    <VelvetHeader />

    <section class="collections-hero">
      <p class="eyebrow">VELVET VERSE COLLECTIONS</p>

      <h1>
        Premade website collections
        with a luxury editorial feel.
      </h1>

      <p class="hero-text">
        Browse curated website editions designed for modern businesses
        that want a polished online presence without starting from zero.
      </p>
    </section>

    <section class="collections-grid">

      <router-link to="/paris-edition" class="collection-card">
        <img src="/cafe-tower.jpg" alt="">
        <div class="collection-copy">
          <p>FOOD & CAFÉ</p>
          <h2>Paris Edition</h2>
          <span>VIEW COLLECTION</span>
        </div>
      </router-link>

      <article class="collection-card coming">
        <div class="coming-overlay">COMING SOON</div>
        <img src="/paris-interior.png" alt="">
        <div class="collection-copy">
          <p>LUXURY STUDIO</p>
          <h2>Dubai Edition</h2>
        </div>
      </article>

      <article class="collection-card coming">
        <div class="coming-overlay">COMING SOON</div>
        <img src="/renata-profile.png" alt="">
        <div class="collection-copy">
          <p>BEAUTY & BRANDING</p>
          <h2>New York Muse</h2>
        </div>
      </article>

      <article class="collection-card coming">
        <div class="coming-overlay">COMING SOON</div>
        <img src="/santorini.jpg" alt="">
        <div class="collection-copy">
          <p>COASTAL LUXURY</p>
          <h2>Santorini Escape</h2>
        </div>
      </article>

      <article class="collection-card coming">
        <div class="coming-overlay">COMING SOON</div>
        <img src="/tokyo.jpg" alt="">
        <div class="collection-copy">
          <p>MINIMAL EDITORIAL</p>
          <h2>Tokyo Muse</h2>
        </div>
      </article>

      <article class="collection-card coming">
        <div class="coming-overlay">COMING SOON</div>
        <img src="/bangkok.jpg" alt="">
        <div class="collection-copy">
          <p>BOLD LUXURY</p>
          <h2>Bangkok Nights</h2>
        </div>
      </article>

    </section>

    <section class="how-section">
      <p class="eyebrow">HOW IT WORKS</p>

      <h2>
        A polished website launch,
        made simple.
      </h2>

      <div class="how-grid">
        <article>
          <span>01</span>
          <h3>Choose</h3>
          <p>Select the collection that best fits your brand.</p>
        </article>

        <article>
          <span>02</span>
          <h3>Send Details</h3>
          <p>Share your colors, logo, images, and content.</p>
        </article>

        <article>
          <span>03</span>
          <h3>Review</h3>
          <p>Preview the refined website before launch.</p>
        </article>

        <article>
          <span>04</span>
          <h3>Launch</h3>
          <p>Your responsive website is ready for your audience.</p>
        </article>
      </div>
    </section>

    <section class="why-section">
      <div class="why-copy">
        <p class="eyebrow">WHY PREMADE?</p>

        <h2>
          Luxury style without the full custom timeline.
        </h2>

        <p>
          The Signature Edit is designed for business owners who want
          a beautiful, professional website faster and at a more
          accessible starting point.
        </p>

        <router-link to="/paris-edition" class="dark-btn">
          Explore Paris Edition
        </router-link>
      </div>

      <div class="why-list">
        <div>Luxury-inspired visuals</div>
        <div>Mobile responsive</div>
        <div>Faster launch</div>
        <div>Affordable starting point</div>
        <div>Personalized refinements</div>
        <div>Designed for modern brands</div>
      </div>
    </section>

    <section class="faq-section">
      <p class="eyebrow">COLLECTION FAQ</p>

      <h2>
        Questions before choosing your edition.
      </h2>

      <div class="faq-list">
        <details open>
          <summary>Can I change the colors?</summary>
          <p>
            Yes. Select collections include curated color variations
            for an easy personalized experience.
          </p>
        </details>

        <details>
          <summary>Can I add my own branding?</summary>
          <p>
            Yes. Your logo, colors, images, and brand direction can
            be added to personalize the design.
          </p>
        </details>

        <details>
          <summary>Will my website work on mobile?</summary>
          <p>
            Yes. Every collection is responsive across desktop,
            tablet, and mobile screens.
          </p>
        </details>

        <details>
          <summary>Can I request custom edits?</summary>
          <p>
            Yes. Additional refinements can be requested later.
          </p>
        </details>
      </div>
    </section>

    <VelvetFooter />

  </main>
</template>

<style scoped>
.collections-page{
  min-height:100vh;
  background:#fff8f5;
  color:#2a2a2a;
  font-family:'Cormorant Garamond', serif;
}

.eyebrow{
  font-family:sans-serif;
  font-size:8px;
  letter-spacing:5px;
  text-transform:uppercase;
  color:#b19790;
  font-weight:800;
}

.collections-hero{
  padding:60px 70px 40px;
  text-align:center;
}

.collections-hero h1{
  font-size:clamp(42px, 5vw, 64px);
  line-height:.95;
  font-weight:300;
  margin:14px auto 20px;
}

.hero-text{
  max-width:680px;
  margin:auto;
  font-family:sans-serif;
  font-size:14px;
  line-height:1.8;
  color:#655956;
}

.collections-grid{
  padding:0 70px 50px;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:20px;
}

.collection-card{
  position:relative;
  text-decoration:none;
  color:#2a2a2a;
  background:#fff3ef;
  border:1px solid rgba(42,42,42,.14);
  overflow:hidden;
  transition:.35s ease;
}

.collection-card:hover{
  transform:translateY(-5px);
  box-shadow:0 14px 30px rgba(0,0,0,.05);
}

.collection-card img{
  width:100%;
  height:300px;
  object-fit:cover;
  filter:grayscale(100%);
  transition:.5s ease;
}

.collection-card:hover img{
  filter:grayscale(0%);
  transform:scale(1.03);
}

.collection-card.coming{
  opacity:.92;
}

.collection-copy{
  padding:24px 20px;
  text-align:center;
}

.collection-copy p{
  margin:0;
  font-family:sans-serif;
  font-size:8px;
  letter-spacing:4px;
  color:#b19790;
  text-transform:uppercase;
  font-weight:800;
}

.collection-copy h2{
  margin:14px 0 16px;
  font-size:30px;
  line-height:1;
  font-style:italic;
  font-weight:300;
}

.collection-copy span{
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
  backdrop-filter:blur(6px);
}

.how-section{
  padding:50px 70px;
  background:#fdf6f2;
  text-align:center;
}

.how-section h2,
.faq-section h2{
  max-width:820px;
  margin:14px auto 40px;
  font-size:clamp(30px, 4vw, 46px);
  line-height:1;
  font-weight:300;
}

.how-grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:14px;
}

.how-grid article{
  background:white;
  border:1px solid #eadad6;
  border-radius:24px;
  padding:28px 20px;
}

.how-grid span{
  font-family:sans-serif;
  font-size:8px;
  letter-spacing:4px;
  color:#c8a49b;
  font-weight:800;
}

.how-grid h3{
  margin:14px 0;
  font-size:24px;
  line-height:1;
  font-weight:300;
}

.how-grid p,
.why-copy p,
details p{
  font-family:sans-serif;
  font-size:13px;
  line-height:1.8;
  color:#655956;
}

.why-section{
  padding:50px 70px;
  display:grid;
  grid-template-columns:.9fr 1.1fr;
  gap:40px;
  align-items:center;
}

.why-copy h2{
  font-size:clamp(30px, 4vw, 46px);
  line-height:1;
  font-weight:300;
  margin:14px 0 20px;
}

.why-copy p{
  margin-bottom:24px;
}

.dark-btn{
  display:inline-block;
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

.why-list{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:12px;
}

.why-list div{
  background:white;
  border:1px solid #eadad6;
  border-radius:999px;
  padding:16px 18px;
  font-family:sans-serif;
  font-size:8px;
  letter-spacing:2px;
  text-transform:uppercase;
  font-weight:800;
  color:#655956;
}

.faq-section{
  padding:50px 70px;
  background:#fdf6f2;
  text-align:center;
}

.faq-list{
  max-width:820px;
  margin:auto;
  text-align:left;
}

details{
  background:white;
  border:1px solid #eadad6;
  border-radius:18px;
  margin-bottom:10px;
  padding:18px 22px;
}

summary{
  cursor:pointer;
  font-family:sans-serif;
  font-size:10px;
  letter-spacing:2px;
  text-transform:uppercase;
  font-weight:800;
  color:#2a2a2a;
}

details p{
  margin-top:14px;
}

@media(max-width:900px){
  .collections-grid,
  .how-grid,
  .why-section,
  .why-list{
    grid-template-columns:1fr;
  }

  .collections-hero,
  .collections-grid,
  .how-section,
  .why-section,
  .faq-section{
    padding-left:24px;
    padding-right:24px;
  }

  .collections-hero,
  .how-section,
  .why-section,
  .faq-section{
    padding-top:40px;
    padding-bottom:40px;
  }

  .collection-card img{
    height:260px;
  }
}
</style>