import { useRef, useState } from "react";
import "./chobetool.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Container = ({ children }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      overflowX: 'hidden',
      scrollbarWidth: 'thin',
      scrollbarColor: '#061a30 #0c0c1d'
    }}>
      <div style={{
        maxWidth: '1366px',
        width: '100%',
        overflowY: 'scroll',
        scrollbarWidth: 'thin',
        scrollbarColor: '#061a30 #0c0c1d'
      }}>
        {children}
      </div>
    </div>
  );
};


const ChobeTool = () => {
  const ref = useRef();

  return (
    <Container>
      <motion.div
        ref={ref}
        className="chobe_tool"
        variants={variants}
        initial="initial"
        whileInView="animate"
        style={{ overflowY: "auto", maxHeight: "calc(100vh - 100px)" }} // Adjust the maxHeight value as needed
      >
        <motion.div className="textContainer" variants={variants}>
          <motion.h1 variants={variants}><motion.b whileHover={{color:"orange"}} style={{ marginBottom: '20px' }}>Chobe</motion.b></motion.h1>
          <motion.p align="center" variants={variants}>
            <img src="https://github.com/giacomofeltrin/chobe/blob/main/kodi20/chobe/resources/images/icon.png?raw=true" alt="Chobe Logo" width="150" style={{ marginTop: '10px' }}/>
          </motion.p>
          <motion.p variants={variants}>
            <motion.a href="https://github.com/giacomofeltrin/chobe" variants={variants}>
              <img src="https://badge.fury.io/gh/giacomofeltrin%2Fchobe.svg" alt="GitHub version" />
            </motion.a>
            <motion.a href="https://github.com/giacomofeltrin/chobe/stargazers" variants={variants}>
              <img src="https://img.shields.io/github/stars/giacomofeltrin/chobe.svg" alt="GitHub stars" />
            </motion.a>
            <motion.a href="https://patreon.com/Vitrua" variants={variants}>
              <img src="https://img.shields.io/badge/Support%20us%20on-Patreon-orange.svg" alt="Patreon" />
            </motion.a>
          </motion.p>
          <motion.div className="item" variants={variants}>
            <h4 style={{ marginTop: '20px' }}>Chobe is a Kodi addon designed to enhance the Italian media consumption experience for learners and enthusiasts. Whether you're interested in dubbed or original Italian content, or you're a fan of Italian-subtitled anime, Chobe brings an authentic touch to your media library.</h4>
            <h4 style={{ marginTop: '20px' }}>Developed for Kodi 20.2-Nexus, this addon may not be compatible with earlier versions.</h4>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h2 style={{ marginTop: '20px' }}>Getting Started</h2>
            <ol>
              <li>Open Kodi and navigate to the <b>Settings</b> menu.</li>
              <li>Click on <b>System</b>, then <b>Add-ons</b>.</li>
              <li>Toggle the switch for <b>Unknown sources</b> to allow installations from external sources.</li>
              <li>Go back to the <b>System</b> menu and select <b>File Manager</b>.</li>
              <li>Click on <b>Add Source</b> and enter the following URL: <code>https://giacomofeltrin.github.io/chobe</code></li>
              <li>Give the source a name, such as "Chobe Repo," and click <b>OK</b>.</li>
              <li>Return to the Kodi home screen and go to <b>Add-ons</b>.</li>
              <li>Click on the <b>Package Installer</b> icon (usually located in the top-left corner).</li>
              <li>Choose <b>Install from zip file</b>, select "Chobe Repo," and install the <code>chobe.zip</code> file.</li>
            </ol>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h2 style={{ marginTop: '20px' }}>Disclaimer</h2>
            <h4 style={{ marginTop: '10px' }}><b>Important:</b> Chobe is provided as-is, and the developers hold no responsibility for how users utilize the plugin. Users are reminded to ensure they have the legal rights to access and view the media content available through Chobe. The developer does not endorse or encourage any form of copyright infringement.</h4>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h2 style={{ marginTop: '20px' }}>Troubleshooting</h2>
            <h3 style={{ marginTop: '15px' }}>Common Issues During Installation</h3>
            <h4 style={{ marginTop: '10px' }}><i>Unknown Sources Error</i></h4>
            <ol>
              <li>Return to the Kodi home screen.</li>
              <li>Navigate to <b>System</b>  <b>System Settings</b> <b>Add-ons</b>.</li>
              <li>Toggle the switch for <b>Unknown sources</b> to enable installations from external sources.</li>
            </ol>
            <h4 style={{ marginTop: '10px' }}><i>Repository Installation Error</i></h4>
            <p>If you are unable to install the repository from the provided URL:</p>
            <ul>
              <li>Double-check the URL (<code>https://giacomofeltrin.github.io/chobe</code>) for accuracy.</li>
              <li>Ensure you have a stable internet connection.</li>
            </ul>
            <h4 style={{ marginTop: '10px' }}><i>Addon Installation Fails</i></h4>
            <p>If the addon installation fails:</p>
            <ul>
              <li>Ensure your Kodi version is 20.2 or later.</li>
              <li>Confirm that you've successfully installed the Chobe repository.</li>
            </ul>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h3 style={{ marginTop: '15px' }}>Other Common Issues</h3>
            <h4 style={{ marginTop: '10px' }}><i>Media Playback Issues</i></h4>
            <p>If you experience issues with media playback:</p>
            <ul>
              <li>Verify that your internet connection is stable.</li>
              <li>Check if the media files are accessible and playable outside of Chobe.</li>
            </ul>
            <p>If the troubleshooting steps above do not resolve your issue, feel free to <a href="https://github.com/giacomofeltrin/chobe/issues">create a new issue</a> on our GitHub repository. We'll do our best to assist you.</p>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h2 style={{ marginTop: '20px' }}>Thanks</h2>
            <h4 style={{ marginTop: '10px' }}>Your support helps us continue to enhance Chobe and provide a better Italian media experience for Kodi users.</h4>
            <p>Thank you for choosing Chobe! <span role="img" aria-label="Italian Flag">🇮🇹📺</span></p>
            <a href="https://patreon.com/Vitrua">
              <motion.div className="imageContainer" variants={variants}>
                <img src="https://i.imgur.com/vRwnAWR.png" alt="Vitrua Logo" width="75" align="left" />
              </motion.div>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default ChobeTool;
