import '../Styles/Navbar.css';
const Navbar = () => {

  return (
    <>
        <section id="navbar">
          <nav 
          style={{ backgroundColor: "#262C4D" , color:"white"}}
          className="navbar navbar-expand-lg fixed-top">
            <a className="navbar-brand" style={{ color: "whitesmoke" }}>
              <b>Thilagavathi Chandrasekar</b>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end toggle-background"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              style={{ width: "50%" }}
            >
              <div className="offcanvas-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  style={{ backgroundColor: "offcanvas-body" }}
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link nav-text" href="#home">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-text" href="#skill">
                    Mastery
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-text" href="#project">
                      Undertaking
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-text" href="#contact">
                    Get in touch
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </section>
    </>
  );
};

export default Navbar;

