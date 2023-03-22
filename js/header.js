const header = document.querySelector('header');

header.innerHTML = `
        <style>
            #scamWarning #scamWarningWrap {
                width: 70%;
                background-color: #005153;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                text-align: center;
            }

            #scamWarning, #contactinfoBar {
                display: none;
            }

            #contactinfoBar.show {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                background-color: #000;
                position: fixed;
                bottom: 0;
                z-index: 98;
                width: 100%;
                height: auto;
                padding: 10px 40px;
            }

            #contactinfoBar div {
                font-family: "Montserrat", sans-serif !important;
                color: #fff;
                font-size: 1.2rem !important;
            }

            #contactinfoBar div a, #contactinfoBar div a:visited {
                color: #487b7b;
            }

            #contactinfoBar div a:hover {
                color: #fff;
            }

            #scamWarning.show {
                display: flex;
                background-color: rgba(0, 0, 0, 0.4);
                position: fixed;
                top: 0;
                left: 0;
                z-index: 99;
                width: 100%;
                height: 100vh;
                justify-content: center;
                align-items: center;
                flex-direction: row;
            }

            #scamWarning a.btn {
                margin-top: 20px;
            }

            #scamWarning .textWrap {
                padding: 50px;
                width: 100%;
            }

            #scamWarning h3 {
                color: #FFF;
                font-weight: 700;
            }

            #scamWarning p {
                color: #FFF;
            }

            #scamWarning p a:hover {
                color: grey !important;
            }

            #scamCloseBtn {
                cursor: pointer;
                color: #FFF;
                border: 1px solid white;
                display: inline-block;
                padding: 17px 35px;
                margin-top: 20px;
                transition: opacity 2s linear;
                font-size: 1.2rem;
            }

            #contactinfoBarCloseBtn {
                cursor: pointer;
                color: #FFF;
                display: inline-block;
                transition: opacity 2s linear;
                font-size: 1.6rem;
                font-family: "Montserrat", sans-serif !important;
                margin-left: 30px;

            }

            #scamCloseBtn:hover {
                opacity: 0.5;
            }

            @media only screen and (max-width: 428px) {
                #scamWarning #scamWarningWrap {
                    width: 90%;
                }

                #scamWarning h3 {
                    font-size: 18px;
                }

                #scamWarning p {
                    font-size: 13px;
                }

                #contactinfoBar.show {
                    padding: 10px 20px;
                }
            }
        </style>

        <script>

            var barClosed = localStorage.getItem("bar_closed");

            var firstTime = localStorage.getItem("first_time");
            if (!firstTime) {
                console.log('first time');
                document.getElementById("scamWarning").classList.add('show');

                var x = document.getElementById("scamWarning");
                x.addEventListener("click", function () {
                    x.remove(x.selectedIndex);
                });

                document.getElementById('scamCloseBtn').addEventListener("click", function () {
                    x.remove(x.selectedIndex);
                });

                document.getElementById('scamMaillink').addEventListener('click', function (e) {
                    e.stopPropagation();
                });


                localStorage.setItem("first_time", "1");
            }

            if (!barClosed) {
                document.getElementById("contactinfoBar").classList.add('show');

                var y = document.getElementById("contactinfoBar");

                document.getElementById('contactinfoBarCloseBtn').addEventListener("click", function () {
                    y.remove(y.selectedIndex);
                    localStorage.setItem("bar_closed", "1");
                });

            }
        </script>


        <div class="container-fluid">
            <div class="row  justify-content-between">
                <div class="col-6 col-xl-3">
                    <div class="overlay-left"></div><!-- .overlay -->
                    <div class="lft-nav-trigger lft-menu-trig">
                        <div class="dots">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <a href="https://valenslawfirm.com/" class="branding">
                        <img src="${url}assets/Valens_Main_logo_White.png" class="logo-light" alt=""/> <img
                            src="${url}assets/Valens_Main_logo_middle_blue.png" class="logo-dark" alt=""/> </a>
                    <div class="slide-in-menu-left">
                        <div class="lft-nav-trigger  lft-menu-close">
                            <div class="close-btn">
                                <span class="line1"></span>
                                <span class="line2"></span>
                            </div>
                        </div>
                        <div class="header-group">
                            <h5>VALENS LAW FIRM</h5>
                        </div>
                        <div class="slide-in-menu-left-scroll">

                            <div class="row peoples-list">
                                <div class="col-md-6 col-lg-4">
                                    <div class="people-item burn-anime">
                                        <a href="routes/alejandra">
                                            <figure class="image-holder test">
                                                <img width="466" height="622"
                                                     src="${url}assets/alejandra.jpg"
                                                     class="attachment-lawyer-thumbs size-lawyer-thumbs" alt=""
                                                     sizes="(max-width: 466px) 100vw, 466px"/></figure>
                                            <h3>ALEJANDRA HILGUERA</h3>
                                            <div class="entry-meta">
                                                <span>MBA</span>
                                                CEO
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="people-item burn-anime">
                                        <a href="/">
                                            <figure class="image-holder test">
                                                <img width="466" height="622"
                                                     src="${url}assets/venely.jpg"
                                                     class="attachment-lawyer-thumbs size-lawyer-thumbs" alt=""/>
                                            </figure>
                                            <h3>VENELY OLIVARES</h3>
                                            <div class="entry-meta">
                                                <span>.</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="people-item burn-anime">
                                        <a href="/">
                                            <figure class="image-holder test">
                                                <img width="466" height="622"
                                                     src="${url}assets/ann.jpg"
                                                     class="attachment-lawyer-thumbs size-lawyer-thumbs" alt=""
                                                     sizes="(max-width: 466px) 100vw, 466px"/></figure>
                                            <h3>ANN BEVERLY SOTELO VILLALOBOS
                                            </h3>
                                            <div class="entry-meta">
                                                <span>.
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="people-item burn-anime">
                                        <a href="/">
                                            <figure class="image-holder test">
                                                <img width="466" height="622"
                                                     src="${url}assets/ricardo.jpg"
                                                     class="attachment-lawyer-thumbs size-lawyer-thumbs" alt=""
                                                     sizes="(max-width: 466px) 100vw, 466px"/></figure>
                                            <h3>RICARDO VILLALOBOS FIGUEROA</h3>
                                            <div class="entry-meta">
                                                <span>.</span>
                                                PARTNER
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 d-none d-xl-block">
                    <nav id="primary-nav" class="main-menu">
                        <ul id="menu-primary-menu" class="">
                            <li id="menu-item-169"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-169"><a
                                    href="routes/expertis">Nuestro expertís</a></li>
                            <li id="menu-item-350"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-350"><a
                                    href="/routes/nosotros">Nosotros</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-6 col-xl-3 text-right">
                    <div class="overlay-right"></div><!-- .overlay -->
                    <div class="nav-trigger right-menu-trig">
                        <div class="burger">
                            <span class="line1"></span>
                            <span class="line2"></span>
                            <span class="line3"></span>
                        </div>
                    </div>

                    <div class="slide-in-menu">
                        <div class="nav-trigger right-menu-close">
                            <div class="close-btn">
                                <span class="line1"></span>
                                <span class="line2"></span>
                            </div>
                        </div>
                        <h5>Valens LAW Firm</h5>
                        <nav id="secondary-nav" class="secondary-menu">
                            <ul id="menu-secondary-menu" class="">
                                <li id="menu-item-348"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-348"><a
                                        href="routes/expertis">Nuestro expertís</a></li>
                                <li id="menu-item-345"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-345"><a
                                        href="/">Nosotros</a></li>
                            </ul>
                        </nav>
                        <! --<div class="btm-links">
                            <ul id="menu-bottom-links" class="">
                                <li id="menu-item-469"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-469"><a
                                        href="assets/about/">About Us</a></li>
                                <li id="menu-item-1104"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1104">
                                    <a href="assets/careers/">Careers</a></li>
                                <li id="menu-item-344"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-344"><a
                                        href="assets/contact/">Contact</a></li>
                                <li id="menu-item-2359"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2359">
                                    <a href="assets/directory/">Directory</a></li>
                            </ul>
                        </div>-->
                    </div>
                </div>
            </div>
        </div>
`