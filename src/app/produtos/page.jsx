"use client";
import '../../../public/js/cookie';
import Navbar from '@/components/a_navbar';
import Footer from '@/components/c_footer';
import style from './style.css';

const Produtos = () => {
    return (
        <>
            <Navbar />
            <div className='ProdutosTitile'> 
                <h1>Apenas disponíveis em loja física.</h1>
            </div>
            <Footer />
        </>
    );
};

export default Produtos;
