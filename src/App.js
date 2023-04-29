import "./styles.css";
import logo from "./sample.jfif";
import hero from "./avatar.png";
import About from "./About.js";
import Testimonial from "./Testimonial.js";
import Online from "./Online.js";
import News from "./News.js";
import Footer from "./Footer.js";

export default function App() {
  return (
    <div className="App">
      <div className="hero">
        <nav className="navbar sticky-top navbar-expand-lg">
          <div class="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand me-5" href="/">
              <img
                src={logo}
                alt="Logo"
                width="35"
                height="29"
                class="d-inline-block align-text-top me-2 rounded-circle"
              />
              <strong className="fst-italic">Air Formula</strong>
            </a>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item me-5">
                  <a class="nav-link active" aria-current="page" href="/">
                    HOME
                  </a>
                </li>
                <li class="nav-item me-5">
                  <a class="nav-link" href="/">
                    MATCH
                  </a>
                </li>
                <li class="nav-item me-5">
                  <a class="nav-link" href="/">
                    BLOG
                  </a>
                </li>
                <li class="nav-item me-5">
                  <a class="nav-link" href="/">
                    ABOUT
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    CONTACT
                  </a>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <button class="btn btn-outline-warning me-5" type="submit">
                  SIGN UP
                </button>
              </form>
            </div>
          </div>
        </nav>
        <header>
          <div class="container mt-5">
            <div class="row">
              <div class="col">
                <h1 className="mb-3">
                  ARE YOU READY FOR YOUR NEXT CHALLENGE ?
                </h1>
                <button type="button" class="btn btn-warning read-more">
                  READ MORE
                </button>
              </div>
              <div class="col hero-avatar">
                <img src={hero} alt="hero-avatar" />
              </div>
            </div>
          </div>
        </header>
      </div>
      <About />
      <Testimonial />
      <Online />
      <News />
      <Footer />
    </div>
  );
}
