import React from "react";
import './Resume.css';
import myphoto from './photo.jpg'
class Myresume extends React.Component{
    render(){
        return(
            <div className="fullresume">
                <div className="leftside">
                    <div className="profile">
                        <h2>HARI KRISHNA M</h2>
                    </div>
                    <div className="photo">
                    <img src={myphoto} alt="photo"/>
                    </div>
                    <div className="contact_details">
                    <h2>CONTACT</h2>
                    <br></br>
                    <h5 className="tcolor">Email:harikrishna.m23sep@gmail.com</h5>
                    <h5 className="tcolor">ph:9080031847</h5>
                    <h5 className="tcolor">LinkedIn:harikrishna-m-0a77b2249</h5>
                    
                    </div>
                    <div className="skills">
                        <h2>SKILLS</h2>
                        <ul className="tcolor">
                        <li>Programming languages:Java,Javascript,</li>
                        <li>Web technologies:HTML,CSS,</li>
                        <li>Framework:Clientside-Reactjs</li>
                        <li>serverside:Nodejs,Expressjs</li>
                        <li>Database:MongoDB</li>
                        <li>Tools:Git</li>
                        <li>Good in Datastructure and Algorithms</li>
                        </ul>
                       
                    </div>
                    <div className="awards">
                        <h2>ACHIEVEMENTS AND AWARD</h2>
                        <ul className="tcolor">
                        <li>Rajya puraskar for scout</li>
                        <br></br>
                        <li>Awarded for youth empowerment in yoga</li>
                        </ul>
                    </div>
                </div>
                <div className="rightside">
                    <div>
                        <h2>OBJECTIVE</h2>
                        <p className="rcolor">Organized and motivated employee eager to apply time management
                           and organizational skills in various environments. Looking for a
                           challenging role in a reputable organization to utilize my technical,
                           database, and management skills for the growth of the organization
                           as well as to enhance my knowledge about new and emerging trends
                           in the IT sector. Strong worth ethic, adaptability and exceptional
                           interpersonal skills. Adept at working effectively unsupervised and
                           quickly mastering new skills
                        </p>
                        
                    </div>
                    <div>
                        <h2>COURSES</h2>
                        <ul className="rcolor">
                        <li>Full stack developer pro from imarticus learning coimbatore</li>
                        <li>Machine learning from infosys springboard under naan mudhalvan scheme</li>
                        </ul>
                    </div>
                    <div>
                        <div>
                        <h2>EDUCATION</h2>
                        <ul className="rcolor">
                        <li>ANNA UNIVERSITY REGIONAL CAMPUS COIMBATORE <br></br>
                        BE-Mechanical engineering</li>
                        
                        <li>VIDYAA VIKAS BOYS HR SEC SCHOOL<br></br>
                        HSC</li>
                        <li>RG matric hr sec school<br></br>
                        SSLC</li>
                        </ul>
                    </div>
                     <div>
                            <h2>PROJECTS</h2>
                            <h4 className="rcolor">EXPENSE TRACKER</h4>
                            <ul className="rcolor">
                            <li>Build a web application that allows users to track their expenses
                                and manage their budgets.</li>
                             <li>Used reactjs for client side ,Nodejs,Expressjs for server side and
                                Mongodb for database management.
                            </li>
                            </ul>
                     </div>
                     <div>
                            <h2>STRENGTHS</h2>
                            <ol className="rcolor">
                                <li>Time management</li>
                                <li>Adaptability</li>
                                <li>Creativity</li>
                                <li>problem solving</li>
                            </ol>
                     </div>
                     </div>
                </div>
            </div>
        )
    }

}
export default Myresume;