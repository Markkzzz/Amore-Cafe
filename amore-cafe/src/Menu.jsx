import React from "react";
import './assets/style.css';


function Menu() {
  return (
    <>
      {/* Navbar */}
      <nav>
        <div className="logo">☕ Amore Café</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu" className="active">Menu</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Menu Section */}
      <section id="menu" className="menu">
        <div className="container">
          <h2>Our Menu</h2>

          {/* Coffee Section */}
          <div className="menu-category">
            <h3>☕ Coffee</h3>
            <div className="menu-items">
              <div className="menu-item">
                <img src="images/coffee1.jpg" alt="Espresso" />
                <div className="menu-info">
                  <h4>Espresso</h4>
                  <p>₱120</p>
                </div>
              </div>

              <div className="menu-item">
                <img src="images/coffee2.jpg" alt="Caramel Latte" />
                <div className="menu-info">
                  <h4>Caramel Latte</h4>
                  <p>₱160</p>
                </div>
              </div>

              <div className="menu-item">
                <img src="images/coffee3.jpg" alt="Cappuccino" />
                <div className="menu-info">
                  <h4>Cappuccino</h4>
                  <p>₱150</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pastries Section */}
          <div className="menu-category">
            <h3>🍰 Pastries</h3>
            <div className="menu-items">
              <div className="menu-item">
                <img src="images/pastry1.jpg" alt="Chocolate Cake" />
                <div className="menu-info">
                  <h4>Chocolate Cake</h4>
                  <p>₱180</p>
                </div>
              </div>

              <div className="menu-item">
                <img src="images/pastry3.jpg" alt="Croissant" />
                <div className="menu-info">
                  <h4>Croissant</h4>
                  <p>₱90</p>
                </div>
              </div>

              <div className="menu-item">
                <img src="images/pastry4.jpg" alt="Cheesecake" />
                <div className="menu-info">
                  <h4>Cheesecake</h4>
                  <p>₱170</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pasta Section */}
          <div className="menu-category">
            <h3>🍝 Pasta</h3>
            <div className="menu-items">
              <div className="menu-item">
                <img src="images/pasta2.jpg" alt="Carbonara" />
                <div className="menu-info">
                  <h4>Carbonara</h4>
                  <p>₱200</p>
                </div>
              </div>

              <div className="menu-item">
                <img src="images/pasta1.jpg" alt="Spaghetti" />
                <div className="menu-info">
                  <h4>Spaghetti</h4>
                  <p>₱210</p>
                </div>
              </div>

              <div className="menu-item">
                <img src="images/pasta4.jpg" alt="Pesto Pasta" />
                <div className="menu-info">
                  <h4>Pesto Pasta</h4>
                  <p>₱190</p>
                </div>
              </div>
            </div>
          </div>

          {/* Drinks Section */}
          <div className="menu-category">
            <h3>🍹 Drinks</h3>
            <div className="menu-items">
              <div className="menu-item">
                <img src="images/drink1.jpg" alt="Iced Tea" />
                <div className="menu-info">
                  <h4>Iced Tea</h4>
                  <p>₱80</p>
                </div>
              </div>

              <div className="menu-item">
                <img src="images/drink2.jpg" alt="Mango Smoothie" />
                <div className="menu-info">
                  <h4>Mango Smoothie</h4>
                  <p>₱130</p>
                </div>
              </div>

              <div className="menu-item">
                <img src="images/drink3.jpg" alt="Matcha Frappe" />
                <div className="menu-info">
                  <h4>Matcha Frappe</h4>
                  <p>₱150</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Amore Café. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Menu;
