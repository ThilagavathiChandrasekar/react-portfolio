// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../Styles/Navbar.css';
// export default function Navbar() {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg ">
//         <div className="container-fluid">
//           <b><a className="navbar-brand" href="#">Thilagavathi Chandrasekar</a></b>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">Skills</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">Project</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">Contact</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   )
// }

import '../Styles/Navbar.css';
const Navbar = () => {

  return (
    <>
        <section id="navbar">
          <nav
            className="navbar navbar-expand-lg fixed-top"
            style={{ backgroundColor: "black" }}
          >
            <a className="navbar-brand" style={{ color: "white" }}>
              <b>Dinesh Ram</b>
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
              className="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              style={{ width: "75%" }}
            >
              <div className="offcanvas-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  style={{ backgroundColor: "white" }}
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link nav-text" href="#home">
                      Home
                    </a>
                    {/* <Link className="nav-link nav-text" to="/#home">
                      Home
                    </Link> */}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#about">
                      About
                    </a>
                    {/* <Link className="nav-link nav-text" to="/#about">
                      About
                    </Link> */}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-text" href="#tech-stack">
                      Tech Stack
                    </a>
                    {/* <Link className="nav-link nav-text" to="/#tech-stack">
                      Tech Stack
                    </Link> */}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-text" href="#project">
                      Project
                    </a>
                    {/* <Link className="nav-link nav-text" to="/#project">
                      Project
                    </Link> */}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-text" href="#">
                    Contact
                    </a>
                    {/* <Link className="nav-link nav-text" to="/contact">
                      Contact
                    </Link> */}
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

