import Image from 'next/image';
import style from './style.css';
import Image from 'next/image';

import FaceColor from '../../assets/img/servico/FaceColor.png';
import InstaColor from '../../assets/img/servico/InstaColor.png';
const endereco = 'Travessa do Teixeirinha RC n23';
const cep = '4750-336 Barcelos';
const telefone1 = '935689094 Carina Barbosa';
const telefone2 = '915431245 Susana Barbosa';
const Footer = () => {
    return (
        <main className='footer'>
            <div className='footer_info'>
                <div>
                <iframe className='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65029989.89601611!2d-76.97627456207601!3d5.
                839327177557996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2453c3dc4f57bf%3A0x4de05f76c2d63628!2sAnirac%
                20SPA!5e0!3m2!1spt-BR!2sbr!4v1709996456843!5m2!1spt-BR!2sbr"   
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">

                </iframe>
                </div>
                <div className='localization'>
                    <h4>{endereco}</h4>
                    <h4>{cep}</h4>
                    <h4>{telefone1}</h4>
                    <h4>{telefone2}</h4>
                    <strong><p>(custo chamada móvel nacional)</p></strong>
                    <div className='footer_links'>
                        <a target="_blank" href="https://www.instagram.com/aniracspa/?igsh=aWthaDhzN3g4ZDNz"><Image className='lks_out' src={InstaColor} alt="Foto logo" /></a>
                        <a target="_blank" href="https://m.facebook.com/profile.php/?id=100083463273920"><Image className='lks_out' src={FaceColor} alt="Foto logo" /></a>
                    </div>
                </div>
            </div>
            <p className='footer_end'>Contruído por Tech06 - DNC ®All rights reserved</p>
            

        </main>
    )
}

export default Footer;