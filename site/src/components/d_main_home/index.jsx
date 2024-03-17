import Image from 'next/image';
import style from './style.css';
import Foto1 from '../../assets/img/espaco/colagem.png';
<style>
    import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap')
</style>

const MainHome = () => {
    return (
        <main>
            <div className='whoWeAre'>
                <div className='txt'>
                    <h3>Quem somos?</h3>
                    <p>Corpo mente e alma, este é o nosso lema.
                        Tratamos o individuo como um todo.
                        O nosso espaço oferece diversos serviços,
                        massagens terapêuticas, massagens bem estar,
                        massagens orientais, osteopatia, osteopatia pediátrica,
                        mesoterapia, tratamentos estéticos, estética avançada,
                        drenagem linfática, hidrolinfa, lifting pestanas,
                        tratamentos de rosto, limpeza de pele profunda,
                        pedicure, manicure, gel e verniz de gel, reflexologia,
                        Reik com toque terapêutico.</p>

                </div>

                <div className='imageswho'>
                    <div>
                        <Image id='foto1' className='ImgWho' src={Foto1} alt="Foto render" />

                    </div>
                </div>
            </div>
        </main>
    )
}

export default MainHome;