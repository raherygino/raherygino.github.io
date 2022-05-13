<nav class="navbar navbar-standard navbar-expand-lg fixed-top navbar-dark" data-navbar-darken-on-scroll="data-navbar-lighten-on-scroll">
        <div class="container">
          <a class="navbar-brand" href="">
            <span class="text-black dark__text-white">Gino</span>
          </a>
          <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarStandard" aria-controls="navbarStandard" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse scrollbar" id="navbarStandard">
            <ul class="navbar-nav" data-top-nav-dropdowns="data-top-nav-dropdowns">
              <li class="nav-item"><a class="nav-link active" href="./" role="button" id="home">Accueil</a>
              </li>
              <li class="nav-item"><a class="nav-link" href="./" role="button" id="about">A propos</a>
              </li>
              <li class="nav-item"><a class="nav-link" href="./" role="button" id="blog">Blog</a>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="./">
                  <span class="d-none d-lg-inline-block" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Télécharger mon CV"><span class="far fa-file-alt"></span></span><span class="d-lg-none">Dashboard</span>
                </a>
              </li>
              <li class="nav-item"><a class="nav-link" href="#!" data-bs-toggle="modal" data-bs-target="#exampleModal">S'inscrire</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-body p-4">
              <div class="row text-start justify-content-between align-items-center mb-2">
                <div class="col-auto">
                  <h5 id="modalLabel">Register</h5>
                </div>
                <div class="col-auto">
                  <p class="fs--1 text-600 mb-0">Have an account? <a href="authentication/simple/login.html">Login</a></p>
                </div>
              </div>
              <form>
                <div class="mb-3"><input class="form-control" type="text" autocomplete="on" placeholder="Name" /></div>
                <div class="mb-3"><input class="form-control" type="email" autocomplete="on" placeholder="Email address" /></div>
                <div class="row gx-2">
                  <div class="mb-3 col-sm-6"><input class="form-control" type="password" autocomplete="on" placeholder="Password" /></div>
                  <div class="mb-3 col-sm-6"><input class="form-control" type="password" autocomplete="on" placeholder="Confirm Password" /></div>
                </div>
                <div class="form-check"><input class="form-check-input" type="checkbox" id="modal-register-checkbox" /><label class="form-label" for="modal-register-checkbox">I accept the <a href="#!">terms </a>and <a href="#!">privacy policy</a></label></div>
                <div class="mb-3"><button class="btn btn-primary d-block w-100 mt-3" type="submit" name="submit">Register</button></div>
              </form>
              <div class="position-relative mt-4">
                <hr class="bg-300" />
                <div class="divider-content-center">or register with</div>
              </div>
              <div class="row g-2 mt-2">
                <div class="col-sm-6"><a class="btn btn-outline-google-plus btn-sm d-block w-100" href="#"><span class="fab fa-google-plus-g me-2" data-fa-transform="grow-8"></span> google</a></div>
                <div class="col-sm-6"><a class="btn btn-outline-facebook btn-sm d-block w-100" href="#"><span class="fab fa-facebook-square me-2" data-fa-transform="grow-8"></span> facebook</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>