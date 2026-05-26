<script setup>
import ParisHeader from '../components/ParisHeader.vue'
import ParisFooter from '../components/ParisFooter.vue'
</script>

<template>
  <main class="legal-page">

    <section class="legal-frame">

      <ParisHeader />

      <section class="legal-content">

        <p class="eyebrow">
          LA DOUCEUR
        </p>

        <div class="divider">
          <span></span>
          ❦
          <span></span>
        </div>

        <h1>
          Privacy Policy
        </h1>

        <p class="intro">
          Your privacy matters to us.
          This policy explains how La Douceur collects,
          uses, and protects your information.
        </p>

        <div class="legal-section">

          <h2>
            Information We Collect
          </h2>

          <p>
            We may collect personal information such as your name,
            email address, reservation details,
            and messages submitted through contact forms.
          </p>

        </div>

        <div class="legal-section">

          <h2>
            How We Use Your Information
          </h2>

          <p>
            Your information is used to manage reservations,
            respond to inquiries,
            improve customer experience,
            and share updates when requested.
          </p>

        </div>

        <div class="legal-section">

          <h2>
            Data Protection
          </h2>

          <p>
            We take reasonable measures to protect your information
            and maintain secure handling practices.
          </p>

        </div>

        <div class="legal-section">

          <h2>
            Contact
          </h2>

          <p>
            Questions regarding this policy may be directed to:
            bonjour@ladouceur.fr
          </p>

        </div>

      </section>

    </section>

    <ParisFooter />

  </main>
</template>

<style scoped>
.legal-page{
  min-height:100vh;
  background:var(--bg);
  color:var(--text);
  padding:16px;
}

.legal-frame{
  max-width:1100px;
  margin:0 auto;
  padding:24px 40px 70px;
  border-radius:30px;
  border:1px solid var(--gold-line);
  background:
    radial-gradient(circle at top,var(--surface),transparent 42%),
    linear-gradient(to bottom,var(--cream),var(--surface));
}

.legal-content{
  max-width:760px;
  margin:60px auto 0;
}

.eyebrow{
  text-align:center;
  color:var(--accent);
  font-family:Arial,sans-serif;
  font-size:10px;
  letter-spacing:5px;
  font-weight:800;
}

.divider{
  display:flex;
  justify-content:center;
  align-items:center;
  gap:12px;
  margin:18px 0 26px;
  color:var(--gold);
}

.divider span{
  width:60px;
  height:1px;
  background:var(--gold-line);
}

h1{
  text-align:center;
  font-size:62px;
  font-weight:300;
  margin-bottom:18px;
}

.intro{
  text-align:center;
  color:var(--muted);
  font-family:Arial,sans-serif;
  line-height:1.9;
  margin-bottom:46px;
}

.legal-section{
  margin-bottom:40px;
}

.legal-section h2{
  margin-bottom:12px;
  color:var(--accent);
  font-size:28px;
  font-weight:300;
}

.legal-section p{
  color:var(--muted);
  font-family:Arial,sans-serif;
  font-size:13px;
  line-height:2;
}

@media(max-width:760px){

  .legal-page{
    padding:0;
  }

  .legal-frame{
    border-radius:0;
    padding:22px;
  }

  h1{
    font-size:44px;
  }

}
</style>