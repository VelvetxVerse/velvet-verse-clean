<script setup>
import ParisHeader from '../components/ParisHeader.vue'
import ParisFooter from '../components/ParisFooter.vue'
import ParisInstagramCTA from '../components/ParisInstagramCTA.vue'

const gallery = [
  '/almond-rose-croissant.jpg',
  '/berry-tart.png',
  '/cafe-tower.jpg',
  '/cafeparis.jpg',
  '/cake-strawberry.png',
  '/chocolate-cookies.jpg',
  '/honey-butter-brioche.jpg',
  '/latte.png',
  '/macarons.png',
  '/madeleines.png',
  '/paris-cafe-moment.jpg',
  '/paris-cafe.jpg',
  '/paris-cake.jpg',
  '/paris-tea.jpg',
  '/strawberry-croissant.jpg',
  '/vanilla-blossom-cake.jpg',
  '/vanilla-rose-latte.jpg',
  '/vanilla-rose-macarons.jpg'
]
</script>

<template>
  <main class="gallery-page">

    <section class="page-frame">

      <span class="corner tl">❦</span>
      <span class="corner tr">❦</span>
      <span class="corner bl">❦</span>
      <span class="corner br">❦</span>

      <img src="/paris-side-rose.jpg" class="rose-left" alt="">
      <img src="/paris-small-rose.jpg" class="rose-right" alt="">

      <ParisHeader />

      <section class="gallery-header">

        <p class="eyebrow">
          PARIS COLLECTION
        </p>

        <div class="divider">
          <span></span>
          ❧
          <span></span>
        </div>

        <h1>
          Gallery
        </h1>

        <div class="divider">
          <span></span>
          ♡
          <span></span>
        </div>

        <p>
          Romantic café moments, feminine pastries,
          luxury desserts, and elegant Paris-inspired details.
        </p>

      </section>

      <section class="filters">

        <button>ALL</button>
        <button>PASTRIES</button>
        <button>CAKES</button>
        <button>MACARONS</button>
        <button>CAFÉ</button>
        <button>TEA</button>

      </section>

      <section class="gallery-grid">

        <article
          v-for="(image, index) in gallery"
          :key="index"
          class="gallery-card"
        >

          <img
            :src="image"
            alt=""
          >

        </article>

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
  overflow:hidden;
}

.page-frame{
  position:relative;
  max-width:1240px;
  margin:0 auto;
  padding:24px 42px 70px;
  border-radius:30px;
  border:1px solid var(--gold);
  background:
    radial-gradient(circle at top,var(--surface),transparent 42%),
    linear-gradient(to bottom,var(--cream),var(--surface));
  overflow:hidden;
  box-shadow:var(--shadow);
}

.page-frame::before{
  content:"";
  position:absolute;
  inset:12px;
  border:1px solid var(--gold-line);
  border-radius:24px;
  pointer-events:none;
}

.page-frame::after{
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

.gallery-header{
  position:relative;
  z-index:3;
  text-align:center;
  margin-bottom:38px;
}

.eyebrow{
  color:var(--accent);
  font-family:Arial,sans-serif;
  font-size:10px;
  letter-spacing:5px;
  font-weight:800;
}

.gallery-header h1{
  margin:12px 0;
  color:var(--text);
  font-size:clamp(48px,6vw,72px);
  font-weight:300;
  line-height:1;
}

.gallery-header p{
  max-width:540px;
  margin:0 auto;
  color:var(--muted);
  font-family:Arial,sans-serif;
  font-size:13px;
  line-height:1.9;
}

.divider{
  display:flex;
  align-items:center;
  justify-content:center;
  gap:12px;
  margin:18px 0;
  color:var(--gold);
}

.divider span{
  width:62px;
  height:1px;
  background:var(--gold-line);
}

.filters{
  position:relative;
  z-index:3;
  display:flex;
  justify-content:center;
  gap:12px;
  flex-wrap:wrap;
  margin-bottom:40px;
}

.filters button{
  min-width:104px;
  padding:11px 18px;
  border-radius:999px;
  border:1px solid var(--line);
  background:rgba(255,255,255,.55);
  color:var(--text);
  font-family:Arial,sans-serif;
  font-size:9px;
  letter-spacing:1.6px;
  font-weight:800;
  cursor:pointer;
}

.gallery-grid{
  position:relative;
  z-index:3;
  columns:4 220px;
  column-gap:16px;
}

.gallery-card{
  break-inside:avoid;
  margin-bottom:16px;
  overflow:hidden;
  border-radius:18px;
  border:1px solid var(--gold-line);
  background:var(--card);
  box-shadow:var(--soft-shadow);
}

.gallery-card img{
  width:100%;
  display:block;
  transition:.5s ease;
}

.gallery-card:hover img{
  transform:scale(1.05);
}

@media(max-width:1000px){

  .gallery-grid{
    columns:3 190px;
  }

}

@media(max-width:760px){

  .gallery-page{
    padding:0;
  }

  .page-frame{
    border-radius:0;
    padding:22px;
  }

  .page-frame::before,
  .page-frame::after,
  .corner,
  .rose-left,
  .rose-right{
    display:none;
  }

  .gallery-grid{
    columns:2 140px;
  }

}
</style>