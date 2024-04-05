import style from './style.css';
import Image from 'next/image';
import ambas from '../../assets/img/fundadoras/ambas.JPG'

const Header = () => {
    return (
        <main className='FullHeader'>
            <div className="secaoImagem">
                <div className="text-imagem">
                    <h2>SOBRE NÓS</h2>
                    <p>Amamos o que fazemos e sempre
                        fazemos mais do que aquilo que é
                        esperado.
                        Temos muito orgulho na qualidade
                        dos nossos serviços.
                        Somos administradas por nós,
                        movidas pela paixão de cuidar do
                        outro e sempre em busca de algo
                        novo para inovar.
                        É neste servir de alma com os
                        nossos clientes que formamos
                        relacionamentos de longo prazo, pois
                        a felicidade deles é a nossa
                        felicidade.
                        O nosso negócio foi criado com base
                        no cuidar de corpo, mente e alma,
                        pois tudo faz parte do mesmo
                        individuo e é esta grande conjugação
                        que nos torna tão fortes.
                    </p>
                </div>
                <div className="image">
                    <Image src={ambas} className={"img1"} alt="Error" />

                </div>
            </div>
            <h1>As Carinas Barbosas</h1>
        </main>
    )
}

export default Header;