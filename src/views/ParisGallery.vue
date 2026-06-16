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


const sections = [
  {
    id:'croissants',
    title:'Viennoiseries',
    items:[
      { name:'Strawberry Cream Croissant', price:'$6.50', image:'/strawberry-croissant.jpg' },
      { name:'Almond Rose Croissant', price:'$6.00', image:'/almond-rose-croissant.jpg' },
      { name:'Honey Butter Brioche', price:'$4.50', image:'/honey-butter-brioche.jpg' }
    ]
  },
  {
    id:'macarons',
    title:'Signature Sweets',
    items:[
      { name:'Vanilla Rose Macarons', price:'$3.50', image:'/vanilla-rose-macarons.jpg' },
      { name:'Velvet Berry Tart', price:'$7.25', image:'/berry-tart.png' },
      { name:'Vanilla Blossom Cake', price:'$8.00', image:'/vanilla-blossom-cake.jpg' }
    ]
  },
  {
    id:'coffee',
    title:'Café Favorites',
    items:[
      { name:'Vanilla Rose Latte', price:'$6.00', image:'/vanilla-rose-latte.jpg' },
      { name:'Parisian Hot Chocolate', price:'$6.50', image:'/paris-hot-chocolate.jpg' },
      { name:'Paris Café Moment', price:'$5.25', image:'/paris-cafe-moment.jpg' }
    ]
  }
]

function scrollToSection(id){
  const section = document.getElementById(id)
  if(section){
    section.scrollIntoView({ behavior:'smooth', block:'start' })
  }
}
</script>

<template>
  <main class="menu-page">
    <section class="menu-frame">
      <span class="corner top-left">❦</span>
      <span class="corner top-right">❦</span>
      <span class="corner bottom-left">❦</span>
      <span class="corner bottom-right">❦</span>

      <img src="/paris-side-rose.jpg" class="rose-left" alt="">
      <img src="/paris-small-rose.jpg" class="rose-right" alt="">

      <ParisHeader />

      <section class="menu-hero">
        <p class="eyebrow">PARIS COLLECTION</p>

        <div class="divider">
          <span></span>
          ❧
          <span></span>
        </div>

        <h1>Our Menu</h1>

        <div class="divider">
          <span></span>
          ♡
          <span></span>
        </div>

        <p>
          Soft pastries, elegant sweets,
          and romantic café favorites inspired by Paris mornings.
        </p>
      </section>

      <section class="filters">
        <button @click="window.scrollTo({ top:0, behavior:'smooth' })">
          ALL
        </button>

        <button @click="scrollToSection('croissants')">
          CROISSANTS
        </button>

        <button @click="scrollToSection('macarons')">
          MACARONS
        </button>

        <button @click="scrollToSection('coffee')">
          COFFEE
        </button>
      </section>

      <section
        v-for="section in sections"
        :key="section.title"
        :id="section.id"
        class="menu-section"
      >
        <div class="section-title">
          <span></span>
          <h2>{{ section.title }}</h2>
          <span></span>
        </div>

        <div class="card-grid">
          <article
            v-for="item in section.items"
            :key="item.name"
            class="menu-card"
          >
            <img :src="item.image" alt="">

            <div class="card-body">
              <h3>{{ item.name }}</h3>

              <p>
                Delicate, handcrafted,
                and inspired by elegant Parisian pâtisserie traditions.
              </p>

              <strong>{{ item.price }}</strong>
            </div>
          </article>
        </div>
      </section>

      <section class="custom-cake">
        <div>
          <p class="eyebrow">SPECIAL ORDERS</p>

          <h2>Looking for something special?</h2>

          <p>
            Order custom cakes for birthdays,
            weddings, tea parties, and romantic celebrations.
          </p>

          <a
            href="mailto:bonjour@ladouceur.fr?subject=Custom Cake Inquiry&body=Hello La Douceur,%0D%0A%0D%0AI would love to order a custom cake.%0D%0A%0D%0ACake size:%0D%0AFlavor:%0D%0ADate needed:%0D%0ATheme/colors:%0D%0AAdditional details:"
            class="order-btn"
          >
            ORDER CUSTOM CAKE ✦
          </a>
        </div>

        <img src="/vanilla-blossom-cake.jpg" alt="">
      </section>

      <ParisInstagramCTA />
    </section>

    <ParisFooter />
  </main>
</template>

<style scoped>
.menu-page{
  min-height:100vh;
  padding:16px;
  background:var(--bg);
  color:var(--text);
}

.menu-frame{
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

.menu-frame::before{
  content:"";
  position:absolute;
  inset:12px;
  border:1px solid var(--gold-line);
  border-radius:24px;
  pointer-events:none;
}

.menu-frame::after{
  content:"";
  position:absolute;
  inset:20px;
  border:1px dotted var(--gold-line);
  border-radius:18px;
  pointer-events:none;
}

.corner{
  position:absolute;
  z-index:5;
  color:var(--gold);
  font-size:32px;
}

.top-left{ top:10px; left:14px; }
.top-right{ top:10px; right:14px; transform:scaleX(-1); }
.bottom-left{ bottom:10px; left:14px; transform:scaleY(-1); }
.bottom-right{ bottom:10px; right:14px; transform:scale(-1); }

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

.menu-hero{
  position:relative;
  z-index:3;
  max-width:680px;
  margin:0 auto 28px;
  text-align:center;
}

.eyebrow{
  color:var(--accent);
  font-family:Arial,sans-serif;
  font-size:10px;
  letter-spacing:4.5px;
  font-weight:800;
}

.menu-hero h1{
  margin:14px 0 10px;
  color:var(--text);
  font-size:clamp(48px,6vw,72px);
  font-weight:300;
  line-height:1;
}

.menu-hero p{
  max-width:520px;
  margin:0 auto;
  color:var(--muted);
  font-family:Arial,sans-serif;
  font-size:13px;
  line-height:1.9;
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

.filters{
  position:relative;
  z-index:3;
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  gap:12px;
  margin-bottom:40px;
}

.filters button{
  min-width:110px;
  padding:11px 20px;
  border:1px solid var(--line);
  border-radius:999px;
  background:rgba(255,255,255,.55);
  color:var(--text);
  font-family:Arial,sans-serif;
  font-size:9px;
  letter-spacing:1.6px;
  font-weight:800;
  cursor:pointer;
  transition:.35s ease;
}

.filters button:hover{
  transform:translateY(-2px);
  color:var(--accent);
  border-color:var(--accent);
}

.menu-section{
  position:relative;
  z-index:3;
  margin-top:44px;
}

.section-title{
  display:flex;
  justify-content:center;
  align-items:center;
  gap:14px;
  margin-bottom:22px;
}

.section-title span{
  width:90px;
  height:1px;
  background:var(--gold-line);
}

.section-title h2{
  color:var(--text);
  font-size:34px;
  font-weight:300;
}

.card-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:16px;
}

.menu-card{
  overflow:hidden;
  border-radius:18px;
  border:1px solid var(--gold-line);
  background:rgba(255,255,255,.58);
  box-shadow:var(--soft-shadow);
  transition:.35s ease;
}

.menu-card:hover{
  transform:translateY(-5px);
}

.menu-card img{
  width:100%;
  height:210px;
  object-fit:cover;
}

.card-body{
  padding:18px;
  text-align:center;
}

.card-body h3{
  margin:0 0 8px;
  color:var(--accent);
  font-size:22px;
  font-weight:300;
}

.card-body p{
  margin:0 0 12px;
  color:var(--muted);
  font-family:Arial,sans-serif;
  font-size:10px;
  line-height:1.7;
}

.card-body strong{
  color:var(--gold);
  font-size:16px;
  font-weight:700;
}

.custom-cake{
  position:relative;
  z-index:3;
  margin-top:52px;
  display:grid;
  grid-template-columns:1fr .7fr;
  align-items:center;
  gap:24px;
  overflow:hidden;
  border-radius:28px;
  border:1px solid var(--gold-line);
  background:rgba(255,255,255,.5);
}

.custom-cake div{
  padding:38px;
}

.custom-cake h2{
  margin:10px 0 14px;
  color:var(--text);
  font-size:42px;
  font-weight:300;
}

.custom-cake p:not(.eyebrow){
  color:var(--muted);
  font-family:Arial,sans-serif;
  font-size:13px;
  line-height:1.9;
}

.order-btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  margin-top:18px;
  padding:16px 28px;
  border-radius:999px;
  background:var(--accent);
  color:white;
  text-decoration:none;
  font-family:Arial,sans-serif;
  font-size:10px;
  letter-spacing:2px;
  font-weight:800;
  transition:.3s ease;
  box-shadow:0 10px 24px rgba(0,0,0,.08);
}

.order-btn:hover{
  transform:translateY(-2px);
  opacity:.92;
}

.custom-cake img{
  width:100%;
  height:100%;
  min-height:320px;
  object-fit:cover;
}

@media(max-width:1100px){
  .custom-cake{
    grid-template-columns:1fr;
  }

  .card-grid{
    grid-template-columns:1fr 1fr;
  }
}

@media(max-width:760px){
  .menu-page{
    padding:0;
  }

  .menu-frame{
    border-radius:0;
    padding:20px;
  }

  .card-grid{
    grid-template-columns:1fr;
  }

  .corner,
  .rose-left,
  .rose-right{
    display:none;
  }
}
</style>