
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function AYUSANTE_PROSTATE_CARE() {
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
                                        <img src="assets/images/classic/ayurveda/image_47.png" alt="Image" />
                                    </div>

                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-7 col-md-6">
                                <div class="part-txt">
                                    <h2 class="main-product-title">AYUSANTE PROSTATE CARE </h2>

                                    <ul class="short-details">
                                  
                                    <li><span >MRP  ₹525.00 </span>Discount  ₹450.00 </li>  

                                        <li>Product Code: <span>20016</span></li>
                                        <li>PV <span>15.00</span></li>
                                        <li>NET CONTENT<span>60 capsules</span></li>

                                    </ul>
                                    <h3>Description</h3>
                                    <p class="dscr"> The prostate is a gland inside the male body which plays an important role in reproduction. As men age, the gland grows with the body and eventually causes a condition called enlarged prostate which heavily impacts the quality of life. Ayusante Prostate Care is a unique combination of Boerhaavia diffusa, Crataeva nurvala, Asparagus racemosus, Bauhinia veriegata, Asphaltum punjabinum, Tribulus terrestris, Clitoria ternatea and Areca catechu which helps in supporting prostate health. These ingredients help in preventing prostate enlargement by balancing cell production and scavenging free radicals. It also relieves symptoms of enlarged prostate by relieving inflammation and supporting healthy flow of urine and thus helps elderly men retain their comfort in old age. One to two capsules twice a day or as advised by a physician.</p>

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

export default AYUSANTE_PROSTATE_CARE 
