document.addEventListener("DOMContentLoaded", function () {

    const footer = document.getElementById("footer");

    if (!footer) return;


    footer.innerHTML = `

        <footer class="site-footer">

            <div class="footer-container">


                <div class="footer-top">


                    <!-- BRAND -->

                    <div class="footer-brand">


                        <a href="index.html" class="footer-logo">
                            Degafeneh<span>.</span>
                        </a>


                        <p class="footer-description">

                            Full-Stack Developer, Graphic Designer
                            and Multimedia Specialist creating
                            meaningful digital experiences.

                        </p>



                        <div class="footer-socials">


                            <a
                                href="https://github.com/degafenehalemu29-max"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>



                            <a
                                href="https://www.linkedin.com/in/degafeneh-alemu"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>



                            <a
                                href="https://instagram.com/allabout_dege"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Instagram
                            </a>


                        </div>


                    </div>




                    <!-- QUICK LINKS -->

                    <div class="footer-column">


                        <h3>
                            Quick Links
                        </h3>


                        <a href="index.html">
                            Home
                        </a>


                        <a href="about.html">
                            About
                        </a>


                        <a href="skills.html">
                            Skills
                        </a>


                        <a href="projects.html">
                            Projects
                        </a>


                        <a href="certificates.html">
                            Certificates
                        </a>


                        <a href="contact.html">
                            Contact
                        </a>


                    </div>





                    <!-- SERVICES -->

                    <div class="footer-column">


                        <h3>
                            What I Do
                        </h3>


                        <span>
                            Full-Stack Development
                        </span>


                        <span>
                            Graphic Design
                        </span>


                        <span>
                            Multimedia
                        </span>


                    </div>





                    <!-- CONTACT -->

                    <div class="footer-column">


                        <h3>
                            Let's Connect
                        </h3>



                        <a href="mailto:deganefenalemu29@gmail.com">

                            deganefenalemu29@gmail.com

                        </a>



                        <a href="tel:+251901105957">

                            +251 901 105 957

                        </a>



                        <span>
                            Addis Ababa, Ethiopia
                        </span>


                    </div>



                </div>





                <!-- BOTTOM -->

                <div class="footer-bottom">


                    <p>

                        © ${new Date().getFullYear()}
                        Degafeneh Alemu.
                        All rights reserved.

                    </p>



                    <p>

                        Technology • Design • Creativity

                    </p>


                </div>



            </div>


        </footer>

    `;

});