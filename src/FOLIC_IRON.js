import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function FOLIC_IRON() {
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
                                        <img src="assets/images/classic/health supplement/image_34.png" alt="Image" />
                                    </div>

                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-7 col-md-6">
                                <div class="part-txt">
                                    <h2 class="main-product-title">VESTIGE FOLIC & IRON PLUS</h2>

                                    <ul class="short-details">
                                        <li><span >Discount  ₹280.00</span>Discount  ₹240.00</li>
                                        <li>Product Code: <span>  21006</span></li>
                                        <li>PV <span>8.00</span></li>
                                        <li>NET VOLUMES<span>60 capsules</span></li>

                                    </ul>
                                    <h3>Description</h3>
                                    <p class="dscr">Folic & Iron Plus combination contains a mineral (iron) along with vitamins (Vitamin C, Vitamin B12 and Folic acid). It is useful to prevent lack of these nutrients which may occur in certain health conditions (iron deficiency, pregnancy, poor diet etc). It also plays an important role in growth and development of the body and helps reduce tiredness and fatigue. Each capsule contains Ferrous Fumerate 250 mg, Folic Acid 1 mg, Vitamin C (coated) 75 mg, Vitamin B12 15 mcg, Zinc Sulphate Heptahydrate 100 mg equivalent to elemental zinc 22.7 mg.</p>

                                    <p>
                                    Dosage: One or two capsules daily for adults and children above 12 years.
                                    </p>

                                    <p>
                                    Appropriate overages added.
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

export default FOLIC_IRON