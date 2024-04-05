import style from './style.css';
import Div from './div';
import Div3 from './div3';
import Div4 from './div4';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { useEffect } from 'react';

const MidllleCuidados = () => {
    useEffect(() => {
        
        Loading.dots('Aguarde...');
        const timer = setTimeout(() => {
            Loading.remove();
        }, 2500);

        return () => {
            clearTimeout(timer); 
        };
    }, []);

    return(
        <main className='Full_MidllleCuidados'>
            <Div></Div>
            <Div3></Div3>
            <Div4></Div4>
        </main>
    );
}

export default MidllleCuidados;
