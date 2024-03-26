import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Product_view() {
  return (
    <div>
<Header/>

<div class="header">
        <div class="menu-bar">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xxl-3 col-xl-3 col-lg-4">
                        <div class="all-department">
                            <span>health-supplement_prod-4</span>
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
                    <div class="col-lg-2">
                        <li class="live-chat d-xl-flex d-none align-items-center">
                            <div class="icon">
                                <img src="assets/images/call-icon.png" alt="call" />
                            </div>
                            <div class="txt">
                                <span class="d-block">Contact :</span>
                                <a class="d-block" href="tel:+997509153">+917420998608</a>
                            </div>
                        </li>
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
                                <img src="assets/images/classic/health supplement/image_9.png" alt="Image" />
                            </div>

                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-7 col-md-6">
                        <div class="part-txt">
                            <h2 class="main-product-title">VESTIGE PRIME COMBIOTICS</h2>

                            <ul class="short-details">
                                <li><span>MRP  ₹525.00</span>MRP  ₹570.00</li>
                                <li>Product Code: <span>21020A</span></li>
                                <li>PV <span>19</span></li>
                                <li>NET VOLUMES<span>30 capsules</span></li>

                            </ul>
                            <h3>Description</h3>
                            <p class="dscr">Vestige Prime Combiotics is a unique
                                product in a capsule-in-capsule form with a mixture of multivitamins and minerals along with
                                prebiotics and probiotics, which not only takes care of the bodys nutritional requirements but
                                also supports a healthy digestive system.</p>

                            <p>
                                Recommended Usage: One capsule a day after meals.
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

export default Product_view