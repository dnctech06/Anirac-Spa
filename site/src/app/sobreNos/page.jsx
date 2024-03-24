"use client";
import '../../../public/js/cookie';
import Navbar from '@/components/a_navbar';
import MidllleSobreNos from '@/components/g_midle_sobreNos';
import Footer from '@/components/c_footer';
import Header from '@/components/b_header';


const sobreNos = () => {
    return (
        <main>
            <Navbar></Navbar>
            <Header></Header>
            <MidllleSobreNos></MidllleSobreNos>
            <Footer></Footer>
        </main>
    )
};

export default sobreNos;
