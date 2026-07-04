<template>
  <div class="links-page">

    <!-- Hero -->
    <section class="hero">
      <img
        src="/mk5.png"
        alt="Renata Oliver"
        class="profile"
      />

      <p class="eyebrow">VELVET X VERSE</p>

      <h1>Renata Oliver</h1>

      <p class="subtitle">
        Beauty • Luxury Travel • Lifestyle Creator
      </p>

      <p class="description">
        Sharing elevated beauty discoveries, luxury destinations,
        timeless style, and inspiring experiences from around the world.
      </p>
    </section>

    <!-- Links -->
    <section class="buttons">

      <a href="/work-with-me" class="link-card">
        <span>Work With Me</span>
        <small>Brand Collaborations</small>
      </a>

      <a href="/media-kit" class="link-card">
        <span>Media Kit</span>
        <small>Audience & Statistics</small>
      </a>

      <a href="/portfolio" class="link-card">
        <span>Portfolio</span>
        <small>Past Collaborations</small>
      </a>

      <a href="/blog" class="link-card">
        <span>Beauty & Travel Blog</span>
        <small>Read the Latest Articles</small>
      </a>

      <a href="https://www.amazon.com/shop/yourstore" target="_blank" class="link-card">
        <span>Amazon Storefront</span>
        <small>Favorite Products</small>
      </a>

      <a href="/shop" class="link-card">
        <span>Website Templates</span>
        <small>Luxury Premade Designs</small>
      </a>

      <a href="/contact" class="link-card">
        <span>Contact</span>
        <small>Let's Connect</small>
      </a>

    </section>

    <!-- Social -->
    <section class="socials">

      <a href="#">
        <i class="fab fa-instagram"></i>
      </a>

      <a href="#">
        <i class="fab fa-facebook"></i>
      </a>

      <a href="#">
        <i class="fab fa-pinterest"></i>
      </a>

      <a href="#">
        <i class="fab fa-tiktok"></i>
      </a>

      <a href="#">
        <i class="fab fa-youtube"></i>
      </a>

    </section>

    <footer>
      © 2026 Velvet X Verse · Designed by Renata Oliver
    </footer>

  </div>
</template>

<script setup>
</script>

<style scoped>

.links-page{
    min-height:100vh;
    background:#FAF8F6;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:70px 20px 60px;
}

.hero{
    text-align:center;
    max-width:600px;
}

.profile{
    width:145px;
    height:145px;
    border-radius:50%;
    object-fit:cover;
    border:6px solid white;
    box-shadow:0 20px 50px rgba(0,0,0,.08);
    margin-bottom:30px;
}

.eyebrow{
    font-size:.75rem;
    letter-spacing:5px;
    color:#b88b73;
    margin-bottom:18px;
    text-transform:uppercase;
}

h1{
    font-family:'Cormorant Garamond',serif;
    font-size:3.3rem;
    color:#2b2b2b;
    font-weight:500;
    margin-bottom:12px;
}

.subtitle{
    color:#8a7b73;
    font-size:1rem;
    letter-spacing:1px;
    margin-bottom:22px;
}

.description{
    color:#666;
    line-height:1.9;
    max-width:480px;
    margin:auto;
    font-size:1rem;
}

.buttons{
    width:100%;
    max-width:500px;
    margin-top:55px;
    display:flex;
    flex-direction:column;
    gap:18px;
}

.link-card{

    background:white;
    border:1px solid #efe7e1;
    border-radius:18px;

    padding:22px 26px;

    text-decoration:none;

    display:flex;
    flex-direction:column;

    transition:.35s;

    box-shadow:0 8px 25px rgba(0,0,0,.04);
}

.link-card:hover{

    transform:translateY(-4px);

    box-shadow:0 18px 35px rgba(0,0,0,.08);

    border-color:#d7b79c;
}

.link-card span{

    font-family:'Cormorant Garamond',serif;

    font-size:1.8rem;

    color:#222;

    margin-bottom:4px;
}

.link-card small{

    color:#8a8179;

    font-size:.92rem;
}

.socials{

    display:flex;

    gap:28px;

    margin-top:55px;
}

.socials a{

    font-size:1.4rem;

    color:#8b7d74;

    transition:.3s;
}

.socials a:hover{

    color:#b88b73;

    transform:translateY(-3px);
}

footer{

    margin-top:60px;

    color:#9b928d;

    font-size:.82rem;

    letter-spacing:1px;
}

@media(max-width:768px){

h1{
    font-size:2.5rem;
}

.link-card span{
    font-size:1.5rem;
}

}

</style>