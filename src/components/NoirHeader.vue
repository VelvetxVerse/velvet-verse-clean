<template>
  <header class="noir-header">
    <router-link to="/noir" class="logo">
      <span class="city">NEW YORK</span>
      <h1>NOIR</h1>
      <span class="byline">BY RENATA OLIVER</span>
    </router-link>

    <nav>
      <router-link to="/noir">Home</router-link>
      <router-link to="/noir/about">About</router-link>
      <router-link to="/noir/services">Services</router-link>
      <router-link to="/noir/gallery">Gallery</router-link>
      <router-link to="/noir/contact">Contact</router-link>
    </nav>

    <router-link to="/noir/contact" class="book-button">
      BOOK PRIVATE ✦
    </router-link>
  </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@300;400;500&display=swap');

.noir-header {
  height: 88px;
  padding: 0 50px;
  display: grid;
  grid-template-columns: 220px 1fr 190px;
  align-items: center;
  background: var(--bg);
  color: var(--text);
  border-bottom: 1px solid var(--gold);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  text-decoration: none;
  text-align: center;
  color: var(--text);
}

.city,
.byline {
  display: block;
  color: var(--text);
  font-size: 8px;
  letter-spacing: 5px;
}

.logo h1 {
  margin: 0;
  font-family: 'Cormorant Garamond', serif;
  color: var(--gold);
  font-size: 42px;
  font-weight: 500;
  line-height: 0.8;
  letter-spacing: 6px;
}

.byline {
  margin-top: 6px;
}

nav {
  display: flex;
  justify-content: center;
  gap: 34px;
}

nav a {
  color: var(--text);
  text-decoration: none;
  text-transform: uppercase;
  font-size: 10px;
  letter-spacing: 3px;
}

nav a:hover,
.router-link-active {
  color: var(--gold);
}

.book-button {
  text-decoration: none;
  color: var(--text);
  border: 1px solid var(--gold);
  padding: 14px 18px;
  text-align: center;
  font-size: 10px;
  letter-spacing: 3px;
}

.book-button:hover {
  background: var(--gold);
  color: var(--bg);
}

/* Light palette readability */

:global(.noir-page[data-noir-theme="rosegold"]) .city,
:global(.noir-page[data-noir-theme="rosegold"]) .byline,
:global(.noir-page[data-noir-theme="ivory"]) .city,
:global(.noir-page[data-noir-theme="ivory"]) .byline {
  color: #2b1d1a;
}

:global(.noir-page[data-noir-theme="rosegold"]) nav a,
:global(.noir-page[data-noir-theme="ivory"]) nav a,
:global(.noir-page[data-noir-theme="rosegold"]) .book-button,
:global(.noir-page[data-noir-theme="ivory"]) .book-button {
  color: #2b1d1a;
}

@media (max-width: 900px) {
  .noir-header {
    height: auto;
    padding: 24px;
    grid-template-columns: 1fr;
    gap: 20px;
  }

  nav {
    flex-wrap: wrap;
    gap: 18px;
  }
}
</style>