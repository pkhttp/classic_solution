import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function HAIR_SERUM_BLOG() {
    return (
        <div>
            <Header />
            <div class="header">

                <div class="menu-bar">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-xxl-3 col-xl-3 col-lg-4">
                                <div class="all-department">
                                    <span>All Products</span>
                                    <button href="Products" class="category-list-close"><i class="fa-light fa-bars"></i></button>

                                </div>
                            </div>
                            <div class="col-xxl-7 col-xl-7 col-lg-6">
                                <nav class="navbar navbar-expand-lg">
                                    <div class="container-fluid">
                                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                            <span class="navbar-toggler-icon"></span>
                                        </button>
                                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                            <nav id="revel-mobile-menu" class="revel-mobile-menu">
                                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="/">Home</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="/About">About</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="/Products">Product</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="/Blog">Blog</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="/Contact">Contact</a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                            <div class="col-lg-2">
                                <li class="live-chat d-xl-flex d-none align-items-center">
                                    <div class="icon">
                                        <img src="assets/images/call-icon.png" alt="call" />
                                    </div>
                                    <div class="txt">
                                        <span class="d-block">Contact :</span>
                                        <a class="d-block" href="tel:+997509153">+997 509 153</a>
                                    </div>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="blog-details py-120">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="main-img">
                        <img src="assets/images/blog-details-img3.jpg" alt="Image"/>
                    </div>
                    <div class="part-txt">
                        <div class="title-box">
                            <h2 class="blog-title">Vestige Hair Serum</h2>
                        </div>
                        <p>Enjoy beautifully nourished hair with Assure's Damage Protection Leave-On Hair Serum. Finally unbottled to provide all the benefits to your hair. Revitalize your hair with Assure Damage Protection Leave On Hair Serum. The Perfect solution to protect and strengthenyour hair against future damage.</p>
                    </div>
                    <div class="part-txt">
                        {/* <h3 class="secondary-title">Benefits</h3> */}
                        <p> 1. Oil Free Moisturization.<br></br>
                            2. Adds shine to hair.<br></br>
                            3. No split Ends.<br></br>
                            4. Detangles hair.<br></br>
                            5. Protects hair from harmful UV rays.</p>
                    </div>

                    <div class="part-txt">
                        <h3 class="secondary-title">#WishYouWellth #professionalhaircare #serum #damageprotection</h3>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="blog-sidebar">
                        <form class="searchbox">
                            <input type="search" placeholder="Search Here"/>
                            <button><i class="fa-light fa-magnifying-glass"></i></button>
                        </form>
                        <div class="recent-post">
                            <h3 class="sidebar-title">Recent Posts</h3>
                            <ul>
                                <li>
                                    <a href="blog-details.html">
                                        <div class="part-img">
                                            <img src="assets/images/blog-img-5.jpg" alt="image"/>
                                        </div>
                                        <div class="txt-box">
                                            <span class="title">How to Prepare for your First his</span>
                                            <span class="date">August 26, 2021</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="blog-details.html">
                                        <div class="part-img">
                                            <img src="assets/images/blog-img-4.jpg" alt="image"/>
                                        </div>
                                        <div class="txt-box">
                                            <span class="title">How to Prepare for your First his</span>
                                            <span class="date">August 26, 2021</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="blog-details.html">
                                        <div class="part-img">
                                            <img src="assets/images/blog-img-3.jpg" alt="image"/>
                                        </div>
                                        <div class="txt-box">
                                            <span class="title">How to Prepare for your First his</span>
                                            <span class="date">August 26, 2021</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* <div class="categories">
                            <h3 class="sidebar-title">Categories</h3>
                            <ul>
                                <li><a href="#"><span><i class="fa-light fa-chevrons-right"></i> Organic Vegetables</span><span>(07)</span></a></li>
                                <li><a href="#"><span><i class="fa-light fa-chevrons-right"></i> Fresh Fruits</span><span>(05)</span></a></li>
                                <li><a href="#"><span><i class="fa-light fa-chevrons-right"></i> Fresh Vegetables</span><span>(10)</span></a></li>
                                <li><a href="#"><span><i class="fa-light fa-chevrons-right"></i> Our Restaurant</span><span>(13)</span></a></li>
                                <li><a href="#"><span><i class="fa-light fa-chevrons-right"></i> Special Food</span><span>(15)</span></a></li>
                                <li><a href="#"><span><i class="fa-light fa-chevrons-right"></i> Organic Product</span><span>(17)</span></a></li>
                            </ul>
                        </div> */}
                        {/* <div class="image-slider">
                            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="assets/images/blog-img-1.jpg" class="d-block w-100" alt="Image"/>
                                    </div>
                                    <div class="carousel-item">
                                        <img src="assets/images/blog-img-2.jpg" class="d-block w-100" alt="Image"/>
                                    </div>
                                    <div class="carousel-item">
                                        <img src="assets/images/blog-img-3.jpg" class="d-block w-100" alt="Image"/>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span><i class="fa-light fa-chevron-left"></i></span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span><i class="fa-light fa-chevron-right"></i></span>
                                </button>
                            </div>
                        </div> */}
                        <div class="tags">
                            <h3 class="sidebar-title">Tags</h3>
                            <div class="btn-box">
                                <a href="#">Brunch</a>
                                <a href="#">Cook</a>
                                <a href="#">Cuisine</a>
                                <a href="#">Delicious</a>
                                <a href="#">Vegetarian</a>
                                <a href="#">Fish</a>
                                <a href="#">Food</a>
                                <a href="#">Lunch</a>
                                <a href="#">Tasty</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>




            <Footer />
        </div>
    )
}

export default HAIR_SERUM_BLOG