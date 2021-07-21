import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import "./css/Logs.css";
import LogsCard from "./LogsCard";

function Logs() {
  return (
    <div>
      <ReactBootStrap.Container>
        {/* { <ReactBootStrap.Row className="logsContainer">
                    <ReactBootStrap.Col>
                        <div className="card">
                            <h2></h2>
                            <h5></h5>
                        </div>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col>
                        <div className="card">
                            <h2></h2>
                            <h5></h5>
                        </div>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col>
                        <div className="card">
                            <h2></h2>
                            <h5></h5>
                        </div>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row> } */}
        <ReactBootStrap.Row className="logsContainer">
          <ReactBootStrap.Col>
            <LogsCard
              title="Beta"
              releaseData="Release Date: 2021-07-27"
              featuresAdded={
                <ReactBootStrap.ListGroup>
                  <ReactBootStrap.ListGroup.Item>
                    Added authentication
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Many bug fixes
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Changed UI
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added persistent saving
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added animations
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added 3d video background
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Fixed game launcher
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added authorization
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added themes
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added ability to quit the game
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added a free play mode
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added a mini games mode
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added ability to logout
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added ability to register new users
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added ability to login with created users
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Fixed major bug in note detection
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added a strict mode for playing a song
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added a chill mode for playing a song
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added a timeline option to display how long the song is
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Fixed major bug where all songs were playing an octave too
                    low
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added support for 49 key pianos
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added support for 61 key pianos
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added support for 88 key pianos
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added setting to change to desired piano type
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Fixed bug where text would display under the notes
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added ability for note labels to be displayed at the end of
                    a note to make it easier to read
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added song title banner at the beginning of song
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Fixed bug where volume would randomly go to max
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Removed shop
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Changed gamelauncher UI
                  </ReactBootStrap.ListGroup.Item>
                </ReactBootStrap.ListGroup>
              }
            />
          </ReactBootStrap.Col>
          <ReactBootStrap.Col>
            <LogsCard
              title="Alpha"
              releaseData="Release Date: 2021-05-20"
              featuresAdded={
                <ReactBootStrap.ListGroup>
                  <ReactBootStrap.ListGroup.Item>
                    Ability to use midi keyboard
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Ability to detect note collisions with midi keyboard key
                    presses
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added main menu UI
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added settings
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Ability to import midi files
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added persistent data for player progression
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added filter songs option
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added ability to slow down songs
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added volume slider control
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added ability to turn on/off VFX
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added ability to turn on/off piano labels
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added ability to turn on/off note labels
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added garbage collection system to remove gameobjects no
                    longer being used
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added song selection system
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added ability to track number of notes hit correctly during
                    a song
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added a scoring system to reward players that hit notes
                    longest
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added a levelling system
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added ability to pause the game
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added ability to keep track of highscore on every song
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added ability to keep track of number of times the song has
                    been played
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added ability to keep track of percentage of song complete
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added UI to when the song is finished playing
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added button click SFX
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added levelling up animation
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added levelling up SFX
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added ability to hear the .mid file
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added UI for the pause menu
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added ability to goto the main menu in the pause menu
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added ability to replay song
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added language support for english, french and spanish
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added UI text to indicate when a midi keyboard has been
                    plugged in and unplugged
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added particle system for note collsions
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added UI for piano keyboard in game
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added UI to correlate to key presses on the keyboard
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added UI for play current level
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added UI for player current exp
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added dropdown setting for resolution
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added ability to reset settings to default
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added ability to save settings
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added a double check for settings changes
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added ability for user to delete a user imported song
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added added a double check for deleting a user imported song
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added ~50 songs
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added setting for fullscreen mode or windowed mode
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Added ability to quit the application
                  </ReactBootStrap.ListGroup.Item>
                  <ReactBootStrap.ListGroup.Item>
                    Many bug fixes
                  </ReactBootStrap.ListGroup.Item>
                </ReactBootStrap.ListGroup>
              }
            />
          </ReactBootStrap.Col>
          <ReactBootStrap.Col>
            <LogsCard
              title="Start of Development"
              releaseData="Release Date: 2021-03-06"
              featuresAdded={
                <ReactBootStrap.ListGroup>
                  <ReactBootStrap.ListGroup.Item>
                    This is the day I started development
                  </ReactBootStrap.ListGroup.Item>
                </ReactBootStrap.ListGroup>
              }
            />
          </ReactBootStrap.Col>
        </ReactBootStrap.Row>
      </ReactBootStrap.Container>
    </div>
  );
}

export default Logs;
