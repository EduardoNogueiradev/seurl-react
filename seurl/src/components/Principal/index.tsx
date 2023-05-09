import style from './style.module.scss'
import { Aplicacao, Motivo } from '../'

export function Principal({api}: {api: any}) {
    return (
        <main className={style.principal}>
            < Aplicacao api={api}/>
            < Motivo />
        </main>
    )
}