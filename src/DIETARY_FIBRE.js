import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function DIETARY_FIBRE() {
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
                                        <img src="assets/images/classic/health supplement/image_20.png" alt="Image" />
                                    </div>

                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-7 col-md-6">
                                <div class="part-txt">
                                    <h2 class="main-product-title">VESTIGE DIETARY FIBRE</h2>

                                    <ul class="short-details">
                                        <li><span >MRP  ₹1000.00</span>Discount  ₹850.00</li>
                                        <li>Product Code: <span> 21032</span></li>
                                        <li>PV <span>28.33</span></li>
                                        <li>NET VOLUMES<span>200 g</span></li>

                                    </ul>
                                    <h3>Description</h3>
                                    <p class="dscr">Vestige Dietary Fibre is a special blend of 3 soluble fibres, Chicory root extract, Maltodextrin and Guar Gum. Soluble fibers attract water and form a gel, which slows down digestion giving a full feeling for long. Chicory root extract contains inulin which is the main source of fibre. It is a low calorie yet high fibre root extract that adds to the daily requirement of fibre to maintain digestive health. Inulin is a prebiotic, which supports the presence of beneficial bacteria in the digestive system. A spoon (5 g) of Vestige Dietary Fibre contains 4 grams of soluble fiber.</p>

                                    <p>
                                    Dosage: Adults & Children (12 years & above)
                                    1 teaspoon per day & gradually increase fibre intake.
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

export default DIETARY_FIBRE