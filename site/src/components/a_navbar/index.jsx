import Image from 'next/image';
import style from './style.css';
import Logo from '../../assets/img/servicos/logo.jpg';
import Face from '../../assets/img/servicos/facebookVerde.png';
import Insta from '../../assets/img/servicos/instagraVerdem.png';
import Link from 'next/link';


const Navbar = () => {
    return (
        <div className='Full_navbar'>
           <a href="/"><Image   className='logo' src={Logo} alt="Foto logo" /> </a> 
            <div className='navbar_btn'>
                <Link id='Home' className='lks' href="/">Início</Link>
                <Link id='Home' className='lks' href="sobreNos">Sobre Nós</Link>
                <Link id='Home' className='lks' href="cuidados">Cuidados</Link>
                <Link id='Home' className='lks' href="contatos">Contatos</Link>
            </div>
            <div className='navbar_links'>
                <a target="_blank" href="https://www.instagram.com/aniracspa/?igsh=aWthaDhzN3g4ZDNz"><Image className='lks_out' src={Insta} alt="Foto logo" /></a>
                <a target="_blank" href="https://m.facebook.com/profile.php/?id=100083463273920"><Image className='lks_out' src={Face} alt="Foto logo" /></a>
            </div>
        </div>
    )
}



export default Navbar;
