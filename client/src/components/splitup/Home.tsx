import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Carousels from './CarouselComponent';
import AboutUs from './AboutUs';
import Testimonials from './Testimonials';
import ContactUs from './ContactUs';
import Footer from './Footer';

const Home = () => {
  return (
       <div>
            <Header />
            <Navbar />
            <Carousels children={[]} interval={0} next={function (): void {
        throw new Error('Function not implemented.');
      } } previous={function (): void {
        throw new Error('Function not implemented.');
      } } />
            <AboutUs />
            <Testimonials />
            <ContactUs />
            <Footer />
        </div>
    
  );

};

export default Home;