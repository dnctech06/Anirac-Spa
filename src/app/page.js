'use client';
import '../../public/js/cookie';
import style from './style.css';
import Navbar from '@/components/a_navbar';
import MainHome from '@/components/d_main_home';
import Footer from '@/components/c_footer';
import Carrossel from '@/components/b_header_carrossel';



export default function Home() {
  return (
    <main >      
      <Navbar></Navbar>
      <MainHome></MainHome>
      <Carrossel></Carrossel>
      <Footer></Footer>
    </main>
  );
}
