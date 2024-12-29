//import { useState } from "react";

import { motion } from 'motion/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

function Hero() {
  return (
    <div
      id="heroContainer"
      className="flex flex-col px-4 pt-16 pb-12 justify-center transition-all fade-in duration-300 /*border border-yellow-200*/"
    >
      <div>
        <motion.h1
          initial={{ opacity: 0, x: 250 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <span className="text-transparent font-outline-2">
            {/*<b>Servus! </b>*/}
          </span>
          Willkommen bei
          <span className="text-transparent font-outline-2">
            <br />
            <span> AR Media Vienna</span>
          </span>
        </motion.h1>
      </div>
      <br />
      <motion.p
        initial={{ opacity: 0, x: 250 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: 'easeIn' }}
        className=""
      >
        <p>
          Wir bieten maßgeschneiderte Lösungen für kleine bis mittelständische
          Unternehmen und unterstützen umfangreich in den Bereichen
          Webentwicklung & Digital Marketing. Dabei setzen wir auf aktuelle
          Technologien und bewährte Methoden.
        </p>
      </motion.p>
      <motion.div
        className="flex w-full h-40 items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1, ease: 'easeIn' }}
      >
        <FontAwesomeIcon
          icon={faArrowDown}
          style={{ color: '#ffffff' }}
          className="h-8 animate-bounce mt-6"
        />
      </motion.div>
    </div>
  );
}

export default Hero;
