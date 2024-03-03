"use client";
import Navbar from '@/components/a_navbar';
import MidllleCuidados from '@/components/f_midlle_cuidados';
import Footer from '@/components/c_footer';
import style from './style.css';

const Cuidados= () => {
    return(
        <main>
            <Navbar></Navbar>
            <MidllleCuidados></MidllleCuidados>
            <Footer></Footer>
        </main>
    )
};

export default Cuidados;