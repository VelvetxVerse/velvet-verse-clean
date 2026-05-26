<script setup>
import { ref } from 'vue'

import ParisHeader from '../components/ParisHeader.vue'
import ParisFooter from '../components/ParisFooter.vue'
import ParisInstagramCTA from '../components/ParisInstagramCTA.vue'

const form = ref({
  name:'',
  email:'',
  subject:'',
  message:''
})

const successMessage = ref('')

function sendMessage(){

  if(
    !form.value.name ||
    !form.value.email ||
    !form.value.message
  ){
    successMessage.value =
      'Please complete the form first ♡'

    return
  }

  successMessage.value =
    'Thank you for contacting La Douceur ♡ We will reply soon.'

  form.value = {
    name:'',
    email:'',
    subject:'',
    message:''
  }

  setTimeout(() => {
    successMessage.value = ''
  }, 4000)
}
</script>

<template>
  <main class="contact-page">

    <section class="contact-frame">

      <span class="corner tl">❦</span>
      <span class="corner tr">❦</span>
      <span class="corner bl">❦</span>
      <span class="corner br">❦</span>

      <img
        src="/paris-side-rose.jpg"
        class="rose-left"
        alt=""
      >

      <img
        src="/paris-small-rose.jpg"
        class="rose-right"
        alt=""
      >

      <ParisHeader />

      <!-- HERO -->

      <section class="contact-top">

        <div class="contact-title">

          <p class="eyebrow">
            CONTACT LA DOUCEUR
          </p>

          <div class="divider">
            <span></span>
            ❧
            <span></span>
          </div>

          <h1>
            Let’s create<br>
            something beautiful.
          </h1>

          <div class="divider">
            <span></span>
            ♡
            <span></span>
          </div>

          <p>
            Reservations, private events,
            luxury dessert inquiries,
            collaborations, and romantic café experiences.
          </p>

        </div>

      </section>

      <!-- CONTACT LAYOUT -->

      <section class="contact-layout">

        <!-- FORM -->

        <div class="form-card">

          <p class="eyebrow">
            SEND A MESSAGE
          </p>

          <h2>
            We would love to hear from you.
          </h2>

          <form
            class="contact-form"
            @submit.prevent="sendMessage"
          >

            <input
              v-model="form.name"
              type="text"
              placeholder="Your name"
            >

            <input
              v-model="form.email"
              type="email"
              placeholder="Your email"
            >

            <input
              v-model="form.subject"
              type="text"
              placeholder="Subject"
            >

            <textarea
              v-model="form.message"
              rows="7"
              placeholder="Tell us about your request..."
            ></textarea>

            <button type="submit">
              SEND MESSAGE ✦
            </button>

            <p
              v-if="successMessage"
              class="success-message"
            >
              {{ successMessage }}
            </p>

          </form>

        </div>

        <!-- SIDE INFO -->

        <div class="contact-side">

          <article class="info-card">

            <p class="small-title">
              EMAIL
            </p>

            <h3>
              bonjour@ladouceur.fr
            </h3>

            <p>
              Reservations, collaborations,
              and custom luxury desserts.
            </p>

          </article>

          <article class="info-card">

            <p class="small-title">
              INSTAGRAM
            </p>

            <h3>
              @ladouceur.paris
            </h3>

            <p>
              Follow romantic pastries,
              café moments, and seasonal sweets.
            </p>

          </article>

          <article class="info-card">

            <p class="small-title">
              PRIVATE EVENTS
            </p>

            <h3>
              Tea Parties & Bridal Events
            </h3>

            <p>
              Elegant gatherings,
              birthdays, bridal showers,
              and luxury celebrations.
            </p>

          </article>

        </div>

      </section>

      <!-- RESERVATION CTA -->

      <section class="reservation-banner">

        <div>

          <p class="eyebrow">
            PARIS EXPERIENCE
          </p>

          <h2>
            Book a romantic café moment.
          </h2>

          <p>
            Luxury brunches, tea service,
            feminine desserts, and unforgettable Paris mornings.
          </p>

        </div>

        <a
          href="mailto:bonjour@ladouceur.fr?subject=Reservation Inquiry&body=Hello La Douceur,%0D%0A%0D%0AI would love to book a romantic café experience.%0D%0A%0D%0ADate:%0D%0ATime:%0D%0ANumber of guests:%0D%0ASpecial requests:"
          class="reservation-btn"
        >
          BOOK RESERVATION ✦
        </a>

      </section>

      <ParisInstagramCTA />

    </section>

    <ParisFooter />

  </main>
</template>

<style scoped>
.contact-page{
  min-height:100vh;
  padding:16px;
  background:var(--bg);
  color:var(--text);
}

.contact-frame{
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

.contact-frame::before{
  content:"";
  position:absolute;
  inset:12px;
  border:1px solid var(--gold-line);
  border-radius:24px;
}

.contact-frame::after{
  content:"";
  position:absolute;
  inset:20px;
  border:1px dotted var(--gold-line);
  border-radius:18px;
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
  top:240px;
  width:300px;
  opacity:.18;
  z-index:2;
  pointer-events:none;
  mix-blend-mode:multiply;
}

.rose-right{
  position:absolute;
  right:-70px;
  bottom:180px;
  width:220px;
  opacity:.16;
  z-index:2;
  pointer-events:none;
  mix-blend-mode:multiply;
}

/* TOP */

.contact-top{
  position:relative;
  z-index:3;
  max-width:760px;
  margin:0 auto 50px;
  text-align:center;
}

.eyebrow{
  color:var(--accent);
  font-family:Arial,sans-serif;
  font-size:10px;
  letter-spacing:5px;
  font-weight:800;
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
  width:60px;
  height:1px;
  background:var(--gold-line);
}

.contact-title h1{
  color:var(--text);
  font-size:clamp(54px,7vw,78px);
  line-height:1;
  font-weight:300;
}

.contact-title p:not(.eyebrow){
  max-width:580px;
  margin:0 auto;
  color:var(--muted);
  font-family:Arial,sans-serif;
  font-size:14px;
  line-height:2;
}

/* LAYOUT */

.contact-layout{
  position:relative;
  z-index:3;
  display:grid;
  grid-template-columns:1.2fr .8fr;
  gap:24px;
  align-items:start;
}

/* FORM */

.form-card{
  padding:38px;
  border-radius:28px;
  border:1px solid var(--gold);
  background:rgba(255,255,255,.52);
}

.form-card h2{
  margin:12px 0 22px;
  color:var(--text);
  font-size:46px;
  line-height:1;
  font-weight:300;
}

.contact-form{
  display:flex;
  flex-direction:column;
  gap:16px;
}

.contact-form input,
.contact-form textarea{
  padding:18px;
  border-radius:18px;
  border:1px solid var(--line);
  background:var(--cream);
  color:var(--text);
  font-family:Arial,sans-serif;
  font-size:13px;
  outline:none;
}

.contact-form textarea{
  resize:none;
}

.contact-form button{
  margin-top:6px;
  padding:16px;
  border:none;
  border-radius:999px;
  background:var(--accent);
  color:white;
  font-family:Arial,sans-serif;
  font-size:10px;
  letter-spacing:2px;
  font-weight:800;
  cursor:pointer;
}

.success-message{
  color:var(--accent);
  text-align:center;
  font-family:Arial,sans-serif;
  font-size:12px;
  line-height:1.7;
}

/* SIDE */

.contact-side{
  display:grid;
  gap:18px;
}

.info-card{
  padding:28px;
  border-radius:22px;
  border:1px solid var(--gold-line);
  background:rgba(255,255,255,.48);
}

.small-title{
  color:var(--accent);
  font-family:Arial,sans-serif;
  font-size:9px;
  letter-spacing:4px;
  font-weight:800;
}

.info-card h3{
  margin:10px 0;
  color:var(--text);
  font-size:28px;
  line-height:1.1;
  font-weight:300;
}

.info-card p{
  color:var(--muted);
  font-family:Arial,sans-serif;
  font-size:12px;
  line-height:1.8;
}

/* CTA */

.reservation-banner{
  position:relative;
  z-index:3;
  margin-top:44px;
  padding:34px 38px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:24px;
  border-radius:28px;
  border:1px solid var(--gold-line);
  background:rgba(255,255,255,.52);
}

.reservation-banner h2{
  margin:10px 0;
  color:var(--text);
  font-size:40px;
  line-height:1;
  font-weight:300;
}

.reservation-banner p:not(.eyebrow){
  color:var(--muted);
  font-family:Arial,sans-serif;
  font-size:13px;
  line-height:1.8;
}

.reservation-btn{
  flex-shrink:0;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  padding:16px 30px;
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

.reservation-btn:hover{
  transform:translateY(-2px);
  opacity:.92;
}

/* MOBILE */

@media(max-width:1000px){

  .contact-layout,
  .reservation-banner{
    grid-template-columns:1fr;
    flex-direction:column;
  }

}

@media(max-width:760px){

  .contact-page{
    padding:0;
  }

  .contact-frame{
    border-radius:0;
    padding:22px;
  }

  .contact-frame::before,
  .contact-frame::after,
  .corner,
  .rose-left,
  .rose-right{
    display:none;
  }

  .form-card{
    padding:24px;
  }

  .reservation-banner{
    padding:24px;
    align-items:flex-start;
  }

  .reservation-btn{
    width:100%;
    text-align:center;
  }

}
</style>