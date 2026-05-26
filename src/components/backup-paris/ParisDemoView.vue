<script setup>
import ParisHeader from '../components/ParisHeader.vue'
import ParisPaletteBar from '../components/ParisPaletteBar.vue'
import ParisFooter from '../components/ParisFooter.vue'
</script>

<template>
  <main class="paris-demo-page">
    <section class="paris-frame">
      <span class="corner tl">❦</span>
      <span class="corner tr">❦</span>
      <span class="corner bl">❦</span>
      <span class="corner br">❦</span>

      <img src="/paris-side-rose.jpg" class="rose-left" alt="">
      <img src="/paris-small-rose.jpg" class="rose-right" alt="">

      <ParisHeader />

      <ParisPaletteBar />

      <section class="paris-hero">
        <div class="paris-copy">
          <p class="paris-eyebrow">PARIS COLLECTION</p>

          <div class="paris-divider">
            <span></span>
            ❧
            <span></span>
          </div>

          <h1>
            Soft pink pastries,<br>
            feminine charm,<br>
            and <em>café romance.</em>
          </h1>

          <div class="heart-divider">
            <span></span>
            ♡
            <span></span>
          </div>

          <p>
            A delicate bakery website concept designed for feminine brands,
            boutique cafés, dessert studios, and romantic creative businesses.
          </p>

          <div class="paris-buttons">
            <router-link to="/paris-menu" class="paris-btn filled">
              EXPLORE MENU ✦
            </router-link>

            <router-link to="/paris-gallery" class="paris-btn outline">
              VIEW GALLERY ✦
            </router-link>
          </div>
        </div>

        <div class="paris-image-wrap">
          <span class="arch-ornament">❦</span>

          <div class="paris-image">
            <img src="/paris-romance-cafe.png" alt="">
          </div>
        </div>
      </section>

      <section class="cafe-section section-card">
        <div class="cafe-img">
          <img src="/paris-cafe-moment.jpg" alt="">
        </div>

        <div class="cafe-copy">
          <p class="paris-eyebrow">CAFÉ EXPERIENCE</p>

          <h2>
            Made for slow Paris mornings
            and romantic afternoons.
          </h2>

          <div class="heart-divider">
            <span></span>
            ♡
            <span></span>
          </div>

          <p>
            Elegant pastries, floral teas, and feminine café styling inspired
            by the charm of Montmartre and luxury Parisian pâtisseries.
          </p>

          <router-link to="/paris-gallery" class="paris-btn filled">
            VIEW GALLERY ✦
          </router-link>
        </div>
      </section>

      <section class="menu-preview section-card">
        <p class="paris-eyebrow">SIGNATURE SWEETS</p>

        <h2>A menu made for romance.</h2>

        <div class="heart-divider">
          <span></span>
          ♡
          <span></span>
        </div>

        <div class="preview-grid">
          <article>
            <img src="/almond-rose-croissant.jpg" alt="">
            <h3>Almond Rose Croissant</h3>
            <p>Toasted almonds, rose glaze, and powdered sugar.</p>
          </article>

          <article>
            <img src="/vanilla-rose-macarons.jpg" alt="">
            <h3>Vanilla Rose Macarons</h3>
            <p>Pink vanilla bean macarons with silky buttercream.</p>
          </article>

          <article>
            <img src="/paris-hot-chocolate.jpg" alt="">
            <h3>Parisian Hot Chocolate</h3>
            <p>Velvety dark chocolate with a luxurious café finish.</p>
          </article>
        </div>
      </section>
    </section>

    <ParisFooter />
  </main>
</template>

<style>
.paris-demo-page{
  min-height:100vh;
  padding:16px;
  background:var(--bg);
  color:var(--text);
}

.paris-frame{
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

.paris-frame::before{
  content:"";
  position:absolute;
  inset:12px;
  border:1px solid var(--gold-line);
  border-radius:24px;
  pointer-events:none;
}

.paris-frame::after{
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
  top:210px;
  width:300px;
  opacity:.22;
  z-index:2;
  pointer-events:none;
  mix-blend-mode:multiply;
  mask-image:linear-gradient(to right, transparent 0%, black 24%, black 72%, transparent 100%);
  -webkit-mask-image:linear-gradient(to right, transparent 0%, black 24%, black 72%, transparent 100%);
}

.rose-right{
  position:absolute;
  right:-70px;
  bottom:180px;
  width:230px;
  opacity:.18;
  z-index:2;
  pointer-events:none;
  mix-blend-mode:multiply;
  mask-image:linear-gradient(to left, transparent 0%, black 24%, black 72%, transparent 100%);
  -webkit-mask-image:linear-gradient(to left, transparent 0%, black 24%, black 72%, transparent 100%);
}

.paris-hero{
  position:relative;
  z-index:3;
  display:grid;
  grid-template-columns:1fr .95fr;
  align-items:center;
  gap:42px;
  margin-top:34px;
}

.paris-copy{
  text-align:center;
}

.paris-eyebrow{
  color:var(--accent);
  font-family:Arial,sans-serif;
  font-size:10px;
  letter-spacing:5px;
  font-weight:800;
}

.paris-divider,
.heart-divider{
  display:flex;
  justify-content:center;
  align-items:center;
  gap:12px;
  margin:18px 0;
  color:var(--gold);
}

.paris-divider span,
.heart-divider span{
  width:62px;
  height:1px;
  background:var(--gold-line);
}

.paris-copy h1{
  margin:18px 0 0;
  color:var(--text);
  font-size:clamp(48px,5vw,72px);
  line-height:1;
  font-weight:300;
}

.paris-copy h1 em{
  color:var(--accent);
  font-style:italic;
}

.paris-copy p{
  max-width:470px;
  margin:0 auto;
  color:var(--muted);
  font-family:Arial,sans-serif;
  font-size:14px;
  line-height:2;
}

.paris-buttons{
  display:flex;
  justify-content:center;
  gap:16px;
  margin-top:32px;
  flex-wrap:wrap;
}

.paris-btn{
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
  transition:.3s;
}

.paris-btn:hover{
  transform:translateY(-2px);
}

.paris-btn.filled{
  background:var(--accent);
  color:white;
  border:1px solid var(--gold);
}

.paris-btn.outline{
  border:1px solid var(--gold);
  color:var(--text);
  background:rgba(255,255,255,.42);
}

.paris-image-wrap{
  position:relative;
}

.arch-ornament{
  position:absolute;
  top:-30px;
  left:50%;
  transform:translateX(-50%);
  color:var(--gold);
  font-size:38px;
  z-index:3;
}

.paris-image{
  overflow:hidden;
  border-radius:52% 52% 10px 10px;
  border:1px solid var(--gold);
  box-shadow:var(--soft-shadow);
}

.paris-image img{
  width:100%;
  height:580px;
  object-fit:cover;
}

.section-card{
  position:relative;
  z-index:3;
  margin-top:46px;
  border-radius:24px;
  border:1px solid var(--gold);
  background:rgba(255,255,255,.44);
  overflow:hidden;
  box-shadow:var(--soft-shadow);
}

.cafe-section{
  display:grid;
  grid-template-columns:.9fr 1fr;
}

.cafe-img img{
  width:100%;
  height:100%;
  min-height:380px;
  object-fit:cover;
}

.cafe-copy{
  padding:42px;
  text-align:center;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}

.cafe-copy h2,
.menu-preview h2{
  margin:12px 0 0;
  color:var(--text);
  font-size:clamp(34px,4vw,50px);
  line-height:1.08;
  font-weight:300;
}

.cafe-copy p:not(.paris-eyebrow){
  max-width:420px;
  color:var(--muted);
  font-family:Arial,sans-serif;
  font-size:13px;
  line-height:1.9;
}

.menu-preview{
  padding:44px;
  text-align:center;
}

.preview-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:20px;
  margin-top:34px;
}

.preview-grid article{
  overflow:hidden;
  border-radius:18px;
  border:1px solid var(--gold-line);
  background:var(--cream);
}

.preview-grid img{
  width:100%;
  height:220px;
  object-fit:cover;
}

.preview-grid h3{
  margin:18px 0 8px;
  color:var(--accent);
  font-size:24px;
  font-weight:300;
}

.preview-grid p{
  padding:0 22px 26px;
  color:var(--muted);
  font-family:Arial,sans-serif;
  font-size:12px;
  line-height:1.8;
}

@media(max-width:1100px){
  .paris-hero,
  .cafe-section{
    grid-template-columns:1fr;
  }

  .preview-grid{
    grid-template-columns:1fr;
  }
}

@media(max-width:760px){
  .paris-demo-page{
    padding:0;
  }

  .paris-frame{
    border-radius:0;
    padding:22px;
  }

  .paris-frame::before,
  .paris-frame::after,
  .corner,
  .rose-left,
  .rose-right{
    display:none;
  }

  .paris-copy h1{
    font-size:52px;
  }

  .paris-image img{
    height:430px;
  }

  .cafe-copy,
  .menu-preview{
    padding:28px 22px;
  }

  .paris-buttons{
    flex-direction:column;
  }

  .paris-btn{
    width:100%;
  }
}
</style>