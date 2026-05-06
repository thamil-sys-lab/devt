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

        <!-- Brand + Value Lines -->
        <div class="col-lg-4 col-md-12">
          <div class="footer-logo mb-3">Devverse</div>
          <p style="color:rgba(255,255,255,0.55);font-size:14px;line-height:1.9;margin-bottom:20px">
            Bridging academia and industry through technology education, real-world internships, and digital solutions.
          </p>
          <!-- Value Lines -->
          <div style="display:flex;flex-direction:column;gap:10px">
            <div style="display:flex;align-items:center;gap:10px">
              <div style="width:32px;height:32px;border-radius:8px;background:rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;flex-shrink:0">
                <i class="fas fa-graduation-cap" style="font-size:13px;color:rgba(255,255,255,0.7)"></i>
              </div>
              <span style="color:rgba(255,255,255,0.65);font-size:13px">Industry-aligned courses with live projects</span>
            </div>
            <div style="display:flex;align-items:center;gap:10px">
              <div style="width:32px;height:32px;border-radius:8px;background:rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;flex-shrink:0">
                <i class="fas fa-certificate" style="font-size:13px;color:rgba(255,255,255,0.7)"></i>
              </div>
              <span style="color:rgba(255,255,255,0.65);font-size:13px">AICTE-approved certificates</span>
            </div>
            <div style="display:flex;align-items:center;gap:10px">
              <div style="width:32px;height:32px;border-radius:8px;background:rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;flex-shrink:0">
                <i class="fas fa-code" style="font-size:13px;color:rgba(255,255,255,0.7)"></i>
              </div>
              <span style="color:rgba(255,255,255,0.65);font-size:13px">End-to-end IT solutions for businesses</span>
            </div>
            <div style="display:flex;align-items:center;gap:10px">
              <div style="width:32px;height:32px;border-radius:8px;background:rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;flex-shrink:0">
                <i class="fas fa-users" style="font-size:13px;color:rgba(255,255,255,0.7)"></i>
              </div>
              <span style="color:rgba(255,255,255,0.65);font-size:13px">500+ students trained across Tamil Nadu</span>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="col-lg-2 col-md-4 col-6">
          <h6 style="color:rgba(255,255,255,0.4);font-size:11px;letter-spacing:0.1em;text-transform:uppercase;font-weight:700;margin-bottom:14px">Quick Links</h6>
          <a href="index.html" class="footer-link">Home</a>
          <a href="courses.html" class="footer-link">Courses</a>
          <a href="internships.html" class="footer-link">Internships</a>
          <a href="services.html" class="footer-link">IT Services</a>
          <a href="about.html" class="footer-link">About Us</a>
          <a href="verify.html" class="footer-link">Verify Certificate</a>
        </div>

        <!-- Contact — email only, no phone/instagram -->
        <div class="col-lg-3 col-md-4 col-6">
          <h6 style="color:rgba(255,255,255,0.4);font-size:11px;letter-spacing:0.1em;text-transform:uppercase;font-weight:700;margin-bottom:14px">Contact</h6>
          <div style="display:flex;flex-direction:column;gap:12px">
            <a href="mailto:devversecare@gmail.com" style="display:flex;align-items:center;gap:10px;color:rgba(255,255,255,0.6);text-decoration:none;font-size:14px;transition:color 0.2s" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">
              <i class="fas fa-envelope" style="color:rgba(255,255,255,0.35);width:16px"></i>
              devversecare@gmail.com
            </a>
            <a href="https://devverse1.in" target="_blank" style="display:flex;align-items:center;gap:10px;color:rgba(255,255,255,0.6);text-decoration:none;font-size:14px;transition:color 0.2s" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">
              <i class="fas fa-globe" style="color:rgba(255,255,255,0.35);width:16px"></i>
              devverse1.in
            </a>
            <a href="https://www.linkedin.com/company/deverse1/" target="_blank" style="display:flex;align-items:center;gap:10px;color:rgba(255,255,255,0.6);text-decoration:none;font-size:14px;transition:color 0.2s" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">
              <i class="fab fa-linkedin" style="color:rgba(255,255,255,0.35);width:16px"></i>
              LinkedIn
            </a>
          </div>
        </div>

        <!-- Legal + Badges -->
        <div class="col-lg-3 col-md-4 col-12">
          <h6 style="color:rgba(255,255,255,0.4);font-size:11px;letter-spacing:0.1em;text-transform:uppercase;font-weight:700;margin-bottom:14px">Legal</h6>
          <a href="terms.html" class="footer-link">Terms &amp; Conditions</a>
          <a href="privacy.html" class="footer-link">Privacy Policy</a>

          <div style="margin-top:20px;display:flex;flex-direction:column;gap:8px">
            <div style="display:flex;gap:8px;flex-wrap:wrap">
              <span style="background:rgba(255,255,255,0.08);color:rgba(255,255,255,0.6);border:1px solid rgba(255,255,255,0.1);padding:4px 10px;border-radius:6px;font-size:11px;font-weight:600">MSME Registered</span>
              <span style="background:rgba(255,255,255,0.08);color:rgba(255,255,255,0.6);border:1px solid rgba(255,255,255,0.1);padding:4px 10px;border-radius:6px;font-size:11px;font-weight:600">AICTE Approved</span>
            </div>
            <span style="background:rgba(255,255,255,0.08);color:rgba(255,255,255,0.6);border:1px solid rgba(255,255,255,0.1);padding:4px 10px;border-radius:6px;font-size:11px;font-weight:600;display:inline-block">NCS Listed</span>
          </div>

          <div style="margin-top:16px;color:rgba(255,255,255,0.3);font-size:11px;line-height:2">
            <div>UDYAM-TN-24-0155140</div>
            <div>NCS ID: E20167-1809301565098</div>
          </div>
        </div>

      </div>
    </div>
    <div class="footer-bottom text-center py-3">
      <p class="mb-0" style="color:rgba(255,255,255,0.4);font-size:13px">
        &copy; 2026 Devverse. All Rights Reserved. &nbsp;|&nbsp; IT Solutions &amp; EdTech Company
      </p>
    </div>
  </footer>`;
}
