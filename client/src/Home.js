import React from 'react';
import backgroundVideo from '../src/videos/backgroundVideo.m4v';
import wallpaperVideo from '../src/videos/WallpaperFinal.m4v';
import * as ReactBootStrap from 'react-bootstrap';
import './css/Home.css';
import setup from "./setup/primepianistinstaller.exe";

function Home(){
    return(
        <div>
            <video height="1920" width="1080" autoPlay loop muted id='myWallpaper'>
                <source src={wallpaperVideo} type='video/mp4'/>
            </video>
            <div className="downloadContainerWallpaper">
                <h1 className="pianoHeaderTextWallpaper">Become a Better Piano Player</h1>
                <div className="buttonWrapper">
                    <ReactBootStrap.Button className="downloadBtn" variant="outline-dark" href={setup} download>Download</ReactBootStrap.Button>{' '}
                </div>
            </div>
            <ReactBootStrap.Container>
                <ReactBootStrap.Row>
                    <ReactBootStrap.Col>
                        <div className="downloadContainer">
                            <h1 className="pianoHeaderText">Learn Piano Game</h1>
                            <p className="pianoHeaderParagraph">Become a better piano player by playing along to your favourite song</p>
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