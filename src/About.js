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
                        <p>&nbsp;&nbsp;&nbsp;&nbsp; Hi, my names Josh Morrison, I'm a third year computer science student at Carleton University. 
                            I created this piano application because I suck at piano and wanted a fun way to learn how to play.</p>

                        <p>&nbsp;&nbsp;&nbsp;&nbsp; I am currently the dumbest person I know, so there is indeed some problems wrong with the application. If you find any problems that arise when playing,
                            please email me <b>dawdio.business@gmail.com</b> with the error you encountered.</p>

                        <p>&nbsp;&nbsp;&nbsp;&nbsp; If you're interested in the development side of the application, consider following me on <a target="a_blank" href="https://www.youtube.com/channel/UCXT-b6QjIBcMUNaEic7dTTw">YouTube</a> where I post devlogs.</p> 
                        
                        <p>&nbsp;&nbsp;&nbsp;&nbsp; To be in the loop on the what is coming next to the application,
                            I will be posting on this website, doing devlogs on my <a target="a_blank" href="https://www.youtube.com/channel/UCXT-b6QjIBcMUNaEic7dTTw">YouTube</a> and updates on  <a target="a_blank" href="https://www.patreon.com/dawdio">Patreon</a>. Also follow me on <a target="a_blank" href="https://github.com/JoshMorrison99">Github</a> because why not.</p>
                             
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;If you have any ideas of features to add to the application, you can do so by contacting me on anything previously mentioned. </p>

                        <p>&nbsp;&nbsp;&nbsp;&nbsp; If you enjoy the application, you can support server costs here: <a target="a_blank" href="https://www.patreon.com/dawdio"> https://www.patreon.com/dawdio </a></p>
                    </div>
                </ReactBootStrap.Col>
                <ReactBootStrap.Col>
                    <div className="pictureDiv">
                        <img className="pic" src={me} height="514" width="386"/>
                    </div>
                </ReactBootStrap.Col>
            </ReactBootStrap.Row>
        </ReactBootStrap.Container>
    )
}

export default About;