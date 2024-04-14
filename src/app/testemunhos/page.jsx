"use client"
import style from './style.css'
import React, { useEffect } from 'react';
import '../../../public/js/cookie';
import Image from 'next/image';
import Navbar from '@/components/a_navbar';
import Footer from '@/components/c_footer';
import F1 from '../../assets/img/espaco/30.jpg'
import F2 from '../../assets/img/espaco/14.jpg'
import F3 from '../../assets/img/espaco/5.jpg'
import F4 from '../../assets/img/espaco/13.jpg'
import F5 from '../../assets/img/espaco/31.jpg'
import Aspas from '../../assets/img/servicos/aspas.png'


const Testemunho = () => {


    return (
        <>
            <Navbar></Navbar>
            <div className='TesteTitle'>
                <h1>Cada pessoa é única e merece um atendimento personalizado e privado de acordo com a sua necessidade.
                    O nosso principal objetivo é assegurar a satisfação e bem estar de todos os clientes. </h1>
            </div>
            <div class="sectionThree">
                <Image className='ImgCardTest' src={F4} alt="Foto espaço Anirac" />

                <div class="info">
                    <Image className='ImgAspas' src={Aspas} alt="Foto icone aspas" />
                    <p>
                        "Nunca uma viagem Braga-Barcelos me fez tão bem. Na Anirac encontrei um local onde a dedicação foi máxima.
                        O foco no cliente e nas suas reais necessidades estão mesmo no vosso DNA pois foi isso que senti durante o
                        tratamento. Sai do vosso espaço uma pessoa nova e revigorada. Obrigado pelo trabalho que prestam e por valorizarem
                        todos que por aí passam. Voltarei, sem dúvidas, e recomendo os vossos serviços a todos."
                    </p>
                    <h1>AUTOR</h1>
                </div>
            </div>
            <div class="sectionTwo">
                <Image className='ImgCardTest' src={F1} alt="Foto espaço Anirac" />

                <div class="info">
                    <Image className='ImgAspas' src={Aspas} alt="Foto icone aspas" />
                    <p>
                        "O que eu posso dizer destas meninas e profissionais!!! São excelentes profissionais e acima de tudo são uns
                        corações de luz! O carinho com que nos recebem faz o dia ser diferente, a leveza com que se fica quando se está
                        com elas é inexplicável. Como profissionais da mesma área e colegas de profissão recomendo os serviços e terapias
                        que elas têm e que eu sempre que necessito também recorro. São uns seres de luz maravilhosas!!! Um beijinho
                        grande minhas lindas."
                    </p>
                    <h1>AUTOR</h1>
                </div>
            </div>

            <div class="sectionThree">
                <Image className='ImgCardTest' src={F2} alt="Foto espaço Anirac" />
                <div class="info">
                    <Image className='ImgAspas' src={Aspas} alt="Foto icone aspas" />
                    <p>
                        "Os vossos serviços primam pela vossa atenção e cuidado com que nos recebem no vosso maravilhoso cantinho de bem estar.
                        Um espaço que nos permite desligar do caos que  existe fora e vossos cuidados/tratamentos permitem uma reconexao interior
                        e uma viagem de sensações que nos transportam para outra dimensão, onde é possível encontrar paz e uma enorme sensação de
                        bem estar. Mas melhor de tudo é o enorme e rasgado sorriso que nos dão à chegada e o abraço caloroso que nos envolve
                        à saída e alimenta a vontade de regressar!"
                    </p>
                    <h1>AUTOR</h1>
                </div>
            </div>

            <div class="sectionTwo">
                <Image className='ImgCardTest' src={F3} alt="Foto espaço Anirac" />
                <div class="info">
                    <Image className='ImgAspas' src={Aspas} alt="Foto icone aspas" />
                    <p>
                        "Numa das piores fases porque estou a passar recorri as vossas terapias por aconselhamento de uma amiga e
                        não me arrependo nenhum segundo. As vossas terapias ajudaram-me a encontrar o equilíbrio e orientação para
                        conseguir gerir e olhar para as situações mais complicadas de forma mais simples. Recomendo 100%."
                    </p>
                    <h1>AUTOR</h1>
                </div>
            </div>
            <div class="sectionThree">
                <Image className='ImgCardTest' src={F5} alt="Foto espaço Anirac" />
                <div class="info">
                    <Image className='ImgAspas' src={Aspas} alt="Foto icone aspas" />
                    <p>
                        "A minha experiência na Anirac é puro amor próprio. A maneira como sou recebida e tratada é o espelho do que a 
                        Anirac é, gentileza, cuidado, generosidade, carinho, empatia, acima de tudo nota-se que é feita do amor de
                         duas pessoas maravilhosas, que põem o melhor delas , todos os dias, a dispor do outro. Adoro receber as 
                         mensagens maravilhosas, que me fazem sentir noutra dimensão, que me fazem sentir que estou a cuidar do 
                         meu corpo e da minha alma, que me fazem sentir que massagem não é um luxo é sim uma necessidade para nós
                          sentirmos bem conosco e de nós cuidarmos e olharmos para dentro e dizer "calma, o ritmo tem de abrandar, 
                          agora é o teu momento, desfruta". Se tivemos um bom dia ou um dia menos bom, uma massagem é sempre uma boa 
                          ideia, é saúde gente!
                        Obrigado pela Anirac meninas, nós precisávamos tanto dela e nem sabíamos."
                    </p>
                    <h1>AUTOR</h1>
                </div>
            </div>


            <Footer></Footer>
        </>
    )
};

export default Testemunho;
