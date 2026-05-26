<template>
  <footer class="velvet-footer">

    <h2>
      Velvet Verse
    </h2>

    <div class="footer-links">

      <router-link to="/">
        Home
      </router-link>

      <router-link to="/collections">
        Collections
      </router-link>

      <router-link to="/services">
        Services
      </router-link>

      <router-link to="/presentation">
        Presentation
      </router-link>

      <router-link to="/founder">
        Founder
      </router-link>

    </div>

    <p>
      © 2026 Velvet Verse by Renata Oliver
    </p>

  </footer>
</template>

<style scoped>
.velvet-footer{
  background:#181414;
  color:white;
  text-align:center;
  padding:34px 20px 20px;
  margin-top:80px;
}

.velvet-footer h2{
  font-size:40px;
  font-style:italic;
  font-weight:300;
  margin:0;
}

.footer-links{
  display:flex;
  justify-content:center;
  gap:20px;
  flex-wrap:wrap;
  margin:20px 0;
}

.footer-links a{
  color:white;
  text-decoration:none;
  font-family:sans-serif;
  font-size:8px;
  letter-spacing:3px;
  text-transform:uppercase;
}

.velvet-footer p{
  font-family:sans-serif;
  font-size:8px;
  letter-spacing:2px;
  opacity:.5;
}

@media(max-width:900px){
  .velvet-footer{
    padding:28px 20px 18px;
  }

  .velvet-footer h2{
    font-size:34px;
  }

  .footer-links{
    gap:16px;
  }
}
</style>