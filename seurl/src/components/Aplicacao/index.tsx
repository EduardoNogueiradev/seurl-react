import style from './style.module.scss'
import Botao from '../Botao';
import Titulo from '../Titulo'
import { Link, QrCode, List } from '@phosphor-icons/react'
import { useState } from 'react';

interface IAba {
    link: string,
    qrCode: string,
    menu: string
}

export default function aplicacao() {
    const press = style.abaIconPress
    const off = style.abaIcon

    const [ abaState, setAbaState ] = useState<IAba>({
        link: press,
        qrCode: off, 
        menu: off,
    });
    
    function toggleClassLink() {
        const updateState = {...abaState}

        updateState.link = press
        updateState.qrCode = off
        updateState.menu = off

        setAbaState(updateState)
    }

    function toggleClassQrCode() {
        const updateState = {...abaState}

        updateState.link = off
        updateState.qrCode = press
        updateState.menu = off

        setAbaState(updateState)
    }

    function toggleClassMenu() {
        const updateState = {...abaState}

        updateState.link = off
        updateState.qrCode = off
        updateState.menu = press

        setAbaState(updateState)
    }
    console.log("renderizou")
    
    return (
            <section className={style.app}>
                <div className={style.appAba}>
                    <button onClick={toggleClassLink} className={abaState.link}>
                        < Link size={24} />
                    </button>
                    <button onClick={toggleClassQrCode} className={abaState.qrCode}>
                        < QrCode size={24} />
                    </button>
                    <button onClick={toggleClassMenu} className={abaState.menu}>
                        < List size={24} />
                    </button>
                </div>
                <form className={style.appForm} action="">
                    < Titulo 
                        text="Encurte seu link"
                        fontSize='1.5rem'
                    />
                    <p className={style.formText}>
                        Crie seu link encurtado facilitando a memorização,
                        estética e o compartilhamento!
                    </p>
                    <div className={style.formCont}>
                        <input  
                            className={style.formInput} 
                            type="url" 
                            name="url" 
                            placeholder="Coloque seu link aqui" 
                            required
                        />
                        < Botao
                            type="submit"
                            text="Criar"
                        />
                    </div>
                </form>
            </section>
    )
}