import './style.css'

document.querySelector('#app').innerHTML = `

  <!-- Background orbs -->
  <div class="orb orb-1"></div>
  <div class="orb orb-2"></div>
  <div class="orb orb-3"></div>

  <!-- NAV -->
  <header class="nav" id="nav">
    <div class="nav-inner">
      <a href="#home" class="nav-logo">PLM<span>Advisor</span></a>
      <nav class="nav-links" id="nav-links">
        <a href="#services" class="nav-link">Services</a>
        <a href="#about"    class="nav-link">About</a>
        <a href="#portfolio" class="nav-link">Portfolio</a>
        <a href="#contact"  class="nav-link">Contact</a>
        <a href="https://youtube.com/@nxcoder?feature=shared" target="_blank" rel="noopener" class="nav-yt">YouTube ↗</a>
      </nav>
      <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <!-- HERO -->
  <section class="hero" id="home">
    <div class="container hero-inner">
      <div class="hero-badge">PLM & Logistics Experts</div>
      <h1 class="hero-title">
        Precision <em>PLM.</em><br>
        Reliable <em class="gold">Logistics.</em>
      </h1>
      <p class="hero-sub">
        We engineer smarter product lifecycles and power last-mile delivery —
        combining 15+ PLM specialists with a 23-strong logistics team.
      </p>
      <div class="hero-actions">
        <a href="#contact" class="btn-primary">Get in Touch</a>
        <a href="#portfolio" class="btn-ghost">View Our Work</a>
      </div>
      <div class="hero-metrics">
        <div class="metric">
          <span class="metric-num">15<span class="metric-plus">+</span></span>
          <span class="metric-label">PLM Experts</span>
        </div>
        <div class="metric-div"></div>
        <div class="metric">
          <span class="metric-num">23<span class="metric-plus">+</span></span>
          <span class="metric-label">Logistics Pros</span>
        </div>
        <div class="metric-div"></div>
        <div class="metric">
          <span class="metric-num">4</span>
          <span class="metric-label">Service Areas</span>
        </div>
        <div class="metric-div"></div>
        <div class="metric">
          <span class="metric-num">30<span class="metric-plus">%</span></span>
          <span class="metric-label">Faster Dev Cycles</span>
        </div>
      </div>
    </div>
    <div class="hero-scroll-hint">
      <span>Scroll</span>
      <div class="scroll-line"></div>
    </div>
  </section>

  <!-- SERVICES -->
  <section class="section" id="services">
    <div class="container">
      <div class="section-header reveal">
        <div class="section-tag">What We Do</div>
        <h2>Our Services</h2>
        <p class="section-sub">End-to-end expertise across CAD automation, PLM platforms, and logistics operations.</p>
      </div>
      <div class="services-grid">
        <div class="service-card reveal">
          <div class="service-icon-wrap">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>
          </div>
          <h3>CAD Services</h3>
          <p>Streamline product design with cutting-edge NX automation — from routing and sheet metal to drawing automation and PMI management.</p>
          <ul>
            <li>NX Automation & PMIs</li>
            <li>Sheet Metal & Routing</li>
            <li>Drawing Automation</li>
            <li>TechMate, UDF & UDU</li>
          </ul>
        </div>
        <div class="service-card featured reveal">
          <div class="featured-label">Most Popular</div>
          <div class="service-icon-wrap">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
          </div>
          <h3>Teamcenter Services</h3>
          <p>End-to-end Teamcenter expertise: customizing workflows, integrating enterprise systems, and building scalable solutions with BMIDE, ITK, SOA, and AWC.</p>
          <ul>
            <li>BMIDE & ITK Development</li>
            <li>SOA & AWC Integration</li>
            <li>Workflow Automation</li>
            <li>Custom Dataset Management</li>
          </ul>
        </div>
        <div class="service-card reveal">
          <div class="service-icon-wrap">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3"/><rect x="9" y="11" width="14" height="10" rx="2"/><circle cx="12" cy="16" r="1"/><circle cx="20" cy="16" r="1"/></svg>
          </div>
          <h3>Logistics Services</h3>
          <p>Partnering with leading delivery platforms to provide reliable, efficient last-mile solutions — food, parcels, and beyond.</p>
          <ul>
            <li>Last-Mile Delivery</li>
            <li>Food & Parcel Logistics</li>
            <li>Platform Partnerships</li>
            <li>Fleet Operations</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- ABOUT -->
  <section class="section" id="about">
    <div class="container about-grid">
      <div class="about-text reveal">
        <div class="section-tag">Who We Are</div>
        <h2>Built at the Intersection of Technology &amp; Logistics</h2>
        <p>We are a dynamic team of engineers and logistics professionals united by one mission: deliver smart solutions that drive real business results. From complex PLM automation to reliable last-mile delivery, we bring precision and commitment to every engagement.</p>
        <p>With deep expertise in Siemens NX and Teamcenter and an established logistics network, we are uniquely positioned to serve manufacturers and distribution businesses alike.</p>
        <a href="#contact" class="btn-primary" style="margin-top:28px;display:inline-flex">Work With Us →</a>
      </div>
      <div class="about-stats reveal">
        <div class="stat-card">
          <span class="stat-num">15+</span>
          <span class="stat-label">PLM & Software Experts</span>
        </div>
        <div class="stat-card">
          <span class="stat-num">23+</span>
          <span class="stat-label">Logistics Professionals</span>
        </div>
        <div class="stat-card">
          <span class="stat-num">4</span>
          <span class="stat-label">Core Service Areas</span>
        </div>
        <div class="stat-card gold-card">
          <span class="stat-num">30%</span>
          <span class="stat-label">Faster Product Development</span>
        </div>
      </div>
    </div>
  </section>

  <!-- PORTFOLIO -->
  <section class="section" id="portfolio">
    <div class="container">
      <div class="section-header reveal">
        <div class="section-tag">Our Work</div>
        <h2>Portfolio</h2>
        <p class="section-sub">A selection of projects that define what we build.</p>
      </div>
      <div class="portfolio-grid">
        <div class="portfolio-card reveal">
          <div class="portfolio-tag">PLM Automation</div>
          <h3>Manufacturing Workflow Automation</h3>
          <p>Custom Teamcenter workflows that boosted product development speed by 30% for a major manufacturer — reducing manual handoffs and approval cycles.</p>
          <div class="portfolio-tech">
            <span>Teamcenter</span><span>ITK</span><span>BMIDE</span>
          </div>
        </div>
        <div class="portfolio-card reveal">
          <div class="portfolio-tag">CAD</div>
          <h3>NX Customization Suite</h3>
          <p>Comprehensive NX customization spanning PMIs, TechMate, UDU, and UDF — dramatically reducing CAD cycle times and improving drawing accuracy.</p>
          <div class="portfolio-tech">
            <span>NX</span><span>TechMate</span><span>UDF/UDU</span>
          </div>
        </div>
        <div class="portfolio-card reveal">
          <div class="portfolio-tag">Integration</div>
          <h3>Teamcenter Enterprise Solutions</h3>
          <p>Full-scale workflow automation, user application creation, ITK programming, and custom dataset management deployed across a multi-site enterprise.</p>
          <div class="portfolio-tech">
            <span>SOA</span><span>AWC</span><span>ITK</span>
          </div>
        </div>
        <div class="portfolio-card reveal">
          <div class="portfolio-tag">Logistics</div>
          <h3>Food Platform Delivery Network</h3>
          <p>Managed and scaled a full delivery network ensuring timely, reliable service for a major food delivery platform, achieving consistent on-time rates.</p>
          <div class="portfolio-tech">
            <span>Last-Mile</span><span>Fleet Ops</span><span>Routing</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section class="section" id="contact">
    <div class="container contact-wrap">
      <div class="section-header reveal">
        <div class="section-tag">Get In Touch</div>
        <h2>Start a Conversation</h2>
        <p class="section-sub">Tell us about your project — we'll get back to you within 24 hours.</p>
      </div>
      <div class="contact-body">
        <form class="contact-form reveal" id="contact-form">
          <div class="form-row">
            <div class="form-field">
              <label for="cf-name">Your Name</label>
              <input id="cf-name" type="text" name="name" placeholder="John Smith" required />
            </div>
            <div class="form-field">
              <label for="cf-email">Email Address</label>
              <input id="cf-email" type="email" name="email" placeholder="john@company.com" required />
            </div>
          </div>
          <div class="form-field">
            <label for="cf-msg">Message</label>
            <textarea id="cf-msg" name="message" rows="5" placeholder="Tell us about your project, timeline, and goals..." required></textarea>
          </div>
          <div class="form-footer">
            <button type="submit" class="btn-primary form-btn">Send Message</button>
            <p class="contact-direct">Or email us at <a href="mailto:plmadvisor@gmail.com">plmadvisor@gmail.com</a></p>
          </div>
        </form>

        <div class="map-card reveal">
          <div class="map-info">
            <div class="section-tag" style="margin-bottom:12px">Our Location</div>
            <h3 class="map-address">Humboldtstraße 12<br>63071 Offenbach am Main<br>Germany</h3>
            <a href="https://maps.app.goo.gl/ofRg9hhR28uEjNzPA" target="_blank" rel="noopener" class="map-directions">
              Get Directions ↗
            </a>
          </div>
          <div class="map-embed">
            <iframe
              src="https://maps.google.com/maps?q=Humboldtstra%C3%9Fe+12,+63071+Offenbach+am+Main,+Germany&output=embed&z=16"
              width="100%" height="100%"
              style="border:0;" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="PLM Advisor Office Location">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- YOUTUBE -->
  <section class="yt-section">
    <div class="container">
      <div class="yt-card reveal">
        <div class="yt-text">
          <div class="section-tag">YouTube</div>
          <h2>Learn PLM on Our Channel</h2>
          <p>Free tutorials and deep-dives on NX customization and Teamcenter. Subscribe to <strong>@nxcoder</strong> and level up your PLM skills.</p>
          <a href="https://youtube.com/@nxcoder?feature=shared" target="_blank" rel="noopener" class="btn-primary">Visit Channel ↗</a>
        </div>
        <a href="https://youtube.com/@nxcoder?feature=shared" target="_blank" rel="noopener" class="yt-thumb">
          <img src="/images/Screenshot 2023-11-08 184841.png" alt="PLM Advisor YouTube — @nxcoder" loading="lazy" />
          <div class="yt-play">▶</div>
        </a>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container footer-inner">
      <a href="#home" class="nav-logo">PLM<span>Advisor</span></a>
      <p class="footer-copy">© ${new Date().getFullYear()} PLM Advisor. All rights reserved.</p>
      <div class="footer-links">
        <a href="https://youtube.com/@nxcoder?feature=shared" target="_blank" rel="noopener">YouTube</a>
        <a href="mailto:plmadvisor@gmail.com">Email</a>
      </div>
    </div>
  </footer>
`

// ─── Mobile nav toggle ──────────────────────────────────────────────────────
const toggle = document.getElementById('nav-toggle')
const navLinks = document.getElementById('nav-links')
toggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open')
  toggle.classList.toggle('active')
})

// ─── Nav: smooth scroll + active state + close mobile menu ─────────────────
const nav = document.getElementById('nav')
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href')
    if (href?.startsWith('#')) {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        const y = target.getBoundingClientRect().top + window.scrollY - 72
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
      navLinks.classList.remove('open')
      toggle.classList.remove('active')
    }
  })
})

// ─── Nav scroll shadow ──────────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  nav?.classList.toggle('scrolled', window.scrollY > 20)
}, { passive: true })

// ─── Intersection observer: reveal + active nav ─────────────────────────────
const revealEls = document.querySelectorAll('.reveal')
const sections  = document.querySelectorAll('section[id]')

const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
}, { threshold: 0.12 })

revealEls.forEach(el => revealObs.observe(el))

const navObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'))
      const match = document.querySelector(`.nav-link[href="#${e.target.id}"]`)
      if (match) match.classList.add('active')
    }
  })
}, { threshold: 0.4 })

sections.forEach(s => navObs.observe(s))

// ─── Hero CTA ───────────────────────────────────────────────────────────────
document.querySelector('.hero-actions a[href="#contact"]')?.addEventListener('click', e => {
  e.preventDefault()
  const t = document.querySelector('#contact')
  if (t) window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
})

// ─── Contact form → EmailJS ─────────────────────────────────────────────────
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
  e.preventDefault()
  const btn = this.querySelector('.form-btn')
  btn.textContent = 'Sending…'
  btn.disabled = true

  emailjs.sendForm('service_8qiagi9', 'template_94wyqvj', this)
    .then(() => {
      btn.textContent = '✓ Message Sent!'
      btn.style.background = '#22c55e'
      this.reset()
      setTimeout(() => {
        btn.textContent = 'Send Message'
        btn.style.background = ''
        btn.disabled = false
      }, 4000)
    })
    .catch(() => {
      btn.textContent = 'Failed — try again'
      btn.style.background = '#ef4444'
      btn.disabled = false
      setTimeout(() => {
        btn.textContent = 'Send Message'
        btn.style.background = ''
      }, 3000)
    })
})
