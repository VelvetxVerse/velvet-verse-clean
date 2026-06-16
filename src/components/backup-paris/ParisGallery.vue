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
  <main class="gallery-page">
    <section class="gallery-frame">
      <span class="corner tl">❦</span>
      <span class="corner tr">❦</span>
      <span class="corner bl">❦</span>
      <span class="corner br">❦</span>

      <img src="/paris-side-rose.jpg" class="rose-left" alt="">
      <img src="/paris-small-rose.jpg" class="rose-right" alt="">

      <ParisHeader />

      <section class="gallery-hero">
        <p class="eyebrow">LA DOUCEUR GALLERY</p>

        <div class="divider">
          <span></span>
          ❧
          <span></span>
        </div>

        <h1>
          A visual journey through<br>
          Parisian sweetness.
        </h1>

        <div class="heart-divider">
          <span></span>
          ♡
          <span></span>
        </div>

        <p>
          Soft pastries, floral arrangements, café moments,
          and romantic editorial photography.
        </p>
      </section>

      <section class="gallery-grid">
        <div class="gallery-item tall">
          <img src="/paris-romance-cafe.png" alt="Paris café">
        </div>
        <div class="gallery-item">
          <img src="/paris-cafe-moment.jpg" alt="Café moment">
        </div>
        <div class="gallery-item">
          <img src="/vanilla-rose-macarons.jpg" alt="Macarons">
        </div>
        <div class="gallery-item">
          <img src="/almond-rose-croissant.jpg" alt="Croissant">
        </div>
        <div class="gallery-item tall">
          <img src="/paris-hot-chocolate.jpg" alt="Hot chocolate">
        </div>
        <div class="gallery-item">
          <img src="/paris-cafe-moment.jpg" alt="Café">
        </div>
      </section>

      <ParisInstagramCTA />
    </section>

    <ParisFooter />
  </main>
</template>

<style scoped>
.gallery-page{
  min-height:100vh;
  padding:16px;
  background:var(--bg);
  color:var(--text);
}

.gallery-frame{
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

.gallery-frame::before{
  content:"";
  position:absolute;
  inset:12px;
  border:1px solid var(--gold-line);
  border-radius:24px;
  pointer-events:none;
}

.gallery-frame::after{
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
}

.gallery-hero{
  position:relative;
  z-index:3;
  text-align:center;
  max-width:700px;
  margin:0 auto 52px;
}

.eyebrow{
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

.gallery-hero h1{
  margin:18px 0;
  color:var(--text);
  font-size:clamp(42px,5vw,68px);
  line-height:1;
  font-weight:300;
}

.gallery-hero p{
  color:var(--muted);
  font-family:Arial,sans-serif;
  font-size:14px;
  line-height:2;
}

.gallery-grid{
  position:relative;
  z-index:3;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  grid-auto-rows:280px;
  gap:18px;
}

.gallery-item{
  overflow:hidden;
  border-radius:20px;
  border:1px solid var(--gold-line);
  box-shadow:var(--soft-shadow);
}

.gallery-item.tall{
  grid-row:span 2;
}

.gallery-item img{
  width:100%;
  height:100%;
  object-fit:cover;
  transition:.4s ease;
}

.gallery-item:hover img{
  transform:scale(1.04);
}

@media(max-width:900px){
  .gallery-grid{
    grid-template-columns:1fr 1fr;
  }
}

@media(max-width:760px){
  .gallery-page{
    padding:0;
  }

  .gallery-frame{
    border-radius:0;
    padding:22px;
  }

  .gallery-frame::before,
  .gallery-frame::after,
  .corner,
  .rose-left,
  .rose-right{
    display:none;
  }

  .gallery-grid{
    grid-template-columns:1fr;
    grid-auto-rows:260px;
  }

  .gallery-item.tall{
    grid-row:span 1;
  }
}
</style>
