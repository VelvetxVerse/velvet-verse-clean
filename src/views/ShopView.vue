<script setup>
import { ref } from 'vue'

import VelvetHeader from '../components/VelvetHeader.vue'
import VelvetFooter from '../components/VelvetFooter.vue'

const form = ref({
  name: '',
  business: '',
  email: '',
  package: 'Paris Edition — Starting at $500',
  message: ''
})

const successMessage = ref('')

function submitInquiry() {

  if (
    !form.value.name ||
    !form.value.email ||
    !form.value.message
  ) {

    successMessage.value =
      'Please complete your name, email, and message ♡'

    return
  }

  const subject = encodeURIComponent(
    'Velvet Verse Paris Edition Inquiry'
  )

  const body = encodeURIComponent(`
Name: ${form.value.name}

Business: ${form.value.business}

Email: ${form.value.email}

Package: ${form.value.package}

Message:
${form.value.message}
  `)

  window.location.href =
    `mailto:VelvetVerse@velvetxverse.com?subject=${subject}&body=${body}`

  successMessage.value =
    'Thank you ♡ Your email app is opening now.'

  form.value = {
    name: '',
    business: '',
    email: '',
    package: 'Paris Edition — Starting at $500',
    message: ''
  }
}
</script>

<template>
  <main class="shop-page">

    <VelvetHeader />

    <!-- HERO -->

    <section class="shop-hero">

      <p class="eyebrow">
        VELVET VERSE SHOP
      </p>

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

    <!-- PRODUCT -->

    <section class="featured-product">

      <div class="product-image">
        <img src="/cafe-tower.jpg" alt="">
      </div>

      <div class="product-copy">

        <p class="eyebrow">
          AVAILABLE NOW
        </p>

        <h2>
          Paris Edition
        </h2>

        <p>
          A romantic, luxury-inspired premade website collection designed for
          cafés, bakeries, beauty brands, boutiques, influencers,
          and modern feminine businesses.
        </p>

        <div class="price">
          Starting at $500
        </div>

        <div class="product-actions">

          <router-link
            to="/paris-edition"
            class="dark-btn"
          >
            View Details
          </router-link>

          <router-link
            to="/paris-demo"
            class="outline-btn"
          >
            View Demo
          </router-link>

        </div>

      </div>

    </section>

    <!-- INQUIRY -->

    <section class="inquiry-section">

      <p class="eyebrow">
        REQUEST THIS COLLECTION
      </p>

      <h2>
        Interested in Paris Edition?
      </h2>

      <p>
        For now, Velvet Verse uses a simple inquiry process instead of checkout.
        Send your project details, preferred collection,
        and customization needs.
      </p>

      <form
        class="inquiry-form"
        @submit.prevent="submitInquiry"
      >

        <input
          v-model="form.name"
          type="text"
          placeholder="Your name"
          required
        >

        <input
          v-model="form.business"
          type="text"
          placeholder="Business name"
        >

        <input
          v-model="form.email"
          type="email"
          placeholder="Email address"
          required
        >

        <select v-model="form.package">

          <option>
            Paris Edition — Starting at $500
          </option>

          <option>
            Paris Edition + Custom Color Palette
          </option>

          <option>
            Paris Edition + Additional Pages
          </option>

          <option>
            Paris Edition + Curated Refinements
          </option>

        </select>

        <textarea
          v-model="form.message"
          placeholder="Tell me about your brand, colors, images, and customizations you want."
          required
        ></textarea>

        <button type="submit">
          REQUEST THIS COLLECTION
        </button>

        <p
          v-if="successMessage"
          class="success-message"
        >
          {{ successMessage }}
        </p>

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

/* HERO */

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

/* PRODUCT */

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

/* INQUIRY */

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
.inquiry-form button,
.success-message{
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

  padding:18px 24px;

  border-radius:999px;

  font-family:sans-serif;

  font-size:9px;

  letter-spacing:4px;

  text-transform:uppercase;

  font-weight:800;

  cursor:pointer;

  transition:.3s ease;
}

.inquiry-form button:hover{
  opacity:.92;
}

.success-message{
  margin-top:8px;

  font-family:sans-serif;

  font-size:13px;

  color:#7a5c55;

  text-align:center;
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
  .inquiry-form{
    grid-template-columns:1fr;
  }

  .featured-product,
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

}
</style>