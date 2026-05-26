<script setup>
import VelvetHeader from '../components/VelvetHeader.vue'
import VelvetFooter from '../components/VelvetFooter.vue'
</script>

<template>
  <main class="founder-page">
    <VelvetHeader />

    <section class="founder-hero">
      <div class="founder-image">
        <img src="/IMG_0936.jpg" alt="">
      </div>

      <div class="founder-copy">
        <p class="eyebrow">MEET THE FOUNDER</p>

        <h1>
          Built with elegance,
          intention, and real experience.
        </h1>

        <p>
          I founded Velvet Verse for the woman who refuses to compromise
          on style or substance. I know firsthand how expensive and
          underwhelming traditional web design can be.
        </p>

        <p>
          That’s why my work focuses on a luxury-inspired client experience
          without the prohibitive price tag. By combining clean development
          with intentional storytelling, I help small businesses launch sites
          that are not just functional, but truly elegant.
        </p>
      </div>
    </section>

    <section class="quote-section">
      <p>
        “Your website should feel like an extension of your brand —
        polished, intentional, feminine, and unforgettable.”
      </p>
    </section>

    <section class="values-section">
      <p class="eyebrow">VELVET VERSE VALUES</p>

      <h2>
        A softer approach to modern web design.
      </h2>

      <div class="values-grid">
        <article>
          <span>01</span>
          <h3>Elegance</h3>
          <p>
            Every layout is designed to feel refined, feminine,
            and visually memorable.
          </p>
        </article>

        <article>
          <span>02</span>
          <h3>Clarity</h3>
          <p>
            Beautiful design should still be easy to navigate,
            understand, and use.
          </p>
        </article>

        <article>
          <span>03</span>
          <h3>Accessibility</h3>
          <p>
            Luxury-inspired websites should feel more attainable
            for small businesses and creators.
          </p>
        </article>
      </div>
    </section>

    <section class="signature-section">
      <p class="eyebrow">WHY VELVET VERSE</p>

      <h2>
        For brands that want beauty without confusion.
      </h2>

      <p>
        Velvet Verse was created to help entrepreneurs, creators,
        cafés, beauty brands, boutiques, and modern women build websites
        that feel elevated without feeling overwhelming.
      </p>

      <router-link to="/services">
        View Services
      </router-link>
    </section>

    <VelvetFooter />
  </main>
</template>

<style scoped>
.founder-page{
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

.founder-hero{
  max-width:1100px;
  margin:auto;
  padding:56px 50px 44px;
  display:grid;
  grid-template-columns:.9fr 1.1fr;
  gap:46px;
  align-items:center;
}

.founder-image{
  overflow:hidden;
  border-radius:45% 45% 0 0;
  box-shadow:0 18px 35px rgba(0,0,0,.06);
}

.founder-image img{
  width:100%;
  height:520px;
  object-fit:cover;
  display:block;
}

.founder-copy h1{
  margin:14px 0 20px;
  font-size:clamp(34px,4vw,56px);
  line-height:.95;
  font-weight:300;
}

.founder-copy p{
  font-family:sans-serif;
  font-size:13px;
  line-height:1.9;
  color:#655956;
  margin-bottom:18px;
}

.quote-section{
  max-width:860px;
  margin:auto;
  padding:34px 24px;
  text-align:center;
}

.quote-section p{
  font-size:clamp(30px,4vw,46px);
  line-height:1.1;
  font-style:italic;
  font-weight:300;
  color:#2a2a2a;
}

.values-section{
  padding:50px 50px;
  background:#fdf6f2;
  text-align:center;
}

.values-section h2{
  margin:14px auto 34px;
  font-size:clamp(30px,3vw,44px);
  line-height:1;
  font-weight:300;
}

.values-grid{
  max-width:1000px;
  margin:auto;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:16px;
}

.values-grid article{
  background:white;
  border:1px solid #eadad6;
  border-radius:22px;
  padding:28px 24px;
}

.values-grid span{
  font-family:sans-serif;
  font-size:8px;
  letter-spacing:4px;
  color:#b9857b;
  font-weight:800;
}

.values-grid h3{
  margin:14px 0;
  font-size:28px;
  line-height:1;
  font-weight:300;
}

.values-grid p{
  font-family:sans-serif;
  font-size:12px;
  line-height:1.8;
  color:#655956;
}

.signature-section{
  max-width:820px;
  margin:auto;
  padding:48px 24px 10px;
  text-align:center;
}

.signature-section h2{
  margin:14px 0 18px;
  font-size:clamp(32px,3vw,46px);
  line-height:1;
  font-weight:300;
}

.signature-section p{
  max-width:680px;
  margin:0 auto 26px;
  font-family:sans-serif;
  font-size:13px;
  line-height:1.9;
  color:#655956;
}

.signature-section a{
  display:inline-block;
  text-decoration:none;
  background:#1b1717;
  color:white;
  padding:13px 22px;
  border-radius:999px;
  font-family:sans-serif;
  font-size:8px;
  letter-spacing:3px;
  text-transform:uppercase;
  font-weight:800;
}

@media(max-width:900px){
  .founder-hero,
  .values-grid{
    grid-template-columns:1fr;
  }

  .founder-hero,
  .values-section{
    padding-left:24px;
    padding-right:24px;
  }

  .founder-image img{
    height:420px;
  }
}
</style>