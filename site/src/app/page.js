'use client';
import Navbar from '@/components/a_navbar';
import Header from '@/components/b_header';
import MainHome from '@/components/d_main_home';
import Footer from '@/components/c_footer';
import style from './style.css';



export default function Home() {
  return (
    <main >
      <div className='um' >ola mundo</div>
      <div className='dois' >ola mundo</div>
      <div className='tres' >ola mundo</div>

      
      <Navbar></Navbar>
      <Header></Header>
      <MainHome></MainHome>
      <Footer></Footer>
    </main>
  );
}
