<script setup>
import { onMounted, onUnmounted, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import ParisFooter from '../components/ParisFooter.vue'
import ParisInstagramCTA from '../components/ParisInstagramCTA.vue'
import { useGlobalCart } from '../composables/useGlobalCart'

const router = useRouter()
const { addService, addAddon, removeItem, isInCart, cartCount, total, cartItems } = useGlobalCart()

// Paris Edition as a service item
const PARIS_SERVICE = {
  id: 'paris-edition',
  tag: 'PARIS EDITION',
  title: 'Paris Edition Website',
  price: 500,
}

// Paris add-ons matching useGlobalCart ADDONS
const PARIS_ADDONS = [
  { id: 'pages',      icon: '▧', label: 'Additional Pages',    price: 80  },
  { id: 'palette',   icon: '🎨', label: 'Custom Color Palette', price: 60  },
  { id: 'animations',icon: '✦', label: 'Luxury Animations',   price: 90  },
  { id: 'priority',  icon: '🚀', label: 'Priority Launch',     price: 120 },
  { id: 'mobile',    icon: '▯', label: 'Mobile Refinements',  price: 50  },
  { id: 'instagram', icon: '◎', label: 'Instagram Integration', price: 40 },
]

function toggleAddon(addon) {
  if (isInCart(addon.id)) {
    removeItem(addon.id)
  } else {
    addAddon(addon)
  }
}

const hasItems = computed(() => cartCount.value > 0)

// Force Velvet Verse light theme — matches main site palette
let savedTheme = null
onMounted(() => {
  savedTheme = document.documentElement.getAttribute('data-noir-theme')
  const r = document.documentElement
  r.style.setProperty('--bg', '#fff8f5')
  r.style.setProperty('--surface', '#fdf6f2')
  r.style.setProperty('--text', '#2a2a2a')
  r.style.setProperty('--gold', '#c8a49b')
  r.style.setProperty('--gold-line', '#eadad6')
  r.style.setProperty('--accent', '#b19790')
  r.style.setProperty('--muted', '#655956')
  r.style.setProperty('--cream', '#fff3ef')
  r.style.setProperty('--card', 'rgba(255,255,255,0.9)')
  r.style.setProperty('--shadow', '0 20px 60px rgba(0,0,0,0.06)')
  r.style.setProperty('--soft-shadow', '0 8px 28px rgba(0,0,0,0.05)')
  r.style.setProperty('--line', '#eadad6')
  r.removeAttribute('data-noir-theme')
})
onUnmounted(() => {
  const r = document.documentElement
  ;['--bg','--surface','--text','--gold','--gold-line','--accent','--muted','--cream','--card','--shadow','--soft-shadow','--line'].forEach(v => r.style.removeProperty(v))
  if (savedTheme) r.setAttribute('data-noir-theme', savedTheme)
})
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

      <!-- TOP SHOP SECTION -->

      <section class="shop-pricing-hero">
        <p class="shop-eyebrow">VELVET VERSE SHOP</p>

        <h1>
          Premade Website Collections<br>
          For Modern Luxury Brands.
        </h1>

        <p class="shop-intro">
          Explore available website editions, curated add-ons,<br>
          and inquiry-based purchase options.
        </p>

        <div class="shop-product">
          <div class="shop-image">
            <img src="/cafeparis.jpg" alt="Paris Edition">
          </div>

          <div class="shop-copy">
            <p class="shop-eyebrow small">AVAILABLE NOW</p>

            <h2>Paris Edition</h2>

            <p>
              A romantic, luxury-inspired premade website collection
              designed for cafés, bakeries, beauty brands, boutiques,
              influencers, and modern feminine businesses.
            </p>

            <span class="price-label">STARTING AT</span>

            <div class="price">$500</div>

            <div class="shop-buttons">
              <button
                class="shop-btn dark"
                :class="{ 'in-cart': isInCart('paris-edition') }"
                @click="isInCart('paris-edition') ? router.push('/cart') : addService(PARIS_SERVICE)"
              >
                {{ isInCart('paris-edition') ? 'VIEW CART →' : 'ADD TO CART' }}
              </button>

              <router-link to="/paris-demo" class="shop-btn outline">
                VIEW DEMO
              </router-link>
            </div>
          </div>
        </div>

        <div class="addons-box">
          <div class="addons-title">
            <span></span>
            <p>SIGNATURE ENHANCEMENTS</p>
            <span></span>
          </div>

          <h2>Add-ons available to personalize your experience.</h2>

          <div class="addons-grid">
            <article
              v-for="addon in PARIS_ADDONS"
              :key="addon.id"
              :class="['addon-article', { selected: isInCart(addon.id) }]"
              @click="toggleAddon(addon)"
            >
              <div class="addon-check" v-if="isInCart(addon.id)">✓</div>
              <span class="addon-icon">{{ addon.icon }}</span>
              <strong>+${{ addon.price }}</strong>
              <p>{{ addon.label }}</p>
            </article>
          </div>
        </div>
      </section>

      <!-- EXISTING PAGE CONTENT -->

      <section id="details" class="edition-hero">
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

  </main>

  <!-- FLOATING CART BAR -->
  <transition name="cart-bar">
    <div v-if="hasItems" class="floating-cart">
      <div class="floating-cart-inner">
        <div class="floating-cart-info">
          <span class="floating-cart-count">{{ cartCount }} item{{ cartCount > 1 ? 's' : '' }}</span>
          <span class="floating-cart-total">${{ total }}</span>
        </div>
        <router-link to="/cart" class="floating-cart-btn">VIEW CART →</router-link>
      </div>
    </div>
  </transition>
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
  margin-bottom:38px;
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

/* TOP SHOP */

.shop-pricing-hero{
  position:relative;
  z-index:3;
  text-align:center;
  padding:8px 0 58px;
}

.shop-eyebrow{
  margin:0;
  color:var(--accent);
  font-family:Arial,sans-serif;
  font-size:11px;
  letter-spacing:5px;
  text-transform:uppercase;
  font-weight:800;
}

.shop-eyebrow.small{
  text-align:left;
}

.shop-pricing-hero > h1{
  margin:18px auto 16px;
  max-width:860px;
  color:var(--text);
  font-size:clamp(38px,4.7vw,62px);
  line-height:.98;
  font-weight:300;
  text-transform:uppercase;
}

.shop-intro{
  max-width:620px;
  margin:0 auto 34px;
  color:var(--text);
  font-family:Arial,sans-serif;
  font-size:16px;
  line-height:1.7;
}

.shop-product{
  display:grid;
  grid-template-columns:1.05fr .95fr;
  align-items:center;
  gap:38px;
  text-align:left;
}

.shop-image{
  overflow:hidden;
  border-radius:24px;
  border:1px solid var(--gold-line);
  box-shadow:var(--soft-shadow);
}

.shop-image img{
  width:100%;
  height:420px;
  object-fit:cover;
  display:block;
}

.shop-copy h2{
  margin:20px 0 14px;
  color:var(--text);
  font-size:clamp(38px,4vw,58px);
  line-height:1;
  font-weight:300;
  text-transform:uppercase;
}

.shop-copy p{
  max-width:520px;
  color:var(--text);
  font-family:Arial,sans-serif;
  font-size:15px;
  line-height:1.8;
}

.price-label{
  display:block;
  margin-top:28px;
  color:var(--accent);
  font-family:Arial,sans-serif;
  font-size:11px;
  letter-spacing:3px;
  font-weight:800;
}

.price{
  margin:6px 0 18px;
  color:var(--text);
  font-size:clamp(78px,9vw,118px);
  line-height:.82;
  font-weight:300;
}

.shop-buttons{
  display:flex;
  gap:14px;
  flex-wrap:wrap;
}

.shop-btn{
  display:inline-flex;
  justify-content:center;
  align-items:center;
  min-width:170px;
  padding:15px 26px;
  border-radius:999px;
  text-decoration:none;
  font-family:Arial,sans-serif;
  font-size:10px;
  letter-spacing:2px;
  font-weight:800;
}

.shop-btn.dark{
  background:#1f1b1b;
  color:white;
  cursor:pointer;
  border:none;
  transition:.2s ease;
}

.shop-btn.dark:hover{ transform:translateY(-2px); }

.shop-btn.dark.in-cart{
  background:var(--accent);
}

/* FLOATING CART BAR */
.floating-cart{
  position:fixed;
  bottom:28px;
  left:50%;
  transform:translateX(-50%);
  z-index:999;
  pointer-events:auto;
}

.floating-cart-inner{
  display:flex;
  align-items:center;
  gap:20px;
  background:#1f1b1b;
  color:white;
  padding:16px 24px;
  border-radius:999px;
  box-shadow:0 12px 40px rgba(0,0,0,.25);
}

.floating-cart-info{
  display:flex;
  align-items:center;
  gap:14px;
  font-family:Arial,sans-serif;
}

.floating-cart-count{
  font-size:9px;
  letter-spacing:2px;
  text-transform:uppercase;
  font-weight:800;
  color:rgba(255,255,255,.65);
}

.floating-cart-total{
  font-size:22px;
  font-weight:300;
  font-family:'Cormorant Garamond',serif;
}

.floating-cart-btn{
  text-decoration:none;
  background:white;
  color:#1f1b1b;
  padding:12px 22px;
  border-radius:999px;
  font-family:Arial,sans-serif;
  font-size:9px;
  letter-spacing:2px;
  font-weight:800;
  transition:.2s ease;
}

.floating-cart-btn:hover{ opacity:.85; }

.cart-bar-enter-active,.cart-bar-leave-active{ transition:all .3s cubic-bezier(0.23,1,0.32,1); }
.cart-bar-enter-from,.cart-bar-leave-to{ opacity:0; transform:translateX(-50%) translateY(20px); }

.shop-btn.outline{
  border:1px solid var(--gold);
  color:var(--text);
  background:rgba(255,255,255,.45);
}

.addons-box{
  margin-top:46px;
  padding:0 24px 24px;
  border:1px solid var(--gold-line);
  border-radius:18px;
  background:rgba(255,255,255,.34);
}

.addons-title{
  display:grid;
  grid-template-columns:1fr auto 1fr;
  align-items:center;
  gap:24px;
  margin-top:-10px;
}

.addons-title span{
  height:1px;
  background:var(--gold-line);
}

.addons-title p{
  margin:0;
  padding:0 6px;
  color:var(--accent);
  background:var(--cream);
  font-family:Arial,sans-serif;
  font-size:11px;
  letter-spacing:5px;
  text-transform:uppercase;
  font-weight:800;
}

.addons-box h2{
  margin:18px 0 26px;
  color:var(--text);
  font-size:34px;
  font-weight:300;
}

.addons-grid{
  display:grid;
  grid-template-columns:repeat(6,1fr);
  gap:18px;
}

.addon-article{
  position:relative;
  min-height:128px;
  padding:20px 12px;
  border:1px solid var(--gold-line);
  border-radius:14px;
  background:rgba(255,255,255,.48);
  text-align:center;
  cursor:pointer;
  user-select:none;
  transition:.2s ease;
}

.addon-article:hover{
  border-color:var(--gold);
  transform:translateY(-3px);
  box-shadow:0 8px 20px rgba(0,0,0,.06);
}

.addon-article.selected{
  border-color:var(--text);
  background:rgba(255,255,255,.8);
}

.addon-check{
  position:absolute;
  top:10px;
  right:12px;
  font-size:10px;
  color:var(--accent);
  font-weight:800;
  font-family:Arial,sans-serif;
}

.addon-icon{
  display:block;
  color:var(--accent);
  font-size:24px;
  margin-bottom:10px;
}

.addons-grid strong{
  display:block;
  color:var(--text);
  font-size:30px;
  font-weight:300;
}

.addons-grid p{
  margin:8px 0 0;
  color:var(--text);
  font-family:Arial,sans-serif;
  font-size:12px;
  line-height:1.45;
}

/* EXISTING CONTENT */

.edition-hero{
  position:relative;
  z-index:3;
  display:grid;
  grid-template-columns:1fr .9fr;
  align-items:center;
  gap:44px;
  margin-top:20px;
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
  .template-features,
  .shop-product{
    grid-template-columns:1fr;
  }

  .features-grid,
  .addons-grid{
    grid-template-columns:1fr 1fr;
  }

  .template-features{
    text-align:center;
  }

  .shop-copy,
  .shop-eyebrow.small{
    text-align:center;
  }

  .shop-copy p{
    margin-left:auto;
    margin-right:auto;
  }

  .shop-buttons{
    justify-content:center;
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

  .edition-nav{
    flex-direction:column;
  }

  .shop-pricing-hero > h1{
    font-size:34px;
  }

  .shop-intro{
    font-size:14px;
  }

  .price{
    font-size:76px;
  }

  .hero-image img,
  .shop-image img{
    height:420px;
  }

  .addons-grid{
    grid-template-columns:1fr;
  }

  .includes-section,
  .template-features,
  .customize-section{
    padding:30px 20px;
  }
}
</style>
