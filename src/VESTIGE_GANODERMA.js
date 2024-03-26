import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function VESTIGE_GANODERMA() {
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
                                        <img src="assets/images/classic/ayurveda/image_44.png" alt="Image" />
                                    </div>

                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-7 col-md-6">
                                <div class="part-txt">
                                    <h2 class="main-product-title">VESTIGE_GANODERMA </h2>

                                    <ul class="short-details">
                                   
                                    <li><span >MRP  ₹920.00 </span>Discount  ₹785.00 </li>  
                                        
                                        <li>Product Code: <span>20007</span></li>
                                        <li>PV <span>26.17</span></li>
                                        <li>NET CONTENT<span>90 capsules</span></li>

                                    </ul>
                                    <h3>Description</h3>
                                    <p class="dscr">Ganoderma Lucidum is a type of mushroom that contains effective antioxidants, which help in strengthening the immune system and detoxifying the body. It has stress-relieving properties that refresh the body and calm the nerves. It promotes stamina and endurance to fight fatigue and illnesses. It also helps to improve blood circulation, boosts immunity and energises the body. As a detoxifier it helps to eliminate toxins from the body accumulated through intake of various medications and helps to maintain the body balance. It also helps to maintain stability and ensure balance between internal and external body conditions. It enhances the overall wellness of the human body as it is a rich source of essential vitamins and nutrients. Each capsule contains Ganoderma lucidum Extract Powder (Chatrakh) 425 mg.</p>

                                    <p>
                                    Dosage: One capsule three times daily.
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

export default VESTIGE_GANODERMA 