import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import me from './images/me.jpg';
import './css/About.css';

function About(){
    return(
        <ReactBootStrap.Container>
            <ReactBootStrap.Row>
                <ReactBootStrap.Col>
                    <div className="textBox">
                        <p>&nbsp;&nbsp;&nbsp;&nbsp; Hi, my name's Josh Morrison, I'm a fourth year computer science student at Carleton University. 
                            I created this piano application because I suck at piano and wanted a fun way to learn how to play.</p>

                        <p>&nbsp;&nbsp;&nbsp;&nbsp; I am currently the dumbest person I know, so there is indeed some problems wrong with the application. If you find any problems that arise when playing,
                            please email me <b>primepianist@gmail.com</b> with the error you encountered.</p>
                        
                        <p>&nbsp;&nbsp;&nbsp;&nbsp; To be in the loop on the what's coming next to the application,
                            I will be posting on this website, as well as doing updates on <a target="a_blank" href="https://www.youtube.com/channel/UCDj-K11fBHMZB7w31T3X08A">YouTube</a>
                            , <a target="a_blank" href="https://twitter.com/PianistPrime">Twitter</a>, <a target="a_blank" href="https://discord.gg/xsSB6XXg">Discord</a>, 
                            and <a target="a_blank" href="https://www.instagram.com/primepianist/">Instagram</a>.</p>
                             
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;If you have any ideas of features to add to the application, let me know by contacting me on anything previously mentioned. </p>

                        <p>&nbsp;&nbsp;&nbsp;&nbsp;If you want free midi files <a target="a_blank" href="https://www.freepianotutorials.net/">this</a> is an amazing website. </p>

                    </div>
                </ReactBootStrap.Col>
                <ReactBootStrap.Col>
                    <div className="pictureDiv">
                        <img className="pic" src={me} alt="" height="514" width="386"/>
                    </div>
                </ReactBootStrap.Col>
            </ReactBootStrap.Row>
        </ReactBootStrap.Container>
    )
}

export default About;