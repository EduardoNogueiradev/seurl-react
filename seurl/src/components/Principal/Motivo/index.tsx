import { ArrowDown } from '@phosphor-icons/react'
import style from './style.module.scss'

export default function motivo() {
    return (
        <article className={style.motivo}>
            <img 
                className={style.motivoImagem} 
                src="./img/motivo-vetor.png" 
                alt="vetor moça com dúvidas" 
            />
            <div className={style.motivoCont}>
                <h1 className={style.motivoTitle}>Por que usar um encurtador?</h1>
                <p className={style.motivoText}>
                    Ao encurtar um link você desfruta de diversas vantagens que
                    disponibilizamos em nossa plataforma! Além de deixar seu link 
                    curto, podes monitorá-lo e usar isso ao seu favor!
                </p>
                <div className={style.contRecursos}>
                    <p>Veja nossos recursos</p>
                    < ArrowDown size={18} className={style.contIcon} />
                </div>
            </div>  
        </article>      
    )
}