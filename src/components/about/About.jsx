import { useRef, useState } from "react";
import "./about.scss";
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

const About = () => {
  const ref = useRef();

  return (
    <motion.div
      ref={ref}
      className="about"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}><motion.b whileHover={{color:"orange"}}>VịtRùa</motion.b></motion.h1>
        <motion.div className="item" variants={variants}>
          <h4>VịtRùa is a collaborative initiative driven by the passion of a diverse, international team of tech enthusiasts, 
            including students and professionals with varied specializations. 
            Unified by a shared objective, our team aims to create an inclusive platform that demystifies technology, 
            offering comprehensive guides accessible to everyone. 
            The project embodies versatility, adaptability, and a steadfast commitment to promoting accessible knowledge and 
            practical tools for diverse tasks and needs, ultimately striving to break down barriers and make the vast 
            realm of technology accessible to individuals from all walks of life.
          </h4>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h4>This initiative, fueled entirely by our team's dedication during our free time, exemplifies the spirit of collaboration and 
            community-driven learning. We believe in the power of freely sharing tools and guides to empower individuals globally, 
            fostering a culture of continuous learning and innovation.
          </h4>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h4>All our resources and instruments are generously provided without charge, reinforcing our commitment to breaking down 
            financial barriers to knowledge. However, if you find our tools useful, we warmly welcome donations that will enable us 
            to enhance and expedite our mission. Your contributions will not only support the continuation of these initiatives 
            but also enable us to expand our reach, spreading knowledge even further.
          </h4>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Our precious sponsors:</h2>
          <h5><img src="/favicon.ico" alt="" style={{ width: '16px', height: '16px', marginRight: '1px' }} />Albon, <img src="/favicon.ico" alt="" style={{ width: '16px', height: '16px', marginRight: '1px' }} />JackArgetlam, <img src="/favicon.ico" alt="" style={{ width: '16px', height: '16px', marginRight: '1px' }} />Heobe</h5>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <a href="https://patreon.com/Vitrua">
            <div className="imageContainer">
              <img src="/supportmon.png" alt="" style={{ width: '300px', height: '300px', marginRight: '1px' }}/>
            </div>
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
