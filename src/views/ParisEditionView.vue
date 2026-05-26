<script setup>
import ParisFooter from '../components/ParisFooter.vue'
import ParisInstagramCTA from '../components/ParisInstagramCTA.vue'
</script>

<template>
  <main class="edition-page">
    <section class="edition-frame">
      <span class="corner tl">❦</span>
      <span class="corner tr">❦</span>
      <span class="corner bl">❦</span>
      <span class="corner br">❦</span>

      <img src="/paris-side-rose.jpg" class="rose-left" alt="">
      <img src="/paris-small-rose.jpg" class="rose-right" alt="">

      <nav class="edition-nav">
        <router-link to="/paris-demo" class="edition-logo">
          La Douceur
          <span>PÂTISSERIE</span>
        </router-link>

        <router-link to="/collections" class="edition-back">
          BACK TO COLLECTIONS →
        </router-link>
      </nav>

      <section class="edition-hero">
        <div class="hero-copy">
          <p class="eyebrow">PARIS COLLECTION</p>

          <div class="divider">
            <span></span>
            ❧
            <span></span>
          </div>

          <h1>
            La Douceur<br>
            Website Demo
          </h1>

          <div class="heart-divider">
            <span></span>
            ♡
            <span></span>
          </div>

          <p>
            A luxury feminine Paris pâtisserie website concept created
            for cafés, bakeries, tea rooms, dessert studios,
            and boutique food brands.
          </p>

          <div class="buttons">
            <router-link to="/paris-demo" class="btn filled">
              OPEN LIVE DEMO ✦
            </router-link>

            <router-link to="/collections" class="btn outline">
              BACK TO COLLECTIONS
            </router-link>
          </div>
        </div>

        <div class="hero-image-wrap">
          <span class="image-ornament">❦</span>

          <div class="hero-image">
            <img src="/paris-romance-cafe.png" alt="">
          </div>
        </div>
      </section>

      <section class="includes-section">
        <p class="eyebrow">WHAT THIS COLLECTION INCLUDES</p>

        <h2>A complete boutique bakery website experience.</h2>

        <div class="features-grid">
          <article>
            <h3>Luxury Home Page</h3>
            <p>
              Romantic hero sections, editorial layouts,
              café storytelling, elegant borders, and premium visual flow.
            </p>
          </article>

          <article>
            <h3>Interactive Menu</h3>
            <p>
              Bakery menu sections for croissants, macarons, cakes,
              coffee, tea, pricing, and custom cake inquiries.
            </p>
          </article>

          <article>
            <h3>Gallery Experience</h3>
            <p>
              Soft editorial image layouts inspired by Paris cafés,
              luxury desserts, and feminine brand photography.
            </p>
          </article>

          <article>
            <h3>Contact & Reservations</h3>
            <p>
              Contact forms, reservation email links, social media,
              private event inquiries, and customer messaging.
            </p>
          </article>

          <article>
            <h3>Responsive Design</h3>
            <p>
              Built to look polished on desktop, tablet,
              and mobile with flexible layouts and readable spacing.
            </p>
          </article>

          <article>
            <h3>Easy Customization</h3>
            <p>
              Clients can update colors, images, menu items,
              social links, business name, and monogram branding.
            </p>
          </article>
        </div>
      </section>

      <section class="template-features">
        <div class="features-copy">
          <p class="eyebrow">TEMPLATE FEATURES</p>

          <h2>
            Designed to feel beautiful,
            flexible, and client-ready.
          </h2>

          <p>
            This Paris Edition is more than a pretty page.
            It is structured as a complete website experience
            that can be customized for real boutique businesses.
          </p>
        </div>

        <div class="feature-list">
          <article>
            <span>01</span>
            <h3>Brand Customization</h3>
            <p>
              Change the brand name, monogram letter, colors,
              footer details, images, and social media links.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Conversion Buttons</h3>
            <p>
              Includes clear calls to action for reservations,
              custom cake orders, gallery browsing, and menu viewing.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Luxury Visual System</h3>
            <p>
              Uses blush tones, champagne gold, soft roses,
              rounded cards, elegant typography, and romantic spacing.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Business Ready Pages</h3>
            <p>
              Includes home, menu, gallery, about, contact,
              legal links, footer, newsletter, and social media sections.
            </p>
          </article>
        </div>
      </section>

      <section class="customize-section">
        <p class="eyebrow">WHAT CLIENTS CAN CUSTOMIZE</p>

        <h2>Made to be easy to rebrand.</h2>

        <div class="customize-grid">
          <span>Color palette</span>
          <span>Business name</span>
          <span>Monogram letter</span>
          <span>Menu items</span>
          <span>Product photos</span>
          <span>Social media</span>
          <span>Email links</span>
          <span>Footer details</span>
          <span>Reservation text</span>
          <span>Legal pages</span>
        </div>
      </section>

      <section class="preview-section">
        <div class="preview-copy">
          <p class="eyebrow">PERFECT FOR</p>

          <h2>
            Bakeries, cafés, tea rooms,
            and feminine luxury brands.
          </h2>

          <div class="heart-divider">
            <span></span>
            ♡
            <span></span>
          </div>

          <p>
            This collection is designed to feel polished,
            feminine, romantic, and modern —
            while still being easy for clients to browse.
          </p>

          <router-link to="/paris-demo" class="btn filled">
            VIEW FULL DEMO ✦
          </router-link>
        </div>

        <div class="preview-image">
          <img src="/paris-cafe-moment.jpg" alt="">
        </div>
      </section>

      <ParisInstagramCTA />
    </section>

    <ParisFooter />
  </main>
</template>

<style scoped>
.edition-page{
  min-height:100vh;
  padding:16px;
  background:var(--bg);
  color:var(--text);
}

.edition-frame{
  position:relative;
  max-width:1240px;
  margin:0 auto;
  padding:24px 42px 70px;
  overflow:hidden;
  border-radius:30px;
  border:1px solid var(--gold);
  background:
    radial-gradient(circle at top,var(--surface),transparent 42%),
    linear-gradient(to bottom,var(--cream),var(--surface));
  box-shadow:var(--shadow);
}

.edition-frame::before{
  content:"";
  position:absolute;
  inset:12px;
  border:1px solid var(--gold-line);
  border-radius:24px;
  pointer-events:none;
}

.edition-frame::after{
  content:"";
  position:absolute;
  inset:20px;
  border:1px dotted var(--gold-line);
  border-radius:18px;
  pointer-events:none;
}

.corner{
  position:absolute;
  color:var(--gold);
  font-size:34px;
  z-index:4;
}

.tl{top:14px;left:18px;}
.tr{top:14px;right:18px;transform:scaleX(-1);}
.bl{bottom:14px;left:18px;transform:scaleY(-1);}
.br{bottom:14px;right:18px;transform:scale(-1);}

.rose-left{
  position:absolute;
  left:-70px;
  top:220px;
  width:300px;
  opacity:.22;
  z-index:2;
  pointer-events:none;
  mix-blend-mode:multiply;
}

.rose-right{
  position:absolute;
  right:-70px;
  bottom:180px;
  width:220px;
  opacity:.18;
  z-index:2;
  pointer-events:none;
  mix-blend-mode:multiply;
}

.edition-nav{
  position:relative;
  z-index:3;
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:20px;
  margin-bottom:64px;
}

.edition-logo{
  text-decoration:none;
  color:var(--accent);
  font-family:'Great Vibes', cursive;
  font-size:58px;
  line-height:.8;
}

.edition-logo span{
  display:block;
  margin-top:16px;
  color:var(--gold);
  text-align:center;
  font-family:Arial,sans-serif;
  font-size:9px;
  letter-spacing:8px;
  font-weight:700;
}

.edition-back{
  text-decoration:none;
  padding:12px 20px;
  border:1px solid var(--gold);
  border-radius:999px;
  color:var(--text);
  background:rgba(255,255,255,.42);
  font-family:Arial,sans-serif;
  font-size:9px;
  letter-spacing:1.5px;
  font-weight:800;
}

.edition-hero{
  position:relative;
  z-index:3;
  display:grid;
  grid-template-columns:1fr .9fr;
  align-items:center;
  gap:44px;
}

.hero-copy{
  text-align:center;
}

.eyebrow{
  margin:0;
  color:var(--accent);
  font-family:Arial,sans-serif;
  font-size:10px;
  letter-spacing:5px;
  font-weight:800;
}

.divider,
.heart-divider{
  display:flex;
  justify-content:center;
  align-items:center;
  gap:12px;
  margin:18px 0;
  color:var(--gold);
}

.divider span,
.heart-divider span{
  width:62px;
  height:1px;
  background:var(--gold-line);
}

.hero-copy h1{
  margin:18px 0;
  color:var(--text);
  font-size:clamp(58px,7vw,92px);
  line-height:.95;
  font-weight:300;
}

.hero-copy p,
.preview-copy p,
.features-copy p{
  max-width:500px;
  margin:0 auto;
  color:var(--muted);
  font-family:Arial,sans-serif;
  font-size:14px;
  line-height:2;
}

.buttons{
  display:flex;
  justify-content:center;
  gap:16px;
  flex-wrap:wrap;
  margin-top:32px;
}

.btn{
  display:inline-flex;
  justify-content:center;
  align-items:center;
  text-decoration:none;
  padding:15px 28px;
  border-radius:999px;
  font-family:Arial,sans-serif;
  font-size:10px;
  letter-spacing:2px;
  font-weight:800;
  transition:.3s ease;
}

.btn:hover{
  transform:translateY(-2px);
}

.filled{
  background:var(--accent);
  color:white;
}

.outline{
  border:1px solid var(--gold);
  color:var(--text);
  background:rgba(255,255,255,.45);
}

.hero-image-wrap{
  position:relative;
}

.image-ornament{
  position:absolute;
  top:-26px;
  left:50%;
  transform:translateX(-50%);
  color:var(--gold);
  font-size:36px;
  z-index:3;
}

.hero-image{
  overflow:hidden;
  border-radius:52% 52% 10px 10px;
  border:1px solid var(--gold);
  box-shadow:var(--soft-shadow);
}

.hero-image img{
  width:100%;
  height:590px;
  object-fit:cover;
}

.includes-section,
.template-features,
.customize-section{
  position:relative;
  z-index:3;
  margin-top:54px;
  padding:44px;
  text-align:center;
  border:1px solid var(--gold-line);
  border-radius:24px;
  background:rgba(255,255,255,.5);
}

.includes-section h2,
.preview-copy h2,
.features-copy h2,
.customize-section h2{
  margin:14px 0 28px;
  color:var(--text);
  font-size:clamp(38px,4vw,54px);
  line-height:1;
  font-weight:300;
}

.features-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:18px;
}

.features-grid article,
.feature-list article{
  padding:24px;
  border-radius:20px;
  border:1px solid var(--gold-line);
  background:var(--card);
}

.features-grid h3,
.feature-list h3{
  margin:0 0 10px;
  color:var(--accent);
  font-size:28px;
  font-weight:300;
}

.features-grid p,
.feature-list p{
  margin:0;
  color:var(--muted);
  font-family:Arial,sans-serif;
  font-size:12px;
  line-height:1.8;
}

.template-features{
  display:grid;
  grid-template-columns:.9fr 1.1fr;
  gap:30px;
  align-items:center;
  text-align:left;
}

.features-copy{
  text-align:center;
}

.feature-list{
  display:grid;
  gap:16px;
}

.feature-list span{
  display:block;
  margin-bottom:8px;
  color:var(--gold);
  font-family:Arial,sans-serif;
  font-size:9px;
  letter-spacing:3px;
  font-weight:800;
}

.customize-grid{
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  gap:12px;
}

.customize-grid span{
  padding:12px 18px;
  border-radius:999px;
  border:1px solid var(--gold-line);
  background:var(--card);
  color:var(--text);
  font-family:Arial,sans-serif;
  font-size:10px;
  letter-spacing:1.5px;
  font-weight:800;
}

.preview-section{
  position:relative;
  z-index:3;
  margin-top:46px;
  display:grid;
  grid-template-columns:1fr .85fr;
  gap:30px;
  align-items:center;
  padding:34px;
  border:1px solid var(--gold-line);
  border-radius:24px;
  background:var(--card);
}

.preview-copy{
  text-align:center;
}

.preview-image{
  overflow:hidden;
  border-radius:22px;
  border:1px solid var(--gold);
}

.preview-image img{
  width:100%;
  height:360px;
  object-fit:cover;
}

@media(max-width:1000px){
  .edition-hero,
  .preview-section,
  .template-features{
    grid-template-columns:1fr;
  }

  .features-grid{
    grid-template-columns:1fr;
  }

  .template-features{
    text-align:center;
  }
}

@media(max-width:700px){
  .edition-page{
    padding:0;
  }

  .edition-frame{
    border-radius:0;
    padding:24px;
  }

  .corner,
  .rose-left,
  .rose-right{
    display:none;
  }

  .hero-image img{
    height:420px;
  }

  .includes-section,
  .template-features,
  .customize-section{
    padding:30px 20px;
  }

  .edition-nav{
    flex-direction:column;
  }
}
</style>