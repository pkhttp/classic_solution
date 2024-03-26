import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Contact() {

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

            <div class="contact py-120">
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-xl-4 col-lg-5 col-md-6">
                            <div class="contact-info">
                                <h2 class="title">Contact info</h2>
                                <ul>
                                    <li>
                                        <div class="part-icon">
                                            <span><i class="fa-solid fa-phone-flip"></i></span>
                                        </div>
                                        <div class="part-txt">
                                            <a href="mailto:Support@gmail.com">pandharpurmi@gmail.com</a>
                                            <a href="tel:+1212-683-9756">+91 742-099-8608</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="part-icon">
                                            <span><i class="fa-solid fa-location-dot"></i></span>
                                        </div>
                                        <div class="part-txt">
                                            <span>Lad nagar, behind Kandre's Fitness Hub, Isbavi, Pandharpur, Maharashtra 413304</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="part-icon">
                                            <span><i class="fa-solid fa-clock"></i></span>
                                        </div>
                                        <div class="part-txt">
                                            <span>Mon - Sat : 8:00am - 5:00pm</span>
                                            <span>Sunday: Closed</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
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
                    </div>
                    <div class="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10125.01371262565!2d75.30545811010865!3d17.68006083457984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc4173e86433fcf%3A0xc7db0353a060c8d2!2sVESTIGE%20BO%20DLCP%20Pandharpur!5e0!3m2!1sen!2sin!4v1703689303965!5m2!1sen!2sin" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>



            {/* <div class="features" id="feature">
                <div class="container">
                    <div class="panel panel-shadow px-0">
                        <div class="custom-row">
                            <div class="custom-col">
                                <div class="single-feature">
                                    <div class="part-icon">
                                        <span><i class="flaticon-money-saving"></i></span>
                                    </div>
                                    <div class="part-txt">
                                        <h4>Free Delivery</h4>
                                        <p>For all order over $99</p>
                                    </div>
                                </div>
                            </div>
                            <div class="custom-col">
                                <div class="single-feature">
                                    <div class="part-icon">
                                        <span><i class="flaticon-dollar"></i></span>
                                    </div>
                                    <div class="part-txt">
                                        <h4>30 Days Return</h4>
                                        <p>If goods have Problems</p>
                                    </div>
                                </div>
                            </div>
                            <div class="custom-col">
                                <div class="single-feature">
                                    <div class="part-icon">
                                        <span><i class="flaticon-credit-card"></i></span>
                                    </div>
                                    <div class="part-txt">
                                        <h4>Secure Payment</h4>
                                        <p>100% secure payment</p>
                                    </div>
                                </div>
                            </div>
                            <div class="custom-col">
                                <div class="single-feature">
                                    <div class="part-icon">
                                        <span><i class="flaticon-call-center"></i></span>
                                    </div>
                                    <div class="part-txt">
                                        <h4>24/7 Support</h4>
                                        <p>Dedicated support</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


            <Footer />

        </div>
    )
}


export default Contact

