<script setup>
import { onMounted, onUnmounted } from 'vue'
import ParisHeader from '../components/ParisHeader.vue'
import ParisFooter from '../components/ParisFooter.vue'
import ParisInstagramCTA from '../components/ParisInstagramCTA.vue'

// Force Paris light theme — override the dark noir default
const PARIS_VARS = [
  '--bg','--surface','--text','--gold','--gold-line',
  '--accent','--muted','--cream','--card','--shadow','--soft-shadow','--line'
]
let savedTheme = null
onMounted(() => {
  savedTheme = document.documentElement.getAttribute('data-noir-theme')
  const r = document.documentElement
  r.style.setProperty('--bg', '#fdf6f0')
  r.style.setProperty('--surface', '#f5e8da')
  r.style.setProperty('--text', '#2a1f1a')
  r.style.setProperty('--gold', '#c9a882')
  r.style.setProperty('--gold-line', '#dfc4a0')
  r.style.setProperty('--accent', '#9c6b4e')
  r.style.setProperty('--muted', '#6b4f42')
  r.style.setProperty('--cream', '#fdf0e4')
  r.style.setProperty('--card', 'rgba(255,255,255,0.65)')
  r.style.setProperty('--shadow', '0 20px 60px rgba(100,60,20,0.1)')
  r.style.setProperty('--soft-shadow', '0 8px 28px rgba(100,60,20,0.08)')
  r.style.setProperty('--line', '#dfc4a0')
  r.removeAttribute('data-noir-theme')
})
onUnmounted(() => {
  const r = document.documentElement
  PARIS_VARS.forEach(v => r.style.removeProperty(v))
  if (savedTheme) r.setAttribute('data-noir-theme', savedTheme)
})

</script>

<template>
  <main class="about-page">

    <section class="about-frame">

      <span class="corner tl">❦</span>
      <span class="corner tr">❦</span>
      <span class="corner bl">❦</span>
      <span class="corner br">❦</span>

      <img src="/paris-side-rose.jpg" class="rose-left" alt="">
      <img src="/paris-small-rose.jpg" class="rose-right" alt="">

      <ParisHeader />

      <section class="about-hero">

        <div class="about-copy">

          <p class="eyebrow">
            OUR STORY
          </p>

          <div class="divider">
            <span></span>
            ❧
            <span></span>
          </div>

          <h1>
            Inspired by romantic<br>
            Paris mornings.
          </h1>

          <div class="divider">
            <span></span>
            ♡
            <span></span>
          </div>

          <p>
            La Douceur is a feminine pâtisserie concept created for soft pastries,
            floral details, elegant café moments, and luxury dessert experiences.
          </p>

        </div>

        <div class="about-image">

          <img
            src="/paris-cafe-moment.jpg"
            alt=""
          >

        </div>

      </section>

      <section class="story-section">

        <div>

          <p class="eyebrow">
            HANDMADE WITH CARE
          </p>

          <h2>
            Every detail is designed to feel sweet,
            polished, and unforgettable.
          </h2>

          <p>
            From delicate croissants to rose-topped cakes and warm café drinks,
            this brand story celebrates the romance of Paris,
            the beauty of handmade desserts,
            and the quiet luxury of slow mornings.
          </p>

        </div>

        <div class="story-list">

          <article>
            <span>01</span>

            <h3>
              Paris Inspiration
            </h3>

            <p>
              Soft cafés, floral storefronts,
              gold details, and feminine charm.
            </p>
          </article>

          <article>
            <span>02</span>

            <h3>
              Signature Sweets
            </h3>

            <p>
              Croissants, macarons, cakes,
              tea, and romantic café favorites.
            </p>
          </article>

          <article>
            <span>03</span>

            <h3>
              Luxury Feeling
            </h3>

            <p>
              Elegant typography, warm colors,
              roses, and editorial layouts.
            </p>
          </article>

        </div>

      </section>

      <ParisInstagramCTA />

    </section>

    <ParisFooter />

  </main>
</template>

<style scoped>
.about-page{
  min-height:100vh;
  padding:16px;
  background:var(--bg);
  color:var(--text);
}

.about-frame{
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

.about-frame::before{
  content:"";
  position:absolute;
  inset:12px;
  border:1px solid var(--gold-line);
  border-radius:24px;
  pointer-events:none;
}

.about-frame::after{
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
  z-index:5;
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

.about-hero{
  position:relative;
  z-index:3;
  display:grid;
  grid-template-columns:1fr .9fr;
  align-items:center;
  gap:42px;
}

.about-copy{
  text-align:center;
}

.eyebrow{
  color:var(--accent);
  font-family:Arial,sans-serif;
  font-size:10px;
  letter-spacing:4.5px;
  font-weight:800;
}

.about-copy h1{
  margin:14px 0;
  color:var(--text);
  font-size:clamp(48px,6vw,72px);
  line-height:1;
  font-weight:300;
}

.about-copy p,
.story-section p{
  color:var(--muted);
  font-family:Arial,sans-serif;
  font-size:13px;
  line-height:1.9;
}

.about-copy p{
  max-width:520px;
  margin:0 auto;
}

.divider{
  display:flex;
  justify-content:center;
  align-items:center;
  gap:12px;
  margin:18px 0;
  color:var(--gold);
}

.divider span{
  width:58px;
  height:1px;
  background:var(--gold-line);
}

.about-image{
  overflow:hidden;
  border-radius:52% 52% 10px 10px;
  border:1px solid var(--gold);
  box-shadow:var(--soft-shadow);
}

.about-image img{
  width:100%;
  height:560px;
  object-fit:cover;
}

.story-section{
  position:relative;
  z-index:3;
  margin-top:52px;
  display:grid;
  grid-template-columns:.85fr 1.15fr;
  gap:28px;
  align-items:center;
  padding:38px;
  border-radius:28px;
  border:1px solid var(--gold-line);
  background:rgba(255,255,255,.5);
}

.story-section h2{
  margin:12px 0 16px;
  color:var(--text);
  font-size:42px;
  line-height:1;
  font-weight:300;
}

.story-list{
  display:grid;
  gap:14px;
}

.story-list article{
  padding:22px;
  border-radius:20px;
  border:1px solid var(--gold-line);
  background:var(--card);
}

.story-list span{
  color:var(--gold);
  font-family:Arial,sans-serif;
  font-size:9px;
  letter-spacing:3px;
  font-weight:800;
}

.story-list h3{
  margin:8px 0;
  color:var(--accent);
  font-size:26px;
  font-weight:300;
}

.story-list p{
  margin:0;
  font-size:12px;
}

@media(max-width:1000px){

  .about-hero,
  .story-section{
    grid-template-columns:1fr;
  }

}

@media(max-width:760px){

  .about-page{
    padding:0;
  }

  .about-frame{
    border-radius:0;
    padding:22px;
  }

  .about-frame::before,
  .about-frame::after,
  .corner,
  .rose-left,
  .rose-right{
    display:none;
  }

  .about-image img{
    height:420px;
  }

  .story-section{
    padding:24px;
  }

}
</style>