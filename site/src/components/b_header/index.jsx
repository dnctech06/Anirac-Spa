import Image from 'next/image';
import style from './style.css';

import image2 from '../../assets/img/espaco/10.jpg';
import image1 from '../../assets/img/espaco/4.jpg';

const Header = () => {
    return (
        <main>

            <div id="secao-imagem">
                <div id="text-imagem">
                    <h2>Quem somos?</h2>
                    <p>A Anirac é uma empresa dedicada ao ramo de estética e bem-estar.
                        Fundada há um ano e meio e com sede em Braga-Portugal, veio da
                        idealização de duas mulheres chamadas Carina. A empresa busca
                        proporcionar aos clientes uma experiência única, as sócias, uma
                        especializada na parte estética e a outra focada em terapias holíticas,
                        dividem suas funções para oferecer uma gama variadade serviços.
                    </p>
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