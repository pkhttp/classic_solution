import React from 'react'
import Header from './Header'
import Footer from './Footer'

function ProdCategory() {
    return (
        <div>
            <Header/>

           

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
                            <div class="col-lg-2">
                                <li class="live-chat d-xl-flex d-none align-items-center">
                                    <div class="icon">
                                        <img src="assets/images/call-icon.png" alt="call" />
                                    </div>
                                    <div class="txt">
                                        <span class="d-block">Contact :</span>
                                        <a class="d-block" href="tel:+997509153">+997 509 153</a>
                                    </div>
                                </li>
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
                                            <a href="prodView"><img src="assets/images/feat-product-1.jpg" alt="Product" /></a>
                                            <div class="cart-option cart-option-bottom">
                                                <ul>

                                                    <li>
                                                        <a href="prodView" class="view-product">
                                                            <i class="fa-light fa-eye"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="part-txt">
                                            <h4 class="product-name"><a href="prodView">Category name</a></h4>
                                            <p class="price"><span>$96.00</span>$75.00</p>
                                            <div class="star">
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="custom-col">
                                    <div class="single-product-card">
                                        <div class="part-img">
                                            <a href="prodView"><img src="assets/images/feat-product-2.jpg" alt="Product" /></a>
                                            <div class="cart-option cart-option-bottom">
                                                <ul>

                                                    <li>
                                                        <a href="prodView" class="view-product">
                                                            <i class="fa-light fa-eye"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="part-txt">
                                            <h4 class="product-name"><a href="prodView">Living Summer Chair</a>
                                            </h4>
                                            <p class="price"><span>$96.00</span>$75.00</p>
                                            <div class="star">
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="custom-col">
                                    <div class="single-product-card">
                                        <div class="part-img">
                                            <a href="prodView"><img src="assets/images/feat-product-3.jpg" alt="Product" /></a>
                                            <div class="cart-option cart-option-bottom">
                                                <ul>

                                                    <li>
                                                        <a href="prodView" class="view-product">
                                                            <i class="fa-light fa-eye"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="part-txt">
                                            <h4 class="product-name"><a href="prodView">category Name</a></h4>
                                            <p class="price"><span>$96.00</span>$75.00</p>
                                            <div class="star">
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="custom-col">
                                    <div class="single-product-card">
                                        <div class="part-img">
                                            <a href="prodView"><img src="assets/images/feat-product-4.jpg" alt="Product" /></a>
                                            <div class="cart-option cart-option-bottom">
                                                <ul>

                                                    <li>
                                                        <a href="prodView" class="view-product">
                                                            <i class="fa-light fa-eye"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="part-txt">
                                            <h4 class="product-name"><a href="prodView">Travel handle totte bags</a>
                                            </h4>
                                            <p class="price"><span>$96.00</span>$75.00</p>
                                            <div class="star">
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="custom-col">
                                    <div class="single-product-card">
                                        <div class="part-img">
                                            <a href="prodView"><img src="assets/images/feat-product-5.jpg" alt="Product" /></a>
                                            <div class="cart-option cart-option-bottom">
                                                <ul>

                                                    <li>
                                                        <a href="prodView" class="view-product">
                                                            <i class="fa-light fa-eye"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="part-txt">
                                            <h4 class="product-name"><a href="prodView">Short-Sleeve T-Shirt</a></h4>
                                            <p class="price"><span>$96.00</span>$75.00</p>
                                            <div class="star">
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp rated"></i>
                                                <i class="fa-solid fa-star-sharp"></i>
                                            </div>
                                        </div>
                                    </div>
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

export default ProdCategory