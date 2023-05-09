import style from './style.module.scss'
import Botao from '../Botao'
import Titulo from '../Titulo'

export default function inicio() {

    return(
        <section className={style.inicio}>
            <div className={style.inicioBox}>
                <img 
                    className={style.boxImage} 
                    src="./img/inicio-vetor-encurtador.png" 
                    alt="Vetor de encurtador"
                ></img>

                <div>
                    <Titulo 
                        text='Comece a usar agora nosso'
                    />
                    <Titulo 
                        text='Encurtador de links'
                        color='#4F52FF'
                        fontSize='2rem'
                        lineHeight='38px'
                    />

                    <p className={style.boxText}>
                        Encurte links de diversos lugares e utilize vários
                        recursos e vantagens que disponibilizamos para você
                    </p>

                    <div className={style.boxButton}>
                        <Botao 
                            text='Encurtar'
                            width='48%'
                        />
                        <Botao 
                            text="Monitorar"
                            background='#fff'
                            color='#01A6BA'
                            border="1px solid #01A6BA"
                            width='48%'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}