import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function RINSE_OFF_CONDITIONER() {
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
                                        <img src="assets/images/classic/personal care/image_100.png" alt="Image" />
                                    </div>

                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-7 col-md-6">
                                <div class="part-txt">
                                    <h2 class="main-product-title">ASSURE INTENSIVE CARE RINSE OFF CONDITIONER</h2>

                                    <ul class="short-details">
                                        <li><span >MRP  ₹280.00</span>Discount  ₹240</li>
                                        <li>Product Code: <span>23095</span></li>
                                        <li>PV <span>8.00</span></li>
                                        <li>NET VOLUMES<span>100 ml</span></li>

                                    </ul>
                                    <h3>Description</h3>
                                    <p class="dscr">The Assure Intensive Care Rinse Off Conditioner is specially designed to detangle and condition for smoother lustrous looking healthy hair. It has the power of 7 oils like amla, almond, olive, sunflower, jojoba, rapeseed, and soy. Comes with the goodness of Vitamin E, it is paraben and silicone free as well. It repairs brittle hair, reduces breakage, restores hair health, enhances shine, unlocks moisture, works on split-ends, and controls hair fall. Use it after every hair wash to get better results. Treat your hair better with Assure Intensive Care Rinse Off Conditioner.</p>

                                    {/* <p>
                                    Recommended Usage: One capsule daily.
                                    </p> */}
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

export default RINSE_OFF_CONDITIONER