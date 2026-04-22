// Shared nav and footer for HMF Solutions LLC
function renderNav(activePage) {
  return `
  <div class="topbar">
    <div class="topbar-inner">
      <span>✉️ hmfsolutionsllc.com@hmfsolutionsllc.com</span>
      <a href="tel:+16783839680">📞 Call Us: 678 383 9680</a>
    </div>
  </div>
  <nav>
    <div class="nav-inner">
      <a href="index.html" class="logo">
        <div class="logo-icon">H</div>
        HMF Solutions LLC
      </a>
      <ul class="nav-links">
        <li><a href="index.html" ${activePage==='home'?'class="active"':''}>Home</a></li>
        <li><a href="about.html" ${activePage==='about'?'class="active"':''}>About Us</a></li>
        <li>
          <a href="healthcare.html" ${activePage==='healthcare'||activePage==='software'||activePage==='internet'?'class="active"':''}>Services ▾</a>
          <ul class="dropdown">
            <li><a href="healthcare.html">Healthcare Services</a></li>
            <li><a href="software.html">Software Solutions</a></li>
            <li><a href="internet-services.html">🌐 Internet & Cable TV</a></li>
          </ul>
        </li>
        <li><a href="contact.html" ${activePage==='contact'?'class="active"':''}>Contact</a></li>
        <li><a href="contact.html" class="btn-quote">Get Free Quote</a></li>
      </ul>
    </div>
  </nav>`;
}

function renderFooter() {
  return `
  <section class="stats-bar">
    <div class="stats-inner">
      <div class="stat-item"><div class="stat-num">95%+</div><div class="stat-label">Clean Claim Accuracy</div></div>
      <div class="stat-item"><div class="stat-num">10+</div><div class="stat-label">Years of Experience</div></div>
      <div class="stat-item"><div class="stat-num">500+</div><div class="stat-label">Practices Served</div></div>
      <div class="stat-item"><div class="stat-num">24/7</div><div class="stat-label">Support Available</div></div>
    </div>
  </section>
  <footer>
    <div class="footer-top">
      <div class="footer-col footer-about">
        <div class="footer-logo"><div class="footer-logo-icon">H</div> HMF Solutions LLC</div>
        <h4 style="margin-top:18px;">About Company</h4>
        <p>We are a client-centric company with expertise spanning over a decade in providing top-quality Revenue Cycle Management services to multispecialty practices, hospitals and laboratories.</p>
      </div>
      <div class="footer-col">
        <h4>Useful Links</h4>
        <ul class="footer-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="healthcare.html">Healthcare Services</a></li>
          <li><a href="software.html">Software Solutions</a></li>
          <li><a href="internet-services.html">Internet & Cable TV</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact Us</h4>
        <div class="footer-contact-row"><span class="ico">📍</span><span>2152 Northlake Pkwy Apt 310, Tucker, GA 30084</span></div>
        <div class="footer-contact-row"><span class="ico">✉️</span><span>hmfsolutionsllc.com@hmfsolutionsllc.com</span></div>
        <div class="footer-contact-row"><span class="ico">📞</span><span>678-383-9680</span></div>
      </div>
      <div class="footer-col">
        <h4>Our Services</h4>
        <div class="footer-gallery">
          <div class="footer-gallery-item">🏥</div>
          <div class="footer-gallery-item">💊</div>
          <div class="footer-gallery-item">🩺</div>
          <div class="footer-gallery-item">📋</div>
          <div class="footer-gallery-item">💉</div>
          <div class="footer-gallery-item">🔬</div>
        </div>
      </div>
    </div>
    <div class="footer-bottom-bar">
      <div class="footer-bottom">
        <span>© Copyright 2025 | HMF Solutions LLC. All Rights Reserved</span>
        <div class="footer-bottom-links">
          <a href="#">Terms &amp; Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  </footer>`;
}
