"use client";
import Navbar from '@/components/a_navbar';
import MidllleContatos from '@/components/e_midlle_contatos';
import Footer from '@/components/c_footer';
import Form from '@/components/h_form';
import style from './style.css';



const Contatos= () => {
    return(
        <main>
            <Navbar></Navbar>
            <Form></Form>
            <MidllleContatos></MidllleContatos>
        </main>
    )
};

export default Contatos;