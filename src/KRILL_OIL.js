import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function KRILL_OIL() {
    return (
        <div>
            <Header />
            <div class="header">
                <div class="menu-bar">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-xxl-3 col-xl-3 col-lg-4">
                                <div class="all-department">
                                    <button href="Products" class="category-list-close"><i
                                        class="fa-light fa-bars"></i></button>
                                </div>
                            </div>
                            <div class="col-xxl-7 col-xl-7 col-lg-6">
                                <nav class="navbar navbar-expand-lg">
                                    <div class="container-fluid">
                                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                            aria-expanded="false" aria-label="Toggle navigation">
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

            <div class="shop-details py-120">
                <div class="container">
                    <div class="product-view-area">
                        <div class="row">
                            <div class="col-xl-6 col-lg-5 col-md-6">
                                <div class="part-img mr-30">
                                    <div class="img-box" id="bigPreview">
                                        <img src="assets/images/classic/health supplement/image_10.png" alt="Image" />
                                    </div>

                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-7 col-md-6">
                                <div class="part-txt">
                                    <h2 class="main-product-title">VESTIGE PRIME KRILL OIL</h2>

                                    <ul class="short-details">
                                        <li><span >MRP  ₹1435.00</span>Discount  ₹1250.00</li>
                                        <li>Product Code: <span> 21013</span></li>
                                        <li>PV <span>41.67</span></li>
                                        <li>NET VOLUMES<span>30 softgels</span></li>

                                    </ul>
                                    <h3>Description</h3>
                                    <p class="dscr">Antarctic Krill, which is the source of Krill Oil, is comprised of three major components - 
                                    Omega-3 fatty acids, primarily eicosapentaenoic acid (EPA) and docosahexaenoic acid (DHA) attached to phospholipids and astaxanthin. 
                                    Most of the Omega-3 fatty acids in Krill Oil are attached to phospholipids, making them more bioavailable to the body, and allowing 
                                    Omega-3 to be easily absorbed by target organs such as the heart, brain, and liver, where they exert their beneficial effects. 
                                    VESTIGE PRIME Krill Oil is extracted by a proprietary technology, called Multi Stage Oil (MSO®) extraction process that assures 
                                    high-quality oil which has superior stability, quality, and organoleptic properties.</p>

                                    <p>
                                        Recommended Usage: One to two softgel capsules daily with food.
                                    </p>
                                    <form>
                                    </form>
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

export default KRILL_OIL