import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function MANGO_SHAKE() {
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
                                        <img src="assets/images/classic/health supplement/image_23.png" alt="Image" />
                                    </div>

                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-7 col-md-6">
                                <div class="part-txt">
                                    <h2 class="main-product-title">VESTIGE VESLIM SHAKE MANGO FLAVOUR 500 G</h2>

                                    <ul class="short-details">
                                        <li><span >MRP  ₹2175.00</span>Discount  ₹1850.00</li>
                                        <li>Product Code: <span> 21040A</span></li>
                                        <li>PV <span>61.67</span></li>
                                        <li>NET VOLUMES<span>500 g</span></li>

                                    </ul>
                                    <h3>Description</h3>
                                    <p class="dscr">A shake that is healthy and will help you manage your weight. Vestige Veslim Shake has now been enhanced with Mango flavour. A shake with PDCAAS value #1, which means it has the best quality protein. It comes with 20 essential vitamins and minerals to help you maintain a healthy body. It contains low GI, which means even people who are restricted from sugary items can also consume this. It is infused with 3.35 g of fibre that helps in keeping your gut healthy. It has no trans-fat that helps your heart to stay healthy. It comprises 9 g of protein that helps in keeping you fuller for a longer period of time.</p>

                                    <p>
                                    Dosage: Simply take 3 scoops of Vestige Veslim Shake (25 g) in a shaker, and add 300 ml of either skimmed milk or water. Shake well and sip the goodness of your favourite flavour.
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

export default MANGO_SHAKE