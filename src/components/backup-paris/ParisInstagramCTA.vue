<template>
  <section class="instagram-box">
    <a
      href="https://www.instagram.com/"
      target="_blank"
      rel="noopener noreferrer"
      class="instagram-btn"
    >
      ⟡ FOLLOW US ON INSTAGRAM
    </a>
  </section>
</template>

<style scoped>
.instagram-box{
  position:relative;
  z-index:3;
  display:flex;
  justify-content:center;
  margin-top:46px;
}

.instagram-btn{
  padding:16px 30px;
  border-radius:999px;
  background:var(--accent);
  color:white;
  text-decoration:none;
  font-family:Arial,sans-serif;
  font-size:10px;
  letter-spacing:2px;
  font-weight:800;
  box-shadow:var(--soft-shadow);
  transition:.3s ease;
}

.instagram-btn:hover{
  transform:translateY(-2px);
}
</style>