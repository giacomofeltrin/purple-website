import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Our tools: easy to initialize
          <br /> and free to use
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Enjoy</motion.b> and have
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>fun</motion.b> with these
          </h1>
          <button onClick={() => window.location.href = "https://patreon.com/Vitrua"}>
            SUPPORT THE DEVELOPING
          </button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Chobe - Italian Media Experience for Kodi</h2>
          <p>
            Chobe is a Kodi addon designed to enhance the Italian media consumption 
            experience for learners and enthusiasts. 
            Whether you're interested in dubbed or original Italian content, 
            or you're a fan of Italian-subtitled anime, 
            Chobe brings an authentic touch to your media library.
          </p>
        {/* <img
            src="https://raw.githubusercontent.com/giacomofeltrin/chobe/main/kodi20/chobe/resources/images/icon.png"
            alt="Chobe Italian Media Experience"
            style={{ width: "75px", height: "75px", objectFit: "cover", margin: "0 auto" }}
        /> */}
          <button onClick={() => window.location.href = "https://vitrua.top/chobe/"}>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>AutoVersion snippet - for self versioning Github projects</h2>
          <p>
            A GitHub action snippet designed to streamline the process of 
            versioning and release management for software projects following the 
            conventional commits specification outlined at www.conventionalcommits.org. 
            By utilizing this snippet, developers can easily initiate a project 
            that automatically updates its version based on the 
            semantic versioning (SemVer) rules.
          </p>
          <button onClick={() => window.location.href = "https://vitrua.top/autoversion/"}>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Helm Chart Unused Values Finder - clean your Kubernetes configs</h2>
          <p>
            A utility tool designed to assist in the management and optimization of 
            Kubernetes configurations. 
            By identifying values within Helm charts that are defined but not utilized in templates, 
            this python script helps ensuring efficiency and cleanliness in your deployments.
          </p>
          <button onClick={() => window.location.href = "https://vitrua.top/helmunused/"}>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
