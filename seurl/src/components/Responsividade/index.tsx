import style from './style.module.scss'
import { Titulo } from '../';

export function Responsividade() {
    return (  
        <section className={style.responsividade}>
            <Titulo
                text='Tudo isso na palma da sua mão'
            />
            <p className={style.responsividadeText}>
                Nosso site possui responsividade e pode ser usado na plataforma desktop,
                tablet e mobile. Obtendo fácil acesso aos nossos recursos e 
                serviços, basta ter um dispositivo conectado à internet.
            </p>
            <img 
                src="./img/resp-vetor.png" 
                alt="Pc, Tablet e celular"
            />
        </section>

    );
}
