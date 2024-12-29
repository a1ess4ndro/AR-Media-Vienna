//import { useState } from "react";

//import { motion } from "motion/react";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import React from 'react';

function About() {
  return (
    <div
      id="aboutContainer"
      className="bg-white text-black flex flex-col px-4 py-8 items-left justify-center /*border border-yellow-200*/"
    >
      <h1>Unsere Werte</h1>
      <p className="my-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, magni
        necessitatibus! Non quasi expedita, rerum voluptas dignissimos quis,
        assumenda sit possimus laboriosam quia laudantium ad ipsa fugiat?
      </p>
      <br />
      <img src="../../public/AboutImage.jpg" alt="Teamfoto" className="mb-2" />
    </div>
  );
}

export default About;
