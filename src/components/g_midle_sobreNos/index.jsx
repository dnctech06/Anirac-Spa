import Image from 'next/image';
import FotoAbout from '../../assets/img/espaco/1.jpg';
import firstFounder from '../../assets/img/fundadoras/anaCarina.JPG'
import secondFounder from '../../assets/img/fundadoras/susanaCarina.JPG'

import style from './style.css';

const MidllleSobreNos = () => {
    return (
        <main>
            <div>
                <div className='firstfounder'>
                    <div className='FouderImage'>
                        <Image src={firstFounder} className='FouderImg' alt="Foto render" width={480} />

                    </div>
                    <div className='aboutText'>
                        <h3>ANA CARINA</h3>
                        <p>A cada formação e atendimento feito
                            aprimora ainda mais a sua paixão pela
                            estética como auto-cuidado e devolução
                            de auto-estima aprimora ainda mais a sua
                            paixão pela estética como auto-cuidado e
                            devolução de auto-estima.
                        </p>
                    </div>
                </div>
                <div className='secondfounder'>
                    <div className='aboutText'>

                        <h3>SUSANA CARINA</h3><br />
                        <p>
                            Apaixonada pelo autoconhecimento e
                            viciada por decifrar a história de cada corpo,
                            auxilia na tomada de consciência de cada
                            um, como uma forma de orientação para a
                            libertação de cada individuo.

                        </p>

                    </div>
                    <div className='FouderImage'>
                        <Image src={secondFounder} className='FouderImg' alt="Foto render" width={480} />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MidllleSobreNos;