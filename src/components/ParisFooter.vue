<template>
  <footer class="paris-footer">

    <!-- TOP -->

    <div class="footer-top-line">
      <span></span>
      ❦
      <span></span>
    </div>

    <!-- MAIN -->

    <section class="footer-main">

      <!-- LEFT IMAGE -->

      <div class="footer-image">
        <img
          src="/paris-dessert-display.png"
          alt=""
        >
      </div>

      <!-- NAV -->

      <div class="footer-column">

        <p class="footer-title">
          NAVIGATION
        </p>

        <router-link to="/paris-demo">
          Home
        </router-link>

        <router-link to="/paris-menu">
          Menu
        </router-link>

        <router-link to="/paris-gallery">
          Gallery
        </router-link>

        <router-link to="/paris-visit">
          Visit
        </router-link>

        <router-link to="/paris-about">
          About
        </router-link>

        <router-link to="/paris-contact">
          Contact
        </router-link>

      </div>

      <!-- BRAND -->

      <div class="footer-brand">

        <div class="brand-circle">
          L
        </div>

        <h2>
          LA DOUCEUR
        </h2>

        <h3>
          Pâtisserie de Luxe
        </h3>

        <div class="brand-divider">
          <span></span>
          ♡
          <span></span>
        </div>

        <p>
          MADE FRESH DAILY IN PARIS
        </p>

      </div>

      <!-- VISIT -->

      <div class="footer-column">

        <p class="footer-title">
          VISIT
        </p>

        <p>Montmartre, Paris</p>
        <p>bonjour@ladouceur.fr</p>
        <p>+33 1 42 61 27 06</p>

      </div>

      <!-- SOCIAL -->

      <div class="footer-column">

        <p class="footer-title">
          FOLLOW
        </p>

        <div class="footer-socials">

          <a
            href="https://instagram.com"
            target="_blank"
          >
            ◎
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
          >
            f
          </a>

          <a
            href="https://pinterest.com"
            target="_blank"
          >
            p
          </a>

          <a
            href="https://tiktok.com"
            target="_blank"
          >
            ♪
          </a>

        </div>

      </div>

    </section>

    <!-- BOTTOM -->

    <section class="footer-bottom">

      <p>
        © 2026 La Douceur Pâtisserie
      </p>

      <div class="footer-links">

        <router-link to="/privacy-policy">
          Privacy Policy
        </router-link>

        <router-link to="/terms-conditions">
          Terms
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
  margin-top:40px;
  padding:0 0 18px;
  background:var(--bg);
}

/* TOP LINE */

.footer-top-line{
  display:flex;
  justify-content:center;
  align-items:center;
  gap:12px;
  margin-bottom:22px;
  color:var(--gold);
}

.footer-top-line span{
  width:22%;
  height:1px;
  background:var(--gold-line);
}

/* MAIN */

.footer-main{
  max-width:1120px;
  margin:0 auto;
  padding:0 24px;

  display:grid;

  grid-template-columns:
  .7fr
  .9fr
  1.2fr
  .9fr
  .7fr;

  gap:18px;

  align-items:center;
}

/* IMAGE */

.footer-image{
  display:flex;
  justify-content:center;
}

.footer-image img{
  width:82px;
  object-fit:contain;
}

/* COLUMN */

.footer-column{
  display:flex;
  flex-direction:column;
}

.footer-title{
  margin-bottom:10px;

  color:var(--accent);

  font-family:Arial,sans-serif;

  font-size:8px;

  letter-spacing:3px;

  font-weight:800;
}

.footer-column a,
.footer-column p{
  margin:0 0 7px;

  color:var(--muted);

  text-decoration:none;

  font-family:Arial,sans-serif;

  font-size:10px;

  line-height:1.5;
}

.footer-column a:hover,
.footer-links a:hover{
  color:var(--accent);
}

/* BRAND */

.footer-brand{
  display:flex;
  flex-direction:column;
  align-items:center;
  text-align:center;
}

.brand-circle{
  width:42px;
  height:42px;

  display:flex;
  justify-content:center;
  align-items:center;

  border-radius:50%;

  border:1px solid var(--gold-line);

  color:var(--accent);

  font-size:24px;

  margin-bottom:10px;
}

.footer-brand h2{
  margin:0;

  color:var(--accent);

  font-size:34px;

  line-height:.9;

  font-weight:300;

  letter-spacing:2px;
}

.footer-brand h3{
  margin-top:4px;

  color:var(--muted);

  font-size:16px;

  font-weight:300;

  font-style:italic;
}

.brand-divider{
  display:flex;
  justify-content:center;
  align-items:center;
  gap:10px;

  margin:10px 0;

  color:#e596a5;
}

.brand-divider span{
  width:32px;
  height:1px;
  background:var(--gold-line);
}

.footer-brand p{
  margin:0;

  color:var(--muted);

  font-family:Arial,sans-serif;

  font-size:7px;

  letter-spacing:3px;

  font-weight:700;
}

/* SOCIAL */

.footer-socials{
  display:flex;
  gap:8px;
}

.footer-socials a{
  width:28px;
  height:28px;

  display:flex;
  justify-content:center;
  align-items:center;

  border-radius:50%;

  border:1px solid var(--gold-line);

  color:var(--accent);

  text-decoration:none;

  font-size:12px;
}

/* BOTTOM */

.footer-bottom{
  max-width:1120px;

  margin:22px auto 0;

  padding:14px 24px 0;

  border-top:1px solid var(--gold-line);

  display:flex;
  justify-content:space-between;
  align-items:center;

  gap:16px;
}

.footer-bottom p{
  margin:0;

  color:var(--muted);

  font-size:10px;
}

.footer-links{
  display:flex;
  gap:16px;
}

.footer-links a{
  color:var(--accent);

  text-decoration:none;

  font-size:10px;
}

/* MOBILE */

@media(max-width:1000px){

  .footer-main{
    grid-template-columns:1fr 1fr;
    text-align:center;
  }

  .footer-brand{
    grid-column:1/-1;
    order:-1;
  }

  .footer-image{
    display:none;
  }

  .footer-column{
    align-items:center;
  }

  .footer-socials{
    justify-content:center;
  }

}

@media(max-width:700px){

  .footer-main{
    grid-template-columns:1fr;
    gap:20px;
  }

  .footer-bottom{
    flex-direction:column;
    text-align:center;
  }

}
</style>