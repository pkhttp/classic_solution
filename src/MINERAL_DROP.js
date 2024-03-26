import React from "react"
import Header from "./Header"
import Footer from "./Footer"

function MINERAL_DROP(){
    return(
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
                                <img src="assets/images/classic/health supplement/image_1.png" alt="Image" />
                            </div>

                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-7 col-md-6">
                        <div class="part-txt">
                            <h2 class="main-product-title">VESTIGE PRIME CONCENTRATED MINERAL DROPS</h2>

                            <ul class="short-details">
                                <li><span >MRP  ₹1100.00</span> Discount  ₹920.00</li>
                                <li>Product Code: <span>21048</span></li>
                                <li>PV <span>30.67</span></li>
                                <li>NET VOLUMES<span> 60 ml</span></li>

                            </ul>
                            <h3>Description</h3>
                            <p class="dscr">VESTIGE PRIME Concentrated Mineral Drops
                                (CMD) - a natural sea mineral supplement extracted from The Great Salt Lake of Utah. It contains the
                                full spectrum of the required minerals restored in purified water to fulfill the ionic trace mineral
                                necessary for the human body. The minerals in CMD are highly bioavailable, which results in faster
                                absorption. CMD is a result of 50 times more concentrated and trace minerals. It gives you the
                                essential mineral balance you need to keep your body functioning at its best. CMD helps in
                                converting acidic pH into alkaline. An alkaline environment help neutralises the acid in the body,
                                improves hydration, enhances digestion, and supports overall health and well-being.</p>

                            <p>
                                Dosage: 0.45 ml (Approx. 7 drops) mix with 1 litre of water. Use three times a day.
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

export default MINERAL_DROP