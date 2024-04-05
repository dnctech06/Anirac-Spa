import style from './style.css';
import Image from 'next/image';

import FaceBlack from '../../assets/img/servicos/FaceBlack.png';
import InstaBlack from '../../assets/img/servicos/InstaBlack.png';
const endereco = 'Travessa do Teixeirinha RC n23';
const cep = '4750-336 Barcelos';
const telefone1 = '935689094 Carina Barbosa';
const telefone2 = '915431245 Susana Barbosa';
const Footer = (props) => {
    return (
        <main style={props.style} className='footer'>
            <div className='footer_info'>
                <div>
                    <iframe
                        className='mapa'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65029989.89601611!2d-76.97627456207601!3d5.839327177557996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2453c3dc4f57bf%3A0x4de05f76c2d63628!2sAnirac%20SPA!5e0!3m2!1spt-BR!2sbr!4v1709996456843!5m2!1spt-BR!2sbr"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    >
                    </iframe>
                </div>
                <div className='localization'>
                    <p>{endereco}</p>
                    <p>{cep}</p>
                    <p>{telefone1}</p>
                    <p>{telefone2}</p>
                    <strong><p>(custo chamada móvel nacional)</p></strong>
                    <div className='footer_links'>
                        <div className="styleLksOut">
                            <a target="_blank" href="https://www.instagram.com/aniracspa/?igsh=aWthaDhzN3g4ZDNz"><Image className='lks_out' src={InstaBlack} alt="Foto logo" /></a><p> @aniracspa
                            </p>
                        </div>
                        <div className="styleLksOut">
                            <a target="_blank" href="https://m.facebook.com/profile.php/?id=100083463273920"><Image className='lks_out' src={FaceBlack} alt="Foto logo" /></a><p> /aniracspa </p> 

                        </div>
                    </div>
                </div>
            </div>
            <p className='footer_end'>Construído por Tech06 - DNC ®All rights reserved</p>


        </main>
    )
}

export default Footer;