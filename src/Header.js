import React from 'react'



function Header() {

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


            <body>


                <div class="product-quick-view-panel">
                    <div class="img">
                        <img class="quick-view-image" src="assets/images/index.html" alt="image" />
                    </div>
                </div>


                <div class="header-cart-wrap" id="headerCartWrap">
                    <div class="cart-list">
                        <div class="title">
                            <h3>Shopping Cart</h3>
                            <button class="cart-close"><i class="fa-regular fa-xmark"></i></button>
                        </div>
                        <ul>
                            <li>
                                <a href="shop-details.html">
                                    <div class="part-img">
                                        <img src="assets/images/feat-product-3.jpg" alt="Image" />
                                    </div>
                                    <div class="part-txt">
                                        <span class="name">Diamond wedding ring</span>
                                        <span>1 <i class="fa-regular fa-xmark"></i> $5.00</span>
                                    </div>
                                </a>
                                <button class="delete-btn"><i class="fa-regular fa-trash-can"></i></button>
                            </li>
                            <li>
                                <a href="shop-details.html">
                                    <div class="part-img">
                                        <img src="assets/images/feat-product-2.jpg" alt="Image" />
                                    </div>
                                    <div class="part-txt">
                                        <span class="name">Living Summer Chair</span>
                                        <span>1 <i class="fa-regular fa-xmark"></i> $5.00</span>
                                    </div>
                                </a>
                                <button class="delete-btn"><i class="fa-regular fa-trash-can"></i></button>
                            </li>
                            <li>
                                <a href="shop-details.html">
                                    <div class="part-img">
                                        <img src="assets/images/feat-product-10.jpg" alt="Image" />
                                    </div>
                                    <div class="part-txt">
                                        <span class="name">Wireless Headphone</span>
                                        <span>1 <i class="fa-regular fa-xmark"></i> $5.00</span>
                                    </div>
                                </a>
                                <button class="delete-btn"><i class="fa-regular fa-trash-can"></i></button>
                            </li>
                        </ul>
                        <div class="total">
                            <p>Subtotal: <span>$15:00</span></p>
                        </div>
                        <div class="btn-box">
                            <a href="#" class="def-btn">View Cart</a>
                            <a href="#" class="def-btn">Checkout</a>
                        </div>
                    </div>
                </div>


                <div class="header-cart-wrap" id="headerWishWrap">
                    <div class="cart-list">
                        <div class="title">
                            <h3>Wish List</h3>
                            <button class="wish-close"><i class="fa-regular fa-xmark"></i></button>
                        </div>
                        <ul>
                            <li>
                                <a href="shop-details.html">
                                    <div class="part-img">
                                        <img src="assets/images/feat-product-3.jpg" alt="Image" />
                                    </div>
                                    <div class="part-txt">
                                        <span class="name">Diamond wedding ring</span>
                                        <span>1 <i class="fa-regular fa-xmark"></i> $5.00</span>
                                    </div>
                                </a>
                                <button class="delete-btn"><i class="fa-regular fa-trash-can"></i></button>
                            </li>
                            <li>
                                <a href="shop-details.html">
                                    <div class="part-img">
                                        <img src="assets/images/feat-product-2.jpg" alt="Image" />
                                    </div>
                                    <div class="part-txt">
                                        <span class="name">Living Summer Chair</span>
                                        <span>1 <i class="fa-regular fa-xmark"></i> $5.00</span>
                                    </div>
                                </a>
                                <button class="delete-btn"><i class="fa-regular fa-trash-can"></i></button>
                            </li>
                            <li>
                                <a href="shop-details.html">
                                    <div class="part-img">
                                        <img src="assets/images/feat-product-10.jpg" alt="Image" />
                                    </div>
                                    <div class="part-txt">
                                        <span class="name">Wireless Headphone</span>
                                        <span>1 <i class="fa-regular fa-xmark"></i> $5.00</span>
                                    </div>
                                </a>
                                <button class="delete-btn"><i class="fa-regular fa-trash-can"></i></button>
                            </li>
                        </ul>
                        <div class="total">
                            <p>Subtotal: <span>$15:00</span></p>
                        </div>
                        <div class="btn-box">
                            <a href="#" class="def-btn">View Wish List</a>
                            <a href="#" class="def-btn">Add All To Cart</a>
                        </div>
                    </div>
                </div>


                <div class="header">


                    <div class="container">
                        <div class="row justify-content-between align-items-center g-md-4 g-sm-0">
                            <div class="col-xxl-3 col-xl-2 col-lg-2 col-sm-3 col-6">
                                <div class="logo">
                                    <a href="/">
                                        <img src="assets/images/LOGOO.png" alt="logonew" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>






                <div class="mobile-menu d-lg-none d-block">
                    <div class="mobile-category-list">
                        <button class="mobile-menu-close-btn"><i class="fa-solid fa-xmark-large"></i></button>

                        <ul class="category-nav">

                            <li class="category-item">
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
                            <li class="category-item">
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
                            <li class="category-item">
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






                    <div class="m-main-menu">
                        <button class="mobile-menu-close-btn"><i class="fa-solid fa-xmark-large"></i></button>
                        <ul class="menu-bar">
                            <li class="logo">
                                <img src="assets/images/LOGOO.png" alt="Logo" />
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a href="/About" class="nav-link">About</a>
                            </li>
                            <li class="nav-item">
                                <a href="/Products" class="nav-link">Product</a>
                            </li>
                            <li class="nav-item">
                                <a href="/Blog" class="nav-link">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a href="/Contact" class="nav-link">Contact</a>
                            </li>

                        </ul>
                    </div>
                    <ul class="mobile-nav">
                        <li><a role="button" data-target="mobile-category-list" class="m-nav-link"><i class="fa-light fa-grid-2"></i></a></li>
                        <li><a href="http://wa.me/+917420998608" class="m-nav-link"><i class="fa-light fa-comment"></i></a></li>
                        <li><a href="/" class="center"><i class="fa-light fa-house"></i></a></li>
                        <li><a href="/Contact" class="m-nav-link"><i class="fa-light fa-phone"></i></a></li>
                        <li><a role="button" data-target="m-main-menu" class="m-nav-link"><i class="fa-light fa-ellipsis-stroke"></i></a></li>
                    </ul>
                </div>



            </body>

        </div>


    )
}

export default Header