import React from 'react';
import Banner from './content/Banner';
import CarouselSlider from './content/CarouselSlider';
import ContactForm from './content/ContactForm';
import Content from './content/Content';
import ContentCard from './content/ContentCard';
import ContentServiceCard from './content/ContentServiceCard';
import CustomBanner from './content/CustomBanner';

function Wrapper(props) {
    return (
        <div className='wrapper'>
            <Banner />
            <Content />
            <ContentCard />
            <div className='wrapped'>
                <ContentCard />
            </div>
            <ContentServiceCard />
            <CarouselSlider />
            <CustomBanner />
            <ContactForm />
        </div>
    );
}

export default Wrapper;