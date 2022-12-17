import React from 'react';
import About from './About.js/About';
import Banner from './Banner/Banner';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Navigation from './Navigation/Navigation';
import News from './News/News';
import Product from './Product/Product';
import Service from './Service.js/Service';
import Testimonial from './Testimonial/Testimonial';
const Home = () => {
    return (
        <>
           <Navigation /> 
           <Banner />
           <About />
           <News />
           <Service />
           <Blog />
           <Product />
           <Testimonial />
           <Contact />
        </>
    );
};

export default Home;