import Image from 'next/image';
import style from './style.css';
import Foto1 from '../../assets/img/espaco/4.png';
import Foto2 from '../../assets/img/espaco/10.png';
import Foto3 from '../../assets/img/espaco/37.jpg';
<style>
import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap')
</style>

const MainHome = () => {
    return(
        <main>
            <div className='whoWeAre'>
                <div className='txt'>
                    <h3>Quem somos?</h3>
                    <p>Corpo mente e alma, este é o nosso lema.<br/> 
                    Tratamos o individuo como um todo.<br/><br/>
                    O nosso espaço oferece diversos serviços,<br/>
                    massagens terapêuticas, massagens bem estar,<br/>
                    massagens orientais, osteopatia, osteopatia pediátrica,<br/>
                    mesoterapia, tratamentos estéticos, estética avançada,<br/>
                    drenagem linfática, hidrolinfa, lifting pestanas,<br/>
                    tratamentos de rosto, limpeza de pele profunda,<br/>
                    pedicure, manicure, gel e verniz de gel, reflexologia,<br/>
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