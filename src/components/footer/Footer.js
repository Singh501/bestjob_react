import React from 'react'
import '../footer/footer.css'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

function Footer() {
          return (
                    <>
                     <div className="container2">

                                        <div className="footer">
                                                  <div className="section1">
                                                            <h1>Quick Links</h1>
                                                            <ul>
                                                                      <li><a href="">Home</a></li>
                                                                      <li><a href="">Contact Us</a></li>
                                                                      <li><a href="">Post a job</a></li>
                                                                      <li><a href="">FAQ</a></li>
                                                                      <li><a href="">About Us</a></li>
                                                                      <li><a href="">Term of Use</a></li>
                                                                      
                                                            </ul>
                                                  </div>
                                                  <div className="section2">

                                                            <h1>Job By Functional Area</h1>
                                                            <ul>
                                                                      <li><a href="">Medicine</a></li>
                                                                      <li><a href="">Business Systems Analyst</a></li>
                                                                      <li><a href="">Business Management</a></li>
                                                                      <li><a href="">Adevertising</a></li>
                                                                      <li><a href="">Bank Operation</a></li>
                                                                      <li><a href="">Marketing</a></li>
                                                                      <li><a href="">Graphic Design</a></li>
                                                                      <li><a href="">Creative Design</a></li>
                                                                      <li><a href="">Software & Web Development</a></li>
                                                                      <li><a href="">Dabase Administration (DBA)</a></li>

                                                            </ul>
                                                  </div>
                                                  <div className="section3">
                                                            <h1>Job By Industry</h1>
                                                            <ul>
                                                                      <li><a href="">Education/Training</a></li>
                                                                      <li><a href="">Courier/Logistic</a></li>
                                                                      <li><a href="">Automobile</a></li>
                                                                      <li><a href="">Health & Fitness</a></li>
                                                                      <li><a href="">Advertising/PR</a></li>
                                                                      <li><a href="">Hospitality</a></li>
                                                                      <li><a href="">Electronics</a></li>
                                                                      <li><a href="">Banking/Financial Services</a></li>
                                                                      <li><a href="">Information Technology</a></li>
                                                                      <li><a href="">Travel/torism/Transportation</a></li>

                                                            </ul>
                                                  </div>
                                                  <div className="section4">
                                                            <h1>Contact  Us</h1>
                                                            <div className='contactDetails'>

                                                            
                                                                                <div className='location'>
                                                                                <FmdGoodIcon /> 
                                                             
                                                                                </div>
                                                                                <div className='address'>
                                                                                <p style={{width:'160px'}}>Jaleel Al-Shuyoukh Block -1 Opposite tourist Park Al Baser Complex Building No 29, office No23 Website –www.hsalghanimdelivery.com</p>
                                                                                <p></p>
                                                            
          
                                                                                </div>
                                                                                
                                                            </div>
                                                            <div className='telesection'>
                                                                      <div className='teleph'>
                                                                          <AddIcCallIcon/>
                                                                      </div>
                                                                      <div className='telePhno'>
                                                                                <p>h673645</p>
                                                                      </div>
                                                            
                                                            </div>
                                                            <div className='socialicon'>
                                                                                <FacebookIcon/> 
                                                                                 <TwitterIcon/>
                                                                                 <GoogleIcon/>
                                                                                 <YouTubeIcon/>
                                                                                 
                                                                                </div>
                                                            {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}

                                                  </div>
                                        </div>

                              </div>



                    </>
          )
}

export default Footer
