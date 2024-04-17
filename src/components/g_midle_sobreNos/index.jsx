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
                        <p>Carina adquiriu experiência profissional em diferentes setores, incluindo administração industrial e comércio,
                             onde teve conctato diário com clientes. Percebeu a importância de dar atenção ao próximo e começou a fazer 
                             formações, inicialmente em nail designer. Uma mudança de trabalho levou-a à formação de auxiliar de 
                             fisioterapia, despertando um interesse pelo cuidado do outro ao lidar com a incapacidade de um familiar. 
                             Como cuidadora diária, percebeu que a sua paixão é proporcionar bem-estar a nível físico e mental. Iniciou 
                             uma nova formação em massagem estética e bem-estar, onde aprimorou sua paixão pela estética como forma de 
                             auto-cuidado e devolução de autoestima.
                        </p>
                    </div>
                </div>
                <div className='secondfounder'>
                    <div className='aboutText'>

                        <h3>SUSANA CARINA</h3><br />
                        <p>
                        Encantada com o poder do seu toque em massagens nos familiares, despertou uma paixão pelo cuidado pelo outro. 
                        Decidiu seguir o seu coração e se dedicar às terapias de bem-estar, estudando medicinas orientais e o impacto 
                        emocional no corpo e fazendo formações em massagens e terapias integrativas. Apaixonada pelo autoconhecimento, 
                        vê cada corpo como uma história a ser descoberta, oferecendo não apenas alívio físico, mas também orientação para 
                        a libertação emocional. Amante da natureza, encontra conforto na chuva e usa ervas, cristais e óleos essenciais 
                        como aliados no seu trabalho. Produz tochas naturais, vaporizações de ervas e sais de banho, sempre em busca de 
                        conexão espiritual e autoconhecimento.
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