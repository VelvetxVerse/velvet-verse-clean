<script setup>
import VelvetHeader from '../components/VelvetHeader.vue'
import VelvetFooter from '../components/VelvetFooter.vue'
</script>

<template>
  <main class="shop-page">
    <VelvetHeader />

    <section class="shop-hero">
      <p class="eyebrow">VELVET VERSE SHOP</p>

      <h1>
        Elegant website collections
        designed for modern brands.
      </h1>

      <p>
        Luxury-inspired premade websites created for beauty brands,
        cafés, boutiques, influencers, makeup artists,
        and feminine businesses.
      </p>
    </section>

    <section class="featured-product">
      <div class="product-image">
        <img src="/cafe-tower.jpg" alt="">
      </div>

      <div class="product-copy">
        <p class="eyebrow">AVAILABLE NOW</p>

        <h2>Paris Edition</h2>

        <p>
          A romantic, luxury-inspired premade website collection designed for
          cafés, bakeries, beauty brands, boutiques, influencers,
          and modern feminine businesses.
        </p>

        <div class="price">Starting at $500</div>

        <div class="product-actions">
          <router-link to="/paris-edition" class="dark-btn">
            View Details
          </router-link>

          <router-link to="/paris-demo" class="outline-btn">
            View Demo
          </router-link>
        </div>
      </div>
    </section>

    <section class="addons-section">
      <p class="eyebrow">SIGNATURE ENHANCEMENTS</p>

      <h2>Add-ons available to personalize your experience.</h2>

      <div class="addons-grid">
        <article>
          <div class="addon-icon">⌘</div>
          <span>+$80</span>
          <h3>Additional<br>Pages</h3>
        </article>

        <article>
          <div class="addon-icon">◌</div>
          <span>+$60</span>
          <h3>Custom Color<br>Palette</h3>
        </article>

        <article>
          <div class="addon-icon">✦</div>
          <span>+$90</span>
          <h3>Luxury<br>Animations</h3>
        </article>

        <article>
          <div class="addon-icon">⌁</div>
          <span>+$120</span>
          <h3>Priority<br>Launch</h3>
        </article>

        <article>
          <div class="addon-icon">▯</div>
          <span>+$50</span>
          <h3>Mobile<br>Refinements</h3>
        </article>

        <article>
          <div class="addon-icon">◎</div>
          <span>+$40</span>
          <h3>Instagram<br>Integration</h3>
        </article>
      </div>
    </section>

    <section class="coming-section">
      <p class="eyebrow">COMING SOON</p>

      <h2>More collections are being designed.</h2>

      <div class="coming-grid">
        <article>
          <img src="/paris-interior.png" alt="">
          <span>COMING SOON</span>
          <h3>Dubai Edition</h3>
        </article>

        <article>
          <img src="/nyc-demo.png" alt="">
          <span>COMING SOON</span>
          <h3>New York Muse</h3>
        </article>

        <article>
          <img src="/santorini.jpg" alt="">
          <span>COMING SOON</span>
          <h3>Santorini Escape</h3>
        </article>

        <article>
          <img src="/tokyo.jpg" alt="">
          <span>COMING SOON</span>
          <h3>Tokyo Muse</h3>
        </article>

        <article>
          <img src="/bangkok.jpg" alt="">
          <span>COMING SOON</span>
          <h3>Bangkok Nights</h3>
        </article>
      </div>
    </section>

    <section class="inquiry-section">
      <p class="eyebrow">REQUEST THIS COLLECTION</p>

      <h2>Interested in Paris Edition?</h2>

      <p>
        For now, Velvet Verse uses a simple inquiry process instead of checkout.
        Send your project details, preferred collection, and customization needs.
      </p>

      <form class="inquiry-form">
        <input type="text" placeholder="Your name">
        <input type="text" placeholder="Business name">
        <input type="email" placeholder="Email address">

        <select>
          <option>Paris Edition — Starting at $500</option>
          <option>Paris Edition + Custom Color Palette</option>
          <option>Paris Edition + Additional Pages</option>
          <option>Paris Edition + Curated Refinements</option>
        </select>

        <textarea placeholder="Tell me about your brand, colors, images, and customizations you want."></textarea>

        <button type="button">Request This Collection</button>
      </form>

      <p class="email-note">
        Prefer email? Contact:
        <a href="mailto:VelvetVerse@velvetxverse.com">
          VelvetVerse@velvetxverse.com
        </a>
      </p>
    </section>

    <VelvetFooter />
  </main>
</template>

<style scoped>
.shop-page{
  min-height:100vh;
  background:#fff8f5;
  color:#2a2a2a;
  font-family:'Cormorant Garamond', serif;
}

.eyebrow{
  font-family:sans-serif;
  font-size:9px;
  letter-spacing:5px;
  text-transform:uppercase;
  color:#b19790;
  font-weight:800;
}

.shop-hero{
  max-width:980px;
  margin:auto;
  padding:70px 24px 50px;
  text-align:center;
}

.shop-hero h1{
  font-size:clamp(42px, 5vw, 70px);
  line-height:.95;
  font-weight:300;
  margin:16px auto 22px;
}

.shop-hero p,
.product-copy p,
.inquiry-section p{
  font-family:sans-serif;
  font-size:14px;
  line-height:1.8;
  color:#655956;
}

.featured-product{
  padding:0 70px 60px;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:40px;
  align-items:center;
  max-width:1180px;
  margin:auto;
}

.product-image{
  overflow:hidden;
  border-radius:45% 45% 0 0;
  box-shadow:0 18px 35px rgba(0,0,0,.06);
}

.product-image img{
  width:100%;
  height:460px;
  object-fit:cover;
  display:block;
}

.product-copy{
  background:white;
  border:1px solid #eadad6;
  border-radius:30px;
  padding:44px 38px;
  box-shadow:0 10px 30px rgba(0,0,0,.03);
}

.product-copy h2{
  margin:14px 0 18px;
  font-size:52px;
  line-height:1;
  font-weight:300;
  font-style:italic;
}

.price{
  margin-top:22px;
  font-family:sans-serif;
  font-size:22px;
  letter-spacing:3px;
  text-transform:uppercase;
  color:#b19790;
  font-weight:800;
}

.product-actions{
  display:flex;
  gap:14px;
  flex-wrap:wrap;
  margin-top:28px;
}

.dark-btn,
.outline-btn{
  display:inline-block;
  text-decoration:none;
  padding:14px 22px;
  border-radius:999px;
  font-family:sans-serif;
  font-size:8px;
  letter-spacing:3px;
  text-transform:uppercase;
  font-weight:800;
}

.dark-btn{
  background:#1f1b1b;
  color:white;
}

.outline-btn{
  color:#1f1b1b;
  border:1px solid #d8c6bf;
}

.addons-section{
  max-width:1180px;
  margin:auto;
  padding:34px 28px 40px;
  border:1px solid #eadad6;
  border-radius:20px;
  text-align:center;
  background:rgba(255,255,255,.35);
}

.addons-section .eyebrow{
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:24px;
}

.addons-section .eyebrow::before,
.addons-section .eyebrow::after{
  content:"";
  width:220px;
  height:1px;
  background:#eadad6;
}

.addons-section h2{
  margin:10px auto 30px;
  font-size:30px;
  line-height:1;
  font-weight:300;
}

.addons-grid{
  display:grid;
  grid-template-columns:repeat(6,1fr);
  gap:18px;
}

.addons-grid article{
  background:rgba(255,255,255,.7);
  border:1px solid #eadad6;
  border-radius:16px;
  padding:20px 12px;
  min-height:150px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
}

.addon-icon{
  font-size:26px;
  color:#b78f86;
  margin-bottom:14px;
}

.addons-grid span{
  display:block;
  margin-bottom:10px;
  font-size:22px;
  line-height:1;
  font-weight:300;
  color:#1f1b1b;
  letter-spacing:0;
}

.addons-grid h3{
  margin:0;
  font-family:sans-serif;
  font-size:12px;
  line-height:1.7;
  font-weight:500;
  color:#1f1b1b;
}

.coming-section{
  padding:55px 70px;
  text-align:center;
}

.coming-section h2{
  font-size:clamp(32px, 4vw, 52px);
  line-height:1;
  font-weight:300;
  margin:14px auto 36px;
  max-width:760px;
}

.coming-grid{
  display:grid;
  grid-template-columns:repeat(5,1fr);
  gap:16px;
}

.coming-grid article{
  background:#fff3ef;
  border:1px solid #eadad6;
  overflow:hidden;
}

.coming-grid img{
  width:100%;
  height:180px;
  object-fit:cover;
  filter:grayscale(100%);
  display:block;
}

.coming-grid span{
  display:block;
  margin-top:18px;
  font-family:sans-serif;
  font-size:8px;
  letter-spacing:4px;
  color:#b19790;
  font-weight:800;
}

.coming-grid h3{
  font-size:24px;
  font-style:italic;
  font-weight:300;
  margin:10px 12px 22px;
}

.inquiry-section{
  padding:55px 70px;
  background:#fdf6f2;
  text-align:center;
}

.inquiry-section h2{
  font-size:clamp(32px, 4vw, 52px);
  line-height:1;
  font-weight:300;
  margin:14px auto 36px;
  max-width:760px;
}

.inquiry-section p{
  max-width:700px;
  margin:0 auto 28px;
}

.inquiry-form{
  max-width:760px;
  margin:auto;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:14px;
}

.inquiry-form input,
.inquiry-form select,
.inquiry-form textarea{
  width:100%;
  box-sizing:border-box;
  border:1px solid #eadad6;
  background:white;
  padding:16px 18px;
  border-radius:18px;
  font-family:sans-serif;
  font-size:13px;
  color:#2a2a2a;
}

.inquiry-form select,
.inquiry-form textarea,
.inquiry-form button{
  grid-column:1 / -1;
}

.inquiry-form textarea{
  min-height:130px;
  resize:vertical;
}

.inquiry-form button{
  border:none;
  background:#1f1b1b;
  color:white;
  padding:16px 24px;
  border-radius:999px;
  font-family:sans-serif;
  font-size:9px;
  letter-spacing:3px;
  text-transform:uppercase;
  font-weight:800;
  cursor:pointer;
}

.email-note{
  margin-top:24px !important;
  font-size:12px !important;
}

.email-note a{
  color:#1f1b1b;
  font-weight:800;
}

@media(max-width:900px){
  .featured-product,
  .coming-grid,
  .inquiry-form{
    grid-template-columns:1fr;
  }

  .addons-grid{
    grid-template-columns:1fr 1fr;
  }

  .featured-product,
  .addons-section,
  .coming-section,
  .inquiry-section{
    padding-left:24px;
    padding-right:24px;
  }

  .product-image img{
    height:360px;
  }

  .product-copy{
    padding:34px 26px;
  }

  .product-copy h2{
    font-size:42px;
  }

  .addons-section .eyebrow::before,
  .addons-section .eyebrow::after{
    width:70px;
  }
}

@media(max-width:600px){
  .addons-grid,
  .coming-grid{
    grid-template-columns:1fr;
  }
}
</style>