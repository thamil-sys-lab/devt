export function injectNav(activePage = '') {
  document.getElementById('navbar-placeholder').innerHTML = `
  <nav class="navbar navbar-expand-lg sticky-top shadow-sm">
    <div class="container">
      <a class="navbar-brand" href="index.html">
        <img src="assets/logo.png" alt="Devverse">
        <span class="brand-text">Devverse</span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav ms-auto align-items-lg-center gap-1">
          <li class="nav-item"><a class="nav-link ${activePage==='home'?'active':''}" href="index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link ${activePage==='courses'?'active':''}" href="courses.html">Courses</a></li>
          <li class="nav-item"><a class="nav-link ${activePage==='internships'?'active':''}" href="internships.html">Internships</a></li>
          <li class="nav-item"><a class="nav-link ${activePage==='services'?'active':''}" href="services.html">IT Services</a></li>
          <li class="nav-item"><a class="nav-link ${activePage==='about'?'active':''}" href="about.html">About</a></li>
          <li class="nav-item"><a class="nav-link ${activePage==='verify'?'active':''}" href="verify.html">Verify</a></li>
        </ul>
      </div>
    </div>
  </nav>`;
}

export function injectFooter() {
  document.getElementById('footer-placeholder').innerHTML = `
  <footer class="footer-section text-white">
    <div class="container py-5">
      <div class="row g-4">
        <div class="col-lg-4 col-md-12">
          <div class="footer-logo mb-3">Devverse</div>
          <p style="color:rgba(255,255,255,0.55);font-size:14px;line-height:1.8">
            Leading IT solutions and EdTech company bridging academia and industry through technology education and digital transformation.
          </p>
          <div class="d-flex gap-2 mt-3 flex-wrap">
            <span class="badge" style="background:rgba(255,255,255,0.1);color:white;padding:6px 12px;font-size:11px">MSME Registered</span>
            <span class="badge" style="background:rgba(255,255,255,0.1);color:white;padding:6px 12px;font-size:11px">AICTE Approved</span>
            <span class="badge" style="background:rgba(255,255,255,0.1);color:white;padding:6px 12px;font-size:11px">NCS Listed</span>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 col-6">
          <h6 class="fw-700 mb-3" style="color:rgba(255,255,255,0.4);font-size:11px;letter-spacing:0.1em;text-transform:uppercase;font-weight:700">Quick Links</h6>
          <a href="index.html" class="footer-link">Home</a>
          <a href="courses.html" class="footer-link">Courses</a>
          <a href="internships.html" class="footer-link">Internships</a>
          <a href="services.html" class="footer-link">IT Services</a>
          <a href="about.html" class="footer-link">About Us</a>
          <a href="verify.html" class="footer-link">Verify Certificate</a>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <h6 class="fw-700 mb-3" style="color:rgba(255,255,255,0.4);font-size:11px;letter-spacing:0.1em;text-transform:uppercase;font-weight:700">Contact</h6>
          <p style="color:rgba(255,255,255,0.55);font-size:14px;line-height:2.2;margin:0">
            <i class="fas fa-envelope me-2" style="color:rgba(255,255,255,0.4)"></i>devversecare@gmail.com<br>
            <i class="fas fa-globe me-2" style="color:rgba(255,255,255,0.4)"></i>devverse1.in<br>
            <i class="fab fa-instagram me-2" style="color:rgba(255,255,255,0.4)"></i><a href="https://instagram.com/vjysupermacy" target="_blank" class="footer-link d-inline">@vjysupermacy</a><br>
            <i class="fab fa-whatsapp me-2" style="color:rgba(255,255,255,0.4)"></i><a href="https://wa.me/919150059199" target="_blank" class="footer-link d-inline">+91 9150059199</a>
          </p>
        </div>
        <div class="col-lg-3 col-md-4 col-12">
          <h6 class="fw-700 mb-3" style="color:rgba(255,255,255,0.4);font-size:11px;letter-spacing:0.1em;text-transform:uppercase;font-weight:700">Legal</h6>
          <a href="terms.html" class="footer-link">Terms & Conditions</a>
          <a href="privacy.html" class="footer-link">Privacy Policy</a>
          <div class="mt-4" style="color:rgba(255,255,255,0.35);font-size:12px;line-height:2">
            <div>UDYAM-TN-24-0155140</div>
            <div>NCS ID: E20167-1809301565098</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom text-center py-3">
      <p class="mb-0" style="color:rgba(255,255,255,0.45);font-size:13px">&copy; 2026 Devverse. All Rights Reserved. | IT Solutions & EdTech Company</p>
    </div>
  </footer>`;
}
