import Image from 'next/image';
import style from './style.css';

import image2 from '../../assets/img/espaco/10.jpg';
import image1 from '../../assets/img/espaco/4.jpg';

const Header = () => {
    return(
        <main>
             
            <div id="secao-imagem">
                <div id="text-imagem">
                    <h2>Quem somos?</h2>
                    <p>Nós realizamos desde 2002 projetos e gerenciamento de obras.
                    Com mais de 800 projetos e 2.000.000 de m² construídos, tendo
                    como principal proposta transformar em realidade os sonhos de
                    seus clientes, criando projetos personalizados, unindo a tradição
                    e a modernidade em nossos projetos.</p>
                </div>
                <div id="image">
                    <Image src={image1} className={"img1"} alt="Error" />
                    <Image src={image2} className={"img2"} alt="Error" />
                    
                </div>
            </div>
        </main>
    )
}

export default Header;