import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function COLOSTUM_BLOG() {
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
                                <img src="assets/images/blog-detail-img8.png" alt="Image" />
                            </div>
                            <div class="part-txt">
                                <div class="title-box">
                                    <h2 class="blog-title">Vestige Colostrum Capsule</h2>
                                </div>
                                <h2 class="blog-title">What is Colostrum??</h2>
                                <p>Colostrum is a milky fluid that's released by mammals that have recently given birth before breast milk. Colostrum is literally 'Nature's First Food'. Bovine Colostrum is the initial lacteal secretion produced by the mammary gland of a mother cow before the production of of milk. Only Colostrum collected within 0-6 hours after the birth of a calf maintains a balance between immunological and body regulating active proteins and is known as Bovine Colostrum. Bovine Colostrum is very similar to whey protein's efficiency ratio. It is Low in fat and is lactose free.<br></br>
                                    Colostrum is richer in certain factors than milk. It has higher amounts of immunoglobins, growth factors, cytokines and nucleosides than found in milk. #It contains many Beneficial substances. Immunoglobins Lactoferrin Proline-rich polypeptide Cytokines oligosaccharides antimicrobials Vitamins Colostrum contains about 100 times more antibodies than regular milk.</p>
                            </div>

                            <div class="part-txt">
                                <h3 class="secondary-title">Benefits</h3>
                                <p>The immunoglobulins present in it help in building immunity against different types of viruses.<br></br>
                                    Bovine Colostrum helps in the maintainance of cellelular tissues and strengthens the immune system.<br></br>
                                    Improves Strength.<br></br>
                                    Prevents Allergic reactions.<br></br>
                                    Muscle building.<br></br>
                                    Strengthens the Gut in the digestive tract.<br></br>
                                    Repairs and rebuilds cellular tissues.<br></br>
                                    Boost Immunity.<br></br>
                                    Control Inflammation.<br></br>
                                    Improves bone density and skin elasticity.<br></br>
                                    Regulate Fat Tissue usage.<br></br>
                                    Increase Memory.<br></br>
                                    Asthma Treatment.</p>
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

export default COLOSTUM_BLOG