import Navbar from "../components/Navbar";
import "../styles/Homepage.css";
import blackWomen from '../assets/BlackWomen.png';
import bottomLeftImage from '../assets/Cone_01.png';
import topLeftImage from '../assets/Cone_02.png';
import topRightImage from '../assets/Cone_03.png';



function Homepage () {

    return (
        
        <div className="homepage">
            <Navbar />
            <div className="home-body">
                <div className="words">
                    <div className="main-text">
                        <p>We help solve <br /> all your problems</p>
                    </div>
                    <div className="sub-text">Stuck on a coding problem? We get it. <br /> 
                    Support Center is your community to unravel CS <br /> challenges and level up your coding skills</div>
                    <div className="button">
                        <button>
                            <div>Get started now</div>
                            <i class="material-icons">arrow_forward</i>
                        </button>
                    </div>
                </div>
                <div className="graphic">
                    <img className='black-women' src={blackWomen} alt="Image of black women"/>
                </div>
            </div>
            <img className="top-left" src={topLeftImage} alt="Top Left Image" />
            <img className="top-right" src={topRightImage} alt="Top Right Image" />
            <img className="bottom-left" src={bottomLeftImage} alt="Bottom Left Image" />
            

        </div>
    );
}

export default Homepage