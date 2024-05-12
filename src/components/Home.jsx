import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="container">

      <nav class="navbar navbar-expand-lg bg-Light">
  <div class="container-fluid">
  <a class="navbar-brand" href="#">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm7ux3hHHxRIhe9RaUBy7yol3nHwGCn5G5MJUah1GellL0tnNk0VI1vzlpIYSJl9TtYiM&usqp=CAU" alt="Bootstrap" width="50" height="44"/>
    </a>
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Gallery</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About US</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact US</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 cl-xxl-12">
                <div class="card">
                  <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="https://lh3.googleusercontent.com/proxy/FM-F_Pxu_ZzOkB_mW7qw-gZIl8GnVen92cYwxCdzWgHrAcXAcjHQ9i5EAwFS7ODeZTgHV5sKyA3bEF4rdSQ8NPUdo9G7W5GbFW4" class="d-block w-100" alt="..." />
                      </div>
                      <div class="carousel-item">
                        <img src="https://sbce.ac.in/wp-content/uploads/2017/05/1438065750_lib2.jpg" class="d-block w-100" alt="..." />
                      </div>
                      <div class="carousel-item">
                        <img src="https://sbce.ac.in/wp-content/themes/sbce/images/buddha.jpg" class="d-block w-100" alt="..." />
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 cl-xxl-12">
              <div class="card">
                <div class="card-body">
                  <h1>OUR COURSES ARE</h1>
                  <div className="container">
                    <div className="row g-3">
                      <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <div class="card">
                          <img src="https://images.shiksha.com/mediadata/images/1462789585phpp3O9AH.jpeg" class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">Computer Science Engineering</h5>

                          </div>
                        </div>
                      </div>
                      <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <div class="card">
                          <img src="https://5.imimg.com/data5/TT/FU/GLADMIN-9241219/civil-engineering-course-500x500.png" class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">Civil Engineering</h5>

                          </div>
                        </div>
                      </div>
                      <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <div class="card">
                          <img src="https://aitdelhi.in/wp-content/uploads/2019/04/AIT-15-1.jpg" class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">Electronics and Communication Engineering</h5>

                          </div>
                        </div>
                      </div>
                      <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <div class="card">
                          <img src="https://sbce.ac.in/wp-content/gallery/sbce/334A9343.jpg" class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">Electronic and Electrical Engineering </h5>

                          </div>
                        </div>
                      </div>
                      <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <div class="card">
                          <img src="https://daijiworld.ap-south-1.linodeobjects.com/iWeb/tvdaijiworld/images6/asha_11720_nmamai2.jpg" class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">AI</h5>

                          </div>
                        </div>
                      </div>
                      <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <div class="card">
                          <img src="https://sbce.ac.in/wp-content/uploads/2019/01/FB_IMG_1520146687672.jpg" class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title"> Mechanical Engineering </h5>

                          </div>
                        </div>
                      </div>
                      <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <div class="card">
                          <img src="https://www.jct.ac.in/engineering/wp-content/uploads/2021/01/bio-banner.jpg" class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">Bio Chemical Engineering</h5>

                          </div>
                        </div>
                      </div>
                      <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <div class="card">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC7VsAb19AYqmY94uWxswVPdtMIz8gukS_XHafQCiCnEmfD6dz1TMuogupeoykFyykrBA&usqp=CAU" class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">Areospace Engineering</h5>

                          </div>
                        </div>
                      </div>
                      <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 cl-xxl-12">
                        <img src="https://sbce.ac.in/wp-content/uploads/2022/07/placement-slide-scaled.jpg" class="img-fluid" alt="..." />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 cl-xxl-12"></div>
          </div>


        </div>
      </div>
    </div>

  )
}

export default Home

