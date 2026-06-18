<template>
  <div style="background:#0a0a0a; color:#fff; font-family:'Cormorant Garamond', Georgia, serif; min-height:100vh;">

    <!-- ── NAV ── -->
    <nav style="position:sticky; top:0; z-index:100; background:#0a0a0a; border-bottom:1px solid #1e1e1e; padding:0 40px; display:flex; align-items:center; justify-content:space-between; height:72px;">
      <!-- Logo block -->
      <div style="display:flex; flex-direction:column; line-height:1;">
        <div style="display:flex; align-items:center; gap:8px;">
          <span style="font-size:22px; letter-spacing:3px; font-weight:700; color:#fff;">RENATA</span>
        </div>
        <div style="display:flex; align-items:center; gap:6px; margin-top:2px;">
          <div style="height:1px; width:20px; background:#c9a96e;"></div>
          <span style="font-size:10px; letter-spacing:4px; color:#c9a96e; font-family:'Montserrat',sans-serif;">OLIVEIRA</span>
          <div style="height:1px; width:20px; background:#c9a96e;"></div>
        </div>
        <span style="font-size:7px; letter-spacing:4px; color:#888; font-family:'Montserrat',sans-serif; margin-top:3px;">MAKEUP &amp; BEAUTY</span>
      </div>

      <!-- Nav links -->
      <div style="display:flex; gap:36px; font-family:'Montserrat',sans-serif; font-size:10px; letter-spacing:2px; color:#aaa;">
        <a href="#hero" style="color:#c9a96e; text-decoration:none; border-bottom:1px solid #c9a96e; padding-bottom:2px;">HOME</a>
        <a href="#audience" style="color:#aaa; text-decoration:none;">ABOUT</a>
        <a href="#brands" style="color:#aaa; text-decoration:none;">COLLABORATIONS</a>
        <a href="#services" style="color:#aaa; text-decoration:none;">SERVICES</a>
        <a href="#stats" style="color:#aaa; text-decoration:none;">STATS</a>
        <a href="#cta" style="color:#aaa; text-decoration:none;">CONTACT</a>
      </div>

      <!-- CTA button -->
      <a href="https://www.velvetxverse.com/collaborate"
        style="border:1px solid #c9a96e; color:#c9a96e; padding:10px 28px; font-family:'Montserrat',sans-serif; font-size:9px; letter-spacing:3px; text-decoration:none;"
        onmouseover="this.style.background='#c9a96e';this.style.color='#0a0a0a'"
        onmouseout="this.style.background='transparent';this.style.color='#c9a96e'">
        COLLABORATE
      </a>
    </nav>

    <!-- ── HERO ── -->
    <section id="hero" style="display:grid; grid-template-columns:420px 1fr; height:480px; overflow:hidden;">

      <!-- Left: Full photo -->
      <div style="position:relative; overflow:hidden;">
        <img src="/valentino.png" alt="Renata Oliveira"
          style="width:100%; height:100%; object-fit:cover; object-position:center 20%; display:block;" />
        <!-- subtle right fade into dark -->
        <div style="position:absolute; inset:0; background:linear-gradient(to right, transparent 65%, #0a0a0a 100%);"></div>
      </div>

      <!-- Right: Name + info -->
      <div style="background:#0a0a0a; display:flex; flex-direction:column; justify-content:center; padding:40px 56px 40px 48px;">
        <p style="font-family:'Montserrat',sans-serif; font-size:8px; letter-spacing:5px; color:#c9a96e; margin-bottom:20px;">OFFICIAL MEDIA KIT · 2024</p>
        <div style="width:32px; height:1px; background:#c9a96e; margin-bottom:16px;"></div>

        <!-- Big editorial name -->
        <h1 style="font-size:clamp(40px,4.5vw,60px); line-height:0.95; font-weight:700; margin:0; color:#fff; letter-spacing:2px;">RENATA</h1>
        <h1 style="font-size:clamp(40px,4.5vw,60px); line-height:0.95; font-weight:700; margin:0 0 14px 0; color:#c9a96e; letter-spacing:2px;">OLIVEIRA</h1>

        <p style="font-family:'Montserrat',sans-serif; font-size:9px; letter-spacing:4px; color:#aaa; margin-bottom:24px;">MAKEUP ARTIST · BEAUTY CREATOR · BRAND COLLABORATOR</p>

        <div style="width:32px; height:1px; background:#c9a96e; margin-bottom:16px;"></div>

        <p style="font-family:'Montserrat',sans-serif; font-size:11px; line-height:1.7; color:#999; font-weight:300; margin-bottom:24px; max-width:420px;">
          Luxury beauty creator, makeup artist, and brand collaborator with a combined reach of over <strong style="color:#c9a96e;">972K</strong> followers across Instagram. Trusted by the world's most prestigious beauty houses.
        </p>

        <!-- Buttons -->
        <div style="display:flex; gap:12px; flex-wrap:wrap; margin-bottom:24px;">
          <a href="https://www.velvetxverse.com/collaborate"
            style="background:#c9a96e; color:#0a0a0a; padding:13px 36px; font-family:'Montserrat',sans-serif; font-size:9px; letter-spacing:3px; text-decoration:none; font-weight:700; display:flex; align-items:center; gap:8px;"
            onmouseover="this.style.background='#b8935a'"
            onmouseout="this.style.background='#c9a96e'">
            INQUIRE NOW →
          </a>
          <a href="mailto:velvetverse@velvetxverse.com"
            style="border:1px solid #444; color:#ccc; padding:13px 36px; font-family:'Montserrat',sans-serif; font-size:9px; letter-spacing:3px; text-decoration:none; display:flex; align-items:center; gap:8px;"
            onmouseover="this.style.borderColor='#c9a96e';this.style.color='#c9a96e'"
            onmouseout="this.style.borderColor='#444';this.style.color='#ccc'">
            EMAIL DIRECTLY →
          </a>
        </div>

        <!-- Social icons row -->
        <div style="display:flex; gap:20px; align-items:center;">
          <a href="https://instagram.com/renataoliveiraofficial" target="_blank"
            style="color:#666; text-decoration:none; font-size:18px; transition:color 0.2s;"
            onmouseover="this.style.color='#c9a96e'" onmouseout="this.style.color='#666'">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://tiktok.com/@renataoliveiraofficial" target="_blank"
            style="color:#666; text-decoration:none; font-size:18px;"
            onmouseover="this.style.color='#c9a96e'" onmouseout="this.style.color='#666'">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/></svg>
          </a>
          <a href="https://youtube.com" target="_blank"
            style="color:#666; text-decoration:none;"
            onmouseover="this.style.color='#c9a96e'" onmouseout="this.style.color='#666'">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
          </a>
          <a href="mailto:velvetverse@velvetxverse.com"
            style="color:#666; text-decoration:none;"
            onmouseover="this.style.color='#c9a96e'" onmouseout="this.style.color='#666'">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          </a>
        </div>
      </div>
    </section>

    <!-- ── BRAND LOGOS BAR ── -->
    <section id="brands" style="background:#111; border-top:1px solid #1e1e1e; border-bottom:1px solid #1e1e1e; padding:28px 48px;">
      <p style="text-align:center; font-family:'Montserrat',sans-serif; font-size:8px; letter-spacing:5px; color:#c9a96e; margin-bottom:24px;">FEATURED &amp; COLLABORATED WITH</p>
      <div style="display:flex; align-items:center; justify-content:center; gap:48px; flex-wrap:wrap;">
        <span style="font-size:24px; letter-spacing:3px; font-weight:700; color:#fff; font-family:'Cormorant Garamond',serif;">DIOR</span>
        <span style="color:#333;">|</span>
        <span style="font-size:22px; letter-spacing:2px; font-weight:700; color:#fff; font-family:'Cormorant Garamond',serif;">CHANEL</span>
        <span style="color:#333;">|</span>
        <span style="font-size:22px; letter-spacing:2px; font-weight:700; color:#fff; font-family:'Cormorant Garamond',serif;">YSL</span>
        <span style="color:#333;">|</span>
        <span style="font-size:22px; letter-spacing:2px; font-weight:700; color:#fff; font-family:'Cormorant Garamond',serif;">LA MER</span>
        <span style="color:#333;">|</span>
        <span style="font-size:22px; letter-spacing:2px; font-weight:700; color:#fff; font-family:'Cormorant Garamond',serif;">VALENTINO</span>
        <span style="color:#333;">|</span>
        <span style="font-size:22px; letter-spacing:2px; font-weight:700; color:#fff; font-family:'Cormorant Garamond',serif;">TOM FORD</span>
        <span style="color:#333;">|</span>
        <span style="font-size:20px; letter-spacing:2px; font-weight:700; color:#fff; font-family:'Cormorant Garamond',serif;">L'ORÉAL</span>
        <span style="color:#333;">|</span>
        <span style="font-size:20px; letter-spacing:2px; font-weight:700; color:#fff; font-family:'Cormorant Garamond',serif;">BOBBI BROWN</span>
      </div>
    </section>

    <!-- ── STATS STRIP ── -->
    <section id="stats" style="background:#0d0d0d; border-bottom:1px solid #1e1e1e; padding:24px 48px;">
      <div style="display:grid; grid-template-columns:repeat(5,1fr); max-width:1100px; margin:0 auto;">
        <div v-for="(stat, i) in statsStrip" :key="stat.label"
          :style="{display:'flex', alignItems:'center', gap:'16px', padding:'0 24px', borderRight: i < statsStrip.length-1 ? '1px solid #1e1e1e' : 'none'}">
          <span style="font-size:22px; color:#c9a96e;">{{ stat.icon }}</span>
          <div>
            <p style="font-size:22px; font-weight:700; color:#fff; line-height:1; margin-bottom:4px; font-family:'Cormorant Garamond',serif;">{{ stat.value }}</p>
            <p style="font-family:'Montserrat',sans-serif; font-size:8px; letter-spacing:2px; color:#c9a96e; margin-bottom:2px;">{{ stat.label }}</p>
            <p style="font-family:'Montserrat',sans-serif; font-size:9px; color:#555;">{{ stat.sub }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── AUDIENCE + BRANDS (side by side) ── -->
    <section id="audience" style="display:grid; grid-template-columns:1fr 1fr; border-bottom:1px solid #1e1e1e;">

      <!-- Audience Demographics -->
      <div style="padding:48px; border-right:1px solid #1e1e1e; background:#0a0a0a;">
        <p style="font-family:'Montserrat',sans-serif; font-size:8px; letter-spacing:5px; color:#c9a96e; margin-bottom:28px;">AUDIENCE PROFILE</p>
        <div v-for="demo in demographics" :key="demo.label" style="margin-bottom:18px;">
          <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
            <span style="font-family:'Montserrat',sans-serif; font-size:10px; color:#aaa; letter-spacing:1px;">{{ demo.label }}</span>
            <span style="font-family:'Montserrat',sans-serif; font-size:10px; color:#c9a96e; font-weight:600;">{{ demo.value }}</span>
          </div>
          <div style="height:1px; background:#1a1a1a; position:relative;">
            <div :style="{width: demo.pct, height:'100%', background:'#c9a96e', position:'absolute', left:0, top:0}"></div>
          </div>
        </div>
        <div style="margin-top:24px; padding-top:20px; border-top:1px solid #1a1a1a;">
          <p style="font-family:'Montserrat',sans-serif; font-size:8px; letter-spacing:3px; color:#c9a96e; margin-bottom:10px;">TOP LOCATIONS</p>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <span v-for="loc in locations" :key="loc"
              style="background:#111; border:1px solid #2a2a2a; padding:4px 12px; font-family:'Montserrat',sans-serif; font-size:9px; color:#888; letter-spacing:1px;">{{ loc }}</span>
          </div>
        </div>
        <div style="margin-top:20px; padding-top:16px; border-top:1px solid #1a1a1a;">
          <p style="font-family:'Montserrat',sans-serif; font-size:8px; letter-spacing:3px; color:#c9a96e; margin-bottom:10px;">AUDIENCE INTERESTS</p>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <span v-for="interest in interests" :key="interest"
              style="background:#111; border:1px solid #2a2a2a; padding:4px 12px; font-family:'Montserrat',sans-serif; font-size:9px; color:#888; letter-spacing:1px;">{{ interest }}</span>
          </div>
        </div>
      </div>

      <!-- Platform Stats -->
      <div style="padding:48px; background:#0a0a0a;">
        <p style="font-family:'Montserrat',sans-serif; font-size:8px; letter-spacing:5px; color:#c9a96e; margin-bottom:28px;">PLATFORM REACH</p>
        <div style="display:flex; flex-direction:column; gap:1px;">
          <div v-for="plat in platformStats" :key="plat.label"
            style="background:#111; border:1px solid #1a1a1a; padding:18px 24px; display:flex; align-items:center; justify-content:space-between;">
            <div>
              <p style="font-family:'Montserrat',sans-serif; font-size:9px; letter-spacing:2px; color:#aaa; margin-bottom:3px;">{{ plat.label }}</p>
              <p style="font-family:'Montserrat',sans-serif; font-size:10px; color:#555;">{{ plat.handle }}</p>
            </div>
            <p style="font-size:28px; font-weight:700; color:#c9a96e; font-family:'Cormorant Garamond',serif;">{{ plat.value }}</p>
          </div>
        </div>
      </div>

    </section>

    <!-- ── SERVICES ── -->
    <section id="services" style="background:#111; padding:56px 48px; border-bottom:1px solid #1e1e1e;">
      <p style="text-align:center; font-family:'Montserrat',sans-serif; font-size:8px; letter-spacing:5px; color:#c9a96e; margin-bottom:8px;">WHAT I OFFER</p>
      <h2 style="text-align:center; font-size:36px; font-weight:700; color:#fff; margin-bottom:36px;">Collaboration Services</h2>
      <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:1px; max-width:1100px; margin:0 auto;">
        <div v-for="service in kitServices" :key="service.title"
          style="background:#0a0a0a; border:1px solid #1a1a1a; padding:32px 28px; transition:border-color 0.3s;"
          onmouseover="this.style.borderColor='#c9a96e'"
          onmouseout="this.style.borderColor='#1a1a1a'">
          <span style="font-size:16px; color:#c9a96e; display:block; margin-bottom:12px;">{{ service.icon }}</span>
          <h3 style="font-size:18px; font-weight:600; color:#fff; margin-bottom:8px; line-height:1.2;">{{ service.title }}</h3>
          <p style="font-family:'Montserrat',sans-serif; font-size:11px; line-height:1.7; color:#666; font-weight:300;">{{ service.desc }}</p>
        </div>
      </div>
    </section>

    <!-- ── THE RENATA DIFFERENCE ── -->
    <section style="background:#0a0a0a; padding:56px 48px; border-bottom:1px solid #1e1e1e;">
      <div style="max-width:1100px; margin:0 auto;">
        <p style="text-align:center; font-family:'Montserrat',sans-serif; font-size:8px; letter-spacing:5px; color:#c9a96e; margin-bottom:8px;">THE RENATA DIFFERENCE</p>
        <h2 style="text-align:center; font-size:36px; font-weight:700; color:#fff; margin-bottom:36px;">Why Work With Me</h2>
        <div style="display:grid; grid-template-columns:repeat(4,1fr); gap:1px;">
          <div v-for="point in differentiators" :key="point.title"
            style="background:#111; border:1px solid #1a1a1a; padding:28px 24px; text-align:center;">
            <span style="font-size:18px; color:#c9a96e; display:block; margin-bottom:12px;">{{ point.icon }}</span>
            <p style="font-family:'Montserrat',sans-serif; font-size:9px; letter-spacing:2px; color:#fff; margin-bottom:8px;">{{ point.title }}</p>
            <p style="font-family:'Montserrat',sans-serif; font-size:10px; color:#666; line-height:1.6;">{{ point.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── BLOG ── -->
    <section style="background:#0a0a0a; padding:56px 48px; border-bottom:1px solid #1e1e1e;">
      <div style="max-width:1100px; margin:0 auto;">
        <p style="text-align:center; font-family:'Montserrat',sans-serif; font-size:8px; letter-spacing:5px; color:#c9a96e; margin-bottom:8px;">THE JOURNAL</p>
        <h2 style="text-align:center; font-size:36px; font-weight:700; color:#fff; margin-bottom:36px;">Latest Posts</h2>
        <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:1px;">
          <div v-for="post in featuredPosts" :key="post.title" style="background:#111; overflow:hidden; border:1px solid #1a1a1a; transition:border-color 0.3s;" onmouseover="this.style.borderColor='#c9a96e'" onmouseout="this.style.borderColor='#1a1a1a'">
            <div style="overflow:hidden; height:200px;">
              <img :src="post.img" :alt="post.title" style="width:100%; height:100%; object-fit:cover; transition:transform 0.6s;"
                onmouseover="this.style.transform='scale(1.05)'"
                onmouseout="this.style.transform='scale(1)'" />
            </div>
            <div style="padding:24px;">
              <p style="font-family:'Montserrat',sans-serif; font-size:8px; letter-spacing:3px; color:#c9a96e; margin-bottom:8px;">{{ post.category }}</p>
              <h3 style="font-size:18px; font-weight:600; color:#fff; margin-bottom:8px; line-height:1.3;">{{ post.title }}</h3>
              <p style="font-size:13px; line-height:1.6; color:#777; font-family:'Montserrat',sans-serif; font-weight:300; margin-bottom:16px;">{{ post.excerpt }}</p>
              <p style="font-family:'Montserrat',sans-serif; font-size:9px; letter-spacing:2px; color:#c9a96e;">READ MORE ›</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CTA ── -->
    <section id="cta" style="background:#111; padding:64px 48px; text-align:center; border-bottom:1px solid #1e1e1e;">
      <p style="font-family:'Montserrat',sans-serif; font-size:8px; letter-spacing:5px; color:#c9a96e; margin-bottom:16px;">READY TO COLLABORATE?</p>
      <h2 style="font-size:44px; font-weight:700; color:#fff; margin-bottom:16px; line-height:1.1;">Let's Create <em style="color:#c9a96e; font-style:italic;">Something Beautiful</em></h2>
      <p style="font-family:'Montserrat',sans-serif; font-size:12px; color:#888; font-weight:300; margin-bottom:36px; max-width:480px; margin-left:auto; margin-right:auto; line-height:1.8;">
        For brand partnerships, sponsored content, event appearances, and beauty consulting.
      </p>
      <div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap; margin-bottom:40px;">
        <a href="https://www.velvetxverse.com/collaborate"
          style="background:#c9a96e; color:#0a0a0a; padding:14px 48px; font-family:'Montserrat',sans-serif; font-size:9px; letter-spacing:3px; text-decoration:none; font-weight:700;"
          onmouseover="this.style.background='#b8935a'"
          onmouseout="this.style.background='#c9a96e'">
          START A COLLABORATION
        </a>
        <a href="mailto:velvetverse@velvetxverse.com"
          style="border:1px solid #c9a96e; color:#c9a96e; padding:14px 48px; font-family:'Montserrat',sans-serif; font-size:9px; letter-spacing:3px; text-decoration:none;"
          onmouseover="this.style.background='#c9a96e';this.style.color='#0a0a0a'"
          onmouseout="this.style.background='transparent';this.style.color='#c9a96e'">
          EMAIL ME
        </a>
      </div>
      <div style="display:flex; gap:40px; justify-content:center; flex-wrap:wrap; align-items:center; border-top:1px solid #1a1a1a; padding-top:32px; max-width:700px; margin:0 auto;">
        <div>
          <p style="font-family:'Montserrat',sans-serif; font-size:8px; color:#555; margin-bottom:4px; letter-spacing:2px;">INSTAGRAM (MAIN)</p>
          <p style="font-family:'Montserrat',sans-serif; font-size:11px; color:#c9a96e;">@renataoliveiraofficial</p>
        </div>
        <div style="width:1px; height:32px; background:#2a2a2a;"></div>
        <div>
          <p style="font-family:'Montserrat',sans-serif; font-size:8px; color:#555; margin-bottom:4px; letter-spacing:2px;">INSTAGRAM (MAKEUP)</p>
          <p style="font-family:'Montserrat',sans-serif; font-size:11px; color:#c9a96e;">@renataxolivermakeup</p>
        </div>
        <div style="width:1px; height:32px; background:#2a2a2a;"></div>
        <div>
          <p style="font-family:'Montserrat',sans-serif; font-size:8px; color:#555; margin-bottom:4px; letter-spacing:2px;">EMAIL</p>
          <p style="font-family:'Montserrat',sans-serif; font-size:11px; color:#c9a96e;">velvetverse@velvetxverse.com</p>
        </div>
      </div>
    </section>

    <!-- ── FOOTER ── -->
    <footer style="background:#0a0a0a; border-top:1px solid #1e1e1e; padding:20px 48px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px;">
      <span style="font-family:'Montserrat',sans-serif; font-size:10px; color:#333;">© 2024 Renata Oliveira. All rights reserved.</span>
      <div style="display:flex; gap:28px;">
        <a href="/" style="font-family:'Montserrat',sans-serif; font-size:10px; color:#333; text-decoration:none;">Velvet Verse</a>
        <a href="/makeup" style="font-family:'Montserrat',sans-serif; font-size:10px; color:#333; text-decoration:none;">Makeup</a>
        <a href="/privacy-policy" style="font-family:'Montserrat',sans-serif; font-size:10px; color:#333; text-decoration:none;">Privacy</a>
      </div>
    </footer>

  </div>
</template>

<script setup>
const statsStrip = [
  { icon: '◈', value: '972K+', label: 'TOTAL FOLLOWERS', sub: 'Across Instagram' },
  { icon: '◇', value: '15M+', label: 'MONTHLY IMPRESSIONS', sub: 'Avg. across platforms' },
  { icon: '✦', value: 'GLOBAL', label: 'GLOBAL AUDIENCE', sub: 'US · BR · EU · MENA' },
  { icon: '▷', value: 'PREMIUM', label: 'PREMIUM CONTENT', sub: 'High Quality · Engaging' },
  { icon: '❋', value: 'TRUSTED', label: 'TRUSTED BY', sub: 'Luxury Beauty Brands' },
]

const platformStats = [
  { value: '957K', label: 'INSTAGRAM', handle: '@renataoliveiraofficial' },
  { value: '15.5K', label: 'INSTAGRAM', handle: '@renataxolivermakeup' },
  { value: '61K', label: 'FACEBOOK', handle: 'Renata Oliveira' },
  { value: '1M+', label: 'FB VIEWS / MONTH', handle: 'Avg. monthly reach' },
  { value: '30K', label: 'TIKTOK', handle: '@renataoliveiraofficial' },
  { value: '80K', label: 'PINTEREST', handle: 'Renata Oliveira' },
]

const demographics = [
  { label: 'Female Audience', value: '87%', pct: '87%' },
  { label: 'Age 18–34', value: '62%', pct: '62%' },
  { label: 'Age 35–44', value: '24%', pct: '24%' },
  { label: 'Engagement Rate (Main)', value: '4.2%', pct: '42%' },
  { label: 'Engagement Rate (Makeup)', value: '6.8%', pct: '68%' },
]

const locations = ['Brazil', 'USA', 'Portugal', 'France', 'UK', 'Spain']
const interests = ['Luxury Beauty', 'Skincare', 'Tutorials', 'Fashion', 'Lifestyle', 'Wellness']

const kitServices = [
  { icon: '✦', title: 'Sponsored Posts & Reels', desc: 'Dedicated Instagram posts and Reels featuring your brand with full creative direction, professional photography, and authentic storytelling.' },
  { icon: '◇', title: 'UGC Content Creation', desc: 'High-quality content packages for use across your brand\'s own channels — no posting required. Perfect for ads and product pages.' },
  { icon: '▷', title: 'Tutorial & Review Content', desc: 'In-depth makeup tutorials and honest product reviews that drive purchase intent and build brand credibility.' },
  { icon: '✧', title: 'Brand Ambassador Packages', desc: 'Long-term ambassador relationships with monthly content deliverables, exclusive discount codes, and ongoing audience engagement.' },
  { icon: '◈', title: 'Event Appearances', desc: 'In-person attendance at product launches, press events, and brand activations with live social coverage.' },
  { icon: '❋', title: 'Gifted Collaborations', desc: 'Organic gifted content for emerging luxury and indie beauty brands — authentic reviews with a passionate beauty audience.' },
]

const featuredPosts = [
  { category: 'TUTORIAL', title: 'The Perfect Smoky Eye in 10 Minutes', excerpt: 'Master the classic smoky eye with these professional techniques and my favorite products from Tom Ford and Charlotte Tilbury.', img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80' },
  { category: 'REVIEW', title: 'Dior Addict Lip Maximizer: Worth the Hype?', excerpt: 'I tested this iconic lip plumper for 30 days straight. Here\'s my honest take on whether it lives up to its luxury price tag.', img: 'https://images.unsplash.com/photo-1586495777744-4e6232bf2f9e?w=600&q=80' },
  { category: 'LIFESTYLE', title: 'My Morning Beauty Ritual for Glowing Skin', excerpt: 'The exact 15-minute routine I follow every morning to achieve that lit-from-within glow — featuring La Mer and Chanel.', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80' },
]

const differentiators = [
  { icon: '✦', title: 'LUXURY NICHE', desc: 'Exclusively high-end beauty — her audience expects and trusts premium brand recommendations.' },
  { icon: '◇', title: 'BILINGUAL REACH', desc: 'Fluent in English and Portuguese, reaching Brazil, Europe, and North America.' },
  { icon: '▷', title: 'HIGH ENGAGEMENT', desc: 'Above-average engagement rates driven by genuine community connection.' },
  { icon: '✧', title: 'EDITORIAL QUALITY', desc: 'Every piece of content is produced to editorial standards — no low-quality UGC.' },
]
</script>
