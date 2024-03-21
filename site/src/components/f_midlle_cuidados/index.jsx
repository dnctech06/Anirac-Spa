import style from './style.css';
import Div from './div';
import Div2 from './div2';
import Div3 from './div3';
import Div4 from './div4';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { useEffect } from 'react';

const MidllleCuidados = () => {
    // Adicionar indicador de carregamento ao carregar a página
    useEffect(() => {
        // Exibir indicador de carregamento
        Loading.dots('Aguarde...');

        // Remover indicador de carregamento após 4 segundos
        const timer = setTimeout(() => {
            Loading.remove();
        }, 2500);

        return () => {
            clearTimeout(timer); // Limpar o temporizador quando o componente for desmontado
        };
    }, []);

    return(
        <main className='Full_MidllleCuidados'>
            <Div></Div>
            <Div2></Div2>
            <Div3></Div3>
            <Div4></Div4>
        </main>
    );
}

export default MidllleCuidados;
