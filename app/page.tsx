import React from 'react';
import heroImage from '@/public/assets/img/hero.png';
import Image from 'next/image';

const App = () => {
  return (
    <>
      <section>
        <div>
          <h1>A healthy meal delivered to your door, every single day</h1>
        </div>
        <p>
          The smart 365-days-per-year food subscription that will make you eat
          healthy again. Tailored to your personal tastes and nutritional needs.
          We have delivered 250,000+ meals last year!
        </p>
      </section>
      <div>
        <Image src={heroImage} alt='Hero Image' />
      </div>
    </>
  );
};

export default App;
