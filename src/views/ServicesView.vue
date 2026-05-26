<script setup>
import { ref } from 'vue'
import VelvetHeader from '../components/VelvetHeader.vue'
import VelvetFooter from '../components/VelvetFooter.vue'

const showInquiry = ref(false)
const selectedService = ref('')

function openInquiry(service) {
  selectedService.value = service
  showInquiry.value = true
}

function closeInquiry() {
  showInquiry.value = false
}
</script>

<template>
  <main class="services-page">

    <VelvetHeader />

    <!-- HERO -->

    <section class="services-hero">

      <p class="eyebrow">
        VELVET VERSE SERVICES
      </p>

      <h1>
        Luxury digital experiences
        for modern brands & creators.
      </h1>

      <p class="hero-text">
        Velvet Verse blends elegant web design,
        visual storytelling, influencer strategy,
        and curated branding to help businesses
        build a polished online presence.
      </p>

    </section>

    <!-- SERVICES -->

    <section class="main-services">

      <article class="service-card featured">

        <p class="mini-label">
          THE SIGNATURE SETUP
        </p>

        <h2>
          A beautifully branded launch,
          handled for you.
        </h2>

        <p>
          Found the perfect collection but don’t want to handle
          the setup yourself? Velvet Verse installs, styles,
          and refines your website so it feels polished,
          elevated, and ready for launch.
        </p>

        <div class="service-price">
          Starting at $500
        </div>

        <button @click="openInquiry('The Signature Setup')">
          Get Started
        </button>

      </article>

      <article class="service-card">

        <p class="mini-label">
          THE VIP ATELIER
        </p>

        <h2>
          A personalized styling
          experience.
        </h2>

        <p>
          Transform your collection with custom branding,
          elevated styling, refined layouts,
          and luxury-inspired personalization tailored
          specifically to your vision.
        </p>

        <div class="service-price">
          Starting at $900
        </div>

        <button @click="openInquiry('The VIP Atelier')">
          Inquire Now
        </button>

      </article>

      <article class="service-card">

        <p class="mini-label">
          BESPOKE ENHANCEMENTS
        </p>

        <h2>
          Elegant refinements
          & custom features.
        </h2>

        <p>
          Need additional sections, animations,
          custom pages, mobile refinements,
          or unique design details?
          Velvet Verse offers elevated custom upgrades.
        </p>

        <div class="service-price">
          Custom Quote
        </div>

        <button @click="openInquiry('Bespoke Enhancements')">
          Request Details
        </button>

      </article>

    </section>

    <!-- RUSH -->

    <section class="rush-section">

      <div class="rush-left">

        <p class="eyebrow">
          RUSH LAUNCH UPGRADE
        </p>

        <h2>
          Need your website sooner?
        </h2>

        <p>
          Upgrade any installation order to a 2-day
          priority turnaround for a faster luxury launch.
        </p>

      </div>

      <div class="rush-right">

        <div class="rush-price">
          $129
        </div>

        <button @click="openInquiry('Rush Launch Upgrade')">
          Upgrade My Launch
        </button>

      </div>

    </section>

    <!-- CREATOR -->

    <section class="creator-section">

      <p class="eyebrow">
        CREATOR SERVICES
      </p>

      <h2>
        Strategy, storytelling,
        and digital presence for creators.
      </h2>

      <div class="creator-card">

        <div class="creator-left">

          <p class="mini-label">
            THE CREATOR BLUEPRINT
          </p>

          <h3>
            Built for influencers,
            creators, and personal brands.
          </h3>

          <p>
            A luxury-inspired strategy experience designed
            for creators ready to elevate their content,
            collaborations, audience growth,
            and digital presence.
          </p>

          <div class="creator-stats">

            <div>
              <strong>1M+</strong>
              <span>Followers</span>
            </div>

            <div>
              <strong>8M+</strong>
              <span>Monthly Views</span>
            </div>

            <div>
              <strong>Luxury</strong>
              <span>Brand Experience</span>
            </div>

          </div>

        </div>

        <div class="creator-right">

          <article>

            <span>01</span>

            <h4>
              Brand Pitch Vault
            </h4>

            <p>
              Luxury pitch templates, outreach strategies,
              media kit guidance, and negotiation direction.
            </p>

          </article>

          <article>

            <span>02</span>

            <h4>
              Content Positioning
            </h4>

            <p>
              Learn how to create elevated content
              and visual storytelling that attracts
              premium collaborations.
            </p>

          </article>

          <article>

            <span>03</span>

            <h4>
              Platform Strategy
            </h4>

            <p>
              Guidance for influencer platforms,
              affiliate programs, growth strategy,
              and creator opportunities.
            </p>

          </article>

          <article>

            <span>04</span>

            <h4>
              Digital Presence
            </h4>

            <p>
              Combine Velvet Verse web design
              with creator branding for a polished
              online identity.
            </p>

          </article>

        </div>

      </div>

    </section>

    <!-- SOCIAL -->

    <section class="social-section">

      <p class="eyebrow">
        COMING SOON
      </p>

      <h2>
        The Social Edit
      </h2>

      <p>
        Luxury-inspired social media management designed to help
        modern brands maintain a cohesive and elevated
        digital presence across web and social platforms.
      </p>

    </section>

    <!-- FAQ -->

    <section class="faq-section">

      <p class="eyebrow">
        SERVICE FAQ
      </p>

      <h2>
        Questions before booking?
      </h2>

      <div class="faq-list">

        <details open>
          <summary>
            What businesses do you work with?
          </summary>

          <p>
            Velvet Verse works with boutiques,
            beauty brands, cafés, influencers,
            creators, and modern luxury businesses.
          </p>
        </details>

        <details>
          <summary>
            Do you offer customizations?
          </summary>

          <p>
            Yes. Additional pages, custom branding,
            animations, and refinements are available.
          </p>
        </details>

        <details>
          <summary>
            How long does setup take?
          </summary>

          <p>
            Timelines vary by package,
            but rush upgrades are available.
          </p>
        </details>

        <details>
          <summary>
            Is everything mobile responsive?
          </summary>

          <p>
            Yes. Every Velvet Verse experience
            is designed responsively for mobile,
            tablet, and desktop.
          </p>
        </details>

      </div>

    </section>

    <!-- CONTACT -->

    <section class="contact-section">

      <p class="eyebrow">
        READY TO BEGIN?
      </p>

      <h2>
        Let’s create something beautiful.
      </h2>

      <a href="mailto:VelvetVerse@velvetxverse.com">
        VelvetVerse@velvetxverse.com
      </a>

    </section>

    <!-- MODAL -->

    <div
      v-if="showInquiry"
      class="modal-overlay"
    >
      <div class="modal-box">

        <button
          class="close-btn"
          @click="closeInquiry"
        >
          ×
        </button>

        <p class="eyebrow">
          SERVICE INQUIRY
        </p>

        <h2>
          {{ selectedService }}
        </h2>

        <p>
          Please email Velvet Verse with your name,
          business, preferred service,
          and a short description of what you need.
        </p>

        <a href="mailto:VelvetVerse@velvetxverse.com">
          VelvetVerse@velvetxverse.com
        </a>

      </div>
    </div>

    <VelvetFooter />

  </main>
</template>

<style scoped>
.services-page{
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

.mini-label{
  font-family:sans-serif;
  font-size:8px;
  letter-spacing:4px;
  text-transform:uppercase;
  color:#b9857b;
  font-weight:800;
}

/* HERO */

.services-hero{
  max-width:900px;
  margin:auto;
  padding:50px 24px 36px;
  text-align:center;
}

.services-hero h1{
  margin:14px auto 18px;
  font-size:clamp(34px,4vw,58px);
  line-height:.95;
  font-weight:300;
}

.hero-text{
  max-width:640px;
  margin:auto;
  font-family:sans-serif;
  font-size:12px;
  line-height:1.9;
  color:#655956;
}

/* SERVICES */

.main-services{
  max-width:1180px;
  margin:auto;
  padding:0 50px 40px;

  display:grid;
  grid-template-columns:repeat(3,1fr);

  gap:18px;
}

.service-card{
  background:white;
  border:1px solid #eadad6;
  border-radius:24px;
  padding:28px 26px;
  display:flex;
  flex-direction:column;
}

.featured{
  background:#1b1717;
  color:white;
}

.featured p{
  color:#e6ddda;
}

.service-card h2{
  margin:16px 0 16px;
  font-size:32px;
  line-height:.95;
  font-weight:300;
}

.service-card p{
  font-family:sans-serif;
  font-size:12px;
  line-height:1.9;
  color:#655956;
}

.service-price{
  margin-top:auto;
  padding-top:22px;
  font-size:18px;
  letter-spacing:2px;
  font-weight:300;
}

.service-card button,
.rush-right button{
  margin-top:18px;
  border:none;
  background:#1b1717;
  color:white;
  padding:12px 18px;
  border-radius:999px;
  font-family:sans-serif;
  font-size:8px;
  letter-spacing:3px;
  text-transform:uppercase;
  font-weight:800;
  cursor:pointer;
}

.featured button{
  background:#f3d0c7;
  color:#1b1717;
}

/* RUSH */

.rush-section{
  max-width:1180px;
  margin:auto;
  padding:28px 34px;
  background:#f8efeb;
  border-radius:24px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:30px;
}

.rush-left h2{
  margin:10px 0;
  font-size:34px;
  line-height:1;
  font-weight:300;
}

.rush-left p{
  font-family:sans-serif;
  font-size:12px;
  line-height:1.8;
  color:#655956;
}

.rush-price{
  font-size:54px;
  line-height:1;
  font-weight:300;
}

/* CREATOR */

.creator-section{
  padding:46px 24px;
  text-align:center;
}

.creator-section h2{
  max-width:700px;
  margin:14px auto 34px;
  font-size:clamp(28px,3vw,44px);
  line-height:.95;
  font-weight:300;
}

.creator-card{
  max-width:1180px;
  margin:auto;
  display:grid;
  grid-template-columns:.9fr 1.1fr;
  gap:20px;
  text-align:left;
}

.creator-left{
  background:#1b1717;
  color:white;
  border-radius:24px;
  padding:30px;
}

.creator-left h3{
  margin:16px 0 18px;
  font-size:32px;
  line-height:.95;
  font-weight:300;
}

.creator-left p{
  font-family:sans-serif;
  font-size:12px;
  line-height:1.9;
  color:#ebe3df;
}

.creator-stats{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:10px;
  margin-top:24px;
}

.creator-stats div{
  border:1px solid rgba(255,255,255,.15);
  border-radius:16px;
  padding:14px 10px;
  text-align:center;
}

.creator-stats strong{
  display:block;
  font-size:20px;
  font-weight:300;
}

.creator-stats span{
  font-family:sans-serif;
  font-size:8px;
  letter-spacing:2px;
  text-transform:uppercase;
  color:#d8b4aa;
}

.creator-right{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:14px;
}

.creator-right article{
  background:white;
  border:1px solid #eadad6;
  border-radius:18px;
  padding:22px;
}

.creator-right span{
  font-family:sans-serif;
  font-size:8px;
  letter-spacing:4px;
  color:#b9857b;
  font-weight:800;
}

.creator-right h4{
  margin:14px 0 12px;
  font-size:22px;
  line-height:1;
  font-weight:300;
}

.creator-right p{
  font-family:sans-serif;
  font-size:12px;
  line-height:1.8;
  color:#655956;
}

/* SOCIAL */

.social-section{
  padding:20px 24px 50px;
  text-align:center;
}

.social-section h2{
  margin:14px 0;
  font-size:38px;
  line-height:1;
  font-weight:300;
}

.social-section p{
  max-width:620px;
  margin:auto;
  font-family:sans-serif;
  font-size:12px;
  line-height:1.9;
  color:#655956;
}

/* FAQ */

.faq-section{
  max-width:900px;
  margin:auto;
  padding:0 24px 50px;
  text-align:center;
}

.faq-section h2{
  margin:12px 0 28px;
  font-size:36px;
  line-height:1;
  font-weight:300;
}

.faq-list{
  text-align:left;
}

details{
  background:white;
  border:1px solid #eadad6;
  border-radius:16px;
  padding:18px 20px;
  margin-bottom:12px;
}

summary{
  cursor:pointer;
  font-family:sans-serif;
  font-size:9px;
  letter-spacing:2px;
  text-transform:uppercase;
  font-weight:800;
}

details p{
  margin-top:14px;
  font-family:sans-serif;
  font-size:12px;
  line-height:1.8;
  color:#655956;
}

/* CONTACT */

.contact-section{
  padding:0 24px 60px;
  text-align:center;
}

.contact-section h2{
  margin:14px 0 18px;
  font-size:42px;
  line-height:1;
  font-weight:300;
}

.contact-section a{
  color:#1b1717;
  font-family:sans-serif;
  font-size:11px;
  letter-spacing:2px;
  font-weight:800;
  text-decoration:none;
}

/* MODAL */

.modal-overlay{
  position:fixed;
  inset:0;
  background:rgba(20,16,16,.65);
  display:flex;
  align-items:center;
  justify-content:center;
  z-index:9999;
  padding:24px;
}

.modal-box{
  width:100%;
  max-width:520px;
  background:#fff8f5;
  border:1px solid #eadad6;
  border-radius:28px;
  padding:42px;
  text-align:center;
  position:relative;
}

.close-btn{
  position:absolute;
  top:16px;
  right:18px;
  border:none;
  background:none;
  font-size:30px;
  cursor:pointer;
}

.modal-box h2{
  font-size:36px;
  font-weight:300;
  margin:14px 0;
}

.modal-box p{
  font-family:sans-serif;
  font-size:12px;
  line-height:1.8;
  color:#655956;
}

.modal-box a{
  display:inline-block;
  margin-top:18px;
  color:#1b1717;
  font-family:sans-serif;
  font-size:11px;
  letter-spacing:2px;
  font-weight:800;
}

/* MOBILE */

@media(max-width:900px){

  .main-services,
  .creator-card,
  .creator-right,
  .creator-stats{
    grid-template-columns:1fr;
  }

  .rush-section{
    flex-direction:column;
    text-align:center;
  }

  .main-services{
    padding-left:24px;
    padding-right:24px;
  }

}
</style>