import Image from 'next/image';
import style from './style.css';
import Flor from '../../assets/img/servicos/flor.jpg';


const MainHome = () => {
    return (
        <main>
            <div className='whoWeAre'>
                <div className='imageswho'>
                    <div className='imgFrase'>
                        <Image id='foto1' className='ImgWho' src={Flor} alt="Foto render" />
                        <i><h3>"Navega por todas as possibilidades que podes escolher para ti"</h3></i>

                    </div>
                </div>
                <div className='txt'>
                    <h2>COMPROMISSO</h2><br /><br />
                    <p>O bem-estar é a nossa prioridade. Embelezar e cuidar do corpo, da mente e da alma. Aqui vais 
                        recuperar e acrescentar mais auto-estima, mais força pessoal, mais reconhecimento da pessoa 
                        incrível que és. Cada pessoa é única e deve ser tratada de forma personalizada. Dentro da Anirac 
                        não existe uma religião, todos somos a religião. Verdade, honestidade, privacidade. Não conseguimos 
                        mudar/curar o mundo, mas conseguimos uma pessoa de cada vez.
                    </p>
                </div>
            </div>
        </main>
    )
}

export default MainHome;