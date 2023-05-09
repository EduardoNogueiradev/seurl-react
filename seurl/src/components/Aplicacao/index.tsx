import style from './style.module.scss'
import { Botao, Titulo } from '../'
import { Link, QrCode, List, Copy } from '@phosphor-icons/react'
import { FormEvent, useState } from 'react'

interface IAba {
    url: string,
    qrCode: string,
    menu: string
}

export function Aplicacao({api}: {api: any}) {
    const press = style.abaIconPress
    const off = style.abaIcon

    const [ abaState, setAbaState ] = useState<IAba>({
        url: press,
        qrCode: off, 
        menu: off,
    });
    
    function toggleClassUrl() {
        const updateState = {...abaState}

        updateState.url = press
        updateState.qrCode = off
        updateState.menu = off

        setAbaState(updateState)
    }

    function toggleClassQrCode() {
        const updateState = {...abaState}

        updateState.url = off
        updateState.qrCode = press
        updateState.menu = off

        setAbaState(updateState)
    }

    function toggleClassMenu() {
        const updateState = {...abaState}

        updateState.url = off
        updateState.qrCode = off
        updateState.menu = press

        setAbaState(updateState)
    }

    const [ text, setText ] = useState('')

    const [ url, setUrl ] = useState('')
    const [ consulta, setConsulta ] = useState('') 

    async function createConsulta(event: FormEvent) {
        event.preventDefault()

        if ( url.length === 0) {
            return
        }

        await api.post('createlink', {
            url
        }).then(Response => (
            setConsulta(Response.data)
        ))
    }

    return (
            <section className={style.app}>
                <div className={style.appAba}>
                    <button onClick={toggleClassUrl} className={abaState.url}>
                        < Link size={24} />
                    </button>
                    <button onClick={toggleClassQrCode} className={abaState.qrCode}>
                        < QrCode size={24} />
                    </button>
                    <button onClick={toggleClassMenu} className={abaState.menu}>
                        < List size={24} />
                    </button>
                </div>
                <form 
                    onSubmit={createConsulta}
                    className={style.appForm} 
                >
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
                            onChange={event => setUrl(event.target.value)}
                        />
                        < Botao
                            width={"16vw"}
                            type="submit"
                            text="Criar"
                        />
                    </div>
                    { consulta.length == 0 ? '' :
                    <>
                        <p className={style.resultText}> Url encurtada!</p>
                        <div className={style.formCont}>
                            <input
                                className={style.formInput}
                                value={consulta}
                            />
                            <button 
                                type='button' 
                                className={style.formButton}
                                onClick={ () => 
                                    {
                                        navigator.clipboard.writeText(consulta)
                                        setText("copied")
                                    }
                                }
                            >
                                {text ? "Copiado!" : <Copy size={20}/>}
                            </button>
                        </div>
                        </>
                    }
                </form>
            </section>
    )
}