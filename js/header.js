const header = document.querySelector('header');

header.innerHTML = `
        <div class="container-fluid">
            <div class="row  justify-content-between">
                <div class="col-6 col-xl-3">
                    <div class="overlay-left"></div><!-- .overlay -->

                    <a href="${url}" class="branding">
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
                    </div>
                </div>
                <div class="col-xl-6 d-none d-xl-block">
                    <nav id="primary-nav" class="main-menu">
                        <ul id="menu-primary-menu" class="">
                            <li id="menu-item-169"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-169"><a
                                    href="${url}routes/expertis/">Nuestro expertís</a></li>
                            <li id="menu-item-350"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-350"><a
                                    href="${url}routes/nosotros/">Nosotros</a></li>
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
                      
                     
                        </div>
                    </div>
                </div>
            </div>
        </div>
`