'use client';
import Navbar from '@/components/a_navbar';
import Header from '@/components/b_header';
import MainHome from '@/components/d_main_home';
import Footer from '@/components/c_footer';
import style from './style.css';




export default function Home() {
  return (
    <main >      
       <Navbar></Navbar>
      <Header></Header>
      <MainHome></MainHome>
      <Footer></Footer>

    </main>
  );
}
