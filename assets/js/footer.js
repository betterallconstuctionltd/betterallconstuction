class CommonFooter extends HTMLElement {
  
    connectedCallback(){
        this.innerHTML = `
        <footer>
        <!-- Footer Start-->
        <div class="footer-main">
             <div class="footer-area footer-padding">
                 <div class="container">
                     <div class="row  justify-content-between">
                         <div class="col-lg-4 col-md-4 col-sm-8">
                             <div class="single-footer-caption mb-30">
                                 <!-- logo -->
                                 <div class="footer-logo">
                                     <a href="index.html"><img src="assets/img/logo/logo2_footer.png" alt=""></a>
                                 </div>
                                 <div class="footer-tittle">
                                     <div class="footer-pera">
                                         <p class="info1">Our vision is to improve the quality of infrastructure by using the acquired knowledge, skills and talents to create jobs and offering high quality products and services both at national and international level. </p>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div class="col-lg-2 col-md-4 col-sm-5">
                             <div class="single-footer-caption mb-50">
                                 <div class="footer-tittle">
                                     <h4>Quick Links</h4>
                                     <ul>
                                         <li><a href="about.html">About</a></li>
                                         <li><a href="services.html">Services</a></li>
                                         <li><a href="project.html">Projects</a></li>
                                         <li><a href="contact.html">Contact Us</a></li>
                                     </ul>
                                 </div>
                             </div>
                         </div>
                         <div class="col-lg-3 col-md-4 col-sm-7">
                             <div class="single-footer-caption mb-50">
                                 <div class="footer-tittle">
                                     <h4>Contact</h4>
                                     <div class="footer-pera">
                                         <p class="info1"> Kigali City,
                                             Gasabo district, Rugando area </p>
                                         <p class="info1"> Mathias House</p>
                                         <p class="info1"> 24R8+486, RN 5 Rd, Next to Prince House, NR5, Kigali</p>
                                     </div>
                                     <ul>
                                         <li><a href="tel:+250788855191">Phone: +250788855191</a></li>
                                         <li><a href="tel:+250788821910">Cell:  +250788821910 </a></li>
                                     </ul>
                                 </div>
                             </div>
                         </div>
                         <div class="col-lg-3 col-md-6 col-sm-8">
                             <div class="single-footer-caption mb-50">
                                 <!-- Form -->
                                 <div class="footer-form">
                                     <div id="mc_embed_signup">
                                        
                                     </div>
                                 </div>
                                 <!-- Map -->
                                 <div class="map-footer">
                                     <img src="assets/img/gallery/map-footer.png" alt="">
                                 </div>
                             </div>
                         </div>
                     </div>
                     <!-- Copy-Right -->
                     <div class="row align-items-center">
                         <div class="col-xl-12 ">
                             <div class="footer-copy-right">
                                 <p>
  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This website is made by <i class="fa fa-heart" aria-hidden="true"></i> by Munaziri Bienaime
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
       </div>
        <!-- Footer End-->
    </footer>`
        }
    }
    customElements.define('common-footer', CommonFooter)