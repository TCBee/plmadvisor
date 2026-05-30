import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
    <canvas id="code-bg"></canvas>
    <div class="main-container">
      <div class="top-bar">
        <a href="#home" id="home-btn" class="glow-btn">Home</a>
        <a href="#services" id="services-btn" class="glow-btn">Services</a>
        <a href="#about" id="about-btn" class="glow-btn">About Us</a>
        <a href="#portfolio" id="portfolio-btn" class="glow-btn">Portfolio</a>
        <a href="#contact" id="contact-btn" class="glow-btn">Contact</a>
        <button id="yt-channel-btn" class="glow-btn">YouTube</button>
      </div>

      <script>
        // Custom tab focus border logic
        const tabButtons = document.querySelectorAll('.top-bar .glow-btn');
        tabButtons.forEach(btn => {
          btn.addEventListener('click', function(e) {
            // Remove border from all buttons
            tabButtons.forEach(b => b.classList.remove('active-tab'));
            // Add border to clicked button
            this.classList.add('active-tab');
            // Smooth scroll for anchor links
            if (this.tagName === 'A' && this.getAttribute('href').startsWith('#')) {
              e.preventDefault();
              const target = document.querySelector(this.getAttribute('href'));
              if (target) {
                const viewportHeight = window.innerHeight;
                const targetRect = target.getBoundingClientRect();
                const targetTop = targetRect.top + window.scrollY;
                const scrollPosition = targetTop - (viewportHeight / 2) + (targetRect.height / 2);
                window.scrollTo({
                  top: scrollPosition,
                  behavior: 'smooth'
                });
              }
            }
          });
        });
      </script>
      <div class="center-content" id="home">
        <h1>PLM Advisor</h1>
        <p>Welcome to PLM Advisor! We work at the intersection of technology and logistics, delivering both PLM (Product Lifecycle Management) automation and delivery-based logistics services.</p>
      </div>
      <section id="services" class="section section-row">
        <img class="main-img section-img-left" src="/images/PLM_Service.jpg" alt="PLM Services" />
        <div class="section-text">
          <h2>Services</h2>
          <h3>CAD Services</h3>
          <p>Our CAD services are designed to streamline your product design and development processes with cutting-edge automation. We specialize in NX customization, modeling-based drafting, routing, sheet metal design, and drawing automation. Our team ensures precision and efficiency, enhancing your product development from concept to completion.</p>
          <h3>Teamcenter Services</h3>
          <p>We offer end-to-end Teamcenter services that help businesses automate and optimize their PLM processes. Our expertise includes customizing workflows, integrating systems, and building robust solutions using BMIDE, ITK, SOA, and AWC. With a strong focus on automation and scalability, we make Teamcenter work smarter for your organization.</p>
          <h3>Logistics Services</h3>
          <p>We partner with leading delivery platforms to provide reliable and efficient delivery solutions. Our team of trained delivery partners ensures timely service with a strong focus on operational efficiency. Whether it's food, parcels, or last-mile logistics, we streamline the process to help businesses meet customer expectations every time.</p>
        </div>
      </section>
      <section id="about" class="section section-row">
        <img class="main-img section-img-left" src="/images/aboutus.PNG" alt="About Us" />
        <div class="section-text">
          <h2>About Us</h2>
          <p>We are a dynamic company operating at the intersection of technology and logistics. With a dedicated team of around 15 experts in PLM and software development, and over 23 professionals in logistics operations, we bring together innovation and efficiency. Our mission is to deliver smart solutions that drive business success, whether it's through advanced PLM automation or reliable delivery services.</p>
        </div>
      </section>
      <section id="portfolio" class="section">
        <div class="section-row" style="display: flex; flex-direction: row; align-items: center; gap: 20px;">
          <img class="main-img section-img-left" src="/images/PF.jpeg" alt="Portfolio" style="width: 40%; max-width: 400px; height: auto; aspect-ratio: 1; object-fit: contain; margin-left: 10px; margin-right: 0; flex-shrink: 0;" />
          <div class="section-text" style="flex: 1; min-width: 300px; text-align: left; padding-right: 0; margin-right: 10px;">
            <h2>Portfolio</h2>
            <ul>
              <li><strong>PLM Automation for Manufacturing:</strong> Developed custom Teamcenter workflows that boosted product development speed by 30%.</li>
              <li><strong>NX Customization for CAD Efficiency:</strong> Delivered projects involving NX PMIs, TechMate, UDU, and UDF customization to streamline design processes.</li>
              <li><strong>Teamcenter Solutions:</strong> Implemented various Teamcenter projects including workflow automation, user application creation, ITK programming, and custom dataset management.</li>
              <li><strong>Logistics Partnership with Food Delivery:</strong> Managed a network of delivery partners to ensure timely, reliable food deliveries for a major platform.</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="contact" class="section">
        <div class="section-row" style="display: flex; flex-direction: row; align-items: center; gap: 20px;">
          <img class="main-img section-img-left" src="/images/contact us.jpg" alt="Contact Us" style="width: 40%; max-width: 400px; height: auto; aspect-ratio: 1; object-fit: contain; margin-left: 10px; margin-right: 0; flex-shrink: 0;" />
          <div class="section-text" style="flex: 1; min-width: 300px; text-align: left; padding-right: 0; margin-right: 10px;">
            <h2>Contact</h2>
            <p>We’d love to hear from you! For inquiries, partnerships, or project discussions, please reach out to us at:<br>
            📧 <a href="mailto:plmadvisor@gmail.com">plmadvisor@gmail.com</a></p>
          </div>
        </div>
      </section>

      <div class="bottom-image" id="yt-image-anchor">
        <a href="https://youtube.com/@nxcoder?feature=shared" target="_blank" rel="noopener" id="yt-image-link">
          <img src="/images/Screenshot 2023-11-08 184841.png" alt="Screenshot" class="glow-on-hover main-img" />
        </a>
      </div>
    </div>
    <!-- Vite logo and related text removed -->
`;


// Software development company animation: floating icons
const canvas = document.getElementById('code-bg');
const ctx = canvas.getContext('2d');
let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.zIndex = '0';
canvas.style.pointerEvents = 'none';
canvas.style.width = '100vw';
canvas.style.height = '100vh';



// Web/net animation: animated nodes and connecting lines
let NODE_COUNT = Math.floor((width * height) / 12000);
let nodes = Array.from({length: NODE_COUNT}, () => ({
  x: Math.random() * width,
  y: Math.random() * height,
  vx: (Math.random() - 0.5) * 0.7,
  vy: (Math.random() - 0.5) * 0.7
}));
let mouseX = width / 2;
let mouseY = height / 2;

window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});



function drawStarsBg() {
  // Space/blue gradient background
  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, '#0a0f2c'); // deep blue
  gradient.addColorStop(1, '#000');    // black
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Draw animated white stars
  if (!window._stars) {
    window._stars = Array.from({length: Math.floor((width * height) / 1800)}, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.2 + 0.3,
      speed: 0.1 + Math.random() * 0.2
    }));
  }
  window._stars.forEach(star => {
    ctx.save();
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
    ctx.fillStyle = '#fff';
    ctx.globalAlpha = 0.7 + 0.3 * Math.sin(Date.now() * 0.002 + star.x);
    ctx.shadowColor = '#fff';
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.restore();
    star.y += star.speed;
    if (star.y > height) {
      star.x = Math.random() * width;
      star.y = 0;
    }
  });
}
setInterval(drawStarsBg, 40);

window.addEventListener('resize', () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
  // Reset stars for new size
  window._stars = Array.from({length: Math.floor((width * height) / 1800)}, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 1.2 + 0.3,
    speed: 0.1 + Math.random() * 0.2
  }));
});


// YouTube channel button scroll and delayed open logic (now in top bar)
const ytBtn = document.getElementById('yt-channel-btn');
const ytImageAnchor = document.getElementById('yt-image-anchor');
const ytImageLink = document.getElementById('yt-image-link');
if (ytBtn && ytImageLink) {
  ytBtn.addEventListener('click', () => {
    window.open(ytImageLink.href, '_blank', 'noopener');
  });
}

setupCounter(document.querySelector('#counter'))
