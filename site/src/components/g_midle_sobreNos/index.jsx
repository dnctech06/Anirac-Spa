import Image from 'next/image';
import FotoAbout from '../../assets/img/espaco/1.jpg';
import firstFounder from '../../assets/img/espaco/23.svg'
import secondFounder from '../../assets/img/espaco/23.svg'

import style from './style.css';

const MidllleSobreNos = () => {
    return (
        <main>
            <div>
                <div className='aboutUs'>
                    <div className='aboutText'>
                        <h3>Sobre nos</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br />
                        when an unknown printer took a galley of type and scrambled it to make a type <br />
                        specimen book. It has survived not only five centuries, but also the leap <br />
                        into electronic typesetting, remaining essentially unchanged. It was popularised <br />
                        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, <br />
                        and more recently with desktop publishing software like Aldus PageMaker including <br />
                        versions of Lorem Ipsum.</p>

                    </div>
                    <div className='aboutImg'>
                        <Image src={FotoAbout} alt="Foto render" width={480}/>
                    </div>
                </div>
                <div className='firstfounder'>
                    <div>
                    <Image src={secondFounder} alt="Foto render" width={480}/>
                        
                    </div>
                    <div className='aboutText'>
                        <h3>Primeira fundadora</h3>
                        <p>Lorem Ipsum is simply dummy text of the <br />
                        printing and typesetting industry. Lorem Ipsum <br />
                        has been the industry's standard dummy text <br />
                        ever since the 1500s, when an unknown printer <br />
                        took a galley of type and scrambled it to make <br />
                        a type specimen book. It has survived not only <br />
                        five centuries, but also the leap into electronic <br />
                        typesetting, remaining essentially unchanged. <br />
                        It was popularised in the 1960s with the release <br />
                        of Letraset sheets containing Lorem Ipsum passages, <br />
                        and more recently with desktop publishing software <br />
                        like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        
                    </div>
                </div>
                <div className='secondfounder'>
                    <div className='aboutText'>
                        <h3>Segunda fundadora</h3>
                        <p>Lorem Ipsum is simply dummy text of the <br />
                        printing and typesetting industry. Lorem Ipsum <br />
                        has been the industry's standard dummy text <br />
                        ever since the 1500s, when an unknown printer <br />
                        took a galley of type and scrambled it to make <br />
                        a type specimen book. It has survived not only <br />
                        five centuries, but also the leap into electronic <br />
                        typesetting, remaining essentially unchanged. <br />
                        It was popularised in the 1960s with the release <br />
                        of Letraset sheets containing Lorem Ipsum passages, <br />
                        and more recently with desktop publishing software <br />
                        like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    </div>
                    <div>
                        <Image src={firstFounder} alt="Foto render" width={480}/>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MidllleSobreNos;