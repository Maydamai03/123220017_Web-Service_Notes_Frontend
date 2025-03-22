document.addEventListener("DOMContentLoaded", function () {
    const navbarHTML = `
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="container">
                <div class="navbar-brand">
                    <a class="navbar-item" href="#">MayNOTES</a>
                    
                    <!-- Tombol hamburger -->
                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <!-- Menu Utama -->
                <div id="navbar-menu" class="navbar-menu">
                    <div class="navbar-start navbar-center">
                        <a class="navbar-item has-text-black" href="home.html">Home</a>
                        <a class="navbar-item has-text-black" href="about_us.html">About Me</a>
                    </div>
                </div>
            </div>
        </nav>

        <style>
            .navbar {
                background-color: rgb(2, 20, 38);
            }
            .navbar-item {
                color: rgb(249, 255, 191) !important;
            }

            /* Atur menu navbar agar di tengah */
            .navbar-center {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                display: flex;
                gap: 20px;
            }

            /* style untuk tombol hamburger */
            .navbar-burger {
                display: none;
                cursor: pointer;
            }

            /* Responsif: Tampilkan menu sebagai dropdown saat layar kecil */
            @media screen and (max-width: 1024px) {
                .navbar-menu {
                    display: none;
                    flex-direction: column;
                    align-items: center;
                    background-color: rgb(2, 20, 38);
                    width: 100%;
                    position: absolute;
                    top: 60px;
                    left: 0;
                    z-index: 1000;
                    padding: 10px 0;
                }
                .navbar-menu.is-active {
                    display: flex;
                }
                .navbar-burger {
                    display: block;
                }

                /* memastikan menu tetap berada di tengah saat responsif */
                .navbar-center {
                    position: static;
                    transform: none;
                    flex-direction: column;
                    align-items: center;
                    gap: 10px;
                }
            }
        </style>
    `;

    document.getElementById("navbar-container").innerHTML = navbarHTML;

    // Tambahkan event listener ke tombol hamburger
    document.querySelector(".navbar-burger").addEventListener("click", function () {
        const menu = document.getElementById("navbar-menu");
        menu.classList.toggle("is-active");
    });
});
