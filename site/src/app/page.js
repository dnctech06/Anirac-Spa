'use client';
import Navbar from '@/components/a_navbar';
import MainHome from '@/components/d_main_home';
import Footer from '@/components/c_footer';
import style from './style.css';
import Carrossel from '@/components/b_header_carrossel/Carrocel';



export default function Home() {
  return (
    <main >      
      <Navbar></Navbar>
      <Carrossel></Carrossel>
      <MainHome></MainHome>
      <Footer></Footer>

    </main>
  );
}
