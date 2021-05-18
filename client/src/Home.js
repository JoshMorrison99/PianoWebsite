import React from 'react';
import backgroundVideo from '../src/videos/backgroundVideo.m4v';
import * as ReactBootStrap from 'react-bootstrap';
import './css/Home.css';
import setup from "./setup/PrimePianistInstaller.exe";

function Home(){
    return(
        <div>
            <ReactBootStrap.Container>
                <ReactBootStrap.Row>
                    <ReactBootStrap.Col>
                        <div className="downloadContainer">
                            <h1 className="pianoHeaderText">Learn Piano Game</h1>
                            <p className="pianoHeaderParagraph">Become a better piano player by playing along to your favourite song</p>
                            <div className="buttonWrapper">
                                <ReactBootStrap.Button className="downloadBtn" variant="success" href={setup} download>Download</ReactBootStrap.Button>{' '}
                            </div>
                        </div>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col>
                        <div className="videoContainer">
                            <video height="360" width="640" autoPlay loop muted id='myVideo'>
                                <source src={backgroundVideo} type='video/mp4'/>
                            </video>
                        </div>
                </ReactBootStrap.Col>
                </ReactBootStrap.Row>
            </ReactBootStrap.Container>
        </div>
    )
}

export default Home;