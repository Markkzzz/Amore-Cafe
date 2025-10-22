import React from "react";
import './assets/style.css';


function Home() {
  return (
    <>
      {/* Navbar */}
      <nav>
        <div className="logo">☕ Amore Café</div>
        <ul className="nav-links">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Welcome to Amore Café</h1>
          <p>Where every cup tells a story.</p>
          <a href="#menu" className="btn">View Menu</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About Us</h2>
          <p>
            At <strong>Amore Café</strong>, we believe that every cup of coffee tells a story — 
            a story of passion, warmth, and connection. Our café was founded with the simple dream 
            of creating a cozy place where people can relax, share moments, and enjoy handcrafted beverages made with love.
          </p>
          <p>
            We take pride in serving freshly brewed coffee, delicious pastries, and comforting meals 
            in a peaceful and inviting atmosphere. Whether you're catching up with friends, studying, or just enjoying 
            some quiet time, Amore Café offers the perfect spot to make every visit special. Experience the aroma, 
            the taste, and the joy — only at Amore Café.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery">
        <div className="container">
          <h2>Gallery</h2>
          <div className="gallery-grid">
            <img src="images/gallery1.jpg" alt="gallery1" />
            <img src="images/gallery2.jpg" alt="gallery2" />
            <img src="images/gallery3.jpg" alt="gallery3" />
            <img src="images/gallery4.jpg" alt="gallery4" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <p>📍 123 Coffee Street, Barangka, Marikina City</p>
          <p>📞 0912 345 6789</p>
          <p>✉️ amorecafe@gmail.com</p>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Amore Café. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Home;
