import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function AIR_PURIFIER_DETAIL() {
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
                                        <img src="assets/images/classic/air purifier/image_75.png" alt="Image" />
                                    </div>

                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-7 col-md-6">
                                <div class="part-txt">
                                    <h2 class="main-product-title">Air Purifier</h2>

                                    <ul class="short-details">
                                        <li><span >MRP  ₹19,500.00</span>Discount  ₹18,500</li>
                                        <li>Product Code: <span> 27011</span></li>
                                        <li>PV <span>616.67</span></li>
                                        <li>NET VOLUMES<span>1 Unit</span></li>

                                    </ul>
                                    <h3>Description</h3>
                                    <p class="dscr">Indoor air can be 5 to 10 times more polluted than the air outside your house We spend more time indoors than outdoors and we breathe more volume of air indoors than we do outdoors everyday Current air pollution level is equivalent to smoking 10 to 20 cigarettes a day Poor indoor air quality at home causes headache, fatigue, shortness of breath, sinus congestion, coughing, sneezing, dizziness and nausea. There are more allergic elements Indoor than Outdoor.</p>

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

export default AIR_PURIFIER_DETAIL