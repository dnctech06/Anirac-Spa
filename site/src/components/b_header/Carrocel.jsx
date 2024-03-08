import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from './carrocel.css';
function Carrossel() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
      
    };
  
    return (
      <Slider {...settings} className='estilo'>
        <div>
          <img src='next.svg' alt="Imagem 1" />
        </div>
        <div>
          <img src='vercel.svg'alt="Imagem 2" />
        </div>
        <div>
          <img src='next.svg' alt="Imagem 3" />
        </div>
        <div>
          <img src='vercel.svg' alt="Imagem 4" />
        </div>
        <div>
          <img src='next.svg' alt="Imagem 5" />
        </div>
        {/* Adicione mais imagens conforme necessário */}
      </Slider>
    );
  }

export default Carrossel