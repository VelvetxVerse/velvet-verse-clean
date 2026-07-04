<template>
  <div class="links-page">
    <img src="/mk5.png" alt="Renata Oliver" class="profile" />

    <h1>Renata Oliver</h1>

    <p>Beauty • Luxury Travel • Lifestyle Creator</p>

    <div class="links">
      <a href="/blog">Beauty & Travel Blog</a>
      <a href="/collections">Portfolio</a>
      <a href="/shop">Website Templates</a>
      <a href="/makeup-media-kit">Media Kit</a>
      <a href="/collaborate">Work With Me</a>
      <a href="/makeup#contact">Contact</a>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.links-page{
  min-height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background:#faf8f6;
  padding:40px;
}

.profile{
  width:160px;
  height:160px;
  border-radius:50%;
  object-fit:cover;
  margin-bottom:24px;
}

h1{
  font-family:serif;
  margin-bottom:10px;
}

p{
  margin-bottom:30px;
  color:#666;
}

.links{
  display:flex;
  flex-direction:column;
  gap:15px;
  width:320px;
}

.links a{
  text-decoration:none;
  background:white;
  border:1px solid #ddd;
  padding:16px;
  border-radius:12px;
  text-align:center;
  color:#333;
}

.links a:hover{
  background:#f5f5f5;
}
</style>
