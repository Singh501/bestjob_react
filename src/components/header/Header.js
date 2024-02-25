
import '../header/header.css'
function Header() {
          return (
                    <>
                              <div className="container">
                                        <div className="header">
                                                  <nav className="menu">
                                                            <div className="logo">
                                                                      <img src="https://hsalghanimdelivery.com/sitesetting_images/thumb/hs-alghanim-delivery-job-portal-kuwait-1670408772-676.png" alt="" />
                                                            </div>
          
                                                            <ul >
                                                                      <li><a href="">Home</a></li>
                                                                      <li><a href="">Jobs</a></li>
                                                                      <li><a href="">Companies</a></li>
                                                                      <li><a href="">About Us</a></li>
                                                                      <li><a href="">Contact Us</a></li>
                                                                      <li><a href="">sign in</a></li>
                                                                      <li className="register"><a href="">Register</a></li>
                                                                      <img src="https://hsalghanimdelivery.com/images/lang.png" alt="" />
                                                                      
                                                            </ul>
                                                           
                                                            
                                                            {/* <div className="logo2">
                                                                      <img src="https://hsalghanimdelivery.com/images/lang.png" alt="" />
                                                            </div> */}
                                                  </nav>
                                        </div>
                              </div>
                    </>
          )
}
export default Header