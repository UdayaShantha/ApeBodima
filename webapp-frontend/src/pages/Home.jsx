import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


import wallpaper from '../component/images/Rectangle1.png';
import '../component/css/Home.css';
import CardComponent from '../component/CardComponent';
import Buying from '../../src/component/images/Buyingahouse.png';
import card1 from '../component/images/card1.png';
import card2 from '../component/images/card2.png';
import card3 from '../component/images/card3.png';

const cardData = [
  {
    image: card1,
    title: 'Easy Account Creation',
    desc: 'Create an account in seconds and start exploring',
  },
  {
    image: card2,
    title: 'Detailed Apartment Listing',
    desc: 'Browse through comprehensive apartment details and amenities',
  },
  {
    image: card3,
    title: 'Add New Apartment',
    desc: 'If your apartment is good, share it with us',
  },
];

const Home = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: cardsRef, inView: cardsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const headerAnimationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const cardAnimationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bd">
      
      <div className="imgcontainer">
        <img src={wallpaper} alt="wallpaper" className="image" />
      </div>
      <div className="container">
        <motion.div
          ref={headerRef}
          className="headerTextcontainer"
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          variants={headerAnimationVariants}
          transition={{ duration: 1 }}
        >
          <div className="headerImg">
            <img src={Buying} alt="buying" />
          </div>
          <div className="headerText">
            <h1>Discover your perfect apartment with ease</h1>
            <p>
              At Bodim, we make finding your ideal apartment effortless. With easy account creation, detailed listing and user reviews, you’ll have all the information you need to make the right choice.
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={cardsRef}
          className="card-container"
          initial="hidden"
          animate={cardsInView ? 'visible' : 'hidden'}
          variants={cardAnimationVariants}
          transition={{ duration: 3, staggerChildren: 0.3 }}
        >
          {cardData.map((data, index) => {
            return (
              
                <CardComponent
                  key={index}
                  image={data.image}
                  title={data.title}
                  desc={data.desc}
                />
             
            );
          })}
        </motion.div>
        <button className="signin">SignIn</button>
      </div>
    </div>
  );
};

export default Home;
