export default function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#cakes"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("cakes");
              }}
            >
              Cakes
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("gallery");
              }}
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("testimonials");
              }}
            >
              Testimonials
            </a>
          </li>
          {/* <li>
              <a
                href="#cart"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("cart");
                }}
              >
                Cart
              </a>
            </li> */}
        </ul>
      </nav>
    </header>
  );
}
