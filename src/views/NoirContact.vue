<script setup>
import NoirHeader from '../components/NoirHeader.vue'
import NoirFooter from '../components/NoirFooter.vue'
import NoirPaletteBar from '../components/NoirPaletteBar.vue'
</script>

<template>
  <main class="noir-contact-page">
    <NoirHeader />
    <NoirPaletteBar />

    <section class="contact-hero">
      <div class="side-label">
        <span>TAYLOR GIRONDA</span>
      </div>

      <div class="monogram">TG</div>

      <div class="contact-copy">
        <p class="eyebrow">Private Booking</p>

        <h1>
          Let’s begin your<br />
          beauty <em>experience.</em>
        </h1>

        <div class="thin-rule"></div>

        <p class="intro">
          For bridal, soft glam, hair, skincare, or private beauty packages,
          send your request and Taylor will contact you personally.
        </p>
      </div>

      <div class="contact-note">
        <p>By appointment only</p>
        <span>✦</span>
      </div>
    </section>

    <section class="contact-section">
      <div class="info-card">
        <p class="eyebrow">Contact Details</p>
        <h2>Private inquiries</h2>

        <div class="info-line">
          <span>✦</span>
          <div>
            <h3>Email</h3>
            <p>your@email.com</p>
          </div>
        </div>

        <div class="info-line">
          <span>✦</span>
          <div>
            <h3>Location</h3>
            <p>New York · Private beauty appointments</p>
          </div>
        </div>

        <div class="info-line">
          <span>✦</span>
          <div>
            <h3>Services</h3>
            <p>Soft glam · Hair · Bridal · Skin care · Luxury packages</p>
          </div>
        </div>

        <div class="small-gallery">
          <img src="/noir-brushes.png" alt="" />
          <img src="/noir-products.png" alt="" />
          <img src="/noir-studio.png" alt="" />
        </div>
      </div>

      <form id="contact-form" class="form-card">
        <p class="eyebrow">Request Form</p>
        <h2>Book your experience</h2>

        <label>
          Full Name
          <input type="text" placeholder="Your name" />
        </label>

        <label>
          Email
          <input type="email" placeholder="your@email.com" />
        </label>

        <label>
          Service Interested In
          <select>
            <option>Bridal Experience</option>
            <option>Signature Hair</option>
            <option>Makeup Artistry</option>
            <option>Skin Care</option>
            <option>Private Luxury Package</option>
          </select>
        </label>

        <label>
          Preferred Date
          <input type="date" />
        </label>

        <label>
          Message
          <textarea placeholder="Tell me about your vision..."></textarea>
        </label>

        <button type="submit">Send Private Request →</button>
      </form>
    </section>

    <section class="closing-section">
      <p class="eyebrow">Private Bookings</p>

      <h2>
        Your beauty deserves<br />
        more than <em>ordinary.</em>
      </h2>

      <router-link to="/noir/gallery" class="btn-outline">
        View Gallery
      </router-link>
    </section>

    <NoirFooter />
  </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Inter:wght@300;400;500&display=swap");

.noir-contact-page {
  --muted: color-mix(in srgb, var(--text) 54%, transparent);
  --line: color-mix(in srgb, var(--gold) 18%, transparent);
  --gold-soft: color-mix(in srgb, var(--gold) 74%, transparent);

  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  font-family: "Inter", sans-serif;
}

/* HERO */
.contact-hero {
  position: relative;
  min-height: 320px;
  display: grid;
  grid-template-columns: 1fr 230px;
  gap: 36px;
  align-items: center;
  padding: 44px 7vw 44px 120px;
  border-bottom: 1px solid var(--line);
  background:
    linear-gradient(
      90deg,
      color-mix(in srgb, var(--bg) 98%, transparent) 0%,
      color-mix(in srgb, var(--bg) 86%, transparent) 55%,
      color-mix(in srgb, var(--gold) 8%, transparent) 100%
    ),
    var(--bg);
}

.side-label {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 26px;
  border-right: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: center;
}

.side-label span {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  letter-spacing: 4px;
  font-size: 7px;
  text-transform: uppercase;
  color: var(--muted);
}

.monogram {
  position: absolute;
  left: 48px;
  top: 50%;
  transform: translateY(-50%);
  width: 38px;
  height: 38px;
  border: 1px solid var(--line);
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-family: "Cormorant Garamond", serif;
  font-size: 15px;
  letter-spacing: 1px;
  color: var(--gold-soft);
  background: var(--bg);
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 8px;
  color: var(--gold-soft);
  margin-bottom: 12px;
}

.contact-copy h1 {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(34px, 3.8vw, 54px);
  line-height: 0.98;
  font-weight: 300;
  margin: 0 0 16px;
}

.contact-copy h1 em,
.closing-section h2 em {
  color: var(--gold);
  font-style: italic;
}

.thin-rule {
  width: 130px;
  height: 1px;
  background: var(--line);
  margin-bottom: 16px;
}

.intro {
  max-width: 420px;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.8;
}

.contact-note {
  width: 190px;
  height: 190px;
  border: 1px solid var(--line);
  border-radius: 50%;
  display: grid;
  place-content: center;
  text-align: center;
  color: var(--gold-soft);
  justify-self: end;
}

.contact-note p {
  max-width: 110px;
  margin: 0 auto 8px;
  font-family: "Cormorant Garamond", serif;
  font-size: 24px;
  line-height: 1.05;
  font-style: italic;
}

.contact-note span {
  font-size: 11px;
}

/* CONTENT */
.contact-section {
  max-width: 1180px;
  margin: 24px auto 0;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 22px;
}

.info-card,
.form-card,
.closing-section {
  border: 1px solid var(--line);
  background: var(--surface);
  border-radius: 14px;
  padding: 26px;
}

.info-card h2,
.form-card h2 {
  font-family: "Cormorant Garamond", serif;
  font-size: 32px;
  font-weight: 300;
  margin: 0 0 18px;
}

.info-line {
  display: flex;
  gap: 14px;
  padding: 13px 0;
  border-bottom: 1px solid var(--line);
}

.info-line span,
.info-line h3 {
  color: var(--gold);
}

.info-line h3 {
  font-size: 8px;
  letter-spacing: 2.4px;
  text-transform: uppercase;
  margin: 0 0 5px;
}

.info-line p {
  font-size: 10.5px;
  line-height: 1.65;
  color: var(--muted);
  margin: 0;
}

.small-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 18px;
}

.small-gallery img {
  width: 100%;
  height: 78px;
  object-fit: cover;
  border: 1px solid var(--line);
  border-radius: 6px;
}

label {
  display: block;
  margin-bottom: 13px;
  color: var(--gold-soft);
  font-size: 8px;
  letter-spacing: 2.4px;
  text-transform: uppercase;
}

input,
select,
textarea {
  width: 100%;
  margin-top: 8px;
  padding: 10px 11px;
  background: color-mix(in srgb, var(--bg) 88%, black);
  border: 1px solid var(--line);
  color: var(--text);
  border-radius: 3px;
  outline: none;
  font-family: "Inter", sans-serif;
  font-size: 10.5px;
}

textarea {
  min-height: 95px;
  resize: none;
}

button {
  width: 100%;
  padding: 11px;
  background: var(--gold);
  color: var(--bg);
  border: none;
  cursor: pointer;
  margin-top: 6px;
  font-size: 8px;
  letter-spacing: 2.4px;
  text-transform: uppercase;
}

.closing-section {
  max-width: 1180px;
  margin: 22px auto 42px;
  text-align: center;
  padding: 30px;
}

.closing-section h2 {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(30px, 3vw, 44px);
  font-weight: 300;
  line-height: 1;
  margin: 0 0 20px;
}

.btn-outline {
  display: inline-block;
  border: 1px solid var(--line);
  color: var(--text);
  padding: 10px 18px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2.4px;
  font-size: 7.5px;
}

.btn-outline:hover {
  background: var(--gold);
  color: var(--bg);
}

/* RESPONSIVE */
@media (max-width: 960px) {
  .contact-hero {
    grid-template-columns: 1fr;
    padding: 48px 22px 34px 60px;
  }

  .contact-note {
    width: 130px;
    height: 130px;
    justify-self: start;
  }

  .contact-note p {
    font-size: 18px;
  }

  .contact-section {
    grid-template-columns: 1fr;
    margin-left: 22px;
    margin-right: 22px;
  }

  .closing-section {
    margin-left: 22px;
    margin-right: 22px;
  }
}

@media (max-width: 600px) {
  .side-label,
  .monogram {
    display: none;
  }

  .contact-hero {
    padding-left: 22px;
  }

  .small-gallery {
    grid-template-columns: 1fr;
  }
}
</style>