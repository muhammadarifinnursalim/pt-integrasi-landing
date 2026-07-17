import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import heroCs from "@/assets/hero-cs.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const PRIMARY = "#2AA9B4";
const SECONDARY = "#F5A623";
const BTN = "#3D8BFF";
const FOOTER = "#006CB7";
const FOOTER_BOTTOM = "#E53935";

const services = [
  { icon: "bi-code-slash", title: "Pengembangan Website", desc: "Website modern, cepat, dan SEO friendly untuk bisnis Anda.", color: "#2AA9B4" },
  { icon: "bi-phone", title: "Aplikasi Mobile", desc: "Aplikasi Android & iOS yang siap membantu bisnis Anda.", color: "#F5A623" },
  { icon: "bi-gear-wide-connected", title: "Integrasi Sistem", desc: "Integrasi berbagai sistem dan API menjadi satu ekosistem.", color: "#3D8BFF" },
  { icon: "bi-cloud-arrow-up", title: "Cloud Solution", desc: "Solusi cloud untuk skalabilitas dan efisiensi bisnis Anda.", color: "#006CB7" },
  { icon: "bi-shield-lock", title: "Cyber Security", desc: "Amankan sistem dan data Anda dari ancaman siber.", color: "#E53935" },
  { icon: "bi-graph-up", title: "Digital Marketing", desc: "Strategi digital untuk meningkatkan brand & penjualan Anda.", color: "#20a86b" },
];

const gallery = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800",
];

const testimonials = Array.from({ length: 7 }, (_, i) => ({
  name: ["Andi Wijaya","Sinta Dewi","Budi Santoso","Rina Marlina","Doni Pratama","Maya Kusuma","Fajar Nugraha"][i],
  role: ["CEO PT Maju","Direktur","Owner UMKM","Manager IT","Founder","COO","CTO"][i],
  text: "Pelayanan sangat profesional, hasilnya memuaskan dan tim sangat responsif. Sangat direkomendasikan!",
  avatar: `https://i.pravatar.cc/100?img=${i + 10}`,
}));

const articles = [
  { img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800", title: "Tren Teknologi 2026", date: "10 Jul 2026", desc: "Inovasi teknologi yang akan mengubah bisnis di tahun ini." },
  { img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800", title: "Tips Transformasi Digital", date: "05 Jul 2026", desc: "Panduan memulai transformasi digital untuk UMKM Indonesia." },
  { img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800", title: "Keamanan Data Bisnis", date: "01 Jul 2026", desc: "Praktik terbaik dalam melindungi data perusahaan Anda." },
];

const clients = ["Google","Microsoft","Amazon","Meta","Netflix","Spotify","Adobe","Oracle"];

function Index() {
  useEffect(() => {
    const scripts = [
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
      "https://unpkg.com/aos@2.3.1/dist/aos.js",
      "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js",
    ];
    const loaded: HTMLScriptElement[] = [];
    let cancelled = false;
    async function load() {
      for (const src of scripts) {
        if (document.querySelector(`script[src="${src}"]`)) continue;
        await new Promise<void>((res) => {
          const s = document.createElement("script");
          s.src = src;
          s.async = false;
          s.onload = () => res();
          s.onerror = () => res();
          document.body.appendChild(s);
          loaded.push(s);
        });
      }
      if (cancelled) return;
      // @ts-ignore
      window.AOS?.init({ duration: 800, once: true });
      // @ts-ignore
      if (window.Swiper) {
        // @ts-ignore
        new window.Swiper(".testi-swiper", {
          slidesPerView: 1,
          spaceBetween: 24,
          loop: true,
          autoplay: { delay: 4000 },
          pagination: { el: ".swiper-pagination", clickable: true },
          breakpoints: { 768: { slidesPerView: 2 }, 992: { slidesPerView: 3 } },
        });
        // @ts-ignore
        new window.Swiper(".client-swiper", {
          slidesPerView: 2,
          spaceBetween: 30,
          loop: true,
          autoplay: { delay: 2000 },
          breakpoints: { 576: { slidesPerView: 3 }, 768: { slidesPerView: 4 }, 992: { slidesPerView: 6 } },
        });
      }
    }
    load();
    return () => { cancelled = true; };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nama = (form.elements.namedItem("nama") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const pesan = (form.elements.namedItem("pesan") as HTMLTextAreaElement).value.trim();
    if (!nama || !email || !pesan) return;
    const text = `Halo, saya ${nama} (${email}).\n\n${pesan}`;
    window.open("https://wa.me/6281234567890?text=" + encodeURIComponent(text), "_blank");
  };

  return (
    <>
      <style>{`
        html { scroll-behavior: smooth; }
        body { font-family: 'Segoe UI', system-ui, sans-serif; }
        .navbar-brand { color: ${PRIMARY} !important; font-weight: 700; }
        .navbar .nav-link { color: #333; font-weight: 500; }
        .navbar .nav-link:hover, .navbar .nav-link.active { color: ${PRIMARY}; }
        .btn-primary-c { background: ${BTN}; color:#fff; border:none; }
        .btn-primary-c:hover { background: #2f6fd6; color:#fff; }
        .btn-secondary-c { background: ${SECONDARY}; color:#fff; border:none; }
        .section { padding: 80px 0; }
        .section-title { font-weight: 700; color: ${PRIMARY}; margin-bottom: 12px; }
        .section-subtitle { color: #666; margin-bottom: 48px; }
        .hero { background: linear-gradient(135deg, ${PRIMARY} 0%, #1f8892 100%); color:#fff; padding: 120px 0 80px; }
        .hero h1 { font-size: clamp(2rem, 4vw, 3.5rem); font-weight: 800; line-height:1.15; }
        .hero .lead { opacity: .95; }
        .service-card { position: relative; border-radius: 16px; overflow: hidden; color:#fff; padding: 36px 28px; height:100%; transition: transform .3s, box-shadow .3s; cursor:pointer; }
        .service-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,.15); }
        .service-card i { font-size: 3rem; margin-bottom: 16px; opacity:.95; }
        .service-card h5 { font-weight: 700; }
        .service-card::after { content:''; position:absolute; inset:0; background:rgba(0,0,0,0); transition: background .3s; }
        .service-card:hover::after { background: rgba(0,0,0,.1); }
        .gallery-img { width:100%; height:240px; object-fit:cover; border-radius:12px; transition: transform .4s; }
        .gallery-item { overflow: hidden; border-radius:12px; }
        .gallery-item:hover .gallery-img { transform: scale(1.08); }
        .video-wrap { position:relative; padding-bottom:56.25%; height:0; border-radius:12px; overflow:hidden; box-shadow: 0 10px 30px rgba(0,0,0,.1); }
        .video-wrap iframe { position:absolute; top:0; left:0; width:100%; height:100%; border:0; }
        .testi-card { background:#fff; border-radius:16px; padding:32px; box-shadow: 0 10px 30px rgba(0,0,0,.08); height:100%; }
        .testi-card img { width:64px; height:64px; border-radius:50%; object-fit:cover; }
        .article-card { border:none; border-radius:16px; overflow:hidden; box-shadow: 0 8px 24px rgba(0,0,0,.06); transition: transform .3s; height:100%; }
        .article-card:hover { transform: translateY(-6px); }
        .article-card img { height:220px; object-fit:cover; }
        .cta { background: linear-gradient(135deg, ${SECONDARY} 0%, #d88a1a 100%); color:#fff; padding: 70px 0; border-radius: 20px; }
        .contact-section { background:#f8f9fa; }
        .footer { background: ${FOOTER}; color:#fff; padding: 60px 0 30px; }
        .footer a { color:#fff; text-decoration:none; opacity:.9; }
        .footer a:hover { opacity:1; }
        .footer h5 { font-weight:700; margin-bottom:20px; }
        .footer-bottom { background: ${FOOTER_BOTTOM}; color:#fff; padding: 16px 0; text-align:center; font-size:.9rem; }
        .social-icons a { display:inline-flex; align-items:center; justify-content:center; width:40px; height:40px; border-radius:50%; background:rgba(255,255,255,.15); margin-right:8px; font-size:1.2rem; }
        .social-icons a:hover { background:${SECONDARY}; }
        .client-logo { display:flex; align-items:center; justify-content:center; height:80px; font-size:1.5rem; font-weight:700; color:#666; }
        .swiper-pagination-bullet-active { background: ${PRIMARY} !important; }
        .form-control:focus { border-color: ${PRIMARY}; box-shadow: 0 0 0 .2rem rgba(42,169,180,.15); }
      `}</style>

      <nav className="navbar navbar-expand-lg bg-white sticky-top shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="#home"><i className="bi bi-hexagon-fill me-2"></i>PT ASI</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto">
              {[
                ["#home","Home"],["#tentang","Tentang Kami"],["#jasa","Jasa Kami"],
                ["#galeri","Galeri"],["#video","Video"],["#testimoni","Testimoni"],
                ["#artikel","Artikel"],["#kontak","Kontak"],
              ].map(([href,label]) => (
                <li className="nav-item" key={href}><a className="nav-link" href={href}>{label}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <h1>Solusi Digital Terintegrasi Untuk Bisnis Modern</h1>
              <p className="lead mt-3">PT Aplikasi Solusi Integrasi membantu perusahaan Anda bertransformasi digital dengan teknologi terkini, pengembangan aplikasi, dan integrasi sistem yang handal.</p>
              <div className="mt-4 d-flex flex-wrap gap-3">
                <a href="#jasa" className="btn btn-primary-c btn-lg px-4">Jelajahi Layanan</a>
                <a href="#kontak" className="btn btn-secondary-c btn-lg px-4">Hubungi Kami</a>
              </div>
            </div>
            <div className="col-lg-6 text-center" data-aos="fade-left">
              <img src={heroCs} alt="Customer Service" className="img-fluid" style={{ maxHeight: 460 }} />
            </div>
          </div>
        </div>
      </section>

      <section id="tentang" className="section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-up">
              <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1000" alt="Tentang" className="img-fluid rounded-4 shadow" />
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h6 style={{ color: SECONDARY, fontWeight: 700 }}>TENTANG KAMI</h6>
              <h2 className="section-title">Mitra Terpercaya Transformasi Digital Anda</h2>
              <p className="text-muted">PT Aplikasi Solusi Integrasi berdiri dengan misi menyediakan solusi teknologi informasi yang inovatif, terpercaya, dan berkualitas tinggi untuk mendukung pertumbuhan bisnis klien di seluruh Indonesia.</p>
              <ul className="list-unstyled mt-4">
                <li className="mb-2"><i className="bi bi-check-circle-fill me-2" style={{color: PRIMARY}}></i>Tim profesional berpengalaman 10+ tahun</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill me-2" style={{color: PRIMARY}}></i>Teknologi terkini dan best practice</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill me-2" style={{color: PRIMARY}}></i>Support 24/7 untuk seluruh klien</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="jasa" className="section" style={{background:"#f8f9fa"}}>
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <h6 style={{ color: SECONDARY, fontWeight: 700 }}>JASA KAMI</h6>
            <h2 className="section-title">Layanan Profesional Kami</h2>
            <p className="section-subtitle">Solusi lengkap untuk memenuhi kebutuhan digital bisnis Anda</p>
          </div>
          <div className="row g-4">
            {services.map((s, i) => (
              <div className="col-md-6 col-lg-4" key={s.title} data-aos="zoom-in" data-aos-delay={i*80}>
                <div className="service-card" style={{ background: s.color }}>
                  <i className={`bi ${s.icon}`}></i>
                  <h5>{s.title}</h5>
                  <p className="mb-0" style={{opacity:.95}}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <h6 style={{ color: SECONDARY, fontWeight: 700 }}>KLIEN KAMI</h6>
            <h2 className="section-title">Dipercaya Oleh</h2>
            <p className="section-subtitle">Berbagai perusahaan telah bekerja sama dengan kami</p>
          </div>
          <div className="swiper client-swiper" data-aos="fade-up">
            <div className="swiper-wrapper align-items-center">
              {clients.map((c) => (
                <div className="swiper-slide" key={c}>
                  <div className="client-logo">{c}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="galeri" className="section" style={{background:"#f8f9fa"}}>
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <h6 style={{ color: SECONDARY, fontWeight: 700 }}>GALERI</h6>
            <h2 className="section-title">Dokumentasi Kegiatan</h2>
            <p className="section-subtitle">Momen kami bersama klien dan tim</p>
          </div>
          <div className="row g-4">
            {gallery.map((src, i) => (
              <div className="col-6 col-md-4" key={src} data-aos="zoom-in" data-aos-delay={i*60}>
                <div className="gallery-item">
                  <img src={src} alt={`Galeri ${i+1}`} className="gallery-img" loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="video" className="section">
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <h6 style={{ color: SECONDARY, fontWeight: 700 }}>VIDEO</h6>
            <h2 className="section-title">Video Profil & Portofolio</h2>
            <p className="section-subtitle">Lihat lebih dekat perjalanan kami</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6" data-aos="fade-right">
              <div className="video-wrap">
                <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Video 1" allowFullScreen></iframe>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <div className="video-wrap">
                <iframe src="https://www.youtube.com/embed/9bZkp7q19f0" title="Video 2" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimoni" className="section" style={{background:"#f8f9fa"}}>
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <h6 style={{ color: SECONDARY, fontWeight: 700 }}>TESTIMONI</h6>
            <h2 className="section-title">Apa Kata Klien Kami</h2>
            <p className="section-subtitle">Kepuasan klien adalah prioritas utama kami</p>
          </div>
          <div className="swiper testi-swiper pb-5" data-aos="fade-up">
            <div className="swiper-wrapper">
              {testimonials.map((t, i) => (
                <div className="swiper-slide h-auto" key={i}>
                  <div className="testi-card">
                    <i className="bi bi-quote" style={{fontSize:"2.5rem", color: PRIMARY}}></i>
                    <p className="text-muted">{t.text}</p>
                    <div className="d-flex align-items-center mt-3">
                      <img src={t.avatar} alt={t.name} />
                      <div className="ms-3">
                        <div className="fw-bold">{t.name}</div>
                        <small className="text-muted">{t.role}</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>

      <section id="artikel" className="section">
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <h6 style={{ color: SECONDARY, fontWeight: 700 }}>ARTIKEL</h6>
            <h2 className="section-title">Artikel Terbaru</h2>
            <p className="section-subtitle">Insight dan berita seputar teknologi</p>
          </div>
          <div className="row g-4">
            {articles.map((a, i) => (
              <div className="col-md-4" key={a.title} data-aos="fade-up" data-aos-delay={i*100}>
                <div className="card article-card">
                  <img src={a.img} alt={a.title} loading="lazy" />
                  <div className="card-body">
                    <small className="text-muted"><i className="bi bi-calendar3 me-1"></i>{a.date}</small>
                    <h5 className="mt-2 fw-bold">{a.title}</h5>
                    <p className="text-muted small">{a.desc}</p>
                    <a href="#" style={{color: BTN, fontWeight:600, textDecoration:"none"}}>Baca Selengkapnya <i className="bi bi-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="cta text-center" data-aos="zoom-in">
            <h2 className="fw-bold mb-3">Siap Memulai Proyek Digital Anda?</h2>
            <p className="mb-4">Konsultasikan kebutuhan bisnis Anda dengan tim ahli kami sekarang juga.</p>
            <a href="#kontak" className="btn btn-primary-c btn-lg px-5">Konsultasi Gratis</a>
          </div>
        </div>
      </section>

      <section id="kontak" className="section contact-section">
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <h6 style={{ color: SECONDARY, fontWeight: 700 }}>KONTAK</h6>
            <h2 className="section-title">Hubungi Kami</h2>
            <p className="section-subtitle">Kirim pesan dan tim kami akan segera merespon via WhatsApp</p>
          </div>
          <div className="row g-5">
            <div className="col-lg-5" data-aos="fade-right">
              <div className="mb-4 d-flex">
                <div style={{background: PRIMARY, color:"#fff", width:48, height:48, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center"}}><i className="bi bi-geo-alt-fill"></i></div>
                <div className="ms-3"><h6 className="mb-1">Alamat</h6><p className="text-muted mb-0">Jl. Sudirman No. 123, Jakarta Pusat 10220</p></div>
              </div>
              <div className="mb-4 d-flex">
                <div style={{background: PRIMARY, color:"#fff", width:48, height:48, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center"}}><i className="bi bi-telephone-fill"></i></div>
                <div className="ms-3"><h6 className="mb-1">Telepon</h6><p className="text-muted mb-0">+62 812 3456 7890</p></div>
              </div>
              <div className="mb-4 d-flex">
                <div style={{background: PRIMARY, color:"#fff", width:48, height:48, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center"}}><i className="bi bi-envelope-fill"></i></div>
                <div className="ms-3"><h6 className="mb-1">Email</h6><p className="text-muted mb-0">info@aplikasisolusi.co.id</p></div>
              </div>
            </div>
            <div className="col-lg-7" data-aos="fade-left">
              <form onSubmit={handleSubmit} className="bg-white p-4 p-md-5 rounded-4 shadow-sm">
                <div className="mb-3">
                  <label className="form-label fw-semibold">Nama Lengkap</label>
                  <input type="text" name="nama" className="form-control form-control-lg" required maxLength={100} placeholder="Nama Anda" />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Email</label>
                  <input type="email" name="email" className="form-control form-control-lg" required maxLength={255} placeholder="email@contoh.com" />
                </div>
                <div className="mb-4">
                  <label className="form-label fw-semibold">Pesan</label>
                  <textarea name="pesan" className="form-control form-control-lg" rows={5} required maxLength={1000} placeholder="Tuliskan pesan Anda..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary-c btn-lg w-100"><i className="bi bi-whatsapp me-2"></i>Kirim via WhatsApp</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <h5><i className="bi bi-hexagon-fill me-2" style={{color: SECONDARY}}></i>PT ASI</h5>
              <p style={{opacity:.9}}>PT Aplikasi Solusi Integrasi<br/>Jl. Sudirman No. 123<br/>Jakarta Pusat 10220<br/>Indonesia</p>
            </div>
            <div className="col-md-4">
              <h5>Ikuti Kami</h5>
              <p style={{opacity:.9}}>Tetap terhubung dan dapatkan update terbaru dari kami.</p>
              <div className="social-icons mt-3">
                <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                <a href="#" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
                <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                <a href="#" aria-label="YouTube"><i className="bi bi-youtube"></i></a>
              </div>
            </div>
            <div className="col-md-4">
              <h5>Lokasi Kami</h5>
              <div style={{borderRadius:12, overflow:"hidden"}}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.291!2d106.822!3d-6.208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sJakarta!5e0!3m2!1sen!2sid!4v1700000000000"
                  width="100%" height="180" style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom mt-5">
          © {new Date().getFullYear()} PT Aplikasi Solusi Integrasi. All rights reserved.
        </div>
      </footer>
    </>
  );
}
