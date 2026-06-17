<template>
  <div class="makeup-page" style="background:#0a0a0a; color:#fff; font-family:'Cormorant Garamond', Georgia, serif; min-height:100vh;">

    <!-- ── NAV ── -->
    <nav style="position:sticky; top:0; z-index:100; background:#0a0a0a; border-bottom:1px solid #2a2a2a; padding:0 40px; display:flex; align-items:center; justify-content:space-between; height:72px;">
      <a href="/" style="color:#c9a96e; font-size:11px; letter-spacing:3px; text-decoration:none; font-family:'Montserrat',sans-serif; font-weight:500;">← VELVET VERSE</a>
      <div style="display:flex; align-items:center; gap:8px; flex-direction:column; line-height:1;">
        <span style="font-size:22px; letter-spacing:4px; font-weight:700; color:#fff;">RENATA OLIVEIRA</span>
        <span style="font-size:10px; letter-spacing:5px; color:#c9a96e; font-family:'Montserrat',sans-serif;">BEAUTY & MAKEUP</span>
      </div>
      <div style="display:flex; gap:32px; font-family:'Montserrat',sans-serif; font-size:11px; letter-spacing:2px;">
        <a href="#about" style="color:#ccc; text-decoration:none;">ABOUT</a>
        <a href="#services" style="color:#ccc; text-decoration:none;">SERVICES</a>
        <a href="#blog" style="color:#ccc; text-decoration:none;">JOURNAL</a>
        <a href="#contact" style="color:#ccc; text-decoration:none;">CONTACT</a>
      </div>
    </nav>

    <!-- ── HERO ── -->
    <section style="display:grid; grid-template-columns:1fr 1fr 1fr 1fr; min-height:85vh; position:relative;">
      <!-- Left text column -->
      <div style="background:#0a0a0a; display:flex; flex-direction:column; justify-content:center; padding:60px 48px; z-index:2;">
        <p style="font-family:'Montserrat',sans-serif; font-size:10px; letter-spacing:4px; color:#c9a96e; margin-bottom:24px;">BEAUTY. CONFIDENCE. YOU.</p>
        <h1 style="font-size:clamp(42px,5vw,72px); line-height:1.05; font-weight:700; margin:0 0 24px 0; color:#fff;">
          Elevate<br>Your<br><em style="color:#c9a96e; font-style:italic;">Everyday</em><br>Beauty
        </h1>
        <div style="width:40px; height:2px; background:#c9a96e; margin-bottom:24px;"></div>
        <p style="font-size:16px; line-height:1.7; color:#aaa; margin-bottom:40px; font-family:'Montserrat',sans-serif; font-weight:300;">
          Luxury beauty made effortless. Expert tips, curated favorites, and timeless looks to bring out your most confident self.
        </p>
        <a href="#services" style="display:inline-block; border:1px solid #c9a96e; color:#c9a96e; padding:14px 32px; font-family:'Montserrat',sans-serif; font-size:10px; letter-spacing:3px; text-decoration:none; transition:all 0.3s; width:fit-content;"
          onmouseover="this.style.background='#c9a96e';this.style.color='#0a0a0a'"
          onmouseout="this.style.background='transparent';this.style.color='#c9a96e'">
          EXPLORE THE WORLD OF BEAUTY
        </a>
      </div>
      <!-- Photo 1 -->
      <div style="overflow:hidden; position:relative;">
        <img src="/mascara.png" alt="Mascara look" style="width:100%; height:100%; object-fit:cover; object-position:center top; filter:brightness(0.9);" />
      </div>
      <!-- Photo 2 -->
      <div style="overflow:hidden; position:relative;">
        <img src="/valentino.png" alt="Valentino look" style="width:100%; height:100%; object-fit:cover; object-position:center top; filter:brightness(0.9);" />
      </div>
      <!-- Photo 3 -->
      <div style="overflow:hidden; position:relative;">
        <img src="/thinking.png" alt="Editorial look" style="width:100%; height:100%; object-fit:cover; object-position:center top; filter:brightness(0.9);" />
      </div>
    </section>

    <!-- ── BRAND LOGOS ── -->
    <section style="background:#111; border-top:1px solid #2a2a2a; border-bottom:1px solid #2a2a2a; padding:28px 60px;">
      <p style="text-align:center; font-family:'Montserrat',sans-serif; font-size:9px; letter-spacing:4px; color:#c9a96e; margin-bottom:24px;">FEATURED & COLLABORATED WITH</p>
      <div style="display:flex; align-items:center; justify-content:center; gap:60px; flex-wrap:wrap;">
        <span style="font-size:22px; letter-spacing:3px; font-weight:700; color:#fff; font-family:'Cormorant Garamond',serif;">DIOR</span>
        <span style="color:#555;">|</span>
        <span style="font-size:20px; letter-spacing:2px; font-weight:700; color:#fff; font-family:'Cormorant Garamond',serif;">CHANEL</span>
        <span style="color:#555;">|</span>
        <span style="font-size:20px; letter-spacing:2px; font-weight:700; color:#fff; font-family:'Cormorant Garamond',serif;">YSL</span>
        <span style="color:#555;">|</span>
        <span style="font-size:20px; letter-spacing:2px; font-weight:700; color:#fff; font-family:'Cormorant Garamond',serif;">LA MER</span>
        <span style="color:#555;">|</span>
        <span style="font-size:20px; letter-spacing:2px; font-weight:700; color:#fff; font-family:'Cormorant Garamond',serif;">VALENTINO</span>
        <span style="color:#555;">|</span>
        <span style="font-size:20px; letter-spacing:2px; font-weight:700; color:#fff; font-family:'Cormorant Garamond',serif;">TOM FORD</span>
      </div>
    </section>

    <!-- ── CONTENT GRID + BLOG SIDEBAR ── -->
    <section style="display:grid; grid-template-columns:1fr 1fr 1fr 320px; min-height:420px; border-bottom:1px solid #2a2a2a;">

      <!-- Beauty Tips -->
      <div style="position:relative; overflow:hidden; border-right:1px solid #2a2a2a;">
        <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80" alt="Beauty Tips" style="width:100%; height:100%; object-fit:cover; filter:brightness(0.35); position:absolute; inset:0;" />
        <div style="position:relative; z-index:2; padding:40px 36px; height:100%; display:flex; flex-direction:column; justify-content:flex-end;">
          <div style="width:32px; height:32px; border:1px solid #c9a96e; border-radius:50%; display:flex; align-items:center; justify-content:center; margin-bottom:16px;">
            <span style="color:#c9a96e; font-size:14px;">✦</span>
          </div>
          <p style="font-family:'Montserrat',sans-serif; font-size:10px; letter-spacing:3px; color:#c9a96e; margin-bottom:10px;">BEAUTY TIPS</p>
          <h3 style="font-size:26px; font-weight:600; color:#fff; margin-bottom:10px;">Expert advice to elevate your routine.</h3>
          <a href="#blog" style="font-family:'Montserrat',sans-serif; font-size:10px; letter-spacing:2px; color:#c9a96e; text-decoration:none;">DISCOVER MORE ›</a>
        </div>
      </div>

      <!-- Shop My Favorites -->
      <div style="position:relative; overflow:hidden; border-right:1px solid #2a2a2a;">
        <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80" alt="Shop Favorites" style="width:100%; height:100%; object-fit:cover; filter:brightness(0.35); position:absolute; inset:0;" />
        <div style="position:relative; z-index:2; padding:40px 36px; height:100%; display:flex; flex-direction:column; justify-content:flex-end;">
          <div style="width:32px; height:32px; border:1px solid #c9a96e; border-radius:50%; display:flex; align-items:center; justify-content:center; margin-bottom:16px;">
            <span style="color:#c9a96e; font-size:14px;">◇</span>
          </div>
          <p style="font-family:'Montserrat',sans-serif; font-size:10px; letter-spacing:3px; color:#c9a96e; margin-bottom:10px;">SHOP MY FAVORITES</p>
          <h3 style="font-size:26px; font-weight:600; color:#fff; margin-bottom:10px;">Handpicked luxury essentials I love.</h3>
          <a href="#services" style="font-family:'Montserrat',sans-serif; font-size:10px; letter-spacing:2px; color:#c9a96e; text-decoration:none;">SHOP NOW ›</a>
        </div>
      </div>

      <!-- Behind the Look -->
      <div style="position:relative; overflow:hidden; border-right:1px solid #2a2a2a;">
        <img src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80" alt="Behind the Look" style="width:100%; height:100%; object-fit:cover; filter:brightness(0.35); position:absolute; inset:0;" />
        <div style="position:relative; z-index:2; padding:40px 36px; height:100%; display:flex; flex-direction:column; justify-content:flex-end;">
          <div style="width:32px; height:32px; border:1px solid #c9a96e; border-radius:50%; display:flex; align-items:center; justify-content:center; margin-bottom:16px;">
            <span style="color:#c9a96e; font-size:14px;">▷</span>
          </div>
          <p style="font-family:'Montserrat',sans-serif; font-size:10px; letter-spacing:3px; color:#c9a96e; margin-bottom:10px;">BEHIND THE LOOK</p>
          <h3 style="font-size:26px; font-weight:600; color:#fff; margin-bottom:10px;">Step-by-step tutorials and beauty secrets.</h3>
          <a href="#blog" style="font-family:'Montserrat',sans-serif; font-size:10px; letter-spacing:2px; color:#c9a96e; text-decoration:none;">WATCH NOW ›</a>
        </div>
      </div>

      <!-- Latest on the Blog -->
      <div style="background:#111; padding:36px 28px; display:flex; flex-direction:column;">
        <p style="font-family:'Montserrat',sans-serif; font-size:10px; letter-spacing:3px; color:#c9a96e; margin-bottom:24px;">LATEST ON THE BLOG</p>
        <div v-for="(post, i) in blogPosts" :key="i" style="display:flex; gap:14px; margin-bottom:20px; padding-bottom:20px; border-bottom:1px solid #2a2a2a;">
          <img :src="post.img" :alt="post.title" style="width:56px; height:56px; object-fit:cover; flex-shrink:0;" />
          <div>
            <p style="font-size:14px; font-weight:600; color:#fff; margin-bottom:4px; line-height:1.3;">{{ post.title }}</p>
            <p style="font-family:'Montserrat',sans-serif; font-size:10px; color:#666; letter-spacing:1px;">{{ post.date }}</p>
          </div>
        </div>
        <a href="#blog" style="font-family:'Montserrat',sans-serif; font-size:10px; letter-spacing:2px; color:#c9a96e; text-decoration:none; margin-top:auto;">VIEW ALL POSTS ›</a>
      </div>
    </section>

    <!-- ── ABOUT ── -->
    <section id="about" style="display:grid; grid-template-columns:1fr 1fr; min-height:500px;">
      <div style="overflow:hidden;">
        <img src="/valentino.png" alt="Renata Oliveira" style="width:100%; height:100%; object-fit:cover; object-position:center top;" />
      </div>
      <div style="background:#111; display:flex; flex-direction:column; justify-content:center; padding:80px 64px;">
        <p style="font-family:'Montserrat',sans-serif; font-size:10px; letter-spacing:4px; color:#c9a96e; margin-bottom:20px;">ABOUT RENATA</p>
        <h2 style="font-size:clamp(32px,4vw,52px); font-weight:700; color:#fff; margin-bottom:24px; line-height:1.1;">Beauty is an art.<br><em style="color:#c9a96e;">You are the canvas.</em></h2>
        <p style="font-size:17px; line-height:1.8; color:#aaa; margin-bottom:32px; font-family:'Montserrat',sans-serif; font-weight:300;">
          With over a decade of experience in luxury beauty and content creation, I help brands and individuals discover their most radiant selves. My work has been featured alongside Dior, Chanel, Valentino, and more.
        </p>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:24px; margin-bottom:40px;">
          <div v-for="stat in stats" :key="stat.label" style="text-align:center; border:1px solid #2a2a2a; padding:20px;">
            <p style="font-size:28px; font-weight:700; color:#c9a96e; margin-bottom:4px;">{{ stat.value }}</p>
            <p style="font-family:'Montserrat',sans-serif; font-size:10px; letter-spacing:2px; color:#666;">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── SERVICES ── -->
    <section id="services" style="background:#0a0a0a; padding:100px 60px;">
      <div style="text-align:center; margin-bottom:60px;">
        <p style="font-family:'Montserrat',sans-serif; font-size:10px; letter-spacing:4px; color:#c9a96e; margin-bottom:16px;">WHAT I OFFER</p>
        <h2 style="font-size:clamp(36px,4vw,56px); font-weight:700; color:#fff;">Services</h2>
      </div>
      <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:2px;">
        <div v-for="service in services" :key="service.title"
          style="background:#111; padding:48px 40px; border:1px solid #1a1a1a; transition:border-color 0.3s; cursor:default;"
          onmouseover="this.style.borderColor='#c9a96e'"
          onmouseout="this.style.borderColor='#1a1a1a'">
          <div style="font-size:28px; margin-bottom:20px;">{{ service.icon }}</div>
          <h3 style="font-size:22px; font-weight:600; color:#fff; margin-bottom:12px;">{{ service.title }}</h3>
          <p style="font-size:15px; line-height:1.7; color:#888; font-family:'Montserrat',sans-serif; font-weight:300; margin-bottom:20px;">{{ service.desc }}</p>
          <p style="font-family:'Montserrat',sans-serif; font-size:11px; letter-spacing:2px; color:#c9a96e;">{{ service.price }}</p>
        </div>
      </div>
    </section>

    <!-- ── BLOG ── -->
    <section id="blog" style="background:#111; padding:100px 60px;">
      <div style="text-align:center; margin-bottom:60px;">
        <p style="font-family:'Montserrat',sans-serif; font-size:10px; letter-spacing:4px; color:#c9a96e; margin-bottom:16px;">THE JOURNAL</p>
        <h2 style="font-size:clamp(36px,4vw,56px); font-weight:700; color:#fff;">Latest Posts</h2>
      </div>
      <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:2px;">
        <div v-for="post in featuredPosts" :key="post.title" style="background:#0a0a0a; overflow:hidden; cursor:pointer;">
          <div style="overflow:hidden; height:280px;">
            <img :src="post.img" :alt="post.title" style="width:100%; height:100%; object-fit:cover; transition:transform 0.6s;"
              onmouseover="this.style.transform='scale(1.05)'"
              onmouseout="this.style.transform='scale(1)'" />
          </div>
          <div style="padding:32px;">
            <p style="font-family:'Montserrat',sans-serif; font-size:9px; letter-spacing:3px; color:#c9a96e; margin-bottom:12px;">{{ post.category }}</p>
            <h3 style="font-size:22px; font-weight:600; color:#fff; margin-bottom:12px; line-height:1.3;">{{ post.title }}</h3>
            <p style="font-size:14px; line-height:1.7; color:#888; font-family:'Montserrat',sans-serif; font-weight:300; margin-bottom:20px;">{{ post.excerpt }}</p>
            <p style="font-family:'Montserrat',sans-serif; font-size:10px; letter-spacing:2px; color:#c9a96e;">READ MORE ›</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── NEWSLETTER ── -->
    <section style="background:#0a0a0a; border-top:1px solid #2a2a2a; border-bottom:1px solid #2a2a2a; padding:60px;">
      <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:32px; max-width:1100px; margin:0 auto;">
        <div>
          <p style="font-family:'Montserrat',sans-serif; font-size:10px; letter-spacing:4px; color:#c9a96e; margin-bottom:8px;">JOIN THE GLAM COMMUNITY</p>
          <p style="font-size:18px; color:#aaa; font-family:'Montserrat',sans-serif; font-weight:300;">Exclusive beauty tips, early access, and insider-only content—just for you.</p>
        </div>
        <div style="display:flex; gap:0; flex:1; max-width:500px;">
          <input type="email" placeholder="Enter your email" style="flex:1; background:#111; border:1px solid #333; border-right:none; padding:14px 20px; color:#fff; font-family:'Montserrat',sans-serif; font-size:13px; outline:none;" />
          <button style="background:#c9a96e; color:#0a0a0a; border:none; padding:14px 28px; font-family:'Montserrat',sans-serif; font-size:10px; letter-spacing:2px; cursor:pointer; font-weight:600; white-space:nowrap;">SUBSCRIBE</button>
        </div>
      </div>
    </section>

    <!-- ── TRUST BADGES ── -->
    <section style="background:#111; padding:32px 60px;">
      <div style="display:grid; grid-template-columns:repeat(4,1fr); gap:20px; max-width:1100px; margin:0 auto;">
        <div v-for="badge in badges" :key="badge.label" style="display:flex; align-items:center; gap:16px; padding:0 20px; border-right:1px solid #2a2a2a;">
          <span style="font-size:24px; color:#c9a96e;">{{ badge.icon }}</span>
          <div>
            <p style="font-family:'Montserrat',sans-serif; font-size:10px; letter-spacing:2px; color:#fff; margin-bottom:2px;">{{ badge.label }}</p>
            <p style="font-family:'Montserrat',sans-serif; font-size:11px; color:#666;">{{ badge.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CONTACT ── -->
    <section id="contact" style="background:#0a0a0a; padding:80px 60px; text-align:center;">
      <p style="font-family:'Montserrat',sans-serif; font-size:10px; letter-spacing:4px; color:#c9a96e; margin-bottom:16px;">GET IN TOUCH</p>
      <h2 style="font-size:clamp(32px,4vw,52px); font-weight:700; color:#fff; margin-bottom:24px;">Let's Work Together</h2>
      <p style="font-size:17px; color:#aaa; font-family:'Montserrat',sans-serif; font-weight:300; margin-bottom:40px;">For brand collaborations, tutorials, and beauty partnerships.</p>
      <div style="display:flex; gap:20px; justify-content:center; flex-wrap:wrap;">
        <a href="mailto:velvetverse@velvetxverse.com" style="border:1px solid #c9a96e; color:#c9a96e; padding:14px 40px; font-family:'Montserrat',sans-serif; font-size:10px; letter-spacing:3px; text-decoration:none;"
          onmouseover="this.style.background='#c9a96e';this.style.color='#0a0a0a'"
          onmouseout="this.style.background='transparent';this.style.color='#c9a96e'">
          EMAIL ME
        </a>
        <a href="https://instagram.com/velvetxverse" target="_blank" style="background:#c9a96e; color:#0a0a0a; padding:14px 40px; font-family:'Montserrat',sans-serif; font-size:10px; letter-spacing:3px; text-decoration:none; font-weight:600;">
          INSTAGRAM
        </a>
      </div>
    </section>

    <!-- ── FOOTER ── -->
    <footer style="background:#111; border-top:1px solid #2a2a2a; padding:24px 60px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:16px;">
      <span style="font-family:'Montserrat',sans-serif; font-size:11px; color:#555;">© 2024 Renata Oliveira. All rights reserved.</span>
      <div style="display:flex; gap:32px;">
        <a href="/" style="font-family:'Montserrat',sans-serif; font-size:11px; color:#555; text-decoration:none;">Velvet Verse</a>
        <a href="/privacy-policy" style="font-family:'Montserrat',sans-serif; font-size:11px; color:#555; text-decoration:none;">Privacy</a>
        <a href="/terms-conditions" style="font-family:'Montserrat',sans-serif; font-size:11px; color:#555; text-decoration:none;">Terms</a>
      </div>
    </footer>

  </div>
</template>

<script setup>
const blogPosts = [
  { title: 'My Nighttime Skincare Routine', date: 'MAY 21, 2024', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=120&q=80' },
  { title: 'The Perfect Smoky Eye', date: 'MAY 16, 2024', img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=120&q=80' },
  { title: 'Summer Beauty Must-Haves', date: 'MAY 10, 2024', img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=120&q=80' },
]

const stats = [
  { value: '959K', label: 'INSTAGRAM' },
  { value: '55K', label: 'FACEBOOK' },
  { value: '30K', label: 'TIKTOK' },
  { value: '80K', label: 'PINTEREST' },
]

const services = [
  { icon: '✦', title: 'Brand Collaborations', desc: 'Full-service UGC content creation for luxury beauty and lifestyle brands. From concept to final delivery.', price: 'INQUIRE FOR PRICING' },
  { icon: '◇', title: 'Makeup Tutorials', desc: 'Step-by-step video and photo tutorials tailored to your brand\'s aesthetic and target audience.', price: 'STARTING FROM $500' },
  { icon: '▷', title: 'Beauty Consulting', desc: 'One-on-one sessions to develop your personal beauty routine and product selection.', price: 'STARTING FROM $150/HR' },
  { icon: '✧', title: 'Event Glam', desc: 'Professional makeup artistry for editorial shoots, events, and special occasions.', price: 'STARTING FROM $300' },
  { icon: '◈', title: 'Social Media Strategy', desc: 'Content strategy and planning for beauty brands looking to grow their social presence.', price: 'STARTING FROM $800/MO' },
  { icon: '❋', title: 'Product Reviews', desc: 'Honest, in-depth reviews of luxury beauty products for your brand\'s marketing campaigns.', price: 'INQUIRE FOR PRICING' },
]

const featuredPosts = [
  { category: 'TUTORIAL', title: 'The Perfect Smoky Eye in 10 Minutes', excerpt: 'Master the classic smoky eye with these professional techniques and my favorite products from Tom Ford and Charlotte Tilbury.', img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80', date: 'MAY 16, 2024' },
  { category: 'REVIEW', title: 'Dior Addict Lip Maximizer: Worth the Hype?', excerpt: 'I tested this iconic lip plumper for 30 days straight. Here\'s my honest take on whether it lives up to its luxury price tag.', img: 'https://images.unsplash.com/photo-1586495777744-4e6232bf2f9e?w=600&q=80', date: 'MAY 10, 2024' },
  { category: 'LIFESTYLE', title: 'My Morning Beauty Ritual for Glowing Skin', excerpt: 'The exact 15-minute routine I follow every morning to achieve that lit-from-within glow — featuring La Mer and Chanel.', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80', date: 'MAY 5, 2024' },
]

const badges = [
  { icon: '◈', label: 'EXCLUSIVE CONTENT', desc: 'Only for subscribers' },
  { icon: '◇', label: 'LUXURY CURATED', desc: 'Handpicked. High-end. Always.' },
  { icon: '✦', label: 'EXPERT TIPS', desc: 'Professional beauty advice' },
  { icon: '❋', label: 'BRAND PARTNERSHIPS', desc: 'Trusted by luxury brands' },
]
</script>
