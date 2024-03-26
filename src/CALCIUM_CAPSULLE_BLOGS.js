import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function CALCIUM_CAPSULLE_BLOGS() {
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
                        </div>
                    </div>
                </div>
            </div>

            <div class="blog-details py-120">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="main-img">
                                <img src="assets/images/blog-details-img23.jpg" alt="Image" />
                            </div>
                            <div class="part-txt">
                                <div class="title-box">
                                    <h2 class="blog-title">Vestige Calcium Capsule</h2>
                                </div>
                                <p>
                                    Our Bones support us and allow us to move.<br></br>
                                    Bones protect our brain, heart, and other organs from injury.<br></br>
                                    The body needs calcium and vitamin D and enough exercise to build and keep strong bones.<br></br>
                                    Calcium helps to build and maintain bones.<br></br>
                                    Vitamin D helps the body to effectively absorb calcium.<br></br>
                                    Vestige Calcium contains Calcium Carbonate 625mg and Vitamin D 250 IU.<br></br>
                                    Consuming Calcium Capsules daily can<br></br>
                                    Cure Osteoporosis<br></br>
                                    Rickets<br></br>
                                    Osteomalacia<br></br>
                                    Maintain healthy and Strong bones<br></br>
                                    Muscle contraction<br></br>
                                    blood vessel contraction<br></br>
                                    secretion of hormones and enzymes.
                                    Reduces risk of heart diseases<br></br>
                                    Improves  Strength<br></br>
                                    Makes Teeths stronger<br></br>


                                </p>
                            </div>

                            <div class="part-txt">
                                <h3 class="secondary-title">Dose: 2 Times one capsule after meals.</h3>
                                <p>Warning: Maintain a gap of min 3hrs between iron and calcium supplements.
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="blog-sidebar">
                                <form class="searchbox">
                                    <input type="search" placeholder="Search Here" />
                                    <button><i class="fa-light fa-magnifying-glass"></i></button>
                                </form>
                                <div class="recent-post">
                                    <h3 class="sidebar-title">Recent Posts</h3>
                                    <ul>
                                        <li>
                                            <a href="blog-details.html">
                                                <div class="part-img">
                                                    <img src="assets/images/blog-img-5.jpg" alt="image" />
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
                                                    <img src="assets/images/blog-img-4.jpg" alt="image" />
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
                                                    <img src="assets/images/blog-img-3.jpg" alt="image" />
                                                </div>
                                                <div class="txt-box">
                                                    <span class="title">How to Prepare for your First his</span>
                                                    <span class="date">August 26, 2021</span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
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

export default CALCIUM_CAPSULLE_BLOGS