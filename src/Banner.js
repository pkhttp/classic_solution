import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Banner() {
      function sendwhatsapp() {
        var phonenumber = "+917420998608";

        var name = document.querySelector('.name').value;
        var email = document.querySelector('.email').value;
        var message = document.querySelector('.message').value;

        var url = "https://wa.me/" + phonenumber + "?text=" +
            "*name : * " + name + "%0a" +
            "*email : * " + email + "%0a" +
            "*message : * " + message + "%0a%0a";

        window.open(url, '_blank').focus();
    }
    return (
        <div>

            
    <Header/>
    

    <div class="header">
  
    <div class="menu-bar">
            <div class="container">

                <div class="row align-items-center">  
                
                         
                    <div class="col-xxl-3 col-xl-3 col-lg-4">

                        <div class="all-department">
                            
                            <span>all Departments</span>
                            <button class="category-list-close"><i class="fa-light fa-bars"></i></button>
                            <div class="banner">
                                <div class="category-list">
                                    <ul>
                                        <li class="category-item has-sub">
                                            <a href="/healthSupplement">
                                                <div class="icon">
                                                    <span><i class="fa-regular fa-pills"></i></span>
                                                </div>
                                                <span>HEALTH SUPPLEMENT</span>
                                            </a>
                                           
                                        </li>
                                        <li class="category-item">
                                            <a href="/ayurveda">
                                                <div class="icon">
                                                    <span><i class="fa-regular fa-leafy-green"></i></span>
                                                </div>
                                                <span>AYURVEDA</span>
                                            </a>
                                        </li>
                                        <li class="category-item">
                                            <a href="/waterPurifire">
                                                <div class="icon">
                                                    <span><i class="fa-regular fa-hand-holding-droplet"></i></span>
                                                </div>
                                                <span>WATER PURIFIRE</span>
                                            </a>
                                        </li>
                                        <li class="category-item">
                                            <a href="/airPurifire">
                                                <div class="icon">
                                                    <span><i class="fa-solid fa-wind"></i></span>
                                                </div>
                                                <span>AIR PURIFIER</span>
                                            </a>
                                        </li>
                                        <li class="category-item has-sub">
                                            <a href="/healthFood">
                                                <div class="icon">
                                                    <span><i class="fa-regular fa-salad"></i></span>
                                                </div>
                                                <span>HEALTH FOOD</span>
                                            </a>
                                          
                                        </li>
                                        <li class="category-item">
                                            <a href="/womenHygein">
                                                <div class="icon">
                                                    <span><i class="fa-solid fa-person-dress"></i></span>
                                                </div>
                                                <span>WOMEN HYGEIN</span>
                                            </a>
                                        </li>
                                        <li class="category-item has-sub">
                                            <a href="/oralCare">
                                                <div class="icon">
                                                    <span><i class="fa-solid fa-tooth"></i></span>
                                                </div>
                                                <span>ORAL CARE</span>
                                            </a>
                                          
                                        </li>
                                        <li class="category-item">
                                            <a href="/personalCare">
                                                <div class="icon">
                                                    <span><i class="fa-solid fa-bottle-droplet"></i></span>
                                                </div>
                                                <span>PERSONAL CARE</span>
                                            </a>
                                        </li>
                                        <li class="category-item">
                                            <a href="/agriProducts">
                                                <div class="icon">
                                                    <span><i class="fa-solid fa-tractor"></i></span>
                                                </div>
                                                <span>AGRI PRODUCTS</span>
                                            </a>
                                        </li>
                                        <li class="category-item">
                                            <a href="/machDrive">
                                                <div class="icon">
                                                    <span><i class="fa-solid fa-oil-can-drip"></i></span>
                                                </div>
                                                <span>MACH-DRIVE</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
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
                    {/* <div class="col-lg-2">
                        <div class="account-link">
                            <a href="register.html">Register</a>
                            <span>/</span>
                            <a href="register.html">Sign in</a>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
        </div>


    <div class="banner">
        <div class="container">
            <div class="row">
                <div class="col-xl-3 col-lg-2 category-col">

                </div>
                <div class="col-xl-6 col-lg-8">
                    <div class="slider-area">
                        <div class="slide-1">
                            <div class="banner-txt">
                             <h6></h6>
                                <h1>New Products</h1>
                                <p></p>
                                <div class="price"><span></span> <span></span></div>
                                <a href="/Products" class="def-btn">buy now</a>
                            </div>
                        </div>
                        <div class="slide-2">
                            <div class="banner-txt">
                                <h6></h6>
                                <h1>New Products</h1>
                                <p></p>
                                <div class="price"><span></span> <span></span></div>
                                <a href="/Products" class="def-btn">buy now</a>
                            </div>
                        </div>
                        <div class="slide-3">
                            <div class="banner-txt">
                            <h6></h6>
                                <h1>New Products</h1>
                                <p></p>
                                <div class="price"><span></span> <span></span></div>
                                <a href="/Products" class="def-btn">buy now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4">
                    <div class="sidebar-area">
                        <div class="best-selling-panel">
                            <div class="panel-header">
                                <h4>Latest Product</h4>
                            </div>
                            <div class="panel-body">
                                <div class="product-slider-1">
                                    <div class="single-product-slider">
                                        <div class="part-img">
                                            <a href="/machDrive"><img src="assets/images/classic/mech drive/image_73.png" alt="Product"/></a>
                                        </div>
                                        <div class="part-txt">
                                           
                                            <h4 class="product-name"><a href="/machDrive">MACH-DRIVE</a></h4>
                                        </div>
                                    </div>
                                    <div class="single-product-slider">
                                        <div class="part-img">
                                            <a href="/agriProducts"><img src="assets/images/classic/agri product/image_63.png" alt="Product"/></a>
                                        </div>
                                        <div class="part-txt">
                                           
                                            <h4 class="product-name"><a href="/agriProducts">AGRI PRODUCTS</a></h4>
                                        </div>
                                    </div>
                                    <div class="single-product-slider">
                                        <div class="part-img">
                                            <a href="/healthSupplement"><img src="assets/images/classic/health supplement/image_24.png" alt="Product"/></a>
                                        </div>
                                        <div class="part-txt">
                                           
                                            <h4 class="product-name"><a href="/healthSupplement">HEALTH SUPPLEMENT</a></h4>
                                        </div>
                                    </div>
                                    <div class="single-product-slider">
                                        <div class="part-img">
                                            <a href="/healthFood"><img src="assets/images/classic/health food/image_86.png" alt="Product"/></a>
                                        </div>
                                        <div class="part-txt">
                                           
                                            <h4 class="product-name"><a href="/healthFood">HEALTH FOOD</a></h4>
                                        </div>
                                    </div>
                                    <div class="single-product-slider">
                                        <div class="part-img">
                                            <a href="/womenHygein"><img src="assets/images/classic/women hygiene/image_90.png" alt="Product"/></a>
                                        </div>
                                        <div class="part-txt">
                                           
                                            <h4 class="product-name"><a href="/womenHygein">WOMEN HYGEIN</a></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>





    <div class="about pt-120 pb-60">
                <div class="container">
                   
                    <div class="main-txt">
                        <div class="row justify-content-center">
                            <div class="col-xxl-6 col-xl-7">
                                <h2 class="about-page-title text-center">Life is Hard Enough Already. Let us Make it a Much More Easier.​</h2>
                            </div>
                        </div>



                        <div class="why-choose">
                            <div class="row g-4 justify-content-between">
                                <div class="col-xl-6 col-lg-7">
                                    <div class="part-txt">
                                        <h2 class="part-title">Vestige Store (Est. 2019)</h2>
                                        <p>
                                            We started our firm in Vestige since the product quality and performance were excellent. We began with utilizing Agri goods for at least a year before expanding to include health supplements, personal care products, and health food products. The products were good and worth the price. We had good success in Agri Products.  We also got to know the other consumers in Pandharpur. Vestige items were in high demand in Pandharpur at the time. This gave rise to the concept of Vestige Business. So we took the initiative and set up the Vestige Branch in Pandharpur.
                                        </p>

                                       

                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-5">
                                    <img src="assets/images/store-image.png" alt="Image" />
                                </div>
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
                                        <a href="/Products" class="explore-section">View more</a>
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





                        
                    </div>
                </div>
            </div>



            <div class="contact py-120">
                <div class="container">
                    <div class="row justify-content-between">

                    <div class="col-xxl-7 col-lg-7 col-md-6">
                            <div class="contact-form">
                                <h2 class="title">Leave a Message</h2>
                                <form class="row g-lg-4 g-3">
                                    <div class="col-lg-6 col-md-12 col-sm-6">
                                        <input type="text" placeholder="Name" className='name' />
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-6">
                                        <input type="email" placeholder="Email" className='email'/>
                                    </div>
                                    <div class="col-12">
                                        <textarea placeholder="Your message" className='message'></textarea>
                                    </div>
                                    <div class="col-12">
                                        <button class="def-btn btn-border w-100" type='submit' onClick={sendwhatsapp}>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>

            <div class="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10125.01371262565!2d75.30545811010865!3d17.68006083457984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc4173e86433fcf%3A0xc7db0353a060c8d2!2sVESTIGE%20BO%20DLCP%20Pandharpur!5e0!3m2!1sen!2sin!4v1703689303965!5m2!1sen!2sin" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    </div>
                    </div>
                    </div>
            


<Footer/>
        </div>
    )
}

export default Banner   