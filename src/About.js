import React from 'react'
import Header from './Header'
import Footer from './Footer'

function About() {
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




            <div class="about pt-120 pb-60">
                <div class="container">
                    <div class="main-img">
                        <img src="assets/images/about-img.png" alt="Image" />
                    </div>
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

                                        <p>
                                            While running the store, I saw numerous clients. I Learned that Vestige used to conduct training classes in either Hindi or English. Vestige Distributors in Maharashtra found it challenging to comprehend. They used to demand Marathi pamphlets or Marathi training sessions. In addition, distributors were unable to resolve technological issues.
                                        </p>

                                        <p>
                                            We created this website to assist you with Vestige products and schemes. Also, check for any technical concerns, such as name correction, bank updates, consistency schemes, or the customer's joining process. We are here to make things easier for you. I have more than three years of expertise in the Vestige business. This webpage is where I share everything of my experience.
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







            {/* <div class="about pt-120 pb-60">
                <div class="container">

                    <div class="main-txt">

                        <div class="why-choose">
                            <div class="row g-4 justify-content-between">


                                <div class="col-xl-6 col-lg-7">
                                    <img src="assets/images/store-img.png" alt="Image" />

                                </div>
                                <div class="col-xl-6 col-lg-5">


                                    <div class="part-txt">
                                        <h2 class="part-title">Why Choose Us?</h2>
                                        <div class="accordion" id="accordionExample">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingOne">
                                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        How do I become an author?
                                                        <span><i class="fa-regular fa-minus"></i></span>
                                                    </button>
                                                </h2>
                                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                        <p>The graphical control element accordion is a vertically stacked list of items, such as labels or thumbnails. Each item can be "expanded" or "stretched" to reveal the content associated with that item. </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingTwo">
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        Is my license transferable?
                                                        <span><i class="fa-regular fa-plus"></i></span>
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                        <p>The graphical control element accordion is a vertically stacked list of items, such as labels or thumbnails. Each item can be "expanded" or "stretched" to reveal the content associated with that item. </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingThree">
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        What do you mean by item and end product?
                                                        <span><i class="fa-regular fa-plus"></i></span>
                                                    </button>
                                                </h2>
                                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                        <p>The graphical control element accordion is a vertically stacked list of items, such as labels or thumbnails. Each item can be "expanded" or "stretched" to reveal the content associated with that item. </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingFour">
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                        Am I allowed to modify the item that I purchased?
                                                        <span><i class="fa-regular fa-plus"></i></span>
                                                    </button>
                                                </h2>
                                                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                        <p>The graphical control element accordion is a vertically stacked list of items, such as labels or thumbnails. Each item can be "expanded" or "stretched" to reveal the content associated with that item. </p>
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
            </div> */}





            <Footer />
        </div>
    )
}

export default About