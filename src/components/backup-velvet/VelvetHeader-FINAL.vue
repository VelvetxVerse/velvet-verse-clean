<template>
  <header class="velvet-header">
    <section class="top-banner">
      <div class="banner-track">
        <span>
          ✦ NOW BOOKING CLIENT PROJECTS ✦ LUXURY WEB DESIGN ✦ PREMADE WEBSITE COLLECTIONS ✦ RESPONSIVE VUE WEBSITES ✦
        </span>

        <span>
          ✦ NOW BOOKING CLIENT PROJECTS ✦ LUXURY WEB DESIGN ✦ PREMADE WEBSITE COLLECTIONS ✦ RESPONSIVE VUE WEBSITES ✦
        </span>
      </div>
    </section>

    <nav class="home-nav">
      <router-link to="/" class="brand-name">
        Velvet Verse
        <span>Boutique Digital Studio</span>
      </router-link>

      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/collections">Collections</router-link>
        <router-link to="/shop">Shop</router-link>
        <router-link to="/services">Services</router-link>
        <router-link to="/presentation">Presentation</router-link>
        <router-link to="/founder">Founder</router-link>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.velvet-header{
  background:#fff8f5;
}

.top-banner{
  width:100%;
  overflow:hidden;
  background:#181414;
  white-space:nowrap;
}

.banner-track{
  display:flex;
  width:max-content;
  animation:scrollBanner 28s linear infinite;
}

.banner-track span{
  padding:12px 42px 12px 0;
  color:#f3ece8;
  font-family:sans-serif;
  font-size:9px;
  letter-spacing:4px;
  text-transform:uppercase;
  font-weight:800;
}

@keyframes scrollBanner{
  from{ transform:translateX(0); }
  to{ transform:translateX(-50%); }
}

.home-nav{
  position:relative;
  min-height:150px;
  padding:30px 70px 34px;
  display:flex;
  align-items:flex-start;
  justify-content:center;
  background:#fff8f5;
}

.brand-name{
  position:absolute;
  left:70px;
  top:38px;
  text-decoration:none;
  color:#2a2a2a;
  font-size:44px;
  font-style:italic;
  font-weight:300;
  line-height:.9;
  z-index:5;
}

.brand-name span{
  display:block;
  margin-top:14px;
  margin-left:4px;
  font-family:sans-serif;
  font-size:8px;
  letter-spacing:6px;
  text-transform:uppercase;
  color:#b19790;
  font-weight:800;
  font-style:normal;
}

.nav-links{
  display:flex;
  align-items:center;
  justify-content:center;
  gap:34px;
  margin-top:18px;
  margin-left:220px;
  padding:18px 42px;
  background:rgba(255,255,255,.78);
  border:1px solid #eadad6;
  border-radius:999px;
}

.nav-links a{
  text-decoration:none;
  color:#2a2a2a;
  font-family:sans-serif;
  font-size:9px;
  letter-spacing:4px;
  text-transform:uppercase;
  font-weight:800;
}

.nav-links a:hover,
.nav-links a.router-link-active{
  color:#c8a49b;
}

@media(max-width:900px){
  .home-nav{
    min-height:auto;
    padding:28px 24px;
    flex-direction:column;
    align-items:center;
    gap:26px;
  }

  .brand-name{
    position:static;
    text-align:center;
    font-size:40px;
  }

  .nav-links{
    margin:0;
    flex-wrap:wrap;
    gap:18px;
    padding:18px 24px;
  }
}
</style>