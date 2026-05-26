<template>
  <header class="paris-header">
    <router-link to="/paris-demo" class="paris-logo">
      La Douceur
      <span>PÂTISSERIE</span>
    </router-link>

    <nav class="paris-nav-links">
      <router-link to="/paris-demo">HOME</router-link>
      <router-link to="/paris-menu">MENU</router-link>
      <router-link to="/paris-gallery">GALLERY</router-link>
      <router-link to="/paris-visit">VISIT</router-link>
      <router-link to="/paris-about">ABOUT</router-link>
      <router-link to="/paris-contact">CONTACT</router-link>
    </nav>

    <router-link to="/collections" class="paris-back-btn">
      BACK TO COLLECTIONS →
    </router-link>
  </header>
</template>

<style scoped>
.paris-header{
  position:relative;
  z-index:10;
  display:grid;
  grid-template-columns:auto 1fr auto;
  align-items:center;
  gap:20px;
  margin-bottom:42px;
}

.paris-logo{
  text-decoration:none;
  color:var(--accent);
  font-family:'Great Vibes',cursive;
  font-size:56px;
  line-height:.8;
}

.paris-logo span{
  display:block;
  margin-top:16px;
  text-align:center;
  color:var(--gold);
  font-family:Arial,sans-serif;
  font-size:9px;
  letter-spacing:8px;
  font-weight:700;
}

.paris-nav-links{
  display:flex;
  justify-content:center;
  gap:22px;
  flex-wrap:wrap;
}

.paris-nav-links a{
  text-decoration:none;
  color:var(--text);
  font-family:Arial,sans-serif;
  font-size:10px;
  letter-spacing:2px;
  font-weight:700;
}

.paris-nav-links a:hover,
.paris-nav-links a.router-link-active{
  color:var(--accent);
}

.paris-back-btn{
  text-decoration:none;
  padding:12px 20px;
  border:1px solid var(--gold);
  border-radius:999px;
  color:var(--text);
  background:rgba(255,255,255,.42);
  font-family:Arial,sans-serif;
  font-size:9px;
  letter-spacing:1.5px;
  font-weight:800;
}

@media(max-width:1100px){
  .paris-header{
    grid-template-columns:1fr;
    justify-items:center;
  }
}
</style>