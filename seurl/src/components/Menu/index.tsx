import style from './style.module.scss'
import { List, X } from "@phosphor-icons/react"
import { useState } from 'react'

export function Menu() {

    const [btnState, setbtnState] = useState(false)

    function alterarClasse() {
        setbtnState(btnState => !btnState)
    }

    const toggleNav = btnState ? style.menuNavOn : style.menuNav;
    const toggleIconMenu = btnState ? style.menuIconHidden : style.menuIcon;
    const toggleIconX = btnState ? style.menuIconTransform : style.menuIconHidden;

    return (
        <header>
            <nav className={style.menu}>
                <h1 className={style.logo}>
                    <a href="https://seurl.com.br">
                        <img src="./img/logo-seurl.png" alt="Logo do site"/>
                    </a>
                </h1>
                <button 
                    id="buttonMenu" 
                    className={style.menuButton}
                    onClick={alterarClasse}
                >
                    <List 
                        size={32} 
                        className={toggleIconMenu} 
                    />
                    < X 
                        size={32}
                        className={toggleIconX}
                    / >
                </button>

                <ul
                    className={toggleNav}>
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Recursos</li>
                    <li>Contato</li>
                </ul>
            </nav>
        </header>
    )
}