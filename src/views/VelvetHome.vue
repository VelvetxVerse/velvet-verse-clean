<template>
  <main class="velvet-home">
    <section class="hero">
      <p class="eyebrow">VELVET VERSE</p>
      <h1>Elegant digital experiences.</h1>
      <p class="intro">
        A refined portfolio for websites, branding, and visual storytelling.
      </p>
    </section>
  </main>
</template>

<style scoped>
.velvet-home {
  min-height: 100vh;
  background: #f7f1e8;
  color: #1f1a17;
}

.hero {
  min-height: 100vh;
  display: grid;
  place-items: center;
  text-align: center;
  padding: 40px;
}

.eyebrow {
  letter-spacing: 8px;
  font-size: 12px;
}

h1 {
  max-width: 900px;
  font-size: clamp(56px, 9vw, 120px);
  font-weight: 300;
  line-height: 0.95;
}

.intro {
  max-width: 520px;
  font-size: 18px;
  line-height: 1.8;
}
</style>