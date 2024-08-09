import "../styles/Homepage.css";
import blackWomen from '../assets/BlackWomen.png';
import bottomLeftImage from '../assets/Cone_01.png';
import topLeftImage from '../assets/Cone_02.png';
import topRightImage from '../assets/Cone_03.png';
import InfoCard from "../components/homepage/InfoCard";
import TechImage from "../assets/Technology.png";
import DSAImage from "../assets/DSAPic.png";
import DBImage from "../assets/DBPic.png";
import AIImage from "../assets/IntroToAi.png";
import CourseCard from "../components/homepage/CourseCard";
import SecondMiddleImage from "../assets/Cone_04.png";
import BackLines from '../assets/line_groups.png';
import ServiceCard from "../components/homepage/ServiceCard";
import BlackCalendar from "../assets/black-calendar.png";
import ThirdTopRight from "../assets/Cone_05.png";
import ThirdTopLeft from "../assets/Cone_06.png";
import FourthPersonImg from "../assets/person-image.jfif";
import TestimonyCard from "../components/homepage/TestimonyCard";
import FourthTopLeft from "../assets/Cone_07.png";
import ChatIcon from "../assets/chat-round.png";
import Footer from '../components/Footer';
import {Link, useNavigate} from 'react-router-dom';
import React, {useContext} from 'react';
import { UserContext } from "../contexts/UserContext";



function Homepage () {
    const navigate = useNavigate();
    const {user, setUser} = useContext(UserContext);

    // Route to tutor page
    const routeToTutorPage = () => {
        if(user == null){
            navigate('/login');
        } else {
            navigate('/find-tutor');
        }
    }

    return (
        
        <div className="homepage">
            
            <div className="home-body">
                <div className="words">
                    <div className="main-text">
                        <p>We help solve <br /> all your problems</p>
                    </div>
                    <div className="sub-text">Stuck on a coding problem? We get it. <br /> 
                    Support Center is your community to unravel CS <br /> challenges and level up your coding skills</div>
                    <div className="button">
                        <button onClick={routeToTutorPage}>
                            <div>Get started now</div>
                            <i class="material-icons">arrow_forward</i>
                        </button>
                    </div>
                </div>
                <div className="graphic">
                    <img className='black-women' src={blackWomen} alt="Image of black women"/>
                </div>
                <img className="top-left" src={topLeftImage} alt="Top Left Image" />
                <img className="top-right" src={topRightImage} alt="Top Right Image" />
                <img className="bottom-left" src={bottomLeftImage} alt="Bottom Left Image" />
            </div>
            <div className="second-segment">
                <div className="segment-content">
                    <div className="row-one">
                        <InfoCard stat={"1M+"} desc={"Customers visit Albinos every month"} />
                        <InfoCard stat={"93%"} desc={"Satisfaction rate from our customers."} />
                        <InfoCard stat={"4.9"} desc={"Customers visit Albinos every month"} />
                    </div>
                    <div className="row-two">
                        <div className="title">Services we offer for you</div>
                        <div className="desc">With lots of unique blocks, you can easily build a page without <br /> coding. Build your next landing page.</div>
                    </div>
                    <div className="row-three">
                        <CourseCard techImage={TechImage} desc={"Programming for CS"}/>
                        <CourseCard techImage={DSAImage} desc={"Data Structures and Algorithms"}/>
                        <CourseCard techImage={AIImage} desc={"Introduction to AI"}/>
                        <CourseCard techImage={DBImage} desc={"Database Systems"}/>
                    </div>
                    <img className="second-middle" src={SecondMiddleImage} alt="Adding image" />
                    <img className="line-groups" src={BackLines} alt="Background" />
                    
                </div>
            </div>
            <div className="break-segment">
                <button>New</button>
                <div>We'll be adding more courses and features in v2.0 soon</div>
            </div>
            <div className="third-segment">
                <div className="third-segment-content">
                    <div className="content">
                        <div className="col-image">
                            <img src={BlackCalendar} alt="Image of calendar" />
                        </div>
                        <div className="col-info">
                            <div className="first">
                                <p className="title">Why you should choose us?</p>
                                <p className="sub-title">With lots of unique blocks, you can easily build a page <br /> without coding. Build your next landing page.</p>
                            </div>
                            <div className="next">
                                <ServiceCard count={1} title={"Easy Booking"} desc={"With lots of unique blocks, you can easily build a page without coding."}/>
                                <ServiceCard count={2} title={"Free Tutor"} desc={"With lots of unique blocks, you can easily build a page without coding."}/>
                                <ServiceCard count={3} title={"Video Conference"} desc={"With lots of unique blocks, you can easily build a page without coding."}/>
                                <button className="tutor-button" onClick={routeToTutorPage}>
                                    <div className="btn-text">
                                        Find a Tutor
                                    </div>
                                    <i class="material-icons">arrow_forward</i>
                                    </button>
                            </div>

                        </div>
                        <img src={ThirdTopRight} alt="Cone image" className="third-right" />
                        <img src={ThirdTopLeft} alt="Cone image" className="third-left" />
                    </div>
                </div>
            </div>
            <div className="fourth-segment">
                <div className="fourth-segment-content">
                    <div className="title">Testimonies</div>
                    <div className="testimonies">
                        <TestimonyCard FourthPersonImg={FourthPersonImg} 
                            comment={"You made it simple. My new site is so much faster & easier to work with Albino"} 
                            name={"Ilya Vasin"} 
                            role={"Software Engineer"} 
                        />
                        <TestimonyCard FourthPersonImg={FourthPersonImg} 
                            comment={"You made it simple. My new site is so much faster & easier to work with Albino"} 
                            name={"Ilya Vasin"} 
                            role={"Software Engineer"} 
                        />
                        <TestimonyCard FourthPersonImg={FourthPersonImg} 
                            comment={"You made it simple. My new site is so much faster & easier to work with Albino"} 
                            name={"Ilya Vasin"} 
                            role={"Software Engineer"} 
                        />
                    </div>
                    <img src={FourthTopLeft} alt="Image of icon" className="fourth-top-left" />

                </div>
            </div>
            <div className="fifth-segment">
                <div className="fifth-segment-content">
                    <div className="left-content">
                        <img src={ChatIcon} alt="Chat Icon" className="chat-icon" />
                        <h2>Get a free consultancy from our expert right now!</h2>
                        <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page so quickly with Albino.</p>
                    </div>
                    <div className="right-content">
                        <form className="consultancy-form">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="i.e. John Doe" />
                            
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="i.e. john@gmail.com" />
                            
                            <label htmlFor="phone">Phone</label>
                            <input type="tel" id="phone" placeholder="i.e. 123-456-7890" />
                            
                            <label htmlFor="service">Which service do you need?</label>
                            <select id="service" defaultValue="">
                                <option value="" disabled>Select a service</option>
                                {/* Add more options here */}
                            </select>
                            <button type="submit">Get Free Consultancy</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Homepage