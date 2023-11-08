import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Carousel } from 'react-bootstrap';
import goalImage from '../images/goal1.jpg';
import valuesImage from '../images/values.jpg';
import teamImage from '../images/team.jpg';


const About = () => {
    return (
        <div className="about">
            <h1 className="animate__slideInLeft">About Us</h1>
            <p>
                This project aims to use AI and OpenCV for efficient car parking
                management.
            </p>
            <p>
                It utilizes computer vision techniques to detect and track cars in
                parking lots.
            </p>
            <p>
                With the help of machine learning algorithms, it can optimize parking
                space allocation.
            </p>
            <Carousel>
                <Carousel.Item>
                    <div
                        className="carousel-image"
                        style={{ backgroundImage: `url(${goalImage})` }}
                    >
                        <h2 className="goal" style={{color: 'blue', fontWeight: 'bolder'}}>Our Goal:-</h2>
                        <p style={{color: 'blue', fontWeight: 'bolder'}}>
                            The goal is to enhance the accessibility and responsiveness for
                            customers who wants to park their cars without any hassle.
                        </p>
                        <p style={{color: 'blue', fontWeight: 'bolder'}}>
                            It also aims to reduce the time spent by customers in finding a
                            parking spot.
                        </p>
                        <p style={{color: 'blue', fontWeight: 'bolder'}}>
                            Join us on this transformative journey, where you can benefit
                            through AI Enabled Car Parking System.
                        </p><br />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div
                        className="carousel-image"
                        style={{ backgroundImage: `url(${valuesImage})` }}
                    >
                        <h2 className="values" style={{color: 'deeppink', fontWeight: 'bolder'}}>Our Values:-</h2>
                        <p style={{ color: 'deeppink', fontWeight: 'bolder'}}>
                            Integrity, Excellence, and Customer Satisfaction< br /> <br />
                            Efficiency and Optimization <br /><br />
                            Environmental Responsibility <br /><br />
                            User-Friendly Design <br /><br />
                            Data Privacy and Confidentiality <br /><br />
                        </p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div
                        className="carousel-image"
                        style={{ backgroundImage: `url(${teamImage})` }}
                    >
                        <h2 className="team" style={{color: 'red', fontWeight: 'bolder'}}>Our Team:-</h2>
                        <p style={{color: 'red', fontWeight: 'bolder'}}>Our team consists of 2 members</p>
                        <p style={{color: 'red', fontWeight: 'bolder'}}>
                            Ninad Sugandhi: Project Manager<br />
                            Connect here:&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href='https://www.linkedin.com/in/ninad-sugandhi/'><FaLinkedin/></a> &nbsp;&nbsp;&nbsp;&nbsp;
                            <a href='https://github.com/codewithpassion-ninad'><FaGithub/></a>
                        </p>
                        <p style={{color: 'red', fontWeight: 'bolder'}}>
                            Aadhith M: Project Administrator<br />
                            Connect here:&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href='https://www.linkedin.com/in/aadhith-sridharan-872788233/'><FaLinkedin /></a>&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href='https://github.com/AadhithSridharan'><FaGithub /></a>
                        </p> <br />
                    </div>
                </Carousel.Item>
            </Carousel>
            <p>
                Thank you for visiting our website, and we look forward to your
                feedback.
            </p>
            <p>
                For more information, reach out to us at:&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="mailto:ninadnilesh.sugandhi2021@vitstudent.ac.in">
                    <FaEnvelope />
                </a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="mailto:aadhith.m2021@vitstudent.ac.in">
                    <FaEnvelope />
                </a>
            </p>
        </div>
    );
};

export default About;