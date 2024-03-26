import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function VESTIGE_PRIME_MULTIVITAMIN() {
    return (
        <div>
            <Header/>
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
                                        <img src="assets/images/classic/health supplement/image_7.png" alt="Image" />
                                    </div>

                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-7 col-md-6">
                                <div class="part-txt">
                                    <h2 class="main-product-title">VESTIGE PRIME MULTI VITA MIN</h2>

                                    <ul class="short-details">
                                        <li><span >MRP  ₹825.00</span> Discount  ₹540.00</li>
                                        <li>Product Code: <span>21035</span></li>
                                        <li>PV <span>23.17</span></li>
                                        <li>NET VOLUMES<span> 60 gummies</span></li>

                                    </ul>
                                    <h3>Description</h3>
                                    <p class="dscr">Perfect for both adults and children alike, fulfil your nutritional needs with Vestige Prime Multi Vita+Min Gummies. It uses a comprehensive blend of vital vitamins and minerals such as Vitamin A, Vitamin C, Vitamin D, Vitamin E, Zinc, Magnesium and more. These essential vitamins and minerals boost physical strength, endurance, immunity and metabolism. The delicious gummies deliver nutrition in a convenient and tasty package while also being easily absorbed by the body. Now carry your nutrition on the go, anywhere, any time.</p>

                                    <p>
                                    Recommended Usage: For adults – Two gummies per day. 
                                    For kids above 5 years – One gummy per day. 
                                    Chew gummy thoroughly before swallowing.
                                    </p>
                                    <form>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default VESTIGE_PRIME_MULTIVITAMIN