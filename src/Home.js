import React from 'react';
import backgroundVideo from '../src/videos/backgroundVideo.m4v';
import * as ReactBootStrap from 'react-bootstrap';
import './css/Home.css';

function Home(){
    return(
        <div>
            <ReactBootStrap.Container>
                <div className="videoContainer">
                    <video height="720" width="1280" autoPlay loop muted id='myVideo'>
                        <source src={backgroundVideo} type='video/mp4'/>
                    </video>
                </div>
            </ReactBootStrap.Container>
        </div>
    )
}

export default Home;