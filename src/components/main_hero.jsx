import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './main_hero.css';

const MainHero = () => {
    const slides = [
        {
            id: 1,
            title: 'Welcome to Manila Bankers Life',
            description: 'Your trusted partner in life insurance.',
            image: '/images/slide1.jpg',
        },
        {
            id: 2,
            title: 'Secure Your Future',
            description: 'Explore our comprehensive insurance plans.',
            image: '/images/slide2.jpg',
        },
        {
            id: 3,
            title: 'We Care for You',
            description: 'Providing peace of mind for you and your family.',
            image: '/images/slide3.jpg',
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="main-hero">
            <Slider {...settings}>
                {slides.map((slide) => (
                    <div key={slide.id} className="slide">
                        <img src={slide.image} alt={slide.title} className="slide-image" />
                        <div className="slide-content">
                            <h2>{slide.title}</h2>
                            <p>{slide.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MainHero;