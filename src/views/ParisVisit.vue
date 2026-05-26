<script setup>
import ParisHeader from '../components/ParisHeader.vue'
import ParisFooter from '../components/ParisFooter.vue'
import ParisInstagramCTA from '../components/ParisInstagramCTA.vue'
</script>

<template>
  <main class="visit-page">

    <section class="visit-frame">

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

      <section class="visit-hero">

        <p class="eyebrow">
          VISIT LA DOUCEUR
        </p>

        <div class="divider">
          <span></span>
          ❧
          <span></span>
        </div>

        <h1>
          A romantic café<br>
          experience in Paris.
        </h1>

        <div class="heart-divider">
          <span></span>
          ♡
          <span></span>
        </div>

        <p>
          Soft pastries, warm coffee,
          feminine interiors, and elegant Paris mornings.
        </p>

      </section>

      <!-- VISIT GRID -->

      <section class="visit-grid">

        <!-- LEFT -->

        <div class="visit-info">

          <article class="info-card">

            <p class="small-title">
              ADDRESS
            </p>

            <h2>
              24 Rue des Rosiers,<br>
              Paris, France
            </h2>

            <p>
              Located in the heart of Paris,
              surrounded by charming cafés,
              boutiques, and romantic streets.
            </p>

          </article>

          <article class="info-card">

            <p class="small-title">
              HOURS
            </p>

            <div class="hours">
              <div>
                <span>Monday — Friday</span>
                <strong>7AM — 7PM</strong>
              </div>

              <div>
                <span>Saturday — Sunday</span>
                <strong>8AM — 8PM</strong>
              </div>
            </div>

          </article>

          <article class="info-card">

            <p class="small-title">
              CONTACT
            </p>

            <p class="contact-line">
              bonjour@ladouceur.fr
            </p>

            <p class="contact-line">
              +33 1 42 61 27 06
            </p>

            <div class="socials">

              <a href="https://instagram.com" target="_blank">
                INSTAGRAM
              </a>

              <a href="https://tiktok.com" target="_blank">
                TIKTOK
              </a>

              <a href="https://pinterest.com" target="_blank">
                PINTEREST
              </a>

            </div>

          </article>

        </div>

        <!-- RIGHT -->

        <div class="visit-visuals">

          <div class="cafe-image">
            <img
              src="/paris-cafe-moment.jpg"
              alt=""
            >
          </div>

          <div class="map-card">

            <p class="small-title">
              FIND US
            </p>

            <div class="map-wrap">

              <iframe
                src="https://maps.google.com/maps?q=Paris&t=&z=13&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                allowfullscreen
              ></iframe>

            </div>

          </div>

        </div>

      </section>

      <!-- RESERVATION -->

      <section class="reservation-banner">

        <div>

          <p class="eyebrow">
            RESERVATIONS
          </p>

          <h2>
            Book your Paris café moment.
          </h2>

          <p>
            Romantic brunches, tea service,
            celebrations, and feminine luxury experiences.
          </p>

        </div>

        <a
          href="mailto:bonjour@ladouceur.fr?subject=Reservation Inquiry"
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
.visit-page{
  min-height:100vh;
  padding:16px;
  background:var(--bg);
  color:var(--text);
}

.visit-frame{
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

.visit-frame::before{
  content:"";
  position:absolute;
  inset:12px;
  border:1px solid var(--gold-line);
  border-radius:24px;
}

.visit-frame::after{
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
  opacity:.18;
  z-index:2;
  pointer-events:none;
}

.rose-right{
  position:absolute;
  right:-70px;
  bottom:180px;
  width:220px;
  opacity:.16;
  z-index:2;
  pointer-events:none;
}

/* HERO */

.visit-hero{
  position:relative;
  z-index:3;
  max-width:760px;
  margin:0 auto 54px;
  text-align:center;
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
  width:60px;
  height:1px;
  background:var(--gold-line);
}

.visit-hero h1{
  font-size:clamp(54px,7vw,82px);
  line-height:.95;
  font-weight:300;
  margin-bottom:18px;
}

.visit-hero p{
  max-width:520px;
  margin:0 auto;
  color:var(--muted);
  font-family:Arial,sans-serif;
  font-size:14px;
  line-height:2;
}

/* GRID */

.visit-grid{
  position:relative;
  z-index:3;
  display:grid;
  grid-template-columns:.9fr 1.1fr;
  gap:26px;
  align-items:start;
}

.visit-info{
  display:grid;
  gap:18px;
}

.info-card{
  padding:30px;
  border-radius:24px;
  border:1px solid var(--gold-line);
  background:rgba(255,255,255,.52);
}

.small-title{
  color:var(--accent);
  font-family:Arial,sans-serif;
  font-size:9px;
  letter-spacing:4px;
  font-weight:800;
}

.info-card h2{
  margin:12px 0;
  font-size:36px;
  line-height:1.1;
  font-weight:300;
}

.info-card p{
  color:var(--muted);
  font-family:Arial,sans-serif;
  font-size:13px;
  line-height:1.9;
}

.hours{
  display:grid;
  gap:18px;
  margin-top:18px;
}

.hours div{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:20px;
}

.hours span{
  color:var(--muted);
  font-family:Arial,sans-serif;
  font-size:12px;
}

.hours strong{
  color:var(--gold);
  font-size:14px;
}

.contact-line{
  margin-top:8px;
}

.socials{
  display:flex;
  gap:10px;
  flex-wrap:wrap;
  margin-top:18px;
}

.socials a{
  padding:10px 14px;
  border-radius:999px;
  border:1px solid var(--gold-line);
  background:var(--card);
  color:var(--text);
  text-decoration:none;
  font-family:Arial,sans-serif;
  font-size:9px;
  letter-spacing:2px;
  font-weight:800;
}

/* RIGHT */

.visit-visuals{
  display:grid;
  gap:20px;
}

.cafe-image{
  overflow:hidden;
  border-radius:26px;
  border:1px solid var(--gold);
}

.cafe-image img{
  width:100%;
  height:420px;
  object-fit:cover;
}

.map-card{
  padding:24px;
  border-radius:24px;
  border:1px solid var(--gold-line);
  background:rgba(255,255,255,.52);
}

.map-wrap{
  overflow:hidden;
  border-radius:18px;
  margin-top:18px;
}

.map-wrap iframe{
  width:100%;
  height:320px;
  border:none;
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
  font-size:42px;
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
}

/* MOBILE */

@media(max-width:1000px){

  .visit-grid,
  .reservation-banner{
    grid-template-columns:1fr;
    flex-direction:column;
  }

}

@media(max-width:760px){

  .visit-page{
    padding:0;
  }

  .visit-frame{
    border-radius:0;
    padding:22px;
  }

  .corner,
  .rose-left,
  .rose-right{
    display:none;
  }

  .reservation-btn{
    width:100%;
  }

}
</style>