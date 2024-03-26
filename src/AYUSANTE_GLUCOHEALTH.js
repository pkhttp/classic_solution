
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function AYUSANTE_GLUCOHEALTH() {
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
                                        <img src="assets/images/classic/ayurveda/image_51.png" alt="Image" />
                                    </div>

                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-7 col-md-6">
                                <div class="part-txt">
                                    <h2 class="main-product-title">AYUSANTE GLUCOHEALTH</h2>

                                    <ul class="short-details">
                           
                                        <li><span >MRP  ₹795.00 </span>Discount  ₹680.00 </li>  

                                        <li>Product Code: <span>20010</span></li>
                                        <li>PV <span>22.67</span></li>
                                        <li>NET CONTENT<span>60 capsules</span></li>

                                    </ul>
                                    <h3>Description</h3>
                                    <p class="dscr"> A unique proprietary formulation of Emblica offcinalis, Curcuma longa, Cinnamomum zeylanicum, Plerocarpus marsupium, Tinospora cordifolia, Casearia tomentosa and Camellia sinesis offers a comprehensive natural alternative for maintenance of normal glycemic health to support and manage hyperglycemia. The phyto-ingredients of Ayusante Gluco Health are well known for regulating appetite, lowering blood glucose levels, insulin resistance and optimising insulin secretion. Gluco Health offers a comprehensive alternative for the maintenance of normal glycemic health, naturally!</p>
                                    <p>
                                    Dosage: Two capsules thrice daily or as advised by a physician.
                                    </p>
                                    <p>
                                    Indications: Use for Madhumeh (Diabetes).
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

export default AYUSANTE_GLUCOHEALTH 
