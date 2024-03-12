import Image from 'next/image';
import style from './style.css';
import face from '../../assets/img/espaco/facebook.png';
import insta from '../../assets/img/espaco/insta.png';
import linkedin from '../../assets/img/espaco/linkedin.png';
import whatsApp from '../../assets/img/espaco/whats.png';

<style>
import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap')
</style>



const Footer = () => {
    return(
        <main>
            <div className='locate'>
                <div>
                    
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2511.3857111353677!2d-8.62111188865825!3d41.5355192829136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2453c3dc4f57bf%3A0x4de05f76c2d63628!2sAnirac%20SPA!5e0!3m2!1spt-BR!2sbr!4v1709560973048!5m2!1spt-BR!2sbr"  loading="lazy"></iframe>

                </div>

                <div>
                    <div id='address'>
                        <p>Travessa do Teixeirinha RC 23 <br/> 4750-336 Barcelos</p> <br/>
                        <h5>935689094 Carina Barbosa</h5>
                        <h5>915431245 Susana Barbosa</h5>
                        
                    </div>
                    <div className='contact'>
                        <a href="https://www.instagram.com/aniracspa/" target='_blank'> <Image src={insta} alt="Foto render" width={60}/> </a>
                        <a href="https://www.linkedin.com/in/anirac-spa-34852524b/" target='_blank'> <Image src={linkedin} alt="Foto render" width={60}/> </a>
                        <a href="https://wa.me/935689094" target='_blank'> <Image src={whatsApp} alt="Foto render" width={60}/> </a>
                        <a href="https://web.facebook.com/aniracspa?_rdc=1&_rdr" target='_blank'> <Image src={face} alt="Foto render" width={60}/> </a>
                    </div>
                </div>
            </div>
            Footer
        </main>
    )
}

export default Footer;