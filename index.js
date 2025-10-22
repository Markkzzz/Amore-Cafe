// Toggle menu (for mobile)
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  const hamburger = document.querySelector(".hamburger");

  navLinks.classList.toggle("show");
  hamburger.classList.toggle("active");
}

// Select all nav links
const navLinks = document.querySelectorAll(".nav-links a");

// Smooth scroll + instant active highlight on click
navLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    const href = this.getAttribute("href");

    // Only apply for in-page links (#)
    if (href.startsWith("#")) {
      e.preventDefault();

      // Remove active class from all links
      navLinks.forEach(a => a.classList.remove("active"));
      this.classList.add("active");

      // Smooth scroll
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: "smooth"
        });
      }

      // Close menu on mobile and reset hamburger
      document.querySelector(".nav-links").classList.remove("show");
      document.querySelector(".hamburger").classList.remove("active");
    }
  });
});

// Highlight active link when section is visible
const sections = document.querySelectorAll("section");
const options = { threshold: 0.6 };

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute("id");
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove("active"));
      if (link) link.classList.add("active");
    }
  });
}, options);

sections.forEach(section => observer.observe(section));

// Backup scroll listener (for browsers without IntersectionObserver support)
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) current = section.getAttribute("id");
  });

  navLinks.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href").includes(current)) {
      a.classList.add("active");
    }
  });
});
