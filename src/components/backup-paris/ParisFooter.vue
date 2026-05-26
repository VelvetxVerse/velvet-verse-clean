<script setup>
import { ref } from 'vue'

const email = ref('')
const message = ref('')

function subscribe() {
  if (!email.value) {
    message.value = 'Please enter your email first ♡'
    return
  }

  message.value = 'Thank you for joining our sweet list ♡'
  email.value = ''

  setTimeout(() => {
    message.value = ''
  }, 3500)
}
</script>

<template>
  <footer class="paris-footer">
    <div class="footer-top-line">
      <span></span>
      ❦
      <span></span>
    </div>

    <section class="footer-main">
      <div class="footer-image-left">
        <img src="/paris-dessert-display.png" alt="">
      </div>

      <div class="footer-column">
        <h3>NAVIGATION</h3>

        <router-link to="/paris-demo">Home</router-link>
        <router-link to="/paris-menu">Menu</router-link>
        <router-link to="/paris-gallery">Gallery</router-link>
        <router-link to="/paris-contact">Visit</router-link>
        <router-link to="/paris-about">About</router-link>
        <router-link to="/paris-contact">Contact</router-link>
      </div>

      <div class="footer-column">
        <h3>VISIT</h3>

        <p>Montmartre, Paris</p>
        <p>bonjour@ladouceur.fr</p>
        <p>+33 1 42 61 27 06</p>
      </div>

      <div class="footer-center">
        <div class="monogram">
          L
        </div>

        <h2 class="brand-name">
          LA DOUCEUR
        </h2>

        <p class="brand-script">
          Pâtisserie de Luxe
        </p>

        <div class="center-divider">
          <span></span>
          ♥
          <span></span>
        </div>

        <img src="/macaron-footer.png" class="macaron" alt="">

        <p class="tagline">
          MADE FRESH DAILY IN PARIS
        </p>
      </div>

      <div class="footer-column">
        <h3>HOURS</h3>

        <p>Mon — Fri</p>
        <p>7AM — 7PM</p>
        <p>Sat — Sun</p>
        <p>8AM — 8PM</p>
      </div>

      <div class="footer-column newsletter">
        <h3>JOIN OUR LIST</h3>

        <p>
          New collections, seasonal sweets,
          and exclusive offers.
        </p>

        <form @submit.prevent="subscribe">
          <input
            v-model="email"
            type="email"
            placeholder="Your email"
          >

          <button type="submit">
            ✉
          </button>
        </form>

        <p
          v-if="message"
          class="form-message"
        >
          {{ message }}
        </p>

        <div class="socials">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">◎</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">f</a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">p</a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">♪</a>
        </div>
      </div>
    </section>

    <div class="footer-bottom-line"></div>

    <section class="footer-bottom">
      <p>
        ♡ © 2026 La Douceur Pâtisserie. All rights reserved.
      </p>

      <div class="policy-links">
        <router-link to="/privacy-policy">
          Privacy Policy
        </router-link>

        <router-link to="/terms-conditions">
          Terms & Conditions
        </router-link>

        <router-link to="/paris-contact">
          Contact
        </router-link>
      </div>
    </section>
  </footer>
</template>

<style scoped>
.paris-footer{
  padding:22px 18px 16px;
  background:
    radial-gradient(circle at top,var(--surface),transparent 44%),
    linear-gradient(to bottom,var(--cream),var(--bg));
  color:var(--text);
  overflow:hidden;
}

.footer-top-line{
  max-width:1180px;
  margin:0 auto 16px;
  display:flex;
  justify-content:center;
  align-items:center;
  gap:12px;
  color:var(--gold);
}

.footer-top-line span{
  flex:1;
  max-width:340px;
  height:1px;
  background:var(--gold-line);
}

.footer-main{
  max-width:1180px;
  margin:0 auto;
  display:grid;
  grid-template-columns:.5fr .75fr .85fr 1fr .7fr .9fr;
  gap:16px;
  align-items:center;
}

.footer-image-left{
  display:flex;
  justify-content:center;
}

.footer-image-left img{
  width:96px;
  object-fit:contain;
}

.footer-column{
  display:flex;
  flex-direction:column;
  gap:5px;
}

.footer-column h3{
  color:var(--gold);
  font-family:Arial,sans-serif;
  font-size:8px;
  letter-spacing:2.4px;
  font-weight:800;
  margin-bottom:2px;
}

.footer-column a,
.footer-column p{
  color:var(--muted);
  text-decoration:none;
  font-family:Arial,sans-serif;
  font-size:9.5px;
  line-height:1.45;
}

.footer-column a:hover,
.policy-links a:hover{
  color:var(--accent);
}

/* CENTER */

.footer-center{
  text-align:center;
  padding:0 4px;
}

.monogram{
  width:48px;
  height:48px;
  margin:0 auto 8px;
  border-radius:50%;
  border:1px solid var(--gold);
  display:grid;
  place-items:center;
  color:var(--accent);
  font-family:'Cormorant Garamond',serif;
  font-size:28px;
  background:rgba(255,255,255,.55);
  box-shadow:0 0 0 4px rgba(255,255,255,.25);
}

.brand-name{
  margin:0;
  color:var(--gold);
  font-family:'Cormorant Garamond',serif;
  font-size:28px;
  font-weight:300;
  letter-spacing:4px;
  line-height:1;
}

.brand-script{
  margin-top:6px;
  color:var(--accent);
  font-family:'Great Vibes',cursive;
  font-size:24px;
  line-height:1;
}

.center-divider{
  display:flex;
  justify-content:center;
  align-items:center;
  gap:8px;
  margin:8px 0 4px;
  color:#ef9cab;
}

.center-divider span{
  width:34px;
  height:1px;
  background:var(--gold-line);
}

.macaron{
  width:36px;
  margin:2px auto 5px;
  display:block;
  object-fit:contain;
}

.tagline{
  color:var(--gold);
  font-family:Arial,sans-serif;
  font-size:6.8px;
  letter-spacing:2px;
  font-weight:800;
}

.newsletter p{
  max-width:170px;
}

.newsletter form{
  display:flex;
  margin-top:3px;
  overflow:hidden;
  border-radius:5px;
  border:1px solid var(--line);
  background:rgba(255,255,255,.5);
}

.newsletter input{
  width:100%;
  border:none;
  padding:7px;
  background:transparent;
  color:var(--text);
  outline:none;
  font-size:9.5px;
  font-family:Arial,sans-serif;
}

.newsletter button{
  width:34px;
  border:none;
  background:var(--accent);
  color:white;
  cursor:pointer;
}

.form-message{
  margin-top:4px;
  color:var(--accent) !important;
  font-size:9px !important;
  line-height:1.3 !important;
}

.socials{
  display:flex;
  gap:6px;
  margin-top:8px;
}

.socials a{
  width:24px;
  height:24px;
  border-radius:50%;
  border:1px solid var(--gold);
  display:grid;
  place-items:center;
  text-decoration:none;
  color:var(--gold);
  font-size:10px;
  background:rgba(255,255,255,.35);
}

.footer-bottom-line{
  max-width:1180px;
  height:1px;
  margin:18px auto 10px;
  background:rgba(233,196,203,.45);
}

.footer-bottom{
  max-width:1180px;
  margin:0 auto;
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:12px;
  flex-wrap:wrap;
}

.footer-bottom p{
  color:var(--muted);
  font-family:Arial,sans-serif;
  font-size:8.8px;
}

.policy-links{
  display:flex;
  gap:10px;
  flex-wrap:wrap;
}

.policy-links a{
  color:var(--muted);
  text-decoration:none;
  font-family:Arial,sans-serif;
  font-size:8.8px;
}

@media(max-width:1200px){
  .footer-main{
    grid-template-columns:1fr 1fr;
    text-align:center;
  }

  .footer-center{
    grid-column:1 / -1;
    order:-1;
  }

  .footer-column{
    align-items:center;
  }

  .footer-image-left{
    display:none;
  }

  .newsletter p{
    max-width:260px;
  }
}

@media(max-width:760px){
  .paris-footer{
    padding:22px 14px 18px;
  }

  .footer-main{
    grid-template-columns:1fr;
    gap:22px;
  }

  .footer-bottom{
    flex-direction:column;
    text-align:center;
  }

  .policy-links{
    justify-content:center;
  }
}
</style>