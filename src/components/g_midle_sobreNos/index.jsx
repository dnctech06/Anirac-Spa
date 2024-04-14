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
                        <p>Carina acumulou experiência profissional em diferentes setores, incluindo administração industrial e comércio, 
                            onde teve contato diário com clientes. Percebeu a importância de dar atenção ao próximo e começou a buscar 
                            formações, começando pela de nail designer. Uma mudança de trabalho a levou à formação de auxiliar de 
                            fisioterapia, despertando um interesse pelo cuidado do outro ao lidar com a incapacidade de um familiar. 
                            Como cuidadora diária, percebeu que sua paixão é proporcionar bem-estar em níveis físicos e mentais. Após 
                            perder esse familiar, teve a oportunidade de iniciar uma nova formação em massagem estética e bem-estar, 
                            onde aprimorou sua paixão pela estética como forma de auto-cuidado e devolução de autoestima.
                        </p>
                    </div>
                </div>
                <div className='secondfounder'>
                    <div className='aboutText'>

                        <h3>SUSANA CARINA</h3><br />
                        <p>
                            Encantada com o poder do toque em suas massagens, mesmo sem formação formal, despertou uma paixão pelo cuidado
                            pelo outro. Com a pandemia, decidiu seguir seu coração e se dedicar às terapias de bem-estar, estudando
                            medicinas orientais e o impacto emocional no corpo. Apaixonada pelo autoconhecimento, vê cada corpo como
                            uma história a ser descoberta, oferecendo não apenas alívio físico, mas também orientação para a libertação
                            emocional. Amante da natureza, encontra conforto na chuva e usa ervas como aliadas em seu trabalho. Produz
                            tochas naturais, vaporizações de ervas e sais de banho, sempre em busca de conexão espiritual e autoconhecimento através da medicina ancestral e cristais preciosos.
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