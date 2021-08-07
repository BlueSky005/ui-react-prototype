import React, { useEffect, useRef, useState } from 'react';
import './css/main.css';
import Header from './Components/Shared/Header';
import Footer from './Components/Shared/Footer';
import NeedAProject from './Components/NeedAProject';
import AboutMe from './Components/AboutMe';
import CompanyStatistics from './Components/CompanyStatistics';
import HeroImgBanner from './Components/HeroImgBanner';

function App () {

  const [isSticky, setSticky] = useState( false );
  const ref = useRef( null );
  const handleScroll = () => {
    if ( ref.current ) {
      setSticky( ref.current.getBoundingClientRect().top <= 0 );
    }
  };

  useEffect( () => {
    window.addEventListener( 'scroll', handleScroll );

    return () => {
      window.removeEventListener( 'scroll', () => handleScroll );
    };
  }, [] );

  return (

    <div className="App Site">
      <div className="Site-content">
        <div className={`sticky-wrapper ${isSticky ? ' sticky' : ''}`} ref={ref}>
          <Header />
        </div>

        <main>
          <HeroImgBanner />
          <CompanyStatistics />
          <AboutMe />
          <NeedAProject />
        </main>
      </div>
      <Footer />
    </div>

  );
}

export default App;
