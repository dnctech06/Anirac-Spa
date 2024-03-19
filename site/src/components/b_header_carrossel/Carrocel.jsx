"use client";
import Image from 'next/image';
import style from './carrocel.css';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import foto1 from '../../assets/img/carrossel/1.jpg';
import foto2 from '../../assets/img/carrossel/2.jpg';
import foto3 from '../../assets/img/carrossel/3.jpg';
import foto4 from '../../assets/img/carrossel/4.jpg';
import foto5 from '../../assets/img/carrossel/5.jpg';
import Link from 'next/link';

function Carrossel() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false
  };

  return (
    <main className='Carousel_full'>

      <Link  className='linkCuidadosTitle' href='/cuidados'>
        <div className="txtCuidados">
          <h2>CUIDADOS</h2>
        </div>
        <Slider {...settings} className='estilo'>
          <div>
            <Image className='ImgCarousel' src={foto1} alt="Imagem 1" />
          </div>
          <div>
            <Image className='ImgCarousel' src={foto2} alt="Imagem 2" />
          </div>
          <div>
            <Image className='ImgCarousel' src={foto3} alt="Imagem 3" />
          </div>
          <div>
            <Image className='ImgCarousel' src={foto4} alt="Imagem 4" />
          </div>
          <div>
            <Image className='ImgCarousel' src={foto5} alt="Imagem 5" />
          </div>
        </Slider>
      </Link>



    </main>

  );
}

export default Carrossel;