"use client";
import Navbar from '@/components/a_navbar';
import MidllleContatos from '@/components/e_midlle_contatos';
import Footer from '@/components/c_footer';
import style from './style.css';



const Contatos= () => {
    return(
        <main>
            <Navbar></Navbar>
            <MidllleContatos></MidllleContatos>
            <Footer></Footer>
        </main>
    )
};

export default Contatos;