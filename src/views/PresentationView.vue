<script setup>
import { ref } from 'vue'
import VelvetHeader from '../components/VelvetHeader.vue'
import VelvetFooter from '../components/VelvetFooter.vue'

const currentSlide = ref(0)

const slides = [
  {
    eyebrow: 'WELCOME',
    title: 'Luxury websites with purpose, beauty, and strategy.',
    text: 'Velvet Verse creates elegant digital experiences for cafés, beauty brands, boutiques, creators, influencers, and modern businesses that want to look polished online.',
    image: '/cafeparis.jpg'
  },

  {
    eyebrow: 'WHY WORK WITH ME',
    title: 'A website should build trust before anyone reads a word.',
    text: 'I focus on clean layout, elegant visuals, smooth navigation, mobile responsiveness, and clear calls-to-action so visitors understand your brand quickly.',
    image: '/paris-interior.png'
  },

  {
    eyebrow: 'MY WEB SKILLS',
    title: 'Design, code, structure, and user experience.',
    text: 'This project uses Vue, components, routing, responsive CSS, reusable layouts, interactive slideshow logic, styled navigation, and consistent branding.',
    image: '/latte.png'
  },

  {
    eyebrow: 'CLIENT PROCESS',
    title: 'A calm and organized design experience.',
    text: 'My process moves through discovery, design direction, development, review, mobile testing, refinements, and final launch preparation.',
    image: '/IMG_0936.jpg'
  },

  {
    eyebrow: 'PREMADE COLLECTIONS',
    title: 'Affordable luxury-inspired website collections.',
    text: 'Velvet Verse also offers premade website collections for clients who want a polished look with a faster and more accessible experience.',
    image: '/paris-cafe.jpg'
  },

  {
    eyebrow: 'FINAL MESSAGE',
    title: 'A beautiful website should feel effortless and unforgettable.',
    text: 'Velvet Verse helps brands communicate professionalism, style, trust, and clarity through thoughtful web design and a smooth client experience.',
    image: '/nycdemo.PNG'
  }
]

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

function previousSlide() {
  currentSlide.value =
    currentSlide.value === 0
      ? slides.length - 1
      : currentSlide.value - 1
}

function goToSlide(index) {
  currentSlide.value = index
}
</script>

<template>
  <main class="presentation-page">

    <VelvetHeader />

    <!-- HERO -->

    <section class="presentation-hero">

      <p class="eyebrow">
        CLIENT SLIDESHOW PROJECT
      </p>

      <h1>
        Why brands should work
        with Velvet Verse.
      </h1>

      <p>
        A polished slideshow presentation explaining my web design skills,
        project management process, responsive development,
        and luxury-inspired client experience.
      </p>

    </section>

    <!-- SLIDESHOW -->

    <section class="slideshow-section">

      <article class="slide-card">

        <div class="slide-image">

          <img
            :src="slides[currentSlide].image"
            :alt="slides[currentSlide].title"
          >

        </div>

        <div class="slide-content">

          <p class="slide-count">
            {{ currentSlide + 1 }} / {{ slides.length }}
          </p>

          <p class="eyebrow">
            {{ slides[currentSlide].eyebrow }}
          </p>

          <h2>
            {{ slides[currentSlide].title }}
          </h2>

          <p class="slide-text">
            {{ slides[currentSlide].text }}
          </p>

          <div class="slide-buttons">

            <button
              type="button"
              @click="previousSlide"
            >
              Previous
            </button>

            <button
              type="button"
              @click="nextSlide"
            >
              Next
            </button>

          </div>

        </div>

      </article>

      <!-- DOTS -->

      <div class="dots">

        <button
          v-for="(slide, index) in slides"
          :key="slide.title"
          :class="{ active: currentSlide === index }"
          @click="goToSlide(index)"
        ></button>

      </div>

    </section>

    <!-- REQUIREMENTS -->

    <section class="requirements-section">

      <p class="eyebrow">
        PROJECT REQUIREMENTS
      </p>

      <h2>
        Built to meet the school project goals.
      </h2>

      <div class="requirements-grid">

        <article>

          <span>01</span>

          <h3>
            Working Slideshow
          </h3>

          <p>
            Vue-powered slideshow with interactive navigation,
            previous/next controls, and dynamic slide updates.
          </p>

        </article>

        <article>

          <span>02</span>

          <h3>
            Responsive Design
          </h3>

          <p>
            Layouts are optimized for desktop,
            tablet, and mobile experiences.
          </p>

        </article>

        <article>

          <span>03</span>

          <h3>
            Client Experience
          </h3>

          <p>
            The presentation clearly explains
            why clients should work with Velvet Verse.
          </p>

        </article>

        <article>

          <span>04</span>

          <h3>
            Project Structure
          </h3>

          <p>
            Built using Vue components,
            reusable layouts, routing, and scoped CSS.
          </p>

        </article>

        <article>

          <span>05</span>

          <h3>
            Smooth UX
          </h3>

          <p>
            Elegant spacing, intuitive navigation,
            and polished interactions improve usability.
          </p>

        </article>

        <article>

          <span>06</span>

          <h3>
            Modern Branding
          </h3>

          <p>
            Velvet Verse combines luxury aesthetics,
            modern web design, and strategic storytelling.
          </p>

        </article>

      </div>

    </section>

    <!-- CTA -->

    <section class="cta-section">

      <p class="eyebrow">
        EXPLORE MORE
      </p>

      <h2>
        View collections, services,
        and the Velvet Verse shop.
      </h2>

      <div class="cta-buttons">

        <router-link to="/collections">
          Collections
        </router-link>

        <router-link to="/services">
          Services
        </router-link>

        <router-link to="/shop">
          Shop
        </router-link>

      </div>

    </section>

    <VelvetFooter />

  </main>
</template>

<style scoped>
.presentation-page{
  min-height:100vh;
  background:#fff8f5;
  color:#2a2a2a;
  font-family:'Cormorant Garamond', serif;
}

.eyebrow{
  font-family:sans-serif;
  font-size:8px;
  letter-spacing:5px;
  text-transform:uppercase;
  color:#b9857b;
  font-weight:800;
}

/* HERO */

.presentation-hero{
  max-width:820px;
  margin:auto;
  padding:46px 24px 28px;
  text-align:center;
}

.presentation-hero h1{
  margin:12px auto 16px;
  font-size:clamp(30px,4vw,52px);
  line-height:.95;
  font-weight:300;
}

.presentation-hero p{
  max-width:620px;
  margin:auto;
  font-family:sans-serif;
  font-size:12px;
  line-height:1.9;
  color:#655956;
}

/* SLIDESHOW */

.slideshow-section{
  max-width:1040px;
  margin:auto;
  padding:0 24px 40px;
}

.slide-card{
  display:grid;
  grid-template-columns:.9fr 1.1fr;

  min-height:360px;

  background:white;

  border:1px solid #eadad6;

  border-radius:24px;

  overflow:hidden;

  box-shadow:0 12px 24px rgba(0,0,0,.03);
}

.slide-image{
  height:360px;
  min-height:360px;
  max-height:360px;
  overflow:hidden;
}

.slide-image img{
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
}

.slide-content{
  padding:34px;
  display:flex;
  flex-direction:column;
  justify-content:center;
}

.slide-count{
  margin:0 0 14px;

  font-family:sans-serif;

  font-size:8px;

  letter-spacing:4px;

  color:#b9857b;

  font-weight:800;
}

.slide-content h2{
  margin:12px 0 16px;

  font-size:clamp(28px,3vw,42px);

  line-height:1;

  font-weight:300;
}

.slide-text{
  font-family:sans-serif;

  font-size:12px;

  line-height:1.9;

  color:#655956;
}

.slide-buttons{
  display:flex;
  gap:10px;
  margin-top:22px;
}

.slide-buttons button{
  border:none;

  background:#1b1717;

  color:white;

  padding:11px 16px;

  border-radius:999px;

  font-family:sans-serif;

  font-size:8px;

  letter-spacing:3px;

  text-transform:uppercase;

  font-weight:800;

  cursor:pointer;
}

.slide-buttons button:first-child{
  background:#fff8f5;
  color:#1b1717;
  border:1px solid #eadad6;
}

/* DOTS */

.dots{
  display:flex;
  justify-content:center;
  gap:10px;
  margin-top:20px;
}

.dots button{
  width:9px;
  height:9px;
  border-radius:999px;
  border:none;
  background:#dbc7c1;
  cursor:pointer;
}

.dots button.active{
  background:#1b1717;
}

/* REQUIREMENTS */

.requirements-section{
  padding:44px 24px;
  background:#fdf6f2;
  text-align:center;
}

.requirements-section h2{
  margin:12px auto 28px;

  font-size:clamp(28px,3vw,42px);

  line-height:1;

  font-weight:300;
}

.requirements-grid{
  max-width:1040px;
  margin:auto;

  display:grid;
  grid-template-columns:repeat(3,1fr);

  gap:14px;
}

.requirements-grid article{
  background:white;

  border:1px solid #eadad6;

  border-radius:18px;

  padding:22px 18px;
}

.requirements-grid span{
  font-family:sans-serif;

  font-size:8px;

  letter-spacing:4px;

  color:#b9857b;

  font-weight:800;
}

.requirements-grid h3{
  margin:10px 0;

  font-size:22px;

  line-height:1;

  font-weight:300;
}

.requirements-grid p{
  font-family:sans-serif;

  font-size:11px;

  line-height:1.8;

  color:#655956;
}

/* CTA */

.cta-section{
  padding:44px 24px 20px;
  text-align:center;
}

.cta-section h2{
  margin:12px auto 22px;

  font-size:clamp(28px,3vw,40px);

  line-height:1;

  font-weight:300;
}

.cta-buttons{
  display:flex;
  justify-content:center;
  gap:12px;
  flex-wrap:wrap;
}

.cta-buttons a{
  display:inline-block;

  text-decoration:none;

  background:#1b1717;

  color:white;

  padding:12px 18px;

  border-radius:999px;

  font-family:sans-serif;

  font-size:8px;

  letter-spacing:3px;

  text-transform:uppercase;

  font-weight:800;
}

.cta-buttons a:nth-child(2){
  background:#f3d0c7;
  color:#1b1717;
}

.cta-buttons a:last-child{
  background:#fff8f5;
  color:#1b1717;
  border:1px solid #eadad6;
}

/* MOBILE */

@media(max-width:900px){

  .slide-card,
  .requirements-grid{
    grid-template-columns:1fr;
  }

  .slide-image{
    height:260px;
    min-height:260px;
    max-height:260px;
  }

  .slide-content{
    padding:28px 22px;
  }

}
</style>