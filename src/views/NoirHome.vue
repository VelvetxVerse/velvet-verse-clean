<template>
  <main class="noir-page">

    <!-- HERO -->

    <section class="hero">

      <header class="noir-header">

        <router-link to="/noir-home" class="brand">
          <span>NOIR ATELIER</span>
          <small>NEW YORK</small>
        </router-link>

        <nav>
          <a href="#about">ABOUT</a>
          <a href="#services">SERVICES</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#gallery">GALLERY</a>
          <a href="#contact">CONTACT</a>
        </nav>

        <a href="#contact" class="book-btn">
          BOOK PRIVATE
        </a>

      </header>

      <img
        src="/noir-hero.jpg"
        class="hero-img"
        alt=""
      >

      <div class="hero-shade"></div>

      <div class="hero-copy">

        <p class="eyebrow">
          PRIVATE HAIR ARTISTRY
        </p>

        <h1>
          Private.<br>
          Personal.<br>
          Exceptional.
        </h1>

        <p class="hero-sub">
          Hair artistry, redefined.
        </p>

        <a href="#contact" class="outline-light">
          BOOK YOUR EXPERIENCE
        </a>

        <p class="hero-note">
          PRIVATE APPOINTMENTS<br>
          IN NEW YORK CITY
        </p>

      </div>

    </section>

    <!-- ABOUT -->

    <section id="about" class="split-section">

      <div class="split-image">
        <img src="/noir-waves.jpg" alt="">
      </div>

      <div class="split-copy">

        <p class="eyebrow">
          ABOUT
        </p>

        <h2>
          Artistry in its most personal form.
        </h2>

        <p>
          Noir Atelier is a private hair artistry experience
          offering discreet, on-location services for modern women,
          brides, and clients who value elevated beauty,
          privacy, and detail.
        </p>

        <a href="#services" class="outline-dark">
          OUR PHILOSOPHY
        </a>

      </div>

    </section>

    <!-- SERVICES -->

    <section id="services" class="services">

      <p class="eyebrow">
        SERVICES
      </p>

      <div class="services-grid">

        <article>
          <img src="/noir-styling.jpg" alt="">
          <h3>Styling</h3>
          <p>
            Effortless, modern, and tailored to your moment.
          </p>
          <a href="#contact">LEARN MORE —</a>
        </article>

        <article>
          <img src="/noir-color.jpg" alt="">
          <h3>Color</h3>
          <p>
            Dimensional, refined color designed for you.
          </p>
          <a href="#contact">LEARN MORE —</a>
        </article>

        <article>
          <img src="/noir-bridal.jpg" alt="">
          <h3>Bridal</h3>
          <p>
            Soft glam and elegant bridal styling for 2026.
          </p>
          <a href="#contact">LEARN MORE —</a>
        </article>

      </div>

    </section>

    <!-- EXPERIENCE -->

    <section id="experience" class="experience">

      <div class="experience-image">
        <img src="/noir-city.jpg" alt="">
      </div>

      <div class="experience-copy">

        <h2>
          Beauty, wherever you are.
        </h2>

        <p>
          Private appointments in your home, hotel, or event suite.
          Discreet. Luxurious. Designed around you.
        </p>

        <a href="#contact" class="outline-dark">
          BOOK PRIVATE
        </a>

      </div>

    </section>

    <!-- CONTACT -->

    <section id="contact" class="contact">

      <p class="eyebrow">
        BEGIN YOUR CONSULTATION
      </p>

      <h2>
        Booking 2026 Bridal Season
      </h2>

      <p>
        Custom Color • Cuts • Bridal • Skin Care<br>
        Soft Glam Event Makeup Artist
      </p>

      <a
        href="mailto:Girondataylor@gmail.com?subject=Noir Atelier Private Booking Inquiry"
        class="contact-btn"
      >
        REQUEST PRIVATE BOOKING
      </a>

    </section>

    <!-- FOOTER -->

    <footer class="noir-footer">

      <router-link to="/noir-home" class="brand">
        <span>NOIR ATELIER</span>
        <small>NEW YORK</small>
      </router-link>

      <nav>
        <a href="#about">ABOUT</a>
        <a href="#services">SERVICES</a>
        <a href="#experience">EXPERIENCE</a>
        <a href="#gallery">GALLERY</a>
        <a href="#contact">CONTACT</a>
      </nav>

      <div class="socials">
        <a href="https://instagram.com/taylorgstylist" target="_blank">IG</a>
        <a href="mailto:Girondataylor@gmail.com">✉</a>
      </div>

    </footer>

  </main>
</template>

<style scoped>
.noir-page{
  min-height:100vh;
  background:#080807;
  color:#f4efe8;
  font-family:'Cormorant Garamond', serif;
}

/* HEADER */

.noir-header{
  position:absolute;
  top:0;
  left:0;
  right:0;
  z-index:10;

  display:grid;
  grid-template-columns:auto 1fr auto;
  align-items:center;
  gap:40px;

  padding:34px 52px;
}

.brand{
  color:#f4efe8;
  text-decoration:none;
  letter-spacing:3px;
}

.brand span{
  display:block;
  font-size:22px;
  font-weight:300;
}

.brand small{
  display:block;
  margin-top:8px;
  text-align:center;
  font-family:Arial,sans-serif;
  font-size:8px;
  letter-spacing:4px;
}

.noir-header nav,
.noir-footer nav{
  display:flex;
  justify-content:center;
  gap:54px;
}

.noir-header nav a,
.noir-footer nav a{
  color:#f4efe8;
  text-decoration:none;
  font-family:Arial,sans-serif;
  font-size:9px;
  letter-spacing:3px;
  font-weight:700;
}

.book-btn{
  padding:17px 34px;
  border:1px solid rgba(244,239,232,.5);
  color:#f4efe8;
  text-decoration:none;
  font-family:Arial,sans-serif;
  font-size:9px;
  letter-spacing:3px;
}

/* HERO */

.hero{
  position:relative;
  min-height:100vh;
  overflow:hidden;
}

.hero-img{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  object-fit:cover;
}

.hero-shade{
  position:absolute;
  inset:0;
  background:
    linear-gradient(
      to right,
      rgba(0,0,0,.9) 0%,
      rgba(0,0,0,.65) 32%,
      rgba(0,0,0,.18) 65%,
      rgba(0,0,0,.45) 100%
    );
}

.hero-copy{
  position:relative;
  z-index:3;

  min-height:100vh;

  display:flex;
  flex-direction:column;
  justify-content:center;

  max-width:520px;

  padding-left:96px;
  padding-top:80px;
}

.eyebrow{
  margin:0;
  font-family:Arial,sans-serif;
  font-size:10px;
  letter-spacing:5px;
  text-transform:uppercase;
  color:#d8cfc5;
}

.hero-copy h1{
  margin:28px 0 22px;
  font-size:clamp(54px,6vw,86px);
  line-height:.96;
  font-weight:300;
  text-transform:uppercase;
}

.hero-sub{
  font-family:Arial,sans-serif;
  font-size:13px;
  letter-spacing:5px;
  text-transform:uppercase;
}

.outline-light,
.outline-dark,
.contact-btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;

  width:max-content;

  margin-top:34px;

  padding:17px 34px;

  border:1px solid rgba(244,239,232,.45);

  color:#f4efe8;

  text-decoration:none;

  font-family:Arial,sans-serif;

  font-size:9px;

  letter-spacing:3px;

  text-transform:uppercase;

  font-weight:700;
}

.hero-note{
  margin-top:90px;
  font-family:Arial,sans-serif;
  font-size:10px;
  letter-spacing:3px;
  line-height:1.7;
}

/* SPLIT */

.split-section{
  display:grid;
  grid-template-columns:1fr 1fr;
  border-top:1px solid rgba(255,255,255,.15);
  border-bottom:1px solid rgba(255,255,255,.15);
}

.split-image img{
  width:100%;
  height:520px;
  object-fit:cover;
  display:block;
}

.split-copy{
  padding:90px 80px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  background:#090909;
}

.split-copy h2,
.experience-copy h2,
.contact h2{
  margin:24px 0;
  max-width:520px;
  font-size:clamp(38px,4vw,62px);
  line-height:1;
  font-weight:300;
  text-transform:uppercase;
}

.split-copy p,
.experience-copy p,
.contact p{
  max-width:520px;
  color:#c4bcb4;
  font-family:Arial,sans-serif;
  font-size:13px;
  line-height:2;
}

.outline-dark{
  border-color:rgba(244,239,232,.35);
}

/* SERVICES */

.services{
  padding:70px 80px 90px;
  text-align:center;
}

.services-grid{
  max-width:1160px;
  margin:36px auto 0;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:32px;
}

.services-grid article{
  padding:0 26px 32px;
  border-right:1px solid rgba(255,255,255,.15);
}

.services-grid article:last-child{
  border-right:none;
}

.services-grid img{
  width:100%;
  height:210px;
  object-fit:cover;
  margin-bottom:28px;
}

.services-grid h3{
  margin:0;
  font-size:22px;
  letter-spacing:4px;
  text-transform:uppercase;
  font-weight:300;
}

.services-grid p{
  color:#c4bcb4;
  font-family:Arial,sans-serif;
  font-size:12px;
  line-height:1.8;
}

.services-grid a{
  color:#f4efe8;
  text-decoration:none;
  font-family:Arial,sans-serif;
  font-size:8px;
  letter-spacing:3px;
}

/* EXPERIENCE */

.experience{
  display:grid;
  grid-template-columns:1fr 1fr;
  border-top:1px solid rgba(255,255,255,.14);
  border-bottom:1px solid rgba(255,255,255,.14);
}

.experience-image img{
  width:100%;
  height:360px;
  object-fit:cover;
  filter:grayscale(100%);
  display:block;
}

.experience-copy{
  padding:70px 80px;
}

/* CONTACT */

.contact{
  padding:90px 24px;
  text-align:center;
}

.contact h2,
.contact p{
  margin-left:auto;
  margin-right:auto;
}

.contact-btn{
  background:#f4efe8;
  color:#090909;
}

/* FOOTER */

.noir-footer{
  padding:28px 52px;
  display:grid;
  grid-template-columns:auto 1fr auto;
  align-items:center;
  gap:30px;
  border-top:1px solid rgba(255,255,255,.16);
}

.socials{
  display:flex;
  gap:18px;
}

.socials a{
  color:#f4efe8;
  text-decoration:none;
  font-family:Arial,sans-serif;
  font-size:10px;
}

/* MOBILE */

@media(max-width:1000px){

  .noir-header,
  .noir-footer{
    grid-template-columns:1fr;
    text-align:center;
    justify-items:center;
  }

  .noir-header nav,
  .noir-footer nav{
    flex-wrap:wrap;
    gap:18px;
  }

  .hero-copy{
    padding:140px 28px 60px;
    max-width:100%;
  }

  .split-section,
  .experience,
  .services-grid{
    grid-template-columns:1fr;
  }

  .split-copy,
  .experience-copy{
    padding:60px 28px;
  }

  .services{
    padding:70px 24px;
  }

  .services-grid article{
    border-right:none;
    border-bottom:1px solid rgba(255,255,255,.15);
  }

}
</style>