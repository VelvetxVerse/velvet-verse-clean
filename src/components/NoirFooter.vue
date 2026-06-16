<template>
  <footer class="noir-footer">
    <div class="footer-frame">
      <div class="footer-brand">
        <span>NEW YORK</span>
        <h2>NOIR</h2>
        <small>BY RENATA OLIVER</small>
      </div>

      <div class="footer-grid">
        <div>
          <p class="label">Collection</p>
          <router-link to="/noir">Home</router-link>
          <router-link to="/noir/about">About</router-link>
          <router-link to="/noir/services">Services</router-link>
        </div>

        <div>
          <p class="label">Experience</p>
          <router-link to="/noir/gallery">Gallery</router-link>
          <router-link to="/noir/contact">Book Private</router-link>
          <router-link to="/noir/contact">Contact</router-link>
        </div>

        <div>
          <p class="label">Details</p>
          <router-link to="/privacy-policy">Privacy Policy</router-link>
          <router-link to="/terms-conditions">Terms & Conditions</router-link>
        </div>
      </div>

      <div class="footer-cta">
        <p>Private beauty experiences by appointment only.</p>
        <router-link to="/noir/contact">Inquire Now ✦</router-link>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2026 New York Noir by Renata Oliver. All Rights Reserved.</p>

      <div class="socials">
        <span>◎</span>
        <span>ⓟ</span>
        <span>♪</span>
        <span>✉</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.noir-footer {
  background: var(--bg);
  color: var(--text);
  padding: 70px 6vw 28px;
  border-top: 1px solid var(--gold);
}

.footer-frame {
  border: 1px solid rgba(212, 162, 118, 0.28);
  padding: 46px 52px;
  display: grid;
  grid-template-columns: 240px 1fr 280px;
  gap: 44px;
  align-items: start;
}

.footer-brand {
  text-align: center;
}

.footer-brand span,
.footer-brand small,
.label {
  display: block;
  color: var(--gold);
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 9px;
}

.footer-brand h2 {
  margin: 8px 0;
  font-family: "Cormorant Garamond", serif;
  font-size: 56px;
  line-height: 0.85;
  font-weight: 500;
  letter-spacing: 7px;
  color: var(--gold);
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 34px;
}

.footer-grid div {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.label {
  margin: 0 0 10px;
}

.footer-grid a,
.footer-cta a {
  color: var(--text);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-size: 10px;
}

.footer-grid a:hover,
.footer-cta a:hover {
  color: var(--gold);
}

.footer-cta {
  border-left: 1px solid rgba(212, 162, 118, 0.25);
  padding-left: 34px;
}

.footer-cta p {
  margin: 0 0 24px;
  color: var(--text);
  font-family: "Cormorant Garamond", serif;
  font-size: 28px;
  line-height: 1.1;
}

.footer-cta a {
  display: inline-block;
  border: 1px solid var(--gold);
  padding: 14px 20px;
}

.footer-cta a:hover {
  background: var(--gold);
  color: var(--bg);
}

.footer-bottom {
  margin-top: 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(245, 239, 230, 0.6);
  font-size: 10px;
  letter-spacing: 2px;
}

.socials {
  display: flex;
  gap: 12px;
}

.socials span {
  width: 30px;
  height: 30px;
  border: 1px solid var(--gold);
  color: var(--gold);
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 11px;
}

@media (max-width: 900px) {
  .noir-footer {
    padding: 50px 22px 24px;
  }

  .footer-frame {
    grid-template-columns: 1fr;
    padding: 36px 28px;
    gap: 34px;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer-cta {
    border-left: none;
    border-top: 1px solid rgba(212, 162, 118, 0.25);
    padding-left: 0;
    padding-top: 28px;
    text-align: center;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 18px;
    text-align: center;
  }
}
</style>