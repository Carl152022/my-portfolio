import React from 'react';

const Hero = () => {
  return (
    <section className = "heroBox" id="hero">
        <img src="carlPic.jpg" alt="Carl Arjhon Minor" style={{ width: '370px', height: 'auto' }} />
            <div className="textHero">
                <h1>Hi, I'm Carl Arjhon Minor</h1>
                <p>
                    A passionate front-end developer <br />specializing in crafting beautiful and 
                    user-friendly <br />web experiences. <br /><br />"Explore my work and let's connect."
                </p>
            </div>
    </section>
  );
};

export default Hero;