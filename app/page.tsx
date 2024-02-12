import React from 'react';
import heroImage from '@/public/assets/img/hero.png';
import Image from 'next/image';
import CustomerImage1 from '@/public/assets/img/customers/customer-1.jpg';
import CustomerImage2 from '@/public/assets/img/customers/customer-2.jpg';
import CustomerImage3 from '@/public/assets/img/customers/customer-3.jpg';
import CustomerImage4 from '@/public/assets/img/customers/customer-4.jpg';
import CustomerImage5 from '@/public/assets/img/customers/customer-5.jpg';
import CustomerImage6 from '@/public/assets/img/customers/customer-6.jpg';

const App = () => {
  return (
    <>
      <section className='bg-tintWhite py-[9.6rem] px-0'>
        <div className='grid grid-cols-2 max-w-[130rem] my-auto mx-auto items-center gap-[9.6rem]'>
          <div>
            <h1 className='text-[5.2rem] font-[700] leading-[1.05] tracking-[-0.5px] mb-[3.2rem] text-[#333]'>
              A healthy meal delivered to your door, every single day
            </h1>

            <p className='text-[2rem] leading-[1.6] mb-[4.8rem] '>
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs. We have delivered 250,000+ meals last year!
            </p>

            <a
              href='#'
              className='inline-block bg-primary text-white no-underline text-[2rem] font-semibold py-[1.6rem] px-[3.2rem] rounded-[9px] transition-colors duration-300 mr-6 hover:bg-shadeOrange'
            >
              Start eating well
            </a>

            <a
              href='#'
              className='inline-block bg-white text-accentDarkGray no-underline text-[2rem] font-semibold py-[1.6rem] px-[3.2rem] rounded-[9px]  transition-colors duration-300 hover:bg-tintWhite  hover:shadow-insideShadow'
            >
              Learn more &darr;
            </a>
            <div className=''>
              <div>
                <Image src={CustomerImage1} alt={''} />
              </div>
            </div>
          </div>

          <div>
            <Image
              src={heroImage}
              alt='Woman enjoying food, meals in storage container, and food bowls on a table'
              className='w-full'
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
