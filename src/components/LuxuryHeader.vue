<template>
  <header class="velvet-header">

    <!-- TOP ROW -->

    <div class="top-row">

      <router-link
        to="/"
        class="brand-logo"
      >
        Velvet Verse
      </router-link>

      <router-link
        to="/collections"
        class="header-btn"
      >
        VIEW COLLECTIONS →
      </router-link>

    </div>

    <!-- NAVIGATION -->

    <nav class="main-nav">

      <router-link to="/">
        HOME
      </router-link>

      <router-link to="/collections">
        COLLECTION
      </router-link>

      <router-link to="/shop">
        SHOP
      </router-link>

      <router-link to="/founder">
        FOUNDER
      </router-link>

    </nav>

    <!-- MOVING BANNER -->

    <section class="moving-banner">

      <div class="banner-track">

        <span>
          WEBSITE COLLECTIONS FOR FEMALE BRANDS ✦
        </span>

        <span>
          LUXURY DESIGN FOR BEAUTY • WELLNESS • FASHION ✦
        </span>

        <span>
          FEMININE MODERN TEMPLATES ✦
        </span>

        <span>
          WEBSITE COLLECTIONS FOR FEMALE BRANDS ✦
        </span>

        <span>
          LUXURY DESIGN FOR BEAUTY • WELLNESS • FASHION ✦
        </span>

        <span>
          FEMININE MODERN TEMPLATES ✦
        </span>

      </div>

    </section>

  </header>
</template>

<style scoped>

.velvet-header{
  background:#ffffff;

  border-bottom:1px solid #ece4df;

  font-family:'Cormorant Garamond', serif;
}

/* TOP */

.top-row{
  min-height:140px;

  padding:
    0
    56px;

  display:flex;

  align-items:center;

  justify-content:space-between;
}

.brand-logo{
  text-decoration:none;

  color:#2f2b2a;

  font-size:62px;

  font-style:italic;

  font-weight:300;

  letter-spacing:-1px;
}

.header-btn{
  text-decoration:none;

  background:#242424;

  color:white;

  padding:
    18px
    34px;

  border-radius:999px;

  font-family:sans-serif;

  font-size:10px;

  letter-spacing:4px;

  font-weight:800;

  transition:.3s;
}

.header-btn:hover{
  background:#d9a5ac;
}

/* NAV */

.main-nav{
  border-top:1px solid #ece4df;

  height:70px;

  display:flex;

  align-items:center;

  justify-content:center;

  gap:72px;
}

.main-nav a{
  text-decoration:none;

  color:#2f2b2a;

  font-family:sans-serif;

  font-size:10px;

  letter-spacing:5px;

  font-weight:800;

  transition:.3s;
}

.main-nav a:hover,
.main-nav a.router-link-active,
.main-nav a.router-link-exact-active{
  color:#d39aa4;
}

/* MOVING BANNER */

.moving-banner{
  height:50px;

  border-top:1px solid #ece4df;
  border-bottom:1px solid #ece4df;

  overflow:hidden;

  display:flex;

  align-items:center;

  background:#ffffff;
}

.banner-track{
  display:flex;

  align-items:center;

  gap:90px;

  white-space:nowrap;

  min-width:max-content;

  animation:scrollBanner 26s linear infinite;
}

.banner-track span{
  font-family:sans-serif;

  font-size:9px;

  letter-spacing:4px;

  text-transform:uppercase;

  color:#9d8c87;

  font-weight:800;
}

@keyframes scrollBanner{

  from{
    transform:translateX(0);
  }

  to{
    transform:translateX(-50%);
  }

}

/* MOBILE */

@media(max-width:900px){

  .top-row{
    min-height:auto;

    padding:
      34px
      24px;

    flex-direction:column;

    gap:24px;
  }

  .brand-logo{
    font-size:48px;
  }

  .main-nav{
    height:auto;

    padding:24px;

    flex-wrap:wrap;

    gap:26px;
  }

  .main-nav a{
    font-size:9px;

    letter-spacing:3px;
  }

  .moving-banner{
    height:42px;
  }

  .banner-track{
    gap:50px;
  }

  .banner-track span{
    font-size:8px;

    letter-spacing:3px;
  }

}
</style>