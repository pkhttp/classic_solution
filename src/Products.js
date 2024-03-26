import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Products() {
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



            <div class="featured-product py-25">
                <div class="container">
                    <div class="panel">
                        <div class="panel-header">
                            <div class="row">
                                <div class="col-8">
                                    <h2 class="title">Category products</h2>
                                </div>
                                <div class="col-4">
                                    <div class="text-end">
                                        <a href="shop.html" class="explore-section">View more</a>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div class="panel-body">
                            <div class="product-custom-row">
                                <div class="custom-col">
                                    <div class="single-product-card">
                                        <div class="part-img">
                                            <a href="/healthSupplement"><img src="assets/images/classic/health supplement/image_24.png" alt="Product" /></a>
                                            <div class="cart-option cart-option-bottom">
                                                <ul>
                                                   
                                                    <li>
                                                        <a href="/healthSupplement" class="view-product">
                                                            <i class="fa-light fa-eye"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="part-txt">
                                            <h4 class="product-name"><a href="/healthSupplement">HEALTH SUPPLEMENT</a></h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="custom-col">
                                    <div class="single-product-card">
                                        <div class="part-img">
                                            <a href="/ayurveda"><img src="assets/images/classic/ayurveda/image_36.png" alt="Product" /></a>
                                            <div class="cart-option cart-option-bottom">
                                                <ul>
                                                  
                                                    <li>
                                                        <a href="/ayurveda" class="view-product">
                                                            <i class="fa-light fa-eye"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="part-txt">
                                            <h4 class="product-name"><a href="/ayurveda">AYURVEDA</a>
                                            </h4>
                                           
                                        </div>
                                    </div>
                                </div>
                                <div class="custom-col">
                                    <div class="single-product-card">
                                        <div class="part-img">
                                            <a href="/waterPurifire"><img src="assets/images/classic/water purifier/image_55.png" alt="Product" /></a>
                                            <div class="cart-option cart-option-bottom">
                                                <ul>
                                                  
                                                    <li>
                                                        <a href="/waterPurifire" class="view-product">
                                                            <i class="fa-light fa-eye"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="part-txt">
                                            <h4 class="product-name"><a href="/waterPurifire">WATER PURIFIRE</a></h4>
                                           
                                        </div>
                                    </div>
                                </div>
                                <div class="custom-col">
                                    <div class="single-product-card">
                                        <div class="part-img">
                                            <a href="/airPurifire"><img src="assets/images/classic/air purifier/image_75.png" alt="Product" /></a>
                                            <div class="cart-option cart-option-bottom">
                                                <ul>
                                                  
                                                    <li>
                                                        <a href="/airPurifire" class="view-product">
                                                            <i class="fa-light fa-eye"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="part-txt">
                                            <h4 class="product-name"><a href="/airPurifire">AIR PURIFIER</a>
                                            </h4>
                                           
                                        </div>
                                    </div>
                                </div>
                                <div class="custom-col">
                                    <div class="single-product-card">
                                        <div class="part-img">
                                            <a href="/healthFood"><img src="assets/images/classic/health food/image_86.png" alt="Product" /></a>
                                            <div class="cart-option cart-option-bottom">
                                                <ul>
                                                  
                                                    <li>
                                                        <a href="/healthFood" class="view-product">
                                                            <i class="fa-light fa-eye"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="part-txt">
                                            <h4 class="product-name"><a href="/healthFood">HEALTH FOOD</a></h4>
                                            
                                        </div>
                                    </div>
                                </div>
                              

                            </div>
                        </div>





                        
                        <div class="panel-body">
                            <div class="product-custom-row">
                                <div class="custom-col">
                                    <div class="single-product-card">
                                        <div class="part-img">
                                            <a href="/womenHygein"><img src="assets/images/classic/women hygiene/image_90.png" alt="Product" /></a>
                                            <div class="cart-option cart-option-bottom">
                                                <ul>
                                                   
                                                    <li>
                                                        <a href="/womenHygein" class="view-product">
                                                            <i class="fa-light fa-eye"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="part-txt">
                                            <h4 class="product-name"><a href="/womenHygein">WOMEN HYGEIN</a></h4>
                                           
                                        </div>
                                    </div>
                                </div>
                                <div class="custom-col">
                                    <div class="single-product-card">
                                        <div class="part-img">
                                            <a href="/oralCare"><img src="assets/images/classic/oral care/image_93.png" alt="Product" /></a>
                                            <div class="cart-option cart-option-bottom">
                                                <ul>
                                                  
                                                    <li>
                                                        <a href="/oralCare" class="view-product">
                                                            <i class="fa-light fa-eye"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="part-txt">
                                            <h4 class="product-name"><a href="/oralCare">ORAL CARE</a>
                                            </h4>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="custom-col">
                                    <div class="single-product-card">
                                        <div class="part-img">
                                            <a href="/personalCare"><img src="assets/images/classic/personal care/image_124.png" alt="Product" /></a>
                                            <div class="cart-option cart-option-bottom">
                                                <ul>
                                                  
                                                    <li>
                                                        <a href="/personalCare" class="view-product">
                                                            <i class="fa-light fa-eye"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="part-txt">
                                            <h4 class="product-name"><a href="/personalCare">PERSONAL CARE</a></h4>
                                           
                                        </div>
                                    </div>
                                </div>
                                <div class="custom-col">
                                    <div class="single-product-card">
                                        <div class="part-img">
                                            <a href="/agriProducts"><img src="assets/images/classic/agri product/image_63.png" alt="Product" /></a>
                                            <div class="cart-option cart-option-bottom">
                                                <ul>
                                                  
                                                    <li>
                                                        <a href="/agriProducts" class="view-product">
                                                            <i class="fa-light fa-eye"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="part-txt">
                                            <h4 class="product-name"><a href="/agriProducts">AGRI PRODUCTS</a>
                                            </h4>
                                           
                                        </div>
                                    </div>
                                </div>
                                <div class="custom-col">
                                    <div class="single-product-card">
                                        <div class="part-img">
                                            <a href="/machDrive"><img src="assets/images/classic/mech drive/image_73.png" alt="Product" /></a>
                                            <div class="cart-option cart-option-bottom">
                                                <ul>
                                                  
                                                    <li>
                                                        <a href="/machDrive" class="view-product">
                                                            <i class="fa-light fa-eye"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="part-txt">
                                            <h4 class="product-name"><a href="/machDrive">MACH-DRIVE</a></h4>
                                            
                                        </div>
                                    </div>
                                </div>
                              

                            </div>
                        </div>
                    </div>
                </div>
            </div>






            <Footer />
        </div>)
}

export default Products