import React, { useState } from "react";
import { toggleDetails } from "./utilities";

const App = () => {
  const [view, setView] = useState({
    home: true,
    resume: false,
    work: false,
    contact: false,
  });

  return (
    <>
      <div className="container">
        {/* //-----------------------------------------------------------  */}
        {/* =================header starts ==================  */}
        <header id="main-header">
          <div className="row no-gutters">
            <div className="col-lg-4 col-md-5">
              <img src={"manya.jpg"} alt="my photo" />
            </div>
            <div className="col-lg-8 col-md-7">
              <div className="d-flex flex-column">
                <div className="d-flex flex-column">
                  {/* <!-- =========name and smedia icon flex starts ======== --> */}
                  <div className="p-5 bg-dark text-white">
                    {/* <!-- p-5 means padding 5%  --> */}
                    <div className="d-flex flex-row justify-content-between align-item-center">
                      <h1 className="display-4">Shubham Pandkar</h1>
                      {/* <!-- due to "d-none d-md-block" className twitter icon will disappear on small screen  --> */}
                      <div className="d-none d-md-block">
                        <a href="http://twitter.com" className="text-white">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </div>
                      <div>
                        <a href="http://facebook.com" className="text-white">
                          <i className="fab fa-facebook"></i>
                        </a>
                      </div>
                      <div>
                        <a href="http://instagram.com" className="text-white">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </div>
                      <div>
                        <a href="http://github.com" className="text-white">
                          <i className="fab fa-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- ===========name & smedia icons flex end ============== --> */}
                  <div className="p-4 bg-black">
                    Experienced Full Stack Web Developer
                  </div>
                  {/* <!-- ======home resume work contact flex row starts ========== --> */}
                  <div>
                    <div className="d-flex flex-row text-white align-items-strech text-center">
                      <div
                        className="port-item p-4 bg-primary"
                        data-toggle="collapse"
                        data-target="#home"
                        onClick={() => toggleDetails(view, setView, "home")}
                      >
                        <i className="fas fa-home fa-2x d-block"></i>
                        <span className="d-none d-sm-block">Home </span>
                      </div>
                      <div
                        className="port-item p-4 bg-success"
                        data-toggle="collapse"
                        data-target="#resume"
                        onClick={() => toggleDetails(view, setView, "resume")}
                      >
                        <i className="fas fa-graduation-cap fa-2x d-block"></i>
                        <span className="d-none d-sm-block">Resume</span>
                      </div>
                      <div
                        className="port-item p-4 bg-warning"
                        data-toggle="collapse"
                        data-target="#work"
                        onClick={() => toggleDetails(view, setView, "work")}
                      >
                        <i className="fas fa-folder-open fa-2x d-block"></i>
                        <span className="d-none d-sm-block">Work</span>
                      </div>
                      <div
                        className="port-item p-4 bg-danger"
                        data-toggle="collapse"
                        data-target="#contact"
                        onClick={() => toggleDetails(view, setView, "contact")}
                      >
                        <i className="fas fa-envelope fa-2x d-block"></i>
                        <span className="d-none d-sm-block">Contact</span>
                      </div>
                    </div>
                  </div>
                  {/* <!-- ======home resume work contact flex row starts ========== --> */}
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* <!-- =================header ends =================== --> */}
        {/* <!-- =======================home starts ================== --> */}
        {/* Use logic to show/hide based on the status value in currentView object */}
        <div
          id="home"
          className={view.home ? "collapse show" : "collapse hide"} // logic
        >
          <div className="card card-body bg-primary text-white py-5">
            <h2>Welcome to My Page</h2>
            <p className="lead">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              deserunt!
            </p>
          </div>

          <div className="card card-body py-5">
            <h3>My Skills</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
              mollitia modi reiciendis tempore rerum sunt.
            </p>
            <hr />
            <h4>HTML 5</h4>
            <div className="progress mb-3">
              <div className="progress-bar bg-success html"></div>
            </div>

            <h4>CSS 3</h4>
            <div className="progress mb-3">
              <div className="progress-bar bg-success css"></div>
            </div>

            <h4>Java Script</h4>
            <div className="progress mb-3">
              <div className="progress-bar bg-success js"></div>
            </div>

            <h4>React JS</h4>
            <div className="progress mb-3">
              <div className="progress-bar bg-success reactjs"></div>
            </div>

            <h4>Express JS</h4>
            <div className="progress mb-3">
              <div className="progress-bar bg-success expressjs"></div>
            </div>

            <h4>Node JS</h4>
            <div className="progress mb-3">
              <div className="progress-bar bg-success nodejs"></div>
            </div>

            <h4>Mango-DB</h4>
            <div className="progress mb-3">
              <div className="progress-bar bg-success mangodb"></div>
            </div>
          </div>
        </div>

        {/* <!-- =======================home ends ================== --> */}

        {/* <!-- =========================resume starts ================ --> */}
        <div
          id="resume"
          className={view.resume ? "collapse show" : "collapse hide"} // logic
        >
          <div className="card card-body bg-success text-white py-5">
            <h2>My Resume</h2>
            <p className="lead">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              deserunt!
            </p>
          </div>

          <div className="card card-body py-5">
            <h3>Where Have I worked?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              natus voluptatem ipsum temporibus suscipit consequuntur.
            </p>
            <div className="card-deck">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Capgemini</h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cupiditate, cum!
                  </p>
                  <p className="p-2 mb-3 bg-dark text-white">
                    Position: Mern Stack Developer
                  </p>
                  <p className="p-2 mb-3 bg-dark text-white">
                    Phone: (020) 222-2222
                  </p>
                </div>
                <div className="card-footer">
                  <h6 className="text-muted">Dates: 2020-2021</h6>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Brainworks</h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cupiditate, cum!
                  </p>
                  <p className="p-2 mb-3 bg-dark text-white">
                    Position: Web designer
                  </p>
                  <p className="p-2 mb-3 bg-dark text-white">
                    Phone: (020) 333-2222
                  </p>
                </div>
                <div className="card-footer">
                  <h6 className="text-muted">Dates: 2018-2020</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- =========================resume ends ================ --> */}

        {/* <!-- =======================work starts ================== --> */}
        <div
          id="work"
          className={view.work ? "collapse show" : "collapse hide"} // logic
        >
          <div className="card card-body bg-warning text-white py-5">
            <h2>My Work</h2>
            <p className="lead">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              deserunt!
            </p>
          </div>

          <div className="card card-body py-5">
            <h3>What have I Built?</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus quia eius ullam ratione, esse neque?
            </p>

            <div className="row no-gutters">
              <div className="col-md-3">
                <a
                  target="_blank"
                  rel="noopener" //Links to cross-origin destinations are unsafe so use these attributes
                  rel="noreferrer"
                  href="https://sypandkar.github.io/A-Restaurant-Page/"
                  data-toggle="lightbox"
                >
                  <img
                    style={{ height: "265px" }}
                    src={"Restaurent.PNG"}
                    alt=""
                    className="img-fluid"
                  />
                  <h5 className="text-center">A Restaurant page</h5>
                </a>
              </div>
              <div className="col-md-3">
                <a
                  href="https://unsplash.it/1200/768.jpg?image=254"
                  data-toggle="lightbox"
                >
                  <img
                    src="https://unsplash.it/600.jpg?img=254"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-md-3">
                <a
                  href="https://unsplash.it/1200/768.jpg?image=255"
                  data-toggle="lightbox"
                >
                  <img
                    src="https://unsplash.it/600.jpg?img=255"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-md-3">
                <a
                  href="https://unsplash.it/1200/768.jpg?image=256"
                  data-toggle="lightbox"
                >
                  <img
                    src="https://unsplash.it/600.jpg?img=256"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div className="row no-gutters">
              <div className="col-md-3">
                <a
                  href="https://unsplash.it/1200/768.jpg?image=257"
                  data-toggle="lightbox"
                >
                  <img
                    src="https://unsplash.it/600.jpg?img=257"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-md-3">
                <a
                  href="https://unsplash.it/1200/768.jpg?image=258"
                  data-toggle="lightbox"
                >
                  <img
                    src="https://unsplash.it/600.jpg?img=258"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-md-3">
                <a
                  href="https://unsplash.it/1200/768.jpg?image=259"
                  data-toggle="lightbox"
                >
                  <img
                    src="https://unsplash.it/600.jpg?img=259"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-md-3">
                <a
                  href="https://unsplash.it/1200/768.jpg?image=251"
                  data-toggle="lightbox"
                >
                  <img
                    src="https://unsplash.it/600.jpg?img=251"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- =======================work ends ================== --> */}

        {/* <!-- ===================contact starts ================== --> */}
        <div
          id="contact"
          className={view.contact ? "collapse show" : "collapse hide"} //logic
        >
          <div className="card card-body bg-danger text-white py-5">
            <h2>Contact</h2>
            <p className="lead">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              deserunt!
            </p>
          </div>

          <div className="card card-body py-5">
            <h3>Get In Touch</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              nesciunt dignissimos facere, officia accusamus nam.
            </p>

            <form>
              <div className="form-group">
                <div className="input-group input-grp-lg">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-danger text-white">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control bg-dark text-white"
                    placeholder="Name"
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-group input-grp-lg">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-danger text-white">
                      <i className="fas fa-envelope"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control bg-dark text-white"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-group input-grp-lg">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-danger text-white">
                      <i className="fas fa-pen"></i>
                    </span>
                  </div>
                  <textarea
                    type="text"
                    className="form-control bg-dark text-white"
                    placeholder="Name"
                  ></textarea>
                </div>
              </div>

              <input
                type="submit"
                value="Submit"
                className="btn btn-danger btn-block btn-lg"
              />
            </form>
          </div>
        </div>
        {/* <!-- ===================contact starts ================== --> */}

        {/* <!-- ======================footer starts ================== --> */}
        <footer id="main-footer" className="p-5 bg-dark text-white">
          <div className="row">
            <div className="col-md-6">
              <a href="#" className="btn btn-outline-light">
                <i className="fas fa-cloud"></i>Download resume
              </a>
            </div>
          </div>
        </footer>
        {/* <!-- ======================footer ends ================== --> */}
      </div>
    </>
  );
};

export default App;
