import Image from 'next/image';
import style from './style.css';
import Foto1 from '../../assets/img/espaco/1.jpg';

const Navbar = () => {
    return(
        <div>
            <Image src={Foto1} alt="Foto render" />
        </div>
    )
}

export default Navbar;
