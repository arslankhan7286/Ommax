import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function CarouselSlider(props) {

      return (
          <div className="crousel-content">
            <div className="container">
            <h2>Customs Support is a full-service provider for customs services and is here to help</h2>
                <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={10000}
                >
                <div className="crousel-slider-card">
                    <img src='assets/slider-img.png' alt='' />
                    <div className="myCarousel">
                        <h3>Import customs clearance</h3>
                        <p>If you would like to import goods from a third country to within the European Union, Customs Support assists you in every step of the customs clearance process. Our customs experts take care of import documents, classification of import goods with the correct HS code, coordination of physical inspection and duty management.</p>
                        <a href='#'>Learn more </a>
                    </div>
                </div>
                <div className="crousel-slider-card">
                    <img src='assets/slider-img.png' alt='' />
                    <div className="myCarousel">
                        <h3>Import customs clearance</h3>
                        <p>If you would like to import goods from a third country to within the European Union, Customs Support assists you in every step of the customs clearance process. Our customs experts take care of import documents, classification of import goods with the correct HS code, coordination of physical inspection and duty management.</p>
                        <a href='#'>Learn more </a>
                    </div>
                </div>
                <div className="crousel-slider-card">
                    <img src='assets/slider-img.png' alt='' />
                    <div className="myCarousel">
                        <h3>Import customs clearance</h3>
                        <p>If you would like to import goods from a third country to within the European Union, Customs Support assists you in every step of the customs clearance process. Our customs experts take care of import documents, classification of import goods with the correct HS code, coordination of physical inspection and duty management.</p>
                        <a href='#'>Learn more </a>
                    </div>
                </div>
                <div className="crousel-slider-card">
                    <img src='assets/slider-img.png' alt='' />
                    <div className="myCarousel">
                        <h3>Import customs clearance</h3>
                        <p>If you would like to import goods from a third country to within the European Union, Customs Support assists you in every step of the customs clearance process. Our customs experts take care of import documents, classification of import goods with the correct HS code, coordination of physical inspection and duty management.</p>
                        <a href='#'>Learn more </a>
                    </div>
                </div>
                <div className="crousel-slider-card">
                    <img src='assets/slider-img.png' alt='' />
                    <div className="myCarousel">
                        <h3>Import customs clearance</h3>
                        <p>If you would like to import goods from a third country to within the European Union, Customs Support assists you in every step of the customs clearance process. Our customs experts take care of import documents, classification of import goods with the correct HS code, coordination of physical inspection and duty management.</p>
                        <a href='/'>Learn more </a>
                    </div>
                </div>
                <div className="crousel-slider-card">
                    <img src='assets/slider-img.png' alt='' />
                    <div className="myCarousel">
                        <h3>Import customs clearance</h3>
                        <p>If you would like to import goods from a third country to within the European Union, Customs Support assists you in every step of the customs clearance process. Our customs experts take care of import documents, classification of import goods with the correct HS code, coordination of physical inspection and duty management.</p>
                        <a href='/'>Learn more </a>
                    </div>
                </div>
                </Carousel>
            </div>
        </div>
      );
  }
  export default CarouselSlider;