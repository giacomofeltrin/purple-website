import { useRef, useState } from "react";
import "./about.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

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
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

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
          <h4>VịtRùa is a collaborative initiative fueled by the passion of a diverse, international team of tech enthusiasts. 
            Our project is characterized by versatility, adaptability, and a steady pace towards promoting accessible knowledge 
            and practical tools for various tasks and needs.
          </h4>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h4>Our team, comprised of students and professionals with diverse specializations, converges on a common goal: 
            to create an inclusive platform that demystifies technology and provides comprehensive guides readable by everyone. 
            'VịtRùa' aims to break down barriers and make the vast realm of technology accessible to individuals from all walks of life.
          </h4>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h4>This venture, fueled entirely by our team's dedication during our free time, exemplifies the spirit of collaboration and 
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
          <h4>In the spirit of 'VịtRùa,' join us in this exciting journey where technology meets accessibility, and together, 
            let's create a world where knowledge knows no bounds.
          </h4>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Our precious sponsors</h2>
          <span>...</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Our experts currently available for you to hire:</h2>
          <div>
            <img src="/favicon.ico" alt="" style={{ width: '16px', height: '16px', marginRight: '8px' }} />
            <span>Marketing Manager</span>
          </div>
          <div>
            <img src="/favicon.ico" alt="" style={{ width: '16px', height: '16px', marginRight: '8px' }} />
            <span>DevOps Engineer</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
