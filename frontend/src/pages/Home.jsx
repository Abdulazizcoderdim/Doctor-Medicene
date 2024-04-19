import heroImg01 from "../assests/images/hero-img01.png";
import heroImg02 from "../assests/images/hero-img02.png";
import heroImg03 from "../assests/images/hero-img03.png";
import icon01 from '../assests/images/icon01.png'
import icon02 from '../assests/images/icon02.png'
import icon03 from '../assests/images/icon03.png'
import featureImg from '../assests/images/feature-img.png'
import videoIcon from '../assests/images/video-icon.png'
import {Link} from 'react-router-dom'
import faqImg from "../assests/images/faq-img.png";
import avatarIcon from '../assests/images/avatar-icon.png'
import {BsArrowRight} from 'react-icons/bs'
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return <>
      {/* hero section */}
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
         <div className="container">
           <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
 
            <div>
              <div className="lg:w-[570px]">
                 <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">We help patients live a healthy, longer life.</h1>
                 <p className="text__para">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugit nostrum eum natus dolor, omnis earum possimus aperiam ipsum rem ullam veniam accusamus laborum magni! Vel eos hic sunt deleniti!</p>

                 <button className="btn">Request an Appointment</button>
              </div>

              {/* hero counter */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]"> 
                 <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">30+</h2>
                    <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Years of Experience</p>
                 </div>

                 <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">15+</h2>
                    <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Clinic Location</p>
                 </div>

                 <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">100%</h2>
                    <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Patient Satisfaction</p>
                 </div>


              </div>
            </div>

            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImg02} className="w-full mb-[30px]" alt="" />
                <img src={heroImg03} className="w-full" alt="" />
              </div>
              
            </div>

           </div>
         </div>
      </section>

      {/* hero section end */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto"> 
             <h2 className="heading text-center">Providing the best medical services</h2>
             <p className="text__para text-center">World-class care for everyone. Our health System offers unmatched, expert health care.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
           {/* 1 */}
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                 <img src={icon01} alt="" />
              </div>

              <div className="mt-[30px]">
                 <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Find a Doctor</h2>
                 <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class care for everyone. Our health System offers unmatched, expert health care.
                 </p>

                 <Link to="/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5"/>
                 </Link>
              </div>
            </div>
{/* 2 */}
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                 <img src={icon02} alt="" />
              </div>

              <div className="mt-[30px]">
                 <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Find a Location</h2>
                 <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class care for everyone. Our health System offers unmatched, expert health care.
                 </p>

                 <Link to="/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5"/>
                 </Link>
              </div>
            </div>
{/* 3 */}
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                 <img src={icon03} alt="" />
              </div>

              <div className="mt-[30px]">
                 <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Book Appointment</h2>
                 <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class care for everyone. Our health System offers unmatched, expert health care.
                 </p>

                 <Link to="/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5"/>
                 </Link>
              </div>
            </div>
{/* 3 */}

          </div>

        </div>
      </section>

      {/* about section */}
      <About/>

      {/* services section */}
      <section>
         <div className="container">
            <div className="xl:w-[470px] mx-auto">
               <h2 className="heading text-center">
                  Our medical services
               </h2>
               <p>World-class care for everyone. Our health System offers unmatched, expert health care.</p>
            </div>

            <ServiceList/>
         </div>
      </section>
       {/* services section end */}

       {/* feature section */}
       <section>
         <div className="container">
           <div className="flex items-center justify-between flex-col lg:flex-row">
              <div className="xl::w-[670px]">
                <h2 className="heading">Get virtual treatment <br /> anytime.</h2>
                
                <ul className="pl_4">
                  <li className="text__para">
                     1. Schedule the appointment directly.
                  </li>
                  <li className="text__para">2. Search for your physician here, and contact their office.</li>
                  <li className="text__para">3. View our physicians Who are accepting new patients, use the online scheduling tool to select an appointment time.</li>
                </ul>
                <Link to="/">
                  <button className="btn">Learn More</button>
                </Link>
              </div>
              
              <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
                  <img src={featureImg} className="w-3/4" alt="" />
                 
                  <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-[6px] lg:gap-3">
                          <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">Tue, 24</p>
                          <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[600]">10:00AM</p>
                        </div> 
                        <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                            <img src={videoIcon} alt="" />    
                        </span>
                     </div>  

                     <div className="rounded-full w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-medium mt-2 lg:mt-4">
                          Consultation                     
                     </div>

                     <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                         <img src={avatarIcon} alt="" />                          
                         <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-bold text-headingColor">
                           Wayne Collins
                         </h4>
                     </div>  

                  </div>
              </div>
           </div>
         </div>  
       </section> 
       {/* feature section end */}

       {/* our great doctors */}
       <section>
         <div className="container">
            <div className="xl:w-[470px] mx-auto">
               <h2 className="heading text-center">
                  Our great doctors
               </h2>
               <p>World-class care for everyone. Our health System offers unmatched, expert health care.</p>
            </div>

            <DoctorList/>
         </div>
       </section>
       {/* our great doctors end */}

       {/* faq section */}
       <section>
         <div className="container">
            <div className="flex justify-between gap-[50px] lg:gap-0">
               <div className="w-1/2 hidden md:block">
                 <img src={faqImg} />
               </div>

               <div className="w-full md:w-1/2">
                  <h2 className="heading">
                     Most question by our beloved patients
                  </h2>

                  <FaqList/>
               </div>
            </div>
         </div>
       </section>
       {/* faq section end */}

       {/* testimonial */}
       <section>
         <div className="container">
            <div className="xl:w-[470px] mx-auto">
               <h2 className="heading text-center">
                  What our patient say
               </h2>
               <p>World-class care for everyone. Our health System offers unmatched, expert health care.</p>
            </div>

            <Testimonial/>
         </div>
       </section>
       {/* testimonial end */}
  </>
}

export default Home

