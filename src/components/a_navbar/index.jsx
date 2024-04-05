import Image from 'next/image';
import style from './style.css';
import FaceColor from '../../assets/img/servicos/FaceColor.png';
import InstaColor from '../../assets/img/servicos/InstaColor.png';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='Full_navbar'>
            <div className='navbar_links'>
                <a target="_blank" href="https://www.instagram.com/aniracspa/?igsh=aWthaDhzN3g4ZDNz"><Image className='lks_out' src={InstaColor} alt="Foto logo" /></a>
                <a target="_blank" href="https://m.facebook.com/profile.php/?id=100083463273920"><Image className='lks_out' src={FaceColor} alt="Foto logo" /></a>
            </div>

            <Link className='lksHome' href="/">
                <h1>ANIRAC</h1>
                <h2>CORPO MENTE ALMA</h2>
            </Link>

            <div className='navbar_btn'>
                <Link id='Home' className='lks' href="/">HOME</Link>
                <Link id='Home' className='lks' href="sobreNos">SOBRE NÓS</Link>
                <Link id='Home' className='lks' href="cuidados">SERVIÇOS</Link>
                <Link id='Home' className='lks' href="">PRECÁRIO</Link>
                <Link id='Home' className='lks' href="">TESTEMUNHOS</Link>
                <Link id='Home' className='lks' href="">LOJA ONLINE</Link>
                <Link id='Home' className='lks' href="contatos">CONTACTOS</Link>
            </div>

        </div>
    )
}



export default Navbar;
