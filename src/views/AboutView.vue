<template>
  <main class="about-page">

    <section class="hero">
      <div class="hero-content">

        <div class="divider">
          <span></span>
          <b>✦</b>
          <span></span>
        </div>

        <p class="eyebrow">ABOUT ME</p>

        <h1>Hi, I'm Renata Oliver.</h1>

        <p class="subtitle">
          Designer. Creator. Traveler. Storyteller.
        </p>

        <p class="description">
          Welcome to VelvetXVerse — where creativity meets purpose.
          I believe beautiful design, authentic storytelling, and meaningful
          experiences have the power to inspire people and build unforgettable brands.
        </p>

      </div>

      <div class="hero-image">
        <img src="/renata-about.jpg" alt="Renata Oliver">
      </div>

    </section>

    <section class="story">

      <div class="story-image">
        <img src="/renata-story.jpg" alt="">
      </div>

      <div class="story-text">

        <p class="section-title">MY STORY</p>

        <h2>Four passions.<br>One purpose.</h2>

        <p>
          What started as a passion for beauty slowly evolved into something much
          bigger. Throughout the years I discovered my love for design,
          entrepreneurship, luxury travel, and helping brands tell their story.
        </p>

        <p>
          Today I combine all those passions into one creative universe where
          elegant websites, beautiful content, luxury destinations, and timeless
          branding come together.
        </p>

        <p>
          Whether I'm designing a website, exploring a new country, collaborating
          with global beauty brands, or creating content, my goal is always the
          same: create something beautiful with intention.
        </p>

      </div>

    </section>

    <section class="numbers">

      <div class="number">
        <h3>144+</h3>
        <p>Countries Visited</p>
      </div>

      <div class="number">
        <h3>1M+</h3>
        <p>Followers</p>
      </div>

      <div class="number">
        <h3>15+</h3>
        <p>Years Creating</p>
      </div>

      <div class="number">
        <h3>100+</h3>
        <p>Brand Collaborations</p>
      </div>

    </section>

    <section class="passions">

      <div class="heading">

        <p class="section-title">WHAT I DO</p>

        <h2>Everything begins with creativity.</h2>

      </div>

      <div class="cards">

        <div class="card">
          <h3>Web Design</h3>
          <p>
            Elegant websites crafted for luxury businesses and feminine brands.
          </p>
        </div>

        <div class="card">
          <h3>Social Media</h3>
          <p>
            Beautiful storytelling that connects brands with their audience.
          </p>
        </div>

        <div class="card">
          <h3>Travel</h3>
          <p>
            Luxury destinations, hotels, and experiences from around the world.
          </p>
        </div>

        <div class="card">
          <h3>Beauty</h3>
          <p>
            Makeup, skincare, wellness and beauty education with authenticity.
          </p>
        </div>

      </div>

    </section>

    <section class="quote">

      <h2>
        "Creating beautiful things isn't just my career —
        it's how I experience the world."
      </h2>

    </section>

  </main>
</template>

<script setup>
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Parisienne&family=Cormorant+Garamond:wght@300;400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

.about-page{
    background:#fbf2ea;
    color:#2b1b14;
    font-family:'DM Sans',sans-serif;
}

.hero{
    max-width:1400px;
    margin:auto;
    padding:90px 40px;
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:90px;
    align-items:center;
}

.hero-content h1{
    font-family:'Cormorant Garamond',serif;
    font-size:72px;
    font-weight:400;
    line-height:1;
    margin:0;
}

.subtitle{
    font-family:'Parisienne',cursive;
    color:#9d6d59;
    font-size:30px;
    margin:20px 0;
}

.description{
    max-width:520px;
    line-height:1.9;
    color:#60473a;
}

.hero-image img{
    width:100%;
    height:720px;
    object-fit:cover;
    border-radius:30px;
}

.story{
    max-width:1300px;
    margin:100px auto;
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:80px;
    align-items:center;
    padding:0 40px;
}

.story-image img{
    width:100%;
    border-radius:20px;
}

.story h2{
    font-family:'Cormorant Garamond',serif;
    font-size:58px;
    font-weight:400;
    line-height:1;
}

.story p{
    line-height:1.9;
    color:#5d4538;
}

.section-title{
    letter-spacing:4px;
    font-size:11px;
    color:#b78c60;
    margin-bottom:15px;
}

.numbers{
    max-width:1200px;
    margin:120px auto;
    display:grid;
    grid-template-columns:repeat(4,1fr);
    text-align:center;
}

.number h3{
    font-family:'Cormorant Garamond',serif;
    font-size:56px;
    font-weight:400;
    margin:0;
}

.number p{
    letter-spacing:2px;
    text-transform:uppercase;
    font-size:11px;
}

.passions{
    max-width:1350px;
    margin:auto;
    padding:80px 40px;
}

.heading{
    text-align:center;
    margin-bottom:60px;
}

.heading h2{
    font-family:'Cormorant Garamond',serif;
    font-size:58px;
    font-weight:400;
}

.cards{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:25px;
}

.card{
    background:white;
    border-radius:18px;
    padding:40px;
    box-shadow:0 15px 40px rgba(0,0,0,.05);
}

.card h3{
    font-family:'Cormorant Garamond',serif;
    font-size:34px;
    font-weight:400;
}

.card p{
    line-height:1.8;
    color:#5e473a;
}

.quote{
    max-width:900px;
    margin:120px auto;
    text-align:center;
    padding:40px;
}

.quote h2{
    font-family:'Cormorant Garamond',serif;
    font-size:48px;
    font-weight:400;
    color:#7b5d4c;
}

.divider{
    display:flex;
    align-items:center;
    gap:15px;
    margin-bottom:20px;
}

.divider span{
    width:70px;
    height:1px;
    background:#d6b79b;
}

.divider b{
    color:#b78c60;
    font-size:10px;
}

@media(max-width:900px){

.hero,
.story{
grid-template-columns:1fr;
}

.cards{
grid-template-columns:1fr;
}

.numbers{
grid-template-columns:repeat(2,1fr);
gap:40px;
}

.hero h1{
font-size:54px;
}

.story h2,
.heading h2,
.quote h2{
font-size:42px;
}

.hero-image img{
height:500px;
}

}
</style>