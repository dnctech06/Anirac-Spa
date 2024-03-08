import style from './style.css';
import Carrocel from './Carrocel'
  
  

const Header = () => {
    return(
        <main className='carrocel'>
            <div className='conteudo'>
                <Carrocel/>
            </div>
            <div className='conteudo'>
                <h4>
                Lorem ipsum dolor sit amet, consectetu<br/>
                <br/>
                erat, vel vestibulum diam. Curabitur sed<br/>
                arcu sodales massa gravida rhoncus. N<br/>
                <br/>
                it. Nunc efficitur sapien quam, quis hendr<br/>
                erit justo egestas sed. Quisque mollis feli<br/>
                <br/>
                <br/>
                Quisque faucibus erat ac mi interdum gravida.<br/>
                Nunc blandit ante non lorem aliquam consequat.<br/>
                </h4>
            </div>
        </main>
    )
}

export default Header;