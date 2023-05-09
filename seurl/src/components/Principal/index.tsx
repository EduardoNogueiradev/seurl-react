import Aplicacao from "../Aplicacao";
import Motivo from './Motivo'
import style from './style.module.scss'

export default function principal() {
    return (
        <main className={style.principal}>
            < Aplicacao/>
            < Motivo />
        </main>
    )
}