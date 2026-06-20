import './style.css'

// ─── HTML Template ───────────────────────────────────────────────────────────
document.querySelector('#app').innerHTML = `
  <canvas id="code-bg"></canvas>
  <div class="main-container">

    <div class="top-bar">
      <a href="#home"      id="nav-home"      class="glow-btn">Home</a>
      <a href="#services"  id="nav-services"  class="glow-btn">Services</a>
      <a href="#about"     id="nav-about"     class="glow-btn">About Us</a>
      <a href="#portfolio" id="nav-portfolio" class="glow-btn">Portfolio</a>
      <a href="#contact"   id="nav-contact"   class="glow-btn">Contact</a>
      <button id="yt-channel-btn" class="glow-btn">YouTube</button>
    </div>

    <div class="center-content" id="home">
      <h1>PLM Advisor</h1>
      <p>We work at the intersection of technology and logistics — delivering PLM automation and reliable delivery services that drive business success.</p>
      <div class="hero-stats">
        <span>15+ PLM Experts</span>
        <span>·</span>
        <span>23+ Logistics Pros</span>
        <span>·</span>
        <span>4 Service Areas</span>
      </div>
      <a href="#contact" class="cta-btn" id="cta-contact">Get in Touch</a>
    </div>

    <section id="services" class="section section-row">
      <img class="section-img-left" src="/images/PLM_Service.jpg" alt="PLM Services" width="480" height="320" />
      <div class="section-text">
        <h2>Services</h2>
        <h3>CAD Services</h3>
        <p>We streamline product design with cutting-edge automation — NX customization, modeling-based drafting, routing, sheet metal design, and drawing automation. Precision and efficiency from concept to completion.</p>
        <h3>Teamcenter Services</h3>
        <p>End-to-end Teamcenter expertise: customizing workflows, integrating systems, and building robust solutions using BMIDE, ITK, SOA, and AWC. We make Teamcenter work smarter for your organization.</p>
        <h3>Logistics Services</h3>
        <p>Partnering with leading delivery platforms to provide reliable, efficient solutions. From food and parcels to last-mile logistics, our trained delivery partners ensure timely service every time.</p>
      </div>
    </section>

    <section id="about" class="section section-row">
      <img class="section-img-left" src="/images/aboutus.PNG" alt="About Us" width="480" height="320" loading="lazy" />
      <div class="section-text">
        <h2>About Us</h2>
        <p>We are a dynamic company at the intersection of technology and logistics. With around 15 PLM and software experts and 23+ logistics professionals, we combine innovation with operational efficiency.</p>
        <p>Our mission: deliver smart solutions that drive business success — whether through advanced PLM automation or reliable delivery services.</p>
      </div>
    </section>

    <section id="portfolio" class="section section-row">
      <img class="section-img-left" src="/images/PF.jpeg" alt="Portfolio" width="480" height="320" loading="lazy" />
      <div class="section-text">
        <h2>Portfolio</h2>
        <ul>
          <li><strong>PLM Automation for Manufacturing:</strong> Custom Teamcenter workflows that boosted product development speed by 30%.</li>
          <li><strong>NX Customization for CAD Efficiency:</strong> Projects spanning NX PMIs, TechMate, UDU, and UDF customization.</li>
          <li><strong>Teamcenter Solutions:</strong> Workflow automation, user application creation, ITK programming, and custom dataset management.</li>
          <li><strong>Logistics Partnership:</strong> Managed a delivery network ensuring timely, reliable deliveries for a major food platform.</li>
        </ul>
      </div>
    </section>

    <section id="contact" class="section section-row">
      <img class="section-img-left" src="/images/contact us.jpg" alt="Contact Us" width="480" height="320" loading="lazy" />
      <div class="section-text">
        <h2>Contact</h2>
        <p>We'd love to hear about your project. Fill in the form below or reach out directly.</p>
        <form class="contact-form" id="contact-form">
          <input type="text"  name="name"    placeholder="Your name"    required />
          <input type="email" name="email"   placeholder="Your email"   required />
          <textarea name="message" rows="4"  placeholder="Your message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        <p class="contact-email">Or email us at <a href="mailto:plmadvisor@gmail.com">plmadvisor@gmail.com</a></p>
      </div>
    </section>

    <div class="bottom-image" id="yt-image-anchor">
      <a href="https://youtube.com/@nxcoder?feature=shared" target="_blank" rel="noopener" id="yt-image-link">
        <img src="/images/Screenshot 2023-11-08 184841.png" alt="PLM Advisor YouTube Channel – @nxcoder" />
      </a>
    </div>

    <footer class="site-footer">
      <p>© ${new Date().getFullYear()} PLM Advisor. All rights reserved.</p>
      <a href="https://youtube.com/@nxcoder?feature=shared" target="_blank" rel="noopener">YouTube</a>
      <a href="mailto:plmadvisor@gmail.com">Email</a>
    </footer>

  </div>
`;

// ─── Navigation: click → active tab + smooth scroll ──────────────────────────
const navBtns = document.querySelectorAll('.top-bar .glow-btn');

navBtns.forEach(btn => {
  btn.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const yOffset = -80;
        const y = target.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
    setActiveNav(this.id.replace('nav-', '') || 'yt');
  });
});

// CTA "Get in Touch" button
document.getElementById('cta-contact')?.addEventListener('click', function (e) {
  e.preventDefault();
  const target = document.querySelector('#contact');
  if (target) {
    const y = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
});

// YouTube top-bar button
document.getElementById('yt-channel-btn')?.addEventListener('click', () => {
  window.open('https://youtube.com/@nxcoder?feature=shared', '_blank', 'noopener');
});

function setActiveNav(sectionId) {
  navBtns.forEach(b => b.classList.remove('active-tab'));
  const match = document.getElementById('nav-' + sectionId);
  if (match) match.classList.add('active-tab');
}

// ─── IntersectionObserver: highlight nav + reveal sections ───────────────────
const sections = document.querySelectorAll('.section, .center-content');

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Update active nav based on which section is most visible
        const id = entry.target.id;
        if (id) setActiveNav(id);
      }
    });
  },
  { threshold: 0.15 }
);

// Home hero doesn't need slide-in animation — make it immediately visible
const hero = document.getElementById('home');
if (hero) hero.classList.add('visible');

sections.forEach(sec => revealObserver.observe(sec));

// ─── Contact form → mailto ────────────────────────────────────────────────────
document.getElementById('contact-form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const btn = this.querySelector('button[type="submit"]');
  btn.textContent = 'Sending…';
  btn.disabled = true;

  emailjs.sendForm('service_8qiagi9', 'template_94wyqvj', this)
    .then(() => {
      btn.textContent = 'Sent!';
      this.reset();
      setTimeout(() => {
        btn.textContent = 'Send Message';
        btn.disabled = false;
      }, 3000);
    })
    .catch(() => {
      btn.textContent = 'Failed — try again';
      btn.disabled = false;
    });
});

// ─── Canvas: animated starfield ──────────────────────────────────────────────
const canvas = document.getElementById('code-bg');
const ctx    = canvas.getContext('2d');

let width  = window.innerWidth;
let height = window.innerHeight;
canvas.width  = width;
canvas.height = height;
Object.assign(canvas.style, {
  position: 'fixed', top: '0', left: '0',
  zIndex: '0', pointerEvents: 'none',
  width: '100vw', height: '100vh'
});

function makeStars() {
  return Array.from({ length: Math.floor((width * height) / 1800) }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 1.2 + 0.3,
    speed: 0.1 + Math.random() * 0.2
  }));
}

let stars = makeStars();

function makeBgGradient() {
  const g = ctx.createLinearGradient(0, 0, 0, height);
  g.addColorStop(0, '#0a0f2c');
  g.addColorStop(1, '#000');
  return g;
}
let bgGradient = makeBgGradient();

function drawFrame() {
  ctx.fillStyle = bgGradient;
  ctx.fillRect(0, 0, width, height);

  stars.forEach(star => {
    ctx.save();
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
    ctx.fillStyle = '#fff';
    ctx.globalAlpha = 0.7 + 0.3 * Math.sin(Date.now() * 0.002 + star.x);
    ctx.shadowColor = '#fff';
    ctx.shadowBlur  = 8;
    ctx.fill();
    ctx.restore();

    star.y += star.speed;
    if (star.y > height) {
      star.x = Math.random() * width;
      star.y = 0;
    }
  });

  requestAnimationFrame(drawFrame);
}

drawFrame();

window.addEventListener('resize', () => {
  width  = window.innerWidth;
  height = window.innerHeight;
  canvas.width  = width;
  canvas.height = height;
  stars = makeStars();
  bgGradient = makeBgGradient();
});
